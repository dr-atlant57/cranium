"""Focused visual/interaction QA and screenshots; network form calls are mocked here."""
from pathlib import Path
from playwright.sync_api import sync_playwright
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import os,threading,json
ROOT=Path(__file__).resolve().parents[1]
os.chdir(ROOT)
out=ROOT/'visual-qa';out.mkdir(exist_ok=True)
server=ThreadingHTTPServer(('127.0.0.1',0),SimpleHTTPRequestHandler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
langs='en ru de fr es it pt tr ar zh ja ko'.split()
with sync_playwright() as p:
    browser=p.chromium.launch()
    context=browser.new_context(reduced_motion='reduce',accept_downloads=True)
    page=context.new_page()
    for width,cols in [(360,3),(390,3),(768,4),(1440,6)]:
        page.set_viewport_size({'width':width,'height':900})
        for theme in ('light','dark','neutral'):
            page.goto(base+'/ru/')
            page.locator('[data-theme-select]').select_option(theme)
            assert page.locator('html').get_attribute('data-theme')==theme
            tiles=page.locator('footer .footer-grid>section:has(>a[hreflang])')
            assert tiles.locator('a[hreflang]').count()==12
            assert len(tiles.evaluate("(e)=>getComputedStyle(e).gridTemplateColumns.split(' ')"))==cols
            assert tiles.locator('a[hreflang="ru"]').get_attribute('aria-current')=='true'
            assert not page.evaluate('document.documentElement.scrollWidth>innerWidth+2')
            page.screenshot(path=str(out/f'home-ru-{width}-{theme}.png'))
            tiles.screenshot(path=str(out/f'footer-ru-{width}-{theme}.png'))
    page.set_viewport_size({'width':390,'height':844})
    page.goto(base+'/ar/potential/')
    assert page.locator('html').get_attribute('dir')=='rtl'
    assert page.locator('footer a[hreflang="ja"]').get_attribute('href').endswith('/ja/potential/')
    page.locator('footer a[hreflang="ja"]').click()
    page.wait_for_url('**/ja/potential/')
    assert page.locator('html').get_attribute('lang')=='ja'
    page.goto(base+'/ru/')
    menu=page.locator('header details.mobile-menu')
    menu.locator('summary').click()
    assert menu.get_attribute('open') is not None
    page.keyboard.press('Escape')
    assert menu.get_attribute('open') is None
    captured=[]
    def intercept(route):
        req=route.request
        headers={'access-control-allow-origin':'*','access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'content-type, accept'}
        if req.method=='OPTIONS':route.fulfill(status=204,headers=headers);return
        captured.append(req.post_data_json)
        route.fulfill(status=200,content_type='application/json',headers=headers,body=json.dumps({'success':True}))
    context.route('https://formsubmit.co/ajax/**',intercept)
    for lang in langs:
        page.goto(base+'/'+lang+'/start/')
        f=page.locator('#contactForm' if lang in ('en','ru') else '[data-contact-product]')
        f.locator('[name=name]').fill('QA TEST')
        f.locator('[name=email]').fill('rootfrontier.office@gmail.com')
        f.locator('[name=message]').fill('Synthetic local test, not sent')
        f.locator('button[type=submit]').click()
        page.wait_for_function("document.querySelector('form [name=message]').value === ''")
    assert len(captured)==12
    assert all(x['email']=='rootfrontier.office@gmail.com' and x['message']=='Synthetic local test, not sent' for x in captured)
    browser.close()
server.shutdown()
print('Visual QA: 12 theme/viewport combinations, language footer route continuity, RTL, menu keyboard, 12 mocked contact form submissions.')
