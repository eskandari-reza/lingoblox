/* module: Travel info — per-country guide (facts, live news, history/geography/politics, entry rules, prohibitions, languages, hotels & tours, emergency numbers).
   Sources: Wikivoyage + Wikipedia (CORS API, translated on demand), GDELT news, static emergency table. */
(()=>{
const R=window.RM2,{ST,esc,K}=R,v=()=>R.view();
const uil=()=>{try{return R.uil()}catch(e){return 'en'}};
const X={
 t:{fa:'اطلاعات سفر',en:'Travel info',ar:'معلومات السفر',az:'Səyahət məlumatı',de:'Reiseinfos',es:'Información de viaje',fr:'Infos voyage',hi:'यात्रा जानकारी',it:'Info di viaggio',ja:'旅行情報',ko:'여행 정보',pt:'Informações de viagem',ru:'Информация для поездки',tr:'Seyahat bilgisi',zh:'旅行信息'},
 ov:{fa:'نگاه کلی و اطلاعات پایه',en:'Overview & basics',ar:'نظرة عامة ومعلومات أساسية',az:'Ümumi baxış',de:'Überblick & Basics',es:'Resumen y datos básicos',fr:'Aperçu et essentiel',hi:'सारांश और बुनियादी जानकारी',it:'Panoramica e dati base',ja:'概要と基本情報',ko:'개요와 기본 정보',pt:'Visão geral e básico',ru:'Обзор и основное',tr:'Genel bakış ve temel bilgiler',zh:'概览与基础信息'},
 news:{fa:'اخبار به‌روز',en:'Latest news',ar:'آخر الأخبار',az:'Son xəbərlər',de:'Aktuelle Nachrichten',es:'Últimas noticias',fr:'Dernières actualités',hi:'ताज़ा खबरें',it:'Ultime notizie',ja:'最新ニュース',ko:'최신 뉴스',pt:'Últimas notícias',ru:'Свежие новости',tr:'Son haberler',zh:'最新新闻'},
 hist:{fa:'تاریخ',en:'History',ar:'التاريخ',az:'Tarix',de:'Geschichte',es:'Historia',fr:'Histoire',hi:'इतिहास',it:'Storia',ja:'歴史',ko:'역사',pt:'História',ru:'История',tr:'Tarih',zh:'历史'},
 geo:{fa:'جغرافیا',en:'Geography',ar:'الجغرافيا',az:'Coğrafiya',de:'Geografie',es:'Geografía',fr:'Géographie',hi:'भूगोल',it:'Geografia',ja:'地理',ko:'지리',pt:'Geografia',ru:'География',tr:'Coğrafya',zh:'地理'},
 pol:{fa:'سیاست و حکومت',en:'Politics & government',ar:'السياسة والحكم',az:'Siyasət və hökumət',de:'Politik & Regierung',es:'Política y gobierno',fr:'Politique et gouvernement',hi:'राजनीति और सरकार',it:'Politica e governo',ja:'政治と政府',ko:'정치와 정부',pt:'Política e governo',ru:'Политика и власть',tr:'Siyaset ve hükümet',zh:'政治与政府'},
 cult:{fa:'فرهنگ و جامعه',en:'Culture & society',ar:'الثقافة والمجتمع',az:'Mədəniyyət və cəmiyyət',de:'Kultur & Gesellschaft',es:'Cultura y sociedad',fr:'Culture et société',hi:'संस्कृति और समाज',it:'Cultura e società',ja:'文化と社会',ko:'문화와 사회',pt:'Cultura e sociedade',ru:'Культура и общество',tr:'Kültür ve toplum',zh:'文化与社会'},
 tour:{fa:'گردشگری و جاذبه‌ها',en:'Tourism & sights',ar:'السياحة والمعالم',az:'Turizm və görməli yerlər',de:'Tourismus & Sehenswürdigkeiten',es:'Turismo y lugares de interés',fr:'Tourisme et sites',hi:'पर्यटन और दर्शनीय स्थल',it:'Turismo e luoghi da vedere',ja:'観光と名所',ko:'관광과 명소',pt:'Turismo e atrações',ru:'Туризм и достопримечательности',tr:'Turizm ve gezilecek yerler',zh:'旅游与景点'},
 entry:{fa:'نیازمندی‌های سفر و ورود',en:'Entry & travel requirements',ar:'متطلبات السفر والدخول',az:'Giriş və səyahət tələbləri',de:'Einreise & Reisevoraussetzungen',es:'Requisitos de entrada y viaje',fr:'Conditions d’entrée et de voyage',hi:'प्रवेश और यात्रा की आवश्यकताएँ',it:'Requisiti di ingresso e viaggio',ja:'入国・渡航の要件',ko:'입국 및 여행 요건',pt:'Requisitos de entrada e viagem',ru:'Въезд и требования к поездке',tr:'Giriş ve seyahat gereklilikleri',zh:'入境与出行要求'},
 rules:{fa:'ممنوعیت‌ها، آداب و ایمنی',en:'Prohibitions, etiquette & safety',ar:'المحظورات والآداب والسلامة',az:'Qadağalar, etiket və təhlükəsizlik',de:'Verbote, Etikette & Sicherheit',es:'Prohibiciones, etiqueta y seguridad',fr:'Interdits, savoir-vivre et sécurité',hi:'निषेध, शिष्टाचार और सुरक्षा',it:'Divieti, etichetta e sicurezza',ja:'禁止事項・マナー・安全',ko:'금지 사항, 예절, 안전',pt:'Proibições, etiqueta e segurança',ru:'Запреты, этикет и безопасность',tr:'Yasaklar, görgü ve güvenlik',zh:'禁忌、礼仪与安全'},
 lang:{fa:'زبان‌های محاوره‌ای',en:'Spoken languages',ar:'اللغات المحكية',az:'Danışıq dilləri',de:'Gesprochene Sprachen',es:'Idiomas hablados',fr:'Langues parlées',hi:'बोली जाने वाली भाषाएँ',it:'Lingue parlate',ja:'話されている言語',ko:'사용 언어',pt:'Idiomas falados',ru:'Разговорные языки',tr:'Konuşulan diller',zh:'通行语言'},
 fun:{fa:'خوراک و مطالب جالب',en:'Food & fun facts',ar:'الطعام وحقائق ممتعة',az:'Yemək və maraqlı faktlar',de:'Essen & Wissenswertes',es:'Comida y curiosidades',fr:'Cuisine et anecdotes',hi:'खान-पान और रोचक बातें',it:'Cibo e curiosità',ja:'グルメと豆知識',ko:'음식과 흥미로운 사실',pt:'Comida e curiosidades',ru:'Еда и интересные факты',tr:'Yemek ve ilginç bilgiler',zh:'美食与趣闻'},
 stay:{fa:'هتل‌ها و تورها',en:'Hotels & tours',ar:'الفنادق والجولات',az:'Otellər və turlar',de:'Hotels & Touren',es:'Hoteles y tours',fr:'Hôtels et visites',hi:'होटल और टूर',it:'Hotel e tour',ja:'ホテルとツアー',ko:'호텔과 투어',pt:'Hotéis e passeios',ru:'Отели и туры',tr:'Oteller ve turlar',zh:'酒店与旅行团'},
 emg:{fa:'شماره‌های اضطراری',en:'Emergency numbers',ar:'أرقام الطوارئ',az:'Təcili nömrələr',de:'Notrufnummern',es:'Números de emergencia',fr:'Numéros d’urgence',hi:'आपातकालीन नंबर',it:'Numeri di emergenza',ja:'緊急連絡先',ko:'긴급 전화번호',pt:'Números de emergência',ru:'Экстренные номера',tr:'Acil durum numaraları',zh:'紧急电话'},
 cty:{fa:'کشور',en:'Country',ar:'البلد',az:'Ölkə',de:'Land',es:'País',fr:'Pays',hi:'देश',it:'Paese',ja:'国',ko:'국가',pt:'País',ru:'Страна',tr:'Ülke',zh:'国家'},
 tr:{fa:'در حال بارگذاری و ترجمه…',en:'Loading & translating…',ar:'جارٍ التحميل والترجمة…',az:'Yüklənir və tərcümə olunur…',de:'Lädt & übersetzt …',es:'Cargando y traduciendo…',fr:'Chargement et traduction…',hi:'लोड और अनुवाद हो रहा है…',it:'Caricamento e traduzione…',ja:'読み込み・翻訳中…',ko:'불러오고 번역하는 중…',pt:'Carregando e traduzindo…',ru:'Загрузка и перевод…',tr:'Yükleniyor ve çevriliyor…',zh:'正在加载并翻译…'},
 src:{fa:'منبع',en:'Source',ar:'المصدر',az:'Mənbə',de:'Quelle',es:'Fuente',fr:'Source',hi:'स्रोत',it:'Fonte',ja:'出典',ko:'출처',pt:'Fonte',ru:'Источник',tr:'Kaynak',zh:'来源'},
 off:{fa:'اتصال برقرار نشد؛ از لینک‌های زیر استفاده کنید.',en:'Couldn’t load; use the links below.',ar:'تعذّر التحميل؛ استخدم الروابط أدناه.',az:'Yüklənmədi; aşağıdakı keçidlərdən istifadə edin.',de:'Laden fehlgeschlagen; nutze die Links unten.',es:'No se pudo cargar; usa los enlaces de abajo.',fr:'Échec du chargement ; utilisez les liens ci-dessous.',hi:'लोड नहीं हुआ; नीचे दिए लिंक उपयोग करें।',it:'Impossibile caricare; usa i link qui sotto.',ja:'読み込めません。下のリンクをご利用ください。',ko:'불러오지 못했습니다. 아래 링크를 이용하세요.',pt:'Não foi possível carregar; use os links abaixo.',ru:'Не удалось загрузить; используйте ссылки ниже.',tr:'Yüklenemedi; aşağıdaki bağlantıları kullanın.',zh:'加载失败，请使用下方链接。'},
 cap:{fa:'پایتخت',en:'Capital',ar:'العاصمة',az:'Paytaxt',de:'Hauptstadt',es:'Capital',fr:'Capitale',hi:'राजधानी',it:'Capitale',ja:'首都',ko:'수도',pt:'Capital',ru:'Столица',tr:'Başkent',zh:'首都'},
 cur:{fa:'واحد پول',en:'Currency',ar:'العملة',az:'Valyuta',de:'Währung',es:'Moneda',fr:'Monnaie',hi:'मुद्रा',it:'Valuta',ja:'通貨',ko:'통화',pt:'Moeda',ru:'Валюта',tr:'Para birimi',zh:'货币'},
 call:{fa:'کد تلفن',en:'Calling code',ar:'رمز الاتصال',az:'Telefon kodu',de:'Vorwahl',es:'Prefijo',fr:'Indicatif',hi:'कॉलिंग कोड',it:'Prefisso',ja:'国番号',ko:'국가 번호',pt:'Código de chamada',ru:'Телефонный код',tr:'Telefon kodu',zh:'区号'},
 plug:{fa:'پریز برق',en:'Power plug',ar:'مقبس الكهرباء',az:'Elektrik prizi',de:'Steckdose',es:'Enchufe',fr:'Prise électrique',hi:'बिजली प्लग',it:'Presa elettrica',ja:'電源プラグ',ko:'전원 플러그',pt:'Tomada',ru:'Розетка',tr:'Elektrik prizi',zh:'电源插头'},
 drv:{fa:'رانندگی',en:'Driving',ar:'القيادة',az:'Sürücülük',de:'Fahren',es:'Conducción',fr:'Conduite',hi:'ड्राइविंग',it:'Guida',ja:'運転',ko:'운전',pt:'Direção',ru:'Движение',tr:'Sürüş',zh:'驾驶'},
 lt:{fa:'سمت چپ جاده',en:'Left side',ar:'يسار الطريق',az:'Yolun solu',de:'Linksverkehr',es:'Por la izquierda',fr:'À gauche',hi:'बाईं ओर',it:'A sinistra',ja:'左側通行',ko:'좌측통행',pt:'Pela esquerda',ru:'Левостороннее',tr:'Soldan',zh:'靠左行驶'},
 rt:{fa:'سمت راست جاده',en:'Right side',ar:'يمين الطريق',az:'Yolun sağı',de:'Rechtsverkehr',es:'Por la derecha',fr:'À droite',hi:'दाईं ओर',it:'A destra',ja:'右側通行',ko:'우측통행',pt:'Pela direita',ru:'Правостороннее',tr:'Sağdan',zh:'靠右行驶'},
 lgs:{fa:'زبان‌ها',en:'Languages',ar:'اللغات',az:'Dillər',de:'Sprachen',es:'Idiomas',fr:'Langues',hi:'भाषाएँ',it:'Lingue',ja:'言語',ko:'언어',pt:'Idiomas',ru:'Языки',tr:'Diller',zh:'语言'},
 pl:{fa:'پلیس',en:'Police',ar:'الشرطة',az:'Polis',de:'Polizei',es:'Policía',fr:'Police',hi:'पुलिस',it:'Polizia',ja:'警察',ko:'경찰',pt:'Polícia',ru:'Полиция',tr:'Polis',zh:'警察'},
 am:{fa:'آمبولانس',en:'Ambulance',ar:'الإسعاف',az:'Təcili yardım',de:'Rettung',es:'Ambulancia',fr:'Ambulance',hi:'एम्बुलेंस',it:'Ambulanza',ja:'救急',ko:'구급',pt:'Ambulância',ru:'Скорая',tr:'Ambulans',zh:'急救'},
 fi:{fa:'آتش‌نشانی',en:'Fire',ar:'الإطفاء',az:'Yanğın',de:'Feuerwehr',es:'Bomberos',fr:'Pompiers',hi:'दमकल',it:'Vigili del fuoco',ja:'消防',ko:'소방',pt:'Bombeiros',ru:'Пожарные',tr:'İtfaiye',zh:'消防'},
 gn:{fa:'اضطراری عمومی',en:'General emergency',ar:'الطوارئ العامة',az:'Ümumi təcili',de:'Allgemeiner Notruf',es:'Emergencias generales',fr:'Urgences générales',hi:'सामान्य आपातकाल',it:'Emergenza generale',ja:'緊急(共通)',ko:'통합 긴급',pt:'Emergência geral',ru:'Единая служба',tr:'Genel acil',zh:'通用急救'},
 bk:{fa:'هتل‌ها در Booking',en:'Hotels on Booking',ar:'فنادق على Booking',az:'Booking-də otellər',de:'Hotels bei Booking',es:'Hoteles en Booking',fr:'Hôtels sur Booking',hi:'Booking पर होटल',it:'Hotel su Booking',ja:'Bookingでホテル',ko:'Booking 호텔',pt:'Hotéis no Booking',ru:'Отели на Booking',tr:'Booking’de oteller',zh:'Booking 酒店'},
 mp:{fa:'هتل‌ها روی نقشه',en:'Hotels on the map',ar:'فنادق على الخريطة',az:'Xəritədə otellər',de:'Hotels auf der Karte',es:'Hoteles en el mapa',fr:'Hôtels sur la carte',hi:'नक्शे पर होटल',it:'Hotel sulla mappa',ja:'地図でホテル',ko:'지도에서 호텔',pt:'Hotéis no mapa',ru:'Отели на карте',tr:'Haritada oteller',zh:'地图上的酒店'},
 tg:{fa:'تورها و فعالیت‌ها',en:'Tours & activities',ar:'الجولات والأنشطة',az:'Turlar və fəaliyyətlər',de:'Touren & Aktivitäten',es:'Tours y actividades',fr:'Visites et activités',hi:'टूर और गतिविधियाँ',it:'Tour e attività',ja:'ツアーとアクティビティ',ko:'투어 및 액티비티',pt:'Passeios e atividades',ru:'Туры и развлечения',tr:'Turlar ve etkinlikler',zh:'旅游团与活动'},
 adv:{fa:'هشدار و راهنمای سفر رسمی',en:'Official travel advice',ar:'نصائح السفر الرسمية',az:'Rəsmi səyahət xəbərdarlığı',de:'Offizielle Reisehinweise',es:'Consejos oficiales de viaje',fr:'Conseils officiels aux voyageurs',hi:'आधिकारिक यात्रा सलाह',it:'Consigli ufficiali di viaggio',ja:'公式の渡航情報',ko:'공식 여행 안내',pt:'Avisos oficiais de viagem',ru:'Официальные рекомендации',tr:'Resmi seyahat uyarıları',zh:'官方旅行提示'},
 vz:{fa:'قوانین ویزا',en:'Visa rules',ar:'قواعد التأشيرة',az:'Viza qaydaları',de:'Visa-Regeln',es:'Normas de visado',fr:'Règles de visa',hi:'वीज़ा नियम',it:'Regole sul visto',ja:'ビザ規則',ko:'비자 규정',pt:'Regras de visto',ru:'Визовые правила',tr:'Vize kuralları',zh:'签证规定'},
 nt:{fa:'اطلاعات از ویکی‌سفر و ویکی‌پدیا گرفته و ترجمه می‌شود؛ پیش از سفر با منابع رسمی تطبیق دهید.',en:'From Wikivoyage & Wikipedia, machine-translated; verify with official sources before travelling.',ar:'من ويكي سفر وويكيبيديا بترجمة آلية؛ تحقق من المصادر الرسمية قبل السفر.',az:'Wikivoyage və Vikipediyadan, maşın tərcüməsi; səyahətdən əvvəl rəsmi mənbələrlə yoxlayın.',de:'Aus Wikivoyage & Wikipedia, maschinell übersetzt; vor der Reise offiziell prüfen.',es:'De Wikivoyage y Wikipedia, traducción automática; verifica con fuentes oficiales.',fr:'Issu de Wikivoyage et Wikipédia, traduction automatique ; vérifiez auprès de sources officielles.',hi:'विकीवॉयेज और विकिपीडिया से, मशीन अनुवाद; यात्रा से पहले आधिकारिक स्रोतों से जाँचें।',it:'Da Wikivoyage e Wikipedia, traduzione automatica; verifica con fonti ufficiali.',ja:'WikivoyageとWikipediaより（機械翻訳）。渡航前に公式情報をご確認ください。',ko:'위키하우·위키백과 기반 기계 번역입니다. 여행 전 공식 정보를 확인하세요.',pt:'Do Wikivoyage e Wikipédia, tradução automática; confirme em fontes oficiais.',ru:'Из Wikivoyage и Википедии, машинный перевод; проверьте по официальным источникам.',tr:'Wikivoyage ve Vikipedi’den, makine çevirisi; seyahat öncesi resmi kaynaklardan doğrulayın.',zh:'来自维基导游与维基百科（机器翻译）；出行前请以官方信息为准。'},
 gn2:{fa:'اخبار بیشتر',en:'More news',ar:'المزيد من الأخبار',az:'Daha çox xəbər',de:'Mehr Nachrichten',es:'Más noticias',fr:'Plus d’actualités',hi:'और खबरें',it:'Altre notizie',ja:'その他のニュース',ko:'더 많은 뉴스',pt:'Mais notícias',ru:'Больше новостей',tr:'Daha fazla haber',zh:'更多新闻'},
 ct:{fa:'شهرهای مهم',en:'Key cities',ar:'المدن الرئيسية',az:'Əsas şəhərlər',de:'Wichtige Städte',es:'Ciudades clave',fr:'Villes principales',hi:'प्रमुख शहर',it:'Città principali',ja:'主要都市',ko:'주요 도시',pt:'Cidades principais',ru:'Главные города',tr:'Önemli şehirler',zh:'主要城市'},
 tl:{fa:'ترجمه برای این بخش در دسترس نبود؛ متن اصلی (انگلیسی) نشان داده شد.',en:'Translation unavailable; showing original English.',ar:'الترجمة غير متاحة؛ يُعرض النص الإنجليزي الأصلي.',az:'Tərcümə mümkün olmadı; ingilis orijinalı göstərilir.',de:'Übersetzung nicht verfügbar; englisches Original.',es:'Traducción no disponible; se muestra el original en inglés.',fr:'Traduction indisponible ; texte anglais d’origine.',hi:'अनुवाद उपलब्ध नहीं; अंग्रेज़ी मूल दिखाया गया।',it:'Traduzione non disponibile; testo originale inglese.',ja:'翻訳できないため英語の原文を表示します。',ko:'번역할 수 없어 영어 원문을 표시합니다.',pt:'Tradução indisponível; mostrando o original em inglês.',ru:'Перевод недоступен; показан английский оригинал.',tr:'Çeviri yok; İngilizce orijinal gösteriliyor.',zh:'无法翻译，显示英文原文。'}};
const tt=k=>{const o=X[k]||{en:k};return o[uil()]||o.en};
const LS=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},SV=(k,o)=>{try{localStorage.setItem(k,JSON.stringify(o))}catch(e){}};
// iso: ISO-3166, w: article title, wp: Wikipedia title if different, gov: gov.uk slug, cur, plug, d: driving side, c: calling code
// e: [police, ambulance, fire, general], l: language codes, ci: key cities (English article titles)
const C={
 GB:{w:'United Kingdom',gov:'',cur:'GBP £',plug:'G · 230V',d:'L',c:'+44',e:['999','999','999','112'],l:['en','cy','gd'],ci:['London','Edinburgh','Manchester']},
 US:{w:'United States of America',wp:'United States',gov:'usa',cur:'USD $',plug:'A/B · 120V',d:'R',c:'+1',e:['911','911','911','911'],l:['en','es'],ci:['New York City','Washington, D.C.','Los Angeles']},
 AU:{w:'Australia',gov:'australia',cur:'AUD $',plug:'I · 230V',d:'L',c:'+61',e:['000','000','000','112'],l:['en'],ci:['Sydney','Melbourne','Brisbane']},
 CA:{w:'Canada',gov:'canada',cur:'CAD $',plug:'A/B · 120V',d:'R',c:'+1',e:['911','911','911','911'],l:['en','fr'],ci:['Toronto','Vancouver','Montreal']},
 IR:{w:'Iran',gov:'iran',cur:'IRR ﷼ (تومان)',plug:'C/F · 220V',d:'R',c:'+98',e:['110','115','125','112'],l:['fa','az','ku','ar'],ci:['Tehran','Isfahan','Shiraz']},
 EG:{w:'Egypt',gov:'egypt',cur:'EGP E£',plug:'C/F · 220V',d:'R',c:'+20',e:['122','123','180','126'],l:['ar','en'],ci:['Cairo','Luxor','Alexandria']},
 SA:{w:'Saudi Arabia',gov:'saudi-arabia',cur:'SAR ﷼',plug:'G/A/B · 230V',d:'R',c:'+966',e:['999','997','998','911'],l:['ar','en'],ci:['Riyadh','Jeddah','Mecca']},
 AE:{w:'United Arab Emirates',gov:'united-arab-emirates',cur:'AED د.إ',plug:'G · 230V',d:'R',c:'+971',e:['999','998','997','112'],l:['ar','en','hi','fa'],ci:['Dubai','Abu Dhabi','Sharjah']},
 MA:{w:'Morocco',gov:'morocco',cur:'MAD د.م.',plug:'C/E · 220V',d:'R',c:'+212',e:['190','15','15','112'],l:['ar','fr','en'],ci:['Marrakesh','Casablanca','Fez']},
 AZ:{w:'Azerbaijan',gov:'azerbaijan',cur:'AZN ₼',plug:'C/F · 220V',d:'R',c:'+994',e:['102','103','101','112'],l:['az','ru','en','tr'],ci:['Baku','Ganja','Sheki']},
 DE:{w:'Germany',gov:'germany',cur:'EUR €',plug:'C/F · 230V',d:'R',c:'+49',e:['110','112','112','112'],l:['de','en','tr'],ci:['Berlin','Munich','Hamburg']},
 AT:{w:'Austria',gov:'austria',cur:'EUR €',plug:'C/F · 230V',d:'R',c:'+43',e:['133','144','122','112'],l:['de','en'],ci:['Vienna','Salzburg','Innsbruck']},
 CH:{w:'Switzerland',gov:'switzerland',cur:'CHF Fr.',plug:'J · 230V',d:'R',c:'+41',e:['117','144','118','112'],l:['de','fr','it','en'],ci:['Zürich','Geneva','Lucerne']},
 ES:{w:'Spain',gov:'spain',cur:'EUR €',plug:'C/F · 230V',d:'R',c:'+34',e:['112','112','112','112'],l:['es','ca','en'],ci:['Madrid','Barcelona','Seville']},
 MX:{w:'Mexico',gov:'mexico',cur:'MXN $',plug:'A/B · 127V',d:'R',c:'+52',e:['911','911','911','911'],l:['es','en'],ci:['Mexico City','Cancún','Oaxaca']},
 AR:{w:'Argentina',gov:'argentina',cur:'ARS $',plug:'C/I · 220V',d:'R',c:'+54',e:['101','107','100','911'],l:['es','en'],ci:['Buenos Aires','Mendoza','Bariloche']},
 FR:{w:'France',gov:'france',cur:'EUR €',plug:'C/E · 230V',d:'R',c:'+33',e:['17','15','18','112'],l:['fr','en'],ci:['Paris','Marseille','Lyon']},
 BE:{w:'Belgium',gov:'belgium',cur:'EUR €',plug:'C/E · 230V',d:'R',c:'+32',e:['101','112','112','112'],l:['nl','fr','de','en'],ci:['Brussels','Bruges','Antwerp']},
 IN:{w:'India',gov:'india',cur:'INR ₹',plug:'C/D/M · 230V',d:'L',c:'+91',e:['100','102','101','112'],l:['hi','en','bn','ta'],ci:['Delhi','Mumbai','Jaipur']},
 IT:{w:'Italy',gov:'italy',cur:'EUR €',plug:'C/F/L · 230V',d:'R',c:'+39',e:['113','118','115','112'],l:['it','en'],ci:['Rome','Milan','Florence']},
 JP:{w:'Japan',gov:'japan',cur:'JPY ¥',plug:'A/B · 100V',d:'L',c:'+81',e:['110','119','119','110'],l:['ja','en'],ci:['Tokyo','Kyoto','Osaka']},
 KR:{w:'South Korea',gov:'south-korea',cur:'KRW ₩',plug:'C/F · 220V',d:'R',c:'+82',e:['112','119','119','112'],l:['ko','en'],ci:['Seoul','Busan','Jeju']},
 PT:{w:'Portugal',gov:'portugal',cur:'EUR €',plug:'C/F · 230V',d:'R',c:'+351',e:['112','112','112','112'],l:['pt','en'],ci:['Lisbon','Porto','Faro']},
 BR:{w:'Brazil',gov:'brazil',cur:'BRL R$',plug:'N · 127/220V',d:'R',c:'+55',e:['190','192','193','190'],l:['pt','en','es'],ci:['Rio de Janeiro','São Paulo','Salvador']},
 RU:{w:'Russia',gov:'russia',cur:'RUB ₽',plug:'C/F · 230V',d:'R',c:'+7',e:['102','103','101','112'],l:['ru','en','tt'],ci:['Moscow','Saint Petersburg','Sochi']},
 TR:{w:'Turkey',gov:'turkey',cur:'TRY ₺',plug:'C/F · 230V',d:'R',c:'+90',e:['155','112','110','112'],l:['tr','en','ku','ar'],ci:['Istanbul','Ankara','Antalya']},
 CN:{w:'China',gov:'china',cur:'CNY ¥',plug:'A/C/I · 220V',d:'R',c:'+86',e:['110','120','119','110'],l:['zh','en','bo','ug'],ci:['Beijing','Shanghai','Chengdu']},
 TW:{w:'Taiwan',gov:'taiwan',cur:'TWD NT$',plug:'A/B · 110V',d:'R',c:'+886',e:['110','119','119','112'],l:['zh','en','nan'],ci:['Taipei','Kaohsiung','Tainan']}};
const BYL={en:['GB','US','AU','CA'],fa:['IR'],ar:['EG','SA','AE','MA'],az:['AZ'],de:['DE','AT','CH'],es:['ES','MX','AR'],fr:['FR','BE'],hi:['IN'],it:['IT'],ja:['JP'],ko:['KR'],pt:['PT','BR'],ru:['RU'],tr:['TR'],zh:['CN','TW']};
const list=()=>BYL[ST.tgt]||BYL.en;
const cur=()=>{const s=LS('rm2trvc')||{},l=list(),c=s[ST.tgt];return l.includes(c)?c:l[0]};
const dn=(type,code)=>{try{return new Intl.DisplayNames([uil()],{type}).of(code)||code}catch(e){return code}};
const enc=encodeURIComponent,net=u=>K.get('net').fetch(u);
// ---- sources
const HEAD={
 hist:['History'],geo:['Geography','Geography and climate','Climate'],pol:['Politics','Government and politics','Politics and government','Government'],
 cult:['Culture','Society','Demographics'],tour:['See','Do'],entry:['Get in'],rules:['Respect','Stay safe','Stay healthy'],fun:['Eat','Drink','Buy'],talk:['Talk'],sleep:['Sleep'],und:['Understand']};
const WP=new Set(['hist','geo','pol','cult']);
const MEM={};
function parse(txt,wants){
  const out={},parts=txt.split(/^==\s*([^=].*?)\s*==\s*$/m);out.__intro=(parts[0]||'').trim();
  for(let i=1;i<parts.length;i+=2){const h=parts[i].trim(),b=(parts[i+1]||'').replace(/^===+\s*(.+?)\s*===+\s*$/gm,'\n$1:').replace(/\n{3,}/g,'\n\n').trim();
    if(wants.some(w=>w.toLowerCase()===h.toLowerCase())&&b)out[h]=b.slice(0,3200)}
  return out}
async function article(site,title,wants){
  const key=site+':'+title,now=Date.now();
  if(MEM[key])return MEM[key];
  const ca=LS('rm2trv')||{},o=ca[key];if(o&&now-o.t<7*864e5){MEM[key]=o.s;return o.s}
  const j=await (await net('https://en.'+site+'.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=wiki&redirects=1&format=json&origin=*&titles='+enc(title))).json();
  const pg=Object.values((j.query||{}).pages||{})[0];if(!pg||!pg.extract)throw 0;
  const s=parse(pg.extract,Object.values(HEAD).flat());s.__intro=(s.__intro||'').slice(0,1800);MEM[key]=s;
  try{const c2=LS('rm2trv')||{};c2[key]={t:now,s};const ks=Object.keys(c2);if(ks.length>24)delete c2[ks[0]];SV('rm2trv',c2)}catch(e){}
  return s}
const pick=(s,names,max)=>{const a=[];for(const n of names){const k=Object.keys(s).find(x=>x.toLowerCase()===n.toLowerCase());if(k)a.push((names.length>1?n+':\n':'')+s[k])}
  let t=a.join('\n\n').trim();if(t.length>max){t=t.slice(0,max);t=t.slice(0,Math.max(t.lastIndexOf('\n'),t.lastIndexOf('. ')+1,max*.7))+' …'}return t}
async function tr(text,to){
  if(!text||to==='en')return{t:text,ok:true};
  const tl=to==='zh'?'zh-CN':to,ch=[];let buf='';
  text.split('\n').forEach(l=>{if((buf+'\n'+l).length>1300&&buf){ch.push(buf);buf=l}else buf=buf?buf+'\n'+l:l});if(buf)ch.push(buf);
  const o=[];
  for(const c of ch){try{const j=await (await net('https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl='+tl+'&q='+enc(c))).json();const r=(j[0]||[]).map(x=>x[0]).join('');if(!r)throw 0;o.push(r)}catch(e){return{t:text,ok:false}}}
  return{t:o.join('\n'),ok:true}}
const fmt=t=>esc(t).split(/\n{1,}/).map(l=>l.trim()).filter(Boolean).map(l=>/:$/.test(l)&&l.length<70?`<h4>${l}</h4>`:`<p>${l}</p>`).join('');
const link=(u,txt)=>`<a class="trl" href="${u}" target="_blank" rel="noopener">${txt}</a>`;
// ---- sections
const SEC=[['ov','🧭'],['news','📰'],['hist','🏛️'],['geo','🗺️'],['pol','⚖️'],['cult','🎎'],['tour','📸'],['entry','🛂'],['rules','🚫'],['lang','🗣️'],['fun','🍜'],['stay','🏨'],['emg','🆘']];
async function textSec(k,c,max){
  const d=C[c],site=WP.has(k)?'wikipedia':'wikivoyage',title=site==='wikipedia'?(d.wp||d.w):d.w;
  const s=await article(site,title,HEAD[k]),t=pick(s,HEAD[k],max||2200);if(!t)throw 0;
  const r=await tr(t,uil());
  return fmt(r.t)+(r.ok?'':`<p class="mu sm">${esc(tt('tl'))}</p>`)+`<p class="mu sm">${esc(tt('src'))}: ${link('https://en.'+site+'.org/wiki/'+enc(title.replace(/ /g,'_')),site==='wikipedia'?'Wikipedia':'Wikivoyage')}</p>`}
const emerg=c=>{const d=C[c],E=[['pl','🚓',d.e[0]],['am','🚑',d.e[1]],['fi','🚒',d.e[2]],['gn','🆘',d.e[3]]];
  return `<div class="trem">${E.map(([k,ic,n])=>`<a class="tre" href="tel:${n}"><span>${ic}</span><b>${n}</b><em>${esc(tt(k==='gn'?'gn':k==='pl'?'pl':k==='am'?'am':'fi'))}</em></a>`).join('')}</div>`};
const cityLinks=n=>`<div class="trlk">${link('https://www.booking.com/searchresults.html?ss='+enc(n),'🏨 '+esc(tt('bk')))}${link('https://www.google.com/maps/search/hotels+in+'+enc(n),'📍 '+esc(tt('mp')))}${link('https://www.getyourguide.com/s/?q='+enc(n),'🎟️ '+esc(tt('tg')))}</div>`;
async function stayHtml(c,city){
  const d=C[c];let h=`<div class="trcc">${d.ci.map(n=>`<button class="chip ${n===city?'on':''}" data-city="${esc(n)}">${esc(n)}</button>`).join('')}</div>`+cityLinks(city);
  try{const s=await article('wikivoyage',city,['Sleep','Do','See']);const t=pick(s,['Sleep'],2400)||pick(s,['Do'],1800);
    if(t){const r=await tr(t,uil());h+=fmt(r.t)+(r.ok?'':`<p class="mu sm">${esc(tt('tl'))}</p>`)+`<p class="mu sm">${esc(tt('src'))}: ${link('https://en.wikivoyage.org/wiki/'+enc(city.replace(/ /g,'_')),'Wikivoyage')}</p>`}}catch(e){h+=`<p class="mu sm">${esc(tt('off'))}</p>`}
  return h}
async function newsHtml(c){
  const d=C[c],name=dn('region',c),en=(()=>{try{return new Intl.DisplayNames(['en'],{type:'region'}).of(c)}catch(e){return d.w}})();
  const more=`<div class="trlk">${link('https://news.google.com/search?q='+enc(en)+'&hl='+uil(),'📰 '+esc(tt('gn2')))}${d.gov?link('https://www.gov.uk/foreign-travel-advice/'+d.gov,'⚠️ '+esc(tt('adv'))):link('https://www.gov.uk/foreign-travel-advice','⚠️ '+esc(tt('adv')))}</div>`;
  try{const j=await (await net('https://api.gdeltproject.org/api/v2/doc/doc?mode=artlist&format=json&maxrecords=12&sort=datedesc&timespan=3d&query='+enc('"'+en+'" sourcelang:english'))).json();
    const a=(j.articles||[]).filter((x,i,r)=>r.findIndex(y=>y.title===x.title)===i).slice(0,10);if(!a.length)throw 0;
    const r=await tr(a.map(x=>x.title.replace(/\n/g,' ')).join('\n'),uil()),T=r.t.split('\n');
    return `<div class="trnw">${a.map((x,i)=>`<a href="${esc(x.url)}" target="_blank" rel="noopener"><b>${esc((T.length===a.length?T[i]:x.title)||x.title)}</b><em>${esc(x.domain||'')} · ${esc((x.seendate||'').slice(0,8).replace(/(\d{4})(\d\d)(\d\d)/,'$1-$2-$3'))}</em></a>`).join('')}</div>`+more}
  catch(e){return `<p class="mu">${esc(tt('off'))}</p>`+more}}
async function ovHtml(c){
  const d=C[c],name=dn('region',c);let cap='';
  try{const s=await article('wikipedia',d.wp||d.w,['History']);cap=s.__intro||''}catch(e){}
  const facts=[['cur',d.cur],['call',d.c],['plug',d.plug],['drv',tt(d.d==='L'?'lt':'rt')],['lgs',d.l.map(x=>dn('language',x)).join('، ')]];
  let h=`<div class="trfa">${facts.map(([k,x])=>`<div><em>${esc(tt(k))}</em><b>${esc(x)}</b></div>`).join('')}</div>`;
  if(cap){const r=await tr(cap,uil());h+=fmt(r.t)}
  h+=`<div class="trlk">${link('https://en.wikipedia.org/w/index.php?search='+enc('Visa policy of '+(d.wp||d.w)),'🛂 '+esc(tt('vz')))}</div>`;return h}
function langHtml(c){const d=C[c];return `<div class="trlg">${d.l.map((x,i)=>`<span class="chip ${i?'':'on'}">${esc(dn('language',x))}</span>`).join('')}</div>`}
async function body(k,c){
  if(k==='ov')return ovHtml(c);if(k==='news')return newsHtml(c);if(k==='emg')return emerg(c);
  if(k==='stay')return stayHtml(c,C[c].ci[0]);
  if(k==='lang'){let h=langHtml(c);try{h+=await textSec('talk',c,1800)}catch(e){}return h}
  if(k==='entry'){let h='';try{h=await textSec('entry',c,2600)}catch(e){h=`<p class="mu">${esc(tt('off'))}</p>`}
    return h+`<div class="trlk">${link('https://en.wikipedia.org/w/index.php?search='+enc('Visa policy of '+(C[c].wp||C[c].w)),'🛂 '+esc(tt('vz')))}${link('https://www.google.com/search?q='+enc(dn('region',c)+' embassy'),'🏛️ Embassy')}</div>`}
  try{return await textSec(k,c,k==='rules'?3000:2200)}catch(e){return `<p class="mu">${esc(tt('off'))}</p>`+`<div class="trlk">${link('https://en.wikivoyage.org/wiki/'+enc((C[c].w).replace(/ /g,'_')),'Wikivoyage')}</div>`}}
const DONE={};
function open(){
  const c=cur(),box=v();
  box.innerHTML=`<div class="hd"><button class="back" id="bk" aria-label="back">←</button><h2>🧳 ${esc(tt('t'))}</h2></div>
  <div class="card trtop"><label class="mu sm">${esc(tt('cty'))}</label><select id="trc">${list().map(x=>`<option value="${x}" ${x===c?'selected':''}>${esc(dn('region',x))}</option>`).join('')}</select><p class="mu sm" style="margin:8px 0 0">${esc(tt('nt'))}</p></div>
  <div class="trac">${SEC.map(([k,ic])=>`<div class="tra" data-k="${k}"><button class="trh"><i>${ic}</i><b>${esc(tt(k==='ov'?'ov':k))}</b><span class="chev">▾</span></button><div class="trb"></div></div>`).join('')}</div>`;
  const q=s=>box.querySelector(s);q('#bk').onclick=R.home;
  q('#trc').onchange=e=>{const s=LS('rm2trvc')||{};s[ST.tgt]=e.target.value;SV('rm2trvc',s);open()};
  box.querySelector('.trac').onclick=async e=>{
    const ct=e.target.closest('[data-city]');
    if(ct){const a=ct.closest('.tra'),b=a.querySelector('.trb');b.innerHTML=`<p class="mu">${esc(tt('tr'))}</p>`;b.innerHTML=await stayHtml(c,ct.dataset.city);return}
    const h=e.target.closest('.trh');if(!h)return;const a=h.parentNode,b=a.querySelector('.trb'),k=a.dataset.k,on=!a.classList.contains('open');
    box.querySelectorAll('.tra.open').forEach(x=>{if(x!==a){x.classList.remove('open')}});a.classList.toggle('open',on);
    if(on&&!b.dataset.d){b.dataset.d=1;b.innerHTML=`<p class="mu">${esc(tt('tr'))}</p>`;try{b.innerHTML=await body(k,c)}catch(er){b.innerHTML=`<p class="mu">${esc(tt('off'))}</p>`;b.dataset.d=''}}
    if(on)setTimeout(()=>a.scrollIntoView({block:'nearest',behavior:'smooth'}),60)}}
R.travelOpen=open;
R.tiles.push({icon:'🧳',label:()=>tt('t'),open});
const css=document.createElement('style');css.textContent=`
.trtop select{width:100%;margin-top:4px}
.trac{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.tra{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.trh{display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;color:var(--ink);text-align:start}
.trh i{font-style:normal;font-size:22px;width:38px;height:38px;display:grid;place-items:center;border-radius:12px;background:linear-gradient(135deg,var(--ac),var(--ac2,var(--ac)))}
.trh b{flex:1;font-size:15px}.tra.open .chev{transform:rotate(180deg)}.chev{transition:transform .2s}
.trb{display:none;padding:2px 14px 14px;font-size:14px;line-height:1.75}.tra.open .trb{display:block}
.trb h4{margin:10px 0 2px;font-size:14px;color:var(--ac)}.trb p{margin:6px 0}
.trlk{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
.trl{display:inline-block;padding:8px 12px;border-radius:12px;background:color-mix(in srgb,var(--ac) 14%,var(--card));border:1px solid var(--line);color:var(--ink);font-size:13px;font-weight:600;text-decoration:none}
.trem{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.tre{display:flex;flex-direction:column;align-items:center;gap:2px;padding:14px 8px;border-radius:16px;background:color-mix(in srgb,#ef4444 12%,var(--card));border:1px solid var(--line);color:var(--ink);text-decoration:none}
.tre span{font-size:26px}.tre b{font-size:26px;letter-spacing:1px}.tre em{font-style:normal;font-size:12px;color:var(--mu)}
.trfa{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}.trfa div{background:color-mix(in srgb,var(--ac) 8%,var(--card));border:1px solid var(--line);border-radius:12px;padding:8px 10px}
.trfa em{display:block;font-style:normal;font-size:11px;color:var(--mu)}.trfa b{font-size:13px}
.trnw{display:flex;flex-direction:column;gap:8px}.trnw a{display:block;padding:10px 12px;border-radius:12px;border:1px solid var(--line);color:var(--ink);text-decoration:none;background:var(--card)}
.trnw b{display:block;font-size:14px;line-height:1.5}.trnw em{font-style:normal;font-size:11px;color:var(--mu)}
.trcc,.trlg{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
`;document.head.appendChild(css);
})();
