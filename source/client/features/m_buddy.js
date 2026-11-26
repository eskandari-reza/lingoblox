/* module: Buddy companion (grows with XP, speaks a word) + share progress */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,D,ST,W,show,speak}=R,v=()=>R.view();
const ANI=['🦁','🐱','🐶','🦊','🐼','🐨','🦉','🐲'],KEY='rm2buddy';
const get=()=>{try{return Object.assign({a:'🦁',n:''},JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return{a:'🦁',n:''}}},set=b=>{try{localStorage.setItem(KEY,JSON.stringify(b))}catch(e){}};
function open(){
  const b=get(),p=R.P(),lv=Math.floor(Math.sqrt(p.xp/20))+1,studied=p.last===R.today(),size=64+Math.min(lv,12)*6;
  const acc=lv>=10?'👑':lv>=5?'🎩':lv>=3?'🎀':'',msg=T(studied?(lv%2?'bd_m1':'bd_m2'):'bd_m3');
  const L=Object.keys(p.learned).length;
  v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('bd_t'))}</h2></div><div class="card center" style="padding:24px"><div style="font-size:22px;min-height:30px">${acc}</div><button id="by" style="font-size:${size}px;line-height:1.1;transition:transform .2s">${studied?b.a:b.a}</button><div style="margin-top:6px"><b>${esc(b.n||'')}</b> <span class="pill">${esc(T('bd_lv',{n:lv}))}</span></div><div class="mu" style="margin:10px 0">${esc(msg)}</div><div id="sw" style="min-height:2.6em"></div><div class="prog"><i style="width:${(p.xp-20*(lv-1)*(lv-1))/(20*(2*lv-1))*100}%"></i></div></div>
  <div class="card"><h3>${esc(T('bd_pick'))}</h3><div class="chips" style="flex-wrap:wrap">${ANI.map(a=>`<button class="chip ${a===b.a?'on':''}" style="font-size:26px" data-a="${a}">${a}</button>`).join('')}</div><input type="text" id="bn" value="${esc(b.n)}" placeholder="…" style="margin-top:8px"></div>
  <div class="card"><button class="btn" id="sh" style="width:100%">📤 ${esc(T('cm_share'))}</button><div id="shm" class="mu sm center" style="margin-top:6px"></div></div>`;
  const q=x=>v().querySelector(x);q('#bk').onclick=R.home;
  q('#by').onclick=()=>{q('#by').style.transform='scale(1.15) rotate(-6deg)';setTimeout(()=>q('#by').style.transform='',220);const ids=Object.keys(p.learned).map(Number).filter(c=>W(ST.tgt,c)&&W(ST.src,c));const c=ids.length?ids[Math.random()*ids.length|0]:R.allC().find(c=>W(ST.tgt,c));if(c){q('#sw').innerHTML=`<b class="ltr" dir="${D.P[ST.tgt].dir}">${esc(show(ST.tgt,c))}</b> — ${esc(show(ST.src,c))}`;speak(W(ST.tgt,c)[0],ST.tgt)}};
  v().onclick=e=>{const a=e.target.closest('[data-a]');if(a){b.a=a.dataset.a;set(b);open()}};
  q('#bn').onchange=e=>{b.n=e.target.value;set(b)};
  q('#sh').onclick=async()=>{const txt=T('cm_txt',{l:R.META[ST.tgt][0],w:L,s:p.streak});try{if(navigator.share)await navigator.share({text:txt});else{await navigator.clipboard.writeText(txt);q('#shm').textContent=T('cm_copied')}}catch(e){try{await navigator.clipboard.writeText(txt);q('#shm').textContent=T('cm_copied')}catch(_){q('#shm').textContent=txt}}}}
R.tiles.push({icon:'🦁',label:()=>T('bd_t'),open});
})();
