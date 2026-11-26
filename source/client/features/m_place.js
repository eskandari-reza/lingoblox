/* module: Placement test — adaptive staircase over CEFR levels; offers to start at the found level and mark lower levels as known */
(()=>{
const localStorage=K.get('storage'),SRS=K.get('srs');
const R=window.RM2,{esc,W,show,speak,D,ST}=R,v=()=>R.view();
const X={"pt_t": {"fa": "آزمون تعیین سطح", "en": "Placement test", "ar": "اختبار تحديد المستوى", "az": "Səviyyə testi", "de": "Einstufungstest", "es": "Prueba de nivel", "fr": "Test de niveau", "hi": "स्तर परीक्षण", "it": "Test di livello", "ja": "レベルチェック", "ko": "레벨 테스트", "pt": "Teste de nível", "ru": "Тест на уровень", "tr": "Seviye testi", "zh": "水平测试"}, "pt_intro": {"fa": "حدود ۲۰ سؤال. اگر نمی‌دانی «نمی‌دانم» را بزن، حدس نزن!", "en": "About 20 questions. If you don't know, tap “I don't know” — don't guess!", "ar": "نحو 20 سؤالاً. إن لم تعرف اضغط «لا أعرف» ولا تخمّن!", "az": "Təxminən 20 sual. Bilmirsənsə «Bilmirəm» seç, təxmin etmə!", "de": "Etwa 20 Fragen. Wenn du es nicht weißt, tippe „Weiß ich nicht“ – nicht raten!", "es": "Unas 20 preguntas. Si no lo sabes, pulsa «No lo sé»: ¡no adivines!", "fr": "Environ 20 questions. Si tu ne sais pas, touche « Je ne sais pas » — ne devine pas !", "hi": "लगभग 20 सवाल। न पता हो तो «पता नहीं» दबाएँ — अंदाज़ा न लगाएँ!", "it": "Circa 20 domande. Se non lo sai, tocca «Non lo so»: non tirare a indovinare!", "ja": "約20問。わからなければ「わからない」を選んでください。推測はしないで！", "ko": "약 20문항입니다. 모르면 “모르겠어요”를 누르세요. 찍지 마세요!", "pt": "Cerca de 20 perguntas. Se não souber, toque em «Não sei» — não adivinhe!", "ru": "Около 20 вопросов. Если не знаешь, нажми «Не знаю» — не угадывай!", "tr": "Yaklaşık 20 soru. Bilmiyorsan «Bilmiyorum»a bas, tahmin etme!", "zh": "约20道题。不会就点“不知道”，不要猜！"}, "pt_idk": {"fa": "نمی‌دانم", "en": "I don't know", "ar": "لا أعرف", "az": "Bilmirəm", "de": "Weiß ich nicht", "es": "No lo sé", "fr": "Je ne sais pas", "hi": "पता नहीं", "it": "Non lo so", "ja": "わからない", "ko": "모르겠어요", "pt": "Não sei", "ru": "Не знаю", "tr": "Bilmiyorum", "zh": "不知道"}, "pt_res": {"fa": "سطح شما", "en": "Your level", "ar": "مستواك", "az": "Səviyyən", "de": "Dein Niveau", "es": "Tu nivel", "fr": "Ton niveau", "hi": "आपका स्तर", "it": "Il tuo livello", "ja": "あなたのレベル", "ko": "당신의 레벨", "pt": "Seu nível", "ru": "Твой уровень", "tr": "Seviyen", "zh": "你的水平"}, "pt_start": {"fa": "شروع از این سطح", "en": "Start from this level", "ar": "ابدأ من هذا المستوى", "az": "Bu səviyyədən başla", "de": "Mit diesem Niveau starten", "es": "Empezar en este nivel", "fr": "Commencer à ce niveau", "hi": "इसी स्तर से शुरू करें", "it": "Inizia da questo livello", "ja": "このレベルから始める", "ko": "이 레벨부터 시작", "pt": "Começar neste nível", "ru": "Начать с этого уровня", "tr": "Bu seviyeden başla", "zh": "从这个级别开始"}, "pt_known": {"fa": "سطح‌های پایین‌تر را «بلد» علامت بزن", "en": "Mark lower levels as known", "ar": "ضع علامة «معروف» على المستويات الأدنى", "az": "Aşağı səviyyələri «bilirəm» işarələ", "de": "Niedrigere Niveaus als bekannt markieren", "es": "Marcar niveles inferiores como sabidos", "fr": "Marquer les niveaux inférieurs comme acquis", "hi": "निचले स्तरों को «आता है» चिह्नित करें", "it": "Segna i livelli inferiori come noti", "ja": "下のレベルを習得済みにする", "ko": "낮은 레벨을 아는 것으로 표시", "pt": "Marcar níveis inferiores como sabidos", "ru": "Отметить низшие уровни как известные", "tr": "Alt seviyeleri «biliyorum» say", "zh": "将较低级别标记为已掌握"}, "pt_go": {"fa": "شروع", "en": "Start", "ar": "ابدأ", "az": "Başla", "de": "Starten", "es": "Empezar", "fr": "Commencer", "hi": "शुरू करें", "it": "Inizia", "ja": "開始", "ko": "시작", "pt": "Começar", "ru": "Начать", "tr": "Başla", "zh": "开始"}};
const tt=k=>{const o=X[k];return o?(o[ST.src||'en']||o.en):R.T(k)};
const shuf=a=>[...a].sort(()=>Math.random()-.5),pick=a=>a[Math.random()*a.length|0];
const head=title=>`<div class="hd"><button class="back" id="bk" aria-label="back">←</button><h2>${esc(title)}</h2></div>`;
const LV=R.LV,dirT=()=>(D.P[ST.tgt]||{}).dir||'ltr';
const byLevel=l=>D.sk.units.filter(u=>u[1]===l).flatMap(u=>u[2]).filter(c=>W(ST.tgt,c)&&W(ST.src,c));
function intro(){const p=R.P();
  v().innerHTML=head(tt('pt_t'))+`<div class="card fc"><div style="font-size:48px">📏</div><p>${esc(tt('pt_intro'))}</p>${p.place?`<div class="mu">${esc(tt('pt_res'))}: <b>${p.place.lv}</b></div>`:''}<button class="btn" id="go">${esc(tt('pt_go'))}</button></div>`;
  v().querySelector('#bk').onclick=R.home;v().querySelector('#go').onclick=test}
function test(){
  const pools=LV.map(byLevel);let idx=1,blockN=0,blockK=0,total=0,hist=[],stat=LV.map(()=>({n:0,k:0})),flips=0,lastDir=0;
  const TOTAL=21;
  const q=()=>{
    const L=pools[idx].length>=8?idx:LV.findIndex((_,i)=>pools[i].length>=8),P=pools[L],c=pick(P),ds=shuf(P.filter(x=>x!==c)).slice(0,3),back=Math.random()<.5;
    const opts=shuf([c,...ds]);
    v().innerHTML=head(tt('pt_t'))+`<div class="row"><span class="mu sm">${total+1}/${TOTAL}</span><span class="sp"></span><b>${LV[L]}</b></div><div class="prog" style="margin:6px 0"><i style="width:${total/TOTAL*100}%"></i></div>
    <div class="card fc"><div class="big" dir="${back?'auto':dirT()}">${esc(back?show(ST.src,c):W(ST.tgt,c)[0])}</div>${back?'':'<button class="btn sm" data-sp="1">🔊</button>'}</div>
    <div class="grid" style="grid-template-columns:1fr 1fr;margin-top:10px">${opts.map(o=>`<button class="opt" data-o="${o}" dir="${back?dirT():'auto'}">${esc(back?W(ST.tgt,o)[0]:show(ST.src,o))}</button>`).join('')}</div><button class="btn sm" id="idk" style="margin-top:12px;opacity:.85">${esc(tt('pt_idk'))}</button>`;
    v().querySelector('#bk').onclick=R.home;
    v().onclick=e=>{if(e.target.closest('[data-sp]'))return speak(W(ST.tgt,c)[0],ST.tgt);const b=e.target.closest('.opt'),i=e.target.closest('#idk');if(!b&&!i)return;v().onclick=null;
      const ok=!!b&&+b.dataset.o===c;stat[L].n++;if(ok)stat[L].k++;blockN++;if(ok)blockK++;total++;K.emit('answer',{ok});
      if(total>=TOTAL||flips>=3)return finish_(stat);
      if(blockN>=3){const dir=blockK>=2?1:-1;if(lastDir&&dir!==lastDir)flips++;lastDir=dir;idx=Math.max(0,Math.min(5,idx+dir));blockN=0;blockK=0}
      q()}};
  q()}
function estimate(stat){let best=0;stat.forEach((s,i)=>{if(s.n>=3&&s.k/s.n>=.67)best=i});return best}
function finish_(stat){const est=estimate(stat),lv=LV[est];
  v().innerHTML=head(tt('pt_t'))+`<div class="card fc"><div class="mu">${esc(tt('pt_res'))}</div><div style="font-size:64px;font-weight:800">${lv}</div>
   ${stat.map((s,i)=>s.n?`<div class="row" style="gap:8px;align-items:center"><b style="width:30px">${LV[i]}</b><div class="prog" style="flex:1"><i style="width:${Math.round(s.k/s.n*100)}%"></i></div><span class="mu sm">${s.k}/${s.n}</span></div>`:'').join('')}
   <button class="btn" id="st" style="margin-top:14px">${esc(tt('pt_start'))}</button>${est>0?`<button class="btn sm" id="kn" style="margin-top:8px">${esc(tt('pt_known'))}</button>`:''}</div>`;
  const p=R.P();p.place={lv,ts:Date.now()};R.save();
  v().querySelector('#bk').onclick=R.home;
  v().querySelector('#st').onclick=()=>{R.setDLV(lv);R.setDM&&R.setDM('list');R.shell('days')};
  const kn=v().querySelector('#kn');if(kn)kn.onclick=()=>{const d=R.dayN();let n=0;for(let i=0;i<est;i++)byLevel(LV[i]).forEach(c=>{if(!p.learned[c]){p.learned[c]=1;const iv=8+Math.floor(Math.random()*30);p.srs[c]=[3,d+iv,iv,5,d,0];n++}});R.save();kn.textContent='✓ '+n;kn.disabled=true}}
R.placement=intro;
R.tiles.push({icon:'📏',label:()=>tt('pt_t'),open:intro});
})();
