#!/usr/bin/env python3
"""Validate and merge translations.  usage: python3 tools/tr_import.py <tgt> <src> <file.jsonl>   (lines: {"k":..,"t":original,"x":translation})
Checks: non-empty, no leftover {slots}, plausible length ratio, target script for fa/ar/ru/ja/ko/zh/hi."""
import json,sys,re,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from tr_export import key,tfile,load
SCR={'fa':r'[؀-ۿ]','ar':r'[؀-ۿ]','ru':r'[Ѐ-ӿ]','ja':r'[぀-ヿ一-鿿]','ko':r'[가-힯]','zh':r'[一-鿿]','hi':r'[ऀ-ॿ]'}
def wc(t):return max(1,len(t)//2) if re.search(r'[぀-ヿ一-鿿가-힯]',t) else len(t.split())
if __name__=='__main__':
    tgt,src,f=sys.argv[1:4];m=load(tgt,src);ok=bad=0
    for ln in open(f,encoding='utf8'):
        ln=ln.strip()
        if not ln:continue
        o=json.loads(ln);x=(o.get('x') or '').strip();t=o['t']
        r=wc(t)/wc(x) if x else 0
        if not x or '{' in x or r<.25 or r>3.6 or (src in SCR and not re.search(SCR[src],x)) or key(t)!=o['k']:
            bad+=1;print('REJECT',o['k'],t,'=>',x,file=sys.stderr);continue
        m[o['k']]=x;ok+=1
    json.dump({'v':1,'m':m},open(tfile(tgt,src),'w'),ensure_ascii=False,separators=(',',':'))
    print('merged',ok,'rejected',bad,'total',len(m))
