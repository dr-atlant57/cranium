"""Verify the deployed reconstruction, then submit two synthetic corporate contact probes.
No personal client data, no CAPTCHA bypass; acceptance requires inbox verification separately.
"""
import json,os,time
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE='https://cranio.systems'
LANGS='en ru de fr es it pt tr ar zh ja ko'.split()
marker='RFS TEST CRANIO V2 '+os.environ.get('GITHUB_RUN_ID','local')
report={'marker':marker,'public_pages':[],'contact_probes':[]}
with sync_playwright() as p:
    browser=p.chromium.launch()
    ctx=browser.new_context(viewport={'width':390,'height':844},reduced_motion='reduce')
    page=ctx.new_page()
    # Pages publishes asynchronously; do not test the old release.
    for i in range(30):
        try:
            page.goto(BASE+'/ru/?release_probe='+marker.replace(' ','-'),wait_until='domcontentloaded',timeout=20000)
            if page.locator('#px-title').count() and page.locator('footer a[hreflang]').count()==12:
                report['deployed']=True;break
        except Exception:pass
        time.sleep(10)
    else:report['deployed']=False
    if report['deployed']:
        for lang in LANGS:
            for route in ('','your-cranium/','configuration/','potential/','start/'):
                url=BASE+'/'+lang+'/'+route
                item={'url':url}
                try:
                    res=page.goto(url,wait_until='domcontentloaded',timeout=20000)
                    item['status']=res.status
                    item['lang']=page.locator('html').get_attribute('lang')
                    item['overflow']=page.evaluate('document.documentElement.scrollWidth>innerWidth+2')
                    item['footer_languages']=page.locator('footer a[hreflang]').count()
                    item['ok']=item['status']==200 and item['lang']==lang and not item['overflow'] and item['footer_languages']==12
                except Exception as e:item['ok']=False;item['error']=str(e)[:500]
                report['public_pages'].append(item)
        for route,selector,native in [('/ru/start/','[data-contact-product]',False),('/ru/recognition/','#consult-form',True)]:
            q=ctx.new_page()
            result={'route':route}
            try:
                q.goto(BASE+route,wait_until='domcontentloaded',timeout=20000)
                f=q.locator(selector)
                if f.get_attribute('action')!='https://formsubmit.co/rootfrontier.office@gmail.com':
                    raise ValueError('Unexpected recipient; not submitted')
                f.locator('[name=name]').fill(marker)
                f.locator('[name=contact]' if native else '[name=email]').fill('rootfrontier.office@gmail.com')
                f.locator('[name=message]').fill(marker+' '+route+' — synthetic release test; no real client data.')
                if native:f.locator('[name=consent]').check()
                q.on('requestfailed',lambda r:print('Request failed:',r.url,r.failure) if 'formsubmit.co' in r.url else None)
                with q.expect_response(lambda r:'formsubmit.co/' in r.url and r.request.method=='POST',timeout=25000) as response:
                    f.locator('button[type=submit]').click()
                r=response.value
                result['provider_http']=r.status
                if native:
                    q.wait_for_load_state('domcontentloaded',timeout=15000)
                    result['final_url']=q.url
                    result['challenge_present']=q.locator('iframe[src*="recaptcha"]').count()>0
                    result['provider_text']=q.locator('body').inner_text()[:800]
                else:
                    j=r.json();result['accepted']=j.get('success') in (True,'true');result['provider_message']=str(j.get('message',''))[:250]
            except Exception as e:result['error']=str(e)[:800]
            finally:q.close()
            report['contact_probes'].append(result)
    browser.close()
print(json.dumps(report,ensure_ascii=False,indent=2))
Path('production-acceptance.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
raise SystemExit(not report.get('deployed') or len(report['public_pages'])!=60 or not all(x['ok'] for x in report['public_pages']))
