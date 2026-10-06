from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import json,re
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content/locales.json').read_text())
route_names=['experience','how-it-works','head-and-neck','cases','method','education','twinmind','explore']
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.nav=False;self.labels=[];self.current=None
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='div' and a.get('class')=='navlinks':self.nav=True
  if t=='a' and self.nav:self.current='';self.links.append(a.get('href'))
 def handle_data(self,s):
  if self.current is not None:self.current+=s
 def handle_endtag(self,t):
  if t=='a' and self.current is not None:self.labels.append(self.current);self.current=None
  if t=='div' and self.nav:self.nav=False
count=0
for p in root.rglob('*.html'):
 if p.relative_to(root).as_posix()=='de/index/index.html':continue
 s=p.read_text();page=Page();page.feed(s);lang=p.relative_to(root).parts[0];lang=lang if lang in data else 'en'
 assert page.labels==data[lang]['nav'],(p,page.labels)
 assert len(page.links)==8
 for i,u in enumerate(page.links):
  target=(p.parent/urlsplit(u).path).resolve();assert (target/'index.html').exists(),(p,u)
  assert target.name==route_names[i]
 assert len(re.findall(r'<script[^>]+src=',s))==1,p
 for attr,u in re.findall(r'(href|src)="([^"]+)"',s):
  v=urlsplit(u)
  if v.scheme or v.netloc or not v.path:continue
  target=(p.parent/v.path).resolve()
  if target.is_dir():target=target/'index.html'
  assert target.exists(),(p,u)
 count+=1
for lang in data:
 for r in ['',*route_names]:
  s=(root/lang/r/'index.html').read_text();main=re.search(r'<main.*?</main>',s,re.S).group(0)
  assert len(re.sub('<[^>]+>','',main))>(100 if lang in ['zh','ja','ko'] else 250),(lang,r)
 assert len(list((root/lang/'experience').glob('*/index.html')))==24,lang
print(f'Static contract: {count} pages; eight translated links per page; 12 complete experience libraries; nonempty core pages; all local assets and links exist.')
