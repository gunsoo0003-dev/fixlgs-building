import fs from 'node:fs';

const read=(p)=>fs.readFileSync(p,'utf8');
const v13=read('app/analysis-v013-ko-data.js');
const v15=read('app/analysis-v015-ko-data.js');
const v17=read('app/analysis-v017-density.js');
const client=read('app/AnalysisV008Client.js');
const page=read('app/AnalysisPage.js');

const failures=[];
const pass=(name,ok,detail='')=>{if(!ok)failures.push(`${name}${detail?`: ${detail}`:''}`);console.log(`${ok?'PASS':'FAIL'}  ${name}${detail?` — ${detail}`:''}`)};

const engineIds=[...v13.matchAll(/make\('((?:PRICE|INCOME|FINANCE|TENANCY|BUILDING|SURVIVAL)\d{2})'/g)].map(m=>m[1]);
const nodeBlock=v17.split('const NODE_DENSITY={')[1]?.split('\n};\n\nconst AXIS_REUSE')[0]||'';
const densityIds=[...nodeBlock.matchAll(/\n\s*((?:PRICE|INCOME|FINANCE|TENANCY|BUILDING|SURVIVAL)\d{2}):\{/g)].map(m=>m[1]);
const conceptBlock=v17.split('const CONCEPT_DENSITY={')[1]?.split('\n};\n\nconst NODE_DENSITY')[0]||'';
const conceptIds=[...conceptBlock.matchAll(/\n\s*(C\d{2}):\{/g)].map(m=>m[1]);

pass('엔진 지식노드 37개',engineIds.length===37,`${engineIds.length}/37`);
for(const [axis,n] of Object.entries({PRICE:7,INCOME:6,FINANCE:6,TENANCY:6,BUILDING:6,SURVIVAL:6})){
  pass(`${axis} 노드 보존`,engineIds.filter(x=>x.startsWith(axis)).length===n,`${engineIds.filter(x=>x.startsWith(axis)).length}/${n}`);
}
const missing=engineIds.filter(id=>!densityIds.includes(id));
const extra=densityIds.filter(id=>!engineIds.includes(id));
pass('37개 노드 밀도설계 1:1 대응',missing.length===0&&extra.length===0,`밀도 ${densityIds.length}/37`);
pass('개념 8페이지 밀도설계',conceptIds.length===8,`${conceptIds.length}/8`);

for(const id of engineIds){
  const start=nodeBlock.indexOf(`${id}:{`);
  const later=densityIds.map(x=>nodeBlock.indexOf(`${x}:{`,start+1)).filter(x=>x>start);
  const end=later.length?Math.min(...later):nodeBlock.length;
  const seg=nodeBlock.slice(start,end);
  for(const field of ['first:','missing:','how:','reuse:']) pass(`${id} ${field.slice(0,-1)}`,seg.includes(field));
}

pass('학습 UI에 첫 생각/빠진 조건 노출',client.includes('처음 보면 이렇게 생각하기 쉽습니다')&&client.includes('하지만 여기서 빠진 조건이 있습니다'));
pass('학습 UI에 확인 순서 노출',client.includes('실제로 분석할 때는 이렇게 확인합니다'));
pass('학습 UI에 다른 건물 재사용법 노출',client.includes('다른 건물에서는 이렇게 다시 씁니다'));
pass('실전 UI에 왜 지금 하는지 노출',client.includes('왜 지금 이 분석을 하는가'));
pass('실전 UI에 실제 순서 노출',client.includes('이번 사례에서 실제로 따라갈 순서'));
pass('실전 UI에 다음 단계 연결 유지',client.includes('이 결과를 다음에 어떻게 쓰나'));
pass('실전 UI에 다른 건물 재사용법 노출',client.includes('이 방법을 다른 건물에 적용하면'));

pass('실전 41페이지 구조',2+engineIds.length+2===41,'2 시작/기준선 + 37 엔진 + 2 연결/마무리');
pass('BASELINE 가용자금 10억원',v17.includes('가용자금 10억원'));
pass('BASELINE 최소 보유현금 1억원',v17.includes('최소 보유현금 1억원'));
pass('BASELINE 투입가능 자기자본 9억원',v17.includes('자기자본 최대 9억원'));

pass('종합은 6축 다시보기 UI가 아님',!client.includes('review.axes.map')&&client.includes('an17-synthesis-chain'));
for(const title of ['가격과 수익을 연결하면','운영수익에 금융구조를 붙이면','그 현금흐름이 계속된다고 가정할 수 있는지 보면','여기에 건물 자체의 현금수요를 붙이면','마지막으로 악화조건을 겹치면']) pass(`종합 연결: ${title}`,v17.includes(title));
pass('종합판단 별도 존재',v17.includes('그래서 이 사례를 종합하면'));

pass('사용자 시험 UI 제거',!client.includes('QUIZ_KO_V016')&&!client.includes("mode==='quiz'")&&!client.includes('내가 이해했는지 확인하기'));
pass('SEO 초기 DOM도 V017 사용',page.includes('ANALYSIS_V017_CONCEPT_KO')&&page.includes('ANALYSIS_V017_LEARN_KO')&&page.includes('ANALYSIS_V017_PRACTICE_KO'));
pass('SEO에서 시험 콘텐츠 제거',!page.includes('QUIZ_KO_V016')&&!page.includes('이해도 확인'));
pass('SEO에 종합 연결 포함',page.includes('ANALYSIS_SYNTHESIS_KO_V017'));

const facts=v13+'\n'+v15+'\n'+v17;
for(const [name,needles] of Object.entries({
  PRICE:['14억 2천만원','15억 1천만원','13억 8천만원'],
  INCOME:['9,600만원','8,400만원','7,000만원','4.7%'],
  FINANCE:['6억원','10억원','3,000만원','7,000만원','+4,000만원'],
  TENANCY:['3,600만원','43%','14개월','900만원','1,800만원'],
  BUILDING:['2,000만원','1,500만원','5,000만원'],
  SURVIVAL:['+2,500만원','-1,900만원','+1,000만원','-3,800만원']
})) pass(`${name} 핵심수치 보존`,needles.every(x=>facts.includes(x)));

if(failures.length){
  console.error(`\n${failures.length}개 FAIL`);
  process.exit(1);
}
console.log('\nALL DENSITY CHECKS PASS');
