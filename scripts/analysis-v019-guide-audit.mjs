import fs from 'node:fs';
const files=['app/analysis-v019-data.js','app/AnalysisV008Client.js','app/AnalysisPage.js','app/analysis.css','app/sitemap.js','app/robots.js'];
for(const f of files){if(!fs.existsSync(f)) throw new Error(`missing ${f}`)}
const data=fs.readFileSync('app/analysis-v019-data.js','utf8');
const client=fs.readFileSync('app/AnalysisV008Client.js','utf8');
const css=fs.readFileSync('app/analysis.css','utf8');
const axes=['PRICE','INCOME','RIGHTS','BUILDING','LOCATION','OPERATION'];
for(const x of axes){if(!data.includes(`code:'${x}'`)) throw new Error(`missing axis ${x}`)}
for(const key of ['terms:','concept:','steps:','practice:','tools:']) if((data.match(new RegExp(key.replace(':','\\:'),'g'))||[]).length<6) throw new Error(`axis structure incomplete ${key}`);
if((data.match(/name:'/g)||[]).length<13) throw new Error('tools/axes data incomplete');
if(!client.includes('ANALYSIS TOOLS 07')) throw new Error('tools section missing');
if(!client.includes('FIX ANALYSIS')) throw new Error('practice result missing');
if(!css.includes('@media(max-width:620px)')) throw new Error('mobile styles missing');
if(/<table|<thead|<tbody|<tr|<td/.test(client)) throw new Error('table markup found');
console.log('ANALYSIS V019 GUIDE AUDIT PASS');
console.log('6 axes:',axes.join(' / '));
console.log('7 tools: PASS');
console.log('axis flow: terms → concept → method → practice → tools: PASS');
console.log('HTML tables: 0');
console.log('mobile CSS: PASS');
