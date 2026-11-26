/* module: Games hub (memory, hangman, sentence builder, time attack, language wheel) + multilingual learning page */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,W,show,speak,D,ST,TN}=R,v=()=>R.view();
const shuf=a=>[...a].sort(()=>Math.random()-.5),pick=a=>a[Math.random()*a.length|0];
function pool(){const L=R.P().learned,all=R.allC().filter(c=>W(ST.tgt,c)&&W(ST.src,c));const lr=all.filter(c=>L[c]);return lr.length>=12?lr:all.slice(0,400)}
const head=(title,back)=>`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(title)}</h2></div>`;
const bk=f=>{const b=v().querySelector('#bk');if(b)b.onclick=f};
const xp=n=>{R.P().xp+=n;R.save()};
const td=l=>(D.P[l]||{}).dir||'ltr';
function hub(){
  v().innerHTML=head(T('hm_gm'),R.home)+`<div class="tiles">${[['🧠',T('gm_mem'),memory],['🔤',T('gm_hg'),hang],['🧩',T('gm_sb'),builder],['⚡',T('gm_ta'),attack],['🎡',T('gm_wh'),wheel],['👆',R.tapLabel?R.tapLabel():'Tap & earn',()=>R.tapGame&&R.tapGame(hub)]].map((g,i)=>`<button class="tile" data-g="${i}"><span>${g[0]}</span><b>${esc(g[1])}</b></button>`).join('')}</div>`;
  const fn=[memory,hang,builder,attack,wheel,()=>R.tapGame&&R.tapGame(hub)];
  v().onclick=e=>{const g=e.target.closest('[data-g]');if(g)fn[+g.dataset.g]()};bk(R.home)}
/* ---- memory ---- */
function memory(){
  const P=pool();if(P.length<6){v().innerHTML=head(T('gm_mem'),hub)+`<div class="card">${esc(T('gm_few'))}</div>`;return bk(hub)}
  const cs=shuf(P).slice(0,6),cards=shuf(cs.flatMap(c=>[{c,k:'t'},{c,k:'s'}]));let open=[],found=new Set(),mv=0,lock=false;
  const draw=()=>{v().innerHTML=head(T('gm_mem'),hub)+`<div class="mu sm" style="margin-bottom:8px">${mv}</div><div class="grid" style="grid-template-columns:repeat(3,minmax(0,1fr))">${cards.map((x,i)=>{const on=open.includes(i)||found.has(x.c);return`<button class="mc ${found.has(x.c)?'ok':''}" data-i="${i}" ${on?'':''}>${on?esc(x.k==='t'?show(ST.tgt,x.c):show(ST.src,x.c)):'❓'}</button>`}).join('')}</div>${found.size===6?`<div class="card" style="text-align:center;margin-top:12px">${esc(T('done2'))}<br><button class="btn sm" id="ag" style="margin-top:8px">${esc(T('gm_again'))}</button></div>`:''}`;bk(hub);
    const a=v().querySelector('#ag');if(a)a.onclick=memory;
    v().onclick=e=>{const b=e.target.closest('.mc');if(!b||lock)return;const i=+b.dataset.i;if(open.includes(i)||found.has(cards[i].c))return;open.push(i);if(cards[i].k==='t')speak(W(ST.tgt,cards[i].c)[0],ST.tgt);
      if(open.length===2){mv++;lock=true;const[a,b2]=open;if(cards[a].c===cards[b2].c&&cards[a].k!==cards[b2].k){found.add(cards[a].c);open=[];lock=false;if(found.size===6)xp(30)}else setTimeout(()=>{if(!v().querySelector('.mc'))return;open=[];lock=false;draw()},900)}draw()}};
  draw()}
/* ---- hangman ---- */
function hang(){
  const P=pool().filter(c=>{const w=W(ST.tgt,c)[0];return w.length>=3&&w.length<=12&&!/\s/.test(w)});const c=pick(P),w=W(ST.tgt,c)[0],ch=[...new Set([...w.toLowerCase()])];
  let got=new Set(),miss=0;const abc=shuf([...new Set([...ch,...shuf([...'abcdefghijklmnopqrstuvwxyz']).slice(0,8)])]);
  const draw=()=>{const won=ch.every(x=>got.has(x)),lost=miss>=6;
    v().innerHTML=head(T('gm_hg'),hub)+`<div class="card fc" style="min-height:160px"><div class="mu">${esc(show(ST.src,c))}</div><div class="big ltr" style="letter-spacing:6px" dir="ltr">${[...w].map(x=>got.has(x.toLowerCase())||won||lost?esc(x):'_').join(' ')}</div><div>${'❤️'.repeat(6-miss)}${'🖤'.repeat(miss)}</div>${won||lost?`<button class="btn sm" id="ag">${esc(T('gm_again'))}</button>`:''}</div>${won||lost?'':`<div class="chips" style="flex-wrap:wrap;justify-content:center">${abc.map(x=>`<button class="chip ${got.has(x)?'on':''}" style="font-size:18px;padding:8px 13px" data-x="${esc(x)}" ${got.has(x)?'disabled':''}>${esc(x)}</button>`).join('')}</div>`}`;bk(hub);
    if(won||lost){if(won){xp(15);speak(w,ST.tgt)}v().querySelector('#ag').onclick=hang}
    v().onclick=e=>{const b=e.target.closest('[data-x]');if(!b)return;const x=b.dataset.x;got.add(x);if(!ch.includes(x))miss++;draw()}};
  draw()}
/* ---- sentence builder ---- */
function builder(){
  const p=D.P[ST.tgt],S=p.s.filter(s=>{const t=R.fill(s);return t.length<70&&t.split(/\s+/).length>=3});if(!S.length){v().innerHTML=head(T('gm_sb'),hub)+`<div class="card">${esc(T('gm_few'))}</div>`;return bk(hub)}
  const s=pick(S),txt=R.fill(s),spaced=!/^[぀-ヿ一-鿿]/.test(txt),parts=spaced?txt.split(/\s+/):[...txt.replace(/\s/g,'')];
  const bank=shuf(parts.map((x,i)=>({x,i})));let seq=[];
  const draw=()=>{const ok=seq.length===parts.length&&seq.every((o,i)=>o.x===parts[i]);
    v().innerHTML=head(T('gm_sb'),hub)+`<div class="card" style="min-height:90px"><div class="chips" style="flex-wrap:wrap;direction:${p.dir}">${seq.map((o,i)=>`<button class="chip on" style="font-size:17px" data-r="${i}">${esc(o.x)}</button>`).join('')}</div></div><div class="chips" style="flex-wrap:wrap;justify-content:center;direction:${p.dir}">${bank.filter(o=>!seq.includes(o)).map(o=>`<button class="chip" style="font-size:17px;padding:9px 14px" data-b="${o.i}">${esc(o.x)}</button>`).join('')}</div>${ok?`<div class="card" style="text-align:center">✓ ${esc(T('done2'))}<br><button class="btn sm" id="ag" style="margin-top:8px">${esc(T('gm_again'))}</button></div>`:''}<div class="center mu sm" style="margin-top:8px"><button class="chip" id="hs">🔊 ${esc(T('sb_h'))}</button></div>`;bk(hub);
    if(ok){xp(10);speak(txt,ST.tgt);v().querySelector('#ag').onclick=builder}
    v().onclick=e=>{const b=e.target.closest('[data-b]'),r=e.target.closest('[data-r]');if(b){seq.push(bank.find(o=>o.i==b.dataset.b));draw()}else if(r){seq.splice(+r.dataset.r,1);draw()}else if(e.target.closest('#hs'))speak(txt,ST.tgt)}};
  draw()}
/* ---- time attack ---- */
function attack(){
  const P=pool();if(P.length<8){v().innerHTML=head(T('gm_ta'),hub)+`<div class="card">${esc(T('gm_few'))}</div>`;return bk(hub)}
  let t=60,sc=0,tm=null,c;const draw=()=>{c=pick(P);const o=shuf([c,...shuf(P.filter(x=>x!==c)).slice(0,3)]);
    v().innerHTML=head(T('gm_ta'),()=>{clearInterval(tm);hub()})+`<div class="row"><b style="font-size:22px">⏱ <span id="tt">${t}</span></b><span class="sp"></span><b style="font-size:22px">⭐ ${sc}</b></div><div class="prog" style="margin-top:8px"><i id="tp" style="width:${t/60*100}%"></i></div><div class="card fc" style="min-height:110px"><div class="big ltr" dir="${td(ST.tgt)}">${esc(show(ST.tgt,c))}</div></div>${o.map(x=>`<button class="opt ltr" dir="${td(ST.src)}" data-o="${x}">${esc(show(ST.src,x))}</button>`).join('')}`;
    bk(()=>{clearInterval(tm);hub()});
    v().onclick=e=>{const b=e.target.closest('.opt');if(!b)return;if(+b.dataset.o===c){sc++;t=Math.min(60,t+1)}else t=Math.max(0,t-3);draw()}};
  const end=()=>{clearInterval(tm);xp(sc*2);v().innerHTML=head(T('gm_ta'),hub)+`<div class="card fc"><div class="big">⭐ ${sc}</div><button class="btn sm" id="ag">${esc(T('gm_again'))}</button></div>`;bk(hub);v().querySelector('#ag').onclick=attack};
  draw();tm=setInterval(()=>{if(!document.getElementById('tt')){clearInterval(tm);return}t--;if(t<=0)return end();document.getElementById('tt').textContent=t;document.getElementById('tp').style.width=t/60*100+'%'},1000)}
/* ---- language wheel ---- */
let spin=0;
function wheel(){
  const Ls=R.LANGS.filter(l=>l!==ST.src),n=Ls.length,seg=360/n;
  const grad=Ls.map((l,i)=>`${R.META[l][2]} ${i*seg}deg ${(i+1)*seg}deg`).join(',');
  v().innerHTML=head(T('gm_wh'),hub)+`<div style="position:relative;width:300px;height:300px;margin:10px auto"><div id="wl" style="width:300px;height:300px;border-radius:50%;background:conic-gradient(${grad});transition:transform 4s cubic-bezier(.12,.7,.1,1);box-shadow:var(--sh);position:relative">${Ls.map((l,i)=>`<span style="position:absolute;left:50%;top:50%;transform:rotate(${i*seg+seg/2}deg) translate(0,-118px) rotate(${-(i*seg+seg/2)}deg);margin:-14px 0 0 -14px;font-size:24px">${R.META[l][1]}</span>`).join('')}</div><div style="position:absolute;top:-10px;left:50%;margin-left:-12px;font-size:26px">▼</div></div><div class="center" style="text-align:center"><button class="btn" id="sp">🎡</button></div><div id="wr"></div>`;bk(hub);
  v().querySelector('#sp').onclick=async()=>{const b=v().querySelector('#sp');b.disabled=true;const i=Math.random()*n|0;spin+=360*5+(360-(i*seg+seg/2))-(spin%360);v().querySelector('#wl').style.transform=`rotate(${spin}deg)`;
    const L=Ls[i];let pk;try{pk=await R.loadPack(L)}catch(e){b.disabled=false;return}
    setTimeout(()=>{const P=R.allC().filter(c=>W(L,c)&&W(ST.src,c));const c=pick(P),o=shuf([c,...shuf(P).slice(0,3)].filter((x,j,a)=>a.indexOf(x)===j));
      v().querySelector('#wr').innerHTML=`<div class="card fc" style="min-height:120px"><div>${R.META[L][1]} ${esc(R.META[L][0])}</div><div class="big ltr" dir="${pk.dir}">${esc(show(L,c))}</div><button class="ib" id="ps">🔊</button></div>${o.map(x=>`<button class="opt ltr" dir="${td(ST.src)}" data-o="${x}">${esc(show(ST.src,x))}</button>`).join('')}`;
      v().querySelector('#ps').onclick=()=>speak(W(L,c)[0],L);
      v().querySelector('#wr').onclick=e=>{const q=e.target.closest('.opt');if(!q||q.dataset.d)return;v().querySelectorAll('.opt').forEach(x=>x.dataset.d=1);if(+q.dataset.o===c){q.classList.add('ok');xp(8)}else{q.classList.add('no');v().querySelector(`.opt[data-o="${c}"]`).classList.add('ok')}speak(W(L,c)[0],L);b.disabled=false}},4100)}}
/* ---- multilingual learning page ---- */
async function ml(){
  const key='rm2ml';let st={ls:[ST.tgt],lv:'A1',day:'d1',done:{}};try{Object.assign(st,JSON.parse(localStorage.getItem(key)||'{}'))}catch(e){}
  const sv=()=>{try{localStorage.setItem(key,JSON.stringify(st))}catch(e){}};
  const load=async()=>{for(const l of st.ls)try{await R.loadPack(l)}catch(e){}};
  const draw=async()=>{await load();const ls=st.ls.filter(l=>D.P[l]);
    const u=D.sk.units.find(x=>x[0]===st.day)||D.sk.units[0];
    v().innerHTML=head(T('ml_t'),R.home)+`<div class="chips">${R.LANGS.map(l=>`<button class="chip ${st.ls.includes(l)?'on':''}" data-l="${l}">${R.META[l][1]} ${esc(R.META[l][0])}</button>`).join('')}</div><div class="chips">${R.LV.map(l=>`<button class="chip ${st.lv===l?'on':''}" data-v="${l}">${l}</button>`).join('')}</div><div class="chips">${D.sk.units.filter(x=>x[1]===st.lv).map(x=>`<button class="chip ${x[0]===st.day?'on':''}" data-d="${x[0]}">${+x[0].slice(1)}</button>`).join('')}</div><div class="card" style="overflow-x:auto;padding:8px"><table class="gt" style="min-width:100%">${u[2].map(c=>{const d=st.done[c];return`<tr style="${d?'background:color-mix(in srgb,var(--ok) 18%,var(--card))':''}"><td style="width:34px"><button class="ck ${d?'on':''}" data-k="${c}">${d?'✓':''}</button></td>${ls.map(l=>{const w=W(l,c);return`<td class="ltr" dir="${D.P[l].dir}" data-s="${l}|${c}">${w?esc(show(l,c)):'—'}</td>`}).join('')}</tr>`}).join('')}</table></div>`;
    bk(R.home);
    v().onclick=async e=>{const l=e.target.closest('[data-l]'),lv=e.target.closest('[data-v]'),d=e.target.closest('[data-d]'),k=e.target.closest('[data-k]'),s=e.target.closest('[data-s]');
      if(l){const x=l.dataset.l;st.ls=st.ls.includes(x)?st.ls.filter(y=>y!==x):[...st.ls,x].slice(-5);if(!st.ls.length)st.ls=[x];sv();draw()}
      else if(lv){st.lv=lv.dataset.v;st.day=D.sk.units.find(x=>x[1]===st.lv)[0];sv();draw()}
      else if(d){st.day=d.dataset.d;sv();draw()}
      else if(k){const c=k.dataset.k;if(st.done[c])delete st.done[c];else{st.done[c]=1;R.P().learned[c]=R.P().learned[c]||0}sv();draw()}
      else if(s){const[x,c]=s.dataset.s.split('|');const w=W(x,+c);if(w)speak(w[0],x)}}};
  draw()}
R.tiles.push({icon:'🎮',label:()=>T('hm_gm'),open:hub},{icon:'🌍',label:()=>T('ml_t'),open:ml});
})();
