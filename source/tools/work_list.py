import json,sys
l=sys.argv[1];pers=json.load(open('/tmp/w/pers.json'))
D=json.load(open(f'data/lang/{l}.json'));have={str(c) for r in D['s'] for c in r[2]}
for k,r in D['w'].items():
    if k in have:continue
    k=str(k)
    if int(k)>=20000 and k in pers: print(f"{k}|{r[0]}")
    else: print(f"{k}|{r[0]}|{r[4]}|{pers.get(k,'')}|{r[2]}")
