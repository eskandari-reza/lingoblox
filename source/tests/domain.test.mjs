import test from 'node:test';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const r=createRequire(import.meta.url),srs=r('../client/domain/srs.js'),eco=r('../client/domain/economy.js'),mg=r('../client/domain/merge.js');
test('srs (FSRS): first grades give sensible intervals, learned flag, legacy entries upgrade',()=>{
  const a=srs.grade(undefined,0,100),g=srs.grade(undefined,2,100),e=srs.grade(undefined,3,100);
  assert.equal(a.entry[1],101);assert.ok(g.entry[1]>=103&&g.entry[1]<=105);assert.ok(e.entry[1]>g.entry[1]);assert.equal(a.learned,false);
  assert.equal(srs.grade(undefined,1,0).learned,false);
  const legacy=srs.grade([4,100],2,100);assert.ok(legacy.entry[1]>104);assert.equal(legacy.entry.length,6);
  assert.ok(srs.grade([6,0],3,0).entry[0]<=6)});
test('srs (FSRS): success on time grows stability, failure shrinks it, retrievability decays',()=>{
  let e=srs.grade(undefined,2,0).entry;const S1=e[2];e=srs.grade(e,2,e[1]).entry;assert.ok(e[2]>S1*1.5);
  const f=srs.grade(e,0,e[1]).entry;assert.ok(f[2]<e[2]);assert.equal(f[5],1);assert.equal(f[1],e[1]+1);
  const r0=srs.retrievability(e,e[4]),r1=srs.retrievability(e,e[4]+e[2]),r2=srs.retrievability(e,e[4]+e[2]*5);assert.ok(r0>.999&&Math.abs(r1-.9)<.01&&r2<r1)});
test('srs: due',()=>{assert.equal(srs.isDue([1,5],5),true);assert.equal(srs.isDue([1,6],5),false);assert.equal(srs.isDue(undefined,5),false)});
test('economy: 10xp=1coin, buy deducts once, rejects short balance',()=>{
  const prog={de:{xp:495},en:{xp:10}};assert.equal(eco.earned(prog),50);
  const a=eco.buy({},prog,'t',40);assert.equal(a.ok,true);assert.equal(eco.balance(prog,a.shop),10);
  assert.equal(eco.buy(a.shop,prog,'t',40).already,true);assert.equal(eco.buy(a.shop,prog,'x',999).ok,false);assert.equal(eco.buy({},{},'t',1).ok,false)});
test('merge: union learned, best box, max xp, newest streak',()=>{
  const a={de:{learned:{1:1},srs:{1:[2,10],2:[1,5]},xp:50,streak:3,last:'2026-01-02'}},b={de:{learned:{2:1},srs:{1:[3,9]},xp:40,streak:1,last:'2026-01-01'},fa:{learned:{},srs:{},xp:5,streak:0,last:''}};
  const m=mg.mergeProg(a,b);assert.deepEqual(Object.keys(m.de.learned).sort(),['1','2']);assert.deepEqual(m.de.srs[1],[3,9]);assert.equal(m.de.xp,50);assert.equal(m.de.streak,3);assert.ok(m.fa)});
test('merge is idempotent and commutative on xp/learned',()=>{const a={x:{learned:{1:1},srs:{},xp:3}},b={x:{learned:{2:1},srs:{},xp:9}};
  assert.deepEqual(mg.mergeProg(a,b).x.learned,mg.mergeProg(b,a).x.learned);assert.deepEqual(mg.mergeProg(mg.mergeProg(a,b),b),mg.mergeProg(a,b))});
