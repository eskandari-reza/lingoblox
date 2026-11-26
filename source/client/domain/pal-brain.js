(function(root,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else root.K.provide('palbrain',a)})(typeof window!=='undefined'?window:globalThis,function(){
  /* Pure behaviour selection ("utility AI"): species personality tables x needs -> next intent. Deterministic given rng. */
  const T={ // action:[weight, minEnergy, kind-specific]
    cat:{walk:3,sit:1.5,groom:2,nap:2.2,wiggle:1.6,tailchase:.7,stretch:1.1,yawn:.9,zoom:1.1,jump:2.2,hop:0,arch:.25,loaf:1.2,purr:.5,wave:.5},
    penguin:{walk:3.2,slide:2.6,flap:1.2,shiver:.8,fish:1.2,jump:1.2,bow:.6,dance:.9,nap:1.2,wave:.6,yawn:.6},
    bunny:{hop:4.2,thump:1,nibble:1.6,binky:1.5,groom:1.1,sit:1,nap:1.3,jump:1.6,stretch:.5,wave:.5},
    lion:{walk:3,roar:1.3,manes:1,sit:1,groom:1,nap:1.6,stretch:1,yawn:.8,jump:1.2,wave:.6},
    fox:{walk:3,dive:1.7,groom:1,yawn:.8,jump:2.4,zoom:1.2,nap:1.4,purr:.4,wave:.6,stretch:.8},
    bear:{walk:3,wave:1.2,hug:1,eat:1,dance:1.2,nap:1.4,jump:1,yawn:.8,think:.7,sit:1},
    monkey:{walk:2.6,jump:2.6,scratch:1.8,dance:1.2,cheer:0,eat:1,hop:0,nap:1,sit:.8,wave:.8,zoom:1.4,wiggle:.8},
    donkey:{walk:3,bray:1.6,eat:1.2,nap:1.4,sit:1,yawn:.8,jump:1,wave:.5,stretch:.8},
    chick:{walk:3,peck:2,flap:1.4,hop:2,nap:1.2,sit:1,wave:.6,jump:1.4,yawn:.5},
    dragon:{fly:3.2,walk:1.4,breathe:1.6,flap:.8,jump:1.8,nap:1.4,stretch:1,yawn:.8,roar:0,sit:1,dance:.7},
    dino:{walk:3,stomp:1.7,roar:1.4,eat:1,nap:1.4,yawn:.8,jump:.8,sit:1,dance:.7},
    turtle:{lookaround:2,walk:2.4,hide:1.8,nap:2,sit:1.6,yawn:1,eat:1.2,wave:.6,stretch:.6},
    puppy:{walk:3,beg:1.6,zoom:1.8,jump:2,wiggle:1.4,sit:1.2,nap:1.4,hop:0,tailchase:1.4,wave:.8,groom:.6},
    ghost:{walk:2.4,wobble:1.6,spin:1.4,jump:2,think:.8,wave:.8,nap:.8,dance:1},
    llama:{walk:3,spit:1.2,eat:1.2,nap:1.4,sit:1,yawn:.8,jump:1.2,wave:.7,sway:1,stretch:.8},
    koala:{sit:2.4,cuddle:2,nap:3,yawn:1.2,eat:1.2,walk:1.2,wave:.8,sway:1,stretch:.8},
    giraffe:{walk:3,reach:2,eat:1,nap:1.2,sit:.8,yawn:.8,jump:.8,wave:.8,stretch:1,sway:.8},
    sloth:{sit:2.6,slowwave:2.2,nap:3.4,yawn:1.6,eat:1.2,walk:.9,stretch:1.2,wave:.5},
    pig:{walk:3,oink:2,eat:1.6,nap:1.4,sit:1,jump:1.3,dance:1.2,bounce:1.2,wave:.7,yawn:.6},
    gorilla:{walk:2.6,chestbeat:2,eat:1.2,flex:1.4,nap:1.2,sit:1,jump:1,wave:.8,dance:1,yawn:.6},
    pelican:{walk:2.6,scoop:2,flap:1.4,fly:1.6,nap:1.2,sit:1,wave:.7,yawn:.6,jump:1},
    ladybug:{fly:3.4,walk:2,buzz:2,hop:1,nap:1,sit:1,wave:.8,jump:1.6,twirl:1},
    dodo:{walk:3,flap:1.6,peck:1.4,eat:1.2,nap:1.3,sit:1,wave:.7,jump:1,yawn:.6,bounce:1},
    clownfish:{walk:2.4,bubbles:2,spin:1.6,wobble:1.4,jump:2.2,dance:1.2,wave:.9,nap:.8,twirl:1},
    goldfish:{walk:2.4,bubbles:2,splash:2,spin:1.4,wobble:1.2,jump:2.2,dance:1.4,wave:.9,nap:.8,twirl:1.2,cutepose:.8},
    dolphin:{walk:2.4,dolphinjump:2.2,spin:1.6,wobble:1,jump:2.2,dance:1.4,wave:1,nap:.8,twirl:1.4,laugh:1},
    shrimp:{walk:2.6,flick:2,jump:2.4,dance:1.4,wave:1,nap:.9,sit:.8,twirl:1,bounce:1.4},
    seahorse:{walk:1.6,bob:3,wobble:1,sway:1.6,nap:1.2,wave:.8,spin:.8,cutepose:1},
    crab:{walk:3,pinch:2.4,dance:1.4,wave:1,jump:1,nap:1,sit:.8,bounce:1,taunt:.6},
    hippo:{walk:2,hippoyawn:2,eat:1.4,nap:2,sit:1.4,wave:.8,bounce:1,sway:1,stretch:.8},
    beetle:{walk:3,charge:2,flex:1.2,nap:1,sit:1,jump:1,wave:.7,dance:.8,thumbsup:.6},
    grasshopper:{hop:2.5,leap:2.6,walk:1.4,jump:2.6,dance:1,nap:1,sit:.8,wave:.8,twirl:1,bounce:1},
    human:{walk:3,wave:1.4,dance:1.4,think:1,sit:1,nap:.9,stretch:1,yawn:.8,jump:1.2,cheer:.9,bow:.8,twirl:.8,pose:1.2,thumbsup:1,sway:.8,robot:.5,cutepose:.6}
  };
  /* human-like funny repertoire shared by every species (small weights; species add spice) */
  const FUNNY={tongue:.55,raspberry:.4,wink:.5,hearteyes:.45,kiss:.45,hipshake:.55,booty:.4,shrug:.3,facepalm:.25,clap:.4,flex:.3,peekaboo:.4,dizzy:.25,salute:.25,sneeze:.3,shy:.3,taunt:.35,bored:.4,turnback:.2,twirl:.35,bounce:.45,jumpjack:.3,headbang:.3,thumbsup:.25,pout:.25,shake:.25,sway:.4,cutepose:.35,tiptoe:.3,pose:.3,robot:.2};
  const BIAS={monkey:{raspberry:2,taunt:2,hipshake:1.8,booty:2},donkey:{shrug:2,bored:2,facepalm:1.6},chick:{shy:1.6,hipshake:1.6,wink:1.4},dragon:{flex:1.8,taunt:1.5,sneeze:2,hearteyes:1.4},dino:{flex:1.6,sneeze:1.8,facepalm:1.8,bored:1.4},turtle:{bored:2.2,shy:1.8,sneeze:1.2},puppy:{hearteyes:2,kiss:1.8,hipshake:1.8,wink:1.4,clap:1.6},cat:{taunt:2,booty:1.6,bored:1.8,turnback:2},penguin:{hipshake:2.2,clap:1.8,salute:2},bunny:{shy:2.4,peekaboo:2,kiss:1.5,hearteyes:1.6},lion:{flex:3,taunt:1.5,salute:1.6},fox:{wink:2.2,booty:1.8,tongue:1.6},bear:{hug:1,clap:1.6,hearteyes:1.8,sneeze:1.5},ghost:{peekaboo:2.8,dizzy:2,raspberry:1.8}};
  for(const k in T){const bi=BIAS[k]||{};for(const a in FUNNY)if(T[k][a]==null)T[k][a]=FUNNY[a]*(bi[a]||1)}
  const KINDS=Object.keys(T);
  const DUR={dolphinjump:[1.6,1.6],flick:[1.6,1.6],bob:[3,3],pinch:[2.4,2.4],hippoyawn:[3,3],charge:[2.4,2.4],leap:[2,2],bubbles:[2.8,2.8],splash:[1.8,1.8],twirl:[1.6,1.6],bounce:[2.4,2.4],jumpjack:[2.4,2.4],headbang:[2.4,2.4],thumbsup:[1.8,1.8],pout:[2,2],shake:[1.6,1.6],sway:[3.6,3.6],cutepose:[2.4,2.4],tiptoe:[2.6,2.6],pose:[2.4,2.4],robot:[3,3],spit:[2.2,2.2],cuddle:[3.4,3.4],reach:[3.2,3.2],slowwave:[4,4],oink:[1.8,1.8],chestbeat:[2.8,2.8],scoop:[3,3],buzz:[2.2,2.2],walk:[2,5],sit:[3,6],groom:[3.2,3.2],nap:[8,16],wiggle:[1.1,1.1],tailchase:[2.6,2.6],stretch:[3,3],yawn:[2.6,2.6],zoom:[3,4],jump:[.2,.2],hop:[3,6],arch:[1.6,1.6],loaf:[8,14],purr:[2.8,2.8],wave:[2.2,2.2],slide:[2.5,3.5],flap:[1.8,1.8],shiver:[2.4,2.4],fish:[2.2,2.2],bow:[1.8,1.8],dance:[4,4],thump:[1.6,1.6],nibble:[2.6,2.6],binky:[1.1,1.1],roar:[2.4,2.4],manes:[1.8,1.8],dive:[1.2,1.2],hug:[2.2,2.2],eat:[2.4,2.4],wobble:[2,2],spin:[1,1],think:[2.6,2.6],tongue:[2,2],raspberry:[1.8,1.8],wink:[1.4,1.4],hearteyes:[2.8,2.8],kiss:[2.4,2.4],hipshake:[3.2,3.2],booty:[3.2,3.2],shrug:[1.8,1.8],facepalm:[2.4,2.4],clap:[2.2,2.2],flex:[2.4,2.4],peekaboo:[3,3],dizzy:[2.8,2.8],salute:[2,2],sneeze:[2,2],shy:[2.6,2.6],taunt:[2.6,2.6],bored:[3,3],turnback:[3.4,3.4],faint:[3,3],sulk:[99,99],scratch:[3,3],bray:[2.6,2.6],peck:[2.2,2.2],breathe:[2.6,2.6],stomp:[2.4,2.4],hide:[3.2,3.2],beg:[3,3],fly:[9,14],lookaround:[4.2,4.2]};
  function make(kind,rng){return{kind:KINDS.includes(kind)?kind:'cat',rng:rng||Math.random,energy:.9,fun:.5,last:'',since:0}}
  function tick(b,dt,idle){b.energy=Math.max(0,Math.min(1,b.energy-dt*(idle?-.004:.004)));b.fun=Math.max(0,b.fun-dt*.003)}
  /** ctx:{canJump:bool,toy:bool,sleepy:bool} -> {a:'walk',d:seconds} */
  function decide(b,ctx){
    ctx=ctx||{};const t=T[b.kind],w=[];let sum=0;
    for(const a in t){let x=t[a];if(!x)continue;
      if(a==='jump'&&!ctx.canJump)x=0;
      if(a==='nap'||a==='loaf')x*=(1.6-b.energy)*(b.energy<.35?3:1);
      if(a==='zoom'||a==='tailchase'||a==='dance'||a==='slide'||a==='binky')x*=(.4+b.energy)*(1.2-b.fun*.5);
      if(a===b.last)x*=.25;
      if(ctx.sleepy&&(a==='nap'||a==='loaf'))x*=4;
      if(x>0){w.push([a,x]);sum+=x}}
    let r=b.rng()*sum,pick=w[0][0];for(const [a,x] of w){r-=x;if(r<=0){pick=a;break}}
    b.last=pick;const d=DUR[pick]||[2,4];if(pick==='nap'||pick==='loaf'){b.energy=Math.min(1,b.energy+.0)}
    if(pick==='nap'||pick==='loaf')b.energy=Math.min(1,b.energy+.35);
    b.fun=Math.min(1,b.fun+.05);
    return{a:pick,d:d[0]+(d[1]-d[0])*b.rng()};
  }
  return{KINDS,T,DUR,make,tick,decide};
});
