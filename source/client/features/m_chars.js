/* module: Characters - 3D stage (RM3D, lazy), moods/actions, role casting, GLB upload with Save/Cancel */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,ST,D,show}=R,v=()=>R.view();
const GD={
    save: { fa: 'ذخیره', en: 'Save', ar: 'حفظ', az: 'Saxla', de: 'Speichern', es: 'Guardar', fr: 'Enregistrer', hi: 'सहेजें', it: 'Salva', ja: '保存', ko: '저장', pt: 'Salvar', ru: 'Сохранить', tr: 'Kaydet', zh: '保存' },
    cancel: { fa: 'انصراف', en: 'Cancel', ar: 'إلغاء', az: 'Ləğv et', de: 'Abbrechen', es: 'Cancelar', fr: 'Annuler', hi: 'रद्द करें', it: 'Annulla', ja: 'キャンセル', ko: '취소', pt: 'Cancelar', ru: 'Отмена', tr: 'İptal', zh: '取消' },
    pend: { fa: 'پیش‌نمایش (ذخیره نشده)', en: 'Preview (not saved)', ar: 'معاينة (غير محفوظ)', az: 'Önizləmə (saxlanmayıb)', de: 'Vorschau (nicht gespeichert)', es: 'Vista previa (sin guardar)', fr: 'Aperçu (non enregistré)', hi: 'पूर्वावलोकन (सहेजा नहीं)', it: 'Anteprima (non salvato)', ja: 'プレビュー（未保存）', ko: '미리보기 (저장 안 됨)', pt: 'Pré-visualização (não salvo)', ru: 'Предпросмотр (не сохранено)', tr: 'Önizleme (kaydedilmedi)', zh: '预览（未保存）' },
    saved: { fa: 'ذخیره شد', en: 'Saved', ar: 'تم الحفظ', az: 'Saxlanıldı', de: 'Gespeichert', es: 'Guardado', fr: 'Enregistré', hi: 'सहेजा गया', it: 'Salvato', ja: '保存しました', ko: '저장됨', pt: 'Salvo', ru: 'Сохранено', tr: 'Kaydedildi', zh: '已保存' },
    cancelled: { fa: 'لغو شد', en: 'Cancelled', ar: 'أُلغي', az: 'Ləğv edildi', de: 'Abgebrochen', es: 'Cancelado', fr: 'Annulé', hi: 'रद्द', it: 'Annullato', ja: '取り消しました', ko: '취소됨', pt: 'Cancelado', ru: 'Отменено', tr: 'İptal edildi', zh: '已取消' },
    removed: { fa: 'مدل حذف شد', en: 'Model removed', ar: 'تم حذف النموذج', az: 'Model silindi', de: 'Modell entfernt', es: 'Modelo eliminado', fr: 'Modèle supprimé', hi: 'मॉडल हटाया गया', it: 'Modello rimosso', ja: 'モデルを削除しました', ko: '모델 삭제됨', pt: 'Modelo removido', ru: 'Модель удалена', tr: 'Model silindi', zh: '模型已删除' },
    fail: { fa: 'ذخیره نشد', en: 'Could not save', ar: 'تعذّر الحفظ', az: 'Saxlamaq mümkün olmadı', de: 'Speichern fehlgeschlagen', es: 'No se pudo guardar', fr: 'Échec de l’enregistrement', hi: 'सहेजा नहीं जा सका', it: 'Salvataggio non riuscito', ja: '保存できませんでした', ko: '저장 실패', pt: 'Não foi possível salvar', ru: 'Не удалось сохранить', tr: 'Kaydedilemedi', zh: '保存失败' },
    invalid: { fa: 'فایل GLB معتبر نیست', en: 'Invalid GLB file', ar: 'ملف GLB غير صالح', az: 'GLB faylı etibarsızdır', de: 'Ungültige GLB-Datei', es: 'Archivo GLB no válido', fr: 'Fichier GLB invalide', hi: 'अमान्य GLB फ़ाइल', it: 'File GLB non valido', ja: 'GLBファイルが無効です', ko: '잘못된 GLB 파일', pt: 'Arquivo GLB inválido', ru: 'Неверный файл GLB', tr: 'Geçersiz GLB dosyası', zh: 'GLB 文件无效' }
  };
const X={"ch_t": {"fa": "کاراکترها", "en": "Characters", "ar": "الشخصيات", "az": "Personajlar", "de": "Figuren", "es": "Personajes", "fr": "Personnages", "hi": "किरदार", "it": "Personaggi", "ja": "キャラクター", "ko": "캐릭터", "pt": "Personagens", "ru": "Персонажи", "tr": "Karakterler", "zh": "角色"}, "ch_up": {"fa": "بارگذاری مدل سه‌بعدی (GLB)", "en": "Upload 3D model (GLB)", "ar": "رفع نموذج ثلاثي الأبعاد (GLB)", "az": "3D model yüklə (GLB)", "de": "3D-Modell hochladen (GLB)", "es": "Subir modelo 3D (GLB)", "fr": "Importer un modèle 3D (GLB)", "hi": "3D मॉडल अपलोड करें (GLB)", "it": "Carica modello 3D (GLB)", "ja": "3Dモデルをアップロード (GLB)", "ko": "3D 모델 업로드 (GLB)", "pt": "Enviar modelo 3D (GLB)", "ru": "Загрузить 3D‑модель (GLB)", "tr": "3B model yükle (GLB)", "zh": "上传3D模型 (GLB)"}, "ch_no3d": {"fa": "این دستگاه سه‌بعدی را پشتیبانی نمی‌کند", "en": "3D is not supported on this device", "ar": "الثلاثي الأبعاد غير مدعوم على هذا الجهاز", "az": "Bu cihaz 3D dəstəkləmir", "de": "3D wird auf diesem Gerät nicht unterstützt", "es": "Este dispositivo no admite 3D", "fr": "Cet appareil ne prend pas en charge la 3D", "hi": "यह डिवाइस 3D का समर्थन नहीं करता", "it": "3D non supportato su questo dispositivo", "ja": "このデバイスは3D非対応です", "ko": "이 기기는 3D를 지원하지 않습니다", "pt": "Este dispositivo não suporta 3D", "ru": "3D не поддерживается на этом устройстве", "tr": "Bu cihaz 3B desteklemiyor", "zh": "此设备不支持3D"}, "ch_cast": {"fa": "نقش‌ها", "en": "Roles", "ar": "الأدوار", "az": "Rollar", "de": "Rollen", "es": "Roles", "fr": "Rôles", "hi": "भूमिकाएँ", "it": "Ruoli", "ja": "役割", "ko": "역할", "pt": "Papéis", "ru": "Роли", "tr": "Roller", "zh": "角色分工"}, "ch_r1": {"fa": "خوش‌آمدگو", "en": "Welcome", "ar": "الترحيب", "az": "Qarşılama", "de": "Begrüßung", "es": "Bienvenida", "fr": "Accueil", "hi": "स्वागत", "it": "Benvenuto", "ja": "ようこそ", "ko": "환영", "pt": "Boas-vindas", "ru": "Приветствие", "tr": "Karşılama", "zh": "欢迎"}, "ch_r2": {"fa": "راهنما", "en": "Guide", "ar": "المرشد", "az": "Bələdçi", "de": "Guide", "es": "Guía", "fr": "Guide", "hi": "गाइड", "it": "Guida", "ja": "ガイド", "ko": "가이드", "pt": "Guia", "ru": "Гид", "tr": "Rehber", "zh": "向导"}, "ch_r3": {"fa": "مربی", "en": "Coach", "ar": "المدرب", "az": "Məşqçi", "de": "Coach", "es": "Entrenador", "fr": "Coach", "hi": "कोच", "it": "Coach", "ja": "コーチ", "ko": "코치", "pt": "Treinador", "ru": "Тренер", "tr": "Koç", "zh": "教练"}, "ch_r4": {"fa": "مرور", "en": "Review", "ar": "المراجعة", "az": "Təkrar", "de": "Wiederholung", "es": "Repaso", "fr": "Révision", "hi": "दोहराव", "it": "Ripasso", "ja": "復習", "ko": "복습", "pt": "Revisão", "ru": "Повторение", "tr": "Tekrar", "zh": "复习"}, "ch_r5": {"fa": "شنیداری", "en": "Listening", "ar": "الاستماع", "az": "Dinləmə", "de": "Hören", "es": "Escucha", "fr": "Écoute", "hi": "सुनना", "it": "Ascolto", "ja": "リスニング", "ko": "듣기", "pt": "Escuta", "ru": "Аудирование", "tr": "Dinleme", "zh": "听力"}, "ch_say": {"fa": "بگو", "en": "Speak", "ar": "انطق", "az": "Danış", "de": "Sprechen", "es": "Hablar", "fr": "Parler", "hi": "बोलो", "it": "Parla", "ja": "話す", "ko": "말하기", "pt": "Falar", "ru": "Сказать", "tr": "Konuş", "zh": "说话"}};
const L=()=>ST.src||'en';
const G=(k)=>{const o=GD[k]||X[k];return o?(o[L()]||o.en):T(k)};
const tt=(k)=>{const o=X[k];return o?(o[L()]||o.en):T(k)};
const MOODS=['base','happy','worried','wow','wave','cheer','crown','cry','angry','sleep','idea','wink'];
const ACTS=['bounce','jelly','shake','spin','nod','tilt','dance','stomp','startle','peek'];
const EMO={leo:'🦁',mimi:'🐱',bani:'🐰',pingo:'🐧'};
const ROLES=['welcome','guide','coach','review','listening'];
const CK='rm2cast';
const cast=()=>{try{return JSON.parse(localStorage.getItem(CK)||'{}')}catch(e){return{}}};
const setCast=m=>{try{localStorage.setItem(CK,JSON.stringify(m))}catch(e){}};
let loading=null,view3=null,cur='leo',pend=null;
function loadX(){
  if(window.RM3D)return Promise.resolve(true);
  if(loading)return loading;
  loading=(async()=>{
    try{
      const code=await K.get('content').text('x3d.js');
      const s=document.createElement('script');s.textContent=code;document.head.appendChild(s);
      return !!window.RM3D;
    }catch(e){return false}
  })();
  return loading;
}
function chars(){return(window.RM3D&&RM3D.chars)||Object.keys(EMO)}
function open(){
  if(view3){try{view3.destroy()}catch(e){}view3=null}pend=null;
  const cs=chars(),cm=cast();
  v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(tt('ch_t'))}</h2></div>
  <div class="card center"><div id="st3" style="width:224px;height:224px;margin:0 auto;display:flex;align-items:center;justify-content:center"><span class="mu sm">…</span></div>
  <div class="chips" id="chs" style="flex-wrap:wrap;justify-content:center;margin-top:8px">${cs.map(c=>`<button class="chip ${c===cur?'on':''}" data-c="${c}">${EMO[c]||'🎭'} ${esc(c)}</button>`).join('')}</div></div>
  <div class="card"><div class="chips" id="mds" style="flex-wrap:wrap">${MOODS.map(m=>`<button class="chip" data-m="${m}">${m}</button>`).join('')}</div>
  <div class="chips" id="acs" style="flex-wrap:wrap;margin-top:8px">${ACTS.map(a=>`<button class="chip" data-a="${a}">${a}</button>`).join('')}</div>
  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn" id="say">🔊 ${esc(tt('ch_say'))}</button><button class="btn" id="snd">🔈</button></div></div>
  <div class="card"><h3>${esc(tt('ch_cast'))}</h3>${ROLES.map((r,i)=>`<div style="display:flex;align-items:center;gap:8px;margin:6px 0"><span style="flex:1">${esc(tt('ch_r'+(i+1)))}</span><select data-r="${r}">${cs.map(c=>`<option value="${c}" ${(cm[r]||'leo')===c?'selected':''}>${esc(c)}</option>`).join('')}</select></div>`).join('')}</div>
  <div class="card"><h3>${esc(tt('ch_up'))}</h3><input type="file" id="glb" accept=".glb,model/gltf-binary"><div style="display:flex;gap:8px;margin-top:8px"><button class="btn" id="gsv" disabled>${esc(G('save'))}</button><button class="btn" id="gcn" disabled>${esc(G('cancel'))}</button><button class="btn" id="gdl">🗑</button></div><div id="gst" class="mu sm" style="margin-top:6px"></div></div>`;
  const q=x=>v().querySelector(x),st=m=>{q('#gst').textContent=m};
  q('#bk').onclick=R.home;
  const gb=b=>{q('#gsv').disabled=b||!pend;q('#gcn').disabled=b||!pend};
  v().querySelectorAll('select[data-r]').forEach(s=>s.onchange=()=>{const m=cast();m[s.dataset.r]=s.value;setCast(m)});
  loadX().then(async ok=>{
    if(!document.getElementById('st3'))return;
    if(!ok||!RM3D.ok){q('#st3').innerHTML=`<div><div style="font-size:90px">${EMO[cur]||'🎭'}</div><div class="mu sm">${esc(tt('ch_no3d'))}</div></div>`;return}
    q('#st3').innerHTML='';
    try{view3=RM3D.mount(q('#st3'),{w:224,h:224})}catch(e){q('#st3').innerHTML=`<div class="mu sm">${esc(tt('ch_no3d'))}</div>`;return}
    const all=await RM3D.loadAllGLB();
    for(const id of Object.keys(all)){try{await view3.loadGLB(id,all[id])}catch(e){}}
    view3.setChar(cur);
    q('#snd').textContent=RM3D.sound()?'🔊':'🔇';
  });
  v().onclick=e=>{
    const c=e.target.closest('[data-c]'),m=e.target.closest('[data-m]'),a=e.target.closest('[data-a]');
    if(c){cur=c.dataset.c;v().querySelectorAll('#chs .chip').forEach(x=>x.classList.toggle('on',x===c));view3&&view3.setChar(cur)}
    else if(m&&view3){view3.setMood(m.dataset.m)}
    else if(a&&view3){view3.play(a.dataset.a)}
  };
  q('#say').onclick=()=>{if(!view3)return;view3.play('bounce');const p=R.P(),ids=Object.keys(p.learned).map(Number).filter(c=>R.W(ST.tgt,c));const c=ids.length?ids[Math.floor(Math.random()*ids.length)]:1000+Math.floor(Math.random()*50);const w=R.W(ST.tgt,c);const txt=w?(w.w||w.t||w[0]||''):'Hello';try{view3.speak(String(txt))}catch(e){}if(w)R.speak(String(txt),ST.tgt)};
  q('#snd').onclick=()=>{if(!window.RM3D)return;const s=!RM3D.sound();RM3D.sound(s);q('#snd').textContent=s?'🔊':'🔇'};
  q('#glb').onchange=async e=>{
    const f=e.target.files[0];if(!f)return;
    try{const buf=await f.arrayBuffer();await loadX();if(!view3)throw 0;await view3.loadGLB(cur,buf.slice(0));pend={id:cur,buf};view3.setChar(cur);st(G('pend'));gb(false)}
    catch(er){pend=null;st(G('invalid'));gb(false)}
  };
  q('#gsv').onclick=async()=>{if(!pend)return;gb(true);const ok=await RM3D.saveGLB(pend.id,pend.buf);pend=null;st(ok?G('saved'):G('fail'));gb(false)};
  q('#gcn').onclick=async()=>{if(!pend)return;const id=pend.id;pend=null;gb(true);try{const all=await RM3D.loadAllGLB();if(all[id])await view3.loadGLB(id,all[id]);else{delete view3.glb[id]}delete view3.cache[id];view3.setChar(id)}catch(e){}st(G('cancelled'));gb(false)};
  q('#gdl').onclick=async()=>{await RM3D.delGLB(cur);if(view3){delete view3.glb[cur];delete view3.cache[cur];view3.setChar(cur)}st(G('removed'))};
}
R.chars={cast:()=>cast(),roles:ROLES};
R.tiles.push({icon:'🎭',label:()=>tt('ch_t')+' · 3D',open});
})();
