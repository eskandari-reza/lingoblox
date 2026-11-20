/* INFRA/config: runtime config. Override by defining window.RM_CFG before the app (or via Account screen, stored locally). */
(()=>{const st=K.get('storage'),d=Object.assign({api:'',googleClientId:''},window.RM_CFG||{});
K.provide('config',{get:k=>st.json('rm2cfg',{})[k]??d[k]??'',set(k,v){const c=st.json('rm2cfg',{});c[k]=v;st.setJson('rm2cfg',c)}})})();
