/* module: Cups — every non-game action earns points; points become trophies; leagues like Clash-of-Clans (monthly seasons, soft reset, trophy road) */
(()=>{
const R=window.RM2,{esc,ST}=R,v=()=>R.view(),A=()=>R.act,tt=k=>A().tt(k);
const ICON={view:'👁️',learn:'✅',fav:'♥',save:'🔖',share:'📤',ok:'🎯',review:'🔁',comment:'💬'};
const daysLeft=()=>{const d=new Date(),e=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,1));return Math.max(1,Math.ceil((e-d)/864e5))};
function open(){
  const c=A().cup(),L=A().LEAGUES,tot=c.cups+(c.duel||0),li=A().leagueOf(tot),lg=L[li],nx=L[li+1];
  const pct=nx?Math.round((tot-lg[2])/(nx[2]-lg[2])*100):100;
  v().innerHTML=`<div class="hd"><button class="back" id="bk">←</button><h2>${esc(tt('cp_t'))}</h2></div>
  <div class="cpc" style="background:linear-gradient(150deg,${lg[3]},#111827)"><div class="cpe">${lg[1]}</div><div class="cpn">${esc(lg[0])}</div><div class="cpt">🏆 ${tot}${c.duel?` <small>(⚔️ ${c.duel>0?'+':''}${c.duel})</small>`:''}</div>
    <div class="prog"><i style="width:${pct}%"></i></div><div class="cps">${nx?`${nx[2]-tot} ${esc(tt('cp_next'))} · ${nx[1]} ${esc(nx[0])}`:'👑'}</div></div>
  <div class="row cpm"><span>📅 ${esc(tt('cp_today'))}: <b>${c.today.n}/${A().DAYCAP}</b></span><span class="sp"></span><span>⏳ ${daysLeft()} ${esc(tt('cp_days'))}</span></div>
  <div class="card"><h3>${esc(tt('cp_how'))}</h3><div class="cpl">${Object.keys(ICON).map(k=>`<div><span>${ICON[k]}</span><b>${c.log[k]||0}</b><small>${esc(tt('cp_a_'+k))} · +${A().ACT[k]}</small></div>`).join('')}</div><div class="mu sm" style="margin-top:8px">🚫 ${esc(tt('cp_nogame'))}</div></div>
  <button class="btn" id="com" style="width:100%;margin:8px 0">🌐 ${esc(tt('so_t'))}</button>
  <div class="card"><h3>${esc(tt('cp_road'))}</h3>${L.map((l,i)=>{const got=tot>=l[2],cl=c.claimed.includes(i),rw=25+i*25;return`<div class="cpr ${got?'g':''}"><span class="cpi">${l[1]}</span><span class="sp"><b>${esc(l[0])}</b><small> 🏆 ${l[2]}</small></span>${got?(cl?'<span>✓</span>':`<button class="btn sm" data-c="${i}">${esc(tt('cp_claim'))} +${rw} XP</button>`):`<span class="mu sm">+${rw} XP</span>`}</div>`}).join('')}</div>
  ${c.hist.length?`<div class="card"><h3>${esc(tt('cp_hist'))}</h3>${c.hist.map(h=>`<div class="cpr"><span class="cpi">${L[h.lg][1]}</span><span class="sp"><b>${esc(h.s)}</b> · ${esc(L[h.lg][0])}</span><span>🏆 ${h.cups}</span></div>`).join('')}</div>`:''}`;
  v().querySelector('#bk').onclick=R.home;
  v().querySelector('#com').onclick=()=>{const t=R.tiles.find(x=>x.icon==='🌐');t&&t.open()};
  v().onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;const i=+b.dataset.c,cc=A().cup();if(cc.claimed.includes(i))return;cc.claimed.push(i);try{K.get('storage').setItem('rm2cup',JSON.stringify(cc))}catch(x){}const p=R.P();p.xp+=25+i*25;R.save();open()}}
R.tiles.push({icon:'🏆',label:()=>tt('cp_t'),open});
})();
