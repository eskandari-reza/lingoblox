/* module: Word reel — flashcards as a full-screen, Instagram-style vertical feed with a web-fetched picture per word (Wikipedia / Wikimedia Commons) */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,D,ST,speak,W,show,pron,P,save,lab}=R;
const LS=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},SV=(k,o)=>{try{localStorage.setItem(k,JSON.stringify(o))}catch(e){}};
const wit=c=>{const r=W(ST.tgt,c),s=W(ST.src,c);return{id:'w'+c,cid:c,name:show(ST.tgt,c),desc:s?show(ST.src,c):'',shareTitle:show(ST.tgt,c)+(s?' = '+show(ST.src,c):''),shareText:(pron(c)?pron(c)+' · ':'')+(s?show(ST.src,c):'')}};
const COL=['#3b82f6,#6366f1','#ec4899,#f97316','#10b981,#0ea5e9','#8b5cf6,#d946ef','#f59e0b,#ef4444','#14b8a6,#22c55e'];
const NOIMG=new Set(['pron','prep','conj','det','intj','num']);
let IC=LS('rm2img')||{};const MEM={};
const keep=()=>{const k=Object.keys(IC);if(k.length>1500)k.slice(0,500).forEach(x=>delete IC[x]);SV('rm2img',IC)};
const api=async u=>{const r=await K.get('net').fetch(u);if(!r.ok)throw 0;return r.json()};
async function term(c){let t=null;try{if(ST.tgt!=='en'&&!D.P.en)await R.loadPack('en');const e=D.P.en&&W('en',c);if(e)t=e[0]}catch(e){}
  if(!t){const r=W(ST.tgt,c);t=r&&r[0]}return t}
async function imgFor(c){
  if(c in MEM)return MEM[c];const pos=(W(ST.tgt,c)||[])[4];
  if(NOIMG.has(pos)){return MEM[c]=''}
  const t=await term(c);if(!t||t.length>40){return MEM[c]=''}
  const key=t.toLowerCase();if(key in IC)return MEM[c]=IC[key];
  let url='';
  try{const j=await api('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=720&titles='+encodeURIComponent(t));
    const pg=Object.values((j.query&&j.query.pages)||{})[0];if(pg&&pg.thumbnail)url=pg.thumbnail.source}catch(e){}
  if(!url&&pos==='n'){try{const j=await api('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=1&gsrsearch='+encodeURIComponent(t+' filetype:bitmap')+'&prop=imageinfo&iiprop=url&iiurlwidth=720');
    const pg=Object.values((j.query&&j.query.pages)||{})[0];if(pg&&pg.imageinfo&&pg.imageinfo[0])url=pg.imageinfo[0].thumburl||''}catch(e){}}
  IC[key]=url;keep();return MEM[c]=url}
function wordReel(list,back,start){
  const cs=list.filter(c=>W(ST.tgt,c));if(!cs.length)return back&&back();
  const dir=(D.P[ST.tgt]||{}).dir||'ltr',six=D.P[ST.src]&&D.P[ST.src].s&&D.P[ST.src].s.length?R.sentIdx(ST.src):null,ix=R.sentIdx(ST.tgt);
  const o=document.createElement('div');o.className='reel wreel';let cur=-1;
  const page=(c,i)=>{const r=W(ST.tgt,c),s=W(ST.src,c),L=P().learned[c],sy=r[8],an=r[9],sx=(ix.by[c]||[])[0],x=sx!=null?D.P[ST.tgt].s[sx]:null,t=x&&six&&six.first[x[2].join(',')]!=null?D.P[ST.src].s[six.first[x[2].join(',')]]:null;
    return`<section class="rp" data-i="${i}" data-c="${c}" data-h="🃏 ${i+1} / ${cs.length}"><div class="rpm wpm rg${i%6}"><img class="rbg wbg" alt="" hidden><div class="wimg"><img alt="" hidden></div><i class="rbl wl">${esc(String(r[0]).trim().slice(0,1).toUpperCase())}</i></div>
    <div class="wrail">${R.act.rail(wit(c),'word',i)}<button data-ok="${c}" class="${L?'on':''}">${L?'✓':'○'}</button><button data-sp="${c}">🔊</button><button data-dt="${c}">ⓘ</button></div>
    <div class="wtx"><div class="wct">${r[4]?`<span>${esc(lab('pos',r[4]))}</span>`:''}${r[5]?`<span>${esc(lab('tp',r[5]))}</span>`:''}<span>${i+1}/${cs.length}</span></div>
    <h1 class="ltr" dir="${dir}">${esc(show(ST.tgt,c))}</h1><div class="wpr">${esc(pron(c))}</div>
    <div class="wmn">${esc(s?show(ST.src,c):'—')}</div>
    ${sy||an?`<div class="wsa">${sy?'≈ '+esc(sy):''}${sy&&an?' · ':''}${an?'≠ '+esc(an):''}</div>`:''}
    ${x?`<div class="wex"><div class="ltr" dir="${dir}">${esc(R.fill(x))}</div>${t?`<div class="mu sm">${esc(R.fill(t))}</div>`:''}</div>`:''}<a class="wcr" hidden target="_blank" rel="noopener"></a></div></section>`};
  o.innerHTML=`<button class="rclose" aria-label="close">✕</button><div class="rpager">${cs.map(page).join('')}</div>`;
  document.body.appendChild(o);document.body.style.overflow='hidden';R.rth.btn(o);
  const pg=o.querySelector('.rpager'),loaded=new Set();
  const load=async i=>{if(i<0||i>=cs.length||loaded.has(i))return;loaded.add(i);const el=o.querySelector(`.rp[data-i="${i}"]`);if(!el)return;const u=await imgFor(cs[i]);if(!u||!o.isConnected)return;
    const a=el.querySelector('.wbg'),b=el.querySelector('.wimg img'),done=()=>{a.hidden=false;b.hidden=false;const l=el.querySelector('.wl');if(l)l.remove()};b.onerror=()=>{a.remove();b.parentNode.remove()};a.src=u;b.src=u;b.onload=done};
  const act=i=>{if(i===cur)return;cur=i;R.act.pts('view','w'+cs[i]);load(i);load(i+1);load(i-1);if(ST.auto){const r=W(ST.tgt,cs[i]);r&&speak(r[0],ST.tgt)}};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)act(+e.target.dataset.i)}),{root:pg,rootMargin:'-45% 0px -45% 0px',threshold:0});
  o.querySelectorAll('.rp').forEach(el=>io.observe(el));
  const close=()=>{io.disconnect();try{speechSynthesis.cancel()}catch(e){}o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);back&&back()};
  const kd=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();pg.scrollBy({top:(e.key==='ArrowDown'?1:-1)*pg.clientHeight,behavior:'smooth'})}};
  document.addEventListener('keydown',kd);o.querySelector('.rclose').onclick=close;
  o.onclick=e=>{const rb=e.target.closest('.arail');if(rb){R.act.onRail(e,wit(cs[+rb.dataset.ai]),'word');return}const k=e.target.closest('[data-ok]'),s=e.target.closest('[data-sp]'),d=e.target.closest('[data-dt]');
    if(k){const c=+k.dataset.ok,p=P();if(p.learned[c])delete p.learned[c];else{p.learned[c]=1;R.act.pts('learn',c)}save();k.classList.toggle('on',!!p.learned[c]);k.textContent=p.learned[c]?'✓':'○'}
    else if(s){const r=W(ST.tgt,+s.dataset.sp);r&&speak(r[0],ST.tgt)}
    else if(d)R.vWord(+d.dataset.dt)};
  requestAnimationFrame(()=>{pg.scrollTop=RM2.rpTop(pg,start||0);act(start||0)})}
R.wordReel=wordReel;
})();
