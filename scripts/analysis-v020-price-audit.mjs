import fs from 'node:fs';
const data=fs.readFileSync('app/analysis-v019-data.js','utf8');
const client=fs.readFileSync('app/AnalysisV008Client.js','utf8');
const css=fs.readFileSync('app/analysis.css','utf8');
const fail=[];
const pass=(n,ok,d='')=>{console.log(`${ok?'PASS':'FAIL'}  ${n}${d?` — ${d}`:''}`);if(!ok)fail.push(n)};
const price=data.slice(data.indexOf("id:'price'"),data.indexOf("id:'income'"));
for(let i=1;i<=7;i++) pass(`PRICE ${String(i).padStart(2,'0')} 화면 해설`,price.includes(`node:'PRICE ${String(i).padStart(2,'0')}'`));
for(const x of ['14.2','15.1','13.8','15.0','6.4%','4.7%']) pass(`엔진 수치 ${x}`,price.includes(x));
for(const x of ['매매가','시세','실거래가','평당가','공시지가','공시가격','감정가']) pass(`용어 ${x}`,price.includes(`['${x}'`));
pass('PRICE 사전식 매매가 문구 제거',!price.includes("['매매가','현재 사고파는 가격']"));
pass('엔진 설명 UI',client.includes('axis.engineGuide.map'));
pass('PRICE 시험형 선택 제거 가능',client.includes("axis.practice.mode==='explain'"));
pass('문단형 장문 렌더',client.includes('function Paragraphs'));
pass('엔진 설명 CSS',css.includes('.an19-engine-list'));
pass('HTML table 없음',!/<table|<thead|<tbody|<tr|<td/.test(client));
if(fail.length){console.error(`\nV020 PRICE AUDIT FAILED: ${fail.length}`);process.exit(1)}
console.log('\nANALYSIS V020 PRICE ENGINE ALIGNMENT PASS');
