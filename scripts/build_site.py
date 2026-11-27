"""Safe entry point for reconstructed CRANIO pages.

The pre-reconstruction generator is preserved separately for analysis; it can
overwrite handcrafted pages, contact routes, SEO metadata and runtime assets.
No routine build invokes it.
"""
from pathlib import Path
import runpy,sys
HERE=Path(__file__).resolve().parent
MODES={'--product-home':'build_product_home.py','--product-core':'build_product_core.py','--product-academy':'build_product_academy.py','--product-depth':'build_product_depth.py'}
args=sys.argv[1:]
if args and args!=['--all-products'] and (len(args)!=1 or args[0] not in MODES):
    raise SystemExit('Use --all-products or one of '+', '.join(MODES))
for flag,script in MODES.items():
    if not args or args==['--all-products'] or args==[flag]:
        runpy.run_path(str(HERE/script),run_name='__main__')
print('Scoped product build complete. Standalone and other existing pages preserved.')
