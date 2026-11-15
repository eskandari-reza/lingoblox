/* SERVICES/sync: pull -> merge (domain/merge) -> push, with optimistic concurrency against the sync microservice. */
(()=>{
const http=K.get('http'),st=K.get('storage'),M=K.get('merge'),auth=K.get('auth');
async function run(ST,save){
  if(!auth.state())return{ok:false,err:'auth'};
  const pull=await http.get('/v1/sync');if(!pull.ok)return pull;
  if(pull.data&&pull.data.prog)ST.prog=M.mergeProg(ST.prog,pull.data.prog);
  save();
  const put=await http.put('/v1/sync',{data:{prog:ST.prog,v:2},base:pull.at||0});
  if(put.ok)st.setItem('rm2syncAt',String(put.at));
  return put;
}
K.provide('sync',{run,lastAt:()=>+st.getItem('rm2syncAt')||0});
})();
