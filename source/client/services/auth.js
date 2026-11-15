/* SERVICES/auth: Google sign-in (Google Identity Services) -> gateway -> session token kept in storage. */
(()=>{
const http=K.get('http'),st=K.get('storage'),cfg=K.get('config');
const state=()=>st.json('rm2auth',null);
function loadGsi(){return new Promise((ok,no)=>{if(window.google&&google.accounts)return ok();const s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.onload=ok;s.onerror=()=>no(new Error('gsi'));document.head.appendChild(s)})}
async function exchange(idToken){const r=await http.post('/v1/auth/google',{idToken});if(r.ok){st.setJson('rm2auth',{token:r.token,user:r.user});K.emit('auth:changed',r.user)}return r}
async function signIn(buttonEl){const id=cfg.get('googleClientId');if(!id)return{ok:false,err:'noclient'};
  try{await loadGsi()}catch(e){return{ok:false,err:'net'}}
  google.accounts.id.initialize({client_id:id,callback:async c=>{await exchange(c.credential)}});google.accounts.id.renderButton(buttonEl,{theme:'outline',size:'large'});return{ok:true}}
function signOut(){st.removeItem('rm2auth');K.emit('auth:changed',null)}
async function deleteAccount(){const r=await http.del('/v1/account');if(r.ok)signOut();return r}
K.provide('auth',{state,signIn,signOut,deleteAccount,exchange});
})();
