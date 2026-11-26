#!/usr/bin/env python3
"""Generic clean-up for data/lang/<l>.json 's' (Latin-script langs): capitalise lower-case sentence starts, drop sentences with
gloss-parentheses '(x)' (except whitelisted), re-key tr.<l>.<ui>.json files. Idempotent. usage: fix_gen.py <lang> [keep-regex]"""
import json,re,os,sys,glob
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from tr_export import key,fill
S=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
l=sys.argv[1];keep=re.compile(sys.argv[2]) if len(sys.argv)>2 else None
p=S+'data/lang/%s.json'%l;D=json.load(open(p,encoding='utf-8'));new=[];mp={};drop=chg=0;dropped=[]
before={c for s in D['s'] for c in s[2]}
for s in D['s']:
    t,w,k=s;f0=fill(s);w=list(w)
    m=re.search(r'\([^)]*\)',f0)
    if m and not (keep and keep.search(m.group(0))):drop+=1;dropped.append(f0);continue
    if f0[:1].islower():
        if t.startswith('{0}'):w[0]=w[0][:1].upper()+w[0][1:]
        else:t=t[:1].upper()+t[1:]
    f1=fill([t,w])
    if f1!=f0:chg+=1
    mp[key(f0)]=key(f1);new.append([t,w,k])
after={c for s in new for c in s[2]}
D['s']=new;json.dump(D,open(p,'w',encoding='utf-8'),ensure_ascii=False,separators=(',',':'))
for tf in glob.glob(S+'data/lang/tr.%s.*.json'%l):
    m=json.load(open(tf))['m'];out={mp.get(k,k):v for k,v in m.items() if k in mp};json.dump({'v':1,'m':out},open(tf,'w'),ensure_ascii=False,separators=(',',':'));print(os.path.basename(tf),len(m),'->',len(out))
print(l,'changed',chg,'dropped',drop,'left',len(new),'concepts lost',len(before-after))
