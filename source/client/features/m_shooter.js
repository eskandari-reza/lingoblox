/* module: Word Shooter — a word is shown, several answers float across the screen, aim and shoot the right one (word→meaning, meaning→word, or mixed) */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{esc,W,show,speak,D,ST}=R;
const X={"sh_t": {"fa": "تیراندازی لغت", "en": "Word Shooter", "ar": "رماية الكلمات", "az": "Söz Atıcı", "de": "Wörter-Schießen", "es": "Tiro de palabras", "fr": "Tir aux mots", "hi": "शब्द निशानेबाज़ी", "it": "Tiro alle parole", "ja": "ワードシューター", "ko": "단어 슈팅", "pt": "Tiro às palavras", "ru": "Стрельба по словам", "tr": "Kelime Atışı", "zh": "单词射击"}, "sh_tip": {"fa": "معنی درست را با تیر بزن؛ شلیک اشتباه یک جان می‌گیرد!", "en": "Shoot the correct answer — a wrong shot costs a life!", "ar": "أصب الإجابة الصحيحة — الطلقة الخاطئة تكلّفك حياة!", "az": "Düzgün cavabı vur — səhv atəş can aparır!", "de": "Triff die richtige Antwort – ein Fehlschuss kostet ein Leben!", "es": "¡Dispara a la respuesta correcta: un fallo cuesta una vida!", "fr": "Tire sur la bonne réponse — un mauvais tir coûte une vie !", "hi": "सही उत्तर पर निशाना लगाओ — गलत शॉट पर एक जान जाती है!", "it": "Spara alla risposta giusta: un colpo sbagliato costa una vita!", "ja": "正しい答えを撃とう。外すとライフが減ります！", "ko": "정답을 쏘세요. 틀리면 목숨이 줄어요!", "pt": "Acerte a resposta certa — um tiro errado custa uma vida!", "ru": "Стреляй по верному ответу — промах стоит жизни!", "tr": "Doğru cevabı vur — yanlış atış bir can götürür!", "zh": "射中正确答案——打错会损失一条命！"}, "sh_m1": {"fa": "لغت ← معنی", "en": "Word → meaning", "ar": "كلمة ← معنى", "az": "Söz → mənası", "de": "Wort → Bedeutung", "es": "Palabra → significado", "fr": "Mot → sens", "hi": "शब्द → अर्थ", "it": "Parola → significato", "ja": "単語 → 意味", "ko": "단어 → 뜻", "pt": "Palavra → significado", "ru": "Слово → значение", "tr": "Kelime → anlam", "zh": "单词 → 释义"}, "sh_m2": {"fa": "معنی ← لغت", "en": "Meaning → word", "ar": "معنى ← كلمة", "az": "Mənası → söz", "de": "Bedeutung → Wort", "es": "Significado → palabra", "fr": "Sens → mot", "hi": "अर्थ → शब्द", "it": "Significato → parola", "ja": "意味 → 単語", "ko": "뜻 → 단어", "pt": "Significado → palavra", "ru": "Значение → слово", "tr": "Anlam → kelime", "zh": "释义 → 单词"}, "sh_m3": {"fa": "ترکیبی", "en": "Mixed", "ar": "مختلط", "az": "Qarışıq", "de": "Gemischt", "es": "Mixto", "fr": "Mixte", "hi": "मिश्रित", "it": "Misto", "ja": "ミックス", "ko": "혼합", "pt": "Misto", "ru": "Смешанный", "tr": "Karışık", "zh": "混合"}, "sh_tap": {"fa": "برای شروع بزن", "en": "Tap to start", "ar": "المس للبدء", "az": "Başlamaq üçün toxun", "de": "Tippen zum Start", "es": "Toca para empezar", "fr": "Touche pour commencer", "hi": "शुरू करने के लिए टैप करें", "it": "Tocca per iniziare", "ja": "タップで開始", "ko": "탭하여 시작", "pt": "Toque para começar", "ru": "Нажми, чтобы начать", "tr": "Başlamak için dokun", "zh": "点击开始"}, "sh_over": {"fa": "بازی تمام شد", "en": "Game over", "ar": "انتهت اللعبة", "az": "Oyun bitdi", "de": "Spiel vorbei", "es": "Fin del juego", "fr": "Partie terminée", "hi": "खेल खत्म", "it": "Partita finita", "ja": "ゲームオーバー", "ko": "게임 오버", "pt": "Fim de jogo", "ru": "Игра окончена", "tr": "Oyun bitti", "zh": "游戏结束"}, "sh_best": {"fa": "رکورد", "en": "Best", "ar": "الأفضل", "az": "Rekord", "de": "Rekord", "es": "Récord", "fr": "Record", "hi": "सर्वश्रेष्ठ", "it": "Record", "ja": "ベスト", "ko": "최고 기록", "pt": "Recorde", "ru": "Рекорд", "tr": "Rekor", "zh": "最高分"}};
const tt=k=>{const o=X[k];return o?(o[ST.src||'en']||o.en):R.T(k)};
const SK='rm2sh',BK=()=>{try{return JSON.parse(localStorage.getItem(SK)||'{}')}catch(e){return{}}};
const best=()=>(BK()[ST.tgt]|0),setBest=n=>{const o=BK();o[ST.tgt]=n;try{localStorage.setItem(SK,JSON.stringify(o))}catch(e){}};
const getMode=()=>(BK().mode|0)%3,setMode=m=>{const o=BK();o.mode=m;try{localStorage.setItem(SK,JSON.stringify(o))}catch(e){}};
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.random()*a.length|0],shuf=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
/* ---- tiny synth ---- */
let AC=null,muted=false;
const ac=()=>{if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC};
function tone(f,d,type,vol,slide,when){const a=ac();if(!a||muted)return;const t=a.currentTime+(when||0),o=a.createOscillator(),g=a.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f*slide),t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.2,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.02)}
function noise(d,f,vol){const a=ac();if(!a||muted)return;const n=a.sampleRate*d|0,b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=Math.random()*2-1;const s=a.createBufferSource();s.buffer=b;const fl=a.createBiquadFilter();fl.type='bandpass';fl.frequency.value=f;const g=a.createGain();g.gain.setValueAtTime(vol||.3,a.currentTime);g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+d);s.connect(fl);fl.connect(g);g.connect(a.destination);s.start()}
const sfx={shot:()=>{noise(.09,1500,.18);tone(320,.12,'square',.12,.4)},good:i=>{noise(.12,2800,.2);[0,4,7,12].forEach((n,k)=>tone(520*Math.pow(2,(n+Math.min(i,6))/12),.14,'triangle',.2,1,k*.06))},bad:()=>{tone(140,.35,'sawtooth',.22,.5);navigator.vibrate&&navigator.vibrate(70)},tick:()=>tone(900,.05,'square',.08,1),over:()=>[7,4,0,-5].forEach((n,k)=>tone(440*Math.pow(2,n/12),.25,'sine',.2,1,k*.15))};
/* ---- pool ---- */
function pool(){const L=R.P().learned,all=R.allC().filter(c=>W(ST.tgt,c)&&W(ST.src,c)),ok=c=>{const a=show(ST.tgt,c),b=show(ST.src,c);return a&&b&&a.length<=26&&b.length<=30};
  const lr=all.filter(c=>L[c]&&ok(c)),ex=all.filter(ok);return lr.length>=12?lr:ex.slice(0,700)}
function open(){
  const P=pool();if(P.length<6){R.view().innerHTML=`<div class="card">${esc(R.T('gm_few'))}</div>`;return}
  const dirT=(D.P[ST.tgt]||{}).dir||'ltr',dirS=(D.P[ST.src]||{}).dir||'ltr';
  const ov=document.createElement('div');ov.id='shov';ov.style.cssText='position:fixed;inset:0;z-index:200;background:#06222e;touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden;font-family:system-ui,sans-serif';
  ov.innerHTML=`<canvas style="position:absolute;inset:0;width:100%;height:100%;touch-action:none"></canvas>
  <div style="position:absolute;left:0;right:0;top:0;padding:max(10px,env(safe-area-inset-top)) 12px 0;pointer-events:none;color:#fff">
   <div style="display:flex;align-items:center;gap:10px;pointer-events:auto"><button id="shx" style="width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:18px">✕</button><div id="shl" style="font-size:20px;letter-spacing:2px"></div><span style="flex:1"></span><b id="shs" style="font-size:24px;text-shadow:0 2px 8px #0008">0</b><button id="shm" style="width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:16px">🔊</button></div>
   <div id="shq" style="text-align:center;margin-top:10px;font-size:32px;font-weight:800;text-shadow:0 2px 10px #000a;line-height:1.2"></div>
   <div id="shp" style="text-align:center;font-size:15px;opacity:.8;min-height:20px"></div></div>
  <div id="shc" style="position:absolute;left:0;right:0;top:38%;text-align:center;color:#fff;pointer-events:none;font-weight:800;text-shadow:0 4px 18px #000a"></div>`;
  document.body.appendChild(ov);
  const cv=ov.querySelector('canvas'),cx=cv.getContext('2d'),$=s=>ov.querySelector(s);
  let Wd=0,Ht=0,dpr=1;
  const resize=()=>{dpr=Math.min(2,devicePixelRatio||1);Wd=innerWidth;Ht=innerHeight;cv.width=Wd*dpr;cv.height=Ht*dpr;cx.setTransform(dpr,0,0,dpr,0,0);layout()};
  const CAN=()=>({x:Wd/2,y:Ht-56});
  let S={state:'ready',lives:3,score:0,combo:0,round:0,level:0,mode:getMode(),cur:null,opts:[],bul:[],parts:[],pops:[],t:0,ang:-Math.PI/2,cool:0,tmax:14,tleft:14,between:0,recoil:0,shake:0,flash:0,flashC:'#fff'},raf=0,last=performance.now(),alive=true;
  const stars=[...Array(70)].map(()=>({x:Math.random(),y:Math.random(),r:rnd(.6,2),s:rnd(.05,.3)}));
  const hearts=()=>{$('#shl').textContent='❤️'.repeat(Math.max(0,S.lives))+'🖤'.repeat(Math.max(0,3-S.lives))};
  function layout(){if(!S.opts.length)return;const top=Ht*.3,bot=Ht*.7,n=S.opts.length;S.opts.forEach((o,i)=>{o.y=top+(bot-top)*(n===1?.5:i/(n-1));o.x=Math.min(Math.max(o.x,o.w/2+8),Wd-o.w/2-8)})}
  function fit(txt,dir,maxW){cx.direction=dir;let fs=Math.round(Math.min(24,Math.max(16,Wd*.052)));cx.font=`700 ${fs}px system-ui,sans-serif`;let w=cx.measureText(txt).width;while(w>maxW&&fs>12){fs--;cx.font=`700 ${fs}px system-ui,sans-serif`;w=cx.measureText(txt).width}
    if(w>maxW){let t=txt;while(t.length>3&&cx.measureText(t+'…').width>maxW)t=t.slice(0,-1);txt=t+'…';w=cx.measureText(txt).width}return{txt,w,fs}}
  function newRound(){
    S.round++;S.between=0;const prev=S.cur&&S.cur.c;const c=pick(P.filter(x=>x!==prev));
    const m=S.mode===2?(Math.random()<.5?0:1):S.mode,tl=m===0?ST.tgt:ST.src,ol=m===0?ST.src:ST.tgt,od=m===0?dirS:dirT,pd=m===0?dirT:dirS;
    const pos=(W(ST.tgt,c)||[])[4],ans=show(ol,c);
    let cand=shuf(P.filter(x=>x!==c&&show(ol,x)!==ans)),same=cand.filter(x=>((W(ST.tgt,x)||[])[4])===pos),pickd=[];
    for(const x of [...same.slice(0,2),...cand]){if(pickd.length>=3)break;if(!pickd.some(y=>show(ol,y)===show(ol,x))&&show(ol,x)!==ans)pickd.push(x)}
    const arr=shuf([c,...pickd]);S.cur={c,m,tl,ol,od,pd};
    $('#shq').textContent=show(tl,c);$('#shq').dir=pd;$('#shp').textContent=m===0?(R.pron?R.pron(c)||'':''):'';
    const n=arr.length;S.opts=arr.map((x,i)=>{const f=fit(show(ol,x),od,Wd*.78),w=f.w+40,sp=(40+S.level*9+rnd(0,35))*(Math.random()<.5?-1:1);return{c:x,ok:x===c,txt:f.txt,fs:f.fs,w,h:44,x:rnd(w/2+10,Math.max(w/2+11,Wd-w/2-10)),y:0,vx:(i%2?-1:1)*Math.abs(sp),hue:(i*83+S.round*37)%360,dead:0,hit:0}});
    S.tmax=Math.max(7,14-S.level*.8);S.tleft=S.tmax;layout();hearts();if(m===1)try{speak(show(ST.tgt,c),ST.tgt)}catch(e){}}
  const boom=(x,y,hue,n,sp)=>{for(let i=0;i<n;i++){const a=rnd(0,6.28),v=rnd(80,sp||380);S.parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,l:rnd(.5,1.1),r:rnd(3,8),h:hue,g:800})}};
  const pop=(txt,x,y,col,sz)=>S.pops.push({txt,x,y,l:1,col:col||'#fff',sz:sz||26});
  function next(ms){S.between=1;setTimeout(()=>{if(alive&&S.state==='play'){$('#shc').innerHTML='';newRound()}},ms)}
  function good(o){S.combo++;const bonus=Math.round(S.tleft/S.tmax*10),pts=Math.round((10+bonus)*(1+Math.min(S.combo,10)*.2));S.score+=pts;$('#shs').textContent=S.score;sfx.good(S.combo);o.dead=1;boom(o.x,o.y,o.hue,34,420);pop('+'+pts,o.x,o.y-30,'#fff4a0',28);if(S.combo>=3)pop('x'+S.combo,o.x,o.y-62,'#7dffb3',30);
    S.opts.forEach(q=>{if(!q.dead&&q!==o){q.dead=1;boom(q.x,q.y,q.hue,8,200)}});R.P().xp+=2;R.save();try{if(S.cur.m===0)speak(show(ST.tgt,S.cur.c),ST.tgt)}catch(e){}
    if(S.round%4===0)S.level++;if(S.round%5===0&&S.lives<5){S.lives++;hearts();pop('❤️+1',Wd/2,Ht*.25,'#ff9ab8',32)}next(850)}
  function bad(o){S.combo=0;S.lives--;o.dead=1;sfx.bad();S.shake=.3;S.flash=.35;S.flashC='#ff3b6b';boom(o.x,o.y,350,18,300);pop('✖',o.x,o.y-20,'#ff7a95',38);hearts();if(S.lives<=0)over()}
  function timeout(){S.combo=0;S.lives--;sfx.bad();S.flash=.35;S.flashC='#ff3b6b';S.shake=.25;hearts();const o=S.opts.find(q=>q.ok);if(o){o.hit=1;pop('✔',o.x,o.y-30,'#7dffb3',38)}
    if(S.lives<=0){over();return}S.between=1;setTimeout(()=>{if(alive&&S.state==='play')newRound()},1100)}
  function over(){S.state='over';sfx.over();const b=best(),nb=S.score>b;if(nb)setBest(S.score);R.P().xp+=Math.round(S.score/10);R.save();
    $('#shc').innerHTML=`<div style="pointer-events:auto;background:rgba(5,30,45,.88);margin:0 auto;max-width:320px;border-radius:24px;padding:22px;backdrop-filter:blur(6px)"><div style="font-size:26px">${esc(tt('sh_over'))}</div><div style="font-size:54px;margin:8px 0">⭐ ${S.score}</div><div style="font-size:16px;opacity:.85">${esc(tt('sh_best'))}: ${Math.max(b,S.score)} ${nb?'🏆':''}</div><div style="margin-top:16px"><button id="sha" style="border:0;border-radius:14px;padding:12px 22px;font-size:17px;font-weight:700;background:linear-gradient(135deg,#22d3a0,#0ea5e9);color:#fff">${esc(R.T('gm_again'))}</button></div></div>`;
    const a=$('#sha');if(a)a.onclick=()=>{$('#shc').innerHTML='';reset()}}
  function reset(){S.state='play';S.lives=3;S.score=0;S.combo=0;S.round=0;S.level=0;S.bul=[];S.parts=[];S.pops=[];S.cur=null;$('#shs').textContent=0;newRound()}
  const MN=()=>[tt('sh_m1'),tt('sh_m2'),tt('sh_m3')];
  function ready(){S.state='ready';S.opts=[];$('#shq').textContent='';$('#shp').textContent='';hearts();
    const draw=()=>{$('#shc').innerHTML=`<div style="font-size:34px">🏹 ${esc(tt('sh_t'))}</div><div style="font-size:17px;opacity:.9;margin:10px auto;max-width:300px;font-weight:600">${esc(tt('sh_tip'))}</div><div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;pointer-events:auto;margin:12px 8px">${MN().map((n,i)=>`<button data-md="${i}" style="border:0;border-radius:12px;padding:8px 12px;font-size:14px;font-weight:700;color:#fff;background:${i===S.mode?'linear-gradient(135deg,#22d3a0,#0ea5e9)':'rgba(255,255,255,.16)'}">${esc(n)}</button>`).join('')}</div><div style="font-size:20px;color:#fff4a0;margin-top:10px;animation:shb 1s infinite alternate">👆 ${esc(tt('sh_tap'))}</div><style>@keyframes shb{to{transform:translateY(-8px)}}</style>`};
    draw();$('#shc').onclick=e=>{const b=e.target.closest('[data-md]');if(b){S.mode=+b.dataset.md;setMode(S.mode);draw()}}}
  /* input */
  const aim=(x,y)=>{const c=CAN();let a=Math.atan2(y-c.y,x-c.x);a=Math.max(-Math.PI+.12,Math.min(-.12,a));S.ang=a};
  function fire(x,y){if(S.state!=='play'||S.between||S.cool>0)return;aim(x,y);const c=CAN(),v=1500;S.bul.push({x:c.x+Math.cos(S.ang)*50,y:c.y+Math.sin(S.ang)*50,vx:Math.cos(S.ang)*v,vy:Math.sin(S.ang)*v,px:c.x,py:c.y});S.cool=.16;S.recoil=1;sfx.shot()}
  cv.addEventListener('pointerdown',e=>{ac();aim(e.clientX,e.clientY);if(S.state==='ready'){$('#shc').innerHTML='';reset();return}fire(e.clientX,e.clientY)});
  cv.addEventListener('pointermove',e=>{aim(e.clientX,e.clientY)});
  const close=()=>{alive=false;cancelAnimationFrame(raf);removeEventListener('resize',resize);document.removeEventListener('visibilitychange',vis);ov.remove()};
  $('#shx').onclick=close;$('#shm').onclick=e=>{muted=!muted;e.currentTarget.textContent=muted?'🔇':'🔊'};
  const vis=()=>{last=performance.now()};document.addEventListener('visibilitychange',vis);
  function pill(o){const x=o.x-o.w/2,y=o.y-o.h/2;let hue=o.hue,a=o.dead?0:1,g=cx.createLinearGradient(0,y,0,y+o.h);g.addColorStop(0,`hsl(${hue},80%,60%)`);g.addColorStop(1,`hsl(${(hue+25)%360},80%,40%)`);
    if(o.hit){g=cx.createLinearGradient(0,y,0,y+o.h);g.addColorStop(0,'#5af0a2');g.addColorStop(1,'#12a468')}
    cx.save();cx.shadowColor=`hsla(${hue},100%,60%,.6)`;cx.shadowBlur=14;cx.fillStyle=g;cx.beginPath();cx.roundRect?cx.roundRect(x,y,o.w,o.h,o.h/2):cx.rect(x,y,o.w,o.h);cx.fill();cx.shadowBlur=0;cx.lineWidth=2.5;cx.strokeStyle='rgba(255,255,255,.75)';cx.stroke();
    cx.direction=S.cur?S.cur.od:'ltr';cx.font=`700 ${o.fs}px system-ui,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.lineWidth=3;cx.strokeStyle='rgba(0,0,0,.35)';cx.strokeText(o.txt,o.x,o.y+1);cx.fillStyle='#fff';cx.fillText(o.txt,o.x,o.y+1);cx.restore()}
  function cannon(){const c=CAN(),rc=S.recoil*10;cx.save();cx.translate(c.x,c.y);cx.fillStyle='#0b3a4d';cx.strokeStyle='#7ee8ff';cx.lineWidth=3;cx.beginPath();cx.arc(0,18,34,Math.PI,0);cx.lineTo(34,60);cx.lineTo(-34,60);cx.closePath();cx.fill();cx.stroke();
    cx.rotate(S.ang+Math.PI/2);const g=cx.createLinearGradient(-12,0,12,0);g.addColorStop(0,'#5fd7ff');g.addColorStop(1,'#0e7fa8');cx.fillStyle=g;cx.strokeStyle='#e6fbff';cx.lineWidth=2;cx.beginPath();cx.roundRect?cx.roundRect(-12,-48+rc,24,58,8):cx.rect(-12,-48+rc,24,58);cx.fill();cx.stroke();
    if(S.recoil>.6){cx.fillStyle='rgba(255,240,160,.9)';cx.beginPath();cx.arc(0,-52,14*S.recoil,0,6.28);cx.fill()}
    cx.restore();
    if(S.state==='play'&&!S.between){cx.save();cx.setLineDash([4,10]);cx.strokeStyle='rgba(126,232,255,.35)';cx.lineWidth=2;cx.beginPath();cx.moveTo(c.x+Math.cos(S.ang)*70,c.y+Math.sin(S.ang)*70);cx.lineTo(c.x+Math.cos(S.ang)*Ht,c.y+Math.sin(S.ang)*Ht);cx.stroke();cx.restore()}}
  function frame(now){if(!alive)return;raf=requestAnimationFrame(frame);const dt=Math.min(.04,(now-last)/1000);last=now;S.t+=dt;
    S.cool=Math.max(0,S.cool-dt);S.recoil=Math.max(0,S.recoil-dt*6);S.shake=Math.max(0,S.shake-dt);S.flash=Math.max(0,S.flash-dt*1.6);
    if(S.state==='play'&&!S.between){S.tleft-=dt;if(S.tleft<=0){S.tleft=0;timeout()}}
    S.opts.forEach(o=>{if(o.dead)return;o.x+=o.vx*dt;if(o.x<o.w/2+6){o.x=o.w/2+6;o.vx=Math.abs(o.vx)}if(o.x>Wd-o.w/2-6){o.x=Wd-o.w/2-6;o.vx=-Math.abs(o.vx)}});
    S.bul.forEach(b=>{b.px=b.x;b.py=b.y;b.x+=b.vx*dt;b.y+=b.vy*dt;b.dead=false;
      if(S.state==='play'&&!S.between)for(const o of S.opts){if(o.dead)continue;
        /* swept test: check a few points along the step */
        for(let k=0;k<=4;k++){const px=b.px+(b.x-b.px)*k/4,py=b.py+(b.y-b.py)*k/4;if(Math.abs(px-o.x)<=o.w/2+5&&Math.abs(py-o.y)<=o.h/2+5){b.dead=true;if(o.ok)good(o);else bad(o);break}}if(b.dead)break}
      if(b.x<-20||b.x>Wd+20||b.y<-20)b.dead=true});S.bul=S.bul.filter(b=>!b.dead);
    S.parts.forEach(p=>{p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt});S.parts=S.parts.filter(p=>p.l>0);S.pops.forEach(p=>{p.l-=dt*1.1;p.y-=40*dt});S.pops=S.pops.filter(p=>p.l>0);
    cx.save();if(S.shake>0)cx.translate(rnd(-1,1)*S.shake*20,rnd(-1,1)*S.shake*20);
    const bg=cx.createLinearGradient(0,0,0,Ht);bg.addColorStop(0,'#04141d');bg.addColorStop(.6,'#0a3a4c');bg.addColorStop(1,'#126a6f');cx.fillStyle=bg;cx.fillRect(-30,-30,Wd+60,Ht+60);
    stars.forEach(s=>{const y=((s.y+S.t*s.s*.05)%1)*Ht;cx.fillStyle=`rgba(255,255,255,${.3+s.r*.2})`;cx.beginPath();cx.arc(s.x*Wd,y,s.r,0,6.28);cx.fill()});
    if(S.state==='play'){const w=Wd-32,k=S.tleft/S.tmax;cx.fillStyle='rgba(255,255,255,.15)';cx.fillRect(16,Ht*.205,w,6);cx.fillStyle=k>.4?'#34e3a5':k>.2?'#ffd24a':'#ff5b6e';cx.fillRect(16,Ht*.205,w*k,6)}
    S.opts.forEach(o=>{if(!o.dead)pill(o)});
    S.bul.forEach(b=>{cx.strokeStyle='rgba(255,255,255,.9)';cx.shadowColor='#7ee8ff';cx.shadowBlur=14;cx.lineWidth=5;cx.lineCap='round';cx.beginPath();cx.moveTo(b.x,b.y);cx.lineTo(b.x-b.vx*.02,b.y-b.vy*.02);cx.stroke();cx.shadowBlur=0});
    S.parts.forEach(p=>{cx.fillStyle=`hsla(${p.h},95%,62%,${Math.min(1,p.l*1.6)})`;cx.beginPath();cx.arc(p.x,p.y,p.r*Math.min(1,p.l*1.5),0,6.28);cx.fill()});
    cannon();
    S.pops.forEach(p=>{cx.globalAlpha=Math.min(1,p.l*1.5);cx.font=`800 ${p.sz}px system-ui,sans-serif`;cx.textAlign='center';cx.direction='ltr';cx.fillStyle=p.col;cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=4;cx.strokeText(p.txt,p.x,p.y);cx.fillText(p.txt,p.x,p.y);cx.globalAlpha=1});
    if(S.flash>0){cx.fillStyle=S.flashC;cx.globalAlpha=S.flash*.5;cx.fillRect(-30,-30,Wd+60,Ht+60);cx.globalAlpha=1}
    cx.restore()}
  ov._S=S;resize();addEventListener('resize',resize);ready();raf=requestAnimationFrame(frame);
}
R.tiles.push({icon:'🏹',label:()=>tt('sh_t'),open});
})();
