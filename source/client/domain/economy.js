(function(root,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else root.K.provide('economy',a)})(typeof window!=='undefined'?window:globalThis,function(){
  /* Pure coin economy: 10 XP = 1 coin; purchases are rejected when balance is short. */
  const XP_PER_COIN=10;
  const earned=prog=>Object.values(prog||{}).reduce((a,p)=>a+Math.floor(((p&&p.xp)||0)/XP_PER_COIN),0);
  const balance=(prog,shop)=>earned(prog)-((shop&&shop.spent)||0);
  function buy(shop,prog,id,price){const s=Object.assign({spent:0,own:{},th:''},shop);s.own=Object.assign({},s.own);if(s.own[id])return{ok:true,shop:s,already:true};if(balance(prog,s)<price)return{ok:false,err:'coins',shop:s};s.spent+=price;s.own[id]=1;return{ok:true,shop:s}}
  return{XP_PER_COIN,earned,balance,buy};
});
