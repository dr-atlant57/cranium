const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const code = fs.readFileSync('app.js', 'utf8');
function run({path='/',browser=['en-US'],saved={},dark=false,blocked=false}={}) {
 const handlers={}; const storage={...saved}; const moves=[];
 const root={dataset:{},style:{},textContent:'CONTENT MUST SURVIVE'};
 const element=key=>({value:'',addEventListener:(event,callback)=>handlers[key]=callback});
 const theme=element('theme'),language=element('language');
 const media={matches:dark,addEventListener:(event,callback)=>handlers.media=callback};
 const context={document:{documentElement:root,currentScript:{src:'https://test.example/cranium/app.js'},querySelectorAll:selector=>selector==='[data-theme-select]'?[theme]:selector==='[data-language]'?[language]:[]},location:{pathname:'/cranium'+path,search:'?x=1',hash:'#section',replace:url=>moves.push(['replace',url]),assign:url=>moves.push(['assign',url])},navigator:{languages:browser,language:browser[0]},window:{matchMedia:()=>media},localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return storage[key]||null;},setItem:(key,value)=>{if(blocked)throw Error('blocked');storage[key]=value;}},URL,Date};
 vm.runInNewContext(code,context);
 return {root,theme,language,storage,moves,handlers,media};
}
let x=run({browser:['xx','ru-KG']});assert.equal(x.moves[0][1],'/cranium/ru/?x=1#section');
x=run({browser:['de-DE'],saved:{cranio_locale:'fr'}});assert.equal(x.moves[0][1],'/cranium/fr/?x=1#section');
x=run({path:'/experience/neck-tension/',browser:['en-GB']});assert.equal(x.moves[0][1],'/cranium/en/experience/neck-tension/?x=1#section');
x=run({path:'/ja/experience/',browser:['ru']});assert.equal(x.moves.length,0);assert.equal(x.language.value,'ja');
x=run({browser:['unsupported']});assert.equal(x.moves[0][1],'/cranium/en/?x=1#section');
x=run({browser:['ru'],blocked:true});assert.equal(x.moves[0][1],'/cranium/ru/?x=1#section');
x=run({path:'/ru/',dark:true});assert.equal(x.root.dataset.theme,'dark');assert.equal(x.theme.value,'system');x.media.matches=false;x.handlers.media();assert.equal(x.root.dataset.theme,'light');
x.theme.value='neutral';x.handlers.theme();assert.equal(x.root.dataset.theme,'neutral');assert.equal(x.storage.cranio_theme,'neutral');x.media.matches=true;x.handlers.media();assert.equal(x.root.dataset.theme,'neutral');
x=run({path:'/ru/',saved:{cranio_theme:'dark'},dark:false});assert.equal(x.root.dataset.theme,'dark');
x=run({path:'/ru/',blocked:true});x.theme.value='neutral';x.handlers.theme();assert.equal(x.root.dataset.theme,'neutral');assert.equal(x.root.textContent,'CONTENT MUST SURVIVE');
x=run({path:'/ar/how-it-works/'});x.language.value='ko';x.handlers.language();assert.equal(x.moves[0][1],'/cranium/ko/how-it-works/?x=1#section');assert.equal(x.storage.cranio_locale,'ko');
console.log('Preferences: browser locales, explicit URLs, saved choices, blocked storage, system theme, neutral theme and route continuity passed.');
