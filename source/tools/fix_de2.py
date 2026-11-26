#!/usr/bin/env python3
"""Second mechanical clean-up pass for data/lang/de.json 's' + re-key data/lang/tr.de.fa.json. Idempotent.
Fixes: 'X -Y' / 'X- Y' detached hyphens, ' quotes ' -> „quotes“, straight closing quotes, lower-case sentence start,
missing final punctuation; drops sentences with slot garbage ( '(-)', '; -en', '- -', trailing comma ...)."""
import json,re,os,sys
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from tr_export import key,fill,tfile
S=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
UP='A-ZÄÖÜ';LO='a-zäöüß'
DROP=re.compile(r'\([^)]*\)(?<!\(GMC\))|; -|- -|,\s*$|\s/\s*[A-Za-zäöü]+-\s')
def cap_slot(t,w):
    # capitalise slot word if template starts with it
    if t.startswith('{0}') and w and w[0][:1].islower():w[0]=w[0][0].upper()+w[0][1:]
def fix(t,w):
    w=list(w)
    # detached hyphen before capital: 'Handy -App' -> 'Handy-App'
    def h1(m):
        a=m.group(1)
        return a+'-'
    t=re.sub(r'(?<=[\w}]) -(?=[%s])'%UP,'-',t)
    # lowercase noun before -Capital  (leichtathletik-Stunde) -> capitalise
    t=re.sub(r'(?<![\w-])([%s][%s]+)-(?=[%s])'%(LO.replace('ß','')[:0]+'a-zäöü',LO,UP),lambda m:m.group(1)[0].upper()+m.group(1)[1:]+'-',t)
    # 'Handels- Mark' -> 'Handels-Mark', 'Straßen- graffiti' -> 'Straßengraffiti'; keep coordinations ('Gesundheits- und')
    t=re.sub(r'(?<=[\wäöüß])- (?!(?:und|oder|bzw|sowie|noch|bis|beziehungsweise)\b)(?=[%s])'%UP,'-',t)
    t=re.sub(r'(?<=[\wäöüß])- (?!(?:und|oder|bzw|sowie|noch|bis|beziehungsweise)\b)(?=[%s{])'%LO,'',t)
    # quotes
    t=re.sub(r"(?<=[:,] )'\s+([^']+?)\s*'(?=\s|[,.;:!?]|$)",r'„\1“',t)
    t=re.sub(r'„([^„“"]*?)\s*"',r'„\1“',t)
    t=re.sub(r'„\s+','„',t);t=re.sub(r'\s+“','“',t)
    t=t.replace('  ',' ').strip()
    # first letter
    if t[:1].islower():t=t[0].upper()+t[1:]
    cap_slot(t,w)
    if not re.search(r'[.!?"“”»)]$',t) and not t.endswith(','):t+='.'
    return t,w
JOIN=set("""Aufbewahrung sbox|Aufklärung skampagnen|Auszug sszene|Bremse nteile|Datenintegration sprojekt|Datenladung sjobs|Datenspeicherung slösung|Dichtung sring|Faltung soperation|Geburtstag sfeier|Geige nsolo|Geschäftskontinuität splanung|Großhandel spreise|Haftungsbeschränkung sklausel|Kinderbetreuung sdienste|Konfiguration sdatei|Messung stechniken|Motivation sgespräche|Patenschaft sprogramm|Planung streffens|Promotion sverteidigung|Reanimation stechniken|Satellit enschüssel|Saurier skelett|Sortierung ssysteme|Stapelverarbeitung sjob|Umwandlung sschritt|Verkauf szahlen|Versicherung sschutz|Wohn einheiten|Flieder strauch|Masche n|Kirschblüte n""".split('|'))
SUF=r'(?:es|en|er|e|n|s|em|ern|ens|ns)'
REPL={'linksen Seite':'linken Seite','rechtsen Seite':'rechten Seite','anschließende gruppenarbeit':'anschließende Gruppenarbeit','halbtags-Sitzung':'Halbtagssitzung','eine hilfskraft':'eine Hilfskraft','einbehaltene lohnsteuer':'einbehaltene Lohnsteuer','es tut mir Leid':'es tut mir leid','Ortsschild es':'Ortsschildes','Süd pol':'Südpol','Episodisch es':'Episodisches','FarbKennzeichnung ssystem':'Farbkennzeichnungssystem','liefer- und zahlungsbedingungen':'Liefer- und Zahlungsbedingungen'}
def join_frags(f,F):
    for a,b in REPL.items():f=f.replace(a,b)
    # explicit pairs + pairs whose joined twin sentence exists in the corpus
    def j(m):
        a,b=m.group(1),m.group(2)
        if a+' '+b in JOIN:return a+b
        if re.fullmatch(SUF,b) and f.replace(a+' '+b,a+b) in F:return a+b
        return m.group(0)
    return re.sub(r"\b([A-ZÄÖÜ][a-zäöüß]+) ([a-zäöüß]+)\b",j,f)
def reslot(t,w,f):
    # rebuild template from joined filled text, keeping the slot word position
    i=f.find(w[0])
    if i<0:
        i=f.lower().find(w[0].lower())
        if i>=0:w[0]=f[i:i+len(w[0])]
    if i>=0:return f[:i]+'{0}'+f[i+len(w[0]):]
    return None
def main():
    p=S+'data/lang/de.json';d=json.load(open(p,encoding='utf-8'));new=[];mp={};drop=chg=0
    F={fill([t,w]) for t,w,k in d['s']}
    for t,w,k in d['s']:
        f0=fill([t,w])
        t2,w2=fix(t,w);f1=fill([t2,w2])
        fj=join_frags(f1,F)
        if fj!=f1:
            t3=reslot(t2,w2,fj)
            if t3:t2=t3;f1=fj
        if DROP.search(f1):drop+=1;continue
        if f1!=f0:chg+=1
        mp[key(f0)]=key(f1);new.append([t2,w2,k])
    d['s']=new;json.dump(d,open(p,'w',encoding='utf-8'),ensure_ascii=False,separators=(',',':'))
    tf=tfile('de','fa')
    if os.path.exists(tf):
        m=json.load(open(tf))['m'];out={};lost=0
        for k,v in m.items():
            k2=mp.get(k)
            if k2 is None:lost+=1;continue
            out.setdefault(k2,v)
        json.dump({'v':1,'m':out},open(tf,'w'),ensure_ascii=False,separators=(',',':'))
        print('tr.de.fa',len(m),'->',len(out),'lost',lost)
    print('de sentences changed',chg,'dropped',drop,'left',len(new))
if __name__=='__main__':main()
