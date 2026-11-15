(()=>{
"use strict";
const localStorage=K.get('storage'),SRS=K.get('srs');
const $=(s,r=document)=>r.querySelector(s),root=$('#root');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const KEY='rm2',LV=['A1','A2','B1','B2','C1','C2'];
const today=()=>new Date().toLocaleDateString('sv'),dayN=()=>Math.floor(Date.now()/864e5);
/* ---------- state ---------- */
let ST={src:'',tgt:'',theme:'auto',goal:10,auto:true,slow:false,prog:{}};
try{Object.assign(ST,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(ST))}catch(e){}};
const D={sk:null,P:{}};                       // skeleton + loaded packs
const P=()=>ST.prog[ST.tgt]||(ST.prog[ST.tgt]={learned:{},srs:{},xp:0,streak:0,last:'',nt:{d:'',n:0}});
/* ---------- text ---------- */
const UIL=()=>ST.uil&&D.P[ST.uil]?ST.uil:ST.src;
function T(k,v){const L=UIL(),u=D.P[L];let s=(NS[L]||{})[k]??(u&&u.ui[k])??NS.en[k]??(D.P.en&&D.P.en.ui[k])??k;if(v)for(const a in v)s=s.split('{'+a+'}').join(v[a]);return s}
function TN(k,v){const l=(CUR&&CUR.src)||ST.src||'en';let s=(NS[l]||NS.en)[k]??NS.en[k];if(v)for(const a in v)s=s.split('{'+a+'}').join(v[a]);return s}
let CUR=null; // flow choices
/* ---------- data loading ---------- */
const getJSON=name=>K.get('content').json(name);
async function loadPack(id){if(D.P[id])return D.P[id];const p=await getJSON('lang/'+id);p.idx=null;D.P[id]=p;return p}
async function loadSk(){if(D.sk)return D.sk;const s=await getJSON('skeleton');D.sk=s;s.cu={};s.lvl={};s.units.forEach(([id,l,c])=>{s.lvl[id]=l;c.forEach(x=>s.cu[x]=id)});return s}
/* ---------- helpers on data ---------- */
const W=(l,c)=>{const r=D.P[l]&&D.P[l].w[c];return r&&r[0]?r:null};
function show(l,c){const r=W(l,c);if(!r)return'';return (r[3]?r[3]+' ':'')+r[0]}
function pron(c){const r=W(ST.tgt,c);if(!r)return'';return ST.src==='fa'&&r[2]?r[2]:r[1]}
const lab=(k,v)=>{const p=D.P[ST.src];return(p&&p.lab[k]&&p.lab[k][v])||v}
function setAccent(){if(ST.tp)return;const m=META[ST.tgt||CUR&&CUR.tgt||ST.src||'en'];document.documentElement.style.setProperty('--ac',ST.acc||(m?m[2]:'#2f6bff'))}
function setDir(l){l=UIL()||l;const p=D.P[l];document.documentElement.dir=p?p.dir:'ltr';document.documentElement.lang=l||'en'}
const TPD={h1:260,h2:300,sat:70,btn:55,bgL:96,bgS:20,txt:70};
const TPV=['--bg','--card','--ink','--mu','--line','--ac','--ac2','--sh'];
function tpCalc(t){const dk=t.bgL<50,h=t.h1,bs=t.bgS,L=dk?Math.min(98,70+t.txt*.27):Math.max(6,32-t.txt*.24),hs=n=>`hsl(${h} ${n}`;
  return{dk,'--bg':`hsl(${h} ${bs}% ${t.bgL}%)`,'--card':dk?`hsl(${h} ${Math.max(0,bs-4)}% ${Math.min(100,t.bgL+7)}%)`:`hsl(${h} ${Math.round(bs*.5)}% ${Math.min(100,Math.round(t.bgL+(100-t.bgL)*.75))}%)`,'--ink':`hsl(${h} 25% ${Math.round(L)}%)`,'--mu':`color-mix(in srgb,hsl(${h} 25% ${Math.round(L)}%) 58%,hsl(${h} ${bs}% ${t.bgL}%))`,'--line':`color-mix(in srgb,hsl(${h} 25% ${Math.round(L)}%) 13%,hsl(${h} ${bs}% ${t.bgL}%))`,'--ac':`hsl(${h} ${t.sat}% ${t.btn}%)`,'--ac2':`hsl(${t.h2} ${t.sat}% ${Math.min(78,t.btn+4)}%)`,'--sh':dk?'0 1px 2px rgba(0,0,0,.4),0 6px 20px rgba(0,0,0,.35)':`0 1px 2px hsl(${h} 30% 20% / .06),0 6px 20px hsl(${h} 30% 20% / .09)`}}
function applyTP(){const r=document.documentElement,t=ST.tp&&{...TPD,...ST.tp};if(!t){TPV.forEach(k=>r.style.removeProperty(k));applyTheme();return}const c=tpCalc(t);TPV.forEach(k=>r.style.setProperty(k,c[k]));r.dataset.theme=c.dk?'dark':'light'}
function applyTheme(){if(ST.theme==='auto')delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme=ST.theme}
function speak(text,l){try{const u=new SpeechSynthesisUtterance(text);u.lang=(D.P[l]||{}).tts||l;u.rate=ST.slow?.65:(ST.rate||.95);const vs=speechSynthesis.getVoices(),vn=(ST.voices||{})[l];const vo=vn&&vs.find(x=>x.name===vn);if(vo)u.voice=vo;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
function sentIdx(l){const p=D.P[l];if(p.idx)return p.idx;const m={},by={},seen=new Set();p.s.forEach((s,i)=>{const t=fill(s);if(seen.has(t))return;seen.add(t);s[2].forEach(c=>{(by[c]=by[c]||[]).push(i)});const k=s[2].join(',');if(!(k in m))m[k]=i});for(const c in by)if(!(c in m))m[c]=by[c][0];p.idx={first:m,by};return p.idx}
const fill=(s,gap)=>s[0].replace(/\{(\d+)\}/g,(m,j)=>gap?'_____':s[1][+j]);
/* ---------- parent → child pages ---------- */
let navTok=0;
function page(html,cls=''){root.innerHTML='<div class="pg '+cls+'">'+html+'</div>';return root.firstChild}
const ring=['Hello','سلام','مرحبا','Salam','Hallo','Hola','Bonjour','नमस्ते','Ciao','こんにちは','안녕하세요','Olá','Привет','Merhaba','你好'];
/* ---------- onboarding: 7 steps, each with a 3D character in the background and a big message ---------- */
const OBC=['luki','jooji','dooni','leo','mimi','pingo','luki'],OBE={luki:'👻',jooji:'🐥',dooni:'🫏',leo:'🦁',mimi:'🐱',pingo:'🐧',bani:'🐰'};
let OBP=null,OBT=0;
function obKill(){clearInterval(OBT);OBT=0;if(OBP){try{OBP.destroy()}catch(e){}OBP=null}}
/* the guide: lives beside the message (never behind it), speaks it in a bubble and keeps making informing / guiding gestures */
const OBG=['idea','nod','wave','thumbsup','lookaround','clap','think','shrug','salute'];
async function obStage(id,anim){
  const h=$('#obs');if(!h)return;obKill();
  const big=!!h.closest('.obgd.w'),fb=()=>{h.innerHTML='<div class="obe">'+(OBE[id]||'🐾')+'</div>'};
  try{
    const ok=window.RM2&&RM2.palLoad&&await RM2.palLoad();
    if(!h.isConnected)return;
    if(!ok||!window.PALS||!PALS.ok){fb();return}
    const sz=big?Math.round(Math.min(230,Math.max(150,innerWidth*.5))):Math.round(Math.min(150,Math.max(100,innerWidth*.3)));
    h.innerHTML='';h.style.width=h.style.height=Math.round(sz*1.3)+'px';
    OBP=PALS.create(h,id,sz);OBP.sfxOn=false;OBP.play(anim||'wave');
    const ok2=n=>!PALS.commons||PALS.commons.includes(n)||(PALS.clips&&(Array.isArray(PALS.clips)?PALS.clips.includes(n):n in PALS.clips));
    const pose=()=>{if(!OBP||!h.isConnected)return;const l=OBG.filter(ok2);OBP.play(l[Math.floor(Math.random()*l.length)])};
    OBT=setInterval(pose,6500);
    h.onclick=()=>{if(OBP)OBP.play(['wave','cheer','spin','twirl','bounce','dance','cutepose','jumpjack'][Math.floor(Math.random()*8)])};
  }catch(e){fb()}
}
function obDots(n){return '<div class="obd">'+[1,2,3,4,5,6,7].map(i=>`<i class="${i<n?'d':i===n?'on':''}"></i>`).join('')+'</div>'}
function obPage(n,msg,body,opt={}){
  const el=page(`${obDots(n)}${opt.back?'<button class="back obb" id="bk">←</button>':''}<div class="obgd${n===1?' w':''}"><div class="obs" id="obs"></div><div class="obm">${msg}</div></div><div class="obc">${body}</div>`,'ob');
  obStage(OBC[n-1],opt.anim);
  const bk=$('#bk');if(bk)bk.onclick=opt.back;
  return el;
}
function pWelcome(){
  CUR={src:'',tgt:''};setAccent();document.documentElement.dir='ltr';obKill();
  const el=obPage(1,`<div class="logo sm">R</div><div id="tg">${esc(NS.en.ob_hi)}</div>`,`<div class="hello">${ring.map(x=>'<span>'+x+'</span>').join('')}</div><button class="btn big" id="go">${esc(NS.en.start)} →</button>`,{anim:'wave'});
  let i=0;const t=setInterval(()=>{const g=$('#tg');if(!g){clearInterval(t);return}i=(i+1)%LANGS.length;g.style.opacity=0;setTimeout(()=>{if(!g.isConnected)return;g.textContent=NS[LANGS[i]].ob_hi||NS.en.ob_hi;g.dir=LANGS[i]==='fa'||LANGS[i]==='ar'?'rtl':'ltr';g.style.opacity=1},250)},2600);
  $('#go').onclick=()=>{clearInterval(t);pSrc()};
}
function grid(ex,sel,cb){return `<div class="grid">${LANGS.filter(l=>l!==ex).map(l=>`<button class="lc ${l===sel?'on':''}" data-l="${l}"><b>${META[l][1]}</b><span>${esc(META[l][0])}</span></button>`).join('')}</div>`}
function pSrc(){
  const el=obPage(2,esc(NS.en.q_src),grid('',ST.src||CUR.src),{back:pWelcome,small:true,anim:'cheer'});
  el.onclick=async e=>{const b=e.target.closest('.lc');if(!b)return;const l=b.dataset.l;CUR.src=l;setAccent();
    b.querySelector('span').textContent='…';
    try{await loadPack(l);setDir(l);pTgt()}catch(er){b.querySelector('span').textContent=META[l][0];alert(NS.en.neterr)}}
}
function pTgt(){
  const s=CUR.src,el=obPage(3,esc(TN('q_tgt')),`<div class="mu sm" style="margin:-6px 0 10px">${META[s][1]} ${esc(META[s][0])}</div>${grid('',ST.tgt)}`,{back:()=>{setDir('en');pSrc()},small:true,anim:'think'});
  el.onclick=e=>{const b=e.target.closest('.lc');if(!b)return;CUR.tgt=b.dataset.l;pBuild()}
}
const obBtn=(id,t,cls='')=>`<button class="obo ${cls}" ${id}>${t}</button>`;
function pLevel(){
  const L=[['🌱','ob_l0','A1'],['🌿','ob_l1','A2'],['🌳','ob_l2','B1'],['🚀','ob_l3','B2']];
  const el=obPage(4,esc(T('ob_lvl')),L.map(([ic,k,lv])=>obBtn(`data-lv="${lv}"`,`<span>${ic}</span> ${esc(T(k))}`)).join(''),{anim:'think'});
  el.onclick=e=>{const b=e.target.closest('[data-lv]');if(!b)return;P().lv0=b.dataset.lv;save();pGoal()};
}
function pGoal(){
  const G=[5,10,20,30],rm=window.RM2&&RM2.setReminder;
  const el=obPage(5,esc(T('ob_goal')),G.map(n=>obBtn(`data-g="${n}"`,'<span>'+n+'</span> '+esc(T('ob_gn',{n:''}).trim()),n===ST.goal?'on':'')).join('')+(rm?`<label class="obr"><input type="checkbox" id="rmc" checked> ${esc(T('ob_rem'))} <input type="time" id="rmt" value="19:00"></label>`:'')+`<button class="btn big" id="nx">${esc(T('ob_next'))} →</button>`,{anim:'cheer',back:pLevel});
  el.onclick=e=>{const b=e.target.closest('[data-g]');if(b){ST.goal=+b.dataset.g;save();el.querySelectorAll('[data-g]').forEach(x=>x.classList.toggle('on',x===b));if(OBP)OBP.play('cheer')}};
  $('#nx').onclick=()=>{if(rm){const c=$('#rmc');try{RM2.setReminder(c&&c.checked,($('#rmt')||{}).value||'19:00')}catch(er){}}pPal()};
}
const OBPALS=['luki','jooji','dooni','leo','mimi','pingo','bani'];
function pPal(){
  const cur=(window.RM2&&RM2.palCfg&&RM2.palCfg().id)||'luki';
  const el=obPage(6,esc(T('ob_pal')),`<div class="obg">${OBPALS.map(k=>`<button class="obo pk ${k===cur?'on':''}" data-pk="${k}"><span>${OBE[k]}</span> ${k}</button>`).join('')}</div><button class="btn big" id="nx">${esc(T('ob_next'))} →</button>`,{anim:'cheer',back:pGoal});
  el.onclick=e=>{const b=e.target.closest('[data-pk]');if(!b)return;const id=b.dataset.pk;if(window.RM2&&RM2.palChoose)RM2.palChoose(id);el.querySelectorAll('[data-pk]').forEach(x=>x.classList.toggle('on',x===b));OBC[5]=id;obStage(id,'cheer')};
  $('#nx').onclick=pAuth;
}
function obFin(){obKill();ST.onb=1;save();shell('home');setTimeout(()=>{if(window.RM2&&RM2.placement)RM2.placement()},60)}
function pAuth(){
  const A=K.get('auth'),C=K.get('config');if(A&&A.state())return obFin();
  const can=!!(A&&C&&C.get('api')&&C.get('googleClientId'));
  const el=obPage(7,esc(T('ob_auth_t')),`<div class="obn">${esc(T('ob_auth_n'))}</div>${can?`<div class="obg2"><b>${esc(T('ob_gg'))}</b><div id="gbtn"></div></div>`:`<div class="obn sm">${esc(T('ob_noset'))}</div>`}<button class="btn big ${can?'s':''}" id="gst">${esc(T('ob_guest'))}</button>`,{anim:'wave',back:pPal});
  let done=0;const go=()=>{if(done)return;done=1;obFin()};
  if(can){A.signIn($('#gbtn')).then(r=>{if(!r.ok){const g=$('#gbtn');if(g)g.textContent='✕ '+(r.err||'')}});K.on('auth:changed',u=>{if(u&&$('#gbtn'))go()})}
  $('#gst').onclick=go;
}
async function pBuild(){
  const my=++navTok,{src,tgt}=CUR;ST.src=src;ST.tgt=tgt;setAccent();
  const steps=[TN('b_skel'),TN('loading',{l:META[src][0]}),TN('loading',{l:META[tgt][0]}),TN('b_home')];
  const el=page(`<div class="stp"><div class="logo" style="margin:0 auto">${META[tgt][1]}</div><div class="bar"><i id="pb"></i></div><ul style="padding:0;margin:0">${steps.map((s,i)=>`<li id="s${i}">${esc(s)}</li>`).join('')}</ul><div class="err" id="er"></div></div>`);
  const mark=(i,st)=>{const n=$('#s'+i);if(n)n.className=st;const b=$('#pb');if(b)b.style.width=Math.min(100,(i+(st==='ok'?1:.4))*25)+'%'};
  try{
    mark(0,'on');await loadSk();mark(0,'ok');
    mark(1,'on');await loadPack(src);mark(1,'ok');
    mark(2,'on');await loadPack(tgt);mark(2,'ok');
    mark(3,'on');save();applyTheme();setDir(src);
    await new Promise(r=>setTimeout(r,250));mark(3,'ok');
    if(my===navTok){if(ST.onb)shell('home');else pLevel()}
  }catch(er){console.error(er);const e=$('#er');if(e)e.innerHTML=esc(TN('neterr'))+'<br><br><button class="btn sm" id="rt">'+esc(TN('retry'))+'</button> <button class="btn s sm" id="bk">'+esc(TN('back'))+'</button>';
    const r=$('#rt');if(r)r.onclick=pBuild;const b=$('#bk');if(b)b.onclick=pTgt}
}
/* ---------- app shell ---------- */
let TAB='home';
const MEDN={fa:'رسانه',en:'Media',ar:'الوسائط',az:'Media',de:'Medien',es:'Medios',fr:'Médias',hi:'मीडिया',it:'Media',ja:'メディア',ko:'미디어',pt:'Mídia',ru:'Медиа',tr:'Medya',zh:'媒体'};
const NAV=[['music','🎬'],['learn','🎓'],['home','🏠'],['prac','🎯'],['exam','🏅'],['play','🎮']];let NAVSC=null;
const NVL={home:{fa:'خانه',en:'Home',ar:'الرئيسية',de:'Start',tr:'Ana sayfa',es:'Inicio',fr:'Accueil',it:'Home',pt:'Início',ru:'Главная',zh:'首页',ja:'ホーム',ko:'홈',hi:'होम',az:'Ana səhifə'},learn:{fa:'آموزش',en:'Learn',ar:'تعلّم',de:'Lernen',tr:'Öğren',es:'Aprender',fr:'Apprendre',it:'Impara',pt:'Aprender',ru:'Учёба',zh:'学习',ja:'学習',ko:'학습',hi:'सीखें',az:'Öyrən'},play:{fa:'تمرین و بازی',en:'Practice',ar:'تمرين',de:'Üben',tr:'Pratik',es:'Practicar',fr:'Pratiquer',it:'Pratica',pt:'Praticar',ru:'Практика',zh:'练习',ja:'練習',ko:'연습',hi:'अभ्यास',az:'Məşq'},exam:{fa:'آزمون',en:'Exams',ar:'اختبارات',de:'Prüfung',tr:'Sınav',es:'Exámenes',fr:'Examens',it:'Esami',pt:'Exames',ru:'Экзамены',zh:'考试',ja:'試験',ko:'시험',hi:'परीक्षा',az:'İmtahan'},more:{fa:'بیشتر',en:'More',ar:'المزيد',de:'Mehr',tr:'Daha fazla',es:'Más',fr:'Plus',it:'Altro',pt:'Mais',ru:'Ещё',zh:'更多',ja:'その他',ko:'더보기',hi:'और',az:'Daha çox'}};
const nvl=k=>k==='home'?(NVL.home[UIL()]||NVL.home.en):k==='music'?(MEDN[UIL()]||MEDN.en):k==='ai'?T('ai_t'):T('mn_'+k);
const HUBS={learn:['📚','🔁','🔎','📖','📝','📰','🧳','📐','🗨️','💬','🧠','🇮🇷'],play:['🎯','🎮','🌍','⚔️','🥷','🎭','🐾','🦁'],exam:['🎓','📏','📈']};
const CHRT=['🐾','🎭','🦁','🎵','💬','🇮🇷','🤖'];
const NAVOF={ai:'',music:'music',home:'home',days:'learn',rev:'prac',dict:'learn',set:'',learn:'learn',prac:'prac',play:'play',exam:'exam',more:''};
/* ---------- nested menu tree: home shows only categories; each opens its own sub-menu ---------- */
const MENU={
  learn:{ic:'🎓',c:'#6366f1,#8b5cf6',ch:['📚','📖','🗨️','📰','🧳','🔎']},
  prac:{ic:'🎯',c:'#ef4444,#f97316',ch:['⚡','🔁','🎯','🎤','🖊️','👂','🧩','🔄','🩹','🎚️','🧐','📝','🫧','🎧','🔙','🧱','🎙️','🪝','📓','✍️','🔀','📐','📏','🎓','📈']},
  play:{ic:'🎮',c:'#10b981,#0d9488',ch:['🏆','🌐','🎮','🥷','⚔️','🌍']},
    more:{ic:'🧩',c:'#64748b,#475569',ch:['👤','⚙️','☁️','🪙','🎠','♿','other']},
  exam:{ic:'🏅',c:'#f59e0b,#d97706',ch:['📏','🎓','📈']},
  other:{ic:'✨',c:'#a855f7,#6366f1',ch:null}
};
let MPATH=[],RET=null;
function menuItems(key){
  const tok=t=>{const[a,n]=t.split('#');return[a,+(n||0)]};
  if(key==='other'){const used=new Set();Object.values(MENU).forEach(n=>n.ch&&n.ch.forEach(t=>{if(!MENU[t]){const[a,n]=tok(t);used.add(a+'#'+n)}}));const cnt={};
    return RMT.filter(t=>{cnt[t.icon]=(cnt[t.icon]??-1)+1;return !used.has(t.icon+'#'+cnt[t.icon])&&!CHRT.includes(t.icon)}).map(t=>({leaf:t}))}
  return MENU[key].ch.map(t=>{if(MENU[t]){return menuItems(t).length?{grp:t}:null}const[a,n]=tok(t);const tl=RMT.filter(x=>x.icon===a)[n];return tl?{leaf:tl}:null}).filter(Boolean)}
const FEAT={learn:'📚',prac:'⚡',play:'🏆',more:'👤'};
const SECS={prac:[['mg_mem',['📐','🔁','🩹','🎯','⚡','📝','🪝','🔀','🎚️']],['mg_lis',['🎤','👂','🫧','🎧','🎙️']],['mg_rw',['🖊️','🧩','🔄','🧐','🔙','🧱','📓','✍️']]]};
function mStats(key){const p=P(),R2=window.RM2||{},L=Object.keys(p.learned||{}).length,c=[];
  if(key==='learn')c.push('✅ '+L,'🔥 '+p.streak);
  else if(key==='prac'){let d=0;try{d=queue().due.length}catch(e){}c.push('🔁 '+d,'⭐ '+p.xp)}
  else if(key==='exam')c.push('📏 '+(p.place?p.place.lv:'—'),'📈 '+L);
  else if(key==='play'){try{const k=R2.act.cup();c.push('🏆 '+(k.cups+(k.duel||0)))}catch(e){}try{c.push('🪙 '+R2.coins.bal())}catch(e){}}
  return c}
function mBadge(t){try{if(t.icon==='🔁'){const d=queue().due.length;return d?d:''}if(t.icon==='🏆'){const k=RM2.act.cup();return k.cups+(k.duel||0)}if(t.icon==='🪙')return RM2.coins.bal()}catch(e){}return ''}
function menuTile(it,feat){
  if(it.grp){const n=MENU[it.grp];return`<button class="mt g" data-g="${it.grp}"><i style="background:linear-gradient(135deg,${n.c})">${n.ic}</i><b>${esc(T('mn_'+it.grp))}</b><em>${menuItems(it.grp).length} ›</em></button>`}
  const t=it.leaf,bd=mBadge(t),col=HCOL[t.icon]||'#6366f1,#8b5cf6';
  if(feat)return`<button class="mt feat" data-i="${RMT.indexOf(t)}" style="background:linear-gradient(135deg,${col})"><i>${t.icon}</i><span><b>${esc(t.label())}</b>${bd!==''?`<small>${bd}</small>`:''}</span><u>▶</u></button>`;
  return`<button class="mt" data-i="${RMT.indexOf(t)}"><i style="background:linear-gradient(135deg,${col})">${t.icon}</i><b>${esc(t.label())}</b>${bd!==''?`<s>${bd}</s>`:''}</button>`}
function vMenu(v){
  const key=MPATH[MPATH.length-1],node=MENU[key],items=menuItems(key),top=MPATH.length===1&&FEAT[key];
  const lst=key==='learn'||key==='prac',fi=top&&!lst?items.find(x=>x.leaf&&x.leaf.icon===FEAT[key]):null,rest=items.filter(x=>x!==fi&&!(key==='prac'&&x.leaf&&x.leaf.icon==='🎯'));
  const dense=key==='prac'||rest.length>8;
  let body;
  if(key==='prac'){const used=new Set(),row=x=>menuTile(x,1),EX=['📏','🎓'],ex=rest.filter(x=>x.leaf&&EX.includes(x.leaf.icon)),pg=rest.find(x=>x.leaf&&x.leaf.icon==='📈');
    const SI=[['🧠','#6366f1,#8b5cf6'],['🎧','#06b6d4,#3b82f6'],['✍️','#10b981,#0d9488']],sub=x=>`<button class="mt sub" data-i="${RMT.indexOf(x.leaf)}"><i style="background:linear-gradient(135deg,${HCOL[x.leaf.icon]||'#6366f1,#8b5cf6'})">${x.leaf.icon}</i><b>${esc(x.leaf.icon==='🔁'?T('rv_fc'):x.leaf.label())}</b><em>›</em></button>`;
    body=SECS.prac.map(([k,ics],n)=>{const g=rest.filter(x=>x.leaf&&ics.includes(x.leaf.icon));g.forEach(x=>used.add(x));const id='sec'+n;return g.length?`<div class="mlst"><div class="macw ${ACC[id]?'open':''}"><button class="mt feat" data-acc="${id}" style="background:linear-gradient(135deg,${SI[n][1]})"><i>${SI[n][0]}</i><span><b>${esc(T(k))}</b><small>${g.length}</small></span><u class="chev">${ACC[id]?'▴':'▾'}</u></button><div class="macc">${g.map(sub).join('')}</div></div></div>`:''}).join('');
    const left=rest.filter(x=>!used.has(x)&&!ex.includes(x)&&x!==pg);if(left.length)body+=`<div class="msec"><div class="mlst">${left.map(row).join('')}</div></div>`;
    body+=`<div class="msec"><div class="mlst">`+(ex.length?`<div class="macw ${ACC.exam?'open':''}"><button class="mt feat" data-acc="exam" style="background:linear-gradient(135deg,#f59e0b,#d97706)"><i>🏅</i><span><b>${esc(T('mn_exam'))}</b></span><u class="chev">${ACC.exam?'▴':'▾'}</u></button><div class="macc">${ex.map(x=>`<button class="mt sub" data-i="${RMT.indexOf(x.leaf)}"><i style="background:linear-gradient(135deg,${HCOL[x.leaf.icon]||'#f59e0b,#d97706'})">${x.leaf.icon}</i><b>${esc(x.leaf.label())}</b><em>›</em></button>`).join('')}</div></div>`:'')+(pg?row(pg):'')+`</div></div>`}
  else if(SECS[key]){const used=new Set();body=SECS[key].map(([k,ics])=>{const g=rest.filter(x=>x.leaf&&ics.includes(x.leaf.icon));g.forEach(x=>used.add(x));return g.length?`<div class="msec"><h3>${esc(T(k))}</h3><div class="mgrid d3">${g.map(x=>menuTile(x)).join('')}</div></div>`:''}).join('');
    const left=rest.filter(x=>!used.has(x));if(left.length)body+=`<div class="msec"><div class="mgrid d3">${left.map(x=>menuTile(x)).join('')}</div></div>`}
  else if(lst)body=`<div class="mlst">${rest.map(x=>{const ic=x.leaf&&x.leaf.icon,sb=ic&&subsOf(ic);return sb?`<div class="macw ${ACC[ic]?'open':''}">${menuTile(x,1).replace('<u>▶</u>',`<u class="chev">${ACC[ic]?'▴':'▾'}</u>`).replace('class="mt feat"',`class="mt feat" data-acc="${ic}"`)}<div class="macc">${sb.map(([i2,lb,att,c])=>`<button class="mt sub" ${att}><i style="background:linear-gradient(135deg,${c})">${i2}</i><b>${esc(lb)}</b><em>›</em></button>`).join('')}</div></div>`:menuTile(x,1)}).join('')}</div>`;
  else if(key==='play'||key==='exam'){
    const sub=(x,ic)=>`<button class="mt sub" data-i="${RMT.indexOf(x.leaf)}"><i style="background:linear-gradient(135deg,${HCOL[x.leaf.icon]||'#6366f1,#8b5cf6'})">${x.leaf.icon}</i><b>${esc(x.leaf.label())}</b><em>›</em></button>`;
    const acc=(id,ic,col,title,n,inner)=>{if(ACC[id]===undefined)ACC[id]=true;return`<div class="macw ${ACC[id]?'open':''}"><button class="mt feat" data-acc="${id}" style="background:linear-gradient(135deg,${col})"><i>${ic}</i><span><b>${esc(title)}</b><small>${n}</small></span><u class="chev">${ACC[id]?'▴':'▾'}</u></button><div class="macc">${inner}</div></div>`};
    if(key==='play')body=`<div class="mlst">${acc('playg','🎮','#10b981,#0d9488',T('mn_play'),rest.length,rest.map(x=>sub(x)).join(''))}</div>`;
    else{const ex=(RM2.examList?RM2.examList():[]),lf=x=>x.leaf&&x.leaf.icon,a1=rest.filter(x=>lf(x)==='📏'),b1=rest.filter(x=>lf(x)==='📈'),o1=rest.filter(x=>!['📏','📈','🎓'].includes(lf(x)));
      body=`<div class="mlst">${a1.map(x=>menuTile(x,1)).join('')}${ex.length?acc('exg','🎓','#8b5cf6,#6366f1',T('ex_intl'),ex.length,ex.map(e=>`<button class="mt sub" data-ex="${esc(e.k)}"><i style="background:linear-gradient(135deg,#8b5cf6,#6366f1)">🎓</i><b>${esc(e.name)}<small style="display:block;font-weight:400;opacity:.6;font-size:12px">${e.n} · ${e.known}/${e.tot}</small></b><em>›</em></button>`).join('')):''}${[...o1,...b1].map(x=>menuTile(x,1)).join('')}</div>`}}
  else body=`<div class="mgrid ${dense?'d3':''}">${rest.map(x=>menuTile(x)).join('')}</div>`;
  const st=top?mStats(key):[];
  v.innerHTML=`<div class="mhd" style="background:linear-gradient(135deg,${node.c})"><span class="mwm">${node.ic}</span><div class="mrow"><button class="mbk" id="mbk" aria-label="back">←</button><div><div class="mcr">${esc(MPATH.map(k=>T('mn_'+k)).join(' › '))}</div><h1>${node.ic} ${esc(T('mn_'+key))}</h1></div></div>${st.length?`<div class="mst">${st.map(s=>`<span>${esc(s)}</span>`).join('')}</div>`:''}</div><div class="mbody">${fi?menuTile(fi,1):''}${items.length>8?`<input type="search" class="msq" id="msq" placeholder="${esc(T('srch'))}">`:''}<div id="mlist">${body}</div></div>`;
  const q=$('#msq');if(q)q.oninput=()=>{const f=q.value.trim().toLowerCase();v.querySelectorAll('#mlist .mt').forEach(b=>{b.style.display=!f||b.innerText.toLowerCase().includes(f)?'':'none'});v.querySelectorAll('#mlist .msec').forEach(s=>{s.style.display=[...s.querySelectorAll('.mt')].some(b=>b.style.display!=='none')?'':'none'})};
  v.onclick=e=>{const ac=e.target.closest('[data-acc]');if(ac){const ic=ac.dataset.acc;ACC[ic]=!ACC[ic];ac.closest('.macw').classList.toggle('open',ACC[ic]);ac.querySelector('.chev').textContent=ACC[ic]?'▴':'▾';return}const gs=e.target.closest('[data-gs]');if(gs){RET={tab:TAB,path:[...MPATH]};const R2=window.RM2,k=gs.dataset.gs;if(k==='les')tl('📖').open();else R2.grammarMix();return}const dm=e.target.closest('[data-m]');if(dm){RET={tab:TAB,path:[...MPATH]};DM=dm.dataset.m;DMFROM=1;shell('days');return}const g=e.target.closest('[data-g]');if(g){MPATH.push(g.dataset.g);vMenu(v);v.scrollTop=0;return}const ex=e.target.closest('[data-ex]');if(ex){RET={tab:TAB,path:[...MPATH]};RM2.examDetail(ex.dataset.ex);return}const t=e.target.closest('[data-i]');if(t){RET={tab:TAB,path:[...MPATH]};RMT[+t.dataset.i].open()}};
  $('#mbk').onclick=()=>{if(MPATH.length>1){MPATH.pop();vMenu(v)}else{MPATH=[];shell('home')}};
}
const goHome=()=>{if(RET&&RET.tab==='set'){RET=null;shell('set')}else if(RET&&MENU[RET.tab]){MPATH=[...RET.path];shell(RET.tab)}else shell('home')};
const lgText=()=>META[ST.src][1]+' → '+META[ST.tgt][1]+' '+META[ST.tgt][0]+' ▾';
let FCM=0,DM=null,ACC={},DMFROM=0;
function shell(tab){if(tab==='more')tab='set';if((tab||TAB)!=='days'){FCM=0;DM=null}
  TAB=tab||TAB;setAccent();setDir(ST.src);
  const p=P();
  root.innerHTML=`<div class="shell"><div class="top"><div class="tr1"><div class="tg"><button class="tbi" data-a="set" aria-label="settings">⚙️</button><button class="tbi" data-a="dict" aria-label="search">🔎</button></div><button class="tbai" data-a="ai" aria-label="AI"><span>🤖</span><b>AI</b></button><div class="tg tgp"><span class="pill">🔥 ${p.streak}</span><span class="pill">⭐ ${p.xp}</span></div></div><div class="tr2">${['days','rev','dict','set'].includes(TAB)?'<button class="tbk" id="tbk" aria-label="back">←</button>':''}<div class="lgd" id="lgp"><select id="lgs" aria-label="source">${LANGS.map(l=>`<option value="${l}" ${l===ST.src?'selected':''}>${META[l][1]} ${esc(META[l][0])}</option>`).join('')}</select><b>→</b><select id="lgt" aria-label="target">${LANGS.map(l=>`<option value="${l}" ${l===ST.tgt?'selected':''}>${META[l][1]} ${esc(META[l][0])}</option>`).join('')}</select></div></div></div><div id="view"></div><nav class="nav">${NAV.map(([k,i])=>`<button data-t="${k}" class="${k===NAVOF[TAB]?'on':''} ${k==='home'?'nmid':''} ${k==='music'||k==='play'||k==='home'?'nbold':''}"><span>${i}</span><em>${esc(nvl(k))}</em></button>`).join('')}</nav></div>`;
  $('.nav').onclick=e=>{const b=e.target.closest('button');if(b){MPATH=[];RET=null;shell(b.dataset.t)}};const tb=$('#tbk');if(tb)tb.onclick=goHome;{const ch=async(k,l)=>{try{await loadPack(l)}catch(er){alert(TN('neterr'));shell(TAB);return}if(k==='s')ST.src=l;else ST.tgt=l;try{await loadPack(ST.src);await loadPack(ST.tgt)}catch(er){}P();save();setAccent();setDir(ST.src);shell(TAB)};const a=$('#lgs'),b=$('#lgt');if(a)a.onchange=()=>ch('s',a.value);if(b)b.onchange=()=>ch('t',b.value)}{const nv=$('.nav');if(nv){const on=nv.querySelector('button.on');if(NAVSC!=null)nv.scrollLeft=NAVSC;if(on){const a=on.offsetLeft-nv.offsetLeft,w=nv.clientWidth;if(a<nv.scrollLeft||a+on.offsetWidth>nv.scrollLeft+w)nv.scrollLeft=a-(w-on.offsetWidth)/2}NAVSC=nv.scrollLeft;nv.onscroll=()=>{NAVSC=nv.scrollLeft}}}document.querySelectorAll('.tbi,.tbai').forEach(b=>b.onclick=()=>{const a=b.dataset.a;if(a==='set')shell('set');else if(a==='dict')shell('dict');else if(a==='ai')shell('ai');else vProf($('#view'))});if(TAB==='home'){RET=null;MPATH=[]}
  const v=$('#view');const mt=x=>{if(MPATH[0]!==TAB)MPATH=[TAB];vMenu(x)};({home:vHome,days:vDays,rev:vRev,dict:vDict,set:vSet,learn:mt,prac:mt,play:mt,exam:mt,more:mt,music:x=>{const t=RMT.find(z=>z.icon==='🎵');if(t)t.open()},ai:x=>{const t=RMT.find(z=>z.icon==='🤖');if(t)t.open()}}[TAB])(v);
}
const allC=()=>D.sk.units.flatMap(u=>u[2]);
function lvStat(){const o={};LV.forEach(l=>o[l]={n:0,k:0});const L=P().learned;D.sk.units.forEach(([id,l,c])=>{c.forEach(x=>{if(!W(ST.tgt,x))return;o[l].n++;if(L[x])o[l].k++})});return o}
function queue(){const p=P(),d=dayN(),due=[],nw=[];
  for(const c in p.srs){if(p.srs[c][1]<=d&&W(ST.tgt,+c))due.push(+c)}
  const left=Math.max(0,ST.goal-(p.nt.d===today()?p.nt.n:0));
  const l0=LV.indexOf(p.lv0||'A1');for(const[,lv,cs]of D.sk.units){if(LV.indexOf(lv)<l0)continue;for(const x of cs){if(nw.length>=left)break;if(!p.srs[x]&&W(ST.tgt,x))nw.push(x)}if(nw.length>=left)break}
  return{due,nw}}
const RMT=[{icon:'👤',label:()=>SL('st_prof'),open:()=>vProf($('#view'))},{icon:'🔁',label:()=>T('rv'),open:()=>shell('rev')},{icon:'⚙️',label:()=>T('set'),open:()=>shell('set')},{icon:'📚',label:()=>T('wd'),open:()=>{DM=null;DMFROM=0;shell('days')}},{icon:'🎯',label:()=>T('pr'),open:()=>vQuiz()},{icon:'🔎',label:()=>T('srch').replace('…',''),open:()=>shell('dict')},{icon:'💬',label:()=>T('sent'),open:()=>vSent()}];
const HGRP=[['hg_learn','📚',['📚','🔁','🎯','📖','📝','📰','🧠','📐','🗨️','💬','📏','🎓','📈']],['hg_fun','🎮',['🎮','🌍','🎵','🥷','⚔️','🎭','🔎']],['hg_me','🦁',['👤','🦁','🐾','🪙','♿','☁️','⚙️']]];
const HCOL={'🧳':'#0ea5e9,#14b8a6','📚':'#3b82f6,#6366f1','🎯':'#ef4444,#f97316','📖':'#14b8a6,#10b981','📝':'#f59e0b,#f97316','📰':'#64748b,#475569','🧠':'#ec4899,#d946ef','📐':'#10b981,#14b8a6','🗨️':'#06b6d4,#3b82f6','💬':'#06b6d4,#0ea5e9','📏':'#a16207,#78716c','🇮🇷':'#16a34a,#dc2626','🎓':'#8b5cf6,#6366f1','📈':'#64748b,#3b82f6','🎮':'#6366f1,#4f46e5','🌍':'#10b981,#0d9488','🎵':'#ec4899,#f43f5e','🥷':'#374151,#111827','⚔️':'#ef4444,#dc2626','🎭':'#a855f7,#7c3aed','🔎':'#22c55e,#16a34a','👤':'#8b5cf6,#6366f1','🔁':'#0ea5e9,#6366f1','⚙️':'#64748b,#334155','🦁':'#f59e0b,#fb923c','🐾':'#a855f7,#6366f1','🤖':'#d946ef,#a21caf','🪙':'#eab308,#f59e0b','♿':'#0ea5e9,#2563eb','☁️':'#38bdf8,#0284c7'};
const HGLD={hg_all:{fa:'همه‌ی امکانات',en:'All features',ar:'كل الميزات',de:'Alle Funktionen',tr:'Tüm özellikler',es:'Todas las funciones',fr:'Toutes les fonctions',it:'Tutte le funzioni',pt:'Todos os recursos',ru:'Все функции',zh:'全部功能',ja:'すべての機能',ko:'모든 기능',hi:'सभी सुविधाएँ',az:'Bütün imkanlar'},hg_learn:{fa:'یادگیری',en:'Learning',ar:'التعلّم',de:'Lernen',tr:'Öğrenme',es:'Aprender',fr:'Apprendre',it:'Imparare',pt:'Aprender',ru:'Обучение',zh:'学习',ja:'学習',ko:'학습',hi:'सीखना',az:'Öyrənmə'},hg_fun:{fa:'سرگرمی و بازی',en:'Fun & games',ar:'ترفيه وألعاب',de:'Spaß & Spiele',tr:'Eğlence ve oyun',es:'Juegos',fr:'Jeux',it:'Giochi',pt:'Jogos',ru:'Игры',zh:'娱乐',ja:'ゲーム',ko:'게임',hi:'खेल',az:'Əyləncə'},hg_me:{fa:'من و ابزارها',en:'Me & tools',ar:'أنا وأدواتي',de:'Ich & Tools',tr:'Ben ve araçlar',es:'Yo y herramientas',fr:'Moi et outils',it:'Io e strumenti',pt:'Eu e ferramentas',ru:'Я и инструменты',zh:'我的工具',ja:'マイツール',ko:'내 도구',hi:'मेरे टूल',az:'Mən və alətlər'}};
const HGL=k=>(HGLD[k][UIL()]||HGLD[k].en);
let WRC=0;
const WTH={casino:'conic-gradient(#8f1d2c 0 25%,#15161d 0 50%,#0f5a3a 0 75%,#d9b45b 0)',ocean:'conic-gradient(#0b4f8a 0 25%,#0a1f33 0 50%,#0e7c86 0 75%,#7fd6e8 0)',royal:'conic-gradient(#4b1f8f 0 25%,#150f26 0 50%,#7a1f5c 0 75%,#e0b84f 0)',neon:'conic-gradient(#2b0a4d 0 25%,#0a0a14 0 50%,#05364a 0 75%,#ff2bd6 0)',forest:'conic-gradient(#1f5a2e 0 25%,#0f1a12 0 50%,#6b4a1f 0 75%,#c9b26a 0)',sunset:'conic-gradient(#c2410c 0 25%,#2a0f14 0 50%,#9d174d 0 75%,#ffb259 0)',sakura:'conic-gradient(#f4a6bd 0 25%,#fff0f4 0 50%,#f7c6d4 0 75%,#d98aa5 0)',ice:'conic-gradient(#bfd7ee 0 25%,#f2f8fd 0 50%,#a7c4e4 0 75%,#6f9ccc 0)'};

function vHome(v){
  RET=null;MPATH=[];
  const q=queue(),CK=['learn','prac','play','more'];
  const LG=LANGS.slice(),LVS=LV.slice();
  const ring=[{n:LG.length,r0:150,r1:198},{n:LVS.length,r0:104,r1:148},{n:CK.length,r0:60,r1:102}];
  ring.forEach(g=>g.st=360/g.n);
  const sel=[Math.max(0,LG.indexOf(ST.tgt)),Math.max(0,LVS.indexOf(P().lv0||'A1')),Math.max(0,Math.round(-WRC/ring[2].st))%CK.length];
  const rot=sel.map((i,k)=>-i*ring[k].st);rot[2]=-sel[2]*ring[2].st;
  const C=200,pt=(r,a)=>[C+r*Math.sin(a*Math.PI/180),C-r*Math.cos(a*Math.PI/180)];
  const sec=(r0,r1,a0,a1)=>{const[p1,p2,p3,p4]=[pt(r1,a0),pt(r1,a1),pt(r0,a1),pt(r0,a0)];return`M${p1}A${r1} ${r1} 0 0 1 ${p2}L${p3}A${r0} ${r0} 0 0 0 ${p4}Z`};
  const PAL=[['#8f1d2c','#15161d'],['#0f5a3a','#15161d'],['#3a2a78','#15161d']];
  const lab=[l=>`<text x="200" y="${C-173+3}" class="wf">${META[l][1]}</text><text x="200" y="${C-173+22}" class="wc">${l.toUpperCase()}</text>`,l=>`<text x="200" y="${C-126+7}" class="wl">${l}</text>`,k=>`<text x="200" y="${C-81+9}" class="wf" style="font-size:28px">${MENU[k].ic}</text>`];
  const lists=[LG,LVS,CK];
  const rg=ring.map((g,k)=>`<g class="wr" id="wr${k}">${lists[k].map((it,i)=>{const a=i*g.st,h=g.st/2-.6;return`<path d="${sec(g.r0,g.r1,a-h,a+h)}" class="sg" ${k===2?`fill="url(#gi${i})"`:`style="fill:var(--s${k}${i%2?'b':'a'})"`}/><g transform="rotate(${a} ${C} ${C})" class="wt">${lab[k](it)}</g>`}).join('')}</g>`).join('');
  const dots=Array.from({length:36},(_,i)=>{const[x,y]=pt(199,i*10+5);return`<circle cx="${x}" cy="${y}" r="1.6" class="gdf"/>`}).join('');
  const defs=CK.map((k,i)=>`<linearGradient id="gi${i}" x1="0" y1="0" x2="1" y2="1">${MENU[k].c.split(',').map((c,j)=>`<stop offset="${j}" stop-color="${c}"/>`).join('')}</linearGradient>`).join('');
  v.innerHTML=`<div class="hw" data-wth="${WTH[ST.wth]?ST.wth:'casino'}"><div class="wh" id="wh"><svg viewBox="0 0 400 400" id="wsv"><defs>${defs}<radialGradient id="gb" cx=".4" cy=".35" r=".8"><stop offset="0" style="stop-color:var(--b1)"/><stop offset=".45" style="stop-color:var(--b2)"/><stop offset="1" style="stop-color:var(--b3)"/></radialGradient><linearGradient id="gw" x1="0" x2="1"><stop offset="0" style="stop-color:var(--gw)" stop-opacity="0"/><stop offset=".5" style="stop-color:var(--gw)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--gw)" stop-opacity="0"/></linearGradient></defs>
  <circle cx="200" cy="200" r="200" class="gbase"/><circle cx="200" cy="200" r="199" class="gl" stroke-width="2"/>${rg}<circle cx="200" cy="200" r="150" class="gl2" stroke-width="2.5"/><circle cx="200" cy="200" r="104" class="gl2" stroke-width="2.5"/><circle cx="200" cy="200" r="60" class="gl2" stroke-width="3"/>${dots}
  <rect x="174" y="2" width="52" height="196" fill="url(#gw)" pointer-events="none"/><path d="M200 22L190 -4H210Z" transform="translate(0 4)" fill="url(#gb)" stroke="#fff" stroke-width="1.5"/></svg>
  <button class="wgo" id="wgo"><b>${esc(T('start'))}</b></button></div>
  <div class="wsum" id="wsum"></div><div class="wch" id="wch"></div></div>`;
  K.emit('home',{view:v});
  const wh=$('#wh'),svg=$('#wsv'),gs=[0,1,2].map(k=>$('#wr'+k)),setR=k=>gs[k].setAttribute('transform',`rotate(${rot[k]} ${C} ${C})`);
  const idx=k=>(((Math.round(-rot[k]/ring[k].st))%ring[k].n)+ring[k].n)%ring[k].n;
  const buzz=()=>{try{navigator.vibrate&&navigator.vibrate(6)}catch(e){}};
  const chips=()=>{const k=CK[sel[2]],its=menuItems(k),sh=its.slice(0,its.length>6?5:6);
    $('#wch').innerHTML=sh.map(it=>it.grp?`<button class="wcc" data-g="${it.grp}">${MENU[it.grp].ic} ${esc(T('mn_'+it.grp))}</button>`:`<button class="wcc" data-i="${RMT.indexOf(it.leaf)}">${it.leaf.icon} ${esc(it.leaf.label())}</button>`).join('')+(its.length>6?`<button class="wcc" data-all="1">⋯ ${its.length}</button>`:'')};
  const sum=()=>{const l=LG[sel[0]],k=CK[sel[2]];$('#wsum').innerHTML=`<b>${META[l][1]} ${esc(META[l][0])}</b><i>·</i><b>${LVS[sel[1]]}</b><i>·</i><b>${MENU[k].ic} ${esc(T('mn_'+k))}</b>`};
  sum();chips();
  let lt=0;
  const commit=async k=>{const i=idx(k);if(i===sel[k])return;sel[k]=i;buzz();
    if(k===0){const l=LG[i],my=++lt;try{await loadPack(l)}catch(e){return}if(my!==lt)return;ST.tgt=l;setAccent();save();const h=document.querySelector('#lgt');if(h)h.value=l;
      sel[1]=Math.max(0,LVS.indexOf(P().lv0||'A1'));rot[1]=-sel[1]*ring[1].st;setR(1)}
    if(k===1){P().lv0=LVS[i];save()}
    if(k===2){WRC=rot[2];chips()}
    sum()};
  const anims=[0,0,0];
  const go=(k,target,dur)=>{cancelAnimationFrame(anims[k]);const from=rot[k],to=target,t0=performance.now();dur=dur||Math.max(200,Math.min(900,Math.abs(to-from)*5));
    const f=t=>{const u=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-u,3);rot[k]=from+(to-from)*e;setR(k);if(u<1)anims[k]=requestAnimationFrame(f);else{rot[k]=to;setR(k);commit(k)}};anims[k]=requestAnimationFrame(f)};
  const snapT=(k,extra=0)=>Math.round((rot[k]+extra)/ring[k].st)*ring[k].st;
  const loc=e=>{const r=svg.getBoundingClientRect(),sc=400/r.width,x=(e.clientX-r.left)*sc-C,y=(e.clientY-r.top)*sc-C;return{rad:Math.hypot(x,y),a:Math.atan2(x,-y)*180/Math.PI}};
  const ringOf=r=>r>=150?0:r>=104?1:r>=60?2:-1;
  let dr=null;
  svg.onpointerdown=e=>{const l=loc(e),k=ringOf(l.rad);if(k<0)return;cancelAnimationFrame(anims[k]);dr={k,a:l.a,r:rot[k],m:0,t:performance.now(),la:l.a,lt:performance.now(),vel:0}};
  svg.onpointermove=e=>{if(!dr)return;const l=loc(e);let d=l.a-dr.a;if(d>180)d-=360;if(d<-180)d+=360;dr.m=Math.max(dr.m,Math.abs(d));if(dr.m>=5&&!dr.c){dr.c=1;try{svg.setPointerCapture(e.pointerId)}catch(x){}}
    let st=l.a-dr.la;if(st>180)st-=360;if(st<-180)st+=360;const now=performance.now();if(now>dr.lt)dr.vel=.7*dr.vel+.3*(st/(now-dr.lt));dr.la=l.a;dr.lt=now;
    rot[dr.k]=dr.r+d;setR(dr.k);const i=idx(dr.k);if(i!==sel[dr.k]&&dr.k!==0)commit(dr.k)};
  svg.onpointerup=svg.onpointercancel=e=>{if(!dr)return;const d=dr;dr=null;const k=d.k;
    if(d.m<5){const l=loc(e),i=Math.round((l.a-rot[k])/ring[k].st),t=-(((i%ring[k].n)+ring[k].n)%ring[k].n)*ring[k].st;let df=(t-rot[k])%360;if(df>180)df-=360;if(df<-180)df+=360;go(k,rot[k]+df);return}
    const fl=Math.max(-.6,Math.min(.6,d.vel))*260;go(k,snapT(k,fl),Math.min(1400,500+Math.abs(fl)*8))};
  $('#wgo').onclick=()=>{const k=CK[sel[2]];if(k==='learn'&&q.nw.length){session(q.nw.slice(0,10),()=>shell('home'))}else{MPATH=[k];shell(k)}};
  v.onclick=e=>{
    const c=e.target.closest('#wch [data-g]');if(c){const k=CK[sel[2]];MPATH=[k,c.dataset.g];shell(k);return}
    const i=e.target.closest('#wch [data-i]');if(i){RET={tab:'home',path:[]};RMT[+i.dataset.i].open();return}
    const al=e.target.closest('#wch [data-all]');if(al){const k=CK[sel[2]];MPATH=[k];shell(k)}}
}
/* ---------- days ---------- */
let DLV='A1',DLVset=0;
const tl=ic=>RMT.find(t=>t.icon===ic);
function subsOf(ic){
  if(ic==='📚')return DMS.map(([i,k,m,c])=>[i,T(k),`data-m="${m}"`,c]);
  return null}
const DMS=[['🎞️','wr_t','reel','#ec4899,#8b5cf6'],['🔁','rv','rev','#10b981,#14b8a6'],['🎯','pr','prac','#ef4444,#f97316'],['📚','wd_list','list','#3b82f6,#6366f1'],['💬','sent','sent','#06b6d4,#3b82f6']];
function vDays(v){
  if(DM===null){
    v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>📚 ${esc(T('wd'))}</h2></div><div class="mlst">${DMS.map(([ic,k,m,c])=>`<button class="mt feat" data-m="${m}" style="background:linear-gradient(135deg,${c})"><i>${ic}</i><span><b>${esc(T(k))}</b></span><u>▶</u></button>`).join('')}</div>`;
    $('#bk').onclick=()=>goHome();
    v.onclick=e=>{const b=e.target.closest('[data-m]');if(b){DM=b.dataset.m;vDays(v)}};return}
  if(!DLVset){DLVset=1;const pl=P().place;if(pl&&LV.includes(pl.lv))DLV=pl.lv}
  const L=P().learned,mi=DMS.find(x=>x[2]===DM)||DMS[3];
  v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${mi[0]} ${esc(T(mi[1]))}</h2></div><div class="chips">${LV.map(l=>`<button class="chip ${l===DLV?'on':''}" data-l="${l}">${l}</button>`).join('')}</div><div class="ulist">${D.sk.units.filter(u=>u[1]===DLV).map(([id,l,c])=>{const k=c.filter(x=>L[x]).length,n=+id.slice(1);return`<button class="ur" data-u="${id}"><b>${esc(T('day',{n}))}</b><span class="mu">${k}/${c.length}</span><i style="width:${k/c.length*100}%"></i></button>`}).join('')}</div>`;
  $('#bk').onclick=()=>{if(DMFROM&&RET)return goHome();DM=null;vDays(v)};
  v.onclick=e=>{const c=e.target.closest('.chip');if(c){DLV=c.dataset.l;return vDays(v)}const u=e.target.closest('.ur');if(u){const id=u.dataset.u,un=D.sk.units.find(x=>x[0]===id),cs=un[2].filter(c=>W(ST.tgt,c)),bk=()=>shell('days');
    if(DM==='list'||!cs.length)return vUnit(id);
    if(DM==='reel')return (window.RM2.wordReel||session)(cs,bk);
    if(DM==='rev')return session(cs,bk);
    if(DM==='prac')return vQuiz(cs,bk);
    if(DM==='sent'){const ix=sentIdx(ST.tgt),ids=[...new Set(un[2].flatMap(c=>ix.by[c]||[]))];return ids.length?window.RM2.sentReel(ids,bk):vUnit(id)}}}
}
function wordRow(c){const L=P().learned[c];const r=W(ST.tgt,c);return`<div class="wr ${L?'ln':''}" data-c="${c}"><button class="ck ${L?'on':''}" data-k="${c}">${L?'✓':''}</button><div class="t" data-o="${c}"><b class="ltr" dir="${(D.P[ST.tgt]||{}).dir||'ltr'}">${esc(show(ST.tgt,c))}</b><small>${esc(show(ST.src,c))}${pron(c)?' · '+esc(pron(c)):''}</small></div><button class="ib" data-s="${c}">🔊</button></div>`}
function bindWords(el,after){el.addEventListener('click',e=>{const k=e.target.closest('[data-k]'),s=e.target.closest('[data-s]'),o=e.target.closest('[data-o]');
  if(k){const c=+k.dataset.k,p=P();if(p.learned[c])delete p.learned[c];else{p.learned[c]=1;window.RM2.act&&RM2.act.pts('learn',c)}save();after&&after()}
  else if(s)speak(W(ST.tgt,+s.dataset.s)[0],ST.tgt);else if(o)vWord(+o.dataset.o)})}
function vUnit(id){
  const u=D.sk.units.find(x=>x[0]===id),cs=u[2].filter(c=>W(ST.tgt,c));
  const v=$('#view'),draw=()=>{v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('day',{n:+id.slice(1)}))} · ${u[1]}</h2></div><div class="row" style="margin-bottom:8px"><button class="btn sm" id="wrl">🎞️ ${esc(T('wr_t'))}</button><button class="btn sm" id="st">🔁 ${esc(T('rv'))}</button><button class="btn s sm" id="qz">🎯 ${esc(T('pr'))}</button></div><div class="card">${cs.map(wordRow).join('')}</div>`;
    $('#bk').onclick=()=>shell('days');$('#st').onclick=()=>session(cs,()=>vUnit(id));$('#wrl').onclick=()=>window.RM2.wordReel(cs,()=>vUnit(id));$('#qz').onclick=()=>vQuiz(cs,()=>vUnit(id));bindWords(v,draw)};
  draw();v.scrollTo&&scrollTo(0,0)}
/* ---------- word detail ---------- */
function vWord(c){
  const r=W(ST.tgt,c),s=W(ST.src,c),p=P();if(!r)return;
  const sy=r[8],an=r[9],ix=sentIdx(ST.tgt),ss=(ix.by[c]||[]).slice(0,3),six=D.P[ST.src].s.length?sentIdx(ST.src):null;
  const m=document.createElement('div');m.className='modal';
  m.innerHTML=`<div class="sheet"><div class="row"><div class="sp"><h1 class="ltr" dir="${D.P[ST.tgt].dir}">${esc(show(ST.tgt,c))}</h1><div class="mu">${esc(pron(c))}</div></div><button class="ib" data-sp>🔊</button><button class="ib" data-x>✕</button></div>
  <div style="margin:10px 0"><div class="mu sm">${esc(T('mn'))}</div><div style="font-size:20px;font-weight:600">${esc(s?show(ST.src,c):'—')}</div></div>
  <div>${r[4]?`<span class="tg">${esc(lab('pos',r[4]))}</span>`:''}${r[5]?`<span class="tg">${esc(lab('tp',r[5]))}</span>`:''}${r[6]?`<span class="tg">${esc(lab('pl',r[6]))}</span>`:''}</div>
  ${sy||an?`<div class="card" style="margin-top:12px">${sy?`<div><span class="mu">${esc(lab('sa','syn'))}:</span> ${esc(sy)}</div>`:''}${an?`<div><span class="mu">${esc(lab('sa','ant'))}:</span> ${esc(an)}</div>`:''}</div>`:''}
  <div class="card" style="margin-top:12px"><h3>${esc(T('sent'))}</h3>${ss.length?ss.map(i=>{const x=D.P[ST.tgt].s[i];const t=six&&six.first[x[2].join(',')]!=null?D.P[ST.src].s[six.first[x[2].join(',')]]:null;return`<div class="sn"><div class="ltr" dir="${D.P[ST.tgt].dir}">${esc(fill(x))}</div>${t?`<div class="mu sm">${esc(fill(t))}</div>`:''}</div>`}).join(''):`<div class="mu">${esc(T('nosent'))}</div>`}</div>
  <button class="btn" style="width:100%;margin-top:6px" data-l>${p.learned[c]?'✓ ':''}${esc(T('lrn'))}</button></div>`;
  document.body.appendChild(m);
  m.onclick=e=>{if(e.target===m||e.target.closest('[data-x]'))m.remove();else if(e.target.closest('[data-sp]'))speak(r[0],ST.tgt);else if(e.target.closest('[data-l]')){if(p.learned[c])delete p.learned[c];else p.learned[c]=1;save();m.remove();if(TAB==='days'||TAB==='dict'||TAB==='home')refresh()}}
}
function refresh(){const v=$('#view');if(!v)return;if(TAB==='dict')vDict(v);else if(TAB==='home')vHome(v);else shell(TAB)}
/* ---------- review / srs ---------- */
function vRev(v){const q=queue();v.innerHTML=`<div class="card"><h3>🎯 ${esc(T('goal'))}</h3><div class="seg" id="gl">${[5,10,20,30,50].map(n=>`<button data-v="${n}" class="${ST.goal===n?'on':''}">${n}</button>`).join('')}</div></div><div class="card"><h3>${esc(T('rv'))}</h3><div class="mu" style="margin-bottom:12px">${esc(T('h10_dn',{d:q.due.length,n:q.nw.length}))}</div><button class="btn" id="go" ${q.due.length+q.nw.length?'':'disabled'}>${esc(T('h10_cont'))} →</button></div>${q.due.length+q.nw.length?'':`<div class="card mu">${esc(T('done'))}</div>`}`;
  $('#gl',v).onclick=e=>{const b=e.target.closest('button');if(b){ST.goal=+b.dataset.v;save();vRev(v)}};
  $('#go',v).onclick=()=>session(q.due.concat(q.nw),()=>shell('rev'))}
function session(list,back){
  const p=P();let Q=list.slice(),n0=Q.length,qi=0,flipped=false,play=false,tmr=0,sw=0,p0=null;
  const SPD=[.5,.75,1,1.5,2,3];let spk=ST.auto?1:0;
  const v=$('#view'),rtl=()=>document.documentElement.dir==='rtl';
  const dir=D.P[ST.tgt].dir;
  v.innerHTML=`<div class="fcs"><div class="hd"><button class="back" id="bk">←</button><h2 id="fct" style="font-size:16px"></h2><button class="chip" id="fcm">🔊</button></div>
  <div class="prog"><i id="fcp" style="width:0"></i></div>
  <div class="card3d" id="c3"><div class="card3" id="c3i"><div class="face"><button class="ib fcsp" data-sp>🔊</button><div class="big ltr" dir="${dir}" id="fw"></div><div class="mu" id="fpn"></div><div class="mu sm fch">${esc(T('tap'))}</div></div><div class="face bk"><div class="big" id="bm"></div><div class="mu" id="bp"></div><div class="ex ltr" id="be"></div></div></div></div>
  <div class="fcdone card" id="fdn" hidden style="text-align:center"><div class="big">🎉</div><div>${esc(T('done'))}</div></div>
  <div class="fnav"><button id="fpv" aria-label="prev">${rtl()?'›':'‹'}</button><span class="ct" id="fct2"></span><button id="fnx" aria-label="next">${rtl()?'‹':'›'}</button></div>
  <div class="rate" id="frt" hidden><button style="background:#e5484d" data-r="0">${esc(T('ag'))}</button><button style="background:#e08e00" data-r="1">${esc(T('hd'))}</button><button style="background:#1f9d6b" data-r="2">${esc(T('gd'))}</button><button style="background:#2f6bff" data-r="3">${esc(T('ez'))}</button></div>
  <div class="fctl"><button class="chip" id="f1">⏮</button><button class="chip" id="fb5">⏪ 5</button><button class="chip" id="fpl">▶</button><button class="chip" id="ff5">5 ⏩</button></div>
  <div class="fctl"><button class="chip" id="fsl">🐢</button><span class="chip on" id="fsd"></span><button class="chip" id="ffs">🐇</button></div></div>`;
  const q=x=>v.querySelector(x),st=()=>{clearTimeout(tmr);tmr=0};
  const halt=()=>{play=false;st();try{speechSynthesis.cancel()}catch(e){}q('#fpl').textContent='▶';q('#fpl').classList.remove('on')};
  const spd=()=>SPD[ST.fsp>=0&&ST.fsp<SPD.length?ST.fsp:2];
  const ui=()=>{q('#fsd').textContent='×'+spd();q('#fsl').disabled=(ST.fsp??2)<=0;q('#ffs').disabled=(ST.fsp??2)>=SPD.length-1;q('#fcm').classList.toggle('on',!!spk);q('#fcm').textContent=spk?'🔊':'🔇'};
  const setF=f=>{flipped=f;q('#c3i').classList.toggle('flip',f);q('#frt').hidden=!f};
  const render=()=>{
    q('#fpv').disabled=qi<=0;q('#fnx').disabled=qi>=Q.length;
    const w=Q[qi];q('#c3').hidden=!w;q('#fdn').hidden=!!w;setF(false);
    q('#fcp').style.width=Math.min(100,qi/Math.max(1,Q.length)*100)+'%';
    q('#fct').textContent=T('rv');
    if(!w){q('#fct2').textContent='';halt();K.emit('review:done',{view:v});return}
    const r=W(ST.tgt,w),s=W(ST.src,w),ix=sentIdx(ST.tgt),si=(ix.by[w]||[])[0];
    q('#fw').textContent=show(ST.tgt,w);q('#fpn').textContent=pron(w)||'';
    q('#bm').textContent=show(ST.src,w);q('#bp').textContent=pron(w)||'';
    q('#be').textContent=si!=null?fill(D.P[ST.tgt].s[si]):'';
    q('#fct2').textContent=(qi+1)+' / '+Q.length;
    if(spk&&!play)speak(r[0],ST.tgt)};
  const go=d=>{const n=qi+d;if(n<0||n>Q.length)return;const el=q('#c3');
    if(matchMedia('(prefers-reduced-motion:reduce)').matches||!el.animate){qi=n;render();return}
    const r=rtl()?-1:1;el.animate([{transform:'none',opacity:1},{transform:`translateX(${-d*r*70}px)`,opacity:0}],{duration:120}).onfinish=()=>{qi=n;render();el.animate([{transform:`translateX(${d*r*70}px)`,opacity:0},{transform:'none',opacity:1}],{duration:160})}};
  const run=()=>{if(!play||!Q[qi]){halt();return}
    const c=Q[qi],r=W(ST.tgt,c),k=spd();setF(false);if(spk)speak(r[0],ST.tgt);
    tmr=setTimeout(()=>{if(!play)return;setF(true);
      tmr=setTimeout(()=>{if(!play)return;qi++;render();if(!Q[qi]){halt();return}run()},Math.max(900,2600/k))},Math.max(1500,2800/k))};
  const jump=n=>{if(!Q.length)return;qi=Math.max(0,Math.min(Q.length,n));render();if(play){st();Q[qi]?run():halt()}};
  const rate=g=>{const c=Q[qi];if(c==null)return;const rs=SRS.grade(p.srs[c],g,dayN()),isNew=!p.srs[c];
    K.emit('answer',{ok:g>0,g});window.RM2.act&&RM2.act.pts('review');p.srs[c]=rs.entry;if(rs.learned)p.learned[c]=1;p.xp+=g?10:2;const t=today();if(isNew){if(p.nt.d!==t)p.nt={d:t,n:0};p.nt.n++}
    if(p.last!==t){const y=new Date(Date.now()-864e5).toLocaleDateString('sv');p.streak=p.last===y?p.streak+1:1;p.last=t}
    save();if(g===0)Q.push(c);qi++;render()};
  q('#bk').onclick=()=>{halt();back();shell(TAB)};
  q('#fcm').onclick=()=>{spk=spk?0:1;if(!spk)try{speechSynthesis.cancel()}catch(e){}ui()};
  q('#c3').onclick=e=>{if(e.target.closest('[data-sp]')){const c=Q[qi];if(c!=null)speak(W(ST.tgt,c)[0],ST.tgt);return}if(!Q[qi]||Date.now()-sw<350)return;setF(!flipped)};
  q('#c3').onpointerdown=e=>{p0=[e.clientX,e.clientY]};
  q('#c3').onpointerup=e=>{if(!p0)return;const dx=e.clientX-p0[0],dy=e.clientY-p0[1];p0=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){sw=Date.now();go(dx<0===!rtl()?1:-1)}};
  q('#fpv').onclick=()=>go(-1);q('#fnx').onclick=()=>go(1);
  q('#frt').onclick=e=>{const b=e.target.closest('[data-r]');if(b)rate(+b.dataset.r)};
  q('#fpl').onclick=()=>{if(play){halt();return}if(!Q.length)return;if(!Q[qi]){qi=0;render()}play=true;q('#fpl').textContent='⏸';q('#fpl').classList.add('on');st();run()};
  q('#f1').onclick=()=>jump(0);q('#fb5').onclick=()=>jump(qi-5);q('#ff5').onclick=()=>jump(qi+5);
  q('#fsl').onclick=()=>{ST.fsp=Math.max(0,(ST.fsp??2)-1);save();ui()};q('#ffs').onclick=()=>{ST.fsp=Math.min(SPD.length-1,(ST.fsp??2)+1);save();ui()};
  ui();render();
}
/* ---------- quiz ---------- */
function vQuiz(cs,back){
  const v=$('#view');back=back||(()=>shell('home'));
  const pool=(cs||allC()).filter(c=>W(ST.tgt,c)&&W(ST.src,c));
  const learned=P().learned;let mode=1,only=false,lv=null;
  const start=()=>{
    let base=pool;if(lv)base=base.filter(c=>D.sk.lvl[D.sk.cu[c]]===lv);if(only){const b=base.filter(c=>learned[c]);if(b.length>=4)base=b}
    if(base.length<4){v.innerHTML=`<div class="card">${esc(T('few'))}<br><br><button class="btn" id="bk">${esc(T('back'))}</button></div>`;$('#bk').onclick=back;return}
    const qs=[...base].sort(()=>Math.random()-.5).slice(0,10);let i=0,ok=0,bad=[];
    const ask=()=>{
      if(i>=qs.length){v.innerHTML=`<div class="card fc"><div class="big">${ok}/${qs.length}</div><div>${esc(T('tdone'))}</div>${bad.length?`<div style="text-align:start;width:100%">${bad.map(c=>`<div class="sn">${esc(show(ST.tgt,c))} — ${esc(show(ST.src,c))}</div>`).join('')}</div>`:''}<div class="row"><button class="btn sm" id="rt">${esc(T('rt'))}</button><button class="btn s sm" id="bk">${esc(T('back'))}</button></div></div>`;$('#rt').onclick=start;$('#bk').onclick=back;return}
      const c=qs[i],opts=[c];while(opts.length<4){const x=base[Math.random()*base.length|0];if(!opts.includes(x))opts.push(x)}opts.sort(()=>Math.random()-.5);
      const q1=mode===1,qt=q1?show(ST.tgt,c):show(ST.src,c),L=q1?ST.src:ST.tgt;
      v.innerHTML=`<div class="prog"><i style="width:${i/qs.length*100}%"></i></div><div class="card fc" style="min-height:140px"><div class="big ltr" dir="${D.P[q1?ST.tgt:ST.src].dir}">${esc(qt)}</div>${q1?`<button class="ib" data-sp>🔊</button>`:''}</div>${opts.map(o=>`<button class="opt ltr" dir="${D.P[L].dir}" data-o="${o}">${esc(show(L,o))}</button>`).join('')}<div id="fb"></div>`;
      v.onclick=e=>{if(e.target.closest('[data-sp]'))return speak(W(ST.tgt,c)[0],ST.tgt);const b=e.target.closest('.opt');if(!b||v.dataset.lock==i)return;v.dataset.lock=i;const g=+b.dataset.o===c;K.emit('answer',{ok:g});
        if(g){ok++;b.classList.add('ok');P().xp+=5}else{bad.push(c);b.classList.add('no');v.querySelector(`[data-o="${c}"]`).classList.add('ok')}
        speak(W(ST.tgt,c)[0],ST.tgt);save();$('#fb').innerHTML=`<button class="btn" style="width:100%;margin-top:8px" id="nx">${esc(T('nx'))} →</button>`;$('#nx').onclick=()=>{i++;ask()}}
    };ask()};
  v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('pr'))}</h2></div><div class="card"><div class="chips"><button class="chip on" data-m="1">${esc(T('q1'))}</button><button class="chip" data-m="2">${esc(T('q2'))}</button></div><div class="chips"><button class="chip on" data-v="">${esc(T('all2'))}</button>${LV.map(l=>`<button class="chip" data-v="${l}">${l}</button>`).join('')}<button class="chip" data-only>✓ ${esc(T('lrn'))}</button></div><button class="btn" id="go" style="width:100%">${esc(T('pr'))} →</button></div>`;
  $('#bk').onclick=back;
  v.onclick=e=>{const m=e.target.closest('[data-m]'),l=e.target.closest('[data-v]'),o=e.target.closest('[data-only]');
    if(m){mode=+m.dataset.m;v.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('on',x===m))}
    if(l){lv=l.dataset.v||null;v.querySelectorAll('[data-v]').forEach(x=>x.classList.toggle('on',x===l))}
    if(o){only=!only;o.classList.toggle('on',only)}
    if(e.target.closest('#go'))start()}
}
/* ---------- dictionary ---------- */
let DQ='',DF={pos:'',tp:'',pl:''},DN=60;
function dictIdx(){const p=D.P[ST.tgt],s=D.P[ST.src];if(p.dx)return p.dx;p.dx=allC().filter(c=>p.w[c]&&p.w[c][0]).map(c=>({c,t:norm(p.w[c][0]),s:s.w[c]?norm(s.w[c][0]):'',p:norm(p.w[c][1]||'')}));return p.dx}
function vDict(v){
  const p=D.P[ST.tgt];
  const used=(i)=>[...new Set(Object.values(p.w).map(r=>r[i]).filter(Boolean))];
  const chips=(k,i)=>`<div class="chips"><button class="chip ${DF[k]?'':'on'}" data-f="${k}" data-v="">${esc(T('all2'))}</button>${used(i).sort().map(x=>`<button class="chip ${DF[k]===x?'on':''}" data-f="${k}" data-v="${x}">${esc(lab(k,x))}</button>`).join('')}</div>`;
  v.innerHTML=`<div class="hd"><h2>📚 ${esc(T('wd_list'))}</h2></div><input type="search" id="q" placeholder="${esc(T('srch'))}" value="${esc(DQ)}">${chips('pos',4)}${chips('tp',5)}${chips('pl',6)}<div class="card" id="res"></div>`;
  const run=()=>{const q=norm(DQ.trim()),ix=dictIdx();
    let r=ix.filter(x=>(!q||x.t.includes(q)||x.s.includes(q)||x.p.includes(q))&&(!DF.pos||p.w[x.c][4]===DF.pos)&&(!DF.tp||p.w[x.c][5]===DF.tp)&&(!DF.pl||p.w[x.c][6]===DF.pl));
    const n=r.length;r=r.slice(0,DN);
    $('#res').innerHTML=(r.length?r.map(x=>wordRow(x.c)).join(''):`<div class="mu">${esc(T('nolist'))}</div>`)+(n>DN?`<button class="btn s sm" id="more" style="margin-top:10px">+ ${n-DN}</button>`:'');
    const m=$('#more');if(m)m.onclick=()=>{DN+=60;run()}};
  run();
  $('#q').oninput=e=>{DQ=e.target.value;DN=60;run()};
  v.addEventListener('click',e=>{const f=e.target.closest('[data-f]');if(f){DF[f.dataset.f]=f.dataset.v;DN=60;vDict(v)}});
  bindWords($('#res'),run);
}
/* ---------- sentences ---------- */
function vSent(){
  const v=$('#view'),p=D.P[ST.tgt];let uid=D.sk.units[0][0],gap=false;
  const six=D.P[ST.src].s.length?sentIdx(ST.src):null;
  const draw=()=>{const u=D.sk.units.find(x=>x[0]===uid),set=new Set(u[2]),ix=sentIdx(ST.tgt),ids=[...new Set(u[2].flatMap(c=>ix.by[c]||[]))];
    v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(T('sent'))}</h2></div><select id="us">${D.sk.units.map(x=>`<option value="${x[0]}" ${x[0]===uid?'selected':''}>${esc(T('day',{n:+x[0].slice(1)}))} · ${x[1]}</option>`).join('')}</select><button class="btn sm" id="srl" style="margin-top:8px">🎞️ ${esc(T('pr_t'))}</button><div class="chips" style="margin-top:8px"><button class="chip ${gap?'':'on'}" data-g="0">${esc(T('sent'))}</button><button class="chip ${gap?'on':''}" data-g="1">${esc(T('ex_c'))}</button></div><div class="card">${ids.length?ids.map(i=>{const x=p.s[i],t=six&&six.first[x[2].join(',')]!=null?D.P[ST.src].s[six.first[x[2].join(',')]]:null;return`<div class="sn" data-i="${i}"><div class="ltr" dir="${p.dir}" style="font-size:17px">${esc(fill(x,gap))}</div>${t?`<div class="mu sm">${esc(fill(t))}</div>`:''}${gap?`<div class="mu sm" data-a style="display:none">${esc(x[1].join(' · '))}</div>`:''}</div>`}).join(''):`<div class="mu">${esc(T('nosent'))}</div>`}</div>`;
    $('#bk').onclick=()=>shell('home');$('#us').onchange=e=>{uid=e.target.value;draw()};$('#srl').onclick=()=>window.RM2.sentReel(ids,draw);
    v.onclick=e=>{const g=e.target.closest('[data-g]');if(g){gap=g.dataset.g==='1';return draw()}const s=e.target.closest('.sn');if(s){const a=s.querySelector('[data-a]');if(a)a.style.display='block';speak(fill(p.s[+s.dataset.i]),ST.tgt)}}};
  draw()}
/* ---------- settings ---------- */
const SLD={st_chr:{fa:'کاراکترها',en:'Characters',ar:'الشخصيات',de:'Figuren',tr:'Karakterler',es:'Personajes',fr:'Personnages'},st_q30:{fa:'پنهان برای ۳۰ دقیقه',en:'Hide for 30 min',ar:'إخفاء 30 دقيقة',de:'30 Min. ausblenden',tr:'30 dk gizle',es:'Ocultar 30 min',fr:'Masquer 30 min'},st_qs:{fa:'پنهان تا بستن برنامه',en:'Hide this session',ar:'إخفاء للجلسة',de:'Für diese Sitzung',tr:'Bu oturum',es:'Esta sesión',fr:'Cette session'},st_qoff:{fa:'غیرفعال\u200cسازی دائمی',en:'Turn off for good',ar:'تعطيل دائم',de:'Dauerhaft aus',tr:'Kalıcı kapat',es:'Desactivar siempre',fr:'Désactiver'},st_qon:{fa:'نمایش کاراکتر',en:'Show character',ar:'إظهار الشخصية',de:'Figur anzeigen',tr:'Karakteri göster',es:'Mostrar',fr:'Afficher'},st_qmore:{fa:'انتخاب و تنظیم کاراکتر',en:'Choose & customize',ar:'اختيار وتخصيص',de:'Auswählen & anpassen',tr:'Seç ve özelleştir',es:'Elegir y personalizar',fr:'Choisir et personnaliser'},st_app:{fa:'ظاهر و رنگ',en:'Appearance & color',ar:'المظهر واللون',de:'Aussehen & Farbe',tr:'Görünüm ve renk',es:'Apariencia y color',fr:'Apparence et couleur'},st_uil:{fa:'زبان رابط',en:'Interface language',ar:'لغة الواجهة',de:'Oberflächensprache',tr:'Arayüz dili',es:'Idioma de la interfaz',fr:'Langue de l’interface'},st_acc:{fa:'رنگ اصلی',en:'Accent color',ar:'اللون الرئيسي',de:'Akzentfarbe',tr:'Vurgu rengi',es:'Color principal',fr:'Couleur principale'},st_lrn:{fa:'یادگیری',en:'Learning',ar:'التعلّم',de:'Lernen',tr:'Öğrenme',es:'Aprendizaje',fr:'Apprentissage'},st_snd:{fa:'صدا و تلفظ',en:'Sound & pronunciation',ar:'الصوت والنطق',de:'Ton & Aussprache',tr:'Ses ve telaffuz',es:'Sonido y pronunciación',fr:'Son et prononciation'},st_voice:{fa:'صدای گوینده',en:'Voice',ar:'الصوت',de:'Stimme',tr:'Ses',es:'Voz',fr:'Voix'},st_rate:{fa:'سرعت گفتار',en:'Speech speed',ar:'سرعة الكلام',de:'Sprechtempo',tr:'Konuşma hızı',es:'Velocidad',fr:'Vitesse'},st_test:{fa:'آزمایش صدا',en:'Test sound',ar:'تجربة الصوت',de:'Ton testen',tr:'Sesi dene',es:'Probar sonido',fr:'Tester le son'},st_auto:{fa:'پیش\u200cفرض',en:'Default',ar:'افتراضي',de:'Standard',tr:'Varsayılan',es:'Predeterminado',fr:'Par défaut'},st_data:{fa:'داده\u200cها و پشتیبان',en:'Data & backup',ar:'البيانات والنسخ الاحتياطي',de:'Daten & Backup',tr:'Veri ve yedek',es:'Datos y copia',fr:'Données et sauvegarde'},st_exp:{fa:'خروجی پشتیبان',en:'Export backup',ar:'تصدير نسخة',de:'Backup exportieren',tr:'Yedeği dışa aktar',es:'Exportar copia',fr:'Exporter'},st_imp:{fa:'بازیابی از فایل',en:'Restore from file',ar:'استعادة من ملف',de:'Aus Datei wiederherstellen',tr:'Dosyadan geri yükle',es:'Restaurar de archivo',fr:'Restaurer'},st_ok:{fa:'انجام شد ✓',en:'Done ✓',ar:'تم ✓',de:'Fertig ✓',tr:'Tamam ✓',es:'Hecho ✓',fr:'Terminé ✓'},st_bad:{fa:'فایل معتبر نیست',en:'Invalid file',ar:'ملف غير صالح',de:'Ungültige Datei',tr:'Geçersiz dosya',es:'Archivo no válido',fr:'Fichier invalide'},st_more:{fa:'امکانات بیشتر',en:'More',ar:'المزيد',de:'Mehr',tr:'Daha fazla',es:'Más',fr:'Plus'},st_prof:{fa:'پروفایل',en:'Profile',ar:'الملف الشخصي',de:'Profil',tr:'Profil',es:'Perfil',fr:'Profil'},st_name:{fa:'نام',en:'Name',ar:'الاسم',de:'Name',tr:'Ad',es:'Nombre',fr:'Nom'},st_av:{fa:'آواتار',en:'Avatar',ar:'الصورة',de:'Avatar',tr:'Avatar',es:'Avatar',fr:'Avatar'},st_lvl:{fa:'سطح',en:'Level',ar:'المستوى',de:'Stufe',tr:'Seviye',es:'Nivel',fr:'Niveau'},st_lrned:{fa:'واژه\u200cهای یادگرفته',en:'Words learned',ar:'كلمات متعلمة',de:'Gelernte Wörter',tr:'Öğrenilen kelimeler',es:'Palabras aprendidas',fr:'Mots appris'},st_langs:{fa:'زبان\u200cهای در حال یادگیری',en:'Languages in progress',ar:'اللغات الجارية',de:'Sprachen',tr:'Diller',es:'Idiomas',fr:'Langues'},st_share:{fa:'اشتراک پیشرفت',en:'Share progress',ar:'مشاركة التقدم',de:'Fortschritt teilen',tr:'İlerlemeyi paylaş',es:'Compartir',fr:'Partager'},st_acct:{fa:'حساب و همگام\u200cسازی',en:'Account & sync',ar:'الحساب والمزامنة',de:'Konto & Sync',tr:'Hesap ve senkron',es:'Cuenta y sync',fr:'Compte et sync'},st_font:{fa:'اندازه\u200cی نوشته',en:'Text size',ar:'حجم النص',de:'Textgröße',tr:'Yazı boyutu',es:'Tamaño del texto',fr:'Taille du texte'},st_rstl:{fa:'پاک\u200cکردن پیشرفت این زبان',en:'Reset this language',ar:'مسح تقدم هذه اللغة',de:'Diese Sprache zurücksetzen',tr:'Bu dili sıfırla',es:'Restablecer este idioma',fr:'Réinitialiser cette langue'},st_rsta:{fa:'پاک\u200cکردن همه\u200cچیز',en:'Erase everything',ar:'مسح كل شيء',de:'Alles löschen',tr:'Her şeyi sil',es:'Borrar todo',fr:'Tout effacer'}};
const SL=k=>((SLD[k]||{})[UIL()]||(SLD[k]||{}).en||k);
const ACCS=['#2f6bff','#6d3df5','#e5484d','#f59e0b','#1f9d6b','#06b6d4','#ec4899','#64748b'],AVS=['🙂','😎','🦁','🐱','🐼','🦊','🐲','🧑‍🎓','👩‍🎓','🚀','🌟','🎧'];
function vSet(v){
  const sg=(id,opts,cur)=>`<div class="seg" id="${id}">${opts.map(([k,t])=>`<button data-v="${k}" class="${String(cur)===String(k)?'on':''}">${esc(t)}</button>`).join('')}</div>`;
  const vs=(()=>{try{return speechSynthesis.getVoices().filter(x=>x.lang.toLowerCase().startsWith(((D.P[ST.tgt]||{}).tts||ST.tgt).slice(0,2).toLowerCase()))}catch(e){return[]}})();
  const rate=ST.slow?'.65':String(ST.rate||.95);
  v.innerHTML=`<div class="hhero hh2"><h1>⚙️ ${esc(T('set'))}</h1></div><div class="hbody">
  <button class="card sbtn" id="pf">👤 <b>${esc(ST.name||SL('st_prof'))}</b><span class="mu">${esc(SL('st_prof'))} ›</span></button>
  <div class="card"><h3>🌍 ${esc(T('lg_src'))} / ${esc(T('lg_tgt'))}</h3><div class="set"><span>${esc(T('lg_src'))}</span><b>${META[ST.src][1]} ${esc(META[ST.src][0])}</b></div><div class="set"><span>${esc(T('lg_tgt'))}</span><b>${META[ST.tgt][1]} ${esc(META[ST.tgt][0])}</b></div>
  <div class="set"><span>${esc(SL('st_uil'))}</span><select id="uil"><option value="">${esc(SL('st_auto'))}</option>${Object.keys(META).map(k=>`<option value="${k}" ${ST.uil===k?'selected':''}>${META[k][1]} ${esc(META[k][0])}</option>`).join('')}</select></div>
  <button class="btn s sm" id="chg" style="margin-top:8px">🌍 ${esc(T('chg'))}</button></div>
  <div class="card"><h3>🎨 ${esc(SL('st_app'))}</h3><div id="thm"></div></div>
  <div class="card"><h3>🌦️ ${esc(RM2.wxT?RM2.wxT():'')}</h3><div id="wxs"></div></div>
  <div class="card"><h3>🔊 ${esc(SL('st_snd'))}</h3><div class="set"><span>${esc(T('sp'))}</span>${sg('au',[[1,'✓'],[0,'✕']],ST.auto?1:0)}</div>
  <div class="set"><span>${esc(T('slow'))}</span>${sg('sl',[[1,'✓'],[0,'✕']],ST.slow?1:0)}</div>
  <div class="set col"><span>${esc(SL('st_rate'))} <b id="rv">×${esc(String(ST.rate||.95))}</b></span><input type="range" id="rt" min=".5" max="1.3" step=".05" value="${ST.rate||.95}" ${ST.slow?'disabled':''}></div>
  ${vs.length?`<div class="set"><span>${esc(SL('st_voice'))}</span><select id="vo"><option value="">${esc(SL('st_auto'))}</option>${vs.map(x=>`<option value="${esc(x.name)}" ${((ST.voices||{})[(D.P[ST.tgt]||{}).tts||ST.tgt]||'')===x.name?'selected':''}>${esc(x.name)}</option>`).join('')}</select></div>`:''}
  <button class="btn s sm" id="ts" style="margin-top:8px">🔊 ${esc(SL('st_test'))}</button></div>
  <div class="card"><h3>🐾 ${esc(SL('st_chr'))}</h3>${window.RM2&&RM2.palHidden?`<div class="row" style="flex-wrap:wrap">${RM2.palHidden()?`<button class="btn sm" id="pon">${esc(SL('st_qon'))}</button>`:`<button class="btn s sm" id="p30">${esc(SL('st_q30'))}</button><button class="btn s sm" id="pss">${esc(SL('st_qs'))}</button><button class="btn s sm" id="pof">${esc(SL('st_qoff'))}</button>`}</div><div class="chips" id="pgr" style="flex-wrap:wrap;margin-top:10px">${RM2.palGrid?RM2.palGrid(true):''}</div>${(()=>{const L=UIL(),d={fa:['صدای کاراکتر','حرکت کاراکتر'],en:['Character sound','Character motion'],ar:['صوت الشخصية','حركة الشخصية'],az:['Personaj səsi','Personaj hərəkəti'],de:['Figurenton','Figurenbewegung'],es:['Sonido del personaje','Movimiento del personaje'],fr:['Son du personnage','Mouvement du personnage'],hi:['पात्र की आवाज़','पात्र की गति'],it:['Suono del personaggio','Movimento del personaggio'],ja:['キャラの音','キャラの動き'],ko:['캐릭터 소리','캐릭터 움직임'],pt:['Som do personagem','Movimento do personagem'],ru:['Звук персонажа','Движение персонажа'],tr:['Karakter sesi','Karakter hareketi'],zh:['角色声音','角色移动']}[L]||['Character sound','Character motion'],c=RM2.palCfg();return `<div class="set"><span>🔊 ${esc(d[0])}</span>${sg('psn',[[1,'✓'],[0,'✕']],c.snd!==false?1:0)}</div><div class="set"><span>🏃 ${esc(d[1])}</span>${sg('pmv',[[1,'✓'],[0,'✕']],c.mv!==false?1:0)}</div>`})()}<label class="row" style="margin-top:8px;gap:8px">🔍 <input type="range" id="psz" min="110" max="300" value="${RM2.palCfg?RM2.palCfg().size:200}" style="flex:1"></label><div class="row" style="flex-wrap:wrap;margin-top:10px;gap:6px">${CHRT.map(ic=>{const t=RMT.find(x=>x.icon===ic);return t?`<button class="btn s sm" data-ct="${ic}">${ic} ${esc(t.label())}</button>`:''}).join('')}</div>`:''}</div>
  <div class="card"><h3>💾 ${esc(SL('st_data'))}</h3><div class="row" style="flex-wrap:wrap"><button class="btn s sm" id="ex">⬇️ ${esc(SL('st_exp'))}</button><button class="btn s sm" id="im">⬆️ ${esc(SL('st_imp'))}</button></div><input type="file" id="imf" accept="application/json,.json" hidden><div class="mu sm" id="dm" style="margin-top:6px"></div></div>
  <div class="card"><div class="row" style="flex-wrap:wrap"><button class="btn s sm" id="ac2">☁️ ${esc(SL('st_acct'))}</button><button class="btn s sm" id="mr">☰ ${esc(SL('st_more'))}</button></div></div>
  <div class="card"><div class="row" style="flex-wrap:wrap"><button class="btn s sm" id="rs" style="color:var(--bad)">${esc(SL('st_rstl'))}</button><button class="btn s sm" id="ra" style="color:var(--bad)">${esc(SL('st_rsta'))}</button></div></div><div class="mu sm" style="text-align:center">LingoBlox 1 · 9155 · 15</div></div>`;
  {const hb=v.querySelector('.hbody'),COLS=['#6366f1,#8b5cf6','#06b6d4,#3b82f6','#10b981,#0d9488','#f59e0b,#d97706','#ec4899,#d946ef','#8b5cf6,#6366f1','#14b8a6,#10b981','#64748b,#475569'];let ci=0;
    const mk=(id,ic,title,col,node)=>{const o=!!ACC['s_'+id],w=document.createElement('div');w.className='macw'+(o?' open':'');w.innerHTML=`<button class="mt feat" data-acc="s_${id}" style="background:linear-gradient(135deg,${col})"><i>${ic}</i><span><b>${esc(title)}</b></span><u class="chev">${o?'▴':'▾'}</u></button><div class="macc sset"></div>`;if(node)w.querySelector('.macc').append(...(Array.isArray(node)?node:[node]));return w};
    const list=document.createElement('div');list.className='mlst';
    [...hb.children].forEach((c,i)=>{if(!c.classList.contains('card')||c.id==='pf'||c.classList.contains('sbtn'))return;const h=c.querySelector(':scope>h3');
      if(h){const t=h.textContent.trim(),sp=t.indexOf(' '),ic=sp>0?t.slice(0,sp):'⚙️',ti=sp>0?t.slice(sp+1):t;h.remove();c.className='sbox';const w=mk('c'+i,ic,ti,COLS[ci++%COLS.length],[...c.childNodes]);list.appendChild(w);c.remove()}
      else if(c.querySelector('#ac2')){c.style.display='none'}
      else if(c.querySelector('#rs')){const lb={fa:'ناحیه حساس',en:'Danger zone',ar:'منطقة حساسة',de:'Gefahrenzone',es:'Zona delicada',fr:'Zone sensible',hi:'संवेदनशील',it:'Zona critica',ja:'注意',ko:'주의',pt:'Zona sensível',ru:'Опасная зона',tr:'Hassas alan',zh:'危险区',az:'Həssas zona'}[UIL()]||'Danger zone';const w=mk('rst','⚠️',lb,'#ef4444,#b91c1c',[...c.childNodes]);list.appendChild(w);c.remove()}});
    /* former "More" menu lives here now */
    const mi=[...menuItems('more').filter(x=>x.leaf&&x.leaf.icon!=='⚙️').map(x=>x.leaf),...menuItems('other').map(x=>x.leaf)];
    const rows=mi.filter(t=>t.icon!=='👤').map(t=>`<button class="mt feat" data-i="${RMT.indexOf(t)}" style="background:linear-gradient(135deg,${HCOL[t.icon]||'#6366f1,#8b5cf6'})"><i>${t.icon}</i><span><b>${esc(t.label())}</b></span><u>▶</u></button>`).join('');
    list.insertAdjacentHTML('afterbegin',rows);
    const ft=[...hb.children].find(x=>!x.classList.contains('card')&&!x.classList.contains('mlst')&&/LingoBlox/.test(x.textContent));hb.insertBefore(list,ft||null);
    v.onclick=e=>{const ac=e.target.closest('[data-acc]');if(ac){const id=ac.dataset.acc;ACC[id]=!ACC[id];ac.closest('.macw').classList.toggle('open',!!ACC[id]);ac.querySelector('.chev').textContent=ACC[id]?'▴':'▾';return}const it=e.target.closest('[data-i]');if(it){RET={tab:'set',path:[]};RMT[+it.dataset.i].open()}}}
  const bind=(id,fn)=>$('#'+id).onclick=e=>{const b=e.target.closest('button');if(b){fn(b.dataset.v);vSet(v)}};
  if(RM2.themeUI)RM2.themeUI($('#thm'));if(RM2.wxUI)RM2.wxUI($('#wxs'));bind('au',x=>{ST.auto=x==='1';save()});if($('#psn')){bind('psn',x=>RM2.palSound(x==='1'));bind('pmv',x=>RM2.palMotion(x==='1'))}bind('sl',x=>{ST.slow=x==='1';save()});
  $('#uil').onchange=async e=>{const l=e.target.value;if(l)await loadPack(l);ST.uil=l;save();shell('set')};
  $('#rt').oninput=e=>{ST.rate=+e.target.value;$('#rv').textContent='×'+ST.rate};$('#rt').onchange=save;
  const vo=$('#vo');if(vo)vo.onchange=e=>{const l=(D.P[ST.tgt]||{}).tts||ST.tgt;ST.voices=ST.voices||{};if(e.target.value)ST.voices[l]=e.target.value;else delete ST.voices[l];save()};
  $('#ts').onclick=()=>{const c=allC().find(x=>W(ST.tgt,x));if(c)speak(W(ST.tgt,c)[0],ST.tgt)};
  $('#pf').onclick=()=>vProf($('#view'));
  const pb=(id,fn)=>{const e=$('#'+id);if(e)e.onclick=()=>{fn();vSet(v)}};pb('pon',()=>RM2.palSet(true));pb('p30',()=>RM2.palSnooze(30));pb('pss',()=>RM2.palSnooze(Infinity));pb('pof',()=>RM2.palSet(false));
  const pg=$('#pgr');if(pg)pg.onclick=e=>{const b=e.target.closest('[data-pk]');if(!b)return;RM2.palPick(b.dataset.pk);pg.querySelectorAll('.pgc').forEach(x=>x.classList.toggle('on',x===b))};const ps=$('#psz');if(ps)ps.oninput=e=>RM2.palSize(e.target.value);v.querySelectorAll('[data-ct]').forEach(b=>b.onclick=()=>{const t=RMT.find(x=>x.icon===b.dataset.ct);t&&t.open()});
  $('#ac2').onclick=()=>{const t=RMT.find(x=>x.icon==='☁️');t?t.open():0};if($('#mr'))$('#mr').onclick=()=>shell('set');
  $('#ex').onclick=async()=>{const txt=JSON.stringify(ST),f=new File([txt],'lingoblox-backup-'+new Date().toISOString().slice(0,10)+'.json',{type:'application/json'});
    try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f]});$('#dm').textContent=SL('st_ok');return}}catch(e){}
    try{const a=document.createElement('a');a.href=URL.createObjectURL(f);a.download=f.name;document.body.appendChild(a);a.click();a.remove();$('#dm').textContent=SL('st_ok')}catch(e){try{await navigator.clipboard.writeText(txt);$('#dm').textContent=SL('st_ok')}catch(_){$('#dm').textContent=SL('st_bad')}}};
  $('#im').onclick=()=>$('#imf').click();
  $('#imf').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const j=JSON.parse(await f.text());if(!j||typeof j!=='object'||!j.prog)throw 0;Object.assign(ST,j);save();location.reload()}catch(_){$('#dm').textContent=SL('st_bad')}};
  $('#chg').onclick=()=>{CUR={src:ST.src,tgt:ST.tgt};pSrc()};
  $('#rs').onclick=()=>{if(confirm(T('sure'))){ST.prog[ST.tgt]=null;delete ST.prog[ST.tgt];save();shell('home')}};
  $('#ra').onclick=()=>{if(confirm(T('sure'))&&confirm(T('sure'))){ST.prog={};save();shell('home')}};
}
function vProf(v){
  const p=P(),L=Object.keys(p.learned).length,st=lvStat();
  const rows=Object.keys(ST.prog||{}).filter(k=>ST.prog[k]&&META[k]).map(k=>`<div class="set"><span>${META[k][1]} ${esc(META[k][0])}</span><b>${Object.keys(ST.prog[k].learned||{}).length} · ⭐ ${ST.prog[k].xp||0}</b></div>`).join('');
  v.innerHTML=`<div class="hhero hh2"><div class="pfh"><div class="pfa">${ST.av||'🙂'}</div><div><h1>${esc(ST.name||SL('st_prof'))}</h1><div class="hsub">${META[ST.src][1]} → ${META[ST.tgt][1]} · 🔥 ${p.streak} · ⭐ ${p.xp}</div></div></div></div><div class="hbody">
  <div class="card"><div class="set"><span>${esc(SL('st_name'))}</span><input type="text" id="pn" value="${esc(ST.name||'')}" maxlength="24" placeholder="…"></div><div class="set col"><span>${esc(SL('st_av'))}</span><div class="sw" id="av">${AVS.map(a=>`<button data-v="${a}" class="av ${(ST.av||'🙂')===a?'on':''}">${a}</button>`).join('')}</div></div></div>
  <div class="card"><div class="g3"><div><b>${L}</b><span>${esc(SL('st_lrned'))}</span></div><div><b>${p.streak}</b><span>🔥</span></div><div><b>${p.xp}</b><span>⭐ XP</span></div></div></div>
  <div class="card"><h3>${esc(T('hm_prog'))}</h3>${LV.map(l=>{const o=st[l],pc=o.n?Math.round(o.k/o.n*100):0;return`<div class="hl"><b>${l}</b><div class="b"><i style="width:${pc}%"></i></div><span>${o.k}/${o.n}</span></div>`}).join('')}</div>
  ${rows?`<div class="card"><h3>${esc(SL('st_langs'))}</h3>${rows}</div>`:''}
  <div class="card"><div class="row" style="flex-wrap:wrap"><button class="btn sm" id="sh">📤 ${esc(SL('st_share'))}</button><button class="btn s sm" id="bk2">⚙️ ${esc(T('set'))}</button></div><div class="mu sm" id="shm" style="margin-top:6px"></div></div></div>`;
  $('#pn').onchange=e=>{ST.name=e.target.value.trim();save();vProf(v)};
  $('#av').onclick=e=>{const b=e.target.closest('button');if(b){ST.av=b.dataset.v;save();vProf(v)}};
  $('#bk2').onclick=()=>shell('set');
  $('#sh').onclick=async()=>{const txt=`LingoBlox · ${META[ST.tgt][0]} · ${L} words · 🔥 ${p.streak}`;try{if(navigator.share)await navigator.share({text:txt});else{await navigator.clipboard.writeText(txt);$('#shm').textContent=SL('st_ok')}}catch(e){}};
}
/* ---------- boot ---------- */
async function boot(){
  applyTheme();applyTP();
  if(ST.src&&ST.tgt&&META[ST.src]&&META[ST.tgt]){if(!ST.onb){ST.onb=1;save()}CUR={src:ST.src,tgt:ST.tgt};return pBuild()}
  pWelcome();
}
const RTH=['aurora','midnight','paper','neon','sunset','forest','mono'],RTHP={aurora:'linear-gradient(135deg,#1e3a8a,#7dd3fc)',midnight:'linear-gradient(135deg,#0b1020,#a5b4fc)',paper:'linear-gradient(135deg,#fffaf0,#b45309)',neon:'linear-gradient(135deg,#050816,#22f5e4)',sunset:'linear-gradient(135deg,#9a3412,#fdba74)',forest:'linear-gradient(135deg,#14532d,#86efac)',mono:'linear-gradient(135deg,#000,#fff)'};
const RTHN={aurora:'Aurora',midnight:'Midnight',paper:'Paper',neon:'Neon',sunset:'Sunset',forest:'Forest',mono:'Mono'};
const rthCur=()=>RTH.includes(ST.rth)?ST.rth:'aurora';
const rthBtn=o=>{o.dataset.rth=rthCur();return;const b=document.createElement('button');b.className='rthb';b.textContent='🎨';b.setAttribute('aria-label','theme');b.onclick=e=>{e.stopPropagation();ST.rth=RTH[(RTH.indexOf(rthCur())+1)%RTH.length];save();o.dataset.rth=ST.rth;b.title=RTHN[ST.rth]};o.appendChild(b)};
window.RM2={TPD,tpCalc,applyTP,uil:UIL,themeData:{RTH,RTHP,RTHN,WTH,rthCur},mediaName:()=>MEDN[UIL()]||MEDN.en,rpTop:(pg,i)=>{const el=pg.querySelectorAll('.rp')[i];return el?Math.max(0,el.offsetTop-56):0},setDM:m=>{DM=m},setDLV:l=>{DLV=l;DLVset=1},K,ST,D,T,TN,esc,W,show,pron,speak,save,shell,P,norm,fill,sentIdx,allC,getJSON,loadPack,lab,LV,META,LANGS,tiles:RMT,view:()=>$('#view'),home:goHome,setTab:t=>{TAB=t},tab:()=>TAB,dayN,today,wordRow,bindWords,vWord,session,vQuiz,setFCM:v=>{FCM=v},rth:{btn:rthBtn}};
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
const go=()=>boot();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
