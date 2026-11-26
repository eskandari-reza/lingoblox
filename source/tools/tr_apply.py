#!/usr/bin/env python3
"""Apply numbered translations ("n|translation" lines) to a jsonl export. usage: tr_apply.py <export.jsonl> <numbered.txt> <out.jsonl>"""
import json,sys
L=[json.loads(l) for l in open(sys.argv[1],encoding='utf8')]
out=open(sys.argv[3],'a',encoding='utf8');n=0
for ln in open(sys.argv[2],encoding='utf8'):
    if '|' not in ln:continue
    i,x=ln.rstrip('\n').split('|',1)
    o=dict(L[int(i)]);o['x']=x.strip();out.write(json.dumps(o,ensure_ascii=False)+'\n');n+=1
print('applied',n)
