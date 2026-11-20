/* feature: Companion — an on-screen 3D pet that lives on top of the app. Physics (domain/pal-physics), personality (domain/pal-brain),
   3D rig (lazy pals.js from the content package). Drag/throw it, tap it (it speaks a word you learn), feed it, play ball. */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{esc,ST}=R,PH=K.get('palphysics'),BR=K.get('palbrain'),content=K.get('content'),st=K.get('storage');
const X={"pl_t": {"fa": "همراه روی صفحه", "en": "Companion", "ar": "الرفيق على الشاشة", "az": "Ekran yoldaşı", "de": "Begleiter", "es": "Compañero", "fr": "Compagnon", "hi": "साथी", "it": "Compagno", "ja": "相棒", "ko": "동반자", "pt": "Companheiro", "ru": "Компаньон", "tr": "Yoldaş", "zh": "屏幕伙伴"}, "pl_tip": {"fa": "مرا بکش، پرتاب کن یا لمس کن!", "en": "Drag me, throw me, tap me!", "ar": "اسحبني، ارمني، المسني!", "az": "Məni sürüklə, at, toxun!", "de": "Zieh mich, wirf mich, tipp mich an!", "es": "¡Arrástrame, lánzame, tócame!", "fr": "Traîne-moi, lance-moi, touche-moi !", "hi": "मुझे खींचो, उछालो, छुओ!", "it": "Trascinami, lanciami, toccami!", "ja": "ドラッグして、投げて、タップして！", "ko": "끌어보고, 던지고, 눌러봐!", "pt": "Arraste, jogue, toque em mim!", "ru": "Тяни, бросай, тапай!", "tr": "Sürükle, fırlat, dokun!", "zh": "拖我、扔我、点我！"}, "pl_show": {"fa": "نمایش همراه", "en": "Show companion", "ar": "إظهار الرفيق", "az": "Yoldaşı göstər", "de": "Begleiter anzeigen", "es": "Mostrar compañero", "fr": "Afficher le compagnon", "hi": "साथी दिखाएँ", "it": "Mostra compagno", "ja": "相棒を表示", "ko": "동반자 표시", "pt": "Mostrar companheiro", "ru": "Показать компаньона", "tr": "Yoldaşı göster", "zh": "显示伙伴"}, "pl_char": {"fa": "کاراکتر", "en": "Character", "ar": "الشخصية", "az": "Personaj", "de": "Figur", "es": "Personaje", "fr": "Personnage", "hi": "किरदार", "it": "Personaggio", "ja": "キャラ", "ko": "캐릭터", "pt": "Personagem", "ru": "Персонаж", "tr": "Karakter", "zh": "角色"}, "pl_size": {"fa": "اندازه", "en": "Size", "ar": "الحجم", "az": "Ölçü", "de": "Größe", "es": "Tamaño", "fr": "Taille", "hi": "आकार", "it": "Dimensione", "ja": "サイズ", "ko": "크기", "pt": "Tamanho", "ru": "Размер", "tr": "Boyut", "zh": "大小"}, "pl_play": {"fa": "بازی با توپ", "en": "Play ball", "ar": "العب بالكرة", "az": "Top oyna", "de": "Ball spielen", "es": "Jugar", "fr": "Jouer", "hi": "खेलें", "it": "Gioca", "ja": "遊ぶ", "ko": "놀기", "pt": "Brincar", "ru": "Играть", "tr": "Oyna", "zh": "玩耍"}, "pl_feed": {"fa": "غذا بده", "en": "Feed", "ar": "أطعم", "az": "Yemlə", "de": "Füttern", "es": "Alimentar", "fr": "Nourrir", "hi": "खिलाएँ", "it": "Dai da mangiare", "ja": "ごはん", "ko": "먹이", "pt": "Alimentar", "ru": "Покормить", "tr": "Besle", "zh": "喂食"}, "pl_nap": {"fa": "بخواب", "en": "Nap", "ar": "نم", "az": "Yat", "de": "Schlafen", "es": "Dormir", "fr": "Dormir", "hi": "सो जाओ", "it": "Dormi", "ja": "おやすみ", "ko": "낮잠", "pt": "Dormir", "ru": "Спать", "tr": "Uyu", "zh": "睡觉"}, "pl_call": {"fa": "بیا اینجا", "en": "Come here", "ar": "تعال", "az": "Bura gəl", "de": "Komm her", "es": "Ven aquí", "fr": "Viens ici", "hi": "यहाँ आओ", "it": "Vieni qui", "ja": "おいで", "ko": "이리 와", "pt": "Venha cá", "ru": "Иди сюда", "tr": "Buraya gel", "zh": "过来"}, "pl_tricks": {"fa": "حرکت‌ها", "en": "Tricks", "ar": "حركات", "az": "Fəndlər", "de": "Tricks", "es": "Trucos", "fr": "Tours", "hi": "करतब", "it": "Trucchi", "ja": "トリック", "ko": "재주", "pt": "Truques", "ru": "Трюки", "tr": "Hareketler", "zh": "动作"}, "pl_snd": {"fa": "صدا", "en": "Sound", "ar": "الصوت", "az": "Səs", "de": "Ton", "es": "Sonido", "fr": "Son", "hi": "ध्वनि", "it": "Suono", "ja": "サウンド", "ko": "소리", "pt": "Som", "ru": "Звук", "tr": "Ses", "zh": "声音"}, "pl_reset": {"fa": "بازگشت به جای اول", "en": "Reset position", "ar": "إعادة الموضع", "az": "Yeri sıfırla", "de": "Position zurücksetzen", "es": "Restablecer posición", "fr": "Réinitialiser la position", "hi": "स्थिति रीसेट", "it": "Reimposta posizione", "ja": "位置をリセット", "ko": "위치 초기화", "pt": "Redefinir posição", "ru": "Сбросить позицию", "tr": "Konumu sıfırla", "zh": "重置位置"}, "pl_no3d": {"fa": "این دستگاه سه‌بعدی را پشتیبانی نمی‌کند", "en": "3D is not supported on this device", "ar": "الثلاثي الأبعاد غير مدعوم", "az": "Bu cihaz 3D dəstəkləmir", "de": "3D wird nicht unterstützt", "es": "3D no compatible", "fr": "3D non pris en charge", "hi": "3D समर्थित नहीं", "it": "3D non supportato", "ja": "3D非対応", "ko": "3D 미지원", "pt": "3D não suportado", "ru": "3D не поддерживается", "tr": "3B desteklenmiyor", "zh": "不支持3D"}};
const tt=k=>{const o=X[k];return o?(o[ST.src||'en']||o.en):R.T(k)};
const CK='rm2pal',EMO={leo:'🦁',mimi:'🐱',bani:'🐰',pingo:'🐧',foxy:'🦊',chao:'🐻',poofy:'🧸',luki:'👻',kiko:'🐵',dooni:'🫏',jooji:'🐥',dragi:'🐲',rexi:'🦖',tuli:'🐢',pupi:'🐶',lami:'🦙',koaly:'🐨',gigi:'🦒',slowy:'🦥',oinky:'🐷',gogo:'🦍',peli:'🦢',lady:'🐞',sara:'👩‍⚕️',nilu:'👩‍🏫',roya:'👩‍🚀',mina:'👩‍🎨',yasi:'👩‍🎤',omid:'👨‍🍳',babak:'👷',kian:'👨‍✈️',arash:'👨‍🔬',sami:'🎮',dodo:'🦤',clowny:'🐠',goldy:'🐟',dolfi:'🐬',shrimpy:'🦐',seaby:'🦈',krabi:'🦀',hippi:'🦛',bugo:'🪲',hoppy:'🦗',pouya:'🧑‍⚕️',farid:'👨‍🏫',ario:'🧑‍🎓',dana:'👩‍🎓',shiva:'👩‍⚖️',sina:'👷‍♂️',niki:'👩‍💻',mahsa:'🧑‍⚕️',hana:'🌸',ryo:'⚡',kaze:'🥷',yuki:'🎀',zorp:'👽',blip:'👁️',octa:'🐙',fuzz:'👹',gobo:'🧌',gloop:'🟣',dem:'😈',drac:'🧛',zomb:'🧟',skel:'💀',jack:'🎃',wolfy:'🐺',merlo:'🧙',morga:'🧙‍♀️',pip:'🪄',ilia:'🔮',baly:'🦋',marin:'🧜‍♀️',rexa:'🦕',blazo:'🦖',orro:'🦖',viola:'🦕',tano:'🦖',minty:'🦕',spiko:'🦖',yelli:'🦖',tweety:'🐤',parro:'🦜',ducky:'🦆',robin:'🐦',owly:'🦉',tuco:'🦜',emper:'🐧',blupe:'🐧',flami:'🦩',beeo:'🐝',monar:'🦋',bluey:'🪲',leafy:'🐛',scarab:'🪲',stagi:'🪲',anty:'🐜',cricky:'🦗',mantis:'🦗',appli:'🍎',oranj:'🍊',lemi:'🍋',nana:'🍌',berry:'🍓',melo:'🍉',grapo:'🍇',peary:'🍐',peachy:'🍑',cherri:'🍒',kiwo:'🥝',pina:'🍍',avoca:'🥑',coco:'🥥',mango:'🥭'};
const KIND={mimi:'cat',pingo:'penguin',bani:'bunny',leo:'lion',foxy:'fox',chao:'bear',poofy:'bear',luki:'ghost',kiko:'monkey',dooni:'donkey',jooji:'chick',dragi:'dragon',rexi:'dino',tuli:'turtle',pupi:'puppy',lami:'llama',koaly:'koala',gigi:'giraffe',slowy:'sloth',oinky:'pig',gogo:'gorilla',peli:'pelican',lady:'ladybug',sara:'human',nilu:'human',roya:'human',mina:'human',yasi:'human',omid:'human',babak:'human',kian:'human',arash:'human',sami:'human',dodo:'dodo',clowny:'clownfish',goldy:'goldfish',dolfi:'dolphin',shrimpy:'shrimp',seaby:'seahorse',krabi:'crab',hippi:'hippo',bugo:'beetle',hoppy:'grasshopper',pouya:'human',farid:'human',ario:'human',dana:'human',shiva:'human',sina:'human',niki:'human',mahsa:'human',hana:'human',ryo:'human',kaze:'human',yuki:'human',zorp:'human',blip:'human',octa:'human',fuzz:'human',gobo:'human',gloop:'human',dem:'human',drac:'human',zomb:'human',skel:'human',jack:'human',wolfy:'human',merlo:'human',morga:'human',pip:'human',ilia:'human',baly:'human',marin:'human',rexa:'dino',blazo:'dino',orro:'dino',viola:'dino',tano:'dino',minty:'dino',spiko:'dino',yelli:'dino',tweety:'chick',parro:'chick',ducky:'chick',robin:'chick',owly:'chick',tuco:'chick',emper:'penguin',blupe:'penguin',flami:'pelican',beeo:'ladybug',monar:'ladybug',bluey:'ladybug',leafy:'ladybug',scarab:'beetle',stagi:'beetle',anty:'beetle',cricky:'grasshopper',mantis:'grasshopper',appli:'ghost',oranj:'ghost',lemi:'ghost',nana:'ghost',berry:'ghost',melo:'ghost',grapo:'ghost',peary:'ghost',peachy:'ghost',cherri:'ghost',kiwo:'ghost',pina:'ghost',avoca:'ghost',coco:'ghost',mango:'ghost'};
const CATS=[['🐶',['mimi','pupi','bani','foxy','poofy'],{fa:'حیوانات خانگی',en:'Pets',ar:'حيوانات أليفة',de:'Haustiere',tr:'Evcil dostlar',es:'Mascotas',fr:'Compagnons',ru:'Питомцы',zh:'宠物',it:'Animali domestici',pt:'Pets',hi:'पालतू',ja:'ペット',ko:'반려동물',az:'Ev heyvanları'}],
['🦁',['leo','hippi','gogo','gigi','koaly','slowy','kiko','chao','tuli'],{fa:'جنگل و وحش',en:'Wild & jungle',ar:'الغابة',de:'Wildnis',tr:'Vahşi doğa',es:'Selva',fr:'Jungle',ru:'Джунгли',zh:'丛林',it:'Giungla',pt:'Selva',hi:'जंगल',ja:'ジャングル',ko:'정글',az:'Cəngəllik'}],
['🐷',['oinky','lami','dooni'],{fa:'مزرعه',en:'Farm',ar:'المزرعة',de:'Bauernhof',tr:'Çiftlik',es:'Granja',fr:'Ferme',ru:'Ферма',zh:'农场',it:'Fattoria',pt:'Fazenda',hi:'खेत',ja:'牧場',ko:'농장',az:'Ferma'}],
['🐧',['pingo','emper','blupe','peli','flami','dodo','jooji','tweety','parro','ducky','robin','owly','tuco'],{"fa": "پرندگان", "en": "Birds", "ar": "طيور", "de": "Vögel", "tr": "Kuşlar", "es": "Aves", "fr": "Oiseaux", "ru": "Птицы", "zh": "鸟类", "it": "Uccelli", "pt": "Aves", "hi": "पक्षी", "ja": "鳥", "ko": "새", "az": "Quşlar"}],
['🐞',['lady','beeo','monar','bluey','leafy','bugo','scarab','stagi','anty','hoppy','cricky','mantis','baly'],{"fa": "حشرات", "en": "Insects", "ar": "حشرات", "de": "Insekten", "tr": "Böcekler", "es": "Insectos", "fr": "Insectes", "ru": "Насекомые", "zh": "昆虫", "it": "Insetti", "pt": "Insetos", "hi": "कीड़े", "ja": "昆虫", "ko": "곤충", "az": "Həşəratlar"}],
['🐠',['marin','dolfi','clowny','goldy','shrimpy','seaby','krabi'],{fa:'دریا و آبزیان',en:'Sea & fish',ar:'البحر والأسماك',de:'Meer & Fische',tr:'Deniz & balık',es:'Mar y peces',fr:'Mer & poissons',ru:'Море и рыбки',zh:'海洋与鱼',it:'Mare e pesci',pt:'Mar e peixes',hi:'समुद्र और मछली',ja:'海の魚',ko:'바다와 물고기',az:'Dəniz və balıq'}],
['🦖',['rexi','rexa','blazo','orro','viola','tano','minty','spiko','yelli'],{"fa": "دایناسورها", "en": "Dinosaurs", "ar": "ديناصورات", "de": "Dinosaurier", "tr": "Dinozorlar", "es": "Dinosaurios", "fr": "Dinosaures", "ru": "Динозавры", "zh": "恐龙", "it": "Dinosauri", "pt": "Dinossauros", "hi": "डायनासोर", "ja": "恐竜", "ko": "공룡", "az": "Dinozavrlar"}],
['🐲',['luki','dragi'],{"fa": "فانتزی", "en": "Fantasy", "ar": "خيال", "de": "Fantasy", "tr": "Fantezi", "es": "Fantasía", "fr": "Fantaisie", "ru": "Фэнтези", "zh": "奇幻", "it": "Fantasy", "pt": "Fantasia", "hi": "फैंटेसी", "ja": "ファンタジー", "ko": "판타지", "az": "Fantaziya"}],
['🍎',['appli','oranj','lemi','nana','berry','melo','grapo','peary','peachy','cherri','kiwo','pina','avoca','coco','mango'],{"fa": "میوه‌ها", "en": "Fruits", "ar": "فواكه", "de": "Früchte", "tr": "Meyveler", "es": "Frutas", "fr": "Fruits", "ru": "Фрукты", "zh": "水果", "it": "Frutti", "pt": "Frutas", "hi": "फल", "ja": "フルーツ", "ko": "과일", "az": "Meyvələr"}],
['👩‍⚕️',['sara','nilu','mahsa','shiva','dana','niki','roya','mina','yasi'],{fa:'دخترها و شغل‌ها',en:'Girls & jobs',ar:'بنات ومهن',de:'Mädchen & Berufe',tr:'Kızlar & meslekler',es:'Chicas y oficios',fr:'Filles & métiers',ru:'Девочки и профессии',zh:'女孩与职业',it:'Ragazze e lavori',pt:'Garotas e profissões',hi:'लड़कियाँ और पेशे',ja:'女の子と仕事',ko:'소녀와 직업',az:'Qızlar və peşələr'}],
['👨‍🍳',['omid','pouya','farid','ario','sina','babak','kian','arash','sami'],{fa:'پسرها و شغل‌ها',en:'Boys & jobs',ar:'أولاد ومهن',de:'Jungs & Berufe',tr:'Erkekler & meslekler',es:'Chicos y oficios',fr:'Garçons & métiers',ru:'Мальчики и профессии',zh:'男孩与职业',it:'Ragazzi e lavori',pt:'Garotos e profissões',hi:'लड़के और पेशे',ja:'男の子と仕事',ko:'소년과 직업',az:'Oğlanlar və peşələr'}],
['🌸',["hana", "ryo", "kaze", "yuki"],{"fa": "انیمه‌ای", "en": "Anime style", "ar": "أنمي", "de": "Anime-Stil", "tr": "Anime", "es": "Estilo anime", "fr": "Style anime", "ru": "Аниме", "zh": "动漫风", "it": "Stile anime", "pt": "Estilo anime", "hi": "एनीमे", "ja": "アニメ風", "ko": "애니풍", "az": "Anime"}],
['👽',["zorp", "blip", "octa"],{"fa": "فضایی‌ها", "en": "Aliens", "ar": "كائنات فضائية", "de": "Aliens", "tr": "Uzaylılar", "es": "Alienígenas", "fr": "Extraterrestres", "ru": "Пришельцы", "zh": "外星人", "it": "Alieni", "pt": "Alienígenas", "hi": "एलियन", "ja": "宇宙人", "ko": "외계인", "az": "Yadplanetlilər"}],
['👹',["fuzz", "gobo", "gloop", "dem"],{"fa": "هیولاها", "en": "Monsters", "ar": "وحوش", "de": "Monster", "tr": "Canavarlar", "es": "Monstruos", "fr": "Monstres", "ru": "Монстры", "zh": "怪物", "it": "Mostri", "pt": "Monstros", "hi": "राक्षस", "ja": "モンスター", "ko": "몬스터", "az": "Canavarlar"}],
['🧛',["drac", "zomb", "skel", "jack", "wolfy"],{"fa": "ترسناک‌ها", "en": "Spooky", "ar": "مخيفون", "de": "Gruselig", "tr": "Korkunçlar", "es": "Terroríficos", "fr": "Effrayants", "ru": "Жуткие", "zh": "恐怖系", "it": "Paurosi", "pt": "Assustadores", "hi": "डरावने", "ja": "ホラー", "ko": "공포", "az": "Qorxulular"}],
['🧙',["merlo", "morga", "pip", "ilia"],{"fa": "جادوگرها", "en": "Wizards & witches", "ar": "سحرة", "de": "Zauberer & Hexen", "tr": "Büyücüler", "es": "Magos y brujas", "fr": "Sorciers & sorcières", "ru": "Маги и ведьмы", "zh": "魔法师", "it": "Maghi e streghe", "pt": "Magos e bruxas", "hi": "जादूगर", "ja": "魔法使い", "ko": "마법사", "az": "Sehrbazlar"}]];
const JOB={pouya:'🩺',farid:'📚',ario:'🎒',dana:'🎓',shiva:'⚖️',sina:'📐',niki:'💻',mahsa:'💉',sara:'🩺',nilu:'📚',roya:'🚀',mina:'🎨',yasi:'🎤',omid:'🍳',babak:'🔨',kian:'✈️',arash:'🔬',sami:'🎮',hana:'⭐',ryo:'⚔️',kaze:'🌀',yuki:'📓',zorp:'🛸',blip:'👁️',octa:'🪐',fuzz:'🍪',gobo:'💰',gloop:'🫧',dem:'🔱',drac:'🦇',zomb:'🧠',skel:'🦴',jack:'🕯️',wolfy:'🌕',merlo:'✨',morga:'🧪',pip:'🪄',ilia:'❄️',baly:'🌼',marin:'🔱'};
const catName=o=>o[((window.RM2&&RM2.uil&&RM2.uil())||ST.uil||ST.src||'en')]||o.en;
const TOY={cat:'🧶',penguin:'🏐',bunny:'🥕',lion:'🎾',fox:'🎾',bear:'🎾',ghost:'🔮',monkey:'🍌',donkey:'🥕',chick:'🌾',dragon:'🔥',dino:'🍖',turtle:'🥬',puppy:'🦴',llama:'🌿',koala:'🍃',giraffe:'🍃',sloth:'🍃',pig:'🍎',gorilla:'🍌',pelican:'🐟',ladybug:'🍃',human:'⚽',dodo:'🍉',clownfish:'🫧',goldfish:'🫧',dolphin:'🏐',shrimp:'🫧',seahorse:'🫧',crab:'🐚',hippo:'🍉',beetle:'🍃',grasshopper:'🌿'},FOOD={cat:'🐟',penguin:'🐟',bunny:'🥕',lion:'🍖',fox:'🍗',bear:'🍯',ghost:'⭐',monkey:'🍌',donkey:'🥕',chick:'🌾',dragon:'🍖',dino:'🌿',turtle:'🥬',puppy:'🦴',llama:'🌾',koala:'🍃',giraffe:'🌿',sloth:'🍃',pig:'🍎',gorilla:'🍌',pelican:'🐟',ladybug:'🍃',human:'🍕',dodo:'🍉',clownfish:'🦐',goldfish:'🍞',dolphin:'🐟',shrimp:'🍞',seahorse:'🦐',crab:'🍤',hippo:'🍉',beetle:'🍯',grasshopper:'🌿'};
const EATC={cat:'eat',penguin:'fishgulp',bunny:'nibble',lion:'eat',fox:'eat',bear:'eat',ghost:'wobble',monkey:'eat',donkey:'nibble',chick:'peck',dragon:'eat',dino:'eat',turtle:'nibble',puppy:'eat',llama:'nibble',koala:'nibble',giraffe:'nibble',sloth:'nibble',pig:'eat',gorilla:'eat',pelican:'fishgulp',ladybug:'nibble',human:'eat',dodo:'peck',clownfish:'wobble',goldfish:'wobble',dolphin:'nibble',shrimp:'nibble',seahorse:'nibble',crab:'nibble',hippo:'nibble',beetle:'nibble',grasshopper:'nibble'},KICK={cat:'swat',penguin:'flap',bunny:'binky',lion:'swat',fox:'dive',bear:'cheer',ghost:'spin',monkey:'cheer',donkey:'binky',chick:'flap',dragon:'dive',dino:'stomp',turtle:'cheer',puppy:'binky',llama:'binky',koala:'cheer',giraffe:'cheer',sloth:'cheer',pig:'bounce',gorilla:'chestbeat',pelican:'flap',ladybug:'twirl',human:'bounce',dodo:'flap',clownfish:'splash',goldfish:'splash',dolphin:'dolphinjump',shrimp:'flick',seahorse:'bob',crab:'pinch',hippo:'hippoyawn',beetle:'charge',grasshopper:'leap'};
const cfg=()=>{const j=st.json(CK,{});if(j.v!==2)delete j.size;return Object.assign({on:true,id:'mimi',size:Math.round(Math.max(110,Math.min(150,innerWidth*.34))),snd:true,mv:true,x:null},j,{v:2})};
const putCfg=c=>st.setJson(CK,c);
let snoozeUntil=0,wired=0,sulking=0,sulkDone=false,C=cfg(),pal=null,starting=null,fail=false,host,shadow,bub,fxl,body,brain,world={floor:600,left:0,right:400,platforms:[]},plats=[],ids=new WeakMap(),idn=0,platT=0,intent=null,toys=[],last=0,lastPtr=0,tapN=[],sleeping=false,bubT=0,zT=0,lastAns=0,dragging=null,fxT=0;
const PAD=1.3,FEET=.5+(.83-.5)/PAD;
const rng=Math.random;
function loadScript(){
  if(window.PALS)return Promise.resolve(true);
  if(starting)return starting;
  return starting=(async()=>{try{const code=await content.text('pals.js');const s=document.createElement('script');s.textContent=code;document.head.appendChild(s);return !!window.PALS}catch(e){return false}})();
}
/* ---------- DOM ---------- */
function mk(){
  host=document.createElement('div');host.id='pal';setTimeout(()=>R.palTint&&R.palTint(),0);host.style.cssText='position:fixed;left:0;top:0;pointer-events:none;z-index:40;will-change:transform';
  shadow=document.createElement('div');shadow.style.cssText='position:fixed;left:0;top:0;pointer-events:none;z-index:39;border-radius:50%;background:rgba(40,30,70,.28);filter:blur(2px)';
  bub=document.createElement('div');bub.style.cssText='position:fixed;left:0;top:0;pointer-events:none;z-index:41;background:#fff;color:#222;border:2px solid #2a1d47;border-radius:14px;padding:6px 10px;font:600 14px/1.25 system-ui,sans-serif;max-width:220px;opacity:0;transition:opacity .2s;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,.18)';
  fxl=document.createElement('div');fxl.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:42;overflow:hidden';
  document.body.append(shadow,host,bub,fxl);
}
function size(){return C.size}
function newPal(){
  if(pal){pal.destroy();pal=null}host.innerHTML='';host.style.width=host.style.height=size()*PAD+'px';
  pal=PALS.create(host,C.id,size());pal.sfxOn=C.snd;PALS.sound(C.snd);pal.host.fx=(n)=>fx(n);
  brain=BR.make(KIND[C.id]||'cat',rng);body.gs=(PALS.kinds[C.id]||{}).grav||1;
}
function fx(name,o){
  const x=body.x,y=body.y-size()*.62,E=(txt,dx,dy,dur,sz)=>{const e=document.createElement('div');e.textContent=txt;e.style.cssText=`position:absolute;left:${x+(dx||0)}px;top:${y}px;font-size:${sz||22}px;will-change:transform,opacity`;fxl.appendChild(e);e.animate([{transform:'translate(0,0) scale(.6)',opacity:0},{opacity:1,offset:.2},{transform:`translate(${dy?(rng()-.5)*30:0}px,${dy||-70}px) scale(1.1)`,opacity:0}],{duration:dur||1400,easing:'ease-out'}).onfinish=()=>e.remove()};
  if(name==='heart'){for(let i=0;i<4;i++)setTimeout(()=>E('💖',(rng()-.5)*60,-80-rng()*30,1500),i*220)}
  else if(name==='zzz')E('💤',size()*.18,-60,1800,24);
  else if(name==='carrot')E('🥕',size()*.12,-20,2200,26);
  else if(name==='spark'){for(let i=0;i<5;i++)setTimeout(()=>E('✨',(rng()-.5)*size()*.6,-60-rng()*40,1000),i*90)}
  else if(name==='note'){E('🎵',(rng()-.5)*size()*.5,-70,1400)}
  else if(name==='sweat')E('💧',size()*.2,-30,900,18);
  else if(name==='anger')E('💢',size()*.15,-50,1000,26);
  else if(name==='fire'){for(let i=0;i<5;i++)setTimeout(()=>E('🔥',size()*(.25+i*.1)*(body.dir||1),-10-i*6,700,24+i*3),i*90)}
  else if(name==='kiss'){E('💋',size()*.2*(body.dir||1),-30,1300,26)}
  else if(name==='drops'){for(let i=0;i<4;i++)setTimeout(()=>E('💦',(rng()-.5)*size()*.4,-40-rng()*20,800,16),i*70)}
  else if(name==='swirl')E('💫',0,-50,1400,26);
  else if(name==='achoo'){E('💨',size()*.25*(body.dir||1),-10,900,26);E('🤧',0,-60,1200,22)}
  else if(name==='clap')E('👏',(rng()-.5)*20,-40,600,22);
  else if(name==='flex')E('💪',size()*.2,-40,1200,26);
  else if(name==='shake'){try{document.body.animate([{transform:'translate(0,0)'},{transform:'translate(-6px,3px)'},{transform:'translate(6px,-3px)'},{transform:'translate(-4px,0)'},{transform:'translate(0,0)'}],{duration:420,iterations:3})}catch(e){}}
  else if(name==='dust'){for(let i=-1;i<=1;i+=2){const e=document.createElement('div');e.style.cssText=`position:absolute;left:${x+i*size()*.14}px;top:${body.y-6}px;width:12px;height:12px;border-radius:50%;background:rgba(120,110,150,.45)`;fxl.appendChild(e);e.animate([{transform:'scale(.4)',opacity:.7},{transform:`translate(${i*26}px,-8px) scale(1.6)`,opacity:0}],{duration:520}).onfinish=()=>e.remove()}}
}
function say(text,ms){bub.textContent=text;bub.style.opacity=1;bubT=performance.now()+(ms||2600)}
/* ---------- world ---------- */
function refreshWorld(now){
  const H=innerHeight,W=innerWidth;let floor=H-4;const nav=document.querySelector('.nav');if(nav){const r=nav.getBoundingClientRect();if(r.height>0)floor=r.top+3}
  world.floor=floor;world.left=0;world.right=W;
  if(now-platT>220){platT=now;const out=[],seen=[];
    document.querySelectorAll('.card,.tile,.btn,.chip,.lc,.hd,.sn,.opt,.row').forEach(el=>{const r=el.getBoundingClientRect();if(r.width<84||r.height<22||r.top<size()*.8||r.top>floor-size()*.3||r.left>W-30||r.right<30)return;if(el.closest('#pal'))return;
      if(seen.some(s=>Math.abs(s.y-r.top)<8&&r.left<s.x+s.w-20&&r.right>s.x+20))return;let id=ids.get(el);if(!id)ids.set(el,id=++idn);const p={id:'e'+id,x:r.left,y:r.top,w:r.width,el};seen.push(p);out.push(p)});
    plats=out.slice(0,40);world.platforms=plats}
  if(body.plat&&body.plat!=='floor'){const p=plats.find(q=>q.id===body.plat);if(p&&p.el.isConnected){const r=p.el.getBoundingClientRect();p.x=r.left;p.y=r.top;p.w=r.width;if(body.onGround)body.y=r.top}}
}
/* ---------- intents ---------- */
const speedOf=()=>110*((PALS.kinds[C.id]||{}).speed||1)*size()/200,kindOf=()=>KIND[C.id]||'cat';
function endIntent(){intent=null;if(pal&&!pal.clip&&0)pal.stop()}
function startIntent(a,d){
  const now=performance.now()/1000,dirRand=()=>rng()<.5?-1:1;let I={a,until:now+d,t0:now};
  const free=Math.min(1,Math.max(0,(world.right-world.left-size()*.8)));
  const clipOf={sit:'sit',groom:'groom',nap:'sleep',loaf:'loaf',wiggle:'wiggle',tailchase:'tailchase',stretch:'stretch',yawn:'yawn',arch:'arch',purr:'purr',wave:'wave',flap:'flap',shiver:'shiver',fish:'fishgulp',bow:'bow',dance:'dance',thump:'thump',nibble:'nibble',binky:'binky',roar:'roar',manes:'manes',dive:'dive',hug:'hug',eat:'eat',wobble:'wobble',spin:'spin',think:'think'}[a]||(PALS.clips&&PALS.clips.includes(a)?a:null);
  if(a==='walk'){I.dir=body.x<size()*.6?1:body.x>world.right-size()*.6?-1:dirRand();I.sp=speedOf()}
  else if(a==='fly'){body.fly=true;body.onGround=false;body.plat=null;body.gs=0;body.vy=-520*size()/200;I.wp=null;I.loop=null;I.nextLoop=now+2.2+rng()*2;I.until=now+d;I.land=false;I.fl=now;pal.stretchJump();PALS.sfx('whoosh')}
  else if(a==='zoom'){I.dir=dirRand();I.sp=speedOf()*3.2;pal.setFace('happy')}
  else if(a==='hop'){I.dir=body.x<size()*.6?1:body.x>world.right-size()*.6?-1:dirRand();I.next=0}
  else if(a==='slide'){I.dir=body.x<world.right*.5?1:-1;I.phase=0;I.d=3.6;I.until=now+3.6}
  else if(a==='jump'){const tg=PH.pickTarget(body,plats,rng,size()*1.9,760);if(!tg)return startIntent('walk',3);I.tg=tg;I.phase=0;I.until=now+3}
  else if(clipOf){pal.play(clipOf);if(clipOf==='sleep'||clipOf==='loaf'){sleeping=true}
    if(a==='fish'){setTimeout(()=>{if(pal)fx('spark')},900)}
    if(a==='wiggle'){I.chain='pounce';I.until=now+1.15}
    if(a==='dance'){I.note=0}
    if(a==='roar'){fx('shake')}if(a==='arch'){fx('sweat')}}
  intent=I;
}
function think(now){
  if(!pal||dragging||!body.onGround||sulking)return;
  /* toys / food take priority */
  const food=toys.find(t=>t.food&&t.b.onGround),ball=toys.find(t=>!t.food);
  if(food){intent={a:'goto',target:food,until:now+8,t0:now};return}
  if(ball&&rng()<.7){intent={a:'play',target:ball,until:now+8,t0:now};return}
  const idleMs=performance.now()-lastPtr;BR.tick(brain,0,true);
  if(idleMs>90000&&!sulkDone&&body.onGround){sulkDone=true;sulking=1;pal.play('turnback');intent={a:'sulk',until:now+3.4,t0:now};say('😒',2500);return}
  const d=BR.decide(brain,{canJump:plats.length>0,sleepy:idleMs>60000});startIntent(d.a,d.d)
}
function runIntent(dt,now){
  const I=intent;if(!I)return;const sp=speedOf(),accel=dt*7;
  const want=v=>{body.vx+=(v-body.vx)*Math.min(1,accel)};
  switch(I.a){
    case'walk':case'zoom':{const edge=(I.dir>0&&body.x>world.right-size()*.3)||(I.dir<0&&body.x<size()*.3);if(edge)I.dir=-I.dir;if(body.onGround)want(I.dir*I.sp);body.dir=I.dir;break}
    case'fly':{const s=size(),W=world.right,top=s*.7,bot=world.floor-s*.55,spd=300*s/200;
      if(I.loop){const L=I.loop;L.a+=dt*L.w;const th=L.th0+L.a*L.sgn;body.vx=Math.cos(th)*L.sp;body.vy=Math.sin(th)*L.sp;body.bank=L.a*L.sgn*L.dir*-1;body.dir=L.dir;
        if(L.a>=Math.PI*2){I.loop=null;body.bank=0;pal.snapRoll();I.nextLoop=now+2.5+rng()*3;fx('spark')}break}
      if(now>I.until-1.6){I.land=true}
      if(I.land){const tx=Math.max(s*.4,Math.min(W-s*.4,body.x));body.vx+=(0-body.vx)*Math.min(1,dt*2);body.vy=Math.min(260,body.vy+400*dt);if(body.y>=world.floor-6||body.vy>=0&&body.y>world.floor-s*.2){body.fly=false;body.gs=(PALS.kinds[C.id]||{}).grav||1;I.until=0;pal.play('cheer')}else if(now>I.until+4){body.fly=false;body.gs=1;I.until=0}break}
      if(!I.wp||Math.hypot(I.wp.x-body.x,I.wp.y-body.y)<s*.35){I.wp={x:s*.5+rng()*(W-s),y:top+rng()*Math.max(10,bot-top)}}
      const dx=I.wp.x-body.x,dy=I.wp.y-body.y,dl=Math.hypot(dx,dy)||1,k=Math.min(1,dt*2.4);body.vx+=(dx/dl*spd-body.vx)*k;body.vy+=(dy/dl*spd-body.vy)*k;if(Math.abs(body.vx)>30)body.dir=body.vx>0?1:-1;body.bank=0;
      if(now>I.nextLoop&&body.y>top+s*.5&&body.y<bot-s*.1&&body.x>s*.9&&body.x<W-s*.9){const sp=Math.max(280,Math.hypot(body.vx,body.vy))*1.15,dr=body.dir||1;I.loop={a:0,w:Math.PI*2/1.7,sp,th0:Math.atan2(body.vy,body.vx||dr),sgn:dr>0?-1:1,dir:dr};pal.emote('whee',true)}
      if(rng()<.004){fx('fire');pal.emote('growl')}break}
    case'hop':{body.dir=I.dir;if(body.onGround&&now>I.next){body.vy=-560*size()/200*((PALS.kinds[C.id]||{}).jump||1);body.vx=I.dir*190;body.onGround=false;body.plat=null;I.next=now+.18+rng()*.25;pal.stretchJump();if(rng()<.1)pal.play('binky');const edge=(I.dir>0&&body.x>world.right-size()*.35)||(I.dir<0&&body.x<size()*.35);if(edge)I.dir=-I.dir}break}
    case'slide':{body.dir=I.dir;if(I.phase===0){want(I.dir*320);if(now-I.t0>.45){I.phase=1;body.fr=.75;body.vx=I.dir*560;pal.play('slide')}}else{body.dir=body.vx>=0?1:-1;if(Math.abs(body.vx)<35||now-I.t0>3.4){body.fr=9;pal.stop();pal.play('bow');I.until=0;if(rng()<.5)fx('spark')}}break}
    case'jump':{if(I.phase===0&&body.onGround){const j=PH.planJump(body,I.tg.tx,I.tg.p.y,((PALS.kinds[C.id]||{}).jump||1)*1,820);if(!j){I.until=0;break}body.vx=j.vx;body.vy=j.vy;body.onGround=false;body.plat=null;body.dir=j.vx>=0?1:-1;I.phase=1;pal.stretchJump();pal.emote('hup',true)}else if(I.phase===1&&body.onGround){I.phase=2;I.until=now+.3;if(rng()<.5)pal.play(rng()<.5?'cheer':'wave')}break}
    case'goto':{const t=I.target;if(!t||!t.b||!toys.includes(t)){I.until=0;break}const dx=t.b.x-body.x;body.dir=dx>=0?1:-1;if(Math.abs(dx)>size()*.14){if(body.onGround)want(body.dir*sp*2)}else{want(0);if(t.food){toys.splice(toys.indexOf(t),1);t.el.remove();pal.play(EATC[kindOf()]);C.fun=1;fx('heart');say('😋',1500);intent={a:'eat',until:now+2.6,t0:now}}}if(body.onGround&&t.b.y<body.y-size()*.5&&rng()<.02){body.vy=-900;body.onGround=false;body.plat=null}break}
    case'play':{const t=I.target;if(!t||!toys.includes(t)){I.until=0;break}const dx=t.b.x-body.x;body.dir=dx>=0?1:-1;if(Math.abs(dx)>size()*.2){if(body.onGround)want(body.dir*sp*2.4)}else{want(0);if(!pal.isBusy()){pal.play(KICK[kindOf()]);t.b.vx=body.dir*(380+rng()*200);t.b.vy=-520-rng()*260;t.b.onGround=false;t.b.plat=null;PALS.sfx('pop')}}break}
    default:{if(I.chain==='pounce'&&now>I.t0+1.0&&!I.fired&&body.onGround){I.fired=true;body.dir=rng()<.5?-1:1;body.vx=body.dir*420;body.vy=-640*size()/200;body.onGround=false;body.plat=null;pal.play('dive');pal.stretchJump();I.until=now+1.6}
      if(I.a==='dance'&&now>I.t0+(I.note+1)*.6){I.note++;fx('note')}
      if((I.a==='nap'||I.a==='loaf')&&now-I.t0>1&&now-zT>1.8){zT=now;fx('zzz')}
      if(I.a==='purr'&&rng()<.01)fx('heart')}
  }
  if(now>I.until){const was=I.a;if(was==='fly'){body.fly=false;body.gs=(PALS.kinds[C.id]||{}).grav||1;body.bank=0;pal.snapRoll()}intent=null;sleeping=false;if(was==='sulk'&&sulking===1){pal.play('sulk')}if(was==='nap'||was==='loaf'){pal.play('yawn');intent={a:'yawn',until:now+2.6,t0:now}}else if(['walk','zoom','hop','jump','goto','play','fly'].includes(was)){pal.stop()}}
}
/* ---------- toys ---------- */
function drop(food){
  const el=document.createElement('div');el.textContent=food?FOOD[kindOf()]:TOY[kindOf()];el.style.cssText='position:fixed;left:0;top:0;font-size:30px;pointer-events:none;z-index:38;will-change:transform';document.body.appendChild(el);
  const b=PH.body({x:60+rng()*(innerWidth-120),y:-30,w:26,bounce:food?0:.72,fr:food?9:1.8,vy:0});toys.push({b,el,food,age:0});if(toys.length>3){const o=toys.shift();o.el.remove()}
}
function stepToys(dt){toys.forEach(t=>{t.age+=dt;PH.step(t.b,dt,world);t.b.rot+=(t.b.vx*dt)*.02;t.el.style.transform=`translate(${t.b.x-15}px,${t.b.y-30}px) rotate(${t.b.rot*57}deg)`});toys=toys.filter(t=>{if(t.age>90||!t.el.isConnected){t.el.remove();return false}return true})}
/* ---------- main loop ---------- */
function loop(ts){
  requestAnimationFrame(loop);if(!pal||document.hidden)return;
  const now=ts/1000,dt=Math.min(.05,last?now-last:.016);last=now;
  refreshWorld(ts);
  if(!dragging&&C.mv!==false){if(!intent&&!pal.isBusy())think(now);runIntent(dt,now);BR.tick(brain,dt,!!sleeping)}else if(!dragging&&intent){intent=null}
  const ev=PH.step(body,dt,world);
  ev.forEach(e=>{if(e.t==='land'){pal.impact(Math.min(e.v,1500));if(e.v>350)fx('dust');if(e.v>900&&!dragging){pal.play('scared')}else if(e.v>500&&rng()<.3)pal.play('laugh');PALS.sfx(e.v>600?'boing':'pop')}if(e.t==='wall'&&e.v>500)pal.impact(e.v*.5)});
  stepToys(dt);
  /* pointer look */
  if(ts-lastPtr<2600&&window._pl){const cx=body.x,cy=body.y-size()*.5;pal.look((window._pl[0]-cx)/260,(window._pl[1]-cy)/260)}else pal.look(null);
  pal.setPhys({vx:body.vx,vy:body.vy,ground:body.onGround,held:!!dragging&&dragging.moved,dir:body.dir||1,swing:dragging?dragging.swing:0,rot:body.rot,fly:!!body.fly,bank:body.bank||0});
  /* place */
  const s=size(),L=body.x-s*PAD/2,T=body.y-s*PAD*FEET;host.style.transform=`translate(${L}px,${T}px)`;
  let sy=world.floor;for(const p of plats){if(p.y>=body.y-4&&body.x>p.x&&body.x<p.x+p.w&&p.y<sy)sy=p.y}if(body.onGround&&body.plat!=='floor'){const p=plats.find(q=>q.id===body.plat);if(p)sy=p.y}
  const h=Math.max(0,sy-body.y),sc=Math.max(.25,1-h/500);shadow.style.width=s*.42*sc+'px';shadow.style.height=s*.09*sc+'px';shadow.style.transform=`translate(${body.x-s*.21*sc}px,${sy-s*.03}px)`;shadow.style.opacity=h>600?0:1;
  if(bubT){if(performance.now()>bubT){bub.style.opacity=0;bubT=0}const bw=bub.offsetWidth||80;bub.style.transform=`translate(${Math.max(6,Math.min(innerWidth-bw-6,body.x-bw/2))}px,${Math.max(6,body.y-s*.98-bub.offsetHeight)}px)`}
}
/* ---------- input ---------- */
const hit=(x,y)=>{if(!pal)return false;const s=size(),cx=body.x,cy=body.y-s*.36;return Math.abs(x-cx)<s*.26&&Math.abs(y-cy)<s*.4};
function wake(){if(sleeping||(pal&&pal.clip&&['sleep','loaf'].includes(pal.clip.n))){sleeping=false;intent=null;pal.stop();pal.play('stretch');return true}return false}
function word(){
  try{const p=R.P(),ids=Object.keys(p.learned).map(Number).filter(c=>R.W(ST.tgt,c)&&R.W(ST.src,c));const all=ids.length?ids:R.allC().filter(c=>R.W(ST.tgt,c)&&R.W(ST.src,c)).slice(0,300);if(!all.length)return null;const c=all[rng()*all.length|0];return{w:R.W(ST.tgt,c)[0],m:R.W(ST.src,c)[0]}}catch(e){return null}
}
function stopFly(){if(body.fly){body.fly=false;body.gs=(PALS.kinds[C.id]||{}).grav||1;body.bank=0;if(pal)pal.snapRoll()}}
function tap(){
  stopFly();const now=performance.now();tapN=tapN.filter(t=>now-t<3000);tapN.push(now);intent=null;sulkDone=false;
  if(sulking===1){sulking=2;pal.play('sulk');fx('anger');say('😤',1800);return}
  if(sulking===2){sulking=0;pal.play('hug');say('🥰',2200);return}
  if(wake())return;
  if(tapN.length>=5){pal.play('angry');fx('anger');say('😾',1400);tapN=[];return}
  const w=word(),k=kindOf(),opts=(k==='cat'||k==='fox'?['purr','wave','cheer','spin']:k==='penguin'?['flap','cheer','bow','spin']:k==='bunny'?['binky','wave','cheer','nod']:['wave','cheer','manes','spin','nod']).concat(['tongue','wink','kiss','hearteyes','hug','hipshake','shy','clap']);
  if(k==='dragon'&&rng()<.4){startIntent('fly',10);return}
  pal.play(opts[rng()*opts.length|0]);if(rng()<.5)pal.emote('greet');
  if(w){say(w.w+' · '+w.m,3200);pal.talk=pal.t+1.4;try{R.speak(w.w,ST.tgt)}catch(e){}}else say('💖',1500);
}
function down(e){
  if(!pal||!hit(e.clientX,e.clientY))return;e.stopPropagation();e.preventDefault();lastPtr=performance.now();stopFly();
  dragging={id:e.pointerId,x0:e.clientX,y0:e.clientY,ox:body.x-e.clientX,oy:body.y-e.clientY,moved:false,s:[],swing:0,t0:performance.now()};
}
function move(e){
  window._pl=[e.clientX,e.clientY];lastPtr=performance.now();
  if(!dragging){document.body.style.cursor=hit(e.clientX,e.clientY)?'grab':'';return}
  if(e.pointerId!==dragging.id)return;e.preventDefault();
  if(!dragging.moved&&Math.hypot(e.clientX-dragging.x0,e.clientY-dragging.y0)>7){dragging.moved=true;pal.emote('scared',true);body.held=true;intent=null;sleeping=false;pal.stop();pal.setFace('worried');document.body.style.cursor='grabbing';PALS.sfx('pop')}
  if(dragging.moved){const tx=e.clientX+dragging.ox,ty=e.clientY+dragging.oy;const vx=tx-body.x;body.x=tx;body.y=ty;dragging.swing+=((Math.max(-1,Math.min(1,vx*.08)))-dragging.swing)*.3;dragging.s.push([performance.now(),e.clientX,e.clientY]);dragging.s=dragging.s.filter(q=>performance.now()-q[0]<110)}
}
function up(e){
  if(!dragging||e.pointerId!==dragging.id)return;const D=dragging;dragging=null;document.body.style.cursor='';pal.setFace('base');
  if(!D.moved){tap();return}
  body.held=false;body.onGround=false;body.plat=null;
  const s=D.s;let vx=0,vy=0;if(s.length>1){const a=s[0],b=s[s.length-1],dt=Math.max(.016,(b[0]-a[0])/1000);vx=(b[1]-a[1])/dt;vy=(b[2]-a[2])/dt}
  body.vx=Math.max(-2200,Math.min(2200,vx));body.vy=Math.max(-2200,Math.min(2200,vy));body.dir=body.vx>=0?1:-1;
  if(Math.hypot(body.vx,body.vy)>900){pal.play('spin');fx('spark')}
}
/* ---------- lifecycle ---------- */
async function ensure(){
  if(pal||fail||!C.on||Date.now()<snoozeUntil)return;
  const ok=await loadScript();if(!ok||!window.PALS||!PALS.ok){fail=true;return}
  if(pal)return;
  if(!host)mk();
  body=PH.body({x:C.x==null?innerWidth*.72:C.x,y:-size(),w:size()*.4,fr:9});
  newPal();body.w=size()*.4;
  if(!wired){wired=1;
  window.addEventListener('pointerdown',down,{capture:true});window.addEventListener('pointermove',move,{passive:false});window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);
  window.addEventListener('touchstart',e=>{const t=e.touches[0];if(t&&hit(t.clientX,t.clientY))e.preventDefault()},{passive:false,capture:true});
  window.addEventListener('touchmove',e=>{if(dragging&&dragging.moved)e.preventDefault()},{passive:false});
  window.addEventListener('resize',()=>{world.right=innerWidth;if(body)body.x=Math.min(body.x,innerWidth-size()*.2)});
  window.addEventListener('beforeunload',()=>{if(body){C.x=body.x;putCfg(C)}});}
  requestAnimationFrame(loop);
  setTimeout(()=>{if(pal)say(tt('pl_tip'),3800)},1600);
}
function shutdown(){if(pal){C.x=body.x;putCfg(C);pal.destroy();pal=null}if(host)host.innerHTML='';[shadow,bub].forEach(e=>e&&(e.style.display='none'));toys.forEach(t=>t.el.remove());toys=[]}

/* ---------- quick control: hide for a while / this session / forever ---------- */
Object.assign(X,{pl_q30:{ru:'Скрыть на 30 минут',pt:'Ocultar por 30 minutos',zh:'隐藏30分钟',it:'Nascondi per 30 minuti',hi:'30 मिनट के लिए छिपाएँ',ja:'30分間非表示',ko:'30분간 숨기기',az:'30 dəqiqə gizlət',fa:'پنهان برای ۳۰ دقیقه',en:'Hide for 30 minutes',ar:'إخفاء لمدة 30 دقيقة',de:'30 Minuten ausblenden',tr:'30 dakika gizle',es:'Ocultar 30 minutos',fr:'Masquer 30 minutes'},pl_qs:{ru:'Скрыть до закрытия',pt:'Ocultar nesta sessão',zh:'本次使用期间隐藏',it:'Nascondi per questa sessione',hi:'इस सत्र में छिपाएँ',ja:'今回のみ非表示',ko:'이번 세션 동안 숨기기',az:'Bu sessiya üçün gizlət',fa:'پنهان تا بستن برنامه',en:'Hide for this session',ar:'إخفاء حتى إغلاق التطبيق',de:'Für diese Sitzung ausblenden',tr:'Bu oturum boyunca gizle',es:'Ocultar esta sesión',fr:'Masquer pour cette session'},pl_qoff:{ru:'Отключить навсегда',pt:'Desativar para sempre',zh:'永久关闭',it:'Disattiva per sempre',hi:'हमेशा के लिए बंद करें',ja:'完全にオフ',ko:'영구 끄기',az:'Həmişəlik söndür',fa:'غیرفعال‌سازی دائمی',en:'Turn off for good',ar:'تعطيل نهائي',de:'Dauerhaft ausschalten',tr:'Kalıcı olarak kapat',es:'Desactivar siempre',fr:'Désactiver définitivement'},pl_qon:{ru:'Показать персонажа',pt:'Mostrar personagem',zh:'显示角色',it:'Mostra personaggio',hi:'किरदार दिखाएँ',ja:'キャラを表示',ko:'캐릭터 표시',az:'Personajı göstər',fa:'نمایش کاراکتر',en:'Show character',ar:'إظهار الشخصية',de:'Figur anzeigen',tr:'Karakteri göster',es:'Mostrar personaje',fr:'Afficher le personnage'}});
let qb,qm,snT=0;
const hidden=()=>!C.on||Date.now()<snoozeUntil;
function palSet(on){C=cfg();C.on=!!on;putCfg(C);snoozeUntil=0;clearTimeout(snT);if(C.on){[shadow,bub].forEach(x=>x&&(x.style.display=''));fail=false;ensure()}else shutdown();qui()}
function palSnooze(min){snoozeUntil=min===Infinity?Infinity:Date.now()+min*6e4;shutdown();clearTimeout(snT);if(min!==Infinity)snT=setTimeout(()=>{snoozeUntil=0;[shadow,bub].forEach(x=>x&&(x.style.display=''));ensure();qui()},min*6e4+200);qui()}
function qui(){if(!qb)return;qb.style.opacity=hidden()?'.55':'.9';qb.textContent=hidden()?'🙈':'🐾';qm.innerHTML=(hidden()?`<button data-q="on">${esc(tt('pl_qon'))}</button>`:`<button data-q="30">${esc(tt('pl_q30'))}</button><button data-q="s">${esc(tt('pl_qs'))}</button><button data-q="off">${esc(tt('pl_qoff'))}</button>`)+`<div style="display:flex;flex-wrap:wrap;gap:4px;max-width:230px">${palGrid()}</div><label style="font-size:12px;display:flex;gap:6px;align-items:center">🔍<input type="range" min="110" max="300" value="${cfg().size}" data-sz="1" style="flex:1"></label>`}
function qmk(){if(qb)return;
  qb=document.createElement('button');qb.id='palq';qb.setAttribute('aria-label','companion');qb.style.cssText='position:fixed;bottom:86px;inset-inline-start:10px;width:38px;height:38px;border-radius:50%;background:var(--card,#fff);color:var(--ink,#222);border:1px solid var(--line,#ddd);box-shadow:0 4px 14px #0003;font-size:18px;z-index:60;padding:0';
  qm=document.createElement('div');qm.style.cssText='position:fixed;bottom:130px;inset-inline-start:10px;display:none;flex-direction:column;gap:6px;background:var(--card,#fff);color:var(--ink,#222);border:1px solid var(--line,#ddd);border-radius:16px;padding:8px;box-shadow:0 10px 30px #0004;z-index:61;min-width:180px;max-height:70vh;overflow:auto';
  const st=document.createElement('style');st.textContent='#palq+div button{padding:10px 12px;border-radius:10px;text-align:start;background:var(--bg,#f4f4f4);font-size:14px}';document.head.appendChild(st);
  qb.onclick=e=>{e.stopPropagation();qm.style.display=qm.style.display==='flex'?'none':'flex'};
  qm.oninput=e=>{if(e.target.dataset.sz)palSize(e.target.value)};qm.onclick=e=>{const pk=e.target.closest('[data-pk]');if(pk){palPick(pk.dataset.pk);return}const b=e.target.closest('[data-q]');if(!b)return;qm.style.display='none';const q=b.dataset.q;if(q==='30')palSnooze(30);else if(q==='s')palSnooze(Infinity);else if(q==='off')palSet(false);else palSet(true)};
  document.addEventListener('click',e=>{if(qm.style.display==='flex'&&!e.target.closest('#palq'))qm.style.display='none'});
  document.body.appendChild(qb);document.body.appendChild(qm);qui()}
function palPick(id){if(R.assets&&!R.assets.ensure('ch:'+id,EMO[id]+' '+id))return;C=cfg();C.id=id;C.on=true;putCfg(C);snoozeUntil=0;if(!pal){[shadow,bub].forEach(x=>x&&(x.style.display=''));fail=false;ensure()}else{newPal();pal.play&&pal.play('wave')}qui()}
function palSize(n){C=cfg();C.size=Math.max(110,Math.min(300,+n||C.size));putCfg(C);if(pal&&body){body.w=C.size*.4;pal.setSize(C.size);host.style.width=host.style.height=C.size*PAD+'px'}}
function palGrid(named){const c=cfg();const lg=(ST&&(ST.uil||ST.src))||'en';return CATS.map(ct=>{const has=ct[1].includes(c.id);return `<details class="pgd" ${named||has?'open':''} style="width:100%"><summary class="pgh" style="cursor:pointer;font-size:12px;opacity:.8;margin:6px 2px 2px">${ct[0]} ${esc(ct[2][lg]||ct[2].en)} <small>(${ct[1].length})</small></summary><div style="display:flex;flex-wrap:wrap;gap:4px">`+ct[1].map(k=>`<button class="chip pgc ${k===c.id?'on':''}" data-pk="${k}" style="font-size:${named?16:22}px;padding:6px 9px" title="${k}">${EMO[k]}${R.assets&&!R.assets.owned('ch:'+k)?'<small>🔒'+R.assets.price('ch:'+k)+'</small>':''}${named?` <span style="font-size:12px">${k}${JOB[k]?' '+JOB[k]:''}</span>`:''}</button>`).join('')+'</div></details>'}).join('')}
function palSound(b){C=cfg();C.snd=!!b;putCfg(C);try{if(pal)pal.sfxOn=C.snd;if(PALS&&PALS.sound)PALS.sound(C.snd)}catch(e){}}
function palMotion(b){C=cfg();C.mv=!!b;putCfg(C);if(!b)intent=null}
function palTint(){if(!host)return;const ST=R.ST||{};if(ST.ptn!==1){host.style.filter='';return}
  const c=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim();let m=/^#([0-9a-f]{6})$/i.exec(c);if(!m){const t=document.createElement('i');t.style.color=c;document.body.appendChild(t);const rgb=getComputedStyle(t).color;t.remove();const q=rgb.match(/\d+/g);if(!q)return;m=[0,q.slice(0,3).map(x=>(+x).toString(16).padStart(2,'0')).join('')]}
  const n=parseInt(m[1],16),r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;let h=0;if(d){h=mx===r?((g-b)/d)%6:mx===g?(b-r)/d+2:(r-g)/d+4;h=Math.round(h*60);if(h<0)h+=360}
  host.style.filter='hue-rotate('+(((h-255)%360+360)%360)+'deg) saturate(1.15)'}
R.palTint=palTint;R.palSound=palSound;R.palMotion=palMotion;R.palChoose=id=>{const c=cfg();c.id=id;putCfg(c);C=c};R.palPick=palPick;R.palSize=palSize;R.palGrid=palGrid;R.palCfg=cfg;
R.palCats=CATS;R.palEmo=EMO;R.palJob=JOB;R.palSet=palSet;R.palSnooze=palSnooze;R.palHidden=hidden;
K.on('home',qmk);
K.on('home',()=>{if(C.on)setTimeout(()=>ensure(),400)});
K.on('answer',({ok,g})=>{if(!pal||dragging||Date.now()-lastAns<900)return;lastAns=Date.now();if(sleeping)return;const busy=pal.clip&&pal.clip.c.d>=99;if(busy)return;intent=null;if(ok){pal.play(g===3?'idea':rng()<.5?'cheer':'nod');if(body.onGround&&rng()<.4){body.vy=-520;body.onGround=false;body.plat=null;pal.stretchJump()}fx('spark')}else{pal.play(rng()<.5?'sad':'no')}});
/* ---------- settings page ---------- */
function open(){
  const v=R.view();C=cfg();
  v.innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(tt('pl_t'))}</h2></div>
  <div class="card"><label style="display:flex;gap:10px;align-items:center"><input type="checkbox" id="on" ${C.on?'checked':''}><b>${esc(tt('pl_show'))}</b></label><div class="mu sm" style="margin-top:6px">${esc(tt('pl_tip'))}</div></div>
  <div class="card"><h3>${esc(tt('pl_char'))}</h3><div class="chips" id="chs" style="flex-wrap:wrap">${palGrid(true)}</div>
  <label class="mu sm" style="display:block;margin-top:10px">${esc(tt('pl_size'))}: <b id="szv">${C.size}</b></label><input type="range" id="sz" min="110" max="300" value="${C.size}" style="width:100%"></div>
  <div class="card"><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="pl" style="width:auto;flex:1 1 42%">🎾 ${esc(tt('pl_play'))}</button><button class="btn" id="fd" style="width:auto;flex:1 1 42%">🍽 ${esc(tt('pl_feed'))}</button><button class="btn" id="np" style="width:auto;flex:1 1 42%">💤 ${esc(tt('pl_nap'))}</button><button class="btn" id="cm" style="width:auto;flex:1 1 42%">📍 ${esc(tt('pl_call'))}</button><button class="btn" id="sn" style="width:auto;flex:1 1 42%">${C.snd?'🔊':'🔇'} ${esc(tt('pl_snd'))}</button><button class="btn" id="rs" style="width:auto;flex:1 1 42%">↺ ${esc(tt('pl_reset'))}</button></div></div>
  <div class="card"><h3>${esc(tt('pl_tricks'))}</h3><div class="chips" id="tr" style="flex-wrap:wrap"></div><div id="m3" class="mu sm"></div></div>`;
  const q=x=>v.querySelector(x);q('#bk').onclick=R.home;
  const tricks=()=>{const box=q('#tr');if(!box)return;box.innerHTML=pal?pal.names().map(n=>`<button class="chip" data-n="${n}">${n}</button>`).join(''):`<span class="mu sm">${esc(tt('pl_no3d'))}</span>`};
  const upd=()=>{tricks()};
  q('#on').onchange=async e=>{palSet(e.target.checked);upd()};
  v.onclick=e=>{const c=e.target.closest('[data-c]'),n=e.target.closest('[data-n]');
    if(c&&pal&&R.assets&&!R.assets.ensure('ch:'+c.dataset.c,(EMO[c.dataset.c]||'')+' '+c.dataset.c))return;if(c&&pal){C.id=c.dataset.c;putCfg(C);v.querySelectorAll('#chs .chip').forEach(x=>x.classList.toggle('on',x===c));newPal();intent=null;upd();pal.play('wave')}
    if(n&&pal){intent={a:'show',until:performance.now()/1000+2.5,t0:performance.now()/1000};if(n.dataset.n==='slide'){body.vx=(body.x<innerWidth/2?1:-1)*560;body.fr=.75;pal.play('slide');setTimeout(()=>{body.fr=9;pal.stop()},2600)}else pal.play(n.dataset.n)}};
  q('#sz').oninput=e=>{C.size=+e.target.value;q('#szv').textContent=C.size;putCfg(C);if(pal){body.w=C.size*.4;pal.setSize(C.size);host.style.width=host.style.height=C.size*PAD+'px'}};
  q('#pl').onclick=()=>pal&&drop(false);q('#fd').onclick=()=>pal&&drop(true);
  q('#np').onclick=()=>{if(!pal)return;intent=null;startIntent(kindOf()==='cat'&&rng()<.5?'loaf':'nap',12+rng()*8)};
  q('#cm').onclick=()=>{if(!pal)return;intent={a:'goto-pt',until:0,t0:0};body.x=innerWidth/2;body.y=-size()*.3;body.vy=0;body.vx=0;body.onGround=false;body.plat=null;intent=null;pal.play('wave')};
  q('#sn').onclick=e=>{C.snd=!C.snd;putCfg(C);if(window.PALS)PALS.sound(C.snd);if(pal)pal.sfxOn=C.snd;e.currentTarget.firstChild.textContent=C.snd?'🔊 ':'🔇 '};
  q('#rs').onclick=()=>{C.x=null;putCfg(C);if(pal){body.x=innerWidth*.72;body.y=-size();body.vx=body.vy=0;body.onGround=false;body.plat=null}};
  ensure().then(upd);upd();
}
R.palLoad=loadScript;R.palState=()=>({pal,body,intent,toys,C,start:startIntent,drop,setChar:id=>{C.id=id;newPal()}});
R.tiles.push({icon:'🐾',label:()=>tt('pl_t'),open});
})();
