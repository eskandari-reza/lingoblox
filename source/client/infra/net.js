/* INFRA/net: the single gateway for third-party HTTP calls from features (AI providers, media, lazy assets). Easy to mock, one place for timeouts. */
(()=>{K.provide('net',{fetch:(u,o)=>fetch(u,o)})})();
