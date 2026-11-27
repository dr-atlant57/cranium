const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const code=fs.readFileSync('app.45a95d0cd6ba.js','utf8');
const match=code.match(/const routes = (\{[^\n]+\});/);
assert.ok(match,'language route manifest');
const routes=JSON.parse(match[1]);assert.equal(Object.keys(routes).length,12);
for(const lang of Object.keys(routes))for(const r of ['/','/your-cranium/','/configuration/','/potential/'])assert.ok(routes[lang].includes(r),lang+' '+r);
for(const file of ['app.45a95d0cd6ba.js','product-core.js','product-professional.js','product-twinmind.js'])new vm.Script(fs.readFileSync(file,'utf8'),{filename:file});
console.log('Runtime syntax and twelve-language core routing verified.');
