/* KERNEL: dependency-injection container + event bus + module registry. No knowledge of any feature. */
(()=>{
const reg={},bus={},mods=[];
const K=window.K={
  provide(name,impl){if(reg[name])throw new Error('duplicate service '+name);reg[name]=impl;return impl},
  get(name){if(!(name in reg))throw new Error('missing service '+name);return reg[name]},
  has:n=>n in reg,
  on(ev,fn){(bus[ev]||(bus[ev]=[])).push(fn);return()=>{bus[ev]=bus[ev].filter(x=>x!==fn)}},
  emit(ev,data){(bus[ev]||[]).slice().forEach(fn=>{try{fn(data)}catch(e){console.error('[bus]',ev,e)}})},
  /* feature modules declare id + deps (service names) and are initialised after the services exist */
  module(m){mods.push(m)},
  start(){mods.forEach(m=>{(m.deps||[]).forEach(d=>{if(!(d in reg))throw new Error('module '+m.id+' needs service '+d)});try{m.init&&m.init()}catch(e){console.error('[module]',m.id,e)}});K.emit('kernel:ready')}
};
})();
