/* module: Practice feed — mixed exercises (meaning, reverse, listening, gap-fill) as full-screen scroll posts with instant feedback */
(()=>{
const R=window.RM2,{T,esc,D,ST,speak,W,show,P,save}=R;
const COL=['#4f46e5,#7c3aed','#0e7490,#0891b2','#be123c,#e11d48','#15803d,#16a34a','#b45309,#d97706','#7e22ce,#c026d3'];
const dir=()=>(D.P[ST.tgt]||{}).dir||'ltr';
const shuf=a=>[...a].sort(()=>Math.random()-.5);
function pool(){const p=P(),have=c=>W(ST.tgt,c)&&W(ST.src,c);let L=Object.keys(p.learned||{}).map(Number).filter(have);
  if(L.length<12){const l0=R.LV.indexOf(p.lv0||'A1');for(const[,lv,cs]of D.sk.units){if(R.LV.indexOf(lv)<l0)continue;for(const c of cs)if(have(c)&&!L.includes(c))L.push(c);if(L.length>=60)break}}
  return L}
function build(n){const ps=pool(),ix=R.sentIdx(ST.tgt),S=D.P[ST.tgt].s,all=shuf(ps),Q=[];
  const opts=(c,f)=>{const o=new Set([f(c)]);for(const d of shuf(ps)){if(o.size>=4)break;const t=f(d);if(t&&!o.has(t))o.add(t)}return shuf([...o])};
  const types=['mean','rev','listen','gap'];let k=0;
  for(const c of all){if(Q.length>=n)break;let t=types[k++%4];
    if(t==='gap'){const si=(ix.by[c]||[]).find(i=>S[i]&&S[i][1].length===1);if(si==null)t='mean';else{const x=S[si],ans=x[1][0],ws=ps.map(d=>(W(ST.tgt,d)||[])[0]).filter(w=>w&&w!==ans);const o=shuf([ans,...shuf(ws).slice(0,3)]);Q.push({t,c,q:R.fill(x,true),ans,o,say:R.fill(x)});continue}}
    if(t==='mean')Q.push({t,c,q:show(ST.tgt,c),ans:show(ST.src,c),o:opts(c,d=>show(ST.src,d)),say:W(ST.tgt,c)[0]});
    else if(t==='rev')Q.push({t,c,q:show(ST.src,c),ans:show(ST.tgt,c),o:opts(c,d=>show(ST.tgt,d)),say:W(ST.tgt,c)[0],tg:1});
    else Q.push({t:'listen',c,q:'🔊',ans:show(ST.tgt,c),o:opts(c,d=>show(ST.tgt,d)),say:W(ST.tgt,c)[0],tg:1})}
  return Q}
const LBL={mean:'pf_mean',rev:'pf_rev',listen:'pf_lis',gap:'ex_c'};
function run(back){
  const Q=build(20);if(Q.length<4){alert(T('few'));return back&&back()}
  let ok=0,done=0;
  const o=document.createElement('div');o.className='reel wreel pfeed pq';
  const page=(q,i)=>`<section class="rp" data-i="${i}" style="--c:var(--g${i%6})"><div class="gp"><div class="gpt"><span class="gpl">${esc(T(LBL[q.t]))}</span><span class="mu2">${i+1}/${Q.length}</span></div><div class="pqq ${q.t==='gap'||q.tg?'':''}" dir="${q.t==='mean'||q.t==='gap'||q.t==='listen'?dir():'auto'}">${q.t==='listen'?'<button class="pqs" data-say="'+i+'">🔊</button>':esc(q.q)}</div><div class="pqo">${q.o.map(x=>`<button data-o="${esc(x)}" dir="${q.tg||q.t==='gap'?dir():'auto'}">${esc(x)}</button>`).join('')}</div>${R.act.rail({id:'w'+q.c,cid:q.c,name:show(ST.tgt,q.c),desc:show(ST.src,q.c),shareTitle:show(ST.tgt,q.c)+' = '+show(ST.src,q.c)},'word',i)}</div></section>`;
  const endp=`<section class="rp" data-i="${Q.length}" style="--c:var(--g2)"><div class="gp" style="align-items:center;text-align:center"><div style="font-size:64px">🎉</div><h1 id="pqe"></h1><button class="gpo-b" id="pqa">🔁</button><button class="gpo-b" id="pqx">✕</button></div></section>`;
  o.innerHTML=`<button class="rclose" aria-label="close">✕</button><div class="pqb">⭐ <b id="pqs">0</b></div><div class="rpager">${Q.map(page).join('')}${endp}</div>`;
  document.body.appendChild(o);document.body.style.overflow='hidden';R.rth.btn(o);const pg=o.querySelector('.rpager');
  const close=()=>{try{speechSynthesis.cancel()}catch(e){}o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);back&&back()};
  const kd=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',kd);o.querySelector('.rclose').onclick=close;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=+e.target.dataset.i;if(i===Q.length){o.querySelector('#pqe').textContent=ok+'/'+Q.length;return}const q=Q[i];if(q&&q.t==='listen'&&!q.d)speak(q.say,ST.tgt)}}),{root:pg,rootMargin:'-45% 0px -45% 0px',threshold:0});
  o.querySelectorAll('.rp').forEach(el=>io.observe(el));
  o.onclick=e=>{const rb=e.target.closest('.arail');if(rb){const c=Q[+rb.dataset.ai].c;R.act.onRail(e,{id:'w'+c,cid:c,name:show(ST.tgt,c),desc:show(ST.src,c),shareTitle:show(ST.tgt,c)+' = '+show(ST.src,c)},'word');return}const s=e.target.closest('[data-say]'),b=e.target.closest('[data-o]');
    if(s)speak(Q[+s.dataset.say].say,ST.tgt);
    else if(b){const sec=b.closest('.rp'),i=+sec.dataset.i,q=Q[i];if(q.d)return;q.d=1;const good=b.dataset.o===q.ans;
      sec.querySelectorAll('[data-o]').forEach(x=>{if(x.dataset.o===q.ans)x.classList.add('ok');else if(x===b)x.classList.add('no')});
      if(good)ok++;done++;o.querySelector('#pqs').textContent=ok;K.emit('answer',{ok:good});R.act.pts(good?'ok':'no');const pp=P();pp.xp+=good?6:1;save();speak(q.say,ST.tgt);
      setTimeout(()=>{if(o.isConnected)pg.scrollTo({top:RM2.rpTop(pg,i+1),behavior:'smooth'})},1300)}
    else if(e.target.closest('#pqa')){o.remove();document.body.style.overflow='';document.removeEventListener('keydown',kd);run(back)}
    else if(e.target.closest('#pqx'))close()}}
R.practiceReel=run;
R.tiles.push({icon:'⚡',label:()=>T('pf_t'),open:()=>run(()=>R.home())});
})();
