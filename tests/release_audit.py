"""Site-wide audit: inspect every HTML file and local reference. Report, never conceal errors."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from collections import Counter
import json,re,sys
from xml.etree import ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
LANGS='en ru de fr es it pt tr ar zh ja ko'.split()
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids=[];self.links=[];self.h1=0;self.lang='';self.dir='';self.alternates={};self.canonical=[];self.noindex=False;self.forms=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html':self.lang=a.get('lang','');self.dir=a.get('dir','')
        if tag=='h1':self.h1+=1
        if a.get('id'):self.ids.append(a['id'])
        for k in ('href','src','poster'):
            if a.get(k):self.links.append((k,a[k]))
        if tag=='link' and a.get('rel')=='alternate' and a.get('hreflang'):self.alternates[a['hreflang']]=a.get('href')
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='meta' and a.get('name','').lower()=='robots' and 'noindex' in a.get('content','').lower():self.noindex=True
        if tag=='form' and a.get('action'):self.forms.append(a['action'])
pages={}
for p in sorted(ROOT.rglob('*.html')):
    if any(x in ('.git','node_modules','playwright-report') for x in p.relative_to(ROOT).parts):continue
    s=p.read_text(encoding='utf-8');a=Page();a.feed(s);pages[p.resolve()]=(a,s)
errors=[];warnings=[]
def report(bucket,p,msg):bucket.append({'page':p.relative_to(ROOT).as_posix(),'issue':msg})
def target(p,raw):
    try:u=urlsplit(raw)
    except ValueError:return None,None
    if u.scheme or u.netloc:
        if u.hostname!='cranio.systems':return None,None
    path=unquote(u.path)
    q=(ROOT/path.lstrip('/') if path.startswith('/') or u.netloc else p.parent/path).resolve() if path else p
    if q.is_dir():q=q/'index.html'
    return q,unquote(u.fragment)
core={ROOT/l/r/'index.html' for l in LANGS for r in ('','your-cranium','configuration','potential')}
core.add(ROOT/'index.html')
for p,(a,s) in pages.items():
    strict=p in core or 'data-product-depth=' in s or 'data-product-academy=' in s or 'class="pe"' in s
    bucket=errors if strict else warnings
    for dup,n in Counter(a.ids).items():
        if n>1:report(bucket,p,'duplicate id: '+dup)
    for attr,u in a.links:
        if not u or u.startswith(('data:','javascript:','mailto:','tel:')):continue
        q,frag=target(p,u)
        if q is None:continue
        if not q.is_file():report(bucket,p,'missing '+attr+': '+u);continue
        if frag and q in pages and frag not in pages[q][0].ids:report(bucket,p,'missing anchor: '+u)
    for action in a.forms:
        if 'formsubmit.co' in action and 'rootfrontier.office@gmail.com' not in action:report(bucket,p,'legacy form recipient: '+action)
    if strict:
        if a.h1!=1:report(errors,p,'expected exactly one H1')
        if a.lang=='ar' and a.dir!='rtl':report(errors,p,'Arabic direction missing')
        if 'rootfrontier.office@gmail.com' not in s:report(errors,p,'corporate email missing')
for p in sorted(core):
    if p.resolve() not in pages:report(errors,p,'core page missing');continue
    a,s=pages[p.resolve()]
    for l in LANGS:
        route='' if p==ROOT/'index.html' else '/'.join(p.relative_to(ROOT).parts[1:-1])
        expected='https://cranio.systems/'+l+'/'+(route+'/' if route else '')
        if a.alternates.get(l)!=expected:report(errors,p,'hreflang mismatch '+l)
xml=ET.parse(ROOT/'sitemap.xml');urls=[e.text for e in xml.iter() if e.tag.endswith('}loc')]
for url,n in Counter(urls).items():
    if n!=1:report(errors,ROOT/'sitemap.xml','duplicate: '+url)
    q,_=target(ROOT/'sitemap.xml',url)
    if q is not None and not q.is_file():report(errors,ROOT/'sitemap.xml','missing route: '+url)
for l in LANGS:
    if 'https://cranio.systems/'+l+'/potential/' not in urls:report(errors,ROOT/'sitemap.xml','missing Potential '+l)
report_data={'html_files':len(pages),'strict_core_pages':len(core),'sitemap_urls':len(urls),'errors':errors,'legacy_warnings':warnings}
(ROOT/'release-audit.json').write_text(json.dumps(report_data,ensure_ascii=False,indent=2))
print(json.dumps({k:v if not isinstance(v,list) else len(v) for k,v in report_data.items()},ensure_ascii=False))
for x in errors[:100]:print('ERROR',x['page'],x['issue'])
for x in warnings[:50]:print('LEGACY',x['page'],x['issue'])
# Both categories must be reviewed; fail on all broken references, not just newly reconstructed pages.
sys.exit(bool(errors or warnings))
