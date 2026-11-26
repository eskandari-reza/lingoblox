#!/usr/bin/env python3
"""Export sentences that still need a real translation.
usage: python3 tools/tr_export.py <tgt> <src> [levels=A1] [limit=0]  -> prints JSONL {"k":key,"t":filled sentence} to stdout
A sentence's key is djb2(filled text) in base36 (same function as the client: client/features/m_wordreel.js trKey)."""
import json,sys,os,re
S=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
def key(t):
    b=t.encode('utf-16-le');h=5381
    for i in range(0,len(b),2):
        h=((h*33)^(b[i]|(b[i+1]<<8)))&0xFFFFFFFF
    n='';
    if h==0:return '0'
    d='0123456789abcdefghijklmnopqrstuvwxyz'
    while h:n=d[h%36]+n;h//=36
    return n
def fill(s):return re.sub(r'\{(\d+)\}',lambda m:s[1][int(m.group(1))],s[0])
def tfile(tgt,src):return S+'data/lang/tr.%s.%s.json'%(tgt,src)
def load(tgt,src):
    f=tfile(tgt,src)
    return json.load(open(f))['m'] if os.path.exists(f) else {}
if __name__=='__main__':
    tgt,src=sys.argv[1],sys.argv[2];lv=(sys.argv[3] if len(sys.argv)>3 else 'A1').split(',');lim=int(sys.argv[4]) if len(sys.argv)>4 else 0
    sk=json.load(open(S+'data/skeleton.json'));want=set(c for u in sk['units'] if u[1] in lv for c in u[2])
    P=json.load(open(S+'data/lang/%s.json'%tgt))['s'];have=load(tgt,src);seen=set();n=0
    for s in P:
        if not any(c in want for c in s[2]):continue
        t=fill(s);k=key(t)
        if k in have or k in seen:continue
        seen.add(k);print(json.dumps({'k':k,'t':t},ensure_ascii=False));n+=1
        if lim and n>=lim:break
