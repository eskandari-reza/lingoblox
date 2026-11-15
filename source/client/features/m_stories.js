/* module: Stories & dialogues (A1–C2) — read/listen with per-speaker voices, translations on tap, role-play, practice (meaning match + line ordering). Content in m_stories_d*.js via window.RMS */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{esc,D,ST}=R,v=()=>R.view();
const X={"st_t": {"fa": "داستان و گفتگو", "en": "Stories & dialogues", "ar": "قصص وحوارات", "az": "Hekayələr və dialoqlar", "de": "Geschichten & Dialoge", "es": "Historias y diálogos", "fr": "Histoires et dialogues", "hi": "कहानियाँ और संवाद", "it": "Storie e dialoghi", "ja": "物語と会話", "ko": "이야기와 대화", "pt": "Histórias e diálogos", "ru": "Рассказы и диалоги", "tr": "Hikâyeler ve diyaloglar", "zh": "故事与对话"}, "st_d": {"fa": "گفتگوها", "en": "Dialogues", "ar": "حوارات", "az": "Dialoqlar", "de": "Dialoge", "es": "Diálogos", "fr": "Dialogues", "hi": "संवाद", "it": "Dialoghi", "ja": "会話", "ko": "대화", "pt": "Diálogos", "ru": "Диалоги", "tr": "Diyaloglar", "zh": "对话"}, "st_s": {"fa": "داستان‌ها", "en": "Stories", "ar": "قصص", "az": "Hekayələr", "de": "Geschichten", "es": "Historias", "fr": "Histoires", "hi": "कहानियाँ", "it": "Storie", "ja": "物語", "ko": "이야기", "pt": "Histórias", "ru": "Рассказы", "tr": "Hikâyeler", "zh": "故事"}, "st_play": {"fa": "پخش همه", "en": "Play all", "ar": "تشغيل الكل", "az": "Hamısını oxut", "de": "Alles abspielen", "es": "Reproducir todo", "fr": "Tout écouter", "hi": "सब सुनें", "it": "Riproduci tutto", "ja": "すべて再生", "ko": "모두 재생", "pt": "Reproduzir tudo", "ru": "Слушать всё", "tr": "Hepsini oynat", "zh": "全部播放"}, "st_tr": {"fa": "ترجمه", "en": "Translation", "ar": "الترجمة", "az": "Tərcümə", "de": "Übersetzung", "es": "Traducción", "fr": "Traduction", "hi": "अनुवाद", "it": "Traduzione", "ja": "翻訳", "ko": "번역", "pt": "Tradução", "ru": "Перевод", "tr": "Çeviri", "zh": "翻译"}, "st_rp": {"fa": "نقش‌بازی", "en": "Role-play", "ar": "لعب الأدوار", "az": "Rol oyunu", "de": "Rollenspiel", "es": "Juego de roles", "fr": "Jeu de rôle", "hi": "भूमिका-अभिनय", "it": "Gioco di ruolo", "ja": "ロールプレイ", "ko": "역할극", "pt": "Dramatização", "ru": "Ролевая игра", "tr": "Rol yapma", "zh": "角色扮演"}, "st_show": {"fa": "نمایش پاسخ", "en": "Show answer", "ar": "عرض الإجابة", "az": "Cavabı göstər", "de": "Antwort zeigen", "es": "Mostrar respuesta", "fr": "Voir la réponse", "hi": "उत्तर दिखाएँ", "it": "Mostra la risposta", "ja": "答えを見る", "ko": "정답 보기", "pt": "Mostrar resposta", "ru": "Показать ответ", "tr": "Cevabı göster", "zh": "显示答案"}, "st_pr": {"fa": "تمرین", "en": "Practice", "ar": "تدريب", "az": "Məşq", "de": "Üben", "es": "Practicar", "fr": "S'entraîner", "hi": "अभ्यास", "it": "Esercizi", "ja": "練習", "ko": "연습", "pt": "Praticar", "ru": "Практика", "tr": "Alıştırma", "zh": "练习"}, "st_mt": {"fa": "معنی‌اش چیست؟", "en": "What does it mean?", "ar": "ماذا تعني؟", "az": "Mənası nədir?", "de": "Was bedeutet das?", "es": "¿Qué significa?", "fr": "Que signifie-t-elle ?", "hi": "इसका क्या मतलब है?", "it": "Cosa significa?", "ja": "どういう意味ですか。", "ko": "무슨 뜻일까요?", "pt": "O que significa?", "ru": "Что это значит?", "tr": "Ne anlama geliyor?", "zh": "这是什么意思？"}, "st_or": {"fa": "جمله‌ها را به ترتیب درست بزن", "en": "Tap the lines in the right order", "ar": "المس الجمل بالترتيب الصحيح", "az": "Cümlələri düzgün ardıcıllıqla seç", "de": "Tippe die Sätze in der richtigen Reihenfolge an", "es": "Toca las frases en el orden correcto", "fr": "Touche les phrases dans le bon ordre", "hi": "वाक्यों को सही क्रम में चुनें", "it": "Tocca le frasi nell'ordine giusto", "ja": "文を正しい順に選びましょう", "ko": "문장을 올바른 순서로 누르세요", "pt": "Toque nas frases na ordem certa", "ru": "Нажимай на фразы по порядку", "tr": "Cümlelere doğru sırayla dokun", "zh": "按正确顺序点击句子"}, "st_you": {"fa": "نوبت تو", "en": "Your turn", "ar": "دورك", "az": "Növbə səndədir", "de": "Du bist dran", "es": "Tu turno", "fr": "À toi", "hi": "आपकी बारी", "it": "Tocca a te", "ja": "あなたの番", "ko": "당신 차례", "pt": "Sua vez", "ru": "Твоя очередь", "tr": "Sıra sende", "zh": "轮到你了"}, "st_nx": {"fa": "بعدی", "en": "Next", "ar": "التالي", "az": "Növbəti", "de": "Weiter", "es": "Siguiente", "fr": "Suivant", "hi": "अगला", "it": "Avanti", "ja": "次へ", "ko": "다음", "pt": "Próximo", "ru": "Далее", "tr": "İleri", "zh": "下一个"}, "st_ok": {"fa": "آفرین!", "en": "Well done!", "ar": "أحسنت!", "az": "Əla!", "de": "Gut gemacht!", "es": "¡Bien hecho!", "fr": "Bravo !", "hi": "शाबाश!", "it": "Bravo!", "ja": "よくできました！", "ko": "잘했어요!", "pt": "Muito bem!", "ru": "Молодец!", "tr": "Aferin!", "zh": "做得好！"}, "st_note": {"fa": "عنوان و ترجمهٔ جمله‌ها فقط فارسی و انگلیسی است.", "en": "Titles and translations are available in Persian and English only.", "ar": "العناوين والترجمات متاحة بالفارسية والإنجليزية فقط.", "az": "Başlıqlar və tərcümələr yalnız fars və ingilis dilindədir.", "de": "Titel und Übersetzungen gibt es nur auf Persisch und Englisch.", "es": "Los títulos y las traducciones solo están en persa e inglés.", "fr": "Les titres et traductions sont disponibles en persan et en anglais uniquement.", "hi": "शीर्षक और अनुवाद केवल फ़ारसी और अंग्रेज़ी में उपलब्ध हैं।", "it": "Titoli e traduzioni sono disponibili solo in persiano e inglese.", "ja": "タイトルと翻訳はペルシア語と英語のみです。", "ko": "제목과 번역은 페르시아어와 영어로만 제공됩니다.", "pt": "Títulos e traduções estão disponíveis apenas em persa e inglês.", "ru": "Заголовки и переводы есть только на персидском и английском.", "tr": "Başlıklar ve çeviriler yalnızca Farsça ve İngilizce.", "zh": "标题和翻译仅提供波斯语和英语。"}};
const tt=k=>{const o=X[k];return o?(o[ST.src||'en']||o.en):R.T(k)};
const shuf=a=>[...a].sort(()=>Math.random()-.5),pick=a=>a[Math.random()*a.length|0];
const dirT=()=>(D.P[ST.tgt]||{}).dir||'ltr';
const head=t=>`<div class="hd"><button class="back" id="bk" aria-label="back">←</button><h2>${esc(t)}</h2></div>`;
const bk=f=>{const b=v().querySelector('#bk');if(b)b.onclick=f};
const SK='rm2st',sget=()=>{try{return JSON.parse(localStorage.getItem(SK)||'{}')}catch(e){return{}}},sset=o=>{try{localStorage.setItem(SK,JSON.stringify(o))}catch(e){}};
const items=()=>(window.RMS||{}).items||[];
const fa=()=>ST.src==='fa';
const title=it=>it.t[fa()?1:0];
const lines=(it,k)=>{const tx=(window.RMS.tx||{})[ST.tgt];if(tx&&tx[k])return tx[k];if(ST.tgt==='en')return it.g.map(x=>x[0]);if(ST.tgt==='fa')return it.g.map(x=>x[1]);return null};
const gl=(it,i)=>it.g[i][fa()?1:0];
const hasGloss=()=>!(ST.tgt==='en'&&!fa());
const mark=(id,o)=>{const g=sget(),l=g[ST.tgt]=g[ST.tgt]||{};l[id]=Object.assign(l[id]||{},o);sset(g)};
function rec(ok){K.emit('answer',{ok});R.act&&R.act.pts(ok?'ok':'no');const p=R.P();p.xp+=ok?6:1;R.save()}
/* ---- speech (per-speaker pitch for dialogues, chained) ---- */
let tok=0;
function say(text,pitch,done){try{const u=new SpeechSynthesisUtterance(text);u.lang=(D.P[ST.tgt]||{}).tts||ST.tgt;u.rate=ST.slow?.65:.9;u.pitch=pitch||1;if(done){u.onend=done;u.onerror=done}speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){done&&setTimeout(done,600)}}
const pitchOf=(it,i)=>it.k==='d'?(i%2?.8:1.2):1;
function playAll(it,ls,from,mark2){const my=++tok;let i=from||0;const go=()=>{if(my!==tok||i>=ls.length){mark2&&mark2(-1);return}mark2&&mark2(i);const k=i++;say(ls[k],pitchOf(it,k),()=>setTimeout(go,350))};go()}
const stop=()=>{tok++;try{speechSynthesis.cancel()}catch(e){}};
/* ---- hub ---- */
let SL_='A1';
function open(){stop();const g=sget()[ST.tgt]||{},all=items();
  const avail=all.map((it,k)=>lines(it,k)?k:-1).filter(k=>k>=0),lvs=R.LV.filter(l=>avail.some(k=>all[k].l===l));if(!lvs.includes(SL_))SL_=lvs[0]||'A1';
  const row=(it,k)=>{const s=g[it.id]||{},ls=lines(it,k);return`<button class="ur st" data-i="${k}"><b>${it.k==='d'?'💬':'📖'}</b><span class="ut"><em dir="auto">${esc(title(it))}</em><small dir="${dirT()}">${esc(ls[0]||'')}</small></span><span class="sv">${s.best>=75?'✅':s.best!=null?s.best+'%':s.read?'📖':'›'}</span></button>`};
  const sec=(kind,key)=>{const l=avail.filter(k=>all[k].k===kind&&all[k].l===SL_);return l.length?`<h4 class="msec3">${esc(tt(key))} · ${l.length}</h4><div class="ulist">${l.map(k=>row(all[k],k)).join('')}</div>`:''};
  v().innerHTML=head(tt('st_t'))+`<div class="chips">${lvs.map(l=>`<button class="chip ${l===SL_?'on':''}" data-l="${l}">${l} <small>${avail.filter(k=>all[k].l===l).length}</small></button>`).join('')}</div>`+sec('d','st_d')+sec('s','st_s')+(ST.src!=='fa'&&ST.src!=='en'?`<div class="mu sm" style="margin:10px 2px">${esc(tt('st_note'))}</div>`:'');bk(R.home);
  v().onclick=e=>{const c=e.target.closest('.chip');if(c){SL_=c.dataset.l;return open()}const b=e.target.closest('[data-i]');if(b)read(+b.dataset.i)}}
/* ---- reader ---- */
function read(k){const it=items()[k],ls=lines(it,k);if(!it||!ls)return open();mark(it.id,{read:1});stop();
  const dlg=it.k==='d',n=ls.length,tot=n+2,gloss=hasGloss(),spk=i=>dlg?(i%2?'B':'A'):'';
  const item=i=>({id:'st_'+it.id+'_'+i,name:ls[i],desc:gloss?gl(it,i):'',shareTitle:title(it),shareText:ls[i]+(gloss?' — '+gl(it,i):'')});
  const render=p=>{
    if(p===0)return`<div class="gpt"><span class="gpl">${esc(it.l)}</span><span class="mu2">1 / ${tot}</span></div><div class="mu2 ltt">${dlg?'💬':'📖'} ${esc(tt(dlg?'st_d':'st_s'))} · ${n}</div><h1 class="gh" dir="auto">${esc(title(it))}</h1><button class="lbtn" data-all="1">▶ ${esc(tt('st_play'))}</button>${gloss?`<p class="gpr" dir="auto">${esc(gl(it,0))} …</p>`:''}`;
    if(p===tot-1)return`<div class="gpt"><span class="gpl">${esc(it.l)}</span><span class="mu2">${tot} / ${tot}</span></div><h1 class="gh" dir="auto">🎉 ${esc(title(it))}</h1>${dlg?`<button class="lbtn" data-rp="1">🎭 ${esc(tt('st_rp')||'')}</button>`:''}<button class="lbtn alt" data-pr="1">🎯 ${esc(tt('st_pr')||R.T('pr'))}</button><button class="lbtn alt" data-all="1">▶ ${esc(tt('st_play'))}</button>`;
    const i=p-1;return`<div class="gpt"><span class="gpl">${dlg?esc(spk(i)):esc(it.l)}</span><span class="mu2">${p+1} / ${tot}</span></div>${dlg&&i>0?`<div class="mu2 ltt" dir="${dirT()}">${esc(spk(i-1))} · ${esc(ls[i-1])}</div>`:`<div class="mu2 ltt" dir="auto">${esc(title(it))}</div>`}<p class="tx big" dir="${dirT()}">${esc(ls[i])}</p>${gloss?`<p class="gpr" dir="auto">${esc(gl(it,i))}</p>`:''}<div class="gact"><button data-p="${i}">🔊</button><button data-p="${i}" data-slow="1">🐢</button></div>${R.act.rail(item(i),'sent',p)}`};
  const bind=(e,ov)=>{const pl=e.target.closest('[data-p]');
    if(pl){const was=ST.slow;if(pl.dataset.slow)ST.slow=true;say(ls[+pl.dataset.p],pitchOf(it,+pl.dataset.p));ST.slow=was;return}
    if(e.target.closest('[data-all]')){const pg=ov.querySelector('.rpager');playAll(it,ls,0,i=>{if(i>=0)pg.scrollTo({top:RM2.rpTop(pg,i+1),behavior:'smooth'})});return}
    const go=f=>{ov.querySelector('.rclose').click();setTimeout(f,30)};
    if(e.target.closest('[data-rp]'))go(()=>role(k));else if(e.target.closest('[data-pr]'))go(()=>practice(k))};
  R.postFeed(tot,render,bind,()=>{stop()},0,p=>{if(p>0&&p<tot-1){R.act.pts('view','st_'+it.id+'_'+(p-1));if(ST.auto)say(ls[p-1],pitchOf(it,p-1))}},ov=>{ov._rail=(e,p)=>R.act.onRail(e,item(p-1),'sent')})}
/* ---- role-play (scroll feed): you are B ---- */
function role(k){const it=items()[k],ls=lines(it,k);if(!ls)return open();stop();
  const n=ls.length,tot=n+1,gloss=hasGloss(),sp=i=>i%2?'B':'A',shown={};
  const render=j=>{
    if(j===n)return`<div class="gpt"><span class="gpl">🎭</span><span class="mu2">${tot} / ${tot}</span></div><h1 class="gh" dir="auto">🎉 ${esc(tt('st_ok'))}</h1><button class="lbtn" data-ag="1">${esc(R.T('gm_again'))}</button><button class="lbtn alt" data-end="1">✓</button>`;
    const mine=j%2===1;
    return`<div class="gpt"><span class="gpl">${mine?'B · 🎭':'A'}</span><span class="mu2">${j+1} / ${tot}</span></div>${j>0?`<div class="mu2 ltt" dir="${dirT()}">${esc(sp(j-1))} · ${esc(ls[j-1])}</div>`:`<div class="mu2 ltt" dir="auto">${esc(title(it))}</div>`}`+
    (mine?`<div class="mu2">${esc(tt('st_you'))}</div><p class="tx big" dir="auto">${esc(gloss?gl(it,j):'…')}</p><button class="lbtn" data-show="${j}">${esc(tt('st_show'))}</button><p class="tx big rv" dir="${dirT()}" hidden>${esc(ls[j])}</p><div class="gact rv" hidden><button data-p="${j}">🔊</button></div>`
      :`<p class="tx big" dir="${dirT()}">${esc(ls[j])}</p>${gloss?`<p class="gpr" dir="auto">${esc(gl(it,j))}</p>`:''}<div class="gact"><button data-p="${j}">🔊</button><button data-p="${j}" data-slow="1">🐢</button></div>`)};
  const bind=(e,ov)=>{const pl=e.target.closest('[data-p]'),sh=e.target.closest('[data-show]');
    if(pl){const was=ST.slow;if(pl.dataset.slow)ST.slow=true;say(ls[+pl.dataset.p],pitchOf(it,+pl.dataset.p));ST.slow=was}
    else if(sh){const j=+sh.dataset.show,post=sh.closest('.gp');post.querySelectorAll('.rv').forEach(x=>x.hidden=false);sh.hidden=true;say(ls[j],pitchOf(it,j));if(!shown[j]){shown[j]=1;rec(true)}}
    else if(e.target.closest('[data-ag]')){ov.querySelector('.rclose').click();setTimeout(()=>role(k),30)}
    else if(e.target.closest('[data-end]'))ov.querySelector('.rclose').click()};
  R.postFeed(tot,render,bind,()=>stop(),0,j=>{if(j<n&&j%2===0)say(ls[j],pitchOf(it,j))})}
/* ---- practice (scroll feed): meaning match x4 + order x1 ---- */
function practice(k){const it=items()[k],ls=lines(it,k);if(!ls)return open();stop();
  const n=ls.length,idx=ls.map((_,x)=>x),gloss=hasGloss(),total=5;let okn=0;
  const pool=shuf(idx),qs=[];for(let q=0;q<4;q++){const i=pool.length?pool.pop():pick(idx),others=shuf(idx.filter(x=>x!==i)).slice(0,3);qs.push({t:'mc',i,opts:shuf([i,...others])})}
  qs.push({t:'ord',bank:shuf(idx)});
  const render=p=>{
    if(p===total)return`<div class="gpt"><span class="gpl">🎯</span><span class="mu2">${total+1} / ${total+1}</span></div><h1 class="gh" dir="auto" id="sum">⭐ ${okn}/${total}</h1><p class="gpr" id="sumt"></p><button class="lbtn" data-ag="1">${esc(R.T('gm_again'))}</button><button class="lbtn alt" data-end="1">✓</button>`;
    const q=qs[p],head=`<div class="gpt"><span class="gpl">${p+1}/${total}</span><span class="mu2 sc">⭐ <b>${okn}</b></span></div>`;
    if(q.t==='mc')return head+`<div class="mu2">${esc(tt('st_mt'))}</div><p class="tx big" dir="${dirT()}">${esc(ls[q.i])}</p><div class="gact"><button data-p="${q.i}">🔊</button></div><div class="stk" data-q="${p}">${q.opts.map(o=>`<button data-o="${o}">${esc(gloss?gl(it,o):ls[o])}</button>`).join('')}</div>`;
    return head+`<div class="mu2">${esc(tt('st_or'))}</div><div class="ordo" data-ao="${p}"></div><div class="stk" data-bank="${p}">${q.bank.map(x=>`<button data-b="${x}" dir="${dirT()}">${esc(ls[x])}</button>`).join('')}</div>`};
  const bind=(e,ov)=>{const pg=ov.querySelector('.rpager'),next=p=>setTimeout(()=>pg.scrollTo({top:RM2.rpTop(pg,p+1),behavior:'smooth'}),p===total-1?1500:900);
    const upd=()=>ov.querySelectorAll('.sc b').forEach(x=>x.textContent=okn);
    const pl=e.target.closest('[data-p]'),o=e.target.closest('[data-o]'),b=e.target.closest('[data-b]');
    if(pl)say(ls[+pl.dataset.p],pitchOf(it,+pl.dataset.p));
    else if(o){const box=o.closest('[data-q]');if(box.dataset.d)return;box.dataset.d=1;const p=+box.dataset.q,q=qs[p],ok=+o.dataset.o===q.i;
      box.querySelectorAll('[data-o]').forEach(x=>{if(+x.dataset.o===q.i)x.classList.add('ok');else if(x===o)x.classList.add('no')});if(ok)okn++;upd();rec(ok);say(ls[q.i],pitchOf(it,q.i));next(p)}
    else if(b){const box=b.closest('[data-bank]'),p=+box.dataset.bank,area=ov.querySelector(`[data-ao="${p}"]`),q=qs[p];q.out=q.out||[];if(box.dataset.d)return;q.out.push(+b.dataset.b);b.hidden=true;
      area.insertAdjacentHTML('beforeend',`<div class="ordi" dir="${dirT()}">${esc(ls[+b.dataset.b])}</div>`);
      if(q.out.length===n){box.dataset.d=1;const ok=q.out.every((x,i)=>x===i);if(ok)okn++;upd();rec(ok);if(!ok)area.innerHTML=ls.map(l=>`<div class="ordi bad" dir="${dirT()}">${esc(l)}</div>`).join('');next(p)}}
    else if(e.target.closest('[data-ag]')){ov.querySelector('.rclose').click();setTimeout(()=>practice(k),30)}
    else if(e.target.closest('[data-end]'))ov.querySelector('.rclose').click()};
  R.postFeed(total+1,render,bind,()=>stop(),0,p=>{if(p===total){const pct=Math.round(okn/total*100);mark(it.id,{best:Math.max(pct,(sget()[ST.tgt]||{})[it.id]?.best||0)});const el=document.querySelector('.reel #sum'),t=document.querySelector('.reel #sumt');if(el)el.textContent='⭐ '+okn+'/'+total;if(t)t.textContent=pct>=75?tt('st_ok'):''}})}
R.tiles.push({icon:'🗨️',label:()=>tt('st_t'),open,show:()=>items().some((it,k)=>lines(it,k))});
})();
