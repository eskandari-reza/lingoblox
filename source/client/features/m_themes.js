/* module: Theme manager — templates, custom sliders, saved themes, import/export, reel + wheel palettes */
(()=>{
const R=window.RM2,{ST,esc}=R;
const uil=()=>{try{return R.uil()}catch(e){return 'en'}};
const L=o=>o[uil()]||o.en;
const X={
 tpl:{fa:'قالب‌های آماده',en:'Templates',ar:'قوالب جاهزة',az:'Hazır şablonlar',de:'Fertige Vorlagen',es:'Plantillas',fr:'Modèles',hi:'तैयार टेम्पलेट',it:'Modelli pronti',ja:'テンプレート',ko:'템플릿',pt:'Modelos',ru:'Шаблоны',tr:'Hazır şablonlar',zh:'模板'},
 mine:{fa:'تم‌های من',en:'My themes',ar:'سماتي',az:'Mənim temalarım',de:'Meine Themen',es:'Mis temas',fr:'Mes thèmes',hi:'मेरी थीम',it:'I miei temi',ja:'マイテーマ',ko:'내 테마',pt:'Meus temas',ru:'Мои темы',tr:'Temalarım',zh:'我的主题'},
 cus:{fa:'رنگ‌بندی دلخواه (اسلایدرها)',en:'Custom colors (sliders)',ar:'ألوان مخصصة (منزلقات)',az:'Fərdi rənglər (sürgülər)',de:'Eigene Farben (Regler)',es:'Colores personalizados (deslizadores)',fr:'Couleurs personnalisées (curseurs)',hi:'कस्टम रंग (स्लाइडर)',it:'Colori personalizzati (cursori)',ja:'カスタムカラー（スライダー）',ko:'사용자 색상 (슬라이더)',pt:'Cores personalizadas (controles)',ru:'Свои цвета (ползунки)',tr:'Özel renkler (kaydırıcılar)',zh:'自定义颜色（滑块）'},
 c_girly:{fa:'دخترانه',en:'Girly',ar:'أنثوي',az:'Qız stili',de:'Mädchenhaft',es:'Femenino',fr:'Girly',hi:'लड़कियों वाली',it:'Da ragazza',ja:'ガーリー',ko:'걸리시',pt:'Feminino',ru:'Девичья',tr:'Kız teması',zh:'少女风'},
 c_pastel:{fa:'روشن و پاستلی',en:'Light & pastel',ar:'فاتح وباستيل',az:'Açıq və pastel',de:'Hell & Pastell',es:'Claro y pastel',fr:'Clair & pastel',hi:'हल्की व पेस्टल',it:'Chiaro e pastello',ja:'ライト＆パステル',ko:'밝고 파스텔',pt:'Claro e pastel',ru:'Светлая и пастель',tr:'Açık ve pastel',zh:'浅色粉彩'},
 c_cheer:{fa:'شاد',en:'Cheerful',ar:'مبهج',az:'Şən',de:'Fröhlich',es:'Alegre',fr:'Joyeux',hi:'खुशनुमा',it:'Allegro',ja:'ポップ',ko:'발랄한',pt:'Alegre',ru:'Яркая',tr:'Neşeli',zh:'活力'},
 c_formal:{fa:'رسمی',en:'Formal',ar:'رسمي',az:'Rəsmi',de:'Formell',es:'Formal',fr:'Formel',hi:'औपचारिक',it:'Formale',ja:'フォーマル',ko:'포멀',pt:'Formal',ru:'Деловая',tr:'Resmi',zh:'正式'},
 c_dark:{fa:'تیره',en:'Dark',ar:'داكن',az:'Tünd',de:'Dunkel',es:'Oscuro',fr:'Sombre',hi:'गहरी',it:'Scuro',ja:'ダーク',ko:'다크',pt:'Escuro',ru:'Тёмная',tr:'Koyu',zh:'深色'},
 h1:{fa:'رنگ اصلی',en:'Main hue',ar:'اللون الرئيسي',az:'Əsas rəng',de:'Hauptfarbe',es:'Color principal',fr:'Couleur principale',hi:'मुख्य रंग',it:'Colore principale',ja:'メインカラー',ko:'메인 색상',pt:'Cor principal',ru:'Основной цвет',tr:'Ana renk',zh:'主色'},
 h2:{fa:'رنگ دوم',en:'Second hue',ar:'اللون الثاني',az:'İkinci rəng',de:'Zweitfarbe',es:'Segundo color',fr:'Seconde couleur',hi:'दूसरा रंग',it:'Secondo colore',ja:'サブカラー',ko:'보조 색상',pt:'Segunda cor',ru:'Второй цвет',tr:'İkinci renk',zh:'辅色'},
 sat:{fa:'شدت رنگ',en:'Saturation',ar:'التشبع',az:'Doyma',de:'Sättigung',es:'Saturación',fr:'Saturation',hi:'संतृप्ति',it:'Saturazione',ja:'彩度',ko:'채도',pt:'Saturação',ru:'Насыщенность',tr:'Doygunluk',zh:'饱和度'},
 btn:{fa:'روشنایی دکمه‌ها',en:'Button lightness',ar:'سطوع الأزرار',az:'Düymə parlaqlığı',de:'Tastenhelligkeit',es:'Brillo de botones',fr:'Luminosité des boutons',hi:'बटन की चमक',it:'Luminosità pulsanti',ja:'ボタンの明るさ',ko:'버튼 밝기',pt:'Brilho dos botões',ru:'Яркость кнопок',tr:'Düğme parlaklığı',zh:'按钮亮度'},
 bgL:{fa:'نور پس‌زمینه',en:'Background light',ar:'إضاءة الخلفية',az:'Fon işığı',de:'Hintergrundhelligkeit',es:'Luz de fondo',fr:'Clarté du fond',hi:'पृष्ठभूमि प्रकाश',it:'Luce di sfondo',ja:'背景の明るさ',ko:'배경 밝기',pt:'Luz do fundo',ru:'Яркость фона',tr:'Arka plan ışığı',zh:'背景亮度'},
 bgS:{fa:'رنگ پس‌زمینه',en:'Background tint',ar:'لون الخلفية',az:'Fon rəngi',de:'Hintergrundfarbe',es:'Tono de fondo',fr:'Teinte du fond',hi:'पृष्ठभूमि रंग',it:'Tinta di sfondo',ja:'背景の色味',ko:'배경 색조',pt:'Tom do fundo',ru:'Оттенок фона',tr:'Arka plan rengi',zh:'背景色调'},
 txt:{fa:'وضوح متن',en:'Text contrast',ar:'وضوح النص',az:'Mətn kontrastı',de:'Textkontrast',es:'Contraste del texto',fr:'Contraste du texte',hi:'टेक्स्ट कंट्रास्ट',it:'Contrasto testo',ja:'文字コントラスト',ko:'텍스트 대비',pt:'Contraste do texto',ru:'Контраст текста',tr:'Metin kontrastı',zh:'文字对比度'},
 rst:{fa:'بازنشانی رنگ‌ها',en:'Reset colors',ar:'إعادة الألوان',az:'Rəngləri sıfırla',de:'Farben zurücksetzen',es:'Restablecer colores',fr:'Réinitialiser',hi:'रंग रीसेट',it:'Ripristina colori',ja:'色をリセット',ko:'색상 초기화',pt:'Redefinir cores',ru:'Сбросить цвета',tr:'Renkleri sıfırla',zh:'重置颜色'},
 rnd:{fa:'تصادفی',en:'Random',ar:'عشوائي',az:'Təsadüfi',de:'Zufall',es:'Aleatorio',fr:'Aléatoire',hi:'यादृच्छिक',it:'Casuale',ja:'ランダム',ko:'랜덤',pt:'Aleatório',ru:'Случайно',tr:'Rastgele',zh:'随机'},
 sv:{fa:'ذخیره تم فعلی',en:'Save current',ar:'حفظ الحالي',az:'Cariyi saxla',de:'Aktuelles speichern',es:'Guardar actual',fr:'Enregistrer',hi:'मौजूदा सहेजें',it:'Salva attuale',ja:'現在を保存',ko:'현재 저장',pt:'Salvar atual',ru:'Сохранить',tr:'Mevcudu kaydet',zh:'保存当前'},
 ex:{fa:'خروجی',en:'Export',ar:'تصدير',az:'İxrac',de:'Export',es:'Exportar',fr:'Exporter',hi:'निर्यात',it:'Esporta',ja:'書き出し',ko:'내보내기',pt:'Exportar',ru:'Экспорт',tr:'Dışa aktar',zh:'导出'},
 im:{fa:'ورودی',en:'Import',ar:'استيراد',az:'İdxal',de:'Import',es:'Importar',fr:'Importer',hi:'आयात',it:'Importa',ja:'読み込み',ko:'가져오기',pt:'Importar',ru:'Импорт',tr:'İçe aktar',zh:'导入'},
 nm:{fa:'نام تم؟',en:'Theme name?',ar:'اسم السمة؟',az:'Tema adı?',de:'Name des Themes?',es:'¿Nombre del tema?',fr:'Nom du thème ?',hi:'थीम का नाम?',it:'Nome del tema?',ja:'テーマ名は？',ko:'테마 이름?',pt:'Nome do tema?',ru:'Название темы?',tr:'Tema adı?',zh:'主题名称？'},
 cp:{fa:'کپی شد؛ برای دوستانتان بفرستید.',en:'Copied — share it.',ar:'تم النسخ — شاركه.',az:'Kopyalandı — paylaşın.',de:'Kopiert — teile es.',es:'Copiado: compártelo.',fr:'Copié — partagez-le.',hi:'कॉपी हो गया — साझा करें।',it:'Copiato: condividilo.',ja:'コピーしました。共有できます。',ko:'복사됨 — 공유하세요.',pt:'Copiado — compartilhe.',ru:'Скопировано — поделитесь.',tr:'Kopyalandı — paylaş.',zh:'已复制，可分享。'},
 pi:{fa:'کد تم را اینجا بچسبانید',en:'Paste theme code',ar:'الصق رمز السمة',az:'Tema kodunu yapışdırın',de:'Theme-Code einfügen',es:'Pega el código del tema',fr:'Collez le code du thème',hi:'थीम कोड पेस्ट करें',it:'Incolla il codice del tema',ja:'テーマコードを貼り付け',ko:'테마 코드 붙여넣기',pt:'Cole o código do tema',ru:'Вставьте код темы',tr:'Tema kodunu yapıştırın',zh:'粘贴主题代码'},
 bad:{fa:'کد نامعتبر است',en:'Invalid code',ar:'رمز غير صالح',az:'Kod yanlışdır',de:'Ungültiger Code',es:'Código no válido',fr:'Code invalide',hi:'अमान्य कोड',it:'Codice non valido',ja:'無効なコード',ko:'잘못된 코드',pt:'Código inválido',ru:'Неверный код',tr:'Geçersiz kod',zh:'代码无效'},
 del:{fa:'این تم حذف شود؟',en:'Delete this theme?',ar:'حذف هذه السمة؟',az:'Bu tema silinsin?',de:'Dieses Theme löschen?',es:'¿Eliminar este tema?',fr:'Supprimer ce thème ?',hi:'यह थीम हटाएँ?',it:'Eliminare questo tema?',ja:'このテーマを削除しますか？',ko:'이 테마를 삭제할까요?',pt:'Excluir este tema?',ru:'Удалить эту тему?',tr:'Bu tema silinsin mi?',zh:'删除此主题？'},
 cur:{fa:'تم فعلی',en:'Current theme',ar:'السمة الحالية',az:'Cari tema',de:'Aktuelles Theme',es:'Tema actual',fr:'Thème actuel',hi:'वर्तमान थीम',it:'Tema attuale',ja:'現在のテーマ',ko:'현재 테마',pt:'Tema atual',ru:'Текущая тема',tr:'Geçerli tema',zh:'当前主题'},
 sys:{fa:'خودکار (سیستم)',en:'Auto (system)',ar:'تلقائي (النظام)',az:'Avtomatik (sistem)',de:'Auto (System)',es:'Auto (sistema)',fr:'Auto (système)',hi:'ऑटो (सिस्टम)',it:'Auto (sistema)',ja:'自動（システム）',ko:'자동(시스템)',pt:'Auto (sistema)',ru:'Авто (система)',tr:'Otomatik (sistem)',zh:'自动（系统）'},
 cust:{fa:'سفارشی',en:'Custom',ar:'مخصص',az:'Fərdi',de:'Eigenes',es:'Personalizado',fr:'Personnalisé',hi:'कस्टम',it:'Personalizzato',ja:'カスタム',ko:'사용자 지정',pt:'Personalizado',ru:'Свой',tr:'Özel',zh:'自定义'},
 hint:{fa:'همهٔ بخش‌های برنامه از همین تنظیمات رنگ می‌گیرند.',en:'Every part of the app follows these colors.',ar:'كل أجزاء التطبيق تتبع هذه الألوان.',az:'Tətbiqin bütün hissələri bu rənglərə uyğunlaşır.',de:'Alle Bereiche der App folgen diesen Farben.',es:'Toda la app sigue estos colores.',fr:'Toute l’application suit ces couleurs.',hi:'ऐप के सभी हिस्से इन रंगों का पालन करते हैं।',it:'Tutta l’app segue questi colori.',ja:'アプリ全体がこの配色になります。',ko:'앱의 모든 화면에 이 색상이 적용됩니다.',pt:'Todo o app segue estas cores.',ru:'Всё приложение использует эти цвета.',tr:'Uygulamanın tamamı bu renkleri kullanır.',zh:'应用所有页面都采用这些颜色。'}};
Object.assign(X,{
 stu:{fa:'استودیوی تم',en:'Theme Studio',ar:'استوديو السمات',az:'Tema studiyası',de:'Theme-Studio',es:'Estudio de temas',fr:'Studio de thèmes',hi:'थीम स्टूडियो',it:'Studio dei temi',ja:'テーマスタジオ',ko:'테마 스튜디오',pt:'Estúdio de temas',ru:'Студия тем',tr:'Tema stüdyosu',zh:'主题工作室'},
 stu_d:{fa:'اسلایدرهای رنگ، تصادفی، ذخیرهٔ تم‌های من، خروجی و ورودی',en:'Color sliders, random, saved themes, import & export',ar:'منزلقات الألوان وعشوائي وحفظ السمات واستيراد وتصدير',az:'Rəng sürgüləri, təsadüfi, saxlanmış temalar, idxal və ixrac',de:'Farbregler, Zufall, gespeicherte Themes, Import & Export',es:'Deslizadores de color, aleatorio, temas guardados, importar y exportar',fr:'Curseurs de couleur, aléatoire, thèmes enregistrés, import et export',hi:'रंग स्लाइडर, यादृच्छिक, सहेजी थीम, आयात व निर्यात',it:'Cursori colore, casuale, temi salvati, importa ed esporta',ja:'カラースライダー、ランダム、保存テーマ、読み込み／書き出し',ko:'색상 슬라이더, 랜덤, 저장 테마, 가져오기·내보내기',pt:'Controles de cor, aleatório, temas salvos, importar e exportar',ru:'Ползунки цвета, случайный выбор, свои темы, импорт и экспорт',tr:'Renk kaydırıcıları, rastgele, kayıtlı temalar, içe/dışa aktarma',zh:'颜色滑块、随机、保存主题、导入导出'}});
const tt=k=>L(X[k]||{en:k}),ALL=()=>R.T('all2'),RTT=()=>R.TN('rth_t'),WTT=()=>R.TN('wt_title');
// n=en name, f=fa name
const P=(c,id,n,f,h1,h2,sat,btn,bgL,bgS,txt,rth,wth)=>({c,id,n,f,h1,h2,sat,btn,bgL,bgS,txt,rth,wth});
const TPL=[
 P('girly','rose','Pastel Rose','رز پاستلی',340,290,75,66,96,70,55,'paper','sakura'),
 P('girly','bubble','Bubblegum','آدامس',325,280,85,62,95,80,60,'paper','sakura'),
 P('girly','candy','Candy','آبنبات',300,330,70,64,96,65,55,'paper','sakura'),
 P('girly','peach','Peach','هلویی',18,340,85,64,96,75,55,'paper','sakura'),
 P('girly','noir','Rose Noir','رز شب',335,285,70,62,10,25,78,'midnight','royal'),
 P('pastel','lav','Lavender','اسطوخودوس',265,300,65,66,96,55,60,'paper','ice'),
 P('pastel','mint','Mint','نعنایی',160,190,55,50,96,45,60,'paper','ice'),
 P('pastel','sky','Sky','آسمانی',200,230,75,55,96,60,55,'aurora','ice'),
 P('pastel','cream','Cream','خامه‌ای',35,15,60,55,95,45,55,'paper','ice'),
 P('pastel','mist','Lilac Mist','مه یاسی',280,200,45,62,95,30,60,'paper','ice'),
 P('cheer','sunny','Sunny','آفتابی',42,18,95,52,97,60,60,'sunset','ice'),
 P('cheer','trop','Tropical','استوایی',175,45,80,42,96,40,60,'forest','ice'),
 P('cheer','conf','Confetti','کنفتی',285,175,85,58,97,35,55,'paper','sakura'),
 P('cheer','coral','Coral','مرجانی',8,35,85,60,97,70,55,'paper','sakura'),
 P('formal','navy','Navy','سرمه‌ای',218,230,50,34,97,14,90,'aurora','ice'),
 P('formal','slate','Slate','تخته‌سنگی',212,190,18,40,95,12,90,'mono','ice'),
 P('formal','burg','Burgundy','عنابی',345,10,55,32,97,18,90,'paper','ice'),
 P('formal','emer','Emerald','زمردی',160,190,60,30,97,15,90,'forest','ice'),
 P('formal','graph','Graphite','گرافیت',215,200,15,60,12,10,80,'mono','ocean'),
 P('dark','mid','Midnight','نیمه‌شب',235,265,70,62,9,35,75,'midnight','royal'),
 P('dark','ocean','Ocean Night','اقیانوس',195,215,75,50,8,45,75,'aurora','ocean'),
 P('dark','royal','Royal Night','شاهانه',270,320,70,62,8,40,75,'midnight','royal'),
 P('dark','neon','Neon','نئون',175,320,95,52,6,50,85,'neon','neon'),
 P('dark','forest','Forest Night','جنگل',140,100,55,45,7,40,75,'forest','forest'),
 P('dark','ember','Ember','اخگر',22,350,90,55,7,40,80,'sunset','sunset'),
 P('dark','casino','Casino Gold','طلایی',42,28,65,56,6,12,85,'midnight','casino')];
const CATS=['all','girly','pastel','cheer','formal','dark'];
const SL=[['h1',0,360,'hue'],['h2',0,360,'hue'],['sat',0,100],['btn',25,75],['bgL',4,99],['bgS',0,100],['txt',0,100]];
const PK=['h1','h2','sat','btn','bgL','bgS','txt'];
let CAT='all',tm=0;
const A=()=>R.assets,own=id=>!A()||A().owned(id),pr=id=>A()?A().price(id):0,badge=id=>own(id)?'':`<b class="tmp">🪙 ${pr(id)}</b>`,studio=()=>own('studio');
const cur=()=>({...R.TPD,...(ST.tp||{})});
const sw=t=>{const c=R.tpCalc({...R.TPD,...t});return `linear-gradient(135deg,${c['--bg']} 50%,${c['--ac']} 50%)`};
const put=(patch,extra)=>{ST.tp={...cur(),...patch};if(extra)Object.assign(ST,extra);R.applyTP();clearTimeout(tm);tm=setTimeout(R.save,300)};
const pick=x=>{const t={};PK.forEach(k=>t[k]=x[k]);ST.tp=t;ST.pre=x.id;if(x.rth)ST.rth=x.rth;if(x.wth)ST.wth=x.wth;R.applyTP();R.save()};
const nameOf=x=>uil()==='fa'?(x.f||x.n):x.n;
function ui(box){
  const D=R.themeData,mine=ST.cth||[];
  const sg=k=>{const s=SL.find(z=>z[0]===k),v=cur()[k];return `<div class="tms"><span>${tt(k)}</span><b data-v="${k}">${v}</b><input type="range" data-k="${k}" min="${s[1]}" max="${s[2]}" value="${v}" class="${s[3]==='hue'?'hue':''}"></div>`};
  const grid=a=>a.map(x=>`<button data-p="${x.id}" class="tmc ${ST.pre===x.id?'on':''}"><i style="background:${sw(x)}"></i><small>${esc(nameOf(x))}</small>${badge('th:'+x.id)}</button>`).join('');
  box.innerHTML=`<div class="tmh">${tt('hint')}</div><div class="tmcur"><b>🪙 ${A()?A().bal():0}</b></div>
  <div class="tmbar"><button data-a="rnd">🎲 ${tt('rnd')}</button><button data-a="sv">💾 ${tt('sv')}</button><button data-a="ex">⤓ ${tt('ex')}</button><button data-a="im">⤒ ${tt('im')}</button><button data-a="rst">↺ ${tt('rst')}</button></div>
  <div class="tmcur"><span class="tmbd" style="background:${ST.tp?sw(ST.tp):'linear-gradient(135deg,#f6f4ef 50%,var(--ac) 50%)'}"></span><b>${tt('cur')}:</b> ${ST.tp?esc((TPL.concat(mine).find(x=>x.id===ST.pre)||{}).n?nameOf(TPL.concat(mine).find(x=>x.id===ST.pre)):tt('cust')):tt('sys')}</div>
  <h4 class="tmt">${tt('tpl')}</h4><div class="chips" id="tmcat">${CATS.map(k=>`<button class="chip ${CAT===k?'on':''}" data-c="${k}">${k==='all'?ALL():tt('c_'+k)}</button>`).join('')}</div>
  <div class="tmg" id="tmg"><button data-p="__auto" class="tmc ${ST.tp?'':'on'}"><i style="background:linear-gradient(135deg,#f6f4ef 50%,#2f6bff 50%)"></i><small>${tt('sys')}</small></button>${grid(TPL.filter(x=>CAT==='all'||x.c===CAT))}</div>
  ${mine.length?`<h4 class="tmt">${tt('mine')}</h4><div class="tmg">${mine.map(x=>`<span class="tmw"><button data-p="${x.id}" class="tmc ${ST.pre===x.id?'on':''}"><i style="background:${sw(x)}"></i><small>${esc(x.n)}</small></button><u data-d="${x.id}">×</u></span>`).join('')}</div>`:''}
  ${studio()?`<details class="tmd" open><summary>${tt('cus')}</summary>${SL.map(z=>sg(z[0])).join('')}</details>`:`<div class="tmd tml"><b>🔒 ${tt('stu')}</b><div class="tmh">${tt('stu_d')}</div><button class="btn" data-a="stb">🛒 🪙 ${pr('studio')}</button></div>`}
  <h4 class="tmt">🎞️ ${RTT()}</h4><div class="rthg" id="rthg">${D.RTH.map(k=>`<button class="${D.rthCur()===k?'on':''}" data-r="${k}"><i style="background:${D.RTHP[k]}"></i>${D.RTHN[k]}${badge('rp:'+k)}</button>`).join('')}</div>
  <h4 class="tmt">🎡 ${WTT()}</h4><div class="wthg" id="wthg">${Object.keys(D.WTH).map(k=>`<button class="wtb ${(D.WTH[ST.wth]?ST.wth:'casino')===k?'on':''}" data-w="${k}"><i style="background:${D.WTH[k]}"></i>${esc(R.TN('wt_'+k))}${badge('wh:'+k)}</button>`).join('')}</div>`;
  box.querySelectorAll('input[type=range]').forEach(i=>{i.oninput=()=>{const k=i.dataset.k;put({[k]:+i.value});ST.pre=ST.pre&&null;box.querySelector('[data-v="'+k+'"]').textContent=i.value};i.onchange=()=>ui(box)});
  box.onclick=e=>{
    const c=e.target.closest('[data-c]');if(c){CAT=c.dataset.c;return ui(box)}
    const d=e.target.closest('[data-d]');if(d){if(confirm(tt('del'))){ST.cth=(ST.cth||[]).filter(x=>String(x.id)!==d.dataset.d);R.save();ui(box)}return}
    const p=e.target.closest('[data-p]');if(p){const id=p.dataset.p;if(id==='__auto'){ST.tp=null;ST.pre='';R.applyTP();R.save()}else{const x=TPL.concat(ST.cth||[]).find(z=>String(z.id)===id);if(x&&(!A()||String(x.id)[0]==='u'||A().ensure('th:'+x.id,nameOf(x))))pick(x)}return ui(box)}
    const r=e.target.closest('[data-r]');if(r){if(A()&&!A().ensure('rp:'+r.dataset.r,r.dataset.r))return;ST.rth=r.dataset.r;R.save();return ui(box)}
    const w=e.target.closest('[data-w]');if(w){if(A()&&!A().ensure('wh:'+w.dataset.w,w.dataset.w))return;ST.wth=w.dataset.w;R.save();return ui(box)}
    const a=e.target.closest('[data-a]');if(!a)return;const act=a.dataset.a;if(act==='stb'){if(A().ensure('studio',tt('stu')))ui(box);return}if(act!=='rst'&&!studio()){if(A().ensure('studio',tt('stu')))ui(box);return}
    if(act==='rst'){ST.tp=null;ST.pre='';R.applyTP();R.save();ui(box)}
    else if(act==='rnd'){const dk=Math.random()<.35,h=Math.floor(Math.random()*360);put({h1:h,h2:(h+30+Math.floor(Math.random()*120))%360,sat:50+Math.floor(Math.random()*45),btn:dk?58:48+Math.floor(Math.random()*16),bgL:dk?8:94+Math.floor(Math.random()*4),bgS:dk?30:30+Math.floor(Math.random()*50),txt:dk?80:70});ST.pre='';R.save();ui(box)}
    else if(act==='sv'){const n=prompt(tt('nm'));if(!n)return;const t=cur();ST.cth=(ST.cth||[]).concat([{id:'u'+Date.now(),n:n.slice(0,24),...t,rth:ST.rth,wth:ST.wth}]);ST.tp=t;ST.pre=ST.cth[ST.cth.length-1].id;R.save();ui(box)}
    else if(act==='ex'){const o={v:1,...cur(),rth:ST.rth,wth:ST.wth},s=JSON.stringify(o);try{navigator.clipboard.writeText(s).then(()=>alert(tt('cp')),()=>prompt(tt('ex'),s))}catch(er){prompt(tt('ex'),s)}}
    else if(act==='im'){const s=prompt(tt('pi'));if(!s)return;try{const o=JSON.parse(s),t={};PK.forEach(k=>{const v=+o[k];if(!isFinite(v))throw 0;t[k]=Math.max(0,Math.min(360,v))});ST.tp=t;ST.pre='';if(o.rth)ST.rth=o.rth;if(o.wth)ST.wth=o.wth;R.applyTP();R.save();ui(box)}catch(er){alert(tt('bad'))}}};
}
R.themeUI=ui;
})();
