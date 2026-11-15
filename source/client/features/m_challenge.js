/* module: Challenge — Daily (10 mixed, bonus once a day + streak), Classic, Survival (3 lives), Blitz (60 s), Duel (vs bot) */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,W,show,speak,D,ST}=R,v=()=>R.view();
const KEY='rm2ch',get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return{}}},set=o=>{try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}};
const rec=()=>{const o=get();return(o[ST.tgt]=o[ST.tgt]||{d:{last:'',streak:0,score:0,day:0},best:{}}),o};
function rng(seed){let a=0;for(const c of seed)a=(a*31+c.charCodeAt(0))>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const sh=(a,r)=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const nz=s=>R.norm(s).replace(/^(der|die|das|the|a|an|el|la|los|las|le|les|il|lo|gli|um|uma|o|a)\s+/,'').replace(/[^\p{L}\p{N}]/gu,'');
function pool(){const p=R.P(),all=R.allC().filter(c=>W(ST.tgt,c)&&W(ST.src,c)),seen=all.filter(c=>p.learned[c]||p.srs[c]);return{all:seen.length>=12?seen:all.slice(0,300),pos:c=>W(ST.tgt,c)[4]}}
function make(r,P,type){
  const c=P.all[Math.floor(r()*P.all.length)],others=sh(P.all.filter(x=>x!==c),r),opts4=t=>sh([c,...others.slice(0,3)],r).map(x=>({c:x,txt:show(t,x)}));
  if(type==='tm')return{type,c,q:show(ST.tgt,c),say:1,qd:ST.tgt,od:ST.src,opts:opts4(ST.src)};
  if(type==='mt')return{type,c,q:show(ST.src,c),qd:ST.src,od:ST.tgt,opts:opts4(ST.tgt)};
  if(type==='ls')return{type,c,q:'🔊',qd:'ltr',od:ST.src,opts:opts4(ST.src),auto:1};
  return{type:'ty',c,q:show(ST.src,c),qd:ST.src,ans:show(ST.tgt,c)}}
const TYPES={daily:['tm','mt','ls','ty','tm','mt','ls','tm','mt','ty'],classic:['tm','mt','ls','tm','mt','tm','ls','mt','tm','mt']};
function play(mode){
  const P=pool();if(P.all.length<4){v().innerHTML=hd(T('ch_t'))+`<div class="card">${esc(T('few'))}</div>`;return bk(open)}
  const o=rec(),today=R.today(),seed=mode==='daily'?today+ST.tgt+ST.src:String(Math.random()),r=rng(seed);
  const types=TYPES[mode]||TYPES.classic,N=(mode==='sv'||mode==='bz')?1e9:10;
  let i=0,ok=0,lives=3,t=60,bot=0,tm=null,bad=[],lock=0;
  const league=Math.min(8,Math.floor(R.P().xp/400)),pb=.45+league*.06;
  const end=()=>{clearInterval(tm);const R0=rec(),d=R0[ST.tgt];let bonus='';
    if(mode==='daily'){if(d.d.last!==today){const y=new Date(Date.now()-864e5).toLocaleDateString('sv');d.d.streak=d.d.last===y?d.d.streak+1:1;d.d.last=today;d.d.score=ok;R.P().xp+=30+ok*5+Math.min(d.d.streak,7)*5;bonus=T('r_dy',{n:d.d.streak})}else{bonus=T('r_dy2');R.P().xp+=ok}}
    else{R.P().xp+=ok*2;if(mode==='sv'||mode==='bz'){const b=d.best[mode]||0;if(ok>b){d.best[mode]=ok;bonus='🏆 '+ok}else bonus='🏆 '+b}}
    if(mode==='dl'){bonus=ok>bot?'🏆':ok===bot?'🤝':'😅'}
    set(R0);R.save();
    v().innerHTML=hd(T('ch_t'))+`<div class="card fc"><div class="big">${ok}${N<1e9?'/'+N:''}</div>${mode==='dl'?`<div>👤 ${ok} — 🤖 ${bot}</div>`:''}<div>${esc(bonus)}</div>${bad.length?`<div style="text-align:start;width:100%"><div class="mu sm">${esc(T('tdone'))}</div>${bad.map(c=>`<div class="sn">${esc(show(ST.tgt,c))} — ${esc(show(ST.src,c))}</div>`).join('')}</div>`:''}<div class="row"><button class="btn sm" id="ag">${esc(T('rt'))}</button><button class="btn s sm" id="bk2">${esc(T('back'))}</button></div></div>`;
    bk(open);v().querySelector('#ag').onclick=()=>play(mode);v().querySelector('#bk2').onclick=open};
  const ask=()=>{
    if(i>=N||lives<=0)return end();lock=0;
    const q=make(r,P,mode==='daily'||mode==='classic'?types[i%types.length]:['tm','mt','ls','ty'][Math.floor(r()*4)]);
    const top=`<div class="row" style="margin-bottom:8px"><b>${i+1}${N<1e9?'/'+N:''}</b><span class="sp"></span>${mode==='sv'?'❤️'.repeat(lives):''}${mode==='bz'?'⏱ <b id="tt">'+t+'</b>':''}${mode==='dl'?'👤 '+ok+' · 🤖 '+bot:''}</div>`;
    const done=(good)=>{if(lock)return;lock=1;if(good)ok++;else{bad.push(q.c);if(mode==='sv')lives--}if(mode==='dl'&&Math.random()<pb)bot++;speak(W(ST.tgt,q.c)[0],ST.tgt);
      const fb=v().querySelector('#fb');fb.innerHTML=`<div class="card" style="text-align:center;margin-top:8px">${good?'✅ '+esc(T('ok')):'❌ '+esc(T('no'))+'<b class="ltr"> '+esc(show(ST.tgt,q.c))+'</b>'}</div><button class="btn" style="width:100%;margin-top:6px" id="nx">${esc(T('nx'))} →</button>`;v().querySelector('#nx').onclick=()=>{i++;ask()};if(mode==='bz'){setTimeout(()=>{i++;ask()},350)}};
    if(q.type==='ty'){
      v().innerHTML=hd(T('ch_t'))+top+`<div class="card fc" style="min-height:110px"><div class="mu sm">${esc(T('q4'))}</div><div class="big ltr" dir="${D.P[ST.src].dir}">${esc(q.q)}</div></div><input type="text" id="ty" class="ltr" autocomplete="off" autocapitalize="off" style="margin:8px 0"><button class="btn" style="width:100%" id="ck">${esc(T('chk'))}</button><div id="fb"></div>`;
      const go=()=>done(nz(v().querySelector('#ty').value)===nz(q.ans));v().querySelector('#ck').onclick=go;v().querySelector('#ty').onkeydown=e=>{if(e.key==='Enter')go()};setTimeout(()=>{const e=v().querySelector('#ty');e&&e.focus()},50)}
    else{
      v().innerHTML=hd(T('ch_t'))+top+`<div class="card fc" style="min-height:110px">${q.type==='ls'?`<button class="ib" id="pl" style="width:64px;height:64px;font-size:28px">🔊</button>`:`<div class="big ltr" dir="${D.P[q.qd]?D.P[q.qd].dir:'ltr'}">${esc(q.q)}</div>${q.say?`<button class="ib" id="pl">🔊</button>`:''}`}</div>${q.opts.map(x=>`<button class="opt ltr" dir="${D.P[q.od].dir}" data-o="${x.c}">${esc(x.txt)}</button>`).join('')}<div id="fb"></div>`;
      const pl=v().querySelector('#pl');if(pl)pl.onclick=e=>{e.stopPropagation();speak(W(ST.tgt,q.c)[0],ST.tgt)};if(q.auto)speak(W(ST.tgt,q.c)[0],ST.tgt);
      v().onclick=e=>{const b=e.target.closest('.opt');if(!b||lock)return;const g=+b.dataset.o===q.c;b.classList.add(g?'ok':'no');if(!g){const a=v().querySelector(`.opt[data-o="${q.c}"]`);a&&a.classList.add('ok')}done(g)}}
    bk(()=>{clearInterval(tm);open()})};
  if(mode==='bz'){tm=setInterval(()=>{if(!document.getElementById('tt')&&!v().querySelector('.opt,#ty')){clearInterval(tm);return}t--;const e=document.getElementById('tt');if(e)e.textContent=t;if(t<=0){clearInterval(tm);end()}},1000)}
  ask()}
const hd=t=>`<div class="hd"><button class="back" id="bk">←</button><h2>⚔️ ${esc(t)}</h2></div>`;
const bk=f=>{const b=v().querySelector('#bk');if(b)b.onclick=f};
function open(){
  const o=rec(),d=o[ST.tgt],done=d.d.last===R.today();
  v().innerHTML=hd(T('ch_t'))+`<div class="card cont"><h3 style="font-size:19px">${esc(T('md_dy'))}</h3><div style="opacity:.9;margin-bottom:10px">${esc(T('md_d_dy'))}</div><div style="margin-bottom:10px">${esc(T('r_dy',{n:d.d.streak}))}${done?' · ✓ '+d.d.score+'/10':''}</div><button class="btn" data-m="daily">${done?esc(T('rt')):esc(T('pr'))} →</button></div>`+
  [['classic','🎯','md_cl','md_d_cl'],['sv','💀','md_sv','md_d_sv'],['bz','⚡','md_bz','md_d_bz'],['dl','🤖','md_dl','md_d_dl']].map(([m,i,t,dd])=>`<button class="card row" style="width:100%;text-align:start" data-m="${m}"><span style="font-size:28px">${i}</span><div class="t sp"><b>${esc(T(t))}</b><div class="mu sm">${esc(T(dd))}</div></div>${d.best[m]?`<span class="pill">🏆 ${d.best[m]}</span>`:''}</button>`).join('');
  bk(R.home);v().onclick=e=>{const b=e.target.closest('[data-m]');if(b)play(b.dataset.m)}}
R.tiles.push({icon:'⚔️',label:()=>T('ch_t'),open});
})();
