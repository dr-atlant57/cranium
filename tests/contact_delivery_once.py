"""Explicit synthetic delivery smoke test. Never used by routine QA."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import os,threading,json
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
os.chdir(ROOT)
server=ThreadingHTTPServer(('127.0.0.1',0),SimpleHTTPRequestHandler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
marker='RFS TEST CRANIO QA 20261127 '+os.environ.get('GITHUB_RUN_ID','local')
email='rootfrontier.office@gmail.com'
results=[]
with sync_playwright() as pw:
    browser=pw.chromium.launch()
    ctx=browser.new_context()
    for route,selector in [('/ru/start/','#contactForm'),('/de/start/','[data-contact-product]'),('/ru/professions/for-companies/','.prof-form')]:
        page=ctx.new_page()
        try:
            page.goto(base+route,wait_until='load')
            f=page.locator(selector)
            f.locator('[name=name]').fill(marker)
            f.locator('[name=message]').fill(marker+' '+route+' — synthetic delivery test; no real client data.')
            if route.endswith('for-companies/'):
                f.locator('[name=contact]').fill(email)
                f.locator('[name=company]').fill('ROOT FRONTIER SYSTEMS QA')
                f.locator('[name=consent]').check()
            else:
                f.locator('[name=email]').fill(email)
            with page.expect_response(lambda r:'formsubmit.co/' in r.url and r.request.method=='POST',timeout=25000) as answer:
                f.locator('button[type=submit]').click()
            response=answer.value
            result={'route':route,'http_status':response.status,'recipient':email,'marker':marker}
            try:
                data=response.json()
                result['accepted']=data.get('success') in (True,'true')
                result['service_message']=str(data.get('message',''))[:300]
            except Exception:
                result['accepted']=None
                result['service_message']='Non-JSON response; inbox verification required.'
            results.append(result)
        except Exception as exc:
            results.append({'route':route,'error':str(exc)[:1200],'marker':marker})
        finally:
            page.close()
    browser.close()
server.shutdown()
print(json.dumps(results,ensure_ascii=False,indent=2))
(ROOT/'contact-delivery-audit.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
