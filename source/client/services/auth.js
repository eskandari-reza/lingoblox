/* SERVICES/auth: sign-in with Google (Google Identity Services) or any OAuth2 network (Discord, X, GitHub, Microsoft, Twitch, Spotify) -> gateway -> session token kept in storage.
   Without a gateway, Discord can still sign in locally (implicit grant) so the profile/avatar work offline-first. */
(()=>{
const http=K.get('http'),st=K.get('storage'),cfg=K.get('config'),net=K.get('net');
const state=()=>st.json('rm2auth',null);
const local=()=>st.json('rm2lid',null);
const PROV={
  google:{n:'Google',ic:'🟦',col:'#4285f4'},
  discord:{n:'Discord',ic:'💬',col:'#5865f2',url:'https://discord.com/oauth2/authorize',scope:'identify email',implicit:1},
  x:{n:'X',ic:'✖️',col:'#111827',url:'https://twitter.com/i/oauth2/authorize',scope:'users.read tweet.read',pkce:1},
  github:{n:'GitHub',ic:'🐙',col:'#24292f',url:'https://github.com/login/oauth/authorize',scope:'read:user user:email',pkce:1},
  microsoft:{n:'Microsoft',ic:'🪟',col:'#0078d4',url:'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',scope:'openid profile email User.Read',pkce:1},
  twitch:{n:'Twitch',ic:'🎮',col:'#9146ff',url:'https://id.twitch.tv/oauth2/authorize',scope:'user:read:email',implicit:1},
  spotify:{n:'Spotify',ic:'🎧',col:'#1db954',url:'https://accounts.spotify.com/authorize',scope:'user-read-email',pkce:1}};
const redirect=()=>location.origin+location.pathname;
const secure=()=>/^https?:$/.test(location.protocol)&&location.origin!=='null';
let SRV=null;
async function serverProviders(){if(SRV)return SRV;const r=await http.get('/v1/auth/providers');SRV=r.ok?r.providers||{}:{};return SRV}
const clientId=async p=>{const l=cfg.get('oa_'+p);if(l)return l;const s=await serverProviders();return(s[p]&&s[p].id)||''};
function loadGsi(){return new Promise((ok,no)=>{if(window.google&&google.accounts)return ok();const s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.onload=ok;s.onerror=()=>no(new Error('gsi'));document.head.appendChild(s)})}
async function exchange(idToken){const r=await http.post('/v1/auth/google',{idToken});if(r.ok){st.setJson('rm2auth',{token:r.token,user:r.user});K.emit('auth:changed',r.user)}return r}
async function signIn(buttonEl){const id=(await clientId('google'))||cfg.get('googleClientId');if(!id)return{ok:false,err:'noclient'};
  try{await loadGsi()}catch(e){return{ok:false,err:'net'}}
  google.accounts.id.initialize({client_id:id,callback:async c=>{await exchange(c.credential)}});google.accounts.id.renderButton(buttonEl,{theme:'outline',size:'large'});return{ok:true}}
const rnd=n=>{const b=crypto.getRandomValues(new Uint8Array(n));return btoa(String.fromCharCode(...b)).replace(/[+/=]/g,'').slice(0,n)};
/* start an OAuth redirect for provider p. Returns {ok:false,err} instead of redirecting when something is missing. */
async function start(p){const d=PROV[p];if(!d||!d.url)return{ok:false,err:'prov'};if(!secure())return{ok:false,err:'https'};
  const id=await clientId(p);if(!id)return{ok:false,err:'noclient'};
  const hasGw=!!cfg.get('api'),implicit=!hasGw&&d.implicit;if(!hasGw&&!implicit)return{ok:false,err:'noapi'};
  const ver=rnd(64),stt='rm2oa:'+p+':'+rnd(16),q={client_id:id,redirect_uri:redirect(),response_type:implicit?'token':'code',scope:d.scope,state:stt};
  if(!implicit&&d.pkce){const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ver));q.code_challenge=btoa(String.fromCharCode(...new Uint8Array(h))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');q.code_challenge_method='S256'}
  sessionStorage.setItem('rm2oa',JSON.stringify({s:stt,p,v:ver}));location.href=d.url+'?'+new URLSearchParams(q);return{ok:true}}
/* call once at boot: if the page was opened by an OAuth redirect, finish the login. Resolves {p,ok,err} or null. */
async function finish(){
  const qs=new URLSearchParams(location.search),hs=new URLSearchParams(location.hash.replace(/^#/,'')),sg=qs.get('state')||hs.get('state');
  if(!sg||!/^rm2oa:/.test(sg))return null;
  let m=null;try{m=JSON.parse(sessionStorage.getItem('rm2oa')||'null')}catch(e){}sessionStorage.removeItem('rm2oa');
  const code=qs.get('code'),tok=hs.get('access_token'),er=qs.get('error')||hs.get('error');history.replaceState(null,'',location.pathname);
  if(!m||m.s!==sg)return{ok:false,err:'state'};if(er||(!code&&!tok))return{ok:false,p:m.p,err:'denied'};
  if(code){const r=await http.post('/v1/auth/oauth',{provider:m.p,code,verifier:m.v,redirect:redirect()});if(r.ok){st.setJson('rm2auth',{token:r.token,user:r.user});st.removeItem('rm2lid');K.emit('auth:changed',r.user)}return{ok:r.ok,p:m.p,err:r.err}}
  try{let u=null;
    if(m.p==='discord'){const j=await net.json('https://discord.com/api/users/@me',{headers:{authorization:'Bearer '+tok}});if(j&&j.id)u={p:'discord',id:j.id,name:j.global_name||j.username,pic:j.avatar?`https://cdn.discordapp.com/avatars/${j.id}/${j.avatar}.png`:'',email:j.email||''}}
    if(m.p==='twitch'){const id=await clientId('twitch'),j=await net.json('https://api.twitch.tv/helix/users',{headers:{authorization:'Bearer '+tok,'client-id':id}}),x=(j.data||[])[0];if(x)u={p:'twitch',id:x.id,name:x.display_name,pic:x.profile_image_url||'',email:x.email||''}}
    if(!u)return{ok:false,p:m.p,err:'token'};st.setJson('rm2lid',u);K.emit('auth:changed',u);return{ok:true,p:m.p,local:1}}catch(e){return{ok:false,p:m.p,err:'net'}}}
function signOut(){st.removeItem('rm2auth');st.removeItem('rm2lid');K.emit('auth:changed',null)}
async function deleteAccount(){const a=state();if(!a){st.removeItem('rm2lid');K.emit('auth:changed',null);return{ok:true}}const r=await http.del('/v1/account');if(r.ok)signOut();return r}
K.provide('auth',{state,local,signIn,signOut,deleteAccount,exchange,start,finish,PROV,secure,redirect,clientId,serverProviders});
})();
