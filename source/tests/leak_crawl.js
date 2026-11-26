const {chromium}=require('playwright');
const SRC=(process.argv[2]||'fa en ar az de es fr hi it ja ko pt ru tr zh').split(' '),TGT=process.argv[3]||'de';
const AR=/[؀-ۿ]/,CY=/[Ѐ-ӿ]/,HAN=/[一-鿿]/,KANA=/[぀-ヿ]/,HANG=/[가-힯]/,DEV=/[ऀ-ॿ]/;
const PER=/[\u067E\u0686\u0698\u06AF\u06A9\u06CC]/;const SC={ar:AR,per:PER,cy:CY,cjk:/[一-鿿぀-ヿ]/,hang:HANG,dev:DEV};
const own=l=>({fa:['ar','per'],ar:['ar'],ru:['cy'],ja:['cjk'],zh:['cjk'],ko:['hang'],hi:['dev']}[l]||[]);
(async()=>{const b=await chromium.launch();const out=[];
for(const src of SRC){const tgt=src===TGT?'en':TGT;
 const p=await (await b.newContext({viewport:{width:390,height:800}})).newPage();p.on('pageerror',()=>{});
 await p.goto('http://localhost:8790/');await p.waitForTimeout(800);await p.click('#go');await p.click(`.lc[data-l=${src}]`);await p.waitForTimeout(1500);await p.click(`.lc[data-l=${tgt}]`);
 await p.waitForSelector('.tile',{timeout:30000});await p.waitForTimeout(800);
 const allowed=new Set([...own(src),...own(tgt)]);
 const idx=await p.evaluate(()=>[...document.querySelectorAll('.tile')].map(t=>+t.dataset.i));const n=idx.length;
 const screens=[];
 const grab=async(name)=>{const t=await p.evaluate(()=>document.querySelector('#view')?document.querySelector('#view').innerText:document.body.innerText);const lines=t.split('\n');
   for(const ln of lines){for(const k of Object.keys(SC)){if(!allowed.has(k)&&SC[k].test(ln))out.push([src,tgt,name,k,ln.slice(0,70)])}}};
 for(const tab of ['home','days','rev','dict','set']){await p.click(`.nav [data-t=${tab}]`).catch(()=>{});await p.waitForTimeout(500);await grab('tab:'+tab)}
 for(const i of idx){await p.click('.nav [data-t=home]');await p.click(`.tile[data-i="${i}"]`);await p.waitForTimeout(700);if(await p.$('#njx'))await p.click('#njx');
   const nm=await p.evaluate(()=>document.querySelector('#view').innerText.split('\n')[0]);
   for(let j=0;j<3;j++){await grab('tile'+i+':'+nm.slice(0,18));const u=await p.$('.u,.card[data-d],.row[data-d],[data-d]');if(j==0&&u){await u.click().catch(()=>{});await p.waitForTimeout(700)}else break}}
 await p.context().close()}
const by={};out.forEach(o=>{const k=[o[0],o[2],o[3]].join('|');(by[k]=by[k]||[]).push(o[4])});
for(const k in by)console.log(k,by[k].length,JSON.stringify(by[k][0]));
console.log('TOTAL',out.length);await b.close()})();
