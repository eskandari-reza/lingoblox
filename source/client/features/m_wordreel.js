/* module: Word reel — flashcards as a full-screen, Instagram-style vertical feed with a web-fetched picture per word (Wikipedia / Wikimedia Commons) */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,D,ST,speak,W,show,pron,P,save,lab}=R;
const LS=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},SV=(k,o)=>{try{localStorage.setItem(k,JSON.stringify(o))}catch(e){}};
const wit=c=>{const r=W(ST.tgt,c),s=W(ST.src,c);return{id:'w'+c,cid:c,name:show(ST.tgt,c),desc:s?show(ST.src,c):'',shareTitle:show(ST.tgt,c)+(s?' = '+show(ST.src,c):''),shareText:(pron(c)?pron(c)+' · ':'')+(s?show(ST.src,c):'')}};
const COL=['#3b82f6,#6366f1','#ec4899,#f97316','#10b981,#0ea5e9','#8b5cf6,#d946ef','#f59e0b,#ef4444','#14b8a6,#22c55e'];
const rx=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const hl=(txt,keys,stem)=>{let h=esc(txt);const ks=[...new Set(keys.map(k=>String(k||'').trim()).filter(k=>k.length>1))].sort((a,b)=>b.length-a.length);if(!ks.length)return h;
  const alts=[];ks.forEach(k=>{const e=esc(k);alts.push(rx(e));const w=e.split(/\s+/);if(w.length>1)alts.push(rx(w.slice(1).join(' ')));if(stem&&e.length>=5)alts.push(rx(e.slice(0,-2))+'[\\p{L}]*')});
  try{return h.replace(new RegExp('(?<![\\p{L}\\p{N}])('+alts.join('|')+')','giu'),'<b class="hw">$1</b>')}catch(e){return h}};
/* grammatical-gender colours for articles: m blue, f rose, n green, plural violet, elided/unknown amber */
const GA={de:{der:'m',die:'f',das:'n'},fr:{le:'m',la:'f',"l'":'u',les:'p'},es:{el:'m',la:'f',los:'p',las:'p',lo:'n'},it:{il:'m',lo:'m',i:'m',gli:'m',la:'f',le:'f',"l'":'u'},pt:{o:'m',a:'f',os:'m',as:'f'}};
const gOf=(l,a)=>(GA[l]||{})[String(a||'').toLowerCase()]||'';
R.gOf=gOf;
R.artH=(l,c)=>{const r=W(l,c);if(!r)return'';const a=r[3],g=gOf(l,a);return(a?`<i class="art${g?' art-'+g:''}">${esc(a)}</i>${/'$/.test(a)?'':' '}`:'')+esc(r[0])};
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
const EM=c=>(R.EMO||{})[c];
const NP={en:'No matching translation for this sentence',fa:'ترجمهٔ هم‌معنیِ این جمله موجود نیست'};
const nopair=()=>NP[ST.src||'en']||NP.en;
const wc=t=>/[぀-ヿ㐀-鿿가-힯]/.test(t)?Math.ceil(t.length/2):t.trim().split(/\s+/).length;
/* example sentences for a word: sentence pairs whose translation really matches (same concepts, similar length, ideally contains the meaning) come first; the rest are shown alone (no fake translation) */
const TR={};
const trKey=t=>{let h=5381;for(let i=0;i<t.length;i++)h=((Math.imul(h,33)^t.charCodeAt(i))>>>0);return h.toString(36)};
/* curated per-sentence translations: data/lang/tr.<sentence-lang>.<ui-lang>.json = {m:{hash(filled sentence):translation}} */
R.trLoad=async()=>{const n='tr.'+ST.tgt+'.'+ST.src;if(TR[n]!==undefined)return TR[n];TR[n]=null;try{const m=await K.get('content').manifest(),ok=(window.__EMB&&window.__EMB['lang/'+n])||(m&&m.f&&m.f['lang/'+n+'.json']);if(ok)TR[n]=(await K.get('content').json('lang/'+n)).m||null}catch(e){TR[n]=null}return TR[n]};
const trGet=tx=>{const m=TR['tr.'+ST.tgt+'.'+ST.src];return m?m[trKey(tx)]:null};
R.sentPairs=(c,max)=>{const ix=R.sentIdx(ST.tgt),six=D.P[ST.src]&&D.P[ST.src].s&&D.P[ST.src].s.length?R.sentIdx(ST.src):null,S=D.P[ST.tgt].s,mean=String(W(ST.src,c)?show(ST.src,c):'').toLowerCase().split(/\s*[\/،,;؛]\s*/).filter(k=>k.length>1),out=[];
  const S2=six?D.P[ST.src].s:null;
  (ix.by[c]||[]).slice(0,40).forEach((i,n)=>{const x=S[i],tx=R.fill(x),K=x[2],a=wc(tx);let best=null,bs=0,bj=0;
    if(six){const cand=new Set();K.forEach(k=>(six.by[k]||[]).slice(0,60).forEach(j=>cand.add(j)));
      cand.forEach(j=>{const t=S2[j],ts=R.fill(t),r=a/Math.max(1,wc(ts));if(r<.6||r>1.7)return;const inter=t[2].filter(q=>K.includes(q)).length,jac=inter/(K.length+t[2].length-inter),has=mean.some(m=>ts.toLowerCase().includes(m));
        const sc=jac===1?(has?4:3):0;if(sc>bs||(sc===bs&&sc&&jac>bj)){bs=sc;bj=jac;best=t}})}
    const ts=trGet(tx);out.push({x,ts,t:ts?null:bs?best:null,sc:ts?5:bs,n,len:tx.length})});
  out.sort((a,b)=>b.sc-a.sc||a.len-b.len||a.n-b.n);return out.slice(0,max||3)};
async function wordReel(list,back,start,nav){try{await R.trLoad()}catch(e){}
  const cs=list.filter(c=>W(ST.tgt,c));if(!cs.length)return back&&back();
  const dir=(D.P[ST.tgt]||{}).dir||'ltr',six=D.P[ST.src]&&D.P[ST.src].s&&D.P[ST.src].s.length?R.sentIdx(ST.src):null,ix=R.sentIdx(ST.tgt);
  const o=document.createElement('div');o.className='reel wreel';let cur=-1;
  const page=(c,i)=>{const r=W(ST.tgt,c),s=W(ST.src,c),L=P().learned[c],sy=r[8],an=r[9],prs=R.sentPairs(c,3);
    return`<section class="rp" data-i="${i}" data-c="${c}" data-g="${gOf(ST.tgt,r[3])}"><header class="wph"><i class="wpa">${esc(EM(c)||String(r[0]).trim().slice(0,1).toUpperCase())}</i><b class="wpw">${R.artH(ST.tgt,c)}</b><span class="wpmn">${esc(s?show(ST.src,c):'')}</span><small class="wppr">${esc(pron(c)||'')}</small></header><div class="rpm wpm rg${i%6}"><img class="rbg wbg" alt="" hidden><div class="wimg"><img alt="" hidden></div><i class="rbl wl${EM(c)?' emo':''}">${esc(EM(c)||String(r[0]).trim().slice(0,1).toUpperCase())}</i></div>
    <div class="wrail">${R.act.rail(wit(c),'word',i)}<span class="wcnt" dir="ltr">${i+1} / ${cs.length}</span><button data-ok="${c}" class="${L?'on':''}">${L?'✓':'○'}</button><button data-sp="${c}">🔊</button><button data-dt="${c}">ⓘ</button></div>
    <div class="wtx"><div class="wct">${r[4]?`<span>${esc(lab('pos',r[4]))}</span>`:''}${r[5]?`<span>${esc(lab('tp',r[5]))}</span>`:''}</div>
    ${sy||an?`<div class="wsa">${sy?'≈ '+esc(sy):''}${sy&&an?' · ':''}${an?'≠ '+esc(an):''}</div>`:''}
    <div class="wsl">${prs.length?prs.map(q=>`<div class="wex"><div class="wxr"><div class="wxs ltr" dir="${dir}">${hl(R.fill(q.x),[show(ST.tgt,c)],1)}</div><button class="wsb" data-ssp="${esc(R.fill(q.x))}" aria-label="speak">🔊</button></div>${q.ts?`<div class="wxt">${esc(q.ts)}</div>`:q.t?`<div class="wxt">${hl(R.fill(q.t),String(s?show(ST.src,c):'').split(/\s*[\/،,;؛]\s*/),0)}</div>`:`<div class="wxn">${esc(nopair())}</div>`}</div>`).join(''):`<div class="wex wxe">${esc(R.T('nosent'))}</div>`}</div><a class="wcr" hidden target="_blank" rel="noopener"></a></div></section>`};
  o.innerHTML=`<button class="rclose" aria-label="close">✕</button><button class="rback" aria-label="back">${R.uil&&/^(fa|ar)$/.test(R.uil())?'→':'←'}</button>${nav&&nav.strip?`<div class="rstr"><div class="rsl"><select data-sel="lang" aria-label="language">${nav.strip.langs.map(x=>`<option value="${x.l}" ${x.on?'selected':''}>${esc(x.t)}</option>`).join('')}</select><select data-sel="lv" aria-label="level">${nav.strip.lvls.map(x=>`<option value="${x.l}" ${x.on?'selected':''}>${esc(x.lab||x.l)}</option>`).join('')}</select>${nav.strip.tops?`<select data-sel="tp" aria-label="topic">${nav.strip.tops.map(d=>`<option value="${esc(d.v)}" ${d.on?'selected':''}>${esc(d.t)}</option>`).join('')}</select>`:`<select data-sel="day" aria-label="day">${nav.strip.days.map(d=>`<option value="${d.id}" ${d.on?'selected':''}>${esc(d.lab)} · ${d.k}/${d.t}</option>`).join('')}</select>`}</div></div>`:''}${nav&&!nav.strip&&(nav.prev||nav.next)?`<div class="rdnav">${nav.prev?`<button data-nav="prev">${esc(nav.prev.label)}</button>`:'<span></span>'}${nav.next?`<button data-nav="next">${esc(nav.next.label)}</button>`:'<span></span>'}</div>`:''}<div class="rpager">${cs.map(page).join('')}</div>`;
  document.body.appendChild(o);document.body.style.overflow='hidden';R.rth.btn(o);
  const pg=o.querySelector('.rpager'),loaded=new Set();
  const load=async i=>{if(i<0||i>=cs.length||loaded.has(i)||EM(cs[i]))return;loaded.add(i);const el=o.querySelector(`.rp[data-i="${i}"]`);if(!el)return;const u=await imgFor(cs[i]);if(!u||!o.isConnected)return;
    const a=el.querySelector('.wbg'),b=el.querySelector('.wimg img'),done=()=>{a.hidden=false;b.hidden=false;const l=el.querySelector('.wl');if(l)l.remove()};b.onerror=()=>{a.remove();b.parentNode.remove()};a.src=u;b.src=u;b.onload=done};
  const act=i=>{if(i===cur)return;cur=i;R.act.pts('view','w'+cs[i]);load(i);load(i+1);load(i-1);if(ST.auto){const r=W(ST.tgt,cs[i]);r&&speak(r[0],ST.tgt)}};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)act(+e.target.dataset.i)}),{root:pg,rootMargin:'-45% 0px -45% 0px',threshold:0});
  o.querySelectorAll('.rp').forEach(el=>io.observe(el));
  const close=(skip)=>{io.disconnect();try{speechSynthesis.cancel()}catch(e){}o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);!skip&&back&&back()};
  const kd=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();pg.scrollBy({top:(e.key==='ArrowDown'?1:-1)*pg.clientHeight,behavior:'smooth'})}};
  document.addEventListener('keydown',kd);
  /* one wheel gesture = exactly one word (desktop); touch uses native y-mandatory snap */
  let wl=0,wt=0;pg.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)<4||e.ctrlKey)return;const tx=e.target.closest&&e.target.closest('.wtx');
    if(tx&&tx.scrollHeight>tx.clientHeight+2){const end=tx.scrollTop+tx.clientHeight>=tx.scrollHeight-2,top=tx.scrollTop<=0;if((e.deltaY>0&&!end)||(e.deltaY<0&&!top))return}
    e.preventDefault();const t=Date.now(),fresh=t-wt>160;wt=t;if(!fresh||t-wl<500)return;wl=t;pg.scrollBy({top:(e.deltaY>0?1:-1)*pg.clientHeight,behavior:'smooth'})},{passive:false});
  o.querySelector('.rback').onclick=()=>close();o.querySelector('.rclose').onclick=()=>{close(true);R.goHome&&R.goHome()};
  o.onchange=async e=>{const sl=e.target.closest('[data-sel]');if(!sl||!nav||!nav.strip)return;if(sl.dataset.sel==='lv'){close(true);nav.strip.goLv(sl.value)}else if(sl.dataset.sel==='day'){close(true);nav.strip.goDay(sl.value)}else if(sl.dataset.sel==='tp'){close(true);nav.strip.goTp(sl.value)}else{const ok=await nav.strip.goLang(sl.value);if(ok)close(true)}};
  o.onclick=e=>{const ssb=e.target.closest('[data-ssp]');if(ssb){speak(ssb.dataset.ssp,ST.tgt);return}const sb=e.target.closest('[data-day]');if(sb&&nav&&nav.strip){close(true);nav.strip.goDay(sb.dataset.day);return}const nb=e.target.closest('[data-nav]');if(nb&&nav){const n=nav[nb.dataset.nav];if(n){close(true);n.go()}return}const rb=e.target.closest('.arail');if(rb){R.act.onRail(e,wit(cs[+rb.dataset.ai]),'word');return}const k=e.target.closest('[data-ok]'),s=e.target.closest('[data-sp]'),d=e.target.closest('[data-dt]');
    if(k){const c=+k.dataset.ok,p=P();if(p.learned[c])delete p.learned[c];else{p.learned[c]=1;R.act.pts('learn',c)}save();k.classList.toggle('on',!!p.learned[c]);k.textContent=p.learned[c]?'✓':'○'}
    else if(s){const r=W(ST.tgt,+s.dataset.sp);r&&speak(r[0],ST.tgt)}
    else if(d)R.vWord(+d.dataset.dt)};
  requestAnimationFrame(()=>{const ao=o.querySelector('.rsd .on');ao&&ao.scrollIntoView({inline:'center',block:'nearest'});pg.scrollTop=RM2.rpTop(pg,start||0);act(start||0)})}
R.wordReel=wordReel;R.hl=hl;
})();
