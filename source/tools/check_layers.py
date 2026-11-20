#!/usr/bin/env python3
"""Architecture fitness check: enforces the dependency rule (inner layers must not know outer layers)."""
import os,re,sys
C=os.path.join(os.path.dirname(__file__),'..','client')
RULES={ # layer: forbidden regex (what it must NOT touch)
 'kernel':r'\bRM2\b|localStorage|fetch\(|document\.',
 'domain':r'\bRM2\b|localStorage|fetch\(|document\.|window\.(?!K\b)|K\.get|K\.emit',
 'infra':r'\bRM2\b|document\.querySelector|K\.get\((?!\'(storage|config|net)\')',
 'services':r'\bRM2\b|localStorage|fetch\(|document\.(?!createElement|head)',
 'features':r'(?<![\w.])fetch\(|window\.localStorage',
}
bad=0
for layer,pat in RULES.items():
    d=os.path.join(C,layer)
    for f in sorted(os.listdir(d)):
        if not f.endswith('.js') or (layer=='infra' and f=='ns.js'):continue
        src=open(os.path.join(d,f),encoding='utf8').read()
        src=re.sub(r"/\*.*?\*/|//[^\n]*",'',src,flags=re.S) if layer!='kernel' else re.sub(r"/\*.*?\*/",'',src,flags=re.S)
        # infra/http is the only place allowed to call fetch; infra/storage the only one touching window.localStorage
        p=pat
        if layer=='infra':p+=r'' if f in('http.js','net.js') else r'|(?<![\w.])fetch\('
        for m in re.finditer(p,src):
            if layer=='infra' and f=='storage.js' and 'localStorage' in m.group(0):continue
            print(f'VIOLATION {layer}/{f}: {m.group(0)!r}');bad+=1
print('layers OK' if not bad else f'{bad} violation(s)');sys.exit(1 if bad else 0)
