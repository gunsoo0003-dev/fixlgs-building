import fs from 'node:fs';
const data=fs.readFileSync('app/analysis-v019-data.js','utf8');
const client=fs.readFileSync('app/AnalysisV008Client.js','utf8');
const css=fs.readFileSync('app/analysis.css','utf8');
const checks=[
 ['RIGHTS 02 core','권리가 있다는 사실보다 거래 후 어떻게 되는지가 중요합니다.'],
 ['RIGHTS 03-06',"node:'RIGHTS 07'"],['RIGHTS method',"type:'rightsSettlement'"],['RIGHTS report',"type:'rightsProcess'"],['RIGHTS summary',"type:'rightsJourney'"],
 ['BUILDING 02 core','싸게 산 건물이 반드시 싸게 끝나는 것은 아닙니다.'],
 ['BUILDING 03-06',"node:'BUILDING 07'"],['BUILDING method',"type:'buildingCost'"],['BUILDING report',"type:'buildingHiddenCost'"],['BUILDING summary',"type:'buildingFuture'"],
 ['LOCATION 02 core','사람이 많은 곳과 이 건물이 필요한 곳은 다를 수 있습니다.'],
 ['LOCATION 03-06',"node:'LOCATION 07'"],['LOCATION method',"type:'locationSustain'"],['LOCATION report',"type:'locationConversion'"],['LOCATION summary',"type:'locationDemandFlow'"],
 ['OPERATION 02 core','같은 수익률이라도 관리 난이도는 다를 수 있습니다.'],
 ['OPERATION 03-06',"node:'OPERATION 07'"],['OPERATION method',"type:'operationBurden'"],['OPERATION report',"type:'operationCompare'"],['OPERATION summary',"type:'operationBurdenSummary'"],
 ['all report mode',"reportCode:'RIGHTS'"],['all report mode 2',"reportCode:'BUILDING'"],['all report mode 3',"reportCode:'LOCATION'"],['all report mode 4',"reportCode:'OPERATION'"]
];
const clientChecks=[
 ['rights core renderer','rightsCore'],['building core renderer','buildingCore'],['location core renderer','locationCore'],['operation core renderer','operationCore'],
 ['rights method renderer','rightsSettlement'],['building method renderer','buildingCost'],['location method renderer','locationSustain'],['operation method renderer','operationBurden'],
 ['rights report renderer','rightsProcess'],['building report renderer','buildingHiddenCost'],['location report renderer','locationConversion'],['operation report renderer','operationCompare'],
 ['rights summary renderer','rightsJourney'],['building summary renderer','buildingFuture'],['location summary renderer','locationDemandFlow'],['operation summary renderer','operationBurdenSummary']
];
const cssChecks=['.an29-rights-core','.an29-building-core','.an29-location-core','.an29-operation-core','.an29-rights-report-graphic','.an29-building-report-graphic','.an29-location-report-graphic','.an29-operation-report-graphic'];
let fail=0;
for(const [name,n] of checks){const ok=data.includes(n);console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)fail++;}
for(const [name,n] of clientChecks){const ok=client.includes(n);console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)fail++;}
for(const n of cssChecks){const ok=css.includes(n);console.log(`${ok?'PASS':'FAIL'} css ${n}`);if(!ok)fail++;}
const noOldQuiz = !/id:'(?:rights|building|location|operation)'[\s\S]*?practice:\{facts:/.test(data);
console.log(`${noOldQuiz?'PASS':'FAIL'} old quiz removed from remaining axes`); if(!noOldQuiz) fail++;
if(fail){console.error(`V029 five-axis audit failed: ${fail}`);process.exit(1)}
console.log('ANALYSIS V029 FIVE-AXIS CONTENT + GRAPHICS PASS');
