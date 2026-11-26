import test from 'node:test';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const r=createRequire(import.meta.url),P=r('../client/domain/pal-physics.js'),B=r('../client/domain/pal-brain.js');
const W={floor:800,left:0,right:400,platforms:[{id:'a',x:100,y:500,w:200}]};
test('gravity: body falls to the floor and lands once with impact',()=>{const b=P.body({x:50,y:100});let ev=[];for(let i=0;i<300;i++)ev.push(...P.step(b,1/60,W));assert.equal(b.y,800);assert.equal(b.onGround,true);assert.equal(ev.filter(e=>e.t==='land').length,1)});
test('one-way platform: lands on top when falling, passes through when rising',()=>{const b=P.body({x:200,y:520,vy:-1400});let landed=false;for(let i=0;i<240;i++){for(const e of P.step(b,1/60,W))if(e.t==='land')landed=true}assert.equal(b.plat,'a');assert.equal(b.y,500);assert.ok(landed)});
test('walls reflect and report',()=>{const b=P.body({x:380,y:800,onGround:true,plat:'floor',vx:300,fr:0});const ev=P.step(b,.1,W);assert.ok(ev.some(e=>e.t==='wall'));assert.ok(b.vx<0)});
test('friction: low friction slides farther (penguin belly slide)',()=>{const run=fr=>{const b=P.body({x:50,y:800,onGround:true,plat:'floor',vx:400,fr});for(let i=0;i<120;i++)P.step(b,1/60,{...W,right:5000});return b.x};assert.ok(run(1.2)>run(9)+100)});
test('held body does not move; thrown body flies',()=>{const b=P.body({x:10,y:10,held:true,vx:99});P.step(b,.1,W);assert.equal(b.x,10);b.held=false;b.vx=300;b.vy=-500;P.step(b,.1,W);assert.ok(b.x>10)});
test('planJump reaches the target platform',()=>{const b=P.body({x:50,y:800,onGround:true,plat:'floor'});const j=P.planJump(b,200,500,1,900);assert.ok(j);b.vx=j.vx;b.vy=j.vy;b.onGround=false;b.plat=null;for(let i=0;i<240&&!b.onGround;i++)P.step(b,1/60,W);assert.equal(b.plat,'a')});
test('brain: every kind decides valid actions; low energy favours naps; deterministic with seed',()=>{
  let s=1;const rng=()=>(s=(s*16807)%2147483647)/2147483647;
  for(const k of B.KINDS){const b=B.make(k,rng);for(let i=0;i<50;i++){const d=B.decide(b,{canJump:true});assert.ok(B.T[k][d.a]>0&&d.d>0)}}
  const count=(en)=>{let n=0;s=7;const b=B.make('cat',rng);for(let i=0;i<400;i++){b.energy=en;b.last='';if(['nap','loaf'].includes(B.decide(b,{}).a))n++}return n};assert.ok(count(.1)>count(1)*1.5)});

import {createRequire as _cr} from 'module';
{ const BR=_cr(import.meta.url)('../client/domain/pal-brain.js');
  const assert=(await import('node:assert')).default;
  const need=['tongue','wink','kiss','hearteyes','hipshake','booty','turnback','sulk'].filter(x=>x!=='sulk');
  for(const k of BR.KINDS)for(const a of need)assert.ok(BR.T[k][a]>0,k+':'+a);
  for(const a of need)assert.ok(BR.DUR[a],'dur '+a);
  console.log('ok funny behaviours in brain');}
