/* module: device music (global mini-player) */
(()=>{
const R=window.RM2,{esc}=R;
const uil=()=>{try{return R.uil()}catch(e){return 'en'}};
const L=o=>o[uil()]||o.en;
const X={
 lm_t:{fa:'موسیقی دستگاه من',en:'My device music',ar:'موسيقى جهازي',az:'Cihazımdakı musiqi',de:'Musik von meinem Gerät',es:'Música de mi dispositivo',fr:'Musique de mon appareil',hi:'मेरे डिवाइस का संगीत',it:'Musica del mio dispositivo',ja:'端末の音楽',ko:'내 기기 음악',pt:'Música do meu dispositivo',ru:'Музыка с устройства',tr:'Cihazımdaki müzik',zh:'本机音乐'},
 lm_add:{fa:'افزودن آهنگ',en:'Add songs',ar:'إضافة أغانٍ',az:'Mahnı əlavə et',de:'Songs hinzufügen',es:'Añadir canciones',fr:'Ajouter des morceaux',hi:'गाने जोड़ें',it:'Aggiungi brani',ja:'曲を追加',ko:'곡 추가',pt:'Adicionar músicas',ru:'Добавить треки',tr:'Şarkı ekle',zh:'添加歌曲'},
 lm_empty:{fa:'آهنگ‌هایی از دستگاهتان انتخاب کنید؛ هنگام کار با برنامه پخش می‌شوند.',en:'Pick songs from your device; they play while you use the app.',ar:'اختر أغاني من جهازك لتُشغَّل أثناء استخدام التطبيق.',az:'Cihazınızdan mahnılar seçin; tətbiqdən istifadə edərkən çalınacaq.',de:'Wähle Songs von deinem Gerät; sie laufen während der App-Nutzung.',es:'Elige canciones de tu dispositivo; sonarán mientras usas la app.',fr:'Choisissez des morceaux sur votre appareil ; ils jouent pendant l’utilisation.',hi:'अपने डिवाइस से गाने चुनें; ऐप चलाते समय बजेंगे।',it:'Scegli brani dal dispositivo: suoneranno mentre usi l’app.',ja:'端末から曲を選ぶと、アプリ使用中に再生されます。',ko:'기기에서 곡을 고르면 앱을 쓰는 동안 재생됩니다.',pt:'Escolha músicas do dispositivo; tocam enquanto você usa o app.',ru:'Выберите треки на устройстве — они играют, пока вы пользуетесь приложением.',tr:'Cihazınızdan şarkı seçin; uygulamayı kullanırken çalar.',zh:'从设备选择歌曲，使用应用时播放。'},
 lm_clear:{fa:'پاک کردن لیست',en:'Clear list',ar:'مسح القائمة',az:'Siyahını təmizlə',de:'Liste leeren',es:'Vaciar lista',fr:'Vider la liste',hi:'सूची साफ़ करें',it:'Svuota elenco',ja:'リストを消去',ko:'목록 비우기',pt:'Limpar lista',ru:'Очистить список',tr:'Listeyi temizle',zh:'清空列表'}};
const tt=k=>L(X[k]||{en:k});
R.lmT=tt;

const A=new Audio();A.preload='metadata';
let Q=[],I=-1,SH=false,RP=0;
const fmt=t=>{if(!isFinite(t))return'0:00';t=Math.floor(t);return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')};
const nm=f=>f.name.replace(/\.[^.]+$/,'');
let bar=null;
function ensureBar(){
  if(bar&&bar.isConnected)return bar;
  bar=document.createElement('div');bar.className='lmbar';bar.hidden=true;
  bar.innerHTML='<div class="lmpr"><i></i></div><div class="lmrw"><span class="lmn"></span><button data-k="pv" aria-label="prev">⏮</button><button data-k="pp" class="lmpp" aria-label="play">▶</button><button data-k="nx" aria-label="next">⏭</button><button data-k="x" aria-label="close">✕</button></div>';
  document.body.appendChild(bar);
  bar.onclick=e=>{const b=e.target.closest('button');if(b){act(b.dataset.k);return}
    const pr=e.target.closest('.lmpr');if(pr&&A.duration){const r=pr.getBoundingClientRect();A.currentTime=A.duration*((e.clientX-r.left)/r.width)}};
  return bar}
function sync(){
  const b=ensureBar();b.hidden=!Q.length||I<0;document.body.classList.toggle('lmon',!b.hidden);
  if(I>=0&&Q[I])b.querySelector('.lmn').textContent='🎵 '+nm(Q[I].f);
  b.querySelector('.lmpp').textContent=A.paused?'▶':'⏸';
  document.querySelectorAll('.lmpg').forEach(paint)}
function play(i){
  if(!Q.length)return;I=(i+Q.length)%Q.length;
  try{if(A._u)URL.revokeObjectURL(A._u)}catch(e){}
  A._u=URL.createObjectURL(Q[I].f);A.src=A._u;
  document.querySelectorAll('video,audio').forEach(m=>{if(m!==A)try{m.pause()}catch(e){}});
  A.play().catch(()=>{});media();sync()}
function act(k){
  if(k==='pp'){if(I<0)play(0);else if(A.paused)A.play().catch(()=>{});else A.pause()}
  else if(k==='nx')play(SH?Math.floor(Math.random()*Q.length):I+1);
  else if(k==='pv'){if(A.currentTime>3)A.currentTime=0;else play(I-1)}
  else if(k==='x'){A.pause();I=-1;sync()}
  sync()}
function media(){try{if(!navigator.mediaSession||!Q[I])return;navigator.mediaSession.metadata=new MediaMetadata({title:nm(Q[I].f),artist:'LingoBlox'});
  navigator.mediaSession.setActionHandler('play',()=>act('pp'));navigator.mediaSession.setActionHandler('pause',()=>act('pp'));
  navigator.mediaSession.setActionHandler('nexttrack',()=>act('nx'));navigator.mediaSession.setActionHandler('previoustrack',()=>act('pv'))}catch(e){}}
A.addEventListener('ended',()=>{if(RP===2){A.currentTime=0;A.play();return}if(SH||RP===1||I<Q.length-1)play(SH?Math.floor(Math.random()*Q.length):I+1);else{I=-1;sync()}});
['play','pause'].forEach(ev=>A.addEventListener(ev,sync));
A.addEventListener('timeupdate',()=>{const p=A.duration?A.currentTime/A.duration*100:0;const i=bar&&bar.querySelector('.lmpr i');if(i)i.style.width=p+'%';
  document.querySelectorAll('.lmpg .lmsk').forEach(s=>{if(!s._d){s.value=p||0}});const t=document.querySelector('.lmpg .lmt');if(t)t.textContent=fmt(A.currentTime)+' / '+fmt(A.duration)});
// another media starting pauses ours
document.addEventListener('play',e=>{if(e.target!==A&&(e.target.tagName==='AUDIO'||e.target.tagName==='VIDEO')&&!A.paused){A.pause();sync()}},true);
function paint(box){
  const sh=box.querySelector('[data-k="sh"]'),rp=box.querySelector('[data-k="rp"]'),pp=box.querySelector('[data-k="pp"]');
  if(sh)sh.classList.toggle('on',SH);if(rp){rp.classList.toggle('on',RP>0);rp.textContent=RP===2?'🔂':'🔁'}if(pp)pp.textContent=A.paused?'▶':'⏸';
  box.querySelectorAll('.lmi').forEach((r,i)=>r.classList.toggle('cur',i===I))}
R.lmUI=box=>{
  const list=()=>Q.length?Q.map((q,i)=>`<button class="lmi ${i===I?'cur':''}" data-i="${i}"><span>${i===I&&!A.paused?'🔊':'🎵'}</span><b>${esc(nm(q.f))}</b></button>`).join(''):`<div class="mu" style="padding:14px 4px">${esc(tt('lm_empty'))}</div>`;
  const draw=()=>{box.innerHTML=`<div class="lmpg"><input type="file" id="lmf" accept="audio/*,.mp3,.m4a,.aac,.ogg,.opus,.wav,.flac" multiple hidden>
  <button class="btn" id="lmadd">📂 ${esc(tt('lm_add'))}</button>
  <div class="lmct"><button data-k="sh" aria-label="shuffle">🔀</button><button data-k="pv">⏮</button><button data-k="pp" class="lmpp">▶</button><button data-k="nx">⏭</button><button data-k="rp">🔁</button></div>
  <input type="range" class="lmsk" min="0" max="100" step="0.1" value="0"><div class="lmt mu sm">0:00 / 0:00</div>
  <div class="lmvl">🔈<input type="range" id="lmv" min="0" max="1" step="0.01" value="${A.volume}">🔊</div>
  <div class="lmls">${list()}</div>${Q.length?`<button class="btn s sm" id="lmcl">🗑 ${esc(tt('lm_clear'))}</button>`:''}</div>`;
    const pg=box.querySelector('.lmpg'),f=box.querySelector('#lmf');
    box.querySelector('#lmadd').onclick=()=>f.click();
    f.onchange=()=>{const a=[...f.files].filter(x=>/^audio\//.test(x.type)||/\.(mp3|m4a|aac|ogg|opus|wav|flac|weba)$/i.test(x.name));if(!a.length)return;const had=Q.length;a.forEach(x=>Q.push({f:x}));draw();if(!had||I<0)play(had)};
    pg.onclick=e=>{const b=e.target.closest('[data-k]'),it=e.target.closest('.lmi');
      if(it){play(+it.dataset.i);draw();return}
      if(!b)return;const k=b.dataset.k;if(k==='sh'){SH=!SH}else if(k==='rp'){RP=(RP+1)%3}else act(k);paint(pg)};
    const sk=box.querySelector('.lmsk');sk.oninput=()=>{sk._d=1};sk.onchange=()=>{if(A.duration)A.currentTime=A.duration*sk.value/100;sk._d=0};
    box.querySelector('#lmv').oninput=e=>{A.volume=+e.target.value};
    const cl=box.querySelector('#lmcl');if(cl)cl.onclick=()=>{A.pause();Q=[];I=-1;sync();draw()};
    paint(pg)};
  draw()};
const css=document.createElement('style');css.textContent=`
.lmbar{position:fixed;left:50%;transform:translateX(-50%);width:calc(100% - 20px);max-width:540px;bottom:calc(74px + env(safe-area-inset-bottom));z-index:40;background:var(--card);border:1px solid var(--line);border-radius:16px;box-shadow:0 6px 22px #0003;overflow:hidden}
.lmbar[hidden]{display:none}
.lmpr{height:4px;background:var(--line);cursor:pointer}.lmpr i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ac),var(--ac2,var(--ac)))}
.lmrw{display:flex;align-items:center;gap:2px;padding:4px 6px}.lmn{flex:1;min-width:0;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 6px}
.lmrw button{font-size:20px;padding:6px 8px;color:var(--ink)}.lmrw .lmpp{font-size:22px}
body.lmon #view{padding-bottom:70px}
.lmpg{display:flex;flex-direction:column;gap:10px}
.lmct{display:flex;justify-content:center;align-items:center;gap:6px}.lmct button{font-size:22px;padding:8px 12px;border-radius:14px;background:var(--card);border:1px solid var(--line);color:var(--ink)}
.lmct button.on{background:var(--ac);color:#fff}.lmct .lmpp{font-size:26px;background:var(--ac);color:#fff}
.lmsk,.lmvl input{width:100%;accent-color:var(--ac)}.lmvl{display:flex;align-items:center;gap:8px}.lmt{text-align:center}
.lmls{display:flex;flex-direction:column;gap:6px;max-height:46vh;overflow:auto}
.lmi{display:flex;gap:10px;align-items:center;text-align:start;padding:10px 12px;border-radius:12px;background:var(--card);border:1px solid var(--line);color:var(--ink)}
.lmi b{flex:1;min-width:0;font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lmi.cur{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 12%,var(--card))}
`;document.head.appendChild(css);
window.addEventListener('beforeunload',()=>{try{A.pause()}catch(e){}});
})();
