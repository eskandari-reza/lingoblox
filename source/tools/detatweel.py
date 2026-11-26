#!/usr/bin/env python3
"""remove tatweel (U+0640) from ar sentences, re-keying Persian"""
import json,sys
sys.path.insert(0,'/home/claude/v2/tools')
from tr_export import key,fill
l=sys.argv[1]
p=f'/home/claude/v2/data/lang/{l}.json';D=json.load(open(p));tf=f'/home/claude/v2/data/lang/tr.{l}.fa.json';T=json.load(open(tf))
n=0
for s in D['s']:
    if 'ـ' in s[0] or any('ـ' in f for f in s[1]):
        k=key(fill(s));fa=T['m'].pop(k,None)
        s[0]=s[0].replace('ـ','');s[1]=[f.replace('ـ','') for f in s[1]]
        if fa is not None:T['m'][key(fill(s))]=fa
        n+=1
print('fixed',n)
json.dump(D,open(p,'w'),ensure_ascii=False,separators=(',',':'));json.dump(T,open(tf,'w'),ensure_ascii=False,separators=(',',':'))
