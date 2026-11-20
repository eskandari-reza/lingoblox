/* module: Post feed — grammar rules and sentences as full-screen, Instagram-style posts; scroll up/down for the next one */
(()=>{
const R=window.RM2,{T,esc,D,ST,speak}=R;
const COL=['#0f766e,#14b8a6','#4338ca,#6366f1','#be185d,#ec4899','#b45309,#f59e0b','#0369a1,#0ea5e9','#6d28d9,#a855f7'];
const dirT=()=>(D.P[ST.tgt]||{}).dir||'ltr',JOIN=()=>/^(ja|zh)$/.test(ST.tgt)?'':' ',L2=()=>ST.src==='fa'?1:0;
const shuf=a=>[...a].sort(()=>Math.random()-.5);
function feed(n,render,bind,back,start,onView,setup){
  const o=document.createElement('div');o.className='reel wreel pfeed';
  o.innerHTML=`<button class="rclose" aria-label="close">✕</button><div class="rpager">${Array.from({length:n},(_,i)=>`<section class="rp" data-i="${i}" style="--c:var(--g${i%6})"><div class="gp">${render(i)}</div></section>`).join('')}</div>`;
  document.body.appendChild(o);document.body.style.overflow='hidden';R.rth.btn(o);setup&&setup(o);const pg=o.querySelector('.rpager');let cur=-1;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=+e.target.dataset.i;if(i!==cur){cur=i;try{speechSynthesis.cancel()}catch(x){}onView&&onView(i)}}}),{root:pg,rootMargin:'-45% 0px -45% 0px',threshold:0});
  o.querySelectorAll('.rp').forEach(el=>io.observe(el));
  const close=()=>{io.disconnect();try{speechSynthesis.cancel()}catch(e){}o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);back&&back()};
  const kd=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();pg.scrollBy({top:(e.key==='ArrowDown'?1:-1)*pg.clientHeight,behavior:'smooth'})}};
  document.addEventListener('keydown',kd);o.querySelector('.rclose').onclick=close;o.onclick=e=>{const rb=e.target.closest('.arail');if(rb&&o._rail){o._rail(e,+rb.dataset.ai);return}bind(e,o)};
  requestAnimationFrame(()=>{pg.scrollTop=RM2.rpTop(pg,start||0)})}
/* ---- horizontal carousel (Instagram multi-slide post): swipe left/right ---- */
function hfeed(n,render,bind,o2){
  const {back,onView,setup,strip}=o2;
  const o=document.createElement('div');o.className='reel wreel pfeed hcar';
  const sel=strip?`<div class="rstr"><div class="rsl"><select data-sel="lang" aria-label="language">${strip.langs.map(x=>`<option value="${x.l}" ${x.on?'selected':''}>${esc(x.t)}</option>`).join('')}</select><select data-sel="lv" aria-label="level">${strip.lvls.map(l=>`<option ${l===strip.lv?'selected':''}>${l}</option>`).join('')}</select><select data-sel="day" aria-label="day">${strip.days.map(d=>`<option value="${d.id}" ${d.on?'selected':''}>${esc(d.lab)}</option>`).join('')}</select></div></div>`:'';
  o.innerHTML=`<button class="rclose" aria-label="close">✕</button><button class="rback" aria-label="back">${/^(fa|ar)$/.test(R.uil())?'→':'←'}</button>${sel}<div class="rpager">${Array.from({length:n},(_,i)=>`<section class="rp" data-i="${i}" style="--c:var(--g${i%6})"><div class="gp">${render(i)}</div></section>`).join('')}</div><div class="hdots" dir="ltr">${n<=14?Array.from({length:n},(_,i)=>`<i data-d="${i}"></i>`).join(''):`<b class="hcn"></b>`}</div>`;
  document.body.appendChild(o);document.body.style.overflow='hidden';R.rth.btn&&R.rth.btn(o);setup&&setup(o);
  const pg=o.querySelector('.rpager'),dots=[...o.querySelectorAll('.hdots i')],cn=o.querySelector('.hcn');let cur=-1;
  const mark=i=>{dots.forEach((d,k)=>d.classList.toggle('on',k===i));if(cn)cn.textContent=(i+1)+' / '+n};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=+e.target.dataset.i;if(i!==cur){cur=i;mark(i);try{speechSynthesis.cancel()}catch(x){}onView&&onView(i)}}}),{root:pg,rootMargin:'0px -45% 0px -45%',threshold:0});
  o.querySelectorAll('.rp').forEach(el=>io.observe(el));
  const go=i=>{const el=pg.querySelectorAll('.rp')[Math.max(0,Math.min(n-1,i))];el&&el.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})};
  const close=skip=>{io.disconnect();try{speechSynthesis.cancel()}catch(e){}o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);!skip&&back&&back()};
  const rtl=()=>getComputedStyle(pg).direction==='rtl';
  const kd=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();const d=(e.key==='ArrowRight'?1:-1)*(rtl()?-1:1);go(cur+d)}};
  document.addEventListener('keydown',kd);
  o.querySelector('.rclose').onclick=()=>{close(true);R.goHome&&R.goHome()};o.querySelector('.rback').onclick=()=>close();
  o.onchange=async e=>{const sl=e.target.closest('[data-sel]');if(!sl||!strip)return;const k=sl.dataset.sel;if(k==='day'){close(true);strip.goDay(sl.value)}else if(k==='lv'){close(true);strip.goLv(sl.value)}else{if(await strip.goLang(sl.value))close(true)}};
  o.onclick=e=>{const d=e.target.closest('[data-d]');if(d){go(+d.dataset.d);return}const rb=e.target.closest('.arail');if(rb&&o._rail){o._rail(e,+rb.dataset.ai);return}bind(e,o)};
  o.close=close;requestAnimationFrame(()=>{mark(0);cur=0});return o}
/* ---- grammar posts ---- */
const GP=()=>(window.RMG||{})[ST.tgt]||[];
const gex=e=>e[0].split('|').join(JOIN()),ggl=e=>ST.src==='fa'?(e[2]||e[1]):(ST.tgt==='en'?'':e[1]);
const git=i=>{const p=GP()[i];return{id:'g'+p[0],gi:i,name:p[2][L2()],desc:p[3][L2()],shareTitle:p[2][L2()],shareText:p[3][L2()],shareLines:p[4].slice(0,3).map(gex)}};
function ruleBody(i){const p=GP()[i],q=p[5].length?p[5][i%p[5].length]:null,sd=(D.P[ST.src]||{}).dir||'ltr';
  return`<h1 class="gh" dir="auto">${esc(p[2][L2()])}</h1><p class="gpr" dir="auto">${esc(p[3][L2()])}</p>
  <h4 class="gsec">${esc(T('sent'))}</h4><div class="gpx">${p[4].map((e,k)=>`<button data-s="${i}:${k}"><span class="gtx" dir="${dirT()}">${esc(gex(e))}</span>${ggl(e)?`<small dir="${sd}">${esc(ggl(e))}</small>`:''}<i>🔊</i></button>`).join('')}</div>
  ${q?`<h4 class="gsec">${esc(T('pr'))}</h4><div class="gpq" data-q="${i}"><div class="gpqs" dir="${dirT()}">${esc(q[0])}</div><div class="gpo">${shuf([q[1],q[2],q[3]]).map(o=>`<button data-o="${esc(o)}" dir="${dirT()}">${esc(o)}</button>`).join('')}</div></div>`:''}`}
function ruleBind(e){const P=GP(),s=e.target.closest('[data-s]'),b=e.target.closest('[data-o]');
  if(s){const[i,k]=s.dataset.s.split(':').map(Number);speak(gex(P[i][4][k]),ST.tgt);return true}
  if(b){const box=b.closest('.gpq');if(box.dataset.d)return true;box.dataset.d=1;const i=+box.dataset.q,p=P[i],q=p[5][i%p[5].length],ok=b.dataset.o===q[1];
    box.querySelectorAll('[data-o]').forEach(x=>{if(x.dataset.o===q[1])x.classList.add('ok');else if(x===b)x.classList.add('no')});
    if(ok)speak(q[0].replace(/_+/g,q[1]),ST.tgt);K.emit('answer',{ok});R.act.pts(ok?'ok':'no');const pp=R.P();pp.xp+=ok?6:1;R.save();return true}
  return false}
function ruleReel(back,gi){const P=GP();if(!P[gi])return back&&back();
  feed(1,()=>`<div class="gpt"><span class="gpl">${esc(P[gi][1])}</span></div>${ruleBody(gi)}${R.act.rail(git(gi),'gram',gi)}`,(e)=>{ruleBind(e)},back,0,()=>R.act.pts('view','g'+P[gi][0]),o=>{o._rail=(e)=>R.act.onRail(e,git(gi),'gram')})}
/* ---- sentence posts ---- */
function sentReel(ids,back,start){
  const S=(D.P[ST.tgt]||{}).s||[];ids=ids.filter(i=>S[i]);if(!ids.length)return back&&back();
  const six=D.P[ST.src]&&D.P[ST.src].s&&D.P[ST.src].s.length?R.sentIdx(ST.src):null;
  const tr=x=>{const j=six&&six.first[x[2].join(',')];return j!=null&&j!==false?D.P[ST.src].s[j]:null};
  const sit=n=>{const x=S[ids[n]],t=tr(x);return{id:'s'+ids[n],si:ids[n],name:R.fill(x),desc:t?R.fill(t):'',shareTitle:R.fill(x),shareText:t?R.fill(t):''}};
  const render=n=>{const x=S[ids[n]],t=tr(x),c=x[2][0],w=R.W(ST.tgt,c);
    return`<div class="gpt"><span class="gpl">💬</span><span class="mu2">${n+1}/${ids.length}</span></div><div class="gsn" dir="${dirT()}">${esc(R.fill(x))}</div>${t?`<div class="gst">${esc(R.fill(t))}</div>`:''}
    ${w?`<div class="gpx"><button data-w="${c}"><span>${esc(R.show(ST.tgt,c))}</span><small>${esc(R.show(ST.src,c)||'')}</small></button></div>`:''}
    <div class="gact"><button data-p="${n}">🔊</button><button data-p="${n}" data-slow="1">🐢</button></div>${R.act.rail(sit(n),'sent',n)}`};
  const bind=e=>{const p=e.target.closest('[data-p]'),w=e.target.closest('[data-w]');
    if(p){const was=ST.slow;if(p.dataset.slow)ST.slow=true;speak(R.fill(S[ids[+p.dataset.p]]),ST.tgt);ST.slow=was}
    else if(w)R.vWord(+w.dataset.w)};
  feed(ids.length,render,bind,back,start,n=>R.act.pts('view','s'+ids[n]),o=>{o._rail=(e,n)=>R.act.onRail(e,sit(n),'sent')})}

/* ---- daily lesson as posts ---- */
function lessonFeed(blocks,o){
  const S=[];let cur=null;const tdir=o.tdir||dirT();
  blocks.forEach(x=>{
    if(x[0]==='h'&&x[1]===1){if(!cur)cur={h:x[2],items:[],cover:1};else{cur.items.push({t:'h1',x:x[2]})}}
    else if(x[0]==='h'){if(cur)S.push(cur);cur={h:x[2],items:[]}}
    else{if(!cur)cur={h:'',items:[],cover:1};
      if(x[0]==='r'){const l=cur.items[cur.items.length-1];if(l&&l.t==='tb')l.rows.push(x);else cur.items.push({t:'tb',rows:[x]})}
      else cur.items.push({t:x[2]?'ex':'p',x:x[1]})}});
  if(cur)S.push(cur);
  const title=S[0]&&S[0].cover?S[0].h:'';
  if(S[0]&&S[0].cover&&!S[0].items.length&&S.length>1)S.shift();
  const RU=(o.rules||[]).slice(),nl=S.length,n=S.length+RU.length+1;
  const it=i=>i>=nl?git(RU[i-nl]):({id:'l'+o.uid+'_'+i,name:(S[i]&&S[i].h)||title,desc:((S[i]&&S[i].items.find(z=>z.t==='p'))||{}).x||'',shareTitle:(S[i]&&S[i].h)||title,shareText:''});
  const body=s=>s.items.map(z=>z.t==='p'?`<p class="gpr" dir="auto">${esc(z.x)}</p>`:z.t==='h1'?`<h4 class="gsec">${esc(z.x)}</h4>`:z.t==='ex'?`<button class="lex" data-x="${esc(z.x)}"><span dir="${tdir}">${esc(z.x)}</span><i>🔊</i></button>`:`<div class="lft"><table>${z.rows.map(r=>'<tr>'+r[1].map(c=>r[2]?`<th>${esc(c)}</th>`:`<td dir="auto">${esc(c)}</td>`).join('')+'</tr>').join('')}</table></div>`).join('');
  const render=i=>{
    if(i>=nl&&i<n-1)return`<div class="gpt"><span class="gpl">${esc(o.day)} · ${esc((R.grammarT?R.grammarT():''))}</span><span class="mu2">${i+1} / ${n}</span></div>${ruleBody(RU[i-nl])}${R.act.rail(git(RU[i-nl]),'gram',i)}`;
    if(i===n-1)return`<div class="gpt"><span class="gpl">${esc(o.lvl)}</span><span class="mu2">${n} / ${n}</span></div><h1 class="gh" dir="auto">🎉 ${esc(T('done'))}</h1>${o.next?`<button class="lbtn" data-go="1">🎞️ ${esc(o.next[0])} ${esc(o.lvl)} ›</button>`:''}<button class="lbtn alt" data-end="1">✓ ${esc(T('s_gr'))}</button>`;
    const s=S[i];return`<div class="gpt"><span class="gpl">${esc(o.day)}</span><span class="mu2">${i+1} / ${n}</span></div>${title&&s.h&&s.h!==title?`<div class="mu2 ltt" dir="auto">${esc(title)}</div>`:''}<h1 class="gh" dir="auto">${esc(s.h||title)}</h1>${s.cover&&o.fb?`<p class="mu2" dir="auto">${esc(o.fb)}</p>`:''}${body(s)}${R.act.rail(it(i),'gram',i)}`};
  const bind=(e,ov)=>{if(ruleBind(e))return;const x=e.target.closest('[data-x]');if(x)return speak(x.dataset.x,ST.tgt);
    if(e.target.closest('[data-go]')){ov.querySelector('.rclose').click();setTimeout(()=>o.next[1](),30)}
    else if(e.target.closest('[data-end]'))ov.querySelector('.rclose').click()};
  hfeed(n,render,bind,{back:o.back,strip:o.strip,onView:i=>{if(i<nl)R.act.pts('view','l'+o.uid+'_'+i);else if(i<n-1)R.act.pts('view','g'+GP()[RU[i-nl]][0])},setup:ov=>{ov._rail=(e,i)=>R.act.onRail(e,it(i),'gram')}})}
R.lessonFeed=lessonFeed;

/* ---- sample texts as posts: one paragraph per post, tap words, glossary ---- */
function textFeed(o){
  const P=o.paras,n=P.length+1,clean=t=>String(t).replace(/«\d+»/g,''),fs=t=>{const m=clean(t).trim().match(/^.+?[.!?。！？](?=\s|$)/);return m?m[0]:clean(t)};
  const title=P[0]?fs(P[0]):'',sub=o.tr&&o.tr[0]?fs(o.tr[0]):'';
  const it=i=>({id:'t'+o.uid+'_'+i,name:clean(P[i]).slice(0,70),desc:o.tr&&o.tr[i]?clean(o.tr[i]).slice(0,120):'',shareTitle:clean(P[i]).slice(0,70),shareText:clean(P[i])});
  const words=t=>{const seen={},out=[];[...t.matchAll(/«(\d+)»/g)].forEach(m=>{const w=o.word(+m[1]);if(w&&!seen[w.a]){seen[w.a]=1;out.push(w)}});return out};
  const render=i=>{
    if(i===P.length)return`<div class="gpt"><span class="gpl">${esc(o.day)}</span><span class="mu2">${n} / ${n}</span></div><h1 class="gh" dir="auto">🎉 ${esc(T('done'))}</h1><button class="lbtn" data-all="1">🔊 ${esc(T('ntx'))}</button><button class="lbtn alt" data-end="1">✓</button>`;
    const t=P[i],ws=words(t),html=esc(t).replace(/(\S+?)«(\d+)»/g,(m,w,k)=>`<span class="nw" data-n="${k}">${w}</span>`).replace(/«\d+»/g,'');
    return`<div class="gpt"><span class="gpl">${esc(o.day)} · ${esc(o.lvl)}</span><span class="mu2">${i+1} / ${n}</span></div>${i===0?`<h1 class="gh" dir="${o.tdir}">${esc(title)}</h1>${sub?`<div class="mu2 ltt" dir="auto">${esc(sub)}</div>`:''}`:`<div class="mu2 ltt" dir="${o.tdir}">${esc(title)}</div>`}${o.fb&&i===0?`<p class="mu2" dir="auto">${esc(o.fb)}</p>`:''}
    <p class="tx" dir="${o.tdir}">${html}</p>${o.tr&&o.tr[i]?`<p class="gpr" dir="auto">${esc(clean(o.tr[i]))}</p>`:''}
    <div class="gact"><button data-p="${i}">🔊</button><button data-p="${i}" data-slow="1">🐢</button></div>
    ${ws.length?`<h4 class="gsec">${esc(T('wd'))}</h4><div class="gpx">${ws.map(w=>`<button data-sp="${esc(w.sp)}"><span class="gtx" dir="${o.tdir}">${esc(w.a)}</span>${w.b?`<small dir="auto">${esc(w.b)}</small>`:''}<i>🔊</i></button>`).join('')}</div>`:''}${R.act.rail(it(i),'sent',i)}`};
  const bind=(e,ov)=>{const w=e.target.closest('.nw'),sp=e.target.closest('[data-sp]'),pl=e.target.closest('[data-p]');
    if(w){const x=o.word(+w.dataset.n);if(x)speak(x.sp,o.lang);document.querySelectorAll('.reel .nw.on').forEach(z=>z.classList.remove('on'));w.classList.add('on')}
    else if(sp)speak(sp.dataset.sp,o.lang);
    else if(pl){const was=ST.slow;if(pl.dataset.slow)ST.slow=true;speak(clean(P[+pl.dataset.p]),o.lang);ST.slow=was}
    else if(e.target.closest('[data-all]'))speak(clean(P.join(' ')),o.lang);
    else if(e.target.closest('[data-end]'))ov.querySelector('.rclose').click()};
  feed(n,render,bind,o.back,0,i=>{if(i<P.length)R.act.pts('view','t'+o.uid+'_'+i)},ov=>{ov._rail=(e,i)=>R.act.onRail(e,it(i),'sent')})}
R.textFeed=textFeed;R.postFeed=feed;
R.ruleReel=ruleReel;R.sentReel=sentReel;
})();
