import fs from 'node:fs';
const data=fs.readFileSync('app/analysis-v019-data.js','utf8');
const client=fs.readFileSync('app/AnalysisV008Client.js','utf8');
const css=fs.readFileSync('app/analysis.css','utf8');
const checks=[
  ['INCOME axis', "id:'income'"],
  ['core idea', '들어오는 돈이 모두 수익은 아닙니다.'],
  ['reason 01', "node:'INCOME 01'"],
  ['reason 07', "node:'INCOME 07'"],
  ['method guide', '실제로 남는 돈을 이렇게 확인합니다.'],
  ['method graphic contract', "type:'incomeContract'"],
  ['method graphic stability', "type:'incomeStability'"],
  ['case report', "reportCode:'INCOME'"],
  ['income waterfall', "type:'incomeWaterfall'"],
  ['income summary', '수익분석의 핵심'],
  ['principle', '실제로 남고 반복될 수 있는 수익을 확인하는 것입니다.'],
  ['next rights', "nextLabel:'NEXT · RIGHTS'"],
];
let fail=0;
for(const [name,needle] of checks){const ok=data.includes(needle); console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok) fail++;}
for(const [name,needle,src] of [
  ['client income core','incomeCore',client],['client income report','incomeWaterfall',client],['client income motion','an27-motion-ready',client],['css income core','.an28-income-core',css],['css income method','.an28-g-income-contract',css],['css income report','.an28-income-waterfall',css]
]){const ok=src.includes(needle); console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok) fail++;}
if(fail){console.error(`INCOME audit failed: ${fail}`); process.exit(1);} else console.log('INCOME audit PASS');
