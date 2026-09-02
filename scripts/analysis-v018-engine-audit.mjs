import fs from 'node:fs';

const root=new URL('../',import.meta.url);
const read=(p)=>fs.readFileSync(new URL(p,root),'utf8');
const v018=read('app/analysis-v018-engine-explained.js');
const v013=read('app/analysis-v013-ko-data.js');
const v015=read('app/analysis-v015-ko-data.js');
const client=read('app/AnalysisV008Client.js');

const axes={PRICE:7,INCOME:6,FINANCE:6,TENANCY:6,BUILDING:6,SURVIVAL:6};
const fail=[];
const pass=(name,ok,detail='')=>{ if(!ok) fail.push(`${name}${detail?`: ${detail}`:''}`); console.log(`${ok?'PASS':'FAIL'}  ${name}${detail?` — ${detail}`:''}`); };

pass('V018 client import',client.includes("./analysis-v018-engine-explained"));
pass('Korean concept uses V018',client.includes("ANALYSIS_V018_CONCEPT_KO"));
pass('Korean learn uses V018',client.includes("ANALYSIS_V018_LEARN_KO"));
pass('Korean practice uses V018',client.includes("ANALYSIS_V018_PRACTICE_KO"));
pass('Forced density UI removed',!client.includes('stage.density'));
pass('No quiz/test UI',!client.includes('QUIZ_KO')&&!client.includes('quiz'));
pass('Synthesis uses V018',client.includes('ANALYSIS_SYNTHESIS_KO_V018'));
pass('Reusable order uses V018',client.includes('ANALYSIS_REUSE_STEPS_KO_V018'));

for(const [axis,count] of Object.entries(axes)){
  let n=0;
  for(let i=1;i<=count;i++){
    const id=`${axis}${String(i).padStart(2,'0')}`;
    if(v013.includes(`make('${id}'`)) n++;
  }
  pass(`${axis} engine nodes`,n===count,`${n}/${count}`);
}

const total=Object.entries(axes).reduce((a,[axis,count])=>{
  let n=0; for(let i=1;i<=count;i++) if(v013.includes(`make('${axis}${String(i).padStart(2,'0')}'`)) n++;
  return a+n;
},0);
pass('Engine nodes total',total===37,`${total}/37`);

// V015 practice maps every V013 learning node into the same case.
pass('Practice generated from engine nodes',v015.includes('...ANALYSIS_V013_LEARN_KO.map(makePracticeFromEngine)'));
pass('Practice baseline retained',v015.includes("id:'P02'"));
pass('No active V017 density dependency',!v018.includes('analysis-v017-density')&&!v018.includes('analysis-v016-ko-final'));
pass('No density payload in V018',!v018.includes('density:'));
pass('Synthesis is connection-based',v018.includes('ANALYSIS_SYNTHESIS_KO_V018') && client.includes('an17-synthesis-chain'));
pass('Korean P40 recap visual suppressed',client.includes("stage.id==='P40'&&locale==='ko'"));
pass('No new graphics overhaul in V018',!v018.includes('svg')&&!v018.includes('canvas'));

// Engine explanation fields exist in the source learning constructor/data.
for(const field of ['body','concept','data','rule','caution','takeaway']){
  pass(`Learning field: ${field}`,v013.includes(field));
}

if(fail.length){
  console.error(`\nV018 AUDIT FAILED (${fail.length})`);
  for(const x of fail) console.error(`- ${x}`);
  process.exit(1);
}
console.log('\nV018 ENGINE-EXPLAINED AUDIT PASS');
