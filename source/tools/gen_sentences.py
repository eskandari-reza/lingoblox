#!/usr/bin/env python3
"""Resumable sentence generator for LingoBlox 1 (needs ANTHROPIC_API_KEY).
Usage: python3 tools/gen_sentences.py fa            # fill missing concepts for one language
       python3 tools/gen_sentences.py es --regen    # regenerate all 8400 at long-group quality
Output merged into data/lang/<lang>.json 's' as [template with {0}, [filler], [conceptId]].
Progress cached in work/gen_<lang>.jsonl, so you can stop/restart safely."""
import json,os,sys,urllib.request,re
L=sys.argv[1]; REGEN='--regen' in sys.argv
KEY=os.environ['ANTHROPIC_API_KEY']; MODEL=os.environ.get('RM_MODEL','claude-sonnet-5-5')
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P=f'{R}/data/lang/{L}.json'; en=json.load(open(f'{R}/data/lang/en.json',encoding='utf8'))
d=json.load(open(P,encoding='utf8')); os.makedirs(f'{R}/work',exist_ok=True)
C=f'{R}/work/gen_{L}.jsonl'; done={}
if os.path.exists(C):
    for l in open(C,encoding='utf8'): j=json.loads(l); done[j['id']]=j
have=set() if REGEN else {str(c) for s in d['s'] for c in s[2]}
enw={}
for s in en['s']:
    for c in s[2]: enw.setdefault(str(c),(s[0],s[1][0]))
todo=[c for c in d['w'] if c not in have and c not in done]
print(L,'todo',len(todo))
def ask(batch):
    lines='\n'.join(f"{c}|{d['w'][c][0]}|{enw.get(c,('',''))[0].replace('{0}',enw.get(c,('',''))[1])}" for c in batch)
    pr=(f"Language: {d['name']}. For each line 'id|word|English example sentence' write ONE natural, standard-register sentence "
        f"(12-20 words, no dialect, no ' / ') in {d['name']} that uses the word exactly in the form given as filler. "
        "Output one line per id: id|sentence with the word replaced by {0}|the exact surface form used. Nothing else.\n"+lines)
    req=urllib.request.Request('https://api.anthropic.com/v1/messages',json.dumps({'model':MODEL,'max_tokens':8000,'messages':[{'role':'user','content':pr}]}).encode(),
        {'x-api-key':KEY,'anthropic-version':'2023-06-01','content-type':'application/json'})
    return json.load(urllib.request.urlopen(req,timeout=180))['content'][0]['text']
out=open(C,'a',encoding='utf8')
for i in range(0,len(todo),40):
    b=todo[i:i+40]
    for ln in ask(b).split('\n'):
        p=ln.split('|')
        if len(p)==3 and p[0] in b and '{0}' in p[1] and ' / ' not in p[1]:
            j={'id':p[0],'t':p[1],'f':p[2]}; done[p[0]]=j; out.write(json.dumps(j,ensure_ascii=False)+'\n')
    out.flush(); print(i+len(b),'/',len(todo))
new=[[j['t'],[j['f']],[int(c)]] for c,j in done.items()]
d['s']=new+([] if REGEN else d['s']) if REGEN else d['s']+new
json.dump(d,open(P,'w',encoding='utf8'),ensure_ascii=False,separators=(',',':'))
print('merged',len(new),'→ now covers',len({c for s in d['s'] for c in s[2]}))
