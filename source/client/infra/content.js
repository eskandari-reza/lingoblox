/* INFRA/content: the app shell knows nothing about the data. Content (skeleton, language packs, lazy extras, 3D engine) is a separate,
   versioned package described by data/manifest.json. Resolution order per item: embedded (single-file build) -> IndexedDB cache
   (valid while its hash matches the manifest) -> network from contentBase. Offline: any cached copy is used even if the manifest is unreachable. */
(()=>{
const cfg=K.get('config'),net=K.get('net');
const base=()=>{let b=cfg.get('contentBase')||'data/';return b.endsWith('/')?b:b+'/'};
let man=null,db=null;
const idb=()=>db||(db=new Promise(ok=>{try{const r=indexedDB.open('rm2content',1);r.onupgradeneeded=()=>r.result.createObjectStore('c');r.onsuccess=()=>ok(r.result);r.onerror=()=>ok(null)}catch(e){ok(null)}}));
const idbGet=async k=>{const d=await idb();if(!d)return null;return new Promise(ok=>{try{const q=d.transaction('c').objectStore('c').get(k);q.onsuccess=()=>ok(q.result||null);q.onerror=()=>ok(null)}catch(e){ok(null)}})};
const idbPut=async(k,v)=>{const d=await idb();if(!d)return;try{d.transaction('c','readwrite').objectStore('c').put(v,k)}catch(e){}};
async function manifest(){if(man)return man;man=(async()=>{try{const r=await net.fetch(base()+'manifest.json',{cache:'no-cache'});if(r.ok)return await r.json()}catch(e){}return null})();return man}
async function gunzipB64(b){const bin=atob(b),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return await new Response(new Blob([u]).stream().pipeThrough(new DecompressionStream('gzip'))).text()}
/** name: 'lang/de' | 'skeleton' | 'x3d.js' -> file text */
async function text(name){
  const file=/\.(js|json)$/.test(name)?name:name+'.json',ek=name.replace(/\.js$/,'');
  if(window.__EMB&&window.__EMB[ek])return await gunzipB64(window.__EMB[ek]);
  const m=await manifest(),want=m&&m.f&&m.f[file]?m.f[file][0]:null,c=await idbGet(file);
  if(c&&(!want||c.h===want))return c.t;
  try{const r=await net.fetch(base()+file);if(!r.ok)throw new Error(file+' '+r.status);const t=await r.text();idbPut(file,{h:want||'',t});return t}
  catch(e){if(c)return c.t;throw e}
}
K.provide('content',{text,json:async n=>JSON.parse(await text(n)),manifest,base});
})();
