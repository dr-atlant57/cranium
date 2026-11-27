"""One explicit real-domain native form test. No CAPTCHA bypass; no client data."""
from playwright.sync_api import sync_playwright
import json,os
marker='RFS TEST CRANIO NATIVE 20261127 '+os.environ.get('GITHUB_RUN_ID','local')
result={'marker':marker,'site':'https://cranio.systems/ru/recognition/'}
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page()
    try:
        response=page.goto(result['site'],wait_until='domcontentloaded',timeout=30000)
        result['site_http']=response.status
        f=page.locator('#consult-form')
        result['action']=f.get_attribute('action')
        if result['action']!='https://formsubmit.co/rootfrontier.office@gmail.com':
            raise ValueError('Published form does not point to authorized corporate recipient; no submission.')
        f.locator('[name=name]').fill(marker)
        f.locator('[name=contact]').fill('rootfrontier.office@gmail.com')
        f.locator('[name=message]').fill(marker+' — synthetic QA, no client data.')
        f.locator('[name=consent]').check()
        page.on('requestfailed',lambda r: print('Failed request:',r.url,r.failure) if 'formsubmit.co' in r.url else None)
        with page.expect_response(lambda r:'formsubmit.co/' in r.url and r.request.method=='POST',timeout=30000) as pending:
            f.locator('button[type=submit]').click()
        r=pending.value;result['provider_http']=r.status
        page.wait_for_load_state('domcontentloaded',timeout=15000)
        result['final_url']=page.url
        result['page_text']=page.locator('body').inner_text()[:1400]
        result['challenge_present']=page.locator('iframe[src*="recaptcha"]').count()>0
    except Exception as e:result['error']=str(e)[:800]
    browser.close()
print(json.dumps(result,ensure_ascii=False))
raise SystemExit(0 if result.get('provider_http',500)<400 and not result.get('challenge_present') else 1)
