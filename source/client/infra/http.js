/* INFRA/http: API client for the gateway. Adds bearer token, timeout, uniform {ok,err} results. Never throws. */
(()=>{
const cfg=K.get('config'),st=K.get('storage');
async function req(method,path,body){
  const base=cfg.get('api').replace(/\/$/,'');if(!base)return{ok:false,err:'noapi'};
  const tok=(st.json('rm2auth',{})||{}).token,h={'content-type':'application/json'};if(tok)h.authorization='Bearer '+tok;
  try{const r=await fetch(base+path,{method,headers:h,body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(15000)});const j=await r.json().catch(()=>({}));return Object.assign({status:r.status},j,{ok:r.ok&&j.ok!==false})}
  catch(e){return{ok:false,err:'net'}}}
K.provide('http',{get:p=>req('GET',p),post:(p,b)=>req('POST',p,b),put:(p,b)=>req('PUT',p,b),del:p=>req('DELETE',p)});
})();
