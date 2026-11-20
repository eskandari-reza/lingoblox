/* INFRA/net: the single gateway for third-party HTTP calls from features (AI providers, media, lazy assets). Easy to mock, one place for timeouts. */
(()=>{K.provide('net',{fetch:(u,o)=>fetch(u,o),json:async(u,o)=>{const r=await fetch(u,o);return r.json()}})})();
