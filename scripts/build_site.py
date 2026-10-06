"""Keep static pages, localized navigation and versioned preferences consistent."""
from pathlib import Path
import json,re,posixpath,html,hashlib
ROOT=Path(__file__).resolve().parents[1]
DATA=json.loads((ROOT/'content/locales.json').read_text())
ROUTES=['experience','how-it-works','head-and-neck','cases','method','education','twinmind','explore']
NAMES={'en':'English','ru':'Русский','de':'Deutsch','fr':'Français','es':'Español','it':'Italiano','pt':'Português','tr':'Türkçe','ar':'العربية','zh':'中文','ja':'日本語','ko':'한국어'}
def esc(s):return html.escape(s,quote=True)
def rel(p,target):
 result=posixpath.relpath(target or '.',p.parent.relative_to(ROOT).as_posix())
 return result+('/' if not Path(target).suffix else '')
def href(p,lang,route=''):
 target=(lang+'/' if lang else '')+route
 return rel(p,target)
def cards(p,lang,indices):
 d=DATA[lang or 'en'];return '<div class="grid">'+''.join(f'<a class="card" href="{href(p,lang,ROUTES[i])}"><h3>{esc(d["nav"][i])}</h3><p>{esc(d["sections"][i][0])}</p></a>' for i in indices)+'</div>'
def experience_links(p,lang,limit=None):
 folder=ROOT/(lang or 'en')/'experience'
 files=sorted(folder.glob('*/index.html')); items=[]
 for f in files:
  s=f.read_text();title=re.search(r'<h1[^>]*>(.*?)</h1>',s,re.S)
  if title:items.append(f'<a class="problem" href="{rel(p,f.parent.relative_to(ROOT).as_posix())}">{title.group(1)}</a>')
 return '<div class="problem-grid">'+''.join(items[:limit] if limit else items)+'</div>'
# Complete the English tree instead of silently changing to unlocalized routes.
for src in (ROOT/'experience').glob('*/index.html'):
 dst=ROOT/'en'/src.relative_to(ROOT);dst.parent.mkdir(parents=True,exist_ok=True)
 if not dst.exists():dst.write_text(src.read_text())
for lang,d in DATA.items():
 home=ROOT/lang/'index.html';s=home.read_text()
 main=f'<main><div class="wrap"><section class="hero"><div class="eyebrow">CRANIO SYSTEMS</div><h1>{esc(d["home"][0])}</h1><p class="lead">{esc(d["home"][1])}</p><div class="actions"><a class="btn dark" href="{href(home,lang,"experience")}">{esc(d["nav"][0])}</a><a class="btn" href="{href(home,lang,"how-it-works")}">{esc(d["nav"][1])}</a></div></section><section class="section"><h2>{esc(d["library"])}</h2><p class="lead">{esc(d["sections"][0][1])}</p>{experience_links(home,lang,8)}<div class="actions"><a class="btn" href="{href(home,lang,"experience")}">{esc(d["library"])}</a></div></section><section class="section"><h2>{esc(d["sections"][1][0])}</h2><p class="lead">{esc(d["sections"][1][1])}</p>{cards(home,lang,[2,4,6])}</section><section class="section"><h2>{esc(d["nav"][5])}</h2><p class="lead">{esc(d["sections"][5][1])}</p>{cards(home,lang,[3,5,7])}</section></div></main>'
 s=re.sub(r'<main\b[^>]*>.*?</main>',main,s,flags=re.S);home.write_text(s)
 for i,route in enumerate(ROUTES):
  p=ROOT/lang/route/'index.html';s=p.read_text();match=re.search(r'<h1[^>]*>(.*?)</h1>',s,re.S)
  title=match.group(1) if match else esc(d['nav'][i])
  if i in [5,6,7]:title=esc(d['nav'][i])
  subtitle,paragraph=d['sections'][i]
  body=f'<div class="crumbs">CRANIO / {esc(d["nav"][i])}</div><h1>{title}</h1><p class="lead">{esc(paragraph)}</p>'
  if i==0:body+=f'<section class="section"><h2>{esc(d["library"])}</h2>{experience_links(p,lang)}</section>'
  elif i in [1,4]:
   steps=re.split(r'\s*[→←]\s*',d['sections'][4][0]);body+='<section class="section"><h2>'+esc(d['nav'][4])+'</h2><div class="steps">'+''.join(f'<div class="step"><div class="num">{j+1:02}</div><h3>{esc(t)}</h3></div>' for j,t in enumerate(steps))+'</div></section>'
  elif i==7:body+='<section class="section"><div class="domain-grid">'+''.join(f'<a href="{href(p,lang,r)}">{esc(label)}</a>' for r,label in [('primordocciput','Primordocciput'),('c0-c1','C0–C1'),('configuration',d['sections'][2][0]),('technology',d['sections'][7][0]),('logbook',d['sections'][3][0])])+'</div></section>'
  related={0:[1,2,6],1:[0,4,6],2:[0,4,3],3:[4,6,7],4:[2,3,5],5:[0,4,7],6:[0,3,4],7:[0,4,5]}[i]
  body+=f'<section class="section"><h2>{esc(d["next"])}</h2>{cards(p,lang,related)}</section><div class="actions"><a class="btn dark" href="{href(p,lang,"start")}">{esc(d["start"])}</a></div>'
  s=re.sub(r'<main\b[^>]*>.*?</main>',f'<main><div class="wrap"><article class="article">{body}</article></div></main>',s,flags=re.S)
  s=re.sub(r'<title>.*?</title>',f'<title>{esc(d["nav"][i])} — CRANIO</title>',s,flags=re.S);p.write_text(s)
 # Add the same observation entry to every localized Start page.
 p=ROOT/lang/'start/index.html';s=p.read_text()
 main=f'<main><div class="wrap"><article class="article"><div class="crumbs">CRANIO</div><h1>{esc(d["observe"])}</h1><p class="lead">{esc(d["sections"][0][1])}</p><form data-intake><label for="observation">{esc(d["record"])}</label><textarea id="observation" name="observation" required placeholder="{esc(d["prompt"])}"></textarea><div class="actions"><button class="btn dark" type="submit">{esc(d["start"])}</button></div><p class="status" role="status">{esc(d["offline"])}</p></form><section class="section">{cards(p,lang,[0,4,6])}</section></article></div></main>'
 p.write_text(re.sub(r'<main\b[^>]*>.*?</main>',main,s,flags=re.S))
# Footer labels and a browsable index expose every published page.
FOOTER_LABELS=dict(zip(DATA, [
 ['Sections','Model and research','Languages','Site map'],
 ['Разделы','Модель и исследования','Языки','Карта сайта'],
 ['Bereiche','Modell und Forschung','Sprachen','Sitemap'],
 ['Rubriques','Modèle et recherche','Langues','Plan du site'],
 ['Secciones','Modelo e investigación','Idiomas','Mapa del sitio'],
 ['Sezioni','Modello e ricerca','Lingue','Mappa del sito'],
 ['Seções','Modelo e pesquisa','Idiomas','Mapa do site'],
 ['Bölümler','Model ve araştırma','Diller','Site haritası'],
 ['الأقسام','النموذج والبحث','اللغات','خريطة الموقع'],
 ['栏目','模型与研究','语言','网站地图'],
 ['セクション','モデルと研究','言語','サイトマップ'],
 ['섹션','모델 및 연구','언어','사이트맵']]))
def page_title(f):
 if f.parent.name=="site-map":
  lang=f.relative_to(ROOT).parts[0];return FOOTER_LABELS[lang if lang in DATA else "en"][3]
 match=re.search(r'<h1[^>]*>(.*?)</h1>',f.read_text(),re.S)
 return html.unescape(re.sub('<[^>]+>','',match.group(1))) if match else f.parent.name
for language in ['',*DATA]:
 p=ROOT/(language or '.')/'site-map/index.html';p.parent.mkdir(parents=True,exist_ok=True)
 label=FOOTER_LABELS[language or 'en'][3]
 p.write_text(f'<!DOCTYPE html><html lang="{language or "en"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{esc(label)} — CRANIO</title></head><body><header></header><main></main><footer></footer></body></html>')
all_pages=sorted(f for f in ROOT.rglob('index.html') if f.relative_to(ROOT).as_posix()!='de/index/index.html')
for language in ['',*DATA]:
 p=ROOT/(language or '.')/'site-map/index.html';label=FOOTER_LABELS[language or 'en'][3];groups=[]
 for group in ['',*DATA]:
  files=[f for f in all_pages if (f.relative_to(ROOT).parts[0] if f.relative_to(ROOT).parts[0] in DATA else '')==group]
  links=''.join(f'<li><a href="{rel(p,f.parent.relative_to(ROOT).as_posix())}">{esc(page_title(f))}</a></li>' for f in files)
  groups.append(f'<details class="site-map-group"'+(' open' if group==language else '')+f'><summary>{esc(NAMES.get(group,"CRANIO SYSTEMS"))} · {len(files)}</summary><ul>{links}</ul></details>')
 main=f'<main><div class="wrap"><article class="article"><h1>{esc(label)}</h1><p>{len(all_pages)}</p>'+''.join(groups)+'</article></div></main>'
 p.write_text(p.read_text().replace('<main></main>',main))
def footer(p,lang):
 d=DATA[lang or 'en'];labels=FOOTER_LABELS[lang or 'en']
 primary=''.join(f'<a href="{href(p,lang,r)}">{esc(d["nav"][i])}</a>' for i,r in enumerate(ROUTES))
 deep=[]
 for route in ['your-cranium','c0-c1','primordocciput','configuration','technology','logbook','start']:
  target=ROOT/(lang or '.')/route/'index.html'
  if not target.exists():target=ROOT/'en'/route/'index.html'
  if target.exists():deep.append(f'<a href="{rel(p,target.parent.relative_to(ROOT).as_posix())}">{esc(page_title(target))}</a>')
 languages=''.join(f'<a href="{href(p,l)}" lang="{l}" hreflang="{l}">{esc(n)}</a>' for l,n in NAMES.items())
 return f'<footer><div class="wrap"><div class="footer-grid"><section><h2>{esc(labels[0])}</h2>{primary}</section><section><h2>{esc(labels[1])}</h2>'+''.join(deep)+f'</section><section><h2>{esc(labels[2])}</h2>{languages}</section></div><details class="footer-library"><summary>{esc(d["library"])}</summary>{experience_links(p,lang)}</details><div class="footer-bottom"><span>CRANIO SYSTEMS · <span data-year></span></span><a href="{href(p,lang,"site-map")}">{esc(labels[3])}</a></div></div></footer>'

# Each page has its own static eight-link header. It works without JavaScript.
ui={l:{k:d[k] for k in ['language','theme','themes','offline']} for l,d in DATA.items()}
runtime=(ROOT/'scripts/preferences.js').read_text().replace('__UI__',json.dumps(ui,ensure_ascii=False,separators=(',',':')))
routes={l:sorted('/'+f.parent.relative_to(ROOT/l).as_posix().strip('.')+'/' if f.parent!=ROOT/l else '/' for f in (ROOT/l).rglob('index.html') if '/index/index.html' not in f.as_posix()) for l in DATA}
runtime=runtime.replace('__ROUTES__',json.dumps(routes,separators=(',',':')))
js_name='app.'+hashlib.sha256(runtime.encode()).hexdigest()[:12]+'.js';(ROOT/js_name).write_text(runtime);(ROOT/'app.js').write_text(runtime)
css=(ROOT/'styles.css').read_text();css_name='styles.'+hashlib.sha256(css.encode()).hexdigest()[:12]+'.css';(ROOT/css_name).write_text(css)
for p in ROOT.rglob('*.html'):
 if p.relative_to(ROOT).as_posix()=='de/index/index.html':continue
 lang=p.relative_to(ROOT).parts[0];lang=lang if lang in DATA else '';d=DATA[lang or 'en'];s=p.read_text()
 nav=''.join(f'<a href="{href(p,lang,r)}"'+(' aria-current="page"' if p.parent==ROOT/(lang or '.')/r else '')+f'>{esc(d["nav"][i])}</a>' for i,r in enumerate(ROUTES))
 language='<select class="control" data-language aria-label="'+esc(d['language'])+'"><option value="auto">'+esc(d['themes'][0])+'</option>'+''.join(f'<option value="{l}"'+(' selected' if l==(lang or 'en') else '')+f'>{esc(n)}</option>' for l,n in NAMES.items())+'</select>'
 theme='<select class="control" data-theme-select aria-label="'+esc(d['theme'])+'">'+''.join(f'<option value="{v}">{esc(t)}</option>' for v,t in zip(['system','light','neutral','dark'],d['themes']))+'</select>'
 header=f'<header><nav aria-label="CRANIO"><a class="brand" href="{href(p,lang)}">CRANIO<span class="brand-dot">.SYSTEMS</span></a><div class="preferences">{language}{theme}<a class="start" href="{href(p,lang,"start")}">{esc(d["start"])}</a></div><div class="navlinks">{nav}</div></nav></header>'
 s=re.sub(r'<header\b[^>]*>.*?</header>',header,s,flags=re.S)
 s=re.sub(r'<footer\b[^>]*>.*?</footer>',footer(p,lang),s,flags=re.S)
 s=re.sub(r'<script\b[^>]*src="[^"]*app[^"/]*\.js[^"\s]*"[^>]*>\s*</script>','',s)
 s=re.sub(r'<link\b[^>]*rel="stylesheet"[^>]*>','',s)
 s=s.replace('</head>',f'<link rel="stylesheet" href="{rel(p,css_name)}"></head>').replace('</body>',f'<script src="{rel(p,js_name)}"></script></body>')
 canonical='https://cranio.systems/'+('' if p.parent==ROOT else p.parent.relative_to(ROOT).as_posix()+'/')
 s=re.sub(r'<link rel="canonical"[^>]*>','',s);s=s.replace('</head>',f'<link rel="canonical" href="{canonical}"></head>')
 # Copied English experience detail links now remain in English.
 if lang=='en' and p.parent.parent==ROOT/'en/experience':
  def local(m):
   url=m.group(1)
   if url.startswith(('http','#')):return m.group(0)
   path=posixpath.normpath(posixpath.join('experience/'+p.parent.name,url))
   target=ROOT/'en'/path
   if target.is_dir():return 'href="'+rel(p,target.relative_to(ROOT).as_posix())+'"'
   return m.group(0)
  # Original detail-page relative links already describe sibling English routes.
 s=s.replace('<html lang="ar">','<html lang="ar" dir="rtl">');p.write_text(s)
urls=['https://cranio.systems/'+('' if p.parent==ROOT else p.parent.relative_to(ROOT).as_posix()+'/') for p in ROOT.rglob('index.html') if p.relative_to(ROOT).as_posix()!='de/index/index.html']
(ROOT/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'<url><loc>{u}</loc></url>\n' for u in sorted(urls))+'</urlset>\n')
print(json.dumps({'pages':len(urls),'languages':len(DATA),'script':js_name,'css':css_name}))
