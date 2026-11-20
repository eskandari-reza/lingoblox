/* module: Grammar (GR) · Tests (QZ) · Sample texts (NT) — lazy data lang/<id>.x */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,W,show,speak,D,ST}=R,X={};
const el=()=>R.view();
async function ex(l){if(X[l])return X[l];try{X[l]=await R.getJSON('lang/'+l+'.x')}catch(e){X[l]={}}return X[l]}
/* pick the language to use for a key: target first, then source (with a note) */
async function pick(key,uid){
  const n=String(+uid.slice(1)),g=x=>key==='NT'?(x.NT&&x.NT.d):x[key];let x=await ex(ST.tgt),m=g(x);
  if(m&&m[n])return{l:ST.tgt,d:m[n]};
  if(ST.src!==ST.tgt){x=await ex(ST.src);m=g(x);if(m&&m[n])return{l:ST.src,d:m[n],fb:1}}
  return null}
const note=(k,l)=>`<div class="card mu sm">${esc(R.T(k,{l:R.META[l][0]}))}</div>`;
let LVL='A1',GRU=null;
function openGr(){const us=D.sk.units.filter(u=>u[1]===LVL),pick=us.find(u=>u[0]===GRU)||us[0];vGr(pick[0])}
async function pickDay(title,cb,key){
  const v=el(),L=R.P().learned;
  if(key==='GR'||key==='NT'||key==='QZ'){await ex(ST.tgt);if(ST.src!==ST.tgt)await ex(ST.src)}
  const ntm=n=>{const g=x=>x&&x.NT&&x.NT.d&&x.NT.d[n];return g(X[ST.tgt])?{d:g(X[ST.tgt]),l:ST.tgt}:g(X[ST.src])?{d:g(X[ST.src]),l:ST.src}:null};
  const fs=t=>{const s=String(t||'').replace(/«\d+»/g,'').trim(),m=s.match(/^.+?[.!?。！？](?=\s|$)/);return m?m[0]:s};
  const ttl=id=>{if(key==='NT'){const m=ntm(String(+id.slice(1)));if(!m)return'';const a=fs((m.d[0]||[])[0]),b=ST.src==='fa'?fs((m.d[1]||[])[0]):'';return`<span class="ut"><em dir="auto">${esc(a)}</em>${b?`<small dir="auto">${esc(b)}</small>`:''}</span>`}
    if(key==='QZ'){const n=String(+id.slice(1)),m=(X[ST.tgt]&&X[ST.tgt].QZ&&X[ST.tgt].QZ[n])||(X[ST.src]&&X[ST.src].QZ&&X[ST.src].QZ[n]);if(!m)return'';const nq=m.s.reduce((a,x)=>a+x[3].length,0);return`<span class="ut"><em>${esc(m.t||'')}</em><small>${esc(m.s.map(x=>String(x[0]).replace(/^[^:：]*[:：]\s*/,'')).join(' · '))} · ❓${nq}</small></span>`}
    if(key!=='GR')return'';const n=String(+id.slice(1));const m=(X[ST.tgt]&&X[ST.tgt].GR&&X[ST.tgt].GR[n])||(X[ST.src]&&X[ST.src].GR&&X[ST.src].GR[n]);if(!m)return'';const h1=m.find(b=>b[0]==='h'&&b[1]===1),h2=m.find(b=>b[0]==='h'&&b[1]!==1);return`<span class="ut"><em>${esc(h1?h1[2]:'')}</em>${h2?`<small>${esc(h2[2])}</small>`:''}</span>`};
  const draw=()=>{v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(title)}</h2></div><div class="chips">${R.LV.map(l=>`<button class="chip ${l===LVL?'on':''}" data-l="${l}">${l}</button>`).join('')}</div><div class="ulist">${D.sk.units.filter(u=>u[1]===LVL).map(([id,l,c])=>`<button class="ur" data-u="${id}"><b>${esc(R.T('day',{n:+id.slice(1)}))}</b>${ttl(id)}<span class="mu">›</span></button>`).join('')}</div>`;
    $('#bk').onclick=R.home;v.onclick=e=>{const c=e.target.closest('.chip'),u=e.target.closest('.ur');if(c){LVL=c.dataset.l;draw()}else if(u)cb(u.dataset.u)}};
  const $=s=>v.querySelector(s);draw()}
const back=(f)=>{const b=el().querySelector('#bk');b.onclick=f};
/* ---------- grammar ---------- */
function blocks(b,dir,tdir){
  let o='',tb=null;const fl=()=>{if(tb){o+=`<div style="overflow-x:auto"><table class="gt">${tb}</table></div>`;tb=null}};
  b.forEach(x=>{
    if(x[0]==='r'){tb=(tb||'')+'<tr>'+x[1].map(c=>x[2]?`<th>${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')+'</tr>';return}
    fl();
    if(x[0]==='h')o+=x[1]===1?`<h1 class="gh1">${esc(x[2])}</h1>`:`<h3 class="gh2">${esc(x[2])}</h3>`;
    else if(x[0]==='p')o+=x[2]?`<p class="gex ltr" dir="${tdir}">${esc(x[1])}</p>`:`<p>${esc(x[1])}</p>`;
  });fl();return o}
const RA={};
const toks=t=>String(t).toLowerCase().replace(/[^\p{L}\p{N}\s]/gu,' ').split(/\s+/).filter(w=>w.length>1);
const dtext=m=>m?m.map(b=>b[0]==='h'?b[2]:b[0]==='p'?b[1]:b[1].join(' ')).join(' '):'';
function rulesFor(uid,lvl){
  const P=(window.RMG||{})[ST.tgt]||[],key=ST.tgt+ST.src+lvl;
  if(!RA[key]){const days=D.sk.units.filter(u=>u[1]===lvl).map(u=>u[0]),map={};
    const dm=id=>{const n=String(+id.slice(1));return (X[ST.tgt]&&X[ST.tgt].GR&&X[ST.tgt].GR[n])||(X[ST.src]&&X[ST.src].GR&&X[ST.src].GR[n])||null};
    const bag=days.map(id=>{const m=dm(id),h=m?m.filter(b=>b[0]==='h').map(b=>b[2]).join(' '):'';return{id,head:new Set(toks(h)),all:new Set(toks(dtext(m)))}});
    const rs=P.map((p,i)=>[p,i]).filter(([p])=>p[1]===lvl);
    rs.forEach(([p,i],k)=>{const q=new Set(toks(p[2].join(' ')+' '+p[4].map(e=>e[0].split('|').join(' ')).join(' ')));let best=null,bs=0;
      bag.forEach(d=>{let sc=0;q.forEach(w=>{if(d.head.has(w))sc+=3;else if(d.all.has(w))sc+=1});if(sc>bs){bs=sc;best=d.id}});
      const id=best||days[Math.min(days.length-1,Math.floor(k*days.length/Math.max(1,rs.length)))];(map[id]=map[id]||[]).push(i)});
    RA[key]=map}
  return RA[key][uid]||[]}
async function vGr(uid){
  const v=el();v.innerHTML='<div class="card mu">…</div>';
  const r=await pick('GR',uid);await ex(ST.tgt);if(ST.src!==ST.tgt)await ex(ST.src);const bk=()=>R.home();
  if(!r){v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('s_gr'))} · ${esc(T('day',{n:+uid.slice(1)}))}</h2></div><div class="card mu">${esc(T('grno'))}</div>`;return back(bk)}
  const un=D.sk.units.find(x=>x[0]===uid),lvl=un?un[1]:LVL,uidn=uid,ids=D.sk.units.filter(u=>u[1]===lvl).map(u=>u[0]),nx=ids[ids.indexOf(uid)+1];
  LVL=lvl;GRU=uid;
  const nxt=nx?[T('day',{n:+nx.slice(1)}),()=>vGr(nx)]:null;
  const strip={lv:lvl,lvls:R.LV,langs:R.LANGS.map(l=>({l,t:R.META[l][1]+' '+R.META[l][0],on:l===ST.tgt})),days:ids.map(id=>({id,on:id===uid,lab:T('day',{n:+id.slice(1)})})),
    goDay:id=>vGr(id),goLv:l=>{const f=D.sk.units.find(u=>u[1]===l);f&&vGr(f[0])},goLang:async l=>{if(!(await R.setTgt(l)))return false;vGr(uid);return true}};
  bk();R.lessonFeed(r.d,{strip,uid:uidn,day:T('day',{n:+uid.slice(1)}),lvl,tdir:D.P[r.l].dir,fb:r.fb?R.T('grfb',{l:R.META[r.l][0]}):'',back:bk,next:nxt,rules:rulesFor(uid,lvl)})
}
/* ---------- tests ---------- */
async function vTs(uid){
  const v=el();v.innerHTML='<div class="card mu">…</div>';
  const r=await pick('QZ',uid),bk=()=>pickDay(T('s_ts'),vTs,'QZ');
  if(!r){v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('s_ts'))}</h2></div><div class="card mu">${esc(T('soon'))}</div>`;return back(bk)}
  v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('s_ts'))}</h2></div>`;back(bk);
  const q=r.d,dir=D.P[r.l].dir,sn=h=>String(h||'').replace(/^[^:：]*[:：]\s*/,'');
  const P=[{k:'c'}];let tot=0;
  q.s.forEach((s,si)=>{if(s[2]&&s[3].length)P.push({k:'p',si});s[3].length?s[3].forEach((qq,qi)=>{P.push({k:'q',si,qi});tot++}):P.push({k:'w',si})});
  P.push({k:'e'});const n=P.length,ans={},nsec=q.s.length;let ok=0,paid=0;
  const num=i=>`<span class="mu2">${i+1} / ${n}</span>`;
  const render=i=>{const p=P[i];
    if(p.k==='c')return`<div class="gpt"><span class="gpl">📝 ${esc(T('day',{n:+uid.slice(1)}))}</span>${num(i)}</div><h1 class="gh" dir="auto">${esc(q.t||T('s_ts'))}</h1>${r.fb?`<p class="gpr" dir="auto">${esc(R.T('qfb',{l:R.META[r.l][0]}))}</p>`:''}<p class="gpr" dir="auto">${q.s.map(s=>esc(sn(s[0]))).join(' · ')}</p><p class="gpr">❓ ${tot}</p>`;
    const s=p.si!=null?q.s[p.si]:null;
    if(p.k==='p')return`<div class="gpt"><span class="gpl">${esc(sn(s[0]))}</span>${num(i)}</div><div class="mu2" dir="auto">${esc(s[1])}</div><p class="tx" dir="${dir}" style="text-align:start">${esc(s[2])}</p>`;
    if(p.k==='q'){const qq=s[3][p.qi];return`<div class="gpt"><span class="gpl">${esc(sn(s[0]))} · ${p.qi+1}/${s[3].length}</span>${num(i)}</div><div class="mu2 sc">⭐ <b>${ok}</b></div><p class="tx big" dir="${dir}">${esc(qq[0])}</p><div class="stk" data-q="${i}">${qq[1].map((o,oi)=>`<button data-o="${oi}" dir="${dir}">${esc(o)}</button>`).join('')}</div>`}
    if(p.k==='w')return`<div class="gpt"><span class="gpl">✍️ ${esc(sn(s[0]))}</span>${num(i)}</div><div class="mu2" dir="auto">${esc(s[1])}</div><textarea class="wta" placeholder="${esc(T('qw'))}"></textarea>${s[4]?`<button class="lbtn" data-mod="1">${esc(T('qm'))}</button><p class="tx rv" dir="${dir}" hidden>${esc(s[4])}</p>`:''}`;
    return`<div class="gpt"><span class="gpl">🎯</span>${num(i)}</div><h1 class="gh" id="qsum">⭐ ${ok}/${tot}</h1><button class="lbtn" data-ag="1">${esc(T('rt'))}</button><button class="lbtn alt" data-end="1">✓</button>`};
  const bind=(e,ov)=>{const o=e.target.closest('[data-o]'),pg=ov.querySelector('.rpager');
    if(o){const box=o.closest('[data-q]');if(box.dataset.d)return;box.dataset.d=1;const i=+box.dataset.q,p=P[i],qq=q.s[p.si][3][p.qi],c=+o.dataset.o;
      box.querySelectorAll('[data-o]').forEach(x=>{if(+x.dataset.o===qq[2])x.classList.add('ok');else if(x===o)x.classList.add('no')});if(c===qq[2])ok++;ov.querySelectorAll('.sc b').forEach(x=>x.textContent=ok);
      setTimeout(()=>pg.scrollTo({top:RM2.rpTop(pg,i+1),behavior:'smooth'}),1000)}
    else if(e.target.closest('[data-mod]')){const b=e.target.closest('[data-mod]');b.hidden=true;b.nextElementSibling.hidden=false}
    else if(e.target.closest('[data-ag]')){ov.querySelector('.rclose').click();setTimeout(()=>vTs(uid),30)}
    else if(e.target.closest('[data-end]'))ov.querySelector('.rclose').click()};
  R.postFeed(n,render,bind,bk,0,i=>{if(P[i].k==='e'){const t=document.querySelector('.reel #qsum');if(t)t.textContent='⭐ '+ok+'/'+tot;if(!paid){paid=1;const p=R.P();p.xp+=ok*3;R.save()}}})}
/* ---------- sample texts ---------- */
async function vNt(uid){
  const v=el();v.innerHTML='<div class="card mu">…</div>';
  const r=await pick('NT',uid);const bk=()=>pickDay(T('ntx'),vNt,'NT');
  const u=D.sk.units.find(x=>x[0]===uid);
  if(!r){v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('ntx'))}</h2></div><div class="card mu">${esc(T('soon'))}</div>`;return back(bk)}
  const paras=r.d[0]||[],tr=ST.src==='fa'?(r.d[1]||[]):[];
  bk();R.textFeed({uid,day:T('day',{n:+uid.slice(1)}),lvl:u[1],tdir:D.P[r.l].dir,lang:r.l,fb:r.fb?R.T('nfb',{l:R.META[r.l][0]}):'',paras,tr,back:bk,
    word:n=>{const c=u[2][n-1];if(!c)return null;const a=R.W(ST.tgt,c),b=R.W(ST.src,c);return a?{a:R.show(ST.tgt,c),b:b?R.show(ST.src,c):'',sp:a[0]}:null}})}
/* GR/QZ explanations are authored in Persian only: show them only when the interface language matches (prevents language leakage) */
const EXPL=()=>R.ST.src==='fa';
R.tiles.push({icon:'📖',label:()=>T('s_gr'),show:()=>EXPL(),open:()=>openGr()},{icon:'📝',label:()=>T('s_ts'),show:()=>EXPL(),open:()=>pickDay(T('s_ts'),vTs,'QZ')},{icon:'📰',label:()=>T('ntx'),open:()=>pickDay(T('ntx'),vNt,'NT')});
})();
