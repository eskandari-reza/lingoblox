(function(root,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else root.K.provide('merge',a)})(typeof window!=='undefined'?window:globalThis,function(){
  /* Pure conflict resolution for cross-device progress: union of learned words, per-word best box, max xp, latest streak. */
  function mergeLang(a,b){a=a||{};b=b||{};const learned=Object.assign({},a.learned,b.learned),srs=Object.assign({},a.srs);
    for(const c in (b.srs||{})){const x=srs[c],y=b.srs[c];if(!x)srs[c]=y;else if(x[4]!=null&&y[4]!=null&&x[4]!==y[4]){if(y[4]>x[4])srs[c]=y}else if(y[0]>x[0]||(y[0]===x[0]&&y[1]>x[1]))srs[c]=y}
    const newer=(a.last||'')>=(b.last||'')?a:b;
    return{learned,srs,xp:Math.max(a.xp||0,b.xp||0),streak:newer.streak||0,last:newer.last||'',nt:newer.nt||{d:'',n:0}}}
  function mergeProg(a,b){const out={};new Set([...Object.keys(a||{}),...Object.keys(b||{})]).forEach(l=>{out[l]=mergeLang((a||{})[l],(b||{})[l])});return out}
  return{mergeLang,mergeProg};
});
