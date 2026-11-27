"""Rebuild only CRANIO product home pages from one template, locale data and protected legacy content."""
from pathlib import Path
from html import escape
import json,re
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'content/product-home'
NAMES=['Personal Navigator','Configuration','Potential','Professional','Cases','Academy','Technology','Corporate','Research','TwinMind']
PAGES={'root':'index.html','en':'en/index.html','ru':'ru/index.html',**{l:f'{l}/index.html' for l in ('de','fr','es','it','pt','tr','ar','zh','ja','ko')}}

def esc(value):
    return escape(value,quote=True)

def render(key):
    if key not in ('root','ru','en'):
        return (ROOT/'content'/f'home_{key}.fragment').read_text()
    lang='ru' if key=='ru' else 'en'
    d=json.loads((SOURCE/'locales.json').read_text())[lang]
    template=(SOURCE/'template.html').read_text()
    prefix='' if key=='root' else '../'
    local='en/' if key=='root' else ''
    def url(route):
        return prefix+route if route.startswith('ru/') or route=='technology/vita-wellness/' else local+route
    links=[local+'your-cranium/',local+'configuration/',local+'potential/',prefix+'ru/professions/',local+'cases/',local+'education/',prefix+'technology/vita-wellness/',prefix+'ru/professions/for-companies/',local+'primordocciput/',local+'twinmind/']
    role_html=''.join(f'<details><summary>{esc(title)}{" · RU" if lang=="en" and route.startswith("ru/") else ""}</summary><p>{esc(desc)}</p><a href="{url(route)}">{esc(d["open"])} ↗</a></details>' for title,desc,route in d['roles'])
    axis_html=''.join(f'<details><summary>{esc(title)}</summary><p>{esc(desc)}</p></details>' for title,desc in d['axes'])
    product_html=''.join(f'<article><span class="px-state">{esc(d["status"][i])}</span><h3>{name}</h3><p>{esc(d["descriptions"][i])}</p><a href="{links[i]}">{esc(d["open"])} ↗</a></article>' for i,name in enumerate(NAMES))
    values={k:(v if k=='headline' else esc(v)) for k,v in d.items() if isinstance(v,str)}
    values.update(start=local+'start/',research=local+'c0-c1/',role_html=role_html,axis_html=axis_html,product_html=product_html)
    entry=re.sub(r'\{\{(\w+)\}\}',lambda m:values[m[1]],template)
    legacy=(SOURCE/f'legacy_{key}.fragment').read_text()
    legacy=legacy.replace('class="cr-hero"','class="px-legacy-hero"',1)
    legacy=re.sub(r'<h1\b([^>]*)>(.*?)</h1>',r'<h2\1>\2</h2>',legacy,count=1,flags=re.S)
    main,count=re.subn(r'(<main\b[^>]*><div class="wrap">)',lambda m:m[1]+'\n'+entry+'\n',legacy,count=1)
    assert count==1 and main.count('data-product-home="2"')==1 and len(re.findall(r'<h1\b',main))==1,key
    return main

def build():
    for key,path in PAGES.items():
        main=render(key)
        f=ROOT/'content'/f'home_{key}.fragment'
        if f.read_text()!=main:f.write_text(main)
        p=ROOT/path
        source=p.read_text()
        updated,count=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:main,source,count=1,flags=re.S)
        assert count==1,path
        if updated!=source:p.write_text(updated)
    print('Product home: root and 12 languages. Other pages untouched.')

if __name__=='__main__':
    build()
