"""Scoped product home build: refresh existing pages from protected fragments, without rebuilding unrelated routes."""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
for key,path in [('root','index.html'),('en','en/index.html'),('ru','ru/index.html')]:
    p=ROOT/path
    fragment=(ROOT/'content'/f'home_{key}.fragment').read_text()
    assert fragment.count('data-product-home="2"')==1, key
    assert len(re.findall(r'<h1\b',fragment))==1, key
    source=p.read_text()
    updated,count=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:fragment,source,count=1,flags=re.S)
    assert count==1, path
    if updated!=source:p.write_text(updated)
print('Product home: root, en, ru. Other pages untouched.')
