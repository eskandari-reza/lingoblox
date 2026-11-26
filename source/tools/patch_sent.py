#!/usr/bin/env python3
"""usage: patch_sent.py <lang> <id> <new template with {0}> <filler>  (keeps Persian)"""
import json,sys
sys.path.insert(0,'/home/claude/v2/tools')
from tr_export import key,fill
l,i,tpl,fl=sys.argv[1:5]
p=f'/home/claude/v2/data/lang/{l}.json';D=json.load(open(p));tf=f'/home/claude/v2/data/lang/tr.{l}.fa.json';T=json.load(open(tf))
n=0
for s in D['s']:
    if s[2]==[int(i)]:
        fa=T['m'].pop(key(fill(s)));s[0]=tpl;s[1]=[fl];T['m'][key(fill(s))]=fa;n+=1;print(fill(s))
json.dump(D,open(p,'w'),ensure_ascii=False,separators=(',',':'));json.dump(T,open(tf,'w'),ensure_ascii=False,separators=(',',':'))
