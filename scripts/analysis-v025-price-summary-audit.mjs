import fs from 'node:fs';

const data=fs.readFileSync(new URL('../app/analysis-v019-data.js', import.meta.url),'utf8');
const client=fs.readFileSync(new URL('../app/AnalysisV008Client.js', import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../app/analysis.css', import.meta.url),'utf8');
const checks=[
  ['핵심 질문','이 가격이 설명되는가?'],
  ['비교 기준','비교 기준'],
  ['조건 근거','조건 근거'],
  ['수익 지지력','수익 지지력'],
  ['최종 원칙','좋은 가격분석은 적정가격 숫자 하나를 맞히는 능력이 아니라'],
  ['다음 축 연결','가격을 확인했다면, 다음은 수익입니다.'],
];
let failed=false;
for(const [label,needle] of checks){
  const ok=data.includes(needle);
  console.log(`${ok?'PASS':'FAIL'} ${label}`);
  if(!ok) failed=true;
}
for(const [label,src,needle] of [
  ['전용 Summary 컴포넌트',client,'function PriceSummary'],
  ['전용 핵심 그래픽',client,'function PricePrincipleGraphic'],
  ['V025 스타일',css,'.an25-price-summary'],
]){
  const ok=src.includes(needle);
  console.log(`${ok?'PASS':'FAIL'} ${label}`);
  if(!ok) failed=true;
}
if(/06 · 다시 한 번 정리/.test(client)){
  console.log('FAIL 기존 반복 요약 제목 잔존');
  failed=true;
}else console.log('PASS 기존 반복 요약 제목 제거');
process.exit(failed?1:0);
