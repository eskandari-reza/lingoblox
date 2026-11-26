(function(root,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else root.K.provide('srs',a)})(typeof window!=='undefined'?window:globalThis,function(){
  /* Pure spaced-repetition rules: FSRS-4.5 (power-law forgetting, difficulty/stability model) with default parameters.
     No DOM, no storage, no clock: today (integer day) is injected.
     Entry layout (backward compatible with the old Leitner [box,due]): [box, due, S, D, last, lapses]
       box = coarse 1..6 bucket of the interval (merge / "learned" / UI use it); due = day number;
       S = stability (days to 90% recall), D = difficulty 1..10, last = day of last review, lapses = times forgotten.
     Grades: 0 again, 1 hard, 2 good, 3 easy. */
  const BOX=[0,1,2,4,8,16,32];
  const W=[0.4872,1.4003,3.7145,13.8206,5.1618,1.2298,0.8975,0.031,1.6474,0.1367,1.0461,2.1072,0.0793,0.3246,1.587,0.2272,2.8755];
  const DECAY=-0.5,FACTOR=19/81,RETENTION=0.9,MAXI=365;
  const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
  const d0=g=>clamp(W[4]-(g+1-3)*W[5],1,10);
  const boxOf=i=>{let b=1;for(let k=1;k<BOX.length;k++)if(i>=BOX[k])b=k;return b};
  const ivl=S=>clamp(Math.round(S/FACTOR*(Math.pow(RETENTION,1/DECAY)-1)),1,MAXI);
  const R=(t,S)=>Math.pow(1+FACTOR*Math.max(0,t)/Math.max(.01,S),DECAY);
  /** normalise any stored entry (legacy [box,due] or full) to {S,D,last,lapses,due} */
  function parse(e,today){
    if(!e)return null;
    if(e.length>=5)return{S:e[2],D:e[3],last:e[4],lapses:e[5]||0,due:e[1]};
    const box=e[0]||1,I=BOX[Math.min(6,Math.max(1,box))];return{S:Math.max(.5,I),D:5,last:e[1]-I,lapses:0,due:e[1]}}
  /** probability of recall today (0..1) */
  function retrievability(e,today){const s=parse(e,today);return s?R(today-s.last,s.S):0}
  function grade(entry,g,today){
    const s=parse(entry,today);let S,D,lapses=0;
    if(!s){S=W[g];D=d0(g);if(g===0){S=W[0]}}
    else{const r=R(today-s.last,s.S);lapses=s.lapses;
      D=clamp(W[7]*d0(2)+(1-W[7])*(s.D-W[6]*(g+1-3)),1,10);
      if(g===0){lapses++;S=Math.min(s.S,W[11]*Math.pow(s.D,-W[12])*(Math.pow(s.S+1,W[13])-1)*Math.exp(W[14]*(1-r)))}
      else{const hp=g===1?W[15]:1,eb=g===3?W[16]:1;S=s.S*(1+Math.exp(W[8])*(11-s.D)*Math.pow(s.S,-W[9])*(Math.exp(W[10]*(1-r))-1)*hp*eb)}}
    S=clamp(S,.1,36500);
    const I=g===0?1:Math.max(g===1?1:2,ivl(S));
    return{entry:[boxOf(I),today+I,+S.toFixed(3),+D.toFixed(3),today,lapses],learned:g>0&&I>=4}}
  const isDue=(entry,today)=>!!entry&&entry[1]<=today;
  /** days until retrievability drops to `p` (default 0.7): sort key for "weakest first" */
  function weakness(entry,today){return 1-retrievability(entry,today)}
  return{BOX,grade,isDue,retrievability,weakness,parse,ivl,W};
});
