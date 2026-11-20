/* module: live weather effects on the home screen, one country per language */
(()=>{
const R=window.RM2,{ST,esc,K}=R;
const uil=()=>{try{return R.uil()}catch(e){return 'en'}};
const L=o=>o[uil()]||o.en;
const X={
 wx_t:{fa:'جلوه‌های آب‌وهوا',en:'Weather effects',ar:'مؤثرات الطقس',az:'Hava effektləri',de:'Wettereffekte',es:'Efectos del clima',fr:'Effets météo',hi:'मौसम प्रभाव',it:'Effetti meteo',ja:'天気エフェクト',ko:'날씨 효과',pt:'Efeitos do clima',ru:'Погодные эффекты',tr:'Hava efektleri',zh:'天气特效'},
 wx_on:{fa:'نمایش در صفحهٔ خانه',en:'Show on home screen',ar:'عرض في الشاشة الرئيسية',az:'Ana səhifədə göstər',de:'Auf dem Startbildschirm zeigen',es:'Mostrar en inicio',fr:'Afficher sur l’accueil',hi:'होम स्क्रीन पर दिखाएँ',it:'Mostra nella home',ja:'ホームに表示',ko:'홈 화면에 표시',pt:'Mostrar na tela inicial',ru:'Показывать на главной',tr:'Ana ekranda göster',zh:'在主页显示'},
 wx_note:{fa:'آب‌وهوای زندهٔ شهرهای کشورِ زبان مقصد؛ روی چیپ صفحهٔ خانه بزنید تا شهر عوض شود.',en:'Live weather of cities in your target language’s country; tap the home chip to switch city.',ar:'طقس مباشر لمدن بلد اللغة الهدف؛ المس الشارة لتغيير المدينة.',az:'Hədəf dil ölkəsinin şəhərlərində canlı hava; şəhəri dəyişmək üçün çipə toxunun.',de:'Live-Wetter der Städte im Zielsprachland; tippe den Chip für eine andere Stadt.',es:'Clima en vivo de ciudades del país del idioma meta; toca el chip para cambiar.',fr:'Météo en direct des villes du pays de la langue cible ; touchez la puce pour changer.',hi:'लक्ष्य भाषा के देश के शहरों का लाइव मौसम; शहर बदलने के लिए चिप दबाएँ।',it:'Meteo dal vivo delle città del Paese della lingua; tocca il chip per cambiare.',ja:'学習言語の国の都市の天気をリアルタイム表示。チップをタップで都市切替。',ko:'학습 언어 국가 도시의 실시간 날씨. 칩을 눌러 도시를 바꿉니다.',pt:'Clima ao vivo das cidades do país do idioma; toque no chip para trocar.',ru:'Погода в городах страны изучаемого языка; нажмите на чип, чтобы сменить город.',tr:'Hedef dil ülkesinin şehirlerinde canlı hava; şehri değiştirmek için çipe dokunun.',zh:'显示目标语言国家城市的实时天气；点击标签切换城市。'},
 wx_demo:{fa:'پیش‌نمایش افکت‌ها',en:'Preview effects',ar:'معاينة المؤثرات',az:'Effektlərə bax',de:'Effekte ansehen',es:'Ver efectos',fr:'Aperçu des effets',hi:'प्रभाव देखें',it:'Anteprima effetti',ja:'エフェクトを試す',ko:'효과 미리보기',pt:'Pré-visualizar efeitos',ru:'Предпросмотр эффектов',tr:'Efektleri önizle',zh:'预览特效'}};
const tt=k=>L(X[k]||{en:k});

const LS=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},SV=(k,o)=>{try{localStorage.setItem(k,JSON.stringify(o))}catch(e){}};
// language -> country cities [name,lat,lon]
const CITY={
 en:[['London',51.51,-0.13],['New York',40.71,-74.01],['Sydney',-33.87,151.21]],
 fa:[['تهران',35.69,51.39],['اصفهان',32.65,51.67],['تبریز',38.08,46.29]],
 ar:[['القاهرة',30.04,31.24],['الرياض',24.71,46.68],['دبي',25.2,55.27]],
 az:[['Bakı',40.41,49.87],['Gəncə',40.68,46.36],['Şəki',41.19,47.17]],
 de:[['Berlin',52.52,13.4],['München',48.14,11.58],['Hamburg',53.55,9.99]],
 es:[['Madrid',40.42,-3.7],['Barcelona',41.39,2.17],['Sevilla',37.39,-5.98]],
 fr:[['Paris',48.86,2.35],['Marseille',43.3,5.37],['Lyon',45.76,4.84]],
 hi:[['दिल्ली',28.61,77.21],['मुंबई',19.08,72.88],['शिमला',31.1,77.17]],
 it:[['Roma',41.9,12.5],['Milano',45.46,9.19],['Napoli',40.85,14.27]],
 ja:[['東京',35.68,139.69],['札幌',43.06,141.35],['大阪',34.69,135.5]],
 ko:[['서울',37.57,126.98],['부산',35.18,129.08],['제주',33.5,126.53]],
 pt:[['Lisboa',38.72,-9.14],['São Paulo',-23.55,-46.63],['Porto',41.15,-8.61]],
 ru:[['Москва',55.76,37.62],['Санкт-Петербург',59.93,30.34],['Сочи',43.6,39.73]],
 tr:[['Ankara',39.93,32.86],['İstanbul',41.01,28.98],['İzmir',38.42,27.14]],
 zh:[['北京',39.9,116.4],['上海',31.23,121.47],['哈尔滨',45.8,126.53]]};
const TZ={'London':'Europe/London','New York':'America/New_York','Sydney':'Australia/Sydney','تهران':'Asia/Tehran','اصفهان':'Asia/Tehran','تبریز':'Asia/Tehran','القاهرة':'Africa/Cairo','الرياض':'Asia/Riyadh','دبي':'Asia/Dubai','Bakı':'Asia/Baku','Gəncə':'Asia/Baku','Şəki':'Asia/Baku','Berlin':'Europe/Berlin','München':'Europe/Berlin','Hamburg':'Europe/Berlin','Madrid':'Europe/Madrid','Barcelona':'Europe/Madrid','Sevilla':'Europe/Madrid','Paris':'Europe/Paris','Marseille':'Europe/Paris','Lyon':'Europe/Paris','दिल्ली':'Asia/Kolkata','मुंबई':'Asia/Kolkata','शिमला':'Asia/Kolkata','Roma':'Europe/Rome','Milano':'Europe/Rome','Napoli':'Europe/Rome','東京':'Asia/Tokyo','札幌':'Asia/Tokyo','大阪':'Asia/Tokyo','서울':'Asia/Seoul','부산':'Asia/Seoul','제주':'Asia/Seoul','Lisboa':'Europe/Lisbon','São Paulo':'America/Sao_Paulo','Porto':'Europe/Lisbon','Москва':'Europe/Moscow','Санкт-Петербург':'Europe/Moscow','Сочи':'Europe/Moscow','Ankara':'Europe/Istanbul','İstanbul':'Europe/Istanbul','İzmir':'Europe/Istanbul','北京':'Asia/Shanghai','上海':'Asia/Shanghai','哈尔滨':'Asia/Shanghai'};
const ICO={clear:'☀️',night:'🌙',cloud:'⛅',fog:'🌫️',rain:'🌧️',snow:'❄️',hail:'🧊',storm:'⛈️'};
const st=()=>Object.assign({on:true,ci:{}},LS('rm2wx')||{});
const lang=()=>CITY[ST.tgt]?ST.tgt:'en';
const cur=()=>{const s=st(),l=lang(),a=CITY[l];return a[(s.ci[l]||0)%a.length]};
function kind(c,day){
  if(c==null)return day?'clear':'night';
  if([96,99].includes(c))return 'hail';if([95].includes(c))return 'storm';
  if([71,73,75,77,85,86].includes(c))return 'snow';
  if([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(c))return 'rain';
  if([45,48].includes(c))return 'fog';if([2,3].includes(c))return 'cloud';
  return day?'clear':'night'}
async function load(c){
  const key=c[1]+','+c[2],ca=LS('rm2wxc')||{},o=ca[key];
  if(o&&o.d&&o.d.tz&&Date.now()-o.t<15*60e3)return o.d;
  try{const r=await K.get('net').fetch('https://api.open-meteo.com/v1/forecast?latitude='+c[1]+'&longitude='+c[2]+'&current=temperature_2m,weather_code,is_day,wind_speed_10m,precipitation,snowfall&timezone=auto');
    const j=await r.json();if(!j.current)throw 0;const d={tmp:j.current.temperature_2m,code:j.current.weather_code,day:j.current.is_day,wind:j.current.wind_speed_10m,tz:j.timezone};
    ca[key]={t:Date.now(),d};SV('rm2wxc',ca);return d}catch(e){return o?o.d:null}}
let fx=null,demo=null;
const still=()=>{try{return matchMedia('(prefers-reduced-motion:reduce)').matches}catch(e){return false}};
function stop(){if(fx){cancelAnimationFrame(fx.raf);fx.cv.remove();fx.ch&&fx.ch.remove();fx=null}}
function start(view,k,wind,wch){
  stop();if(!k||k==='cloud'&&false)return;
  const cv=document.createElement('canvas');cv.className='wxcv';document.body.appendChild(cv);
  const x=cv.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);let W=0,H=0;
  const fit=()=>{W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0)};fit();addEventListener('resize',fit);
  const n={rain:140,storm:200,snow:90,hail:70,clear:0,night:60,cloud:6,fog:5}[k]||0,sc=still()?0.15:1,P=[];
  for(let i=0;i<Math.round(n*sc)+(sc<1?0:0);i++)P.push({x:Math.random()*W,y:Math.random()*H,z:Math.random(),p:Math.random()*6.28});
  const w=Math.max(-3,Math.min(3,(wind||0)/10));let fl=0,t0=0;
  const step=t=>{
    if(!fx)return;if(!view.isConnected||!view.querySelector('.hw')){stop();return}
    const dt=Math.min(40,t-t0||16);t0=t;x.clearRect(0,0,W,H);
    if(k==='clear'){const g=x.createRadialGradient(W*.85,H*.08,0,W*.85,H*.08,W*.9);g.addColorStop(0,'rgba(255,214,90,.55)');g.addColorStop(.25,'rgba(255,200,70,.18)');g.addColorStop(1,'rgba(255,200,70,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
      x.save();x.translate(W*.85,H*.08);x.rotate(t/9000);for(let i=0;i<12;i++){x.rotate(Math.PI/6);const g2=x.createLinearGradient(0,0,0,W*.7);g2.addColorStop(0,'rgba(255,225,120,.22)');g2.addColorStop(1,'rgba(255,225,120,0)');x.fillStyle=g2;x.beginPath();x.moveTo(-12,0);x.lineTo(12,0);x.lineTo(60,W*.7);x.lineTo(-60,W*.7);x.fill()}x.restore()}
    if(k==='night'){P.forEach(p=>{const a=.35+.5*Math.sin(t/700+p.p);x.fillStyle='rgba(255,255,255,'+a.toFixed(2)+')';x.beginPath();x.arc(p.x,p.y*.7,.8+p.z*1.4,0,6.28);x.fill()});x.fillStyle='rgba(240,240,200,.9)';x.beginPath();x.arc(W*.86,H*.09,16,0,6.28);x.fill();x.fillStyle='rgba(0,0,0,.12)';x.beginPath();x.arc(W*.86+6,H*.09-4,14,0,6.28);x.fill()}
    if(k==='cloud'||k==='storm'||k==='rain'||k==='hail'||k==='fog'||k==='snow'){const cn=k==='fog'?5:k==='cloud'?6:4;x.fillStyle=k==='fog'?'rgba(200,205,215,.16)':k==='cloud'?'rgba(255,255,255,.22)':'rgba(90,100,125,.20)';
      for(let i=0;i<cn;i++){const cx=((t/(k==='fog'?60:30)*(0.4+i*.15)+i*W/cn*1.3)%(W+300))-150,cy=(k==='fog'?H*(.25+i*.14):40+i*28),r=k==='fog'?120:46+i*6;
        for(let j=0;j<4;j++){x.beginPath();x.ellipse(cx+j*34-50,cy+(j%2)*8,r*(.7+j*.1),r*.42,0,0,6.28);x.fill()}}}
    if(k==='rain'||k==='storm'){x.strokeStyle='rgba(150,190,255,.55)';x.lineWidth=1.2;x.beginPath();P.forEach(p=>{const sp=(.5+p.z)*dt*.9;p.y+=sp;p.x+=sp*w*.2+w;if(p.y>H){p.y=-10;p.x=Math.random()*W}x.moveTo(p.x,p.y);x.lineTo(p.x-w*3,p.y-9-p.z*8)});x.stroke();
      if(k==='storm'){if(!fl&&Math.random()<.004)fl=1;if(fl){x.fillStyle='rgba(255,255,255,'+(.4*fl).toFixed(2)+')';x.fillRect(0,0,W,H);fl*=.88;if(fl<.05)fl=0}}}
    if(k==='snow'){x.fillStyle='rgba(255,255,255,.9)';P.forEach(p=>{p.y+=(.3+p.z)*dt*.05;p.x+=Math.sin(t/900+p.p)*.4+w*.3;if(p.y>H){p.y=-6;p.x=Math.random()*W}if(p.x>W+8)p.x=-8;if(p.x<-8)p.x=W;x.beginPath();x.arc(p.x,p.y,1.4+p.z*2.6,0,6.28);x.fill()})}
    if(k==='hail'){x.fillStyle='rgba(235,245,255,.95)';x.strokeStyle='rgba(150,180,210,.8)';P.forEach(p=>{p.y+=(.9+p.z)*dt*.75;p.x+=w;if(p.y>H*.97){p.y=-8;p.x=Math.random()*W}x.beginPath();x.arc(p.x,p.y,2+p.z*2.4,0,6.28);x.fill();x.stroke()})}
    fx.raf=requestAnimationFrame(step)};
  fx={cv,raf:0};fx.raf=requestAnimationFrame(step)}
const chipTxt=(c,d,k)=>(ICO[k]||'')+' '+c[0]+(d?' '+Math.round(d.tmp)+'°':'');
async function home(view){
  const s=st();stop();view.querySelector('.wxchip')?.remove();if(!s.on)return;
  const c=cur(),hw=view.querySelector('.hw');if(!hw)return;
  const ch=document.createElement('button');ch.className='wxchip';ch.textContent='… '+c[0];hw.parentNode.insertBefore(ch,hw);
  ch.onclick=()=>{const s2=st(),l=lang();s2.ci[l]=((s2.ci[l]||0)+1)%CITY[l].length;SV('rm2wx',s2);home(view)};
  let d=await load(c);if(!ch.isConnected)return;
  let k=demo?demo:d?kind(d.code,d.day):null;const dm=demo;demo=null;
  if(dm)d=Object.assign({},d||{tmp:0,wind:12},{wind:d?d.wind:12});
  ch.textContent=chipTxt(c,d,k||'clear')+(dm?' ✦':'');ch.dataset.k=k||'';
  if(k)start(view,k,d&&d.wind,ch)}
K.on('home',({view})=>{home(view)});
R.wxT=()=>tt('wx_t');
let ctm=null;
R.cityBar=async(a,b)=>{
  if(!a||!b)return;clearInterval(ctm);const s=st();if(!s.on){a.hidden=b.hidden=true;return}
  const c=cur();a.hidden=false;a.textContent=c[0];
  a.onclick=()=>{const s2=st(),l=lang();s2.ci[l]=((s2.ci[l]||0)+1)%CITY[l].length;SV('rm2wx',s2);R.cityBar(a,b);if(document.querySelector('#view .hw'))R.home()};
  const run=tzn=>{clearInterval(ctm);if(!tzn){b.hidden=true;return}let f;try{f=new Intl.DateTimeFormat([], {hour:'2-digit',minute:'2-digit',hour12:false,timeZone:tzn})}catch(e){b.hidden=true;return}
    const tick=()=>{if(!b.isConnected){clearInterval(ctm);return}b.textContent=f.format(new Date())};b.hidden=false;tick();ctm=setInterval(tick,15000)};
  run(TZ[c[0]]);
  const d=await load(c);if(!a.isConnected)return;if(d&&d.tz&&d.tz!==TZ[c[0]])run(d.tz)};
R.wxUI=box=>{
  const s=st();box.innerHTML=`<label class="wxr"><input type="checkbox" id="wxon" ${s.on?'checked':''}> <b>${esc(tt('wx_on'))}</b></label><p class="mu sm">${esc(tt('wx_note'))}</p><div class="wxdm"><span class="mu sm">${esc(tt('wx_demo'))}</span>${Object.keys(ICO).map(k=>`<button class="chip" data-k="${k}">${ICO[k]}</button>`).join('')}</div>`;
  box.querySelector('#wxon').onchange=e=>{const s2=st();s2.on=e.target.checked;SV('rm2wx',s2);if(!s2.on)stop()};
  box.querySelector('.wxdm').onclick=e=>{const b=e.target.closest('[data-k]');if(!b)return;demo=b.dataset.k;const s2=st();s2.on=true;SV('rm2wx',s2);R.home()}};
const css=document.createElement('style');css.textContent=`
.wxcv{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:2}
.wxchip{display:none!important;position:relative;z-index:3;align-self:center;display:block;margin:2px auto 0;padding:5px 14px;border-radius:999px;font-size:13px;font-weight:700;background:color-mix(in srgb,var(--card) 80%,transparent);border:1px solid var(--line);color:var(--ink);backdrop-filter:blur(6px)}
.wxr{display:flex;gap:8px;align-items:center}.wxdm{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px}.wxdm .chip{font-size:20px}
`;document.head.appendChild(css);
})();
