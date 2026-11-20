"""Release packager: python3 package.py -> /home/claude/out/release_<tag>/ with 6 files."""
import os,sys,shutil,zipfile,json
sys.path.insert(0,'/home/claude/v2/build')
import build_site as B
S='/home/claude/v2/';tag='lingoblox_v1.47';od='/home/claude/out/release_%s/'%tag
B.VERSION=tag
shutil.rmtree(od,ignore_errors=True);os.makedirs(od)
tmp='/home/claude/out/_tmp_'+tag;shutil.rmtree(tmp,ignore_errors=True);os.makedirs(tmp)
def zipdir(src,dst,extra=None):
    with zipfile.ZipFile(dst,'w',zipfile.ZIP_DEFLATED) as z:
        for r,ds,fs in os.walk(src):
            ds[:]=[d for d in ds if d not in('node_modules','__pycache__','.git')]
            for f in fs:
                p=os.path.join(r,f);z.write(p,os.path.relpath(p,src))
        for n,c in (extra or {}).items():z.writestr(n,c)
# 1 web (single file, data embedded)
open(od+tag+'_web.html','w',encoding='utf8').write(B.page(True))
# 2 shell (app only, no data) / 3 content (data + manifest)
B.build(tmp+'/shell',data=False);zipdir(tmp+'/shell',od+tag+'_shell.zip')
B.content(tmp+'/content');zipdir(tmp+'/content',od+tag+'_content.zip')
# 4 github (site + data + pages workflow + source)
g=tmp+'/github';B.build(g,data=True)
open(g+'/.nojekyll','w').close()
open(g+'/README.md','w').write('# LingoBlox 1 (%s)\n\nStatic site: index.html + data/ (skeleton.json + 15 language files). Upload the content to a GitHub repo, set Pages source to GitHub Actions. Open https://USERNAME.github.io/REPO/ . On iPhone: Safari > Share > Add to Home Screen.\n'%tag)
os.makedirs(g+'/.github/workflows')
open(g+'/.github/workflows/pages.yml','w').write(open('/home/claude/gh/repo/.github/workflows/pages.yml').read())
src=g+'/source';os.makedirs(src)
for n in('client','tools','tests','docs','build','platform'):
    if os.path.isdir(S+n):shutil.copytree(S+n,src+'/'+n,ignore=shutil.ignore_patterns('node_modules','__pycache__'))
for n in('package.json','README.md','package.py'):
    if os.path.exists(S+n):shutil.copy(S+n,src+'/'+n)
zipdir(g,od+tag+'_github.zip')
# 5 android: Capacitor project (template + site in www/ and in assets/public/)
ad=tmp+'/android/lingoblox_app/android';shutil.copytree(S+'tools/android_template',ad)
site=tmp+'/site';B.build(site,data=True)
for dst in(ad+'/www',ad+'/android/app/src/main/assets/public'):
    os.makedirs(dst,exist_ok=True)
    for n in os.listdir(site):
        if n in('.github','source','README.md','.nojekyll'):continue
        sp=site+'/'+n
        (shutil.copytree if os.path.isdir(sp) else shutil.copy)(sp,dst+'/'+n)
zipdir(tmp+'/android',od+tag+'_android.zip')
# 6 iphone: the plain site (index.html + data + sw + manifest + icons), same as the GitHub site
zipdir(site,od+tag+'_iphone.zip')
shutil.rmtree(tmp)
print(sorted(os.listdir(od)))
