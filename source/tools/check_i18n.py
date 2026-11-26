#!/usr/bin/env python3
"""i18n leakage gate. 1) every static T()/TN() key resolves in all 15 languages without falling back to English
2) UI strings contain no foreign script (e.g. Persian inside Russian) 3) module translation tables are complete (15 langs) and in the right script.
Runtime crawl of all screens: node tests/leak_crawl.js (needs playwright + a served build)."""
import re,json,glob,subprocess,os,sys
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'));C=R+'/client/'
L='fa en ar az de es fr hi it ja ko pt ru tr zh'.split()
open('/tmp/_nsd.js','w').write("const vm=require('vm');const s=require('fs').readFileSync('"+C+"infra/ns.js','utf8');const c={window:{}};vm.createContext(c);vm.runInContext(s+';this.NS=NS;',c);console.log(JSON.stringify(c.NS))")
NS=json.loads(subprocess.check_output(['node','/tmp/_nsd.js']))
ui={l:json.load(open(R+'/data/lang/%s.json'%l))['ui'] for l in L}
bad=0
def err(*a):
    global bad;bad+=1;print('FAIL',*a)
keys=set()
for f in glob.glob(C+'**/*.js',recursive=True):
    t=open(f,encoding='utf8').read()
    for m in re.finditer(r"(?<![\w.])(TN|T)\(\s*'([\w.\-]+)'(?!\s*\+)",t):
        if not m.group(2).endswith('_'):keys.add((m.group(2),m.group(1)))
for k,kind in sorted(keys):
    for l in L:
        if not((k in NS.get(l,{})) if kind=='TN' else (k in NS.get(l,{}) or k in ui[l])):err('missing key',k,'in',l)
ARAB=re.compile(r'[؀-ۿ]');CYR=re.compile(r'[Ѐ-ӿ]')
BRAND=re.compile(r'TOEFL|IELTS|Premium|LingoBlox')
for l in L:
    for d in (ui[l],NS.get(l,{})):
        for k,v in d.items():
            if not isinstance(v,str):continue
            if l not in('fa','ar') and ARAB.search(v):err('arabic-script in',l,k,v[:40])
            if l!='ru' and CYR.search(v):err('cyrillic in',l,k,v[:40])
exp={'fa':r'[؀-ۿ]','ar':r'[؀-ۿ]','ru':r'[Ѐ-ӿ]','ja':r'[぀-ヿ一-鿿]','ko':r'[가-힯]','zh':r'[一-鿿]','hi':r'[ऀ-ॿ]'}
LS=set(L)
for f in glob.glob(C+'features/*.js'):
    t=open(f,encoding='utf8').read()
    for pat,js in((r'"(\w+)":\s*\{("fa":.*?)\}',0),(r"(\w+):\s*\{\s*(fa:\s*'.*?)\}",1)):
        for m in re.finditer(pat,t,re.S):
            k,body=m.group(1),m.group(2)
            try:o=json.loads('{'+body+'}') if not js else {a:b for a,b in re.findall(r"(\w+):\s*'((?:[^'\\]|\\.)*)'",body)}
            except Exception:continue
            if set(o)!=LS:err('table',os.path.basename(f),k,'missing',LS-set(o))
            for l,v in o.items():
                if l in exp and not re.search(exp[l],v) and not re.fullmatch(r'[A-Za-z0-9 ./·()-]+',v):err('no native script',k,l,v)
                if l not in('fa','ar') and ARAB.search(v):err('arabic in',k,l)
print('i18n OK' if not bad else '%d problem(s)'%bad);sys.exit(1 if bad else 0)
