#!/usr/bin/env python3
"""usage: add_sent.py <lang> <file>   lines: id|template with {0}|filler|persian(optional if /tmp/w/pers.json has id)
Appends sentences to data/lang/<l>.json and Persian to tr.<l>.fa.json"""
import json,sys,os,re
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from tr_export import key,fill,S
l,f=sys.argv[1],sys.argv[2]
P=json.load(open('/tmp/w/pers.json'))
p=S+'data/lang/%s.json'%l;D=json.load(open(p))
tf=S+'data/lang/tr.%s.fa.json'%l
T=json.load(open(tf)) if os.path.exists(tf) else {'v':1,'m':{}}
have={str(c) for r in D['s'] for c in r[2]};n=0;bad=0
for ln in open(f,encoding='utf-8').read().split('\n'):
    ln=ln.strip()
    if not ln:continue
    a=ln.split('|')
    if len(a)<2:print('BAD',ln);bad+=1;continue
    i,sent=a[0],a[1];fa=a[3] if len(a)>3 and a[3] else P.get(i)
    if i in have:continue
    if i not in D['w'] or not fa or '{' in sent:print('SKIP',ln);bad+=1;continue
    want=(a[2] if len(a)>2 and a[2] else D['w'][i][0])
    m=re.search(re.escape(want),sent,re.I)
    if not m:
        toks=want.split(' (')[0].split()
        for cut in (1,2,3,4):
            pat=r'\s+'.join(re.escape(t[:max(3,len(t)-cut)])+r'\w*' for t in toks)
            m=re.search(r'(?<!\w)'+pat,sent,re.I)
            if m:break
    if not m:print('NOFILL',ln);bad+=1;continue
    fl=m.group(0);tpl=sent[:m.start()]+'{0}'+sent[m.end():]
    if i not in P:P[i]=fa
    s=[tpl,[fl],[int(i)]];D['s'].append(s);T['m'][key(fill(s))]=fa;n+=1;have.add(i)
json.dump(P,open('/tmp/w/pers.json','w'),ensure_ascii=False);json.dump(D,open(p,'w'),ensure_ascii=False,separators=(',',':'));json.dump(T,open(tf,'w'),ensure_ascii=False,separators=(',',':'))
print(l,'added',n,'bad',bad,'total',len(D['s']))
