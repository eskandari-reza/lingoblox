/* INFRA/storage: port + adapter. Same API as localStorage, but never throws and falls back to memory (private mode, blocked storage). */
(()=>{
const mem={};let ls=null;try{ls=window.localStorage;ls.setItem('__t','1');ls.removeItem('__t')}catch(e){ls=null}
const storage={
  getItem(k){try{return ls?ls.getItem(k):(k in mem?mem[k]:null)}catch(e){return k in mem?mem[k]:null}},
  setItem(k,v){try{if(ls)ls.setItem(k,String(v));else mem[k]=String(v)}catch(e){mem[k]=String(v)}},
  removeItem(k){try{ls&&ls.removeItem(k)}catch(e){}delete mem[k]},
  keys(){try{return ls?Object.keys(ls):Object.keys(mem)}catch(e){return Object.keys(mem)}},
  json(k,d){try{const v=this.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  setJson(k,v){this.setItem(k,JSON.stringify(v))}
};
K.provide('storage',storage);
})();
