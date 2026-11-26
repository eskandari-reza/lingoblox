import json,sys
l=sys.argv[1];pers=json.load(open('/tmp/w/pers.json'))
D=json.load(open(f'data/lang/{l}.json'));have={str(c) for r in D['s'] for c in r[2]}
lo=[];hi=[]
for k,r in D['w'].items():
    if k in have:continue
    (hi if int(k)>=20000 else lo).append((k,r))
print('LOW',len(lo));print('\n'.join(f"{k}|{r[0]}|{pers.get(k,'-')}" for k,r in lo))
print('HIGH',len(hi));print(' '.join(f"{k}|{r[0]}" for k,r in hi))
