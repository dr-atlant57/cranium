"""Real browser QA: representative products in four viewports, and all index routes at mobile width."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,os,threading
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
ROOT=Path(__file__).resolve().parents[1]
os.chdir(ROOT)
server=ThreadingHTTPServer(('127.0.0.1',0),SimpleHTTPRequestHandler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
routes=['/ru/','/en/','/ar/','/ja/','/de/','/ru/your-cranium/','/ar/configuration/','/en/potential/','/ru/professions/','/ru/professions/for-companies/','/ru/education/','/en/cases/','/ru/technology/','/ru/primordocciput/','/en/twinmind/','/ru/start/','/technology/vita-wellness/','/technology/vita-wellness/electric-human/']
errors=[];checked=0
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True)
    context=browser.new_context(accept_downloads=True,reduced_motion='reduce')
    page=context.new_page()
    runtime=[]
    page.on('pageerror',lambda e:runtime.append(str(e)))
    for width in (360,390,768,1440):
        page.set_viewport_size({'width':width,'height':900})
        for route in routes:
            runtime.clear()
            try:
                response=page.goto(base+route,wait_until='domcontentloaded',timeout=20000)
                if not response or response.status>=400:raise AssertionError('HTTP response')
                page.wait_for_timeout(100)
                if page.evaluate('document.documentElement.scrollWidth>innerWidth+2'):errors.append([route,width,'horizontal overflow'])
                if runtime:errors.extend([route,width,'JS '+x] for x in runtime)
                checked+=1
            except Exception as e:errors.append([route,width,str(e)])
    page.set_viewport_size({'width':390,'height':844})
    for route in ['/ru/your-cranium/','/ar/your-cranium/']:
        try:
            page.goto(base+route);page.locator('[data-observation]').first.check()
            assert page.locator('[data-count]').inner_text()=='1'
            with page.expect_download() as d:page.locator('[data-save]').click()
            path=d.value.path();data=json.loads(Path(path).read_text());assert data['schema']=='cranio.observations.v1' and len(data['records'])==1
            page.locator('[data-reset]').click();assert page.locator('[data-count]').inner_text()=='0'
        except Exception as e:errors.append([route,390,'Navigator: '+str(e)])
    try:
        page.goto(base+'/en/configuration/');page.locator('[data-angle]').first.fill('12');assert page.locator('output').first.inner_text()=='12°'
        page.locator('[data-reset]').click();assert page.locator('output').first.inner_text()=='0°'
        page.goto(base+'/en/potential/');page.locator('[data-rating]').first.select_option('5')
        with page.expect_download() as d:page.locator('[data-save]').click()
        data=json.loads(Path(d.value.path()).read_text());assert data['schema']=='cranio.reference-points.v1' and data['records'][0]['value']==5
        page.goto(base+'/en/twinmind/');page.locator('[data-tm-import]').set_input_files(str(d.value.path()));assert page.locator('[data-tm-list] article').count()==1
        page.locator('#tm-observation').fill('QA synthetic observation');page.locator('[data-tm-form] button').click();assert page.locator('[data-tm-list] article').count()==2
        with page.expect_download() as d2:page.locator('[data-tm-export]').click()
        assert len(json.loads(Path(d2.value.path()).read_text())['records'])==2
    except Exception as e:errors.append(['core continuity',390,str(e)])
    page.close()
    for file in sorted(ROOT.rglob('index.html')):
        if any(x in ('.git','node_modules') for x in file.relative_to(ROOT).parts):continue
        route='/'+file.parent.relative_to(ROOT).as_posix().replace('.','',1) if file.parent==ROOT else '/'+file.parent.relative_to(ROOT).as_posix()+'/'
        page=context.new_page()
        runtime=[]
        page.on('pageerror',lambda e:runtime.append(str(e)))
        try:
            response=page.goto(base+route,wait_until='load',timeout=15000)
            page.wait_for_timeout(120)
            if not response or response.status>=400:errors.append([route,390,'HTTP response'])
            if page.evaluate('document.documentElement.scrollWidth>innerWidth+2'):errors.append([route,390,'horizontal overflow'])
            if runtime:errors.extend([route,390,'JS '+x] for x in runtime)
            checked+=1
        except Exception as e:errors.append([route,390,str(e)])
        finally:page.close()
    browser.close()
server.shutdown()
(ROOT/'browser-audit.json').write_text(json.dumps({'page_visits':checked,'errors':errors},ensure_ascii=False,indent=2))
print('Browser visits:',checked,'Errors:',len(errors))
for e in errors[:100]:print(e)
raise SystemExit(bool(errors))
