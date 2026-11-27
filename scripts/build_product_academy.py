"""Scoped build of Academy pages, preserving their existing page shells."""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
for lang in ('ru','en'):
    p=ROOT/lang/'education/index.html'
    main=(ROOT/'content'/f'page_{lang}_education.fragment').read_text()
    assert len(re.findall(r'<h1\b',main))==1
    source=p.read_text()
    updated,count=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:main,source,count=1,flags=re.S)
    assert count==1,p
    if source!=updated:p.write_text(updated)
print('Academy RU/EN refreshed.')
