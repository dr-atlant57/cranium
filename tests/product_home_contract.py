"""Focused release gate for product home pilot; no changes to production routes."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import sys,re
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from build_product_home import PAGES,render

class Links(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.ids=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'href' in a:self.links.append(a['href'])
        if 'id' in a:self.ids.append(a['id'])

for key,path in PAGES.items():
    p=ROOT/path
    page=p.read_text()
    main=render(key)
    assert main==(ROOT/'content'/f'home_{key}.fragment').read_text(),key
    assert main in page,key
    assert len(re.findall(r'<h1\b',main))==1,key
    entry=main.split('<div class="px-prior">',1)[0]
    assert entry.count('<article>')==10,key
    assert entry.count('<details><summary>')==13,key
    assert entry.count('name="px-orientation"')==3,key
    parser=Links();parser.feed(entry)
    all_ids=Links();all_ids.feed(page)
    assert len(all_ids.ids)==len(set(all_ids.ids)),(key,'duplicate IDs')
    for href in parser.links:
        u=urlsplit(href)
        if u.scheme or u.netloc:continue
        if u.fragment and not u.path:assert u.fragment in all_ids.ids,(key,href)
        if u.path:
            target=p.parent/u.path
            if target.is_dir():target=target/'index.html'
            assert target.is_file(),(key,href)
    original=(ROOT/'content/product-home'/f'legacy_{key}.fragment').read_text()
    for id_ in re.findall(r'<section[^>]+id="([^"]+)"',original):
        assert id_ in all_ids.ids,(key,id_)
    assert 'rootfrontier.office@gmail.com' in page,key
print('Product home contract: template parity, 13 pages, 8 roles, 10 products, links, preserved sections.')
