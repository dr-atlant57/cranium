"""One explicit production-domain test of the currently published RU contact route."""
from playwright.sync_api import sync_playwright
import json,os
marker='RFS TEST CRANIO LIVE 20261127 '+os.environ.get('GITHUB_RUN_ID','local')
result={'marker':marker,'site':'https://cranio.systems/ru/start/'}
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page()
    try:
        response=page.goto(result['site'],wait_until='domcontentloaded',timeout=30000)
        result['site_http']=response.status
        result['actual_url']=page.url
        f=page.locator('#contactForm')
        f.locator('[name=name]').fill(marker)
        f.locator('[name=email]').fill('rootfrontier.office@gmail.com')
        f.locator('[name=message]').fill(marker+' — synthetic test of website contact, no client data.')
        page.on('requestfailed',lambda r: print('Failed request:',r.url,r.failure) if 'formsubmit.co' in r.url else None)
        with page.expect_response(lambda r:'formsubmit.co/' in r.url and r.request.method=='POST',timeout=25000) as pending:
            f.locator('button[type=submit]').click()
        r=pending.value;result['provider_http']=r.status
        try:
            j=r.json();result['accepted']=j.get('success') in (True,'true');result['provider_message']=str(j.get('message',''))[:250]
        except Exception:result['accepted']=False
    except Exception as e:result['error']=str(e)[:800]
    browser.close()
print(json.dumps(result,ensure_ascii=False))
raise SystemExit(not result.get('accepted'))
