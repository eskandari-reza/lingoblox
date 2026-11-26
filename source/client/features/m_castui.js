/* feature: shows the cast characters (Welcome / Guide / Review roles) on Welcome, Home and review-done screens via kernel events. Emoji only: no WebGL needed. */
(()=>{
const st=K.get('storage'),EMO={leo:'🦁',mimi:'🐱',bani:'🐰',pingo:'🐧'},DEF={welcome:'leo',guide:'mimi',coach:'bani',review:'pingo',listening:'leo'};
const who=r=>EMO[(st.json('rm2cast',{})[r])||DEF[r]]||'🦁';
const chip=(r)=>{const d=document.createElement('div');d.className='castchip';d.textContent=who(r);d.style.cssText='font-size:44px;text-align:center;line-height:1.1;margin:6px 0;animation:castb 2.4s ease-in-out infinite';return d};
const css=document.createElement('style');css.textContent='@keyframes castb{50%{transform:translateY(-6px)}}';document.head.appendChild(css);
K.on('welcome',({el})=>{const h=el.querySelector('.logo');if(h)h.insertAdjacentElement('afterend',chip('welcome'))});
K.on('home',({view})=>{if(!view.querySelector('.castchip')&&st.json('rm2pal',{}).on===false){const c=chip('guide');c.style.fontSize='34px';c.style.textAlign='start';view.prepend(c)}});
K.on('review:done',({view})=>{const b=view.querySelector('.big');if(b)b.textContent=who('review')+' 🎉'});
})();
