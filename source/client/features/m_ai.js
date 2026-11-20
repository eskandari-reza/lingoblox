/* module: AI tutor — direct from the device with the learner's own API key (Gemini / OpenAI-compatible / Anthropic). Key never leaves the device except to the chosen service. */
(()=>{
const localStorage=K.get('storage');
const R=window.RM2,{T,esc,D,ST}=R,v=()=>R.view();
const EN={en:'English',fa:'Persian',ar:'Arabic',az:'Azerbaijani',de:'German',es:'Spanish',fr:'French',hi:'Hindi',it:'Italian',ja:'Japanese',ko:'Korean',pt:'Portuguese',ru:'Russian',tr:'Turkish',zh:'Chinese'};
const KEY='rm2ai',cfg=()=>{try{return Object.assign({prov:'gemini',key:'',model:'',base:''},JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return{prov:'gemini',key:'',model:'',base:''}}};
const TOOLS=[['chat','ai_t_chat','ai_h_chat'],['fix','ai_t_fix','ai_h_fix'],['role','ai_t_role','ai_h_role'],['sent','ai_t_sent',''],['story','ai_t_story',''],['gram','ai_t_gram','ai_h_gram'],['quiz','ai_t_quiz',''],['wexp','ai_t_wexp','h_ln']];
const SC=['cafe','airport','doctor','job','shop','hotel'];
let tool='chat',hist=[],scen='';
function level(){const L=R.P().learned,o={};R.allC().forEach(c=>{if(L[c]){const l=D.sk.lvl[D.sk.cu[c]];o[l]=1}});return R.LV.filter(l=>o[l]).pop()||'A1'}
function sys(){const s=EN[ST.src],t=EN[ST.tgt],lv=level();
  const base=`You are a friendly, concise language tutor. The learner speaks ${s} and is learning ${t} (level about ${lv}). Write explanations in ${s}; write all ${t} examples in ${t} (add a ${s} translation after each). Keep answers short and well organised.`;
  const per={chat:`Have a simple conversation in ${t} at level ${lv}; after each learner message reply in ${t}, then briefly correct mistakes in ${s}.`,fix:`The user will paste a text in ${t}. Return the corrected text, then list the corrections with short explanations in ${s}.`,role:`Role-play the scenario "${scen}" in ${t} at level ${lv}. Stay in character, keep turns short, and give gentle corrections in ${s} at the end of your turn.`,sent:`Write 5 natural example sentences in ${t} about the word or topic the user gives, each with a ${s} translation.`,story:`Write a short story (6-8 sentences) in ${t} at level ${lv} about the user's topic, then a ${s} translation and 5 key words.`,gram:`Explain the grammar topic the user gives for a ${s} speaker learning ${t}: rule, 3 examples, common mistakes.`,quiz:`Create a mini quiz of 5 multiple-choice questions in ${t} (level ${lv}) on the user's topic; put the answer key at the end.`,wexp:`Explain the word or phrase the user gives: meaning in ${s}, pronunciation hint, part of speech, 3 examples in ${t} with translations, and a memory trick.`};
  return base+' '+per[tool]}
async function call(msgs){
  const c=cfg();if(!c.key)throw new Error('nokey');const s=sys();
  if(c.prov==='gemini'){const r=await K.get('net').fetch(`https://generativelanguage.googleapis.com/v1beta/models/${c.model||'gemini-2.0-flash'}:generateContent?key=${encodeURIComponent(c.key)}`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({systemInstruction:{parts:[{text:s}]},contents:msgs.map(m=>({role:m.r==='a'?'model':'user',parts:[{text:m.t}]}))})});const j=await r.json();if(!r.ok)throw new Error(j.error&&j.error.message||r.status);return j.candidates[0].content.parts.map(p=>p.text).join('')}
  if(c.prov==='openai'){const r=await K.get('net').fetch((c.base||'https://api.openai.com/v1').replace(/\/$/,'')+'/chat/completions',{method:'POST',headers:{'content-type':'application/json',authorization:'Bearer '+c.key},body:JSON.stringify({model:c.model||'gpt-4o-mini',messages:[{role:'system',content:s},...msgs.map(m=>({role:m.r==='a'?'assistant':'user',content:m.t}))]})});const j=await r.json();if(!r.ok)throw new Error(j.error&&j.error.message||r.status);return j.choices[0].message.content}
  const r=await K.get('net').fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':c.key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify({model:c.model||'claude-haiku-4-5-20251001',max_tokens:1500,system:s,messages:msgs.map(m=>({role:m.r==='a'?'assistant':'user',content:m.t}))})});const j=await r.json();if(!r.ok)throw new Error(j.error&&j.error.message||r.status);return j.content.map(x=>x.text||'').join('')}
const fmt=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
function open(){
  const c=cfg(),cur=TOOLS.find(x=>x[0]===tool);
  v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>🤖 ${esc(T('ai_t'))}</h2></div>
  <details class="card" ${c.key?'':'open'}><summary>🔑 ${esc(T('ai_key'))}</summary><div class="mu sm" style="margin:8px 0">${esc(T('ai_keyh'))}</div><select id="pv"><option value="gemini" ${c.prov==='gemini'?'selected':''}>Gemini</option><option value="openai" ${c.prov==='openai'?'selected':''}>${esc(T('ai_compat'))}</option><option value="anthropic" ${c.prov==='anthropic'?'selected':''}>Anthropic</option></select><input type="text" id="ky" placeholder="${esc(T('ai_key'))}" value="${esc(c.key)}" style="margin-top:8px" autocomplete="off"><input type="text" id="md" placeholder="${esc(T('ai_model'))}" value="${esc(c.model)}" style="margin-top:8px"><input type="text" id="bu" placeholder="${esc(T('ai_base'))}" value="${esc(c.base)}" style="margin-top:8px"><div class="row" style="margin-top:8px"><button class="btn sm" id="sv">${esc(T('ai_save'))}</button><button class="btn s sm" id="fg">${esc(T('ai_forget'))}</button></div><div class="mu sm" style="margin-top:6px">${esc(T('ai_priv'))}</div></details>
  <div class="chips">${TOOLS.map(([k,t])=>`<button class="chip ${k===tool?'on':''}" data-t="${k}">${esc(T(t))}</button>`).join('')}</div>
  ${tool==='role'?`<div class="chips">${SC.map(s=>`<button class="chip ${scen===s?'on':''}" data-s="${s}">${esc(T('ai_sc_'+s))}</button>`).join('')}</div>`:''}
  <div id="ms">${hist.length?hist.map(m=>`<div class="card" style="${m.r==='u'?'background:var(--acs)':''}">${fmt(m.t)}</div>`).join(''):`<div class="card mu">${esc(cur[2]&&T(cur[2])!==cur[2]?T(cur[2]):T('ai_empty'))}</div>`}</div>
  <div class="row"><input type="text" id="in" placeholder="${esc(T('ai_ph'))}"><button class="btn sm" id="sd">➤</button></div>`;
  const q=x=>v().querySelector(x);q('#bk').onclick=R.home;
  const sv=()=>{try{localStorage.setItem(KEY,JSON.stringify({prov:q('#pv').value,key:q('#ky').value.trim(),model:q('#md').value.trim(),base:q('#bu').value.trim()}))}catch(e){}};
  q('#sv').onclick=()=>{sv();q('#sv').textContent='✓'};q('#fg').onclick=()=>{try{localStorage.removeItem(KEY)}catch(e){}open()};
  v().onclick=e=>{const t=e.target.closest('[data-t]'),s=e.target.closest('[data-s]');if(t){tool=t.dataset.t;hist=[];open()}else if(s){scen=s.dataset.s;hist=[];open()}};
  const send=async()=>{const i=q('#in'),txt=i.value.trim();if(!txt)return;if(tool==='role'&&!scen){scen=SC[0]}hist.push({r:'u',t:txt});i.value='';
    q('#ms').innerHTML+=`<div class="card mu">${esc(T('ai_think'))}</div>`;
    try{const a=await call(hist.slice(-12));hist.push({r:'a',t:a})}catch(er){hist.push({r:'a',t:er.message==='nokey'?T('ai_keyh'):T('ai_net')+' ('+er.message+')'})}open();scrollTo(0,document.body.scrollHeight)};
  q('#sd').onclick=send;q('#in').onkeydown=e=>{if(e.key==='Enter')send()}}
R.tiles.push({icon:'🤖',label:()=>T('ai_t'),open});
})();
