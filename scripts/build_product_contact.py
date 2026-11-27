"""Rebuild ten localized contact pages without touching the established RU/EN forms."""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
for lang in ('de','fr','es','it','pt','tr','ar','zh','ja','ko'):
    p=ROOT/lang/'start/index.html'
    main=(ROOT/'content'/f'page_{lang}_start.fragment').read_text()
    source=p.read_text()
    updated,n=re.subn(r'<main\b[^>]*>.*?</main>',lambda _:main,source,count=1,flags=re.S)
    assert n==1,p
    if updated!=source:p.write_text(updated)
print('Ten localized contact pages refreshed.')
