"""Scoped build: preserve existing shells for Cases, Technology, Research, TwinMind."""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
for lang in ('ru','en'):
    for route in ('cases','technology','primordocciput','c0-c1','logbook','twinmind'):
        p=ROOT/lang/route/'index.html'
        main=(ROOT/'content'/f'page_{lang}_{route}.fragment').read_text()
        assert len(re.findall(r'<h1\b',main))==1
        source=p.read_text()
        updated,n=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:main,source,count=1,flags=re.S)
        assert n==1,p
        if updated!=source:p.write_text(updated)
print('Twelve product depth pages refreshed.')
