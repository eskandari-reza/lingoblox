/* module: Community — real-user leaderboard, friends, 1v1 duels, weekly contest, wall comments + reactions (needs the social service via the gateway + a signed-in account) */
(()=>{
const R=window.RM2,{esc,ST,D,W,show}=R,v=()=>R.view(),A=()=>R.act,tt=k=>A().tt(k);
const http=K.get('http'),auth=K.get('auth'),cfg=K.get('config');
const AV=['🙂','😎','🦁','🐱','🐼','🦊','🐲','🧑‍🎓','👩‍🎓','🚀','🌟','🎧','🦉','🐬','🦄','🔥'];
let TAB='top',SC='global',ME=null;
const online=()=>!!cfg.get('api')&&!!auth.state();
const lg=t=>A().LEAGUES[A().leagueOf(t)][1];
const ago=t=>{const s=(Date.now()-t)/1000;return s<60?'now':s<3600?Math.floor(s/60)+'m':s<86400?Math.floor(s/3600)+'h':Math.floor(s/86400)+'d'};
const left=ms=>{const s=Math.max(0,(ms-Date.now())/1000);return Math.floor(s/86400)+'d '+Math.floor(s%86400/3600)+'h'};
/* ---- deterministic quiz (same seed => same concepts for everybody; shown in each user's own language pair) ---- */
function rng(seed){let a=0;for(const ch of seed)a=(a*31+ch.charCodeAt(0))>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function questions(seed,n){const r=rng(seed),pool=D.sk.units.filter(u=>['A1','A2','B1'].includes(u[1])).flatMap(u=>u[2]);const ok=c=>W(ST.tgt,c)&&W(ST.src,c);
  const pick=()=>{for(let k=0;k<50;k++){const c=pool[Math.floor(r()*pool.length)];if(ok(c))return c}return pool.find(ok)};const Q=[];
  for(let i=0;i<n;i++){const c=pick(),tm=i%2===0,f=d=>tm?show(ST.src,d):show(ST.tgt,d),opts=[c];let g=0;while(opts.length<4&&g++<60){const d=pick();if(!opts.includes(d)&&f(d)!==f(c))opts.push(d)}
    for(let k=opts.length-1;k>0;k--){const j=Math.floor(r()*(k+1));[opts[k],opts[j]]=[opts[j],opts[k]]}Q.push({c,q:tm?show(ST.tgt,c):show(ST.src,c),tm,opts:opts.map(d=>({d,t:f(d)}))})}return Q}
function playQuiz(seed,done){const Q=questions(seed,10),o=document.createElement('div');o.className='reel pq soq';o.dataset.rth='aurora';let i=0,score=0,t0=Date.now(),tm=0;
  document.body.appendChild(o);document.body.style.overflow='hidden';
  const dir=(D.P[ST.tgt]||{}).dir||'ltr',close=()=>{clearTimeout(tm);o.remove();document.body.style.overflow=''};
  const step=()=>{if(i>=Q.length){const ms=Date.now()-t0;o.innerHTML=`<div class="gp" style="align-items:center;text-align:center;background:linear-gradient(160deg,var(--g0))"><div style="font-size:64px">🏁</div><h1>${score}</h1><div class="mu2">${esc(tt('so_score'))}</div><div id="sqm" class="mu2">…</div></div>`;done(score,ms,m=>{o.querySelector('#sqm').innerHTML=m||'';setTimeout(close,m?2600:900)});return}
    const q=Q[i];let rem=10;o.innerHTML=`<button class="rclose" id="sqx">✕</button><div class="pqb">${i+1}/${Q.length} · ⭐ ${score}</div><div class="gp" style="background:linear-gradient(160deg,var(--g${i%6}))"><div class="prog" style="background:#fff3"><i id="sqt" style="width:100%;background:#fbbf24;transition:width 1s linear"></i></div><div class="pqq" dir="${q.tm?dir:'auto'}">${esc(q.q)}</div><div class="pqo">${q.opts.map(x=>`<button data-d="${x.d}" dir="${q.tm?'auto':dir}">${esc(x.t)}</button>`).join('')}</div></div>`;
    o.querySelector('#sqx').onclick=close;let fin=0;
    const end=(good,btn)=>{if(fin)return;fin=1;clearTimeout(tm);if(good)score+=60+Math.round(40*rem/10);o.querySelectorAll('[data-d]').forEach(b=>{if(+b.dataset.d===q.c)b.classList.add('ok');else if(b===btn)b.classList.add('no')});setTimeout(()=>{i++;step()},700)};
    o.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>end(+b.dataset.d===q.c,b));
    requestAnimationFrame(()=>{const bar=o.querySelector('#sqt');if(bar)bar.style.width='0%'});
    const tick=()=>{rem--;if(rem<=0)return end(false);tm=setTimeout(tick,1000)};tm=setTimeout(tick,1000)};
  step()}
/* ---- wall modal ---- */
async function wall(t,title){const m=document.createElement('div');m.className='modal';document.body.appendChild(m);
  const draw=async()=>{const r=await http.get('/v1/social/wall?t='+encodeURIComponent(t));const rc=r.react||{};
    m.innerHTML=`<div class="sheet"><div class="row"><b class="sp">${esc(title)}</b><button class="ib" data-x>✕</button></div><div class="rxr">${['👍','❤️','🔥','👏','😂','🎉'].map(e=>`<button data-e="${e}">${e} ${rc[e]||''}</button>`).join('')}</div>
    <div class="wl">${(r.list||[]).map(c=>`<div class="wc"><span>${esc(c.by.avatar||'🙂')}</span><div><b>${esc(c.by.nick)}</b> <small>${ago(c.at)}</small><div>${esc(c.txt)}</div></div></div>`).join('')||`<div class="mu">${esc(tt('so_none'))}</div>`}</div>
    <div class="row"><input type="text" id="wt" maxlength="280" style="flex:1"><button class="btn sm" id="ws">${esc(tt('so_send'))}</button></div></div>`};
  await draw();
  m.onclick=async e=>{if(e.target===m||e.target.closest('[data-x]'))return m.remove();const b=e.target.closest('[data-e]');
    if(b){await http.post('/v1/social/react',{t,e:b.dataset.e});A().pts('react',t);return draw()}
    if(e.target.closest('#ws')){const x=m.querySelector('#wt').value.trim();if(!x)return;const r=await http.post('/v1/social/wall',{t,text:x});if(r.ok){A().pts('comment',Date.now());draw()}}}}
/* ---- screens ---- */
function need(){v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>🌐 ${esc(tt('so_t'))}</h2></div><div class="card">${esc(tt('so_need'))}<br><br><button class="btn" id="ac">${esc(tt('so_acct'))}</button></div>`;
  v().querySelector('#bk').onclick=R.home;v().querySelector('#ac').onclick=()=>{const t=R.tiles.find(x=>x.icon==='☁️');t&&t.open()}}
async function open(){
  if(!online())return need();
  v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>🌐 ${esc(tt('so_t'))}</h2></div><div class="mu">…</div>`;v().querySelector('#bk').onclick=R.home;
  const c=A().cup(),rp=await http.post('/v1/social/report',{cups:c.cups});if(!rp.ok){if(rp.err==='auth'||rp.status===401){return need()}v().querySelector('.mu').textContent='✕ '+(rp.err||'');return}
  const me=await http.get('/v1/social/me');if(!me.ok)return;ME=me.me;A().setDuel(rp.me.duel);ME.total=rp.me.total;ME.duel=rp.me.duel;draw()}
function head(){return`<div class="hd"><button class="back" id="bk">←</button><h2>🌐 ${esc(tt('so_t'))}</h2></div>
  <div class="card soh"><button class="soa" id="pe">${esc(ME.avatar||'🙂')}</button><div class="sp"><b>${esc(ME.nick)}</b><div class="mu sm">${lg(ME.total)} 🏆 ${ME.total}</div></div><div class="soc"><small>${esc(tt('so_code'))}</small><b id="cc">${esc(ME.code)}</b></div></div>
  <div class="chips">${[['top','🏅','so_top'],['duels','⚔️','so_duels'],['contest','🏁','so_contest'],['fr','👥','so_friends']].map(([k,i,t])=>`<button class="chip ${TAB===k?'on':''}" data-t="${k}">${i} ${esc(tt(t))}</button>`).join('')}</div><div id="sb"></div>`}
function draw(){v().innerHTML=head();v().querySelector('#bk').onclick=R.home;v().querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{TAB=b.dataset.t;draw()});
  v().querySelector('#cc').onclick=async e=>{try{await navigator.clipboard.writeText(ME.code);e.target.textContent=ME.code+' ✓'}catch(x){}};
  v().querySelector('#pe').onclick=profile;({top:tTop,duels:tDuels,contest:tContest,fr:tFriends}[TAB])()}
function profile(){const m=document.createElement('div');m.className='modal';m.innerHTML=`<div class="sheet"><div class="row"><b class="sp">${esc(tt('so_nick'))}</b><button class="ib" data-x>✕</button></div><input type="text" id="pn" maxlength="20" value="${esc(ME.nick)}" style="width:100%;margin:8px 0"><div class="avg">${AV.map(a=>`<button data-a="${a}" class="${a===ME.avatar?'on':''}">${a}</button>`).join('')}</div><button class="btn" id="ps" style="width:100%;margin-top:10px">${esc(tt('so_add').slice(0,0)||'✓')}</button></div>`;
  document.body.appendChild(m);let av=ME.avatar||'🙂';
  m.onclick=async e=>{if(e.target===m||e.target.closest('[data-x]'))return m.remove();const a=e.target.closest('[data-a]');if(a){av=a.dataset.a;m.querySelectorAll('[data-a]').forEach(x=>x.classList.toggle('on',x===a));return}
    if(e.target.closest('#ps')){const r=await http.post('/v1/social/profile',{nick:m.querySelector('#pn').value,avatar:av});if(r.ok){ME.nick=m.querySelector('#pn').value.trim();ME.avatar=av;m.remove();draw()}}}}
async function tTop(){const b=v().querySelector('#sb');b.innerHTML=`<div class="chips"><button class="chip ${SC==='global'?'on':''}" data-s="global">${esc(tt('so_global'))}</button><button class="chip ${SC==='friends'?'on':''}" data-s="friends">${esc(tt('so_friends'))}</button></div><div id="tl" class="mu">…</div>`;
  b.querySelectorAll('[data-s]').forEach(x=>x.onclick=()=>{SC=x.dataset.s;tTop()});const r=await http.get('/v1/social/top?scope='+SC);const tl=b.querySelector('#tl');if(!r.ok)return tl.textContent='✕';
  tl.className='';tl.innerHTML=r.list.map(p=>`<button class="rads sor ${p.me?'me':''}" data-w="${p.id}" data-n="${esc(p.nick)}"><b class="sorn">${p.rank}</b><span class="soa2">${esc(p.avatar||'🙂')}</span><span class="radt"><b>${esc(p.nick)}</b></span><span>${lg(p.total)} ${p.total}</span></button>`).join('')||`<div class="mu">${esc(tt('so_none'))}</div>`;
  tl.onclick=e=>{const x=e.target.closest('[data-w]');if(x)wall('p:'+x.dataset.w,x.dataset.n)}}
async function tDuels(){const b=v().querySelector('#sb');b.innerHTML='<div class="mu">…</div>';const r=await http.get('/v1/social/duels');if(!r.ok)return b.textContent='✕';
  b.innerHTML=r.list.map(d=>`<div class="card sod"><div class="row"><span class="soa2">${esc(d.opp.avatar||'🙂')}</span><b class="sp">${esc(d.opp.nick)}</b>${d.st==='done'?`<b>${d.win==='me'?'🏆 '+esc(tt('so_win')):d.win==='opp'?esc(tt('so_lose')):esc(tt('so_draw'))} ${d.delta>0?'+':''}${d.delta}</b>`:''}</div>
    <div class="row"><span class="mu sm sp">${d.st==='done'?`${d.mine} : ${d.theirs}`:d.played?esc(tt('so_wait')):''}</span>${d.played?'':`<button class="btn sm" data-p="${d.id}" data-s="${esc(d.seed)}">⚔️ ${esc(tt('so_play'))}</button>`}<button class="ib" data-w="d:${d.id}" data-n="⚔️ ${esc(d.opp.nick)}">💬</button></div></div>`).join('')||`<div class="mu">${esc(tt('so_none'))}</div>`;
  b.onclick=e=>{const p=e.target.closest('[data-p]'),w=e.target.closest('[data-w]');if(w)return wall(w.dataset.w,w.dataset.n);
    if(p)playQuiz(p.dataset.s,async(s,ms,fin)=>{const x=await http.post('/v1/social/duel/play',{id:p.dataset.p,score:s,ms});A().pts('duel',p.dataset.p);fin(x.ok?(x.done?(x.win==='me'?tt('so_win'):x.win==='opp'?tt('so_lose'):tt('so_draw'))+' '+(x.delta>0?'+':'')+x.delta:tt('so_wait')):'✕');setTimeout(open,2800)})}}
async function tContest(){const b=v().querySelector('#sb');b.innerHTML='<div class="mu">…</div>';const r=await http.get('/v1/social/contest');if(!r.ok)return b.textContent='✕';
  b.innerHTML=`<div class="card"><div class="row"><b class="sp">🏁 ${esc(r.id)}</b><span class="mu sm">⏳ ${esc(tt('so_ends'))} ${left(r.ends)} · ${r.players} ${esc(tt('so_players'))}</span></div>${r.mine?`<div class="mu sm">${esc(tt('so_score'))}: <b>${r.mine.score}</b></div>`:''}<div class="row" style="margin-top:8px"><button class="btn sm" id="cp">▶ ${esc(tt('so_play'))}</button><button class="ib" id="cw">💬</button></div></div>`+r.top.map(p=>`<div class="rads sor ${p.me?'me':''}"><b class="sorn">${p.rank}</b><span class="soa2">${esc(p.avatar||'🙂')}</span><span class="radt"><b>${esc(p.nick)}</b></span><span>${p.score}</span></div>`).join('');
  b.querySelector('#cw').onclick=()=>wall('c:'+r.id,'🏁 '+r.id);
  b.querySelector('#cp').onclick=()=>playQuiz(r.seed,async(s,ms,fin)=>{const x=await http.post('/v1/social/contest/score',{id:r.id,score:s,ms});A().pts('contest',r.id);fin(x.ok?'🏁 '+s:'✕');setTimeout(tContest,2800)})}
async function tFriends(){const b=v().querySelector('#sb');b.innerHTML='<div class="mu">…</div>';const r=await http.get('/v1/social/friends');if(!r.ok)return b.textContent='✕';
  const row=(p,btn)=>`<div class="rads sor"><span class="soa2">${esc(p.avatar||'🙂')}</span><span class="radt"><b>${esc(p.nick)}</b><small class="mu"> ${lg(p.total)} ${p.total}</small></span>${btn}</div>`;
  b.innerHTML=`<div class="row"><input type="text" id="fc" placeholder="${esc(tt('so_code'))}" maxlength="12" style="flex:1"><button class="btn sm" id="fa">${esc(tt('so_add'))}</button></div>`+
  (r.incoming.length?`<h3>${esc(tt('so_req'))}</h3>`+r.incoming.map(p=>row(p,`<button class="btn sm" data-ac="${p.id}">${esc(tt('so_accept'))}</button>`)).join(''):'')+
  `<h3>${esc(tt('so_friends'))}</h3>`+(r.friends.map(p=>row(p,`<button class="ib" data-w="p:${p.id}" data-n="${esc(p.nick)}">💬</button><button class="btn sm" data-du="${p.id}">⚔️ ${esc(tt('so_ch'))}</button>`)).join('')||`<div class="mu">${esc(tt('so_none'))}</div>`)+
  (r.outgoing.length?r.outgoing.map(p=>row(p,'<span class="mu sm">⏳</span>')).join(''):'');
  b.querySelector('#fa').onclick=async()=>{const c=b.querySelector('#fc').value.trim();if(!c)return;const x=await http.post('/v1/social/friend',{code:c});if(!x.ok)alert('✕');tFriends()};
  b.onclick=async e=>{const a=e.target.closest('[data-ac]'),d=e.target.closest('[data-du]'),w=e.target.closest('[data-w]');
    if(a){await http.post('/v1/social/friend/accept',{id:a.dataset.ac});tFriends()}
    else if(d){const x=await http.post('/v1/social/duel',{to:d.dataset.du});if(x.ok){TAB='duels';draw()}else alert('✕ '+(x.err||''))}
    else if(w)wall(w.dataset.w,w.dataset.n)}}
let rt=0;K.on('cups',()=>{if(!online())return;clearTimeout(rt);rt=setTimeout(async()=>{const x=await http.post('/v1/social/report',{cups:A().cup().cups});if(x.ok&&x.me)A().setDuel(x.me.duel)},20000)});
R.tiles.push({icon:'🌐',label:()=>tt('so_t'),open});
})();
