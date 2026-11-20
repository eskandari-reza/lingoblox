(function(root,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else root.K.provide('palphysics',a)})(typeof window!=='undefined'?window:globalThis,function(){
  /* Pure 2D physics for on-screen companions. Pixels, seconds, y grows downward. Bodies stand on one-way platforms (rect tops) and a floor.
     No DOM: the feature layer feeds platforms (from the page layout) and applies the results. */
  const G=2300;
  const body=(o)=>Object.assign({x:0,y:0,vx:0,vy:0,w:60,onGround:false,plat:null,held:false,rot:0,vrot:0,fr:9,bounce:.0,gs:1,dir:1,r:0},o);
  /** advance one body. world={floor:number,left:number,right:number,platforms:[{id,x,y,w}]} -> events [{t:'land',v},{t:'wall',side}] */
  function step(b,dt,world){
    const ev=[];if(b.held){b.vx=0;b.vy=0;b.onGround=false;b.plat=null;return ev}
    const py=b.y;
    if(!b.onGround){b.vy+=G*b.gs*dt}
    b.x+=b.vx*dt;b.y+=b.vy*dt;
    const hw=b.w/2;
    if(b.x<world.left+hw){b.x=world.left+hw;if(b.vx<0){ev.push({t:'wall',side:-1,v:-b.vx});b.vx=-b.vx*.45}}
    if(b.x>world.right-hw){b.x=world.right-hw;if(b.vx>0){ev.push({t:'wall',side:1,v:b.vx});b.vx=-b.vx*.45}}
    if(b.fly){b.onGround=false;b.plat=null;if(b.y>world.floor-4){b.y=world.floor-4;if(b.vy>0)b.vy=0}b.rot*=Math.exp(-6*dt);return ev}
    if(b.onGround&&b.plat){ // standing: still supported?
      const p=world.platforms.find(q=>q.id===b.plat);
      if(p&&b.x>p.x-hw*.35&&b.x<p.x+p.w+hw*.35){b.y=p.y;b.vy=0}else if(b.plat==='floor'){b.y=world.floor;b.vy=0}else{b.onGround=false;b.plat=null}
    }
    if(!b.onGround){
      let best=null;
      if(b.vy>=0){for(const p of world.platforms){if(py<=p.y+2&&b.y>=p.y&&b.x>p.x-hw*.35&&b.x<p.x+p.w+hw*.35){if(!best||p.y<best.y)best=p}}}
      if(best){b.y=best.y;b.plat=best.id}else if(b.y>=world.floor){b.y=world.floor;b.plat='floor'}
      if(b.plat&&(best||b.y>=world.floor)){const v=b.vy;b.onGround=true;
        if(b.bounce>0&&v>260){b.vy=-v*b.bounce;b.onGround=false;b.plat=null}else b.vy=0;
        if(v>120)ev.push({t:'land',v})}
    }
    if(b.onGround){const k=Math.exp(-b.fr*dt);b.vx*=k;if(Math.abs(b.vx)<3)b.vx=0}
    b.rot*=Math.exp(-6*dt);
    return ev;
  }
  /** ballistic launch velocity to reach (tx,ty) feet-position from b; returns null if too far for maxVx */
  function planJump(b,tx,ty,jump,maxVx){
    const rise=Math.max(70,(b.y-ty)+60)*jump,vy=-Math.sqrt(2*G*b.gs*rise),tUp=-vy/(G*b.gs),apex=b.y-rise,fall=Math.max(1,ty-apex),T=tUp+Math.sqrt(2*fall/(G*b.gs));
    const vx=(tx-b.x)/T;if(Math.abs(vx)>(maxVx||520))return null;return{vx,vy,T};
  }
  /** nearest platform reachable by a jump (higher or lower), excluding the one we stand on */
  function pickTarget(b,platforms,rng,maxRise,maxVx){
    const c=[];for(const p of platforms){if(p.id===b.plat)continue;const tx=Math.max(p.x+b.w*.4,Math.min(p.x+p.w-b.w*.4,b.x+(rng()-.5)*60));const rise=b.y-p.y;if(rise>maxRise||rise<-420)continue;const j=planJump(b,tx,p.y,1,maxVx);if(j)c.push({p,tx,j,s:Math.abs(rise)+Math.abs(tx-b.x)*.4})}
    c.sort((a,z)=>a.s-z.s);return c.length?c[Math.floor(rng()*Math.min(3,c.length))]:null;
  }
  return{G,body,step,planJump,pickTarget};
});
