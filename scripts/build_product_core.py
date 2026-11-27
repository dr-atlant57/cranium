"""Scoped core product build; canonical fragments retain original page shells."""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
for lang in ('ru','en'):
    for route in ('your-cranium','configuration','potential'):
        p=ROOT/lang/route/'index.html'
        main=(ROOT/'content/product-core'/f'{lang}_{route}.fragment').read_text()
        assert len(re.findall(r'<h1\b',main))==1
        source=p.read_text()
        updated,n=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:main,source,count=1,flags=re.S)
        assert n==1,p
        if source!=updated:p.write_text(updated)
print('Six product core pages refreshed.')
