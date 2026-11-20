/* module: Letter Ninja — Fruit-Ninja-style game: slice flying letters in the right order to spell the word (swipe, combo, bombs, lives) */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{esc,W,show,speak,D,ST}=R;
const X={"nj_t": {"fa": "حروف نینجا", "en": "Letter Ninja", "ar": "نينجا الحروف", "az": "Hərf Ninca", "de": "Buchstaben-Ninja", "es": "Ninja de letras", "fr": "Ninja des lettres", "hi": "अक्षर निंजा", "it": "Ninja delle lettere", "ja": "文字ニンジャ", "ko": "글자 닌자", "pt": "Ninja das letras", "ru": "Буквенный ниндзя", "tr": "Harf Ninja", "zh": "字母忍者"}, "nj_tip": {"fa": "حروف را به ترتیب ببر و از بمب‌ها دوری کن!", "en": "Slice the letters in order — avoid the bombs!", "ar": "اقطع الحروف بالترتيب وتجنّب القنابل!", "az": "Hərfləri ardıcıl kəs, bombalardan qaç!", "de": "Schneide die Buchstaben der Reihe nach – meide die Bomben!", "es": "¡Corta las letras en orden y evita las bombas!", "fr": "Tranche les lettres dans l’ordre — évite les bombes !", "hi": "अक्षरों को क्रम से काटो — बमों से बचो!", "it": "Taglia le lettere in ordine: evita le bombe!", "ja": "文字を順番に切ろう。爆弾に注意！", "ko": "글자를 순서대로 베세요. 폭탄은 피하세요!", "pt": "Corte as letras na ordem — evite as bombas!", "ru": "Руби буквы по порядку и избегай бомб!", "tr": "Harfleri sırayla kes, bombalardan kaç!", "zh": "按顺序切字母，避开炸弹！"}, "nj_over": {"fa": "بازی تمام شد", "en": "Game over", "ar": "انتهت اللعبة", "az": "Oyun bitdi", "de": "Spiel vorbei", "es": "Fin del juego", "fr": "Partie terminée", "hi": "खेल खत्म", "it": "Partita finita", "ja": "ゲームオーバー", "ko": "게임 오버", "pt": "Fim de jogo", "ru": "Игра окончена", "tr": "Oyun bitti", "zh": "游戏结束"}, "nj_best": {"fa": "رکورد", "en": "Best", "ar": "الأفضل", "az": "Rekord", "de": "Rekord", "es": "Récord", "fr": "Record", "hi": "सर्वश्रेष्ठ", "it": "Record", "ja": "ベスト", "ko": "최고 기록", "pt": "Recorde", "ru": "Рекорд", "tr": "Rekor", "zh": "最高分"}, "nj_start": {"fa": "برای شروع بکش", "en": "Swipe to start", "ar": "اسحب للبدء", "az": "Başlamaq üçün sürüşdür", "de": "Wischen zum Start", "es": "Desliza para empezar", "fr": "Glisse pour commencer", "hi": "शुरू करने के लिए स्वाइप करें", "it": "Scorri per iniziare", "ja": "スワイプで開始", "ko": "스와이프하여 시작", "pt": "Deslize para começar", "ru": "Проведи, чтобы начать", "tr": "Başlamak için kaydır", "zh": "滑动开始"}};
const tt=k=>{const o=X[k];return o?(o[ST.src||'en']||o.en):R.T(k)};
const SK='rm2nj',best=()=>{try{return (JSON.parse(localStorage.getItem(SK)||'{}'))[ST.tgt]|0}catch(e){return 0}},setBest=n=>{try{const o=JSON.parse(localStorage.getItem(SK)||'{}');o[ST.tgt]=n;localStorage.setItem(SK,JSON.stringify(o))}catch(e){}};
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.random()*a.length|0];
/* ---------- audio (own tiny synth) ---------- */
let AC=null,muted=false;
const ac=()=>{if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC};
function tone(f,d,type,vol,slide,when){const a=ac();if(!a||muted)return;const t=a.currentTime+(when||0),o=a.createOscillator(),g=a.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f*slide),t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.2,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.02)}
function noise(d,f,q,vol,sweep){const a=ac();if(!a||muted)return;const n=a.sampleRate*d|0,b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=Math.random()*2-1;const s=a.createBufferSource();s.buffer=b;const fl=a.createBiquadFilter();fl.type='bandpass';fl.Q.value=q||1;const t=a.currentTime;fl.frequency.setValueAtTime(f,t);if(sweep)fl.frequency.exponentialRampToValueAtTime(Math.max(80,f*sweep),t+d);const g=a.createGain();g.gain.setValueAtTime(vol||.3,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(fl);fl.connect(g);g.connect(a.destination);s.start()}
const PENTA=[0,2,4,7,9,12,14,16,19,21];
const sfx={swoosh:()=>noise(.18,1800,2,.12,.35),slice:i=>{noise(.1,3200,3,.25,.4);tone(520*Math.pow(2,PENTA[Math.min(i,9)]/12),.18,'triangle',.22,1.02)},wrong:()=>{tone(150,.3,'sawtooth',.22,.6);navigator.vibrate&&navigator.vibrate(60)},boom:()=>{noise(.6,500,.6,.5,.2);tone(70,.5,'sine',.5,.4);navigator.vibrate&&navigator.vibrate([80,40,80])},win:()=>[0,4,7,12,16].forEach((n,i)=>tone(440*Math.pow(2,n/12),.25,'triangle',.22,1,i*.08)),life:()=>[0,7,12].forEach((n,i)=>tone(660*Math.pow(2,n/12),.15,'sine',.2,1,i*.07))};
/* ---------- word pool ---------- */
function pool(){const L=R.P().learned,all=R.allC().filter(c=>W(ST.tgt,c)&&W(ST.src,c)),minL=/^(ja|zh)$/.test(ST.tgt)?2:3;
  const ok=c=>{const w=W(ST.tgt,c)[0];return w&&!/[\s\-'’.]/.test(w)&&[...w].length>=minL&&[...w].length<=8&&/^\p{L}+$/u.test(w)};
  const lr=all.filter(c=>L[c]&&ok(c)),ex=all.filter(ok);return lr.length>=10?lr:ex.slice(0,500)}
const baseL=ch=>ch.toLocaleLowerCase(ST.tgt),disp=ch=>{const u=ch.toLocaleUpperCase(ST.tgt);return[...u].length===1?u:ch};
function open(){
  const P=pool();if(P.length<6){R.view().innerHTML=`<div class="card">${esc(R.T('gm_few'))}</div>`;return}
  const dir=(D.P[ST.tgt]||{}).dir||'ltr';
  const ov=document.createElement('div');ov.id='njov';ov.style.cssText='position:fixed;inset:0;z-index:200;background:#1a1040;touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden;font-family:system-ui,sans-serif';
  ov.innerHTML=`<canvas style="position:absolute;inset:0;width:100%;height:100%;touch-action:none"></canvas>
  <div id="njh" style="position:absolute;left:0;right:0;top:0;padding:max(10px,env(safe-area-inset-top)) 12px 0;pointer-events:none;color:#fff">
   <div style="display:flex;align-items:center;gap:10px;pointer-events:auto"><button id="njx" style="width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:18px">✕</button><div id="njl" style="font-size:20px;letter-spacing:2px"></div><span style="flex:1"></span><b id="njs" style="font-size:24px;text-shadow:0 2px 8px #0008">0</b><button id="njm" style="width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:16px">🔊</button></div>
   <div id="njq" style="text-align:center;margin-top:8px;font-size:19px;font-weight:700;text-shadow:0 2px 8px #0009"></div>
   <div id="njw" dir="${dir}" style="display:flex;justify-content:center;gap:6px;margin-top:8px;flex-wrap:wrap"></div></div>
  <div id="njc" style="position:absolute;left:0;right:0;top:46%;text-align:center;color:#fff;pointer-events:none;font-weight:800;text-shadow:0 4px 18px #000a"></div>`;
  document.body.appendChild(ov);
  const cv=ov.querySelector('canvas'),cx=cv.getContext('2d'),$=s=>ov.querySelector(s);
  let Wd=0,Ht=0,dpr=1,R0=36;
  const resize=()=>{dpr=Math.min(2,devicePixelRatio||1);Wd=innerWidth;Ht=innerHeight;cv.width=Wd*dpr;cv.height=Ht*dpr;cx.setTransform(dpr,0,0,dpr,0,0);R0=Math.max(28,Math.min(46,Math.min(Wd,Ht)*.085))};resize();addEventListener('resize',resize);
  /* state */
  let S={state:'ready',lives:3,score:0,combo:0,level:0,words:0,c:null,word:[],idx:0,objs:[],halves:[],parts:[],splats:[],pops:[],trail:[],spawnT:.5,t:0,shake:0,flash:0,flashC:'#fff',alpha:[],between:0},raf=0,last=performance.now(),alive=true,shaker=document.createElement('div');
  const blobs=[...Array(6)].map((_,i)=>({x:Math.random(),y:Math.random(),r:rnd(.25,.5),h:i*60,sp:rnd(.02,.05),ph:rnd(0,6)}));
  const hearts=()=>{$('#njl').textContent='❤️'.repeat(Math.max(0,S.lives))+'🖤'.repeat(Math.max(0,3-S.lives))};
  const slots=()=>{$('#njw').innerHTML=S.word.map((ch,i)=>`<div style="width:34px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:#fff;background:${i<S.idx?'linear-gradient(160deg,#37e29a,#13a870)':i===S.idx?'rgba(255,255,255,.28);box-shadow:0 0 0 2px #fff8 inset':'rgba(255,255,255,.12)'}">${i<S.idx?esc(disp(ch)):''}</div>`).join('')};
  function alphabet(){const s=new Set();for(let i=0;i<60;i++){const w=pick(P);for(const ch of W(ST.tgt,w)[0])if(/\p{L}/u.test(ch))s.add(baseL(ch))}return[...s]}
  S.alpha=alphabet();

  /* ---- companion: the user's chosen pal cheers / winces along ---- */
  let pal=null,palFx=null,idleT=0;const PC=(()=>{try{return JSON.parse(localStorage.getItem('rm2pal')||'{}')}catch(e){return{}}})();
  const palOn=PC.on!==false;
  (async()=>{try{if(!palOn||!R.palLoad)return;const ok=await R.palLoad();if(!ok||!window.PALS||!PALS.ok||!alive)return;
    const sz=Math.round(Math.max(120,Math.min(170,Wd*.38))),host=document.createElement('div');host.style.cssText=`position:absolute;left:${Wd<500?-8:10}px;bottom:-6px;width:${sz*PALS.PAD}px;height:${sz*PALS.PAD}px;pointer-events:none;z-index:3;transform:translate(0,${sz*.12}px)`;ov.appendChild(host);
    pal=PALS.create(host,PC.id||'mimi',sz);pal.sfxOn=PC.snd!==false&&!muted;
    pal.host.fx=n=>{const E=(t,dx,dy)=>{const e=document.createElement('div');e.textContent=t;e.style.cssText=`position:absolute;left:${sz*.45+(dx||0)}px;bottom:${sz*.9}px;font-size:26px;pointer-events:none;z-index:4`;ov.appendChild(e);e.animate([{transform:'translate(0,0) scale(.6)',opacity:0},{opacity:1,offset:.2},{transform:`translate(${(Math.random()-.5)*50}px,${dy||-90}px) scale(1.1)`,opacity:0}],{duration:1300,easing:'ease-out'}).onfinish=()=>e.remove()};
      ({heart:()=>{for(let i=0;i<3;i++)setTimeout(()=>E('💖',i*14),i*160)},kiss:()=>E('💋',20),spark:()=>E('✨'),note:()=>E('🎵'),sweat:()=>E('💧'),anger:()=>E('💢'),swirl:()=>E('💫'),achoo:()=>E('💨',30),clap:()=>E('👏'),flex:()=>E('💪'),drops:()=>E('💦'),fire:()=>E('🔥',40)}[n]||(()=>{}))()};
    pal.emote('greet');pal.play('wave')}catch(e){}})();
  const react=(arr,force)=>{if(!pal)return;if(!force&&pal.isBusy())return;const c=Array.isArray(arr)?pick(arr):arr;pal.play(c);idleT=0};
  function newWord(){S.c=pick(P.filter(c=>c!==(S.c||0)));const w=W(ST.tgt,S.c)[0];S.word=[...w].map(baseL);S.idx=0;S.between=0;$('#njq').textContent=show(ST.src,S.c);slots();hearts()}
  const needed=()=>S.word[S.idx];
  function spawn(kind,ch){
    const g=Ht*(1.15+S.level*.06),h=rnd(.5,.78)*Ht,vy=-Math.sqrt(2*g*h),x=rnd(.14,.86)*Wd,tgx=Wd/2+rnd(-.25,.25)*Wd,T=2*(-vy)/g;
    S.objs.push({x,y:Ht+R0,vx:(tgx-x)/T,vy,g,r:R0*(kind==='B'?.9:1),rot:rnd(0,6.28),vr:rnd(-1.1,1.1),ch,kind,hue:kind==='B'?0:(ch.charCodeAt(0)*47+S.words*31)%360,cut:false});
    sfx.swoosh()}
  function wave(){
    const n=1+(Math.random()<.45)+(Math.random()<.2+S.level*.03),need=needed(),onScreen=S.objs.some(o=>o.kind==='L'&&!o.cut&&o.ch===need&&o.y<Ht+R0*.5);
    let list=[];if(!onScreen)list.push({k:'L',ch:need});
    while(list.length<n){const bp=S.words<1?0:Math.min(.24,.08+S.level*.025);if(Math.random()<bp)list.push({k:'B'});else{const ch=Math.random()<.5?pick(S.word):pick(S.alpha);list.push({k:'L',ch})}}
    list.sort(()=>Math.random()-.5);list.forEach((o,i)=>setTimeout(()=>{if(alive&&S.state==='play'&&!S.between)spawn(o.k,o.ch||'')},i*130));
    S.spawnT=Math.max(.5,1.05-S.level*.06)+rnd(0,.3)}
  const boom=(x,y,hue,n,sp)=>{for(let i=0;i<n;i++){const a=rnd(0,6.28),v=rnd(80,sp||380);S.parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-80,l:rnd(.5,1.1),m:1,r:rnd(3,9),h:hue,g:900})}};
  const pop=(txt,x,y,col,sz)=>S.pops.push({txt,x,y,l:1,col:col||'#fff',sz:sz||26});
  function cut(o,ang){
    if(o.cut)return;o.cut=true;const nx=Math.cos(ang+Math.PI/2),ny=Math.sin(ang+Math.PI/2);
    S.halves.push({o,a:ang,s:1,x:o.x,y:o.y,vx:o.vx+nx*140,vy:o.vy+ny*140,rot:o.rot,vr:o.vr+rnd(1,3),l:1.6},{o,a:ang,s:-1,x:o.x,y:o.y,vx:o.vx-nx*140,vy:o.vy-ny*140,rot:o.rot,vr:o.vr-rnd(1,3),l:1.6});
    if(o.kind==='B'){sfx.boom();boom(o.x,o.y,30,60,520);S.lives--;S.combo=0;S.shake=.5;S.flash=.5;S.flashC='#ff4020';hearts();pop('💥',o.x,o.y,'#fff',44);react(['scared','dizzy','faint'],true);if(S.lives<=0)over();return}
    if(o.ch===needed()){S.combo++;const pts=Math.round(10*(1+Math.min(S.combo,10)*.2));S.score+=pts;sfx.slice(S.idx);S.idx++;boom(o.x,o.y,o.hue,26,360);S.splats.push({x:o.x,y:o.y,r:rnd(26,48),h:o.hue,l:2.4,sp:[...Array(6)].map(()=>({dx:rnd(-1,1)*40,dy:rnd(-1,1)*40,r:rnd(5,18)}))});pop('+'+pts,o.x,o.y-30,'#fff4a0',24);if(S.combo>=3)pop('x'+S.combo,o.x,o.y-62,'#7dffb3',30);
      $('#njs').textContent=S.score;slots();if(S.idx>=S.word.length)done();else if(S.combo>=8&&S.combo%4===0)react(['flex','dance','hipshake'],true);else if(S.combo>=3&&S.combo%2===1)react(['cheer','clap','wink']);else react(['nod','cheer'])}
    else{S.combo=0;S.lives--;sfx.wrong();S.shake=.3;S.flash=.35;S.flashC='#ff3b6b';boom(o.x,o.y,340,14,260);pop('✖',o.x,o.y-20,'#ff7a95',38);hearts();react(['sad','facepalm','shrug','no'],true);if(S.lives<=0)over()}}
  function done(){S.between=1.3;S.words++;const bonus=20+S.word.length*5;S.score+=bonus;$('#njs').textContent=S.score;sfx.win();try{speak(W(ST.tgt,S.c)[0],ST.tgt)}catch(e){}
    $('#njc').innerHTML=`<div style="font-size:42px;direction:${dir}">${esc(W(ST.tgt,S.c)[0])}</div><div style="font-size:22px;color:#fff4a0;margin-top:4px">+${bonus} ⭐</div>`;
    for(let i=0;i<60;i++)S.parts.push({x:Wd/2+rnd(-60,60),y:Ht*.5,vx:rnd(-380,380),vy:rnd(-620,-120),l:rnd(.8,1.6),m:1,r:rnd(4,9),h:rnd(0,360),g:900});
    R.P().xp+=5+S.word.length;R.save();react(['hearteyes','kiss','dance','clap','hipshake','hug','wink'],true);
    if(S.words%2===0)S.level++;if(S.words%3===0&&S.lives<5){S.lives++;sfx.life();react('cheer',true);hearts();pop('❤️+1',Wd/2,Ht*.35,'#ff9ab8',34)}
    setTimeout(()=>{if(alive&&S.state==='play'){$('#njc').innerHTML='';S.objs=S.objs.filter(o=>!o.cut);newWord()}},1300)}
  function over(){S.state='over';const b=best(),nb=S.score>b;react(nb?['dance','hearteyes']:['sad','faint'],true);if(nb)setBest(S.score);R.P().xp+=Math.round(S.score/10);R.save();
    $('#njc').innerHTML=`<div style="pointer-events:auto;background:rgba(20,10,60,.82);margin:0 auto;max-width:320px;border-radius:24px;padding:22px;backdrop-filter:blur(6px)"><div style="font-size:26px">${esc(tt('nj_over'))}</div><div style="font-size:54px;margin:8px 0">⭐ ${S.score}</div><div style="font-size:16px;opacity:.85">${esc(tt('nj_best'))}: ${Math.max(b,S.score)} ${nb?'🏆':''}</div><div style="display:flex;gap:10px;justify-content:center;margin-top:16px"><button id="nja" style="border:0;border-radius:14px;padding:12px 22px;font-size:17px;font-weight:700;background:linear-gradient(135deg,#ff6a3d,#ff2e93);color:#fff">${esc(R.T('gm_again'))}</button></div></div>`;
    const a=$('#nja');if(a)a.onclick=()=>{$('#njc').innerHTML='';reset()}}
  function reset(){S.state='play';S.lives=3;S.score=0;S.combo=0;S.level=0;S.words=0;S.objs=[];S.halves=[];S.parts=[];S.splats=[];S.pops=[];S.spawnT=.4;S.c=null;$('#njs').textContent=0;newWord()}
  function ready(){S.state='ready';newWord();$('#njc').innerHTML=`<div style="font-size:34px">🥷 ${esc(tt('nj_t'))}</div><div style="font-size:17px;opacity:.9;margin:10px auto;max-width:300px;font-weight:600">${esc(tt('nj_tip'))}</div><div style="font-size:20px;color:#fff4a0;margin-top:14px;animation:njb 1s infinite alternate">👆 ${esc(tt('nj_start'))}</div><style>@keyframes njb{to{transform:translateY(-8px)}}</style>`}
  /* input */
  let down=false,lp=null;
  const seg=(x0,y0,x1,y1)=>{const dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy);if(L<5)return;const ang=Math.atan2(dy,dx);
    for(const o of S.objs){if(o.cut)continue;const t=Math.max(0,Math.min(1,((o.x-x0)*dx+(o.y-y0)*dy)/(L*L))),px=x0+dx*t,py=y0+dy*t;if(Math.hypot(o.x-px,o.y-py)<=o.r*1.05&&S.state==='play')cut(o,ang)}};
  cv.addEventListener('pointerdown',e=>{ac();down=true;lp={x:e.clientX,y:e.clientY};S.trail=[{x:e.clientX,y:e.clientY,t:performance.now()}];try{cv.setPointerCapture(e.pointerId)}catch(_){}
    if(S.state==='ready'){$('#njc').innerHTML='';reset()}});
  cv.addEventListener('pointermove',e=>{if(!down)return;const ev=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const q of(ev.length?ev:[e])){seg(lp.x,lp.y,q.clientX,q.clientY);lp={x:q.clientX,y:q.clientY};if(pal)pal.look((q.clientX-60)/Wd*2-.3,-.2);S.trail.push({x:q.clientX,y:q.clientY,t:performance.now()})}if(S.trail.length>40)S.trail.splice(0,S.trail.length-40)});
  const up=()=>{down=false};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  const close=()=>{alive=false;cancelAnimationFrame(raf);removeEventListener('resize',resize);document.removeEventListener('visibilitychange',vis);if(pal)pal.destroy();ov.remove()};
  $('#njx').onclick=close;$('#njm').onclick=e=>{muted=!muted;if(pal)pal.sfxOn=PC.snd!==false&&!muted;e.currentTarget.textContent=muted?'🔇':'🔊'};
  const vis=()=>{last=performance.now()};document.addEventListener('visibilitychange',vis);
  /* drawing */
  function bubble(x,y,r,rot,hue,ch,bomb){
    if(bomb){const g=cx.createRadialGradient(x-r*.3,y-r*.3,r*.1,x,y,r);g.addColorStop(0,'#666');g.addColorStop(1,'#111');cx.fillStyle=g;cx.shadowColor='#ff3a1a';cx.shadowBlur=18;cx.beginPath();cx.arc(x,y,r,0,6.28);cx.fill();cx.shadowBlur=0;cx.font=`${r*1.3}px serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText('💣',x,y+r*.05);return}
    const g=cx.createRadialGradient(x-r*.35,y-r*.4,r*.1,x,y,r*1.05);g.addColorStop(0,`hsl(${hue},95%,72%)`);g.addColorStop(.6,`hsl(${hue},88%,55%)`);g.addColorStop(1,`hsl(${(hue+25)%360},90%,38%)`);
    cx.shadowColor=`hsla(${hue},100%,60%,.7)`;cx.shadowBlur=16;cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r,0,6.28);cx.fill();cx.shadowBlur=0;cx.lineWidth=3;cx.strokeStyle='rgba(255,255,255,.75)';cx.stroke();
    cx.save();cx.translate(x,y);cx.rotate(rot);cx.font=`800 ${r*1.15}px system-ui,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.lineWidth=r*.12;cx.strokeStyle='rgba(0,0,0,.35)';cx.strokeText(disp(ch),0,r*.04);cx.fillStyle='#fff';cx.fillText(disp(ch),0,r*.04);cx.restore();
    cx.fillStyle='rgba(255,255,255,.35)';cx.beginPath();cx.ellipse(x-r*.32,y-r*.5,r*.38,r*.18,-.6,0,6.28);cx.fill()}
  function frame(now){if(!alive)return;raf=requestAnimationFrame(frame);let dt=Math.min(.04,(now-last)/1000);last=now;S.t+=dt;
    /* update */
    if(pal&&S.state==='play'){idleT+=dt;if(idleT>9){idleT=0;react(['bored','yawn'])}}
    if(S.state==='play'){S.spawnT-=dt;if(S.spawnT<=0&&!S.between&&S.objs.filter(o=>!o.cut).length<7)wave()}
    S.objs.forEach(o=>{o.vy+=o.g*dt;o.x+=o.vx*dt;o.y+=o.vy*dt;o.rot+=o.vr*dt});S.objs=S.objs.filter(o=>o.y<Ht+R0*2||o.vy<0);
    S.halves.forEach(h=>{h.vy+=1400*dt;h.x+=h.vx*dt;h.y+=h.vy*dt;h.rot+=h.vr*dt;h.l-=dt});S.halves=S.halves.filter(h=>h.l>0&&h.y<Ht+200);
    S.parts.forEach(p=>{p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt});S.parts=S.parts.filter(p=>p.l>0);
    S.splats.forEach(s=>s.l-=dt);S.splats=S.splats.filter(s=>s.l>0);S.pops.forEach(p=>{p.l-=dt*1.1;p.y-=40*dt});S.pops=S.pops.filter(p=>p.l>0);
    S.shake=Math.max(0,S.shake-dt);S.flash=Math.max(0,S.flash-dt*1.6);
    /* draw */
    cx.save();if(S.shake>0)cx.translate(rnd(-1,1)*S.shake*22,rnd(-1,1)*S.shake*22);
    const bg=cx.createLinearGradient(0,0,0,Ht);bg.addColorStop(0,'#2a1466');bg.addColorStop(.55,'#4a1a8c');bg.addColorStop(1,'#a02a8a');cx.fillStyle=bg;cx.fillRect(-30,-30,Wd+60,Ht+60);
    blobs.forEach(b=>{const x=(b.x+Math.sin(S.t*b.sp+b.ph)*.15)*Wd,y=(b.y+Math.cos(S.t*b.sp*1.3+b.ph)*.12)*Ht,g=cx.createRadialGradient(x,y,0,x,y,b.r*Math.max(Wd,Ht));g.addColorStop(0,`hsla(${(b.h+S.t*8)%360},90%,60%,.22)`);g.addColorStop(1,'transparent');cx.fillStyle=g;cx.fillRect(0,0,Wd,Ht)});
    S.splats.forEach(s=>{const a=Math.min(1,s.l/1.2)*.45;cx.fillStyle=`hsla(${s.h},90%,60%,${a})`;cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.28);cx.fill();s.sp.forEach(q=>{cx.beginPath();cx.arc(s.x+q.dx,s.y+q.dy,q.r,0,6.28);cx.fill()})});
    S.objs.forEach(o=>{if(!o.cut)bubble(o.x,o.y,o.r,o.rot,o.hue,o.ch,o.kind==='B')});
    S.halves.forEach(h=>{const o=h.o;cx.save();cx.globalAlpha=Math.min(1,h.l/.6);cx.translate(h.x,h.y);cx.rotate(h.a);cx.beginPath();if(h.s>0)cx.rect(-o.r*2,-o.r*2,o.r*4,o.r*2);else cx.rect(-o.r*2,0,o.r*4,o.r*2);cx.clip();cx.rotate(-h.a);bubble(0,0,o.r,h.rot,o.hue,o.ch,o.kind==='B');cx.restore()});
    S.parts.forEach(p=>{cx.fillStyle=`hsla(${p.h},95%,62%,${Math.min(1,p.l*1.6)})`;cx.beginPath();cx.arc(p.x,p.y,p.r*Math.min(1,p.l*1.5),0,6.28);cx.fill()});
    /* trail */
    const nt=performance.now();S.trail=S.trail.filter(p=>nt-p.t<260);
    for(let i=1;i<S.trail.length;i++){const a=S.trail[i-1],b=S.trail[i],k=1-(nt-b.t)/260;cx.strokeStyle=`rgba(255,255,255,${k})`;cx.shadowColor='#7ee8ff';cx.shadowBlur=18;cx.lineCap='round';cx.lineWidth=2+k*9;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}cx.shadowBlur=0;
    S.pops.forEach(p=>{cx.globalAlpha=Math.min(1,p.l*1.5);cx.font=`800 ${p.sz}px system-ui,sans-serif`;cx.textAlign='center';cx.fillStyle=p.col;cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=4;cx.strokeText(p.txt,p.x,p.y);cx.fillText(p.txt,p.x,p.y);cx.globalAlpha=1});
    if(S.flash>0){cx.fillStyle=S.flashC;cx.globalAlpha=S.flash*.5;cx.fillRect(-30,-30,Wd+60,Ht+60);cx.globalAlpha=1}
    cx.restore()}
  ov._S=S;hearts();ready();raf=requestAnimationFrame(frame);
}
R.tiles.push({icon:'🥷',label:()=>tt('nj_t'),open});
})();
