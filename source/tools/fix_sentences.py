#!/usr/bin/env python3
"""Mechanical clean-up of data/lang/<l>.json 's' (sentences). Idempotent.
 1 drop sentences written in the wrong script (e.g. Persian text inside de/en/ru/tr)
 2 re-attach suffixes that were split off by a space (de/en/tr/ru/ar/fa) and detached commas
 3 normalise spaces inside quotation marks, capitalise the first letter
Writes the file back and data/lang/_fixlog.<l>.json = {old_filled: new_filled} so tr.* keys can be re-keyed.
usage: fix_sentences.py [langs...]   (default: all)"""
import json,re,sys,os
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','data','lang')
ALL=['ar','az','de','en','es','fa','fr','hi','it','ja','ko','pt','ru','tr','zh']
ARAB=re.compile(r'[؀-ۿ]');LATINISH={'de','en','es','fr','it','pt','tr','az'}
FOREIGN=re.compile(r'[؀-ۿ぀-ヿ一-鿿가-힯ऀ-ॿЀ-ӿ]')
fill=lambda t,w:re.sub(r'\{(\d+)\}',lambda m:w[int(m.group(1))],t)
DE_SUF=r'(e|en|er|em|es|s|n|ern)'
TR_SUF=('e a i ı u ü ö ın in un ün ni nı nu nü na nin nın nun nün yı yi yu yü ye ım im um üm lar ler ları leri dan den tan ten dır dir dur dür tır tir lık lik lı li sı si su sü ında inde ına ine ını ini ndan nden nda nde m n s ş').split()
RU_SUF='е ы ю ой ем ах ом ами ях ям ов ого ому ым ую ые ых ие ия ии ий ья ью ьи ки ка ку ке'.split()
def pos_of(W,ids,word):
    for c in ids:
        r=W.get(str(c))
        if r and r[0]==word:return r[4]
def fix(l,t,w,k,W):
    # join detached suffix directly after a slot or a word
    if l=='de':
        def j(m):
            i=int(m.group(1));suf=m.group(2);p=pos_of(W,k,w[i]);wd=w[i]
            if p in('n','adj') or wd in('jemand','Jahre','Backup','Zukünftig','nächst'):
                if wd=='links' and suf=='en':w[i]='link'
                return '{%d}%s'%(i,suf)
            return m.group(0)
        t=re.sub(r'\{(\d+)\} '+DE_SUF+r'(?=[ ,.;:!?]|$)',j,t)
        t=re.sub(r'(?<=[a-zäöüßA-ZÄÖÜ}]) (e|en|em|n|s|ern)(?=[ ,.;:!?]|$)',r'\1',t)
    elif l=='en':
        t=re.sub(r'(?<=[A-Za-z}]) s(?=[ ,.;:!?]|$)',lambda m:'s',t)
    elif l=='tr':
        pat=r'(?<=[^\W\d_]|\}) ('+'|'.join(sorted(TR_SUF,key=len,reverse=True))+r')(?=[ ,.;:!?»”"]|$)'
        t=re.sub(pat,r'\1',t)
    elif l=='ru':
        pat=r'(?<=[а-яё}]) ('+'|'.join(sorted(RU_SUF,key=len,reverse=True))+r')(?=[ ,.;:!?»”"]|$)'
        t=re.sub(pat,r'\1',t)
    elif l=='ar':
        t=re.sub(r'(?<=[؀-ۿ}]) (ة)(?=[ ،.؟!]|$)',r'\1',t)
    if l in('ar','fa'):
        t=re.sub(r' ([،؟!؛])',r'\1',t)
        if l=='fa':t=re.sub(r'(?<=[؀-ۿ}]) (‌ی|ی|‌ای|‌ها|‌های)(?=[ ،.؟!]|$)',r'\1',t)
    # quotes
    if l in('de','ru','tr','en','az','es','fr','it','pt'):
        if l=='de':t=re.sub(r'„\s+','„',t);t=re.sub(r'\s+“','“',t)
        else:t=re.sub(r'“\s+','“',t);t=re.sub(r'\s+”','”',t)
        t=re.sub(r'«\s+','«',t);t=re.sub(r'\s+»','»',t)
        if t.count('"')%2==0:t=re.sub(r'"\s+([^"]*?)\s+"',r'"\1"',t)
    # capitalise first letter
    if t[:1].islower() and l in('de','en','es','fr','it','ru','tr','az','pt'):t=t[0].upper()+t[1:]
    elif t.startswith('{') and l in('de','en','es','fr','it','ru','tr','az','pt'):
        m=re.match(r'\{(\d+)\}',t)
        if m:
            i=int(m.group(1))
            if w[i][:1].islower() and l!='de':pass
    return t
def run(l):
    p=os.path.join(D,l+'.json');d=json.load(open(p,encoding='utf-8'));W=d['w'];new=[];log={};drop=0;chg=0
    for t,w,k in d['s']:
        f0=fill(t,w)
        if (l in LATINISH or l=='ru') and ARAB.search(f0) or (l in('de','en','es','fr','it','pt','tr','az') and FOREIGN.search(f0)):drop+=1;continue
        w=list(w);t2=fix(l,t,w,k,W);f1=fill(t2,w)
        if f1!=f0:chg+=1;log[f0]=f1
        new.append([t2,w,k])
    d['s']=new
    json.dump(d,open(p,'w',encoding='utf-8'),ensure_ascii=False,separators=(',',':'))
    os.makedirs('/tmp/fixlog',exist_ok=True);lp='/tmp/fixlog/%s.json'%l
    old=json.load(open(lp)) if os.path.exists(lp) else {}
    old.update(log);json.dump(old,open(lp,'w',encoding='utf-8'),ensure_ascii=False)
    print(l,'dropped',drop,'changed',chg,'left',len(new))
if __name__=='__main__':
    for l in (sys.argv[1:] or ALL):run(l)
