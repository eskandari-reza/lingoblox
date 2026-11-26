import json,sys,re,os
sys.path.insert(0,'/home/claude/v2/tools')
from tr_export import key,fill
for l in sys.argv[1:]:
    D=json.load(open(f'data/lang/{l}.json'));tf=f'data/lang/tr.{l}.fa.json'
    T=json.load(open(tf))['m'] if os.path.exists(tf) else {}
    bad=[];miss=0
    for s in D['s'][-1100:]:
        t=fill(s);k=key(t)
        if k not in T:
            miss+=1;continue
        fa=T[k];a=len(re.findall(r'\S+',fa));b=max(1,len(re.findall(r'\S+',t)))
        if '{' in fa or not fa.strip() or a/b>3.6 or a/b<0.25:bad.append((t,fa,round(a/b,2)))
    print(l,'missing-persian-in-last1100',miss,'ratio-outliers',len(bad))
    for x in bad[:8]:print('  ',x)
