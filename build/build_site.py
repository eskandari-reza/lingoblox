import os,shutil,json,re,gzip,base64
S='/home/claude/v2/';C=S+'client/'
VERSION='dev'
LAYERS=['kernel','domain','infra','services','ui','features']
def page(embed=False):
    css=open(C+'ui/app.css').read();ns=open(C+'infra/ns.js').read()
    def layer(l):
        d=C+l+'/';fs=sorted(f for f in os.listdir(d) if f.endswith('.js') and not (l=='ui' and f=='app.js') and not (l=='infra' and f=='ns.js'))
        if l=='infra':fs=[f for f in ['storage.js','config.js','net.js','content.js','http.js'] if f in fs]+[f for f in fs if f not in('storage.js','config.js','net.js','content.js','http.js')]
        if l=='ui':fs=['app.js']
        return ''.join('\n/* ==== %s/%s ==== */\n'%(l,f)+open(d+f).read() for f in fs)
    js=''.join(layer(l) for l in LAYERS)+'\nK.start();'
    emb=''
    if embed:
        d={}
        for f in sorted(os.listdir(S+'data/lang')):
            d['lang/'+f[:-5]]=base64.b64encode(gzip.compress(open(S+'data/lang/'+f,'rb').read(),9)).decode()
        d['skeleton']=base64.b64encode(gzip.compress(open(S+'data/skeleton.json','rb').read(),9)).decode()
        d['pals']=base64.b64encode(gzip.compress(open(S+'data/pals.js','rb').read(),9)).decode()
        d['x3d']=base64.b64encode(gzip.compress(open(S+'data/x3d.js','rb').read(),9)).decode()
        emb='<script>window.__EMB='+json.dumps(d)+'</script>'
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#2f6bff"><meta name="apple-mobile-web-app-capable" content="yes"><link rel="manifest" href="manifest.webmanifest"><title>LingoBlox</title><style>'+css+'</style></head><body><div id="root"></div>'+emb+'<script>'+ns+'</script><script>'+js+'</script></body></html>'
import hashlib
def manifest():
    f={}
    for n in sorted(os.listdir(S+'data/lang')):f['lang/'+n]=[hashlib.sha1(open(S+'data/lang/'+n,'rb').read()).hexdigest()[:10],os.path.getsize(S+'data/lang/'+n)]
    for n in('skeleton.json','x3d.js','pals.js'):f[n]=[hashlib.sha1(open(S+'data/'+n,'rb').read()).hexdigest()[:10],os.path.getsize(S+'data/'+n)]
    return {'v':hashlib.sha1(json.dumps(f,sort_keys=True).encode()).hexdigest()[:8],'f':f}
def content(out):
    """the separate content package: data/ + manifest.json (host anywhere: CDN, GitHub Pages, object storage)"""
    shutil.rmtree(out,ignore_errors=True);os.makedirs(out+'/data/lang')
    for f in os.listdir(S+'data/lang'):shutil.copy(S+'data/lang/'+f,out+'/data/lang/'+f)
    for n in('skeleton.json','x3d.js','pals.js'):shutil.copy(S+'data/'+n,out+'/data/'+n)
    json.dump(manifest(),open(out+'/data/manifest.json','w'))
def build(out,data=True,content_base=''):
    shutil.rmtree(out,ignore_errors=True);os.makedirs(out)
    pg=page()
    if content_base:pg=pg.replace('<script>','<script>window.RM_CFG={contentBase:%s};</script><script>'%json.dumps(content_base),1)
    open(out+'/index.html','w',encoding='utf8').write(pg)
    if data:content(out+'/_c');shutil.move(out+'/_c/data',out+'/data');shutil.rmtree(out+'/_c')
    json.dump({"name":"LingoBlox","short_name":"LingoBlox","start_url":"./","display":"standalone","background_color":"#f6f4ef","theme_color":"#2f6bff","icons":[{"src":"icon-192.png","sizes":"192x192","type":"image/png"},{"src":"icon-512.png","sizes":"512x512","type":"image/png"}]},open(out+'/manifest.webmanifest','w'))
    open(out+'/sw.js','w').write("""const C='rm2-'+%s;self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
const html=r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html')||u.pathname.endsWith('manifest.webmanifest')||u.pathname.endsWith('manifest.json');
e.respondWith(caches.open(C).then(async c=>{const m=await c.match(r);const net=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>null);
if(html){const x=await net;return x||m||Response.error()}return m||(await net)||Response.error()}))});""" % json.dumps(VERSION))
    try:
        from PIL import Image,ImageDraw,ImageFont
        for n in(192,512):
            im=Image.new('RGB',(n,n),'#2f6bff');d=ImageDraw.Draw(im)
            try:f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',int(n*.6))
            except:f=ImageFont.load_default()
            d.text((n/2,n/2),'R',fill='white',font=f,anchor='mm');im.save(out+'/icon-%d.png'%n)
    except Exception as e:print('icon',e)
if __name__=='__main__':
    build(S+'out/site')
    open(S+'out/lingoblox1_web.html','w',encoding='utf8').write(page(True))
    print('built')
