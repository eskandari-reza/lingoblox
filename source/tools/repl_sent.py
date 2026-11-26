#!/usr/bin/env python3
"""usage: repl_sent.py <lang> <file id|sentence[|filler]>  replaces existing sentence (single concept id), re-keys Persian"""
import json,sys,re
sys.path.insert(0,'/home/claude/v2/tools')
from tr_export import key,fill
l,f=sys.argv[1:3]
p=f'/home/claude/v2/data/lang/{l}.json';D=json.load(open(p));tf=f'/home/claude/v2/data/lang/tr.{l}.fa.json';T=json.load(open(tf))
rows={}
for ln in open(f,encoding='utf8'):
    a=ln.rstrip('\n').split('|')
    if len(a)>=2:rows[int(a[0])]=a
n=bad=0
for s in D['s']:
    if len(s[2])==1 and s[2][0] in rows:
        a=rows[s[2][0]];sent=a[1];want=a[2] if len(a)>2 and a[2] else D['w'][str(s[2][0])][0]
        m=re.search(re.escape(want),sent)
        if not m:print('NOFILL',a[0],sent);bad+=1;continue
        fa=T['m'].pop(key(fill(s)))
        s[0]=sent[:m.start()]+'{0}'+sent[m.end():];s[1]=[m.group(0)];T['m'][key(fill(s))]=fa;n+=1
json.dump(D,open(p,'w'),ensure_ascii=False,separators=(',',':'));json.dump(T,open(tf,'w'),ensure_ascii=False,separators=(',',':'))
print('replaced',n,'bad',bad)
