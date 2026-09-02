'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  QUESTIONS, STAGE1_IDS, STAGE2_IDS, TYPE_REPORTS, TYPE_PROTOTYPES,
  ASSET_WEIGHTS, ASSET_CHARACTERISTICS, PROCESS_WEIGHTS, PROCESSES,
  COMIC_CANDIDATES, COMIC_REPORTS, AXIS_LABELS,
} from './self-check-data';
import { CHARACTER_PROFILES, ASSET_INSIGHTS, buildRichResult } from './self-check-result-v2';
import './self-check.css';
import { PUBLIC_TYPE_IDS, PUBLIC_ASSETS, PUBLIC_BEHAVIOR_IDS } from './self-check-public-data';
import { getSelfCheckCopy } from './self-check-copy';
import { getQuestionDisplay, getScaleCopy, localizeChapter, getScaleGroupCopy } from './self-check-question-copy';
import { getStage1Ui, getStage1Type, stage1AxisLabel, stage1Level, stage1Readiness, getStage1DecisionAxes, getStage1ReadyAxes, stage1AxisStatus, localizeStage1Insight, localizeStage1Action } from './self-check-stage1-copy';
import { getStage2Ui, getStage2Asset, stage2Value, stage2Axis, stage2Gate } from './self-check-stage2-copy';
import { getStage3Ui, getStage3Process, getStage3Comic } from './self-check-stage3-copy';
import { getFinalUi, getFinalBehaviorShort, localizeFinalPraise, localizeFinalContradiction, localizeFinalRisk } from './self-check-final-copy';

const STORAGE_KEY = 'fix-building-self-check-v1';
const byId = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
const answerKeys = ['A','B','C','D','E'];
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const level = (v) => v >= .75 ? '높음' : v <= -.75 ? '낮음' : '보통';

const BASE_PATH = '/building';
const RESULT_GRAPHIC_ROOT = '/building/images/self-check-results-v025';

const TYPE_GRAPHIC = Object.fromEntries(
  Array.from({length:14},(_,i)=>[`T${String(i+1).padStart(2,'0')}`,`T${String(i+1).padStart(2,'0')}.webp`])
);

const ASSET_GRAPHIC = {
  '아파트':'A01.webp',
  '빌라·연립/다세대':'A02.webp',
  '오피스텔':'A03.webp',
  '원룸·다가구':'A04.webp',
  '상가주택':'A05.webp',
  '집합상가':'A06.webp',
  '꼬마빌딩':'A07.webp',
  '중대형빌딩':'A08.webp',
  '오피스':'A09.webp',
  '토지':'A10.webp',
};

function resultGraphic(typeId, kind='step1') {
  const file=TYPE_GRAPHIC[typeId] || 'T02.webp';
  if(kind==='final') {
    const finalFile=`F${String(parseInt(typeId.slice(1),10)).padStart(2,'0')}.webp`;
    return `${RESULT_GRAPHIC_ROOT}/final/${finalFile}`;
  }
  return `${RESULT_GRAPHIC_ROOT}/step1/${file}`;
}

function assetGraphic(asset) {
  return `${RESULT_GRAPHIC_ROOT}/step2/${ASSET_GRAPHIC[asset] || 'A07.webp'}`;
}

function behaviorGraphic() {
  return `${RESULT_GRAPHIC_ROOT}/step3/P01.webp`;
}

function ResultVisual({ src, alt, tone='blue' }) {
  return <figure className={`sc-result-visual tone-${tone}`}><img src={src} alt={alt}/></figure>;
}


function axisScores(answerMap, ids) {
  const bucket = {};
  ids.forEach((id) => {
    const a = answerMap[id];
    if (a === undefined) return;
    const q = byId[id];
    (bucket[q.axis] ||= []).push(q.scores[a]);
  });
  return Object.fromEntries(Object.entries(bucket).map(([k, arr]) => [k, arr.reduce((s,v)=>s+v,0)/arr.length]));
}

function readiness(axes) {
  const keys = ['위험감당능력','유동성','부채부담','금융이해','정보검증','공실대응','금리대응','중단기준'];
  const vals = keys.map(k=>axes[k]).filter(v=>v!==undefined);
  const score = vals.reduce((s,v)=>s+v,0)/(vals.length||1);
  return score >= .75 ? '준비 기반 높음' : score <= -.75 ? '준비 우선' : '일부 보완 필요';
}

function similarity(axes, target) {
  let sum=0, weight=0;
  for (const [axis, t] of Object.entries(target.core || {})) {
    const v = axes[axis] ?? 0;
    sum += (1 - Math.abs((v/2)-t)/2) * 2;
    weight += 2;
  }
  for (const [axis, t] of Object.entries(target.aux || {})) {
    const v = axes[axis] ?? 0;
    sum += (1 - Math.abs((v/2)-t)/2);
    weight += 1;
  }
  return (sum/(weight||1))*100;
}

function pickType(axes) {
  const isHigh = (k) => level(axes[k] ?? 0) === '높음';
  const isLow = (k) => level(axes[k] ?? 0) === '낮음';
  if (isHigh('레버리지선호') && isLow('위험감당능력')) return 'T05';
  if (isHigh('외부영향') && isLow('정보검증') && isLow('독립판단')) return 'T10';
  if (isLow('목적명확성')) return 'T12';
  const scored = Object.entries(TYPE_PROTOTYPES)
    .filter(([id]) => !['T05','T10','T12'].includes(id))
    .map(([id,p]) => ({id, score:similarity(axes,p), core:Object.keys(p.core||{}).length, verify:Math.abs((axes.정보검증??0)/2 - (p.core?.정보검증 ?? p.aux?.정보검증 ?? 0))}))
    .sort((a,b)=> b.score-a.score || b.core-a.core || a.verify-b.verify || a.id.localeCompare(b.id));
  return scored[0]?.id || 'T02';
}

function assetResult(axes) {
  const gates = [];
  const hi=(k)=>level(axes[k]??0)==='높음', lo=(k)=>level(axes[k]??0)==='낮음';
  const addGate=(assets,factor,msg,strong=true)=>assets.forEach(asset=>gates.push({asset,factor,msg,strong}));
  if (lo('위험감당능력') && hi('레버리지선호')) addGate(['꼬마빌딩','중대형빌딩','오피스','상가주택'],.70,'차입 활용 성향에 비해 현재 위험감당 여력이 낮습니다.');
  if (hi('유동성')) addGate(['꼬마빌딩','중대형빌딩','오피스','토지'],.75,'현금화 용이성을 중요하게 보는 성향과 유동성이 낮은 자산은 맞지 않을 수 있습니다.',false);
  if (hi('현금흐름선호')) addGate(['토지'],.65,'현재 현금흐름을 중요하게 본다면 토지는 별도 사용·임대 계획이 없는 한 우선순위가 낮을 수 있습니다.');
  if (lo('관리참여')) addGate(['원룸·다가구','상가주택','꼬마빌딩'],.80,'직접 관리 부담이 큰 자산은 현재 성향과 맞지 않을 수 있습니다.',false);
  if (lo('공실대응')) addGate(['오피스텔','원룸·다가구','상가주택','집합상가','꼬마빌딩','중대형빌딩','오피스'],.75,'임대수익형 자산은 공실 대응 준비가 부족하면 우선순위를 낮춰 보는 편이 좋습니다.');
  if (lo('금리대응') && hi('레버리지선호')) addGate(['원룸·다가구','상가주택','꼬마빌딩','중대형빌딩','오피스'],.75,'대출 활용을 고려한다면 금리 상승 시 상환 부담도 함께 확인해야 합니다.');
  if (lo('정보검증') && hi('외부영향')) addGate(['토지','꼬마빌딩','중대형빌딩','오피스'],.80,'전문성이 많이 필요한 자산은 추천보다 독립적인 검증이 더 중요합니다.',false);
  if (lo('부채부담')) addGate(['꼬마빌딩','중대형빌딩','오피스','상가주택'],.75,'현재 부채 부담이 높다면 추가 차입이 큰 자산은 우선순위를 낮춰 확인해야 합니다.');
  if (lo('중단기준') && hi('위험선호')) addGate(['토지','꼬마빌딩','중대형빌딩'],.85,'변동성이 크거나 매각이 어려운 자산은 사전에 중단 기준을 정하는 것이 중요합니다.',false);

  const rows = Object.entries(ASSET_WEIGHTS).map(([asset, weights], order) => {
    let raw=0, maxAbs=0;
    Object.entries(weights).forEach(([axis,w])=>{ raw += (axes[axis]??0)*w; maxAbs += 2*Math.abs(w); });
    const base=clamp(50+50*(raw/(maxAbs||1)),0,100);
    let score=base;
    const applied=gates.filter(g=>g.asset===asset);
    applied.forEach(g=>{score*=g.factor});
    const reasonAxes=Object.entries(weights)
      .map(([axis,w])=>({axis, contribution:(axes[axis]??0)*w, weight:w}))
      .filter(x=>x.contribution>0.45)
      .sort((a,b)=>b.contribution-a.contribution)
      .slice(0,3)
      .map(x=>AXIS_LABELS[x.axis] || x.axis);
    return {asset,order,base,score:clamp(score,0,100),applied,reasonAxes};
  }).sort((a,b)=> b.score-a.score || a.applied.filter(x=>x.strong).length-b.applied.filter(x=>x.strong).length || b.base-a.base || a.order-b.order);
  return {top:rows.slice(0,3), caution:rows.filter(r=>r.applied.some(g=>g.strong)).slice(0,2), purposeLow:lo('목적명확성')};
}

function processResult(axes) {
  const rows = Object.entries(PROCESS_WEIGHTS).map(([id,weights])=>{
    let raw=0,maxAbs=0;
    Object.entries(weights).forEach(([axis,w])=>{raw+=(axes[axis]??0)*w;maxAbs+=2*Math.abs(w)});
    let score=clamp(50+50*(raw/(maxAbs||1)),0,100);
    const hi=(k)=>level(axes[k]??0)==='높음', lo=(k)=>level(axes[k]??0)==='낮음';
    if (id==='P06' && hi('과신')) score*=1.20;
    if (['P05','P06'].includes(id) && hi('앵커링')) score*=1.20;
    if (['P07','P12'].includes(id) && hi('외부영향') && lo('정보검증')) score*=1.25;
    if (id==='P09' && hi('손실회피') && lo('중단기준')) score*=1.30;
    if (['P03','P10'].includes(id) && hi('위험선호') && lo('위험감당능력')) score*=1.30;
    if (['P03','P10'].includes(id) && hi('레버리지선호') && lo('유동성')) score*=1.25;
    if (['P08','P06'].includes(id) && hi('직관의존') && lo('정보검증')) score*=1.20;
    return {id,base:clamp(50+50*(raw/(maxAbs||1)),0,100),score:clamp(score,0,100)};
  }).sort((a,b)=>b.score-a.score || b.base-a.base || a.id.localeCompare(b.id));
  const top=rows.slice(0,2);
  const exact=Object.values(COMIC_CANDIDATES).find(c=>c.pair.every(p=>top.some(t=>t.id===p)));
  let comic=exact;
  if (!comic) {
    comic=Object.values(COMIC_CANDIDATES).map(c=>({c,score:c.pair.reduce((s,p)=>s+(rows.find(r=>r.id===p)?.score||0),0)})).sort((a,b)=>b.score-a.score || a.c.id.localeCompare(b.c.id))[0].c;
  }
  return {top, comic: COMIC_REPORTS[comic.id] || comic};
}

function Progress({ current, total, locale='ko' }) {
  const label=locale==='en'?'Progress':locale==='ja'?'進行状況':'진행';
  return <div className="sc-progress" aria-label={`${label} ${current}/${total}`}><span style={{width:`${(current/total)*100}%`}} /></div>;
}

const SCALE_GROUPS = {
  S01:{ title:'보유와 버티는 힘', subtitle:'시간과 현금흐름 변화 앞에서 어느 쪽에 가까운지 빠르게 답해보세요.', ids:['Q02','Q05','Q09','Q12'] },
  S02:{ title:'판단이 흔들리는 순간', subtitle:'잘 풀릴 때, 가격이 내려갈 때, 손실이 보일 때의 반응을 봅니다.', ids:['Q16','Q17','Q18'] },
  S03:{ title:'검증과 안전장치', subtitle:'계약 직전 확인 습관과 중단 기준이 얼마나 구체적인지 봅니다.', ids:['Q27','Q36','Q37','Q42'] },
  S04:{ title:'공실과 가격 상한선', subtitle:'현금흐름이 끊기거나 마음에 드는 물건이 기준을 넘을 때의 선택을 봅니다.', ids:['Q39','Q41','Q10'] },
  S05:{ title:'시간·관리·미래가치', subtitle:'자산을 오래 보유하고 직접 관리하며 미래가치를 기다리는 성향을 봅니다.', ids:['Q03','Q25','Q30','Q35'] },
};

const STAGE1_SCREENS = [
  { chapter:'왜 사려는가', ids:['Q01'], type:'scenario', auto:true },
  { chapter:'왜 사려는가', ids:['Q06'], type:'scenario', auto:true },
  { chapter:'왜 사려는가', ids:['Q07'], type:'scenario', auto:true },
  { chapter:'보유와 버티는 힘', ids:SCALE_GROUPS.S01.ids, type:'scale', scale:'S01' },
  { chapter:'내 자금의 방어력', ids:['Q08'], type:'scenario', auto:true },
  { chapter:'내 자금의 방어력', ids:['Q11'], type:'scenario', auto:true },
  { chapter:'내 자금의 방어력', ids:['Q14'], type:'scenario', auto:true },
  { chapter:'기회를 만났을 때', ids:['Q15'], type:'scenario', auto:true },
  { chapter:'판단이 흔들리는 순간', ids:SCALE_GROUPS.S02.ids, type:'scale', scale:'S02' },
  { chapter:'기회를 만났을 때', ids:['Q19'], type:'scenario', auto:true },
  { chapter:'기회를 만났을 때', ids:['Q20'], type:'scenario', auto:true },
  { chapter:'마지막 결정을 내릴 때', ids:['Q21'], type:'scenario', auto:true },
  { chapter:'대출과 자원', ids:['Q22'], type:'scenario', auto:true },
  { chapter:'대출과 자원', ids:['Q23'], type:'scenario', auto:true },
  { chapter:'대출과 자원', ids:['Q24'], type:'scenario', auto:true },
  { chapter:'검증과 안전장치', ids:SCALE_GROUPS.S03.ids, type:'scale', scale:'S03' },
  { chapter:'계약 직전의 나', ids:['Q38'], type:'scenario', auto:true },
  { chapter:'공실과 가격 상한선', ids:SCALE_GROUPS.S04.ids, type:'scale', scale:'S04' },
  { chapter:'계약 직전의 나', ids:['Q40'], type:'scenario', auto:true },
];

const STAGE2_SCREENS = [
  { chapter:'시간·관리·미래가치', ids:SCALE_GROUPS.S05.ids, type:'scale', scale:'S05' },
  { chapter:'시간과 관리', ids:['Q13'], type:'scenario', auto:true },
  { chapter:'시간과 관리', ids:['Q26'], type:'scenario', auto:true },
  { chapter:'판단 방식', ids:['Q28'], type:'scenario', auto:true },
  { chapter:'자산을 고를 때', ids:['Q29'], type:'scenario', auto:true },
  { chapter:'자산을 고를 때', ids:['Q31'], type:'scenario', auto:true },
  { chapter:'자산을 고를 때', ids:['Q32'], type:'scenario', auto:true },
  { chapter:'위험을 받아들이는 방식', ids:['Q33'], type:'scenario', auto:true },
  { chapter:'위험을 받아들이는 방식', ids:['Q34'], type:'scenario', auto:true },
];

const SCALE_COPY = {
  Q02:{ text:'결과가 늦게 보여도 장기 보유할 수 있다.', left:'오래 기다릴 수 있다', right:'빠른 결과가 필요하다' },
  Q05:{ text:'현재 월세보다 몇 년 뒤의 가치가 더 중요할 수 있다.', left:'현재 월세 우선', right:'미래가치 우선' },
  Q09:{ text:'좋은 물건이라도 새 대출 부담이 크면 판단이 달라진다.', left:'부담 적음', right:'부담 큼' },
  Q12:{ text:'수입이 줄어도 대출·생활비·보유비용을 함께 버틸 여유가 있다.', left:'버티기 어렵다', right:'여유가 충분하다' },
  Q16:{ text:'최근 판단이 잘 맞았어도 다음 물건은 같은 절차로 검증한다.', left:'더 조심한다', right:'자신감이 커진다' },
  Q17:{ text:'원래 가격보다 많이 깎였다는 말은 내 판단에 영향을 준다.', left:'영향 거의 없음', right:'싸게 느껴진다' },
  Q18:{ text:'손실이 확정되더라도 기준이 깨지면 정리할 수 있다.', left:'기준대로 정리', right:'회복까지 기다림' },
  Q27:{ text:'세금·대출·법률 문제가 생기면 필요한 전문가를 바로 찾을 수 있다.', left:'막막하다', right:'바로 확인 가능' },
  Q36:{ text:'새 물건을 볼 때 현재 원리금 부담을 숫자로 확인한다.', left:'거의 안 본다', right:'항상 확인한다' },
  Q37:{ text:'추천 자료를 받아도 원자료와 다른 의견까지 다시 확인한다.', left:'추천 자료 중심', right:'끝까지 재검증' },
  Q42:{ text:'상황이 나빠졌을 때 보유와 정리를 가르는 기준이 구체적이다.', left:'기준 없음', right:'숫자로 명확' },
  Q39:{ text:'매입 직후 월세가 몇 달 비어도 계획 안에서 버틸 수 있다.', left:'버티기 어렵다', right:'공실까지 계획' },
  Q41:{ text:'마음에 드는 건물이라도 정한 가격 상한선을 넘으면 멈출 수 있다.', left:'상한선 조정', right:'기준대로 포기' },
  Q10:{ text:'예상치 못한 수리비와 세금이 한꺼번에 나와도 대응 여력이 있다.', left:'대응 어렵다', right:'여유 있게 대응' },
  Q03:{ text:'좋은 자산이라면 결과가 늦어도 충분히 기다릴 수 있다.', left:'빠른 결과 선호', right:'장기 보유 가능' },
  Q25:{ text:'임차인·수리·관리 문제에 직접 시간을 쓰는 것이 가능하다.', left:'직접관리 어려움', right:'직접관리 가능' },
  Q30:{ text:'현재 월세가 평범해도 미래가치 근거가 좋으면 관심이 커진다.', left:'현재수익 우선', right:'미래가치 우선' },
  Q35:{ text:'여러 전문가와 투자자의 같은 의견은 내 관심을 바꿀 수 있다.', left:'영향 거의 없음', right:'영향 큼' },
};

const QUESTION_DISPLAY_V3 = {
  Q01: { text: "토요일 오후, 마음에 드는 건물을 하나 발견했습니다. 누가 '왜 이걸 사고 싶어요?'라고 묻는다면 당신은?", options: [["한 문장으로 바로 설명할 수 있다",0], ["대략적인 이유는 말할 수 있다",1], ["몇 가지 이유가 섞여 있다",2], ["좋아 보여서 관심이 간 정도다",3], ["아직 나도 잘 모르겠다",4]] },
  Q02: { text: "사고 싶은 건물을 찾았는데 '최소 5년은 봐야 제대로 가치가 드러난다'는 분석이 나왔습니다.", options: [["5년 이상도 충분히 기다릴 수 있다",0], ["4~5년이면 가능하다",1], ["3년 정도면 괜찮다",2], ["1~2년 안에 결과가 보고 싶다",3], ["그 정도 기다려야 한다면 관심이 크게 줄어든다",4]] },
  Q03: { text: "좋은 자산인데 결과가 보이려면 시간이 꽤 걸립니다. 당신이 가장 편한 시간표는?", options: [["1년 안에 변화가 보여야 한다",0], ["2년 정도면 괜찮다",1], ["3~4년은 기다릴 수 있다",2], ["5년 이상도 괜찮다",3], ["시간이 오래 걸려도 조건이 좋으면 버틸 수 있다",4]] },
  Q04: { text: "둘 다 같은 가격입니다. 더 마음이 가는 쪽은?", options: [["월세가 꾸준한 건물",0], ["월세가 조금 더 안정적인 쪽",1], ["둘 다 비슷하다",2], ["가격상승 가능성이 더 큰 쪽",3], ["월세가 약해도 크게 오를 가능성이 있는 건물",4]] },
  Q05: { text: "현재 월세는 기대보다 약합니다. 대신 주변 개발 때문에 몇 년 뒤 가치가 달라질 가능성이 보입니다.", options: [["현재 월세가 약하면 거의 보지 않는다",4], ["조금 더 확인은 해본다",3], ["조건이 맞으면 검토한다",2], ["미래가치 근거가 있으면 꽤 관심이 간다",1], ["이런 물건이 오히려 더 끌린다",0]] },
  Q06: { text: "처음엔 월세를 받으려고 건물을 찾았습니다. 그런데 보다 보니 시세차익이 더 끌립니다. 이때 당신은?", options: [["목적이 바뀌었으니 기준표부터 다시 만든다",0], ["핵심 기준 몇 개만 바꾼다",1], ["둘 다 보면서 천천히 정한다",2], ["좋아 보이는 물건에 맞춰 기준을 바꾼다",3], ["기준은 그대로 두고 물건부터 본다",4]] },
  Q07: { text: "둘 중 하나만 먼저 해야 한다면?", options: [["내가 왜 사는지부터 정한다",4], ["좋은 물건을 먼저 찾는다",0]] },
  Q08: { text: "딱 마음에 드는 건물인데, 사려면 가진 현금을 거의 다 넣어야 합니다.", options: [["그래도 기회면 거의 다 넣을 수 있다",4], ["조금만 남겨도 괜찮다",3], ["생활·비상자금은 남긴다",2], ["상당한 여유자금을 남겨야 한다",1], ["여유자금이 충분치 않으면 포기한다",0]] },
  Q09: { text: "좋은 물건을 찾았는데 새 대출이 필요합니다. 현재 갚는 대출을 떠올리면?", options: [["거의 부담되지 않는다",4], ["조금 신경 쓰인다",3], ["조건을 다시 계산해봐야 한다",2], ["상당히 부담된다",1], ["새 대출 자체가 매우 부담스럽다",0]] },
  Q10: { text: "매입 한 달 뒤 예상치 못한 수리비와 세금이 한꺼번에 나왔습니다.", options: [["대응이 매우 어렵다",4], ["다른 자산을 정리해야 할 수 있다",3], ["조정하면 감당 가능하다",2], ["별도 자금으로 꽤 대응 가능하다",1], ["미리 잡아둔 여유자금으로 대응 가능하다",0]] },
  Q11: { text: "부동산을 보러 가기 전, '내가 실제로 넣을 수 있는 최대 금액'은 어느 정도 정해져 있습니까?", options: [["전혀 정하지 않았다",4], ["대략 느낌만 있다",3], ["범위 정도는 안다",2], ["상한선을 꽤 구체적으로 정했다",1], ["숫자로 명확히 정해두었다",0]] },
  Q12: { text: "수입이 몇 달 줄어드는 시기가 와도 대출·생활비·보유비용을 함께 감당해야 합니다.", options: [["거의 버티기 어렵다",4], ["짧게만 가능하다",3], ["몇 달은 조정해서 버틸 수 있다",2], ["상당 기간 버틸 수 있다",1], ["충분한 여유가 있다",0]] },
  Q13: { text: "건물에 돈이 묶여 있는 동안 다른 투자기회가 왔습니다.", options: [["다른 자산을 급히 팔아야 할 수 있다",4], ["현금 마련이 꽤 어렵다",3], ["일부 조정하면 가능하다",2], ["다른 자산을 건드리지 않아도 대응 가능하다",1], ["별도 유동자금이 충분하다",0]] },
  Q14: { text: "새 대출 상담을 받으러 갔습니다. 당신이 먼저 궁금한 것은?", options: [["지금 내가 매달 얼마를 갚고 있는지",0], ["새로 얼마나 더 받을 수 있는지",4]] },
  Q15: { text: "좋아 보이는 물건인데 정보가 100% 다 모이진 않았습니다. 다른 사람도 관심을 보입니다.", options: [["정보가 다 모일 때까지 움직이지 않는다",4], ["조금 더 기다린다",3], ["핵심만 확인되면 조건부 검토한다",2], ["불확실성을 감수하고 적극 검토한다",1], ["기회라면 빠르게 움직인다",0]] },
  Q16: { text: "최근 두 번의 판단이 꽤 잘 맞았습니다. 세 번째 물건을 볼 때 당신은?", options: [["오히려 더 조심한다",4], ["평소와 같은 절차를 지킨다",3], ["조금 자신감이 붙는다",2], ["검토 속도가 빨라진다",1], ["이번에도 내가 맞을 것 같다는 느낌이 강해진다",0]] },
  Q17: { text: "처음 12억이라고 들은 건물이 10억까지 내려왔습니다. 그 말을 들은 순간?", options: [["12억이라는 숫자는 거의 신경 쓰지 않는다",4], ["실거래만 다시 본다",3], ["할인폭과 시세를 같이 본다",2], ["2억이나 깎였다는 점이 꽤 매력적으로 느껴진다",1], ["'원래 12억'이라는 말 때문에 10억이 싸게 느껴진다",0]] },
  Q18: { text: "내가 산 건물의 조건이 예상보다 나빠졌고, 지금 팔면 손해가 확정됩니다.", options: [["기준이 깨졌다면 손해여도 정리한다",4], ["매도와 보유를 다시 계산한다",3], ["조금 더 지켜본다",2], ["가격이 회복될 때까지 기다리고 싶다",1], ["손해를 확정하는 선택은 거의 못 할 것 같다",0]] },
  Q19: { text: "평소 믿던 사람이 '이건 내가 봐도 정말 좋다'고 강하게 추천합니다. 그런데 내 계산은 애매합니다.", options: [["내 계산이 안 맞으면 관심을 끈다",4], ["추천은 참고만 하고 다시 계산한다",3], ["관심은 조금 커진다",2], ["그 사람 판단을 믿고 적극적으로 본다",1], ["내 기준보다 추천에 더 무게를 둔다",0]] },
  Q20: { text: "주변 사람들은 모두 좋다고 합니다. 그런데 내 계산표에서는 기준 미달입니다.", options: [["내 계산이 안 맞으면 포기한다",0], ["주변 분위기를 더 믿고 다시 본다",4]] },
  Q21: { text: "숫자가 거의 비슷한 두 건물. 마지막 한 표는 어디에 줍니까?", options: [["추가 숫자와 근거",4], ["현장 느낌과 경험",0]] },
  Q22: { text: "정말 좋은 물건인데 자기자본만으로는 부족합니다.", options: [["대출이 많이 필요하면 바로 제외한다",4], ["대출 비중을 크게 낮출 방법부터 찾는다",3], ["조건을 보고 결정한다",2], ["감당 가능하면 적극 활용한다",1], ["좋은 물건이면 대출을 최대한 활용할 수 있다",0]] },
  Q23: { text: "매입가의 상당 부분을 대출로 채워야 합니다.", options: [["그 정도면 훨씬 더 보수적으로 본다",0], ["조금 더 보수적으로 본다",1], ["조건에 따라 다르다",2], ["물건이 좋다면 크게 달라지지 않는다",3], ["대출 비중이 커도 기회가 더 중요하다",4]] },
  Q24: { text: "매입 후 추가로 5천만 원이 필요해졌습니다.", options: [["마련할 방법이 거의 없다",4], ["상당히 어렵다",3], ["시간을 두면 가능할 수 있다",2], ["몇 가지 방법이 있다",1], ["별도 자금계획으로 바로 대응 가능하다",0]] },
  Q25: { text: "매달 임차인·수리·관리 문제에 직접 5시간 정도 써야 하는 건물입니다.", options: [["그 정도면 바로 제외한다",4], ["가능하면 피하고 싶다",3], ["상황에 따라 가능하다",2], ["그 정도는 직접 할 수 있다",1], ["직접 관리하고 개선하는 게 오히려 괜찮다",0]] },
  Q26: { text: "관리할 시간이 부족해졌습니다. 더 가까운 선택은?", options: [["비용을 내고 외부에 맡긴다",0], ["시간을 내서 직접 관리한다",4]] },
  Q27: { text: "계약 직전 세금·대출·법률 문제가 하나씩 걸립니다. 필요한 전문가를?", options: [["누구에게 물어봐야 할지 막막하다",4], ["주변 소개부터 찾아봐야 한다",3], ["필요하면 검색해서 찾을 수 있다",2], ["관련 전문가를 비교해볼 수 있다",1], ["필요한 분야별로 바로 찾아 확인할 수 있다",0]] },
  Q28: { text: "현장에서는 느낌이 좋은데 자료가 아직 부족합니다.", options: [["자료가 없으면 절대 결정하지 않는다",4], ["자료가 더 모일 때까지 기다린다",3], ["핵심만 확인되면 판단한다",2], ["경험과 현장감을 꽤 믿는다",1], ["내 경험과 감으로도 결정할 수 있다",0]] },
  Q29: { text: "유명한 지역의 건물인데 월세 흐름은 기대보다 약합니다.", options: [["유명지역이어도 우선순위를 크게 낮춘다",0], ["월세가 약하면 상당히 낮춘다",1], ["다른 조건과 같이 본다",2], ["지역이 좋으면 어느 정도 감수한다",3], ["유명지역이면 월세가 약해도 충분히 검토한다",4]] },
  Q30: { text: "현재 월세는 평범하지만 향후 가치가 커질 근거가 꽤 보입니다.", options: [["현재 수익이 약하면 거의 보지 않는다",4], ["조금만 관심이 간다",3], ["조건부로 검토한다",2], ["미래가치 근거가 좋으면 관심이 커진다",1], ["이런 유형을 적극적으로 찾는 편이다",0]] },
  Q31: { text: "내가 10년 넘게 잘 아는 동네의 건물입니다. 숫자는 살짝 아쉽습니다.", options: [["익숙함과 숫자는 별개라 본다",4], ["숫자가 아쉬우면 보수적으로 본다",3], ["조금 더 믿음이 가긴 한다",2], ["익숙한 지역이라 꽤 안심된다",1], ["잘 아는 지역이면 숫자가 조금 부족해도 믿음이 간다",0]] },
  Q32: { text: "'원래 15억인데 급매라 12억입니다.' 이 말을 들었을 때?", options: [["15억이라는 숫자는 지운다",4], ["주변 실거래부터 본다",3], ["할인폭과 시세를 같이 본다",2], ["3억 할인이라는 말에 관심이 커진다",1], ["'원래 15억'이라 12억이 싸게 느껴진다",0]] },
  Q33: { text: "둘 중 하나만 고른다면?", options: [["수익률은 낮아도 공실이 안정적인 쪽",4], ["안정적인 쪽에 조금 더",3], ["반반이다",2], ["공실 위험이 있어도 수익이 높은 쪽",1], ["변동이 커도 기대수익이 높은 쪽",0]] },
  Q34: { text: "이미 산 건물의 조건이 나빠졌고, 팔면 손해입니다.", options: [["기준이 깨졌다면 손해여도 정리한다",4], ["정리 쪽을 먼저 검토한다",3], ["보유와 매도를 다시 비교한다",2], ["가격회복을 조금 더 기다린다",1], ["손해를 보고 파는 선택은 매우 어렵다",0]] },
  Q35: { text: "세 명의 전문가와 여러 투자자가 같은 건물을 좋다고 합니다.", options: [["내 관심은 거의 변하지 않는다",4], ["참고는 하지만 기준은 그대로다",3], ["조금 더 자세히 본다",2], ["관심이 꽤 커진다",1], ["여러 사람이 같게 보면 내 판단도 크게 바뀐다",0]] },
  Q36: { text: "대출이 있는 상태에서 새 물건을 볼 때, 현재 원리금이 내 소득의 몇 %인지 확인합니까?", options: [["거의 확인하지 않는다",4], ["가끔 확인한다",3], ["필요할 때 확인한다",2], ["대부분 확인한다",1], ["항상 숫자로 확인한다",0]] },
  Q37: { text: "누군가 '이 건물 괜찮다'며 자료까지 보내줬습니다.", options: [["그 자료를 기준으로 판단한다",4], ["대략만 추가 확인한다",3], ["다른 자료 하나는 더 본다",2], ["여러 자료와 비교한다",1], ["원자료·실거래·다른 의견까지 다시 확인한다",0]] },
  Q38: { text: "대출 상담에서 두 숫자가 나왔습니다. '가능한 한도'와 '매달 갚을 금액'. 더 먼저 보는 것은?", options: [["매달 얼마를 갚아야 하는지",0], ["얼마까지 받을 수 있는지",4]] },
  Q39: { text: "매입 직후 월세가 3개월 안 들어와도 괜찮아야 합니다.", options: [["거의 버티기 어렵다",4], ["1개월 정도만 가능하다",3], ["조정하면 2~3개월 가능하다",2], ["몇 달은 계획 안에서 버틴다",1], ["공실기간을 이미 자금계획에 넣어두었다",0]] },
  Q40: { text: "금리가 1%p 오른다는 뉴스가 나왔습니다. 당신은?", options: [["내 대출이 얼마나 늘지 잘 모르겠다",4], ["대략 걱정만 한다",3], ["필요하면 계산해본다",2], ["상환액 변화를 바로 계산한다",1], ["이미 상승 시나리오를 따로 계산해본다",0]] },
  Q41: { text: "마음에 쏙 드는 건물인데 가격이 내가 정한 상한선을 넘었습니다.", options: [["조금 넘는 정도면 산다",4], ["조건이 좋으면 상한선을 올린다",3], ["다시 계산해본다",2], ["상한선 안으로 안 오면 포기한다",1], ["아무리 마음에 들어도 기준을 넘으면 포기한다",0]] },
  Q42: { text: "산 뒤 상황이 나빠졌습니다. '이 정도면 계속 보유, 이 정도면 정리'라는 기준이 있습니까?", options: [["전혀 없다",4], ["막연한 생각만 있다",3], ["대략적인 기준은 있다",2], ["몇 가지 조건을 정해두었다",1], ["숫자와 조건으로 구체적으로 정해두었다",0]] },
};

const QUESTION_UI = {
  Q07:{ options:[['좋은 물건부터 본다',0],['내 목적과 기준부터 잡는다',4]] },
  Q14:{ options:[['가능한 대출 한도부터 본다',4],['현재 원리금 상환액부터 본다',0]] },
  Q20:{ options:[['주변 반응을 더 확인한다',4],['내 계산이 안 맞으면 포기한다',0]] },
  Q21:{ options:[['현장 느낌과 경험',0],['추가 숫자와 근거',4]] },
  Q26:{ options:[['시간을 내서 직접 관리한다',4],['비용을 들여 외부에 맡긴다',0]] },
  Q38:{ options:[['얼마까지 빌릴 수 있는지',4],['매달 얼마까지 갚을 수 있는지',0]] },
  Q05:{ labels:['관심이 거의 없다','조금 망설인다','조건을 더 본다','관심이 꽤 생긴다','매우 적극적으로 본다'] },
  Q15:{ labels:['바로 제외한다','충분히 기다린다','추가 확인 후 본다','조건부로 검토한다','빠르게 움직일 수 있다'] },
  Q25:{ labels:['현실적으로 어렵다','쉽지 않다','조건이 맞으면 가능','꽤 가능하다','적극적으로 할 수 있다'] },
  Q28:{ labels:['자료가 모일 때까지 기다린다','추가 확인을 더 한다','상황에 따라 다르다','경험을 꽤 참고한다','내 경험과 감으로 결정할 수 있다'] },
  Q35:{ labels:['관심 변화가 거의 없다','조금만 영향을 받는다','반반이다','관심이 꽤 커진다','관심이 매우 커진다'] },
  Q42:{ labels:['기준이 거의 없다','대략만 생각했다','일부 기준이 있다','상당히 구체적이다','멈출 기준이 명확하다'] },
};

function defaultLabels(q) {
  if (['정보검증','금융이해','공실대응','금리대응','중단기준'].includes(q.axis)) return ['거의 하지 않는다','드물게 한다','상황에 따라 한다','자주 한다','거의 항상 한다'];
  if (['위험감당능력','유동성','관리참여'].includes(q.axis)) return ['현실적으로 어렵다','쉽지 않다','조건이 맞으면 가능','꽤 가능하다','확실히 가능하다'];
  return ['전혀 아니다','조금 아니다','반반이다','꽤 그렇다','매우 그렇다'];
}

function screenAnsweredCount(screens, untilPage, answers) {
  return screens.slice(0,untilPage).reduce((n,s)=>n+s.ids.filter(id=>answers[id]!==undefined).length,0);
}

function BrandBar() {
  return <div className="sc-brand-bar">
    <div className="sc-brand-bar-inner">
      <a className="sc-brand-lockup" href="/building/ko"><strong>FIX BUILDING</strong><span>SELF CHECK</span></a>
    </div>
  </div>;
}

function BrandHeader({ locale='ko' }) {
  return <div className="sc-top-brand">
    <a className="sc-brand-lockup" href={`${BASE_PATH}/${locale}`}><strong>FIX BUILDING</strong><span>SELF CHECK</span></a>
  </div>;
}

function JourneyHeader({ stage=1, finalOpen=false, finalActive=false, locale='ko' }) {
  const copy=getSelfCheckCopy(locale);
  const items=copy.journey.items;
  return <div className="sc-sticky-shell">
    <div className="sc-sticky-journey">
      <div className="sc-journey-inner">
        <div className={`sc-stage-track stage-${finalActive?'final':stage}`} aria-label={copy.journey.aria}>
        <span className="sc-stage-fill" aria-hidden="true"/>
          {items.map((item,i)=>{
            const s=i+1;
            let state='upcoming';
            if(i===3) state=finalActive?'active':finalOpen?'ready':'locked';
            else if(s<stage || (stage===3 && finalOpen && s===3)) state='done';
            else if(s===stage) state='active';
            return <div key={item.n} className={`sc-stage-node is-${state}`}>
              <span className={`sc-stage-marker ${state==='done'?'has-check':''} ${state==='locked'?'has-lock':''} ${i===3?'is-final-marker':''}`}>
                {state==='done'?<SystemIcon type="check"/>:state==='locked'?'':i===3?<FinalIcon/>:<ProgressStageIcon type={s}/>}
              </span>
              <strong>{item.key}</strong><em>{item.label}</em>
            </div>;
          })}
        </div>
      </div>
    </div>
  </div>;
}

function ProgressStageIcon({ type }) {
  if(type===1) return <svg viewBox="0 0 32 32" className="sc-progress-stage-icon sc-progress-stage-icon-1" aria-hidden="true">
    <path d="M5 25V12l6-3 6 3v13"/>
    <path d="M8 16h3M13 16h2M10 25v-5h3"/>
    <rect x="18" y="7" width="9" height="14" rx="2"/>
    <path d="M20.5 11h4M20.5 14h3"/>
    <path className="accent" d="m21 18 2 2 4-5"/>
  </svg>;
  if(type===2) return <svg viewBox="0 0 32 32" className="sc-progress-stage-icon sc-progress-stage-icon-2" aria-hidden="true">
    <path d="M4 26V17h7v9M12 26V10h8v16M21 26V15h7v11"/>
    <path className="accent" d="M7 9c5-4 12-4 18 0"/>
    <circle className="accent-fill" cx="7" cy="9" r="2"/>
    <circle className="accent-fill" cx="25" cy="9" r="2"/>
  </svg>;
  return <svg viewBox="0 0 32 32" className="sc-progress-stage-icon sc-progress-stage-icon-3" aria-hidden="true">
    <circle cx="6" cy="16" r="3"/>
    <path d="M9 16h7M16 16V8h6M16 16v8h6"/>
    <circle className="accent" cx="25" cy="8" r="3"/>
    <rect x="22" y="21" width="7" height="5" rx="1"/>
    <path className="warn" d="m20 20 2-4 2 4z"/>
  </svg>;
}

function StageIcon({ type }) {
  if(type===1) return <svg viewBox="0 0 180 118" className="sc-stage-svg sc-stage-svg-1" aria-hidden="true">
    <g className="datum"><path d="M10 108h160"/><path d="M15 13v8M165 13v8"/><circle cx="15" cy="13" r="2"/><circle cx="165" cy="13" r="2"/></g>
    <g className="building">
      <path d="M18 101V43l31-15 31 15v58"/>
      <path d="M30 55h11M56 55h11M30 69h11M56 69h11M43 101V84h13v17"/>
    </g>
    <g className="sheet">
      <rect x="86" y="17" width="70" height="84" rx="6"/>
      <path d="M101 39h35M101 55h29M101 71h35"/>
      <circle cx="145" cy="82" r="15" className="accent-ring"/>
      <path d="m137 82 6 6 11-14" className="accent-strong"/>
    </g>
    <g className="focus">
      <circle cx="92" cy="28" r="4" className="accent-dot"/>
      <path d="M79 28h9M96 28h12"/>
    </g>
  </svg>;

  if(type===2) return <svg viewBox="0 0 180 118" className="sc-stage-svg sc-stage-svg-2" aria-hidden="true">
    <g className="datum"><path d="M10 108h160"/><path d="M15 13v8M165 13v8"/><circle cx="15" cy="13" r="2"/><circle cx="165" cy="13" r="2"/></g>
    <g className="assets">
      <path d="M13 101V60h35v41M58 101V34h43v67M111 101V49h42v52"/>
      <path d="M22 72h8M34 72h8M68 49h9M84 49h9M68 64h9M84 64h9M121 63h9M136 63h9"/>
    </g>
    <g className="match">
      <path d="M31 29C62 8 115 10 150 31" className="accent-soft"/>
      <circle cx="31" cy="29" r="6" className="accent-dot"/>
      <circle cx="91" cy="19" r="6" className="muted-dot"/>
      <circle cx="150" cy="31" r="8" className="accent-dot"/>
      <path d="m143 31 5 5 10-13" className="accent-strong"/>
    </g>
    <g className="compare">
      <path d="M31 107h119"/>
      <path d="M55 105v5M91 105v5M132 105v5"/>
    </g>
  </svg>;

  return <svg viewBox="0 0 180 118" className="sc-stage-svg sc-stage-svg-3" aria-hidden="true">
    <g className="datum"><path d="M10 108h160"/><path d="M15 13v8M165 13v8"/><circle cx="15" cy="13" r="2"/><circle cx="165" cy="13" r="2"/></g>
    <g className="decision">
      <circle cx="26" cy="58" r="12"/>
      <path d="M38 58h27M65 58V27h25M65 58v31h25"/>
      <circle cx="100" cy="27" r="11" className="accent-ring"/>
      <circle cx="100" cy="89" r="11"/>
      <path d="M111 27h22M111 89h22"/>
      <rect x="133" y="14" width="31" height="26" rx="4" className="contract"/>
      <path d="M140 23h17M140 30h11"/>
      <path d="M133 89h31" className="risk-line"/>
      <path d="m143 74 10 18h-20z" className="risk"/>
      <path d="M143 82v5M143 91v1" className="risk-mark"/>
    </g>
    <g className="route-accent">
      <path d="M38 58h27M65 58V27h25" className="accent-soft"/>
      <circle cx="26" cy="58" r="4" className="accent-dot"/>
      <circle cx="100" cy="27" r="4" className="accent-dot"/>
    </g>
  </svg>;
}

function SystemIcon({ type }) {
  if(type==='back') return <svg viewBox="0 0 24 24" className="sc-system-icon" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6M9 12h10"/></svg>;
  if(type==='reset') return <svg viewBox="0 0 24 24" className="sc-system-icon" aria-hidden="true"><path d="M5 8V4m0 0h4M5 4l3.2 3.2A7 7 0 1 1 5.8 15"/></svg>;
  if(type==='report') return <svg viewBox="0 0 24 24" className="sc-system-icon" aria-hidden="true"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 9h7M8.5 13h7M8.5 17h4"/><path className="accent" d="m14.5 16.5 1.7 1.7 3.2-3.8"/></svg>;
  return <svg viewBox="0 0 24 24" className="sc-system-icon" aria-hidden="true"><path d="m7 12 3 3 7-8"/></svg>;
}

function FinalIcon() {
  return <svg viewBox="0 0 52 52" className="sc-final-icon" aria-hidden="true">
    <circle cx="7" cy="13" r="2.5" className="accent-fill"/>
    <circle cx="7" cy="26" r="2.5"/>
    <circle cx="7" cy="39" r="2.5"/>
    <path d="M10 13h5M10 26h5M10 39h5M15 13v26"/>
    <rect x="15" y="6" width="29" height="40" rx="4"/>
    <path d="M22 17h15M22 24h15M22 31h10"/>
    <path className="accent" d="m29 38 4 4 8-10"/>
  </svg>;
}

function StageIntro({ active=1, locale='ko' }) {
  const copy=getSelfCheckCopy(locale);
  const cards=copy.intro.cards;
  return <section className="sc-stage-intro">
    <div className="sc-stage-intro-title">
      <small>{copy.intro.eyebrow}</small>
      <h2>{copy.intro.title}</h2>
      <p>{copy.intro.lead}</p>
    </div>
    <div className="sc-stage-intro-cards">
      {cards.map((c,i)=><article key={c[0]} className={`sc-stage-card ${i+1===active?'is-active':i+1<active?'is-done':'is-next'}`}>
        <span>STEP {c[0]}</span>
        <div className={`sc-intro-graphic sc-intro-graphic-${i+1}`} aria-hidden="true">
          <StageIcon type={i+1}/>
        </div>
        <h3>{c[1]}</h3>
        <p>{c[2]}</p>
      </article>)}
    </div>
  </section>;
}

function ScaleQuestionGroup({ screen, answers, onAnswer, pulseId='', locale='ko' }) {
  const localeCopy=getSelfCheckCopy(locale);
  const group=getScaleGroupCopy(locale, screen.scale, SCALE_GROUPS[screen.scale]);
  const firstPending=screen.ids.findIndex(id=>answers[id]===undefined);
  const activeIndex=firstPending===-1?screen.ids.length:firstPending;
  return <article className="sc-scale-panel">
    <div className="sc-scale-heading"><small>{localeCopy.scale.eyebrow} / {localizeChapter(locale,screen.chapter)}</small><h2>{group.title}</h2><p>{group.subtitle}</p></div>
    <div className="sc-scale-list">
      {screen.ids.map((id,rowIndex)=>{
        const display=getQuestionDisplay(locale,id,QUESTION_DISPLAY_V3[id]);
        const options=display?.options || [];
        const copy=getScaleCopy(locale,id,SCALE_COPY[id],display);
        const answered=answers[id]!==undefined;
        const isActive=rowIndex===activeIndex || (activeIndex===screen.ids.length && rowIndex===screen.ids.length-1);
        const isFuture=rowIndex>activeIndex && activeIndex<screen.ids.length;
        return <div key={id} className={`sc-scale-row ${answered?'is-answered':''} ${isActive?'is-active':''} ${isFuture?'is-future':''} ${pulseId===id?'is-just-answered':''}`}>
          <p>{copy.text}</p>
          <div className="sc-scale-choice">
            <span className="sc-scale-end left">{copy.left}</span>
            <div className="sc-scale-dots" role="radiogroup" aria-label={copy.text}>
              {options.map(([label,scoreIndex],i)=>{
                const selected=answers[id]===scoreIndex;
                const size=[44,34,27,34,44][i] || 32;
                return <button key={`${id}-${i}`} type="button" role="radio" aria-checked={selected} aria-label={label} title={label} disabled={isFuture} className={selected?'is-selected':''} style={{'--dot-size':`${size}px`}} onClick={()=>onAnswer(id,scoreIndex)}><span>{selected?'✓':''}</span></button>;
              })}
            </div>
            <span className="sc-scale-end right">{copy.right}</span>
          </div>
        </div>;
      })}
    </div>
  </article>;
}

function FlowQuestions({ title, screens, page, answers, onAnswer, onPrev, onNext, nextLabel, stage=1, onRestart, locale='ko' }) {
  const copy=getSelfCheckCopy(locale);
  const screen=screens[page];
  const [motion,setMotion]=useState('enter');
  const [pressed,setPressed]=useState('');
  const [transition,setTransition]=useState(null);
  const [scalePulse,setScalePulse]=useState('');
  const isLastPage=page===screens.length-1;

  useEffect(()=>{
    setMotion('enter');
    setPressed('');
    setTransition(null);
    const t=setTimeout(()=>setMotion('idle'),460);
    return()=>clearTimeout(t);
  },[page,stage,screen.type]);

  const canNext=screen.ids.every(id=>answers[id]!==undefined);
  const completed=screenAnsweredCount(screens,page,answers)+screen.ids.filter(id=>answers[id]!==undefined).length;
  const total=screens.reduce((n,x)=>n+x.ids.length,0);

  const runStageComplete=()=>{
    if(transition) return;
    setTransition('complete');
    setMotion('leave');
    setTimeout(()=>setTransition('line'),320);
    setTimeout(()=>setTransition('next'),860);
    setTimeout(()=>onNext(),1280);
  };

  const choose=(id,scoreIndex)=>{
    if(motion==='leave' || transition) return;
    onAnswer(id,scoreIndex);
    setPressed(`${id}-${scoreIndex}`);

    if(screen.type==='scale'){
      setScalePulse(id);
      setTimeout(()=>setScalePulse(''),360);
      return;
    }

    if(screen.auto && screen.ids.length===1){
      setMotion('selected');
      if(isLastPage){
        setTimeout(()=>runStageComplete(),390);
      }else{
        setTimeout(()=>setMotion('leave'),390);
        setTimeout(()=>onNext(),820);
      }
    }
  };

  const nextFromScale=()=>{
    if(!canNext || transition) return;
    if(isLastPage) runStageComplete();
    else {
      setMotion('leave');
      setTimeout(()=>onNext(),430);
    }
  };

  const restart=()=>{if(typeof window==='undefined' || window.confirm(copy.common.restartConfirm)) onRestart?.();};
  const showIntro=stage<=2;

  return <>
    <BrandHeader locale={locale}/>
    {showIntro&&<div className="sc-first-intro-wrap"><StageIntro active={stage} locale={locale}/></div>}
    <JourneyHeader stage={stage} locale={locale}/>
    <section className={`sc-question-wrap ${transition?'has-stage-transition':''}`}>
      {transition&&<div className={`sc-stage-transition is-${transition}`} aria-live="polite">
        <div className="sc-transition-check"><SystemIcon type="check"/></div>
        <small>STEP {stage} COMPLETE</small>
        <h2>{transition==='next'?(copy.stages[stage]?.completeNext || copy.stages.complete):copy.stages.complete}</h2>
        <div className="sc-transition-line"><span/></div>
      </div>}
      <div className="sc-question-head"><div><small>{screen.type==='scale'?copy.question.scaleLabel:copy.question.sceneLabel} / {localizeChapter(locale,screen.chapter)}</small><h1>{screen.type==='scale'?copy.question.scaleTitle:(screen.title || title)}</h1></div><strong>{String(page+1).padStart(2,'0')} / {String(screens.length).padStart(2,'0')}</strong></div>
      <div className="sc-chapter-progress"><div><span>{copy.common.currentAnalysis}</span><strong>{localizeChapter(locale,screen.chapter)}</strong></div><b>{Math.round((completed/total)*100)}%</b></div>
      <Progress current={completed} total={total} locale={locale}/>
      <div className={`sc-question-grid is-${motion}`} key={`${stage}-${page}-${screen.type}`}>
        {screen.type==='scale'
          ? <ScaleQuestionGroup screen={screen} answers={answers} onAnswer={choose} pulseId={scalePulse} locale={locale}/>
          : screen.ids.map((id,idx)=>{
              const q=byId[id];
              const display=getQuestionDisplay(locale,id,QUESTION_DISPLAY_V3[id]);
              const options=display?.options || (QUESTION_UI[id]?.options || (QUESTION_UI[id]?.labels||defaultLabels(q)).map((label,i)=>[label,i]));
              return <article className="sc-question" key={id}>
                <div className="sc-qmeta"><span>{copy.question.scenePrefix} {String(completed-screen.ids.filter(x=>answers[x]!==undefined).length+idx+1).padStart(2,'0')}</span><em>{localizeChapter(locale,q.group.replace(/^\S+\s*/,''))}</em></div>
                <h2>{(display?.text || q.text).replace(/([.!?])\s+/g,'$1\n')}</h2>
                <div className={`sc-options ${options.length===2?'is-binary':''}`}>
                  {options.map(([label,scoreIndex],i)=><button key={`${id}-${i}`} type="button" className={`${answers[id]===scoreIndex?'is-selected':''} ${pressed===`${id}-${scoreIndex}`?'is-pressed':''}`} onClick={()=>choose(id,scoreIndex)}><span>{answerKeys[Math.min(i,4)]}</span>{label}</button>)}
                </div>
              </article>;
            })}
      </div>
      <div className="sc-actions">
        {onPrev?<button className="sc-secondary sc-icon-button" onClick={onPrev}><SystemIcon type="back"/>{copy.common.previous}</button>:<span/>}
        <div className="sc-action-right">
          {screen.type==='scale'&&<button className="sc-primary" disabled={!canNext} onClick={nextFromScale}>{isLastPage?copy.common.analysisComplete:copy.common.next} <span>→</span></button>}
          <button className="sc-secondary sc-restart-bottom sc-icon-button" onClick={restart}><SystemIcon type="reset"/>{copy.common.restart}</button>
        </div>
      </div>
    </section>
    
  </>;
}

function ResultShell({ stage, finalOpen=false, finalActive=false, children, locale='ko' }) {
  return <><BrandHeader locale={locale}/><JourneyHeader stage={stage} finalOpen={finalOpen} finalActive={finalActive} locale={locale}/><div className={`sc-result-transition ${finalActive?'is-final-result':''}`} key={`${stage}-${finalOpen}-${finalActive}`}>{finalActive&&<div className="sc-final-unlock-burst" aria-hidden="true"><FinalIcon/></div>}{children}</div></>;
}

function LandingGlyph({ type }) {
  const paths = {
    purpose: <><path d="M10 35h44M18 35V21l14-10 14 10v14"/><path d="M26 35V25h12v10"/><circle cx="32" cy="20" r="2.5"/></>,
    position: <><circle cx="32" cy="28" r="14"/><path d="M32 8v8M32 40v16M12 28h8M44 28h8"/><path d="M26 28l5 5 9-11"/></>,
    tendency: <><path d="M10 43c7-18 18-27 33-27 5 0 9 1 12 3"/><path d="M10 43h44"/><circle cx="22" cy="32" r="3"/><circle cx="38" cy="22" r="3"/><circle cx="50" cy="19" r="3"/></>,
    resource: <><rect x="12" y="13" width="40" height="38" rx="2"/><path d="M20 42V28h8v14M36 42V21h8v21"/><path d="M20 18h24"/></>,
    criteria: <><path d="M13 16h38M13 32h38M13 48h38"/><circle cx="23" cy="16" r="4"/><circle cx="41" cy="32" r="4"/><circle cx="29" cy="48" r="4"/></>,
    readiness: <><path d="M12 46l12-13 9 7 19-23"/><path d="M42 17h10v10"/><path d="M12 54h40"/><circle cx="24" cy="33" r="3"/><circle cx="33" cy="40" r="3"/></>,
  };
  return <svg className="sc-landing-glyph" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

function TechHeroGraphic() {
  return <div className="sc-tech-visual" aria-hidden="true">
    <svg viewBox="0 0 560 560" className="sc-tech-svg">
      <circle className="tech-ring ring-a" cx="280" cy="280" r="214"/>
      <circle className="tech-ring ring-b" cx="280" cy="280" r="166"/>
      <circle className="tech-ring ring-c" cx="280" cy="280" r="108"/>
      <path className="tech-axis" d="M66 280H494M280 66V494"/>
      <path className="tech-grid" d="M128 164H432M128 396H432M164 128V432M396 128V432"/>
      <path className="tech-building" d="M218 350V222h54v128M288 350V176h68v174M198 350h182M236 246h18M236 274h18M236 302h18M307 204h22M307 234h22M307 264h22M307 294h22"/>
      <path className="tech-scan" d="M152 334C206 255 264 225 348 201"/>
      <g className="tech-node node-a"><circle cx="115" cy="280" r="7"/><circle cx="115" cy="280" r="16"/></g>
      <g className="tech-node node-b"><circle cx="190" cy="120" r="7"/><circle cx="190" cy="120" r="16"/></g>
      <g className="tech-node node-c"><circle cx="413" cy="161" r="7"/><circle cx="413" cy="161" r="16"/></g>
      <g className="tech-node node-d"><circle cx="446" cy="348" r="7"/><circle cx="446" cy="348" r="16"/></g>
      <g className="tech-node node-e"><circle cx="307" cy="457" r="7"/><circle cx="307" cy="457" r="16"/></g>
      <g className="tech-node node-f"><circle cx="154" cy="400" r="7"/><circle cx="154" cy="400" r="16"/></g>
      <circle className="tech-core-ring" cx="280" cy="280" r="66"/>
    </svg>
    <div className="sc-tech-core"><span>SELF CHECK</span><strong>READY</strong><em>SCAN / DECIDE</em></div>
    <span className="sc-tech-label label-a">RISK</span>
    <span className="sc-tech-label label-b">CASH FLOW</span>
    <span className="sc-tech-label label-c">LEVERAGE</span>
    <span className="sc-tech-label label-d">MANAGEMENT</span>
    <span className="sc-tech-label label-e">VERIFY</span>
    <span className="sc-tech-label label-f">PLAN</span>
  </div>;
}

function Landing({ onStart, locale }) {
  const copy=getSelfCheckCopy(locale);
  useEffect(()=>{
    const nodes=[...document.querySelectorAll('.sc-landing-reveal')];
    if(!('IntersectionObserver' in window)){
      nodes.forEach((node)=>node.classList.add('is-visible'));
      return;
    }
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.14,rootMargin:'0px 0px -8% 0px'});
    nodes.forEach((node)=>observer.observe(node));
    return ()=>observer.disconnect();
  },[]);
  const checks=copy.landing.checks.items;
  return <><main className="sc-page sc-landing">
    <section className="sc-hero sc-landing-reveal">
      <div className="sc-hero-copy">
        <small>{copy.landing.hero.eyebrow}</small>
        <h1>{copy.landing.hero.titleLines[0]}<br/>{copy.landing.hero.titleLines[1]}</h1>
        <h2 className="sc-hero-subtitle">{copy.landing.hero.subtitle}</h2>
        <p className="sc-hero-description">
          {copy.landing.hero.description.map((line)=><span key={line}>{line}</span>)}
        </p>
        <div className="sc-hero-cta-wrap">
          <p className="sc-hero-cta-prompt">{copy.landing.hero.promptLines[0]}<br/>{copy.landing.hero.promptLines[1]}</p>
          <div className="sc-hero-action">
            <button className="sc-primary sc-hero-btn" onClick={onStart}><span>{copy.common.start}</span><b>→</b></button>
          </div>
          <div className="sc-facts" aria-label={copy.landing.hero.factsAria}><span><b>42</b> QUESTIONS</span><span><b>3</b> STEPS</span><span><b>≈5</b> MIN</span></div>
          <span className="sc-hero-action-note">{copy.landing.hero.noteLines[0]}<br/>{copy.landing.hero.noteLines[1]}</span>
        </div>
      </div>
      <TechHeroGraphic/>
    </section>

    <section className="sc-combo-showcase sc-landing-reveal" aria-label={copy.landing.combo.aria}>
      <div className="sc-combo-stage">
        <div className="sc-combo-equation" aria-hidden="true">
          <span className="sc-combo-factor sc-combo-factor-a">14</span>
          <span className="sc-combo-times sc-combo-times-a">×</span>
          <span className="sc-combo-factor sc-combo-factor-b">10</span>
          <span className="sc-combo-times sc-combo-times-b">×</span>
          <span className="sc-combo-factor sc-combo-factor-c">16</span>
        </div>
        <div className="sc-combo-result" aria-hidden="true"><span>2,240</span><b>+</b></div>
        <h2 className="sc-combo-line">{copy.landing.combo.finalLine}</h2>
      </div>
    </section>

    <section className="sc-discover sc-landing-reveal" aria-labelledby="discover-title">
      <div className="sc-discover-head">
        <small>{copy.landing.discover.eyebrow}</small>
        <h2 id="discover-title">{copy.landing.discover.titleLines[0]}<br/>{copy.landing.discover.titleLines[1]}</h2>
        <div className="sc-discover-copy">
          {copy.landing.discover.paragraphs.map((p)=><p key={p}>{p}</p>)}
        </div>
      </div>
      <div className="sc-discover-track" aria-label={copy.landing.discover.aria}>{copy.landing.discover.items.map(([num,title,en,desc])=><article key={num}><span>{num}</span><strong>{title}</strong><em>{en}</em><p>{desc}</p></article>)}</div>
      <p className="sc-discover-proof">{copy.landing.discover.proof}</p>
    </section>

    <section className="sc-section sc-check-section sc-landing-reveal">
      <div className="sc-section-title"><small>{copy.landing.checks.eyebrow}</small><h2>{copy.landing.checks.title}</h2></div>
      <p className="sc-section-lead">{copy.landing.checks.lead}</p>
      <div className="sc-six">{checks.map(([type,title,en,desc],i)=><article key={title}><div className="sc-check-top"><span>0{i+1}</span><LandingGlyph type={type}/></div><div><strong>{title}</strong><em>{en}</em><p>{desc}</p></div></article>)}</div>
    </section>

    <section className="sc-editorial sc-editorial-soft sc-landing-reveal">
      <div className="sc-editorial-kicker">{copy.landing.why.eyebrow}</div>
      <div className="sc-editorial-copy"><h2>{copy.landing.why.titleLines[0]}<br/>{copy.landing.why.titleLines[1]}</h2>{copy.landing.why.paragraphs.map((p)=><p key={p}>{p}</p>)}</div>
    </section>

    <section className="sc-editorial sc-method-section sc-landing-reveal">
      <div className="sc-editorial-kicker">{copy.landing.method.eyebrow}</div>
      <div className="sc-editorial-copy">
        <h2>{copy.landing.method.titleLines[0]}<br/>{copy.landing.method.titleLines[1]}</h2>
        {copy.landing.method.paragraphs.map((p)=><p key={p}>{p}</p>)}
        <p className="sc-method-statement">{copy.landing.method.statement}</p>
        <div className="sc-method-system" aria-label={copy.landing.method.aria}>
          <div className="sc-method-core"><span>SELF CHECK</span><strong>METHOD</strong><em>STRUCTURE</em></div>
          <div className="sc-method-orbits" aria-hidden="true"><i/><i/><i/></div>
          <div className="sc-method-grid">{copy.landing.method.items.map(([eyebrow,title,desc])=><article key={eyebrow}><span>{eyebrow}</span><strong>{title}</strong><p>{desc}</p></article>)}</div>
        </div>
      </div>
    </section>

    <section className="sc-section sc-flow-section sc-landing-reveal">
      <div className="sc-section-title"><small>{copy.landing.flow.eyebrow}</small><h2>{copy.landing.flow.titleLines[0]}<br/>{copy.landing.flow.titleLines[1]}</h2></div>
      <p className="sc-section-lead">{copy.landing.flow.lead}</p>
      <div className="sc-process-track" aria-label={copy.landing.flow.aria}>{copy.landing.flow.items.map(([num,en,label],i)=><article key={num}><span className={`sc-process-node ${i===3?'is-result':''}`}>{num}</span><strong>{en}</strong><em>{label}</em></article>)}</div>
    </section>

    <section className="sc-editorial sc-editorial-soft sc-landing-reveal">
      <div className="sc-editorial-kicker">{copy.landing.assetFit.eyebrow}</div>
      <div className="sc-editorial-copy"><h2>{copy.landing.assetFit.titleLines[0]}<br/>{copy.landing.assetFit.titleLines[1]}</h2>{copy.landing.assetFit.paragraphs.map((p)=><p key={p}>{p}</p>)}</div>
    </section>

    <section className="sc-editorial sc-landing-reveal">
      <div className="sc-editorial-kicker">{copy.landing.howToRead.eyebrow}</div>
      <div className="sc-editorial-copy"><h2>{copy.landing.howToRead.titleLines[0]}<br/>{copy.landing.howToRead.titleLines[1]}</h2>{copy.landing.howToRead.paragraphs.map((p)=><p key={p}>{p}</p>)}<p className="sc-editorial-note">{copy.landing.howToRead.note}</p></div>
    </section>

    <section className="sc-bottom-cta sc-landing-reveal">
      <div><small>{copy.landing.bottomCta.eyebrow}</small><h2>{copy.landing.bottomCta.titleLines[0]}<br/>{copy.landing.bottomCta.titleLines[1]}</h2><p>{copy.landing.bottomCta.facts}</p></div>
      <button className="sc-primary" onClick={onStart}><span>{copy.common.start}</span><b>→</b></button>
    </section>
  </main></>;
}


const STAGE1_DECISION_AXES = [
  ['목적명확성','매입 목적과 기준','왜 사는지와 무엇을 우선할지가 얼마나 선명한지 봅니다.'],
  ['현금흐름선호','현금흐름 관점','보유 중 실제 들어오고 나가는 돈을 얼마나 중요하게 보는지 봅니다.'],
  ['위험선호','위험 수용 태도','불확실성과 변동성을 어느 정도까지 받아들이는지 봅니다.'],
  ['레버리지선호','레버리지 태도','대출을 기회로 보는지, 부담으로 보는지의 방향을 봅니다.'],
  ['정보검증','정보 검증 습관','추천·분위기보다 원자료와 숫자를 얼마나 다시 확인하는지 봅니다.'],
  ['중단기준','중단 기준','조건이 나빠졌을 때 멈추거나 정리할 기준이 얼마나 구체적인지 봅니다.'],
];

const STAGE1_READY_AXES = [
  ['위험감당능력','위험 감당력'],
  ['유동성','유동성 여유'],
  ['부채부담','부채 부담'],
  ['금융이해','금융 이해'],
  ['정보검증','정보 검증'],
  ['공실대응','공실 대응'],
  ['금리대응','금리 대응'],
  ['중단기준','중단 기준'],
];

const ASSET_REVIEW_GUIDE = {
  '아파트': {
    focus:'가격·입지·수요 비교가 핵심이 되는 자산입니다.',
    fit:'관리 복잡도를 낮추고 동일 지역·유사면적 거래를 비교하려는 성향과 연결되기 쉽습니다.',
    caution:'개별 호재나 브랜드 기대보다 실제 거래가격, 보유비용, 임대수요를 분리해서 확인하는 편이 좋습니다.',
    checks:['최근 실거래와 호가 차이','보유비용과 대출 상환액','임대수요와 매각 유동성'],
  },
  '빌라·연립/다세대': {
    focus:'개별 물건 차이가 커서 비교자료의 질이 중요한 자산입니다.',
    fit:'주변 거래와 입지·건물상태를 하나씩 대조하는 성향이 강할수록 검토 과정과 잘 맞을 수 있습니다.',
    caution:'유사 매물이 적거나 권리·건축 상태가 복잡하면 단순 가격비교만으로 판단하기 어렵습니다.',
    checks:['유사 실거래 확보','건축물·권리관계 확인','수리·관리비용 추정'],
  },
  '오피스텔': {
    focus:'임대수요와 실제 순현금흐름을 함께 봐야 하는 자산입니다.',
    fit:'운영은 비교적 단순하게 가져가되 월세와 비용을 수치로 확인하려는 성향과 연결되기 쉽습니다.',
    caution:'표면 임대수익률만 보면 관리비·공실·세금 차이 때문에 체감 수익이 달라질 수 있습니다.',
    checks:['실질 임대수익','공실과 임차수요','관리비·세금 구조'],
  },
  '원룸·다가구': {
    focus:'여러 임차인의 흐름과 운영비를 계속 관리해야 하는 자산입니다.',
    fit:'현금흐름을 자주 확인하고 운영에 일정 수준 참여할 수 있는 성향이라면 장점이 살아날 수 있습니다.',
    caution:'공실·수리·민원처럼 작은 운영 이슈가 반복되므로 관리시간과 비상자금을 따로 잡아야 합니다.',
    checks:['세대별 임대현황','공실·연체 가정','수리비와 관리 투입시간'],
  },
  '상가주택': {
    focus:'주거와 상업 임대를 함께 판단해야 하는 복합형 자산입니다.',
    fit:'현금흐름과 직접운영을 동시에 보고 여러 임차유형을 비교하는 성향과 연결될 수 있습니다.',
    caution:'상가와 주거의 수요가 다르므로 전체 수익률 하나로 묶기보다 용도별로 나눠 보는 편이 좋습니다.',
    checks:['상가·주거 임대수요 분리','용도별 공실 가정','관리·수선 부담'],
  },
  '집합상가': {
    focus:'상권과 임차인 지속성이 수익 변동에 크게 연결되는 자산입니다.',
    fit:'월세 흐름과 공실 가능성을 꼼꼼히 보는 성향이라면 핵심 변수를 비교하기 좋습니다.',
    caution:'현재 임대료만 보지 말고 재임대 가능성과 상권 변화, 업종 의존도를 함께 봐야 합니다.',
    checks:['상권·유동인구 변화','임차인 업종과 계약조건','재임대 시 예상 공실기간'],
  },
  '꼬마빌딩': {
    focus:'가격·임대·운영·개선여지를 한꺼번에 보는 자산입니다.',
    fit:'직접 비교하고 개선 포인트를 찾는 성향이라면 분석 과정 자체와 잘 맞을 수 있습니다.',
    caution:'한두 개 가정이 달라져도 수익과 자금계획이 크게 바뀔 수 있어 공실·수선·금리를 함께 스트레스 테스트해야 합니다.',
    checks:['층·호별 임대현황','리모델링·수선비','금리·공실 동시 가정'],
  },
  '중대형빌딩': {
    focus:'재무구조와 관리체계를 동시에 보는 복합 자산입니다.',
    fit:'전문가를 활용하면서 자금·공실·관리비용을 구조적으로 검토할 수 있는 성향과 연결됩니다.',
    caution:'규모가 커질수록 작은 계산오차의 절대금액이 커지므로 가정과 자금조달 조건을 보수적으로 확인해야 합니다.',
    checks:['임차인 집중도','대출 구조와 금리 민감도','운영·관리비용 체계'],
  },
  '오피스': {
    focus:'임차수요·공실·계약구조를 깊게 확인해야 하는 자산입니다.',
    fit:'자료를 기반으로 임대수요와 계약조건을 검증하고 관리체계를 활용하는 성향과 잘 맞을 수 있습니다.',
    caution:'핵심 임차인 이탈이나 공실 기간이 길어질 때 현금흐름 충격이 커질 수 있어 대체수요를 반드시 봐야 합니다.',
    checks:['주요 임차인 비중','평균 임대차 기간','공실률과 대체 임차수요'],
  },
  '토지': {
    focus:'현재 현금흐름보다 장기 변화와 보유여력을 더 크게 보는 자산입니다.',
    fit:'시간을 길게 보고 미래가치의 근거를 따로 검증할 수 있는 성향이라면 검토방식과 연결될 수 있습니다.',
    caution:'현금수익이 약한 기간이 길어질 수 있으므로 보유비용과 환금성, 개발 가능성을 분리해서 봐야 합니다.',
    checks:['보유비용과 자금 묶임','용도·규제 확인','매각 유동성과 장기 시나리오'],
  },
};

function axisStatusCopy(axis, value) {
  const l=level(value ?? 0);
  const high={
    목적명확성:'매입 목적과 우선순위를 비교적 선명하게 두는 편입니다.',
    현금흐름선호:'현재 현금흐름을 중요한 판단 기준으로 두는 편입니다.',
    위험선호:'불확실성을 감수하고 기회를 검토하려는 힘이 강한 편입니다.',
    레버리지선호:'감당 가능하다고 판단하면 차입을 적극적으로 활용하려는 편입니다.',
    정보검증:'추천보다 원자료와 숫자를 다시 확인하려는 편입니다.',
    중단기준:'상황이 나빠질 때 멈출 기준을 비교적 구체적으로 두는 편입니다.',
  };
  const low={
    목적명확성:'매입 이유와 우선순위가 아직 넓게 열려 있을 수 있습니다.',
    현금흐름선호:'현재 월세보다 다른 가치요인을 더 크게 볼 수 있습니다.',
    위험선호:'불확실성이 큰 상황에서는 보수적으로 판단하려는 편입니다.',
    레버리지선호:'대출 비중이 커질수록 판단을 보수적으로 바꾸는 편입니다.',
    정보검증:'외부 설명이나 첫인상에 영향을 받을 가능성을 따로 점검할 필요가 있습니다.',
    중단기준:'보유·정리 기준을 사전에 숫자로 정해두면 판단이 더 안정적일 수 있습니다.',
  };
  const mid={
    목적명확성:'목적은 있지만 실제 선택기준과의 우선순위를 더 좁힐 여지가 있습니다.',
    현금흐름선호:'현금흐름과 장기 가치 사이에서 조건에 따라 균형을 잡는 편입니다.',
    위험선호:'안정성과 기회 사이에서 조건을 확인한 뒤 움직이는 편입니다.',
    레버리지선호:'대출 활용 여부를 물건과 상환조건에 따라 조정하는 편입니다.',
    정보검증:'필요한 정보는 확인하지만 검증 깊이는 상황에 따라 달라질 수 있습니다.',
    중단기준:'대략적인 기준은 있으나 실제 숫자와 조건으로 더 구체화할 수 있습니다.',
  };
  return (l==='높음'?high:l==='낮음'?low:mid)[axis] || `${AXIS_LABELS[axis] || axis} 수준은 ${l}으로 나타났습니다.`;
}

function publicAxesForType(typeId) {
  const proto=TYPE_PROTOTYPES[typeId] || {core:{},aux:{}};
  const axes=Object.fromEntries(Object.keys(AXIS_LABELS).map(k=>[k,0]));
  for (const [k,v] of Object.entries(proto.aux||{})) axes[k]=Number(v)*2;
  for (const [k,v] of Object.entries(proto.core||{})) axes[k]=Number(v)*2;
  return axes;
}

const PUBLIC_ASSET_RELATED = {
  '아파트':['빌라·연립/다세대','오피스텔'],
  '빌라·연립/다세대':['아파트','원룸·다가구'],
  '오피스텔':['아파트','원룸·다가구'],
  '원룸·다가구':['오피스텔','상가주택'],
  '상가주택':['원룸·다가구','꼬마빌딩'],
  '집합상가':['상가주택','꼬마빌딩'],
  '꼬마빌딩':['상가주택','중대형빌딩'],
  '중대형빌딩':['꼬마빌딩','오피스'],
  '오피스':['중대형빌딩','집합상가'],
  '토지':['꼬마빌딩','아파트'],
};

function publicAssetResult(primary) {
  const names=[primary,...(PUBLIC_ASSET_RELATED[primary]||[])];
  const top=names.map((asset,i)=>({
    asset, order:i, score:0, applied:[],
    reasonAxes:['현금흐름','관리부담','유동성'],
  }));
  return {top,caution:[],purposeLow:false};
}

function Stage1Result({ axes, typeId, onNext, onRestart, locale='ko', publicMode=false }) {
  const baseReport=TYPE_REPORTS[typeId];
  const baseCharacter=CHARACTER_PROFILES[typeId] || {name:baseReport.name,headline:baseReport.line};
  const r=getStage1Type(locale,typeId,baseReport,baseCharacter);
  const ui=getStage1Ui(locale);
  const isKo=locale==='ko';
  const ready=isKo?readiness(axes):stage1Readiness(locale,axes);
  const profile=['목적명확성','현금흐름선호','위험선호','레버리지선호','정보검증','중단기준'];
  const strong=Object.entries(axes).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])).slice(0,4);
  const rich=buildRichResult(typeId,axes,null,null);
  const decisionHabits=(rich.behaviors||[]).slice(0,4).map(x=>localizeStage1Insight(locale,x));
  const cautions=(rich.contradictions?.length?rich.contradictions:rich.risks||[]).slice(0,3).map(x=>localizeStage1Insight(locale,x));
  const decisionAxes=getStage1DecisionAxes(locale) || STAGE1_DECISION_AXES;
  const readyAxes=getStage1ReadyAxes(locale) || STAGE1_READY_AXES;
  const axisLabel=(k)=>stage1AxisLabel(locale,k,AXIS_LABELS[k]||k);
  const levelText=(v)=>isKo?level(v):stage1Level(locale,v);
  const statusText=(axis,v)=>stage1AxisStatus(locale,axis,v,axisStatusCopy(axis,v));
  const koUi={
    stepLabel:'STEP 1 RESULT · 기본 투자성향',publicLabel:'STEP 1 PUBLIC GUIDE',publicType:'공개 유형',readiness:'현재 준비상태',personalScore:'개인 점수',progress:'진단 진행도',afterCheck:'자가진단 후 계산',stepProgress:'STEP 1/3',
    profileTitle:'당신이 건물을 보는 방식',talentTitle:'이 성향의 강점',blindTitle:'강점이 과해질 때',approachTitle:'잘 맞는 검토 방식',yourProfile:'YOUR PROFILE',typeProfile:'TYPE PROFILE',profilePublicTitle:'이 유형에서 주로 확인하는 판단 방향',profileUserTitle:'30개 답변이 보여준 방향',interpretation:'TYPE INTERPRETATION',fromAnswers:'FROM YOUR ANSWERS',strongPublic:(n)=>`${n}에서 특히 읽어야 할 특징`,strongUser:'특히 이런 성향이 강하게 나타났습니다.',decisionTitle:['당신의 판단 구조를','여섯 가지 축으로 다시 읽었습니다.'],decisionDesc:'유형명 하나로 끝내지 않고, 실제 건물 검토 과정에서 반복해서 작동할 수 있는 판단 기준을 분리해 봅니다.',readinessTitlePublic:['이 유형에서도','준비도는 별도로 확인합니다.'],readinessTitleUser:['성향과 별개로,','지금 버틸 준비도도 봅니다.'],readinessDescPublic:'공개 페이지의 막대는 유형 프로토타입의 대표 방향을 보여주며, 실제 준비도는 개인 응답으로 별도 계산합니다.',readinessDescUser:'좋아하는 투자방식과 실제로 감당할 수 있는 조건은 다를 수 있습니다. 자금·공실·금리·검증 준비를 별도로 확인합니다.',patternTitlePublic:['이 유형에서 자주 확인하는','판단 패턴입니다.'],patternTitleUser:['응답 조합에서','이런 판단 습관이 읽힙니다.'],patternDescPublic:'유형 프로토타입에서 반복적으로 연결되는 판단 패턴을 해설합니다. 개인 결과에서는 실제 여러 답변의 조합으로 다시 계산합니다.',patternDescUser:'한 문항이 아니라 여러 답변이 동시에 같은 방향을 가리킬 때 나타나는 패턴입니다.',crossTitle:['강점과 준비상태가','엇갈리는 지점도 확인했습니다.'],crossDesc:'성향이 강하다는 것과 실제 조건이 준비됐다는 것은 같은 의미가 아닙니다. 서로 충돌하는 조합은 별도로 점검합니다.',checkFirst:'먼저 확인 · ',actionTitle:['실제 건물을 보기 전에','먼저 확인할 세 가지.'],actionDesc:'현재 응답에서 보완 우선순위가 높은 항목을 실제 검토 행동으로 바꿨습니다.',actionItemDesc:'이 항목을 숫자나 조건으로 먼저 정리해두면 매물의 장점에 판단 기준이 밀리는 것을 줄이는 데 도움이 됩니다.',tryResult:'TRY YOUR RESULT',nextStep:'NEXT / STEP 2',nextPublicTitle:['내 실제 투자성향은','응답으로 확인합니다.'],nextUserTitle:['기본 성향 분석은 여기까지 완결됐습니다.','이제 자산 적합성을 연결합니다.'],nextPublicDesc:'이 공개 페이지는 실제 결과와 같은 레이아웃을 사용하며, 개인 점수와 준비상태는 실제 응답으로 계산됩니다.',nextUserDesc:'STEP 2에서는 추가 12개 판단을 더해 어떤 자산의 구조가 현재 성향과 잘 맞는지, 반대로 어떤 조건에서 부담이 커질 수 있는지 비교합니다.',start:'자가진단 시작하기',continue:'STEP 2 자산 적합성 분석으로 계속',disclaimer:'이 결과는 투자판단을 대신하지 않는 자가점검입니다.',allTypes:'전체 결과 유형 보기',restart:'처음부터 다시하기',graphic:'투자성향 그래픽'};
  const t=ui||koUi;
  return <main className="sc-page sc-result-page">
    <section className="sc-result-hero sc-result-hero-light"><div className="sc-result-hero-copy"><small>{publicMode?`${t.publicLabel} · ${typeId}`:t.stepLabel}</small><h1>{r.character}</h1><p className="sc-result-lead">{r.headline}<br/>{r.line}</p><div className="sc-result-status"><span>{publicMode?t.publicType:t.readiness} <strong>{publicMode?r.name:ready}</strong></span><span>{publicMode?t.personalScore:t.progress} <strong>{publicMode?t.afterCheck:t.stepProgress}</strong></span></div></div><ResultVisual src={resultGraphic(typeId,'step1')} alt={`${r.character} ${t.graphic}`}/></section>
    <section className="sc-result-grid"><article><small>PROFILE</small><h2>{t.profileTitle}</h2><p>{r.features}</p></article><article><small>TALENT</small><h2>{t.talentTitle}</h2><p>{r.strength}</p></article><article><small>BLIND SPOT</small><h2>{t.blindTitle}</h2><p>{r.caution}</p></article><article><small>APPROACH</small><h2>{t.approachTitle}</h2><p>{r.approach}</p></article></section>
    <section className="sc-profile"><div><small>{publicMode?t.typeProfile:t.yourProfile}</small><h2>{publicMode?t.profilePublicTitle:t.profileUserTitle}</h2></div><div className="sc-bars">{profile.map(k=>{const v=axes[k]??0;return <div key={k}><span>{axisLabel(k)}</span><div><i style={{width:`${((v+2)/4)*100}%`}}/></div><em>{levelText(v)}</em></div>})}</div></section>
    <section className="sc-findings"><small>{publicMode?t.interpretation:t.fromAnswers}</small><h2>{publicMode?t.strongPublic(r.name):t.strongUser}</h2><div>{strong.map(([k,v])=><span key={k}>{axisLabel(k)} · {levelText(v)}</span>)}</div><p>{r.example}</p></section>

    <section className="sc-deep-report">
      <header className="sc-deep-head"><small>DECISION STRUCTURE</small><h2>{t.decisionTitle[0]}<br/>{t.decisionTitle[1]}</h2><p>{t.decisionDesc}</p></header>
      <div className="sc-axis-analysis">{decisionAxes.map(([axis,title,desc],i)=>{const v=axes[axis]??0;return <article key={axis}><span>0{i+1}</span><small>{axisLabel(axis)}</small><h3>{title}</h3><strong>{levelText(v)}</strong><p>{statusText(axis,v)}</p><em>{desc}</em></article>})}</div>
    </section>

    <section className="sc-deep-report sc-ready-report">
      <header className="sc-deep-head"><small>READINESS</small><h2>{publicMode?<>{t.readinessTitlePublic[0]}<br/>{t.readinessTitlePublic[1]}</>:<>{t.readinessTitleUser[0]}<br/>{t.readinessTitleUser[1]}</>}</h2><p>{publicMode?t.readinessDescPublic:t.readinessDescUser}</p></header>
      <div className="sc-readiness-grid">{readyAxes.map(([axis,title])=><article key={axis}><span>{title}</span><strong>{levelText(axes[axis]??0)}</strong><div><i style={{width:`${((axes[axis]??0)+2)/4*100}%`}}/></div></article>)}</div>
    </section>

    <section className="sc-deep-report">
      <header className="sc-deep-head"><small>ANSWER PATTERN</small><h2>{publicMode?<>{t.patternTitlePublic[0]}<br/>{t.patternTitlePublic[1]}</>:<>{t.patternTitleUser[0]}<br/>{t.patternTitleUser[1]}</>}</h2><p>{publicMode?t.patternDescPublic:t.patternDescUser}</p></header>
      <div className="sc-insight-cards">{decisionHabits.map((x,i)=><article key={x.id || i}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    {cautions.length>0&&<section className="sc-deep-report sc-caution-report">
      <header className="sc-deep-head"><small>CROSS CHECK</small><h2>{t.crossTitle[0]}<br/>{t.crossTitle[1]}</h2><p>{t.crossDesc}</p></header>
      <div className="sc-insight-cards">{cautions.map((x,i)=><article key={x.id || i}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p>{x.check&&<em>{t.checkFirst}{x.check}</em>}{x.prescription&&<em>{x.prescription}</em>}</article>)}</div>
    </section>}

    <section className="sc-deep-report sc-action-report">
      <header className="sc-deep-head"><small>CHECK FIRST</small><h2>{t.actionTitle[0]}<br/>{t.actionTitle[1]}</h2><p>{t.actionDesc}</p></header>
      <div className="sc-action-list">{rich.nextActions.map((x,i)=>{const lx=localizeStage1Action(locale,x);return <article key={x}><span>0{i+1}</span><strong>{lx}</strong><p>{t.actionItemDesc}</p></article>})}</div>
    </section>

    <section className="sc-next"><div><small>{publicMode?t.tryResult:t.nextStep}</small><h2>{publicMode?<>{t.nextPublicTitle[0]}<br/>{t.nextPublicTitle[1]}</>:<>{t.nextUserTitle[0]}<br/>{t.nextUserTitle[1]}</>}</h2><p>{publicMode?t.nextPublicDesc:t.nextUserDesc}</p></div><button className="sc-primary" onClick={onNext}>{publicMode?t.start:t.continue} <span>→</span></button></section>
    <div className="sc-result-foot"><p>{t.disclaimer}</p><button onClick={onRestart}>{publicMode?t.allTypes:t.restart}</button></div>
  </main>;
}
function Stage2Result({ typeId, axes, assets, onNext, locale='ko', publicHeading=null, publicMode=false }) {
  const baseReport=TYPE_REPORTS[typeId];
  const baseCharacter=CHARACTER_PROFILES[typeId] || {name:baseReport.name,headline:baseReport.line};
  const character=getStage1Type(locale,typeId,baseReport,baseCharacter).character;
  const top=assets.top || [];
  const t=getStage2Ui(locale);
  const assetName=(asset)=>getStage2Asset(locale,asset).name || asset;
  const assetCopy=(asset)=>getStage2Asset(locale,asset);
  const characteristic=(asset,key)=>stage2Value(locale,ASSET_CHARACTERISTICS[asset]?.[key] || '-');
  const reasonText=(a)=>a.reasonAxes?.length
    ? `${a.reasonAxes.map(x=>stage2Axis(locale,x)).join(' · ')}${locale==='en'?' align relatively well with the general characteristics of this asset.':locale==='ja'?'に関する回答傾向が、この資産の一般的な特性と比較的よく合っています。':' 성향이 이 자산의 일반특성과 비교적 잘 맞습니다.'}`
    : t.fallbackMatch;
  const primaryAsset=top[0]?.asset;
  const primaryName=assetName(primaryAsset);
  return <main className="sc-page sc-result-page">
    <section className="sc-result-hero sc-result-hero-light compact"><div className="sc-result-hero-copy"><small>{publicMode?t.publicKicker:t.resultKicker}</small><h1>{publicHeading || <>{t.title[0]}<br/>{t.title[1]}</>}</h1><p className="sc-result-lead">{publicMode?`${primaryName}${locale==='en'?' — general investment characteristics and review criteria, shown in the same layout as an actual result.':locale==='ja'?'の一般的な投資特性と確認基準を、実際の結果と同じレイアウトで説明します。':'의 일반적인 투자 특성과 확인 기준을 실제 결과 레이아웃으로 설명합니다.'}`:<><strong>{character.name}</strong>{locale==='en'?' profile combined with 12 additional answers to compare relative fit across asset types.':locale==='ja'?'タイプと追加12問の回答を組み合わせ、資産ごとの適合性を比較しました。':' 성향과 추가 12개 응답을 연결해 자산별 적합성을 비교했습니다.'}</>}</p><div className="sc-result-status"><span>{publicMode?t.publicAsset:t.rank1} <strong>{primaryName}</strong></span><span>{publicMode?t.personalRank:t.progress} <strong>{publicMode?t.afterCheck:'STEP 2/3'}</strong></span></div>{assets.purposeLow&&<p className="sc-result-inline-note">{t.purposeLow}</p>}</div><ResultVisual src={assetGraphic(primaryAsset)} alt={`${primaryName} ${locale==='en'?'asset-fit graphic':locale==='ja'?'資産適合性グラフィック':'적합성 그래픽'}`} tone="green"/></section>
    <section className="sc-asset-rank">{top.map((a,i)=>{const insight=assetCopy(a.asset);return <article key={a.asset}><span className="sc-rank">0{i+1}</span><small>{publicMode?(i===0?t.assetGuide:t.relatedView):t.assetMatch}</small><h2>{insight.name}</h2><img className="sc-asset-thumb" src={assetGraphic(a.asset)} alt={`${insight.name} ${locale==='en'?'asset graphic':locale==='ja'?'資産グラフィック':'자산 그래픽'}`}/><p><strong>{insight.good || t.fallbackGood}</strong></p><p>{insight.goodText || reasonText(a)}</p>{a.applied[0]&&<em>{stage2Gate(locale,a.applied[0].msg)}</em>}<div className="sc-asset-meta"><span>{t.cashflow} {characteristic(a.asset,'cashflow')}</span><span>{t.management} {characteristic(a.asset,'management')}</span><span>{t.liquidity} {characteristic(a.asset,'liquidity')}</span></div></article>})}</section>

    <section className="sc-deep-report">
      <header className="sc-deep-head"><small>WHY THIS MATCH</small><h2>{t.whyTitle[0]}<br/>{t.whyTitle[1]}</h2><p>{t.whyDesc}</p></header>
      <div className="sc-asset-deep">{top.map((a,i)=>{const guide=assetCopy(a.asset);return <article key={a.asset}>
        <div className="sc-asset-deep-title"><span>0{i+1}</span><div><small>{i===0?t.primary:t.alternative}</small><h3>{guide.name}</h3></div></div>
        <p className="sc-asset-deep-lead">{guide.focus || guide.goodText}</p>
        <div className="sc-asset-deep-columns">
          <div><small>WHY IT FITS</small><strong>{t.whyFits}</strong><p>{a.reasonAxes?.length?`${a.reasonAxes.map(x=>stage2Axis(locale,x)).join(' · ')}${locale==='en'?' responses align relatively well with this asset. ':locale==='ja'?'に関する回答が、この資産の一般的な特性と比較的よく合っています。 ':' 관련 응답이 이 자산의 일반적인 특성과 상대적으로 잘 맞았습니다. '}`:''}{guide.fit || guide.goodText}</p></div>
          <div><small>WATCH OUT</small><strong>{t.watchOut}</strong><p>{a.applied?.[0]?.msg ? stage2Gate(locale,a.applied[0].msg) : (guide.caution || guide.tiredText)}</p></div>
        </div>
        <div className="sc-asset-checks"><small>{t.checks}</small>{(guide.checks||[]).map((x,j)=><span key={x}><b>0{j+1}</b>{x}</span>)}</div>
      </article>})}</div>
    </section>

    <section className="sc-deep-report sc-compare-report">
      <header className="sc-deep-head"><small>{publicMode?'COMPARE ASSETS':'COMPARE TOP 3'}</small><h2>{publicMode?<>{t.comparePublic[0]}<br/>{t.comparePublic[1]}</>:<>{t.compareUser[0]}<br/>{t.compareUser[1]}</>}</h2><p>{publicMode?t.comparePublicDesc:t.compareUserDesc}</p></header>
      <div className="sc-asset-compare">
        <div className="sc-asset-compare-head">{t.table.map(x=><span key={x}>{x}</span>)}</div>
        {top.map(a=>{return <div className="sc-asset-compare-row" key={a.asset}><strong>{assetName(a.asset)}</strong><span>{characteristic(a.asset,'cashflow')}</span><span>{characteristic(a.asset,'vacancy')}</span><span>{characteristic(a.asset,'management')}</span><span>{characteristic(a.asset,'liquidity')}</span><span>{characteristic(a.asset,'expertise')}</span></div>})}
      </div>
    </section>

    {assets.caution.length>0&&<section className="sc-caution"><small>CHECK AGAIN</small><h2>{t.cautionTitle}</h2>{assets.caution.slice(0,2).map(a=>{const insight=assetCopy(a.asset);return <article key={a.asset}><strong>{insight.name}</strong><p><b>{insight.tired}</b><br/>{insight.tiredText || stage2Gate(locale,a.applied.find(g=>g.strong)?.msg)}<br/>{insight.caution}</p></article>})}</section>}

    <section className="sc-deep-report sc-action-report">
      <header className="sc-deep-head"><small>PROPERTY CHECK</small><h2>{t.propertyTitle[0]}<br/>{t.propertyTitle[1]}</h2><p>{t.propertyDesc}</p></header>
      <div className="sc-action-list">{(assetCopy(primaryAsset)?.checks||[]).map((x,i)=><article key={x}><span>0{i+1}</span><strong>{x}</strong><p>{t.propertyItem}</p></article>)}</div>
    </section>

    <section className="sc-next"><div><small>{publicMode?'TRY YOUR RESULT':'NEXT / STEP 3'}</small><h2>{publicMode?<>{t.nextPublic[0]}<br/>{t.nextPublic[1]}</>:<>{t.nextUser[0]}<br/>{t.nextUser[1]}</>}</h2><p>{publicMode?t.nextPublicDesc:t.nextUserDesc}</p></div><button className="sc-primary" onClick={onNext}>{publicMode?t.start:t.continue} <span>→</span></button></section>
  </main>;
}

function Stage3Result({ result, onSummary, onRestart, locale, publicMode=false }) {
  const rawComic=result.comic;
  const c=getStage3Comic(locale,rawComic.id,rawComic);
  const t=getStage3Ui(locale);
  const topProcesses=(result.top||[]).map(x=>({...x,detail:getStage3Process(locale,x.id,PROCESSES[x.id])}));
  const leadProcess=topProcesses[0]?.detail;
  return <main className="sc-page sc-result-page">
    <section className="sc-result-hero sc-result-hero-light"><div className="sc-result-hero-copy"><small>{publicMode?`STEP 3 PUBLIC GUIDE · ${rawComic.id||""}`:t.result}</small><h1>{c.name}</h1><p className="sc-result-lead">{c.character}</p><div className="sc-result-status"><span>{t.core} <strong>{leadProcess?.name}</strong></span><span>{publicMode?t.personalScore:t.final} <strong>{publicMode?t.afterCheck:t.open}</strong></span></div></div><ResultVisual src={behaviorGraphic()} alt={t.alt} tone="coral"/></section>
    <section className="sc-process-cards">{topProcesses.map((x,i)=>{const p=x.detail;return <article key={x.id}><span>0{i+1}</span><small>{p.user}</small><h2>{p.name}</h2><p>{p.method}</p></article>})}</section>
    <section className="sc-detail-list"><article><small>WHY</small><h2>{t.why}</h2><p>{c.why}</p></article><article><small>DECISION</small><h2>{t.decision}</h2><p>{c.decision}</p></article><article><small>STRENGTH</small><h2>{t.strength}</h2><p>{c.strength}</p></article><article><small>CAUTION</small><h2>{t.caution}</h2><p>{c.caution}</p></article><article className="wide"><small>ROUTINE</small><h2>{t.routine}</h2><p>{c.routine}</p></article><article className="wide"><small>BASIS</small><h2>{t.basis}</h2><p>{c.evidence}</p></article></section>

    <section className="sc-deep-report">
      <header className="sc-deep-head"><small>DECISION PROCESS</small><h2>{t.processTitle[0]}<br/>{t.processTitle[1]}</h2><p>{t.processDesc}</p></header>
      <div className="sc-process-deep">{topProcesses.map((x,i)=>{const p=x.detail;return <article key={x.id}><span>0{i+1}</span><small>{p.user}</small><h3>{p.name}</h3><dl><div><dt>{t.method}</dt><dd>{p.method}</dd></div><div><dt>{t.benefit}</dt><dd>{p.benefit}</dd></div><div><dt>{t.watch}</dt><dd>{p.caution}</dd></div><div><dt>{t.steps}</dt><dd>{p.steps}</dd></div></dl></article>})}</div>
    </section>

    <section className="sc-deep-report sc-behavior-apply">
      <header className="sc-deep-head"><small>APPLY TO REAL DECISION</small><h2>{t.applyTitle[0]}<br/>{t.applyTitle[1]}</h2><p>{t.applyDesc}</p></header>
      <div className="sc-action-list">
        <article><span>01</span><strong>{t.moments[0][0]}</strong><p>{t.moments[0][1]}</p></article>
        <article><span>02</span><strong>{t.moments[1][0]}</strong><p>{leadProcess?.caution || c.caution} {t.moments[1][1]}</p></article>
        <article><span>03</span><strong>{t.moments[2][0]}</strong><p>{c.routine} {t.moments[2][1]}</p></article>
      </div>
    </section>

    <section className="sc-deep-report sc-action-report">
      <header className="sc-deep-head"><small>USE THIS RESULT</small><h2>{t.useTitle[0]}<br/>{t.useTitle[1]}</h2><p>{t.useDesc}</p></header>
      <div className="sc-use-result"><p><strong>{t.keep}</strong>{c.strength}</p><p><strong>{t.block}</strong>{c.caution}</p><p><strong>{t.improve}</strong>{c.routine}</p></div>
    </section>

    <section className="sc-next"><div><small>{publicMode?`TRY YOUR RESULT`:`FINAL / UNLOCKED`}</small><h2>{publicMode?<>{t.publicNext[0]}<br/>{t.publicNext[1]}</>:<>{t.userNext[0]}<br/>{t.userNext[1]}</>}</h2><p>{publicMode?t.publicNextDesc:t.userNextDesc}</p></div><button className="sc-primary" onClick={onSummary}>{publicMode?t.start:t.summary} <span>→</span></button></section>
    <section className="sc-final-note"><p>{c.footer}</p><a href={`${BASE_PATH}/${locale}`}>{t.home}</a><button onClick={onRestart}>{publicMode?t.catalog:t.restart}</button></section>
  </main>;
}

const BEHAVIOR_SHORT = {
  C01:'독립 검증형', C02:'방어 시뮬레이션형', C03:'현금흐름 우선형', C04:'가치 분리검증형',
  C05:'기준가격 경계형', C06:'확신 가속형', C07:'손실 버티기형', C08:'정보 수집형',
  C09:'관리 효율형', C10:'미래가치 추적형', C11:'비교표 판단형', C12:'직접 해결형',
  C13:'전문가 활용형', C14:'현장 직관형', C15:'기회 선점형', C16:'중단기준 실행형',
};

function buildFinalComposite(stage1TypeId, finalTypeId, assets, process, axes, locale='ko') {
  const ui=getFinalUi(locale);
  const stage1Raw=TYPE_REPORTS[stage1TypeId];
  const finalRaw=TYPE_REPORTS[finalTypeId];
  const stage1=getStage1Type(locale,stage1TypeId,stage1Raw,CHARACTER_PROFILES[stage1TypeId]);
  const finalCore=getStage1Type(locale,finalTypeId,finalRaw,CHARACTER_PROFILES[finalTypeId]);
  const assetKey=assets.top?.[0]?.asset;
  const asset2Key=assets.top?.[1]?.asset;
  const asset=assetKey ? getStage2Asset(locale,assetKey).name : (locale==='en'?'Asset match pending':locale==='ja'?'推奨資産は未確定':'추천 자산 미정');
  const asset2=asset2Key ? getStage2Asset(locale,asset2Key).name : null;
  const rawComic=process.comic || {};
  const comic=getStage3Comic(locale,rawComic.id,rawComic);
  const rawBehavior=BEHAVIOR_SHORT[rawComic.id] || rawComic.name || ui.behaviorFallback;
  const behavior=getFinalBehaviorShort(locale,rawComic.id,rawBehavior);
  const changed=stage1TypeId!==finalTypeId;
  const assetCopy=assetKey ? getStage2Asset(locale,assetKey) : null;
  const assetScore=Math.round(assets.top?.[0]?.score ?? 0);
  const behaviorScore=Math.round(process.top?.[0]?.score ?? 0);

  let title, synthesis, integrated;
  if(locale==='en'){
    title=`${finalCore.name} with a ${behavior} pattern when reviewing ${asset}`;
    synthesis=changed
      ? `Your STEP 1 profile was “${stage1.name},” but after the 12 asset-fit responses in STEP 2, your final core tendency shifted to “${finalCore.name}.”`
      : `Your STEP 1 tendency, “${stage1.name},” remained your core profile after the 12 asset-fit responses in STEP 2 were added.`;
    integrated=`${synthesis} On the asset side, ${asset} ranked highest for fit, while your decision process most strongly reflects a ${behavior} pattern.`;
  } else if(locale==='ja'){
    title=`${asset}を検討する時に${behavior}の傾向が強い「${finalCore.name}」`;
    synthesis=changed
      ? `STEP 1では「${stage1.name}」でしたが、STEP 2の資産判断12問を加えると、最終的な核心傾向は「${finalCore.name}」へ移りました。`
      : `STEP 1の「${stage1.name}」傾向は、STEP 2の資産判断12問を加えた後も最終的な核心傾向として維持されました。`;
    integrated=`${synthesis} 資産面では${asset}が最も高い適合性を示し、実際の意思決定では「${behavior}」のパターンが強く結びついています。`;
  } else {
    title=`${asset}을 검토할 때 ${behavior} 성향이 강한 ${finalCore.name}`;
    synthesis=changed
      ? `STEP 1에서는 '${stage1.name}'이었지만, STEP 2의 자산 판단 12문항까지 합산하자 최종 핵심성향은 '${finalCore.name}'으로 이동했습니다.`
      : `STEP 1의 '${stage1.name}' 성향이 STEP 2의 자산 판단 12문항까지 합산한 뒤에도 최종 핵심성향으로 유지됐습니다.`;
    integrated=`${synthesis} 자산 측면에서는 ${asset}이 가장 높은 적합성을 보였고, 실제 의사결정에서는 '${behavior}' 패턴이 강하게 연결됩니다.`;
  }

  const assetLine=assetCopy?.goodText || ui.assetFallbackText;
  const behaviorLine=comic.decision || comic.character || ui.behaviorFallbackLine;
  const cautionLine=comic.caution || finalCore.caution || ui.cautionFallback;

  return {
    stage1TypeId, finalTypeId, asset, asset2, assetKey, asset2Key, behavior, changed,
    assetScore, behaviorScore,
    title, synthesis, headline:ui.integratedHeadline,
    formula:[
      {step:'STEP 1',label:ui.basic,value:stage1.name},
      {step:'STEP 2',label:ui.assetFit,value:asset,sub:asset2?`${ui.second} ${asset2}`:null},
      {step:'STEP 3',label:ui.behaviorPattern,value:behavior,sub:comic.name},
    ],
    integrated, assetLine, behaviorLine, cautionLine,
  };
}

function SummaryResult({ stage1TypeId, finalTypeId, axes, assets, process, rich, onRestart, locale, publicMode=false, onStart=null }) {
  const ui=getFinalUi(locale);
  const typeRaw=TYPE_REPORTS[finalTypeId];
  const publicType=getStage1Type(locale,finalTypeId,typeRaw,CHARACTER_PROFILES[finalTypeId]);
  const ready=stage1Readiness(locale,axes);
  const rawComic=process.comic;
  const c=getStage3Comic(locale,rawComic?.id,rawComic);
  const profile=['목적명확성','현금흐름선호','위험선호','레버리지선호','정보검증','관리참여','공실대응','중단기준'];
  const topAssets=rich.topAssets;
  const finalProfile=buildFinalComposite(stage1TypeId,finalTypeId,assets,process,axes,locale);
  const publicCharacter=publicType;
  const praises=rich.praises.map(x=>localizeFinalPraise(locale,x));
  const behaviors=rich.behaviors.map(x=>localizeStage1Insight(locale,x));
  const contradictions=rich.contradictions.map(x=>localizeFinalContradiction(locale,x,localizeStage1Insight,localizeStage1Action));
  const risks=rich.risks.map(x=>localizeFinalRisk(locale,x,localizeStage1Insight,localizeStage1Action));
  const nextActions=rich.nextActions.map(x=>localizeStage1Action(locale,x));
  const publicCalc=locale==='en'?'Calculated from your actual responses':locale==='ja'?'実際の回答から算出':'실제 응답으로 계산';
  const publicTypeGuide=locale==='en'?'The public FINAL explains the interpretation framework for this profile using the same result layout. Asset fit and behavior patterns are calculated only from an individual’s actual answers.':locale==='ja'?'公開FINALでは、このタイプの総合解釈の考え方を同じ結果レイアウトで示します。資産適合性と行動パターンは、個人の実際の回答からのみ算出します。':`공개 FINAL은 ${publicType.name} 유형의 종합 해석 기준을 같은 결과 레이아웃으로 보여줍니다. 자산 적합성과 행동패턴은 실제 개인 응답에서만 계산합니다.`;
  const publicMerged=locale==='en'?'In an individual result, all three stages are combined into one profile.':locale==='ja'?'個人結果では、3つの段階を一つのプロフィールに統合します。':'실제 개인 결과에서는 세 단계가 하나로 합쳐집니다.';
  const publicTalent=locale==='en'?`Decision strengths to preserve in the ${publicType.name} profile`:locale==='ja'?`${publicType.name}で活かしたい判断上の強み`:`${publicType.name}에서 유지할 판단 강점`;
  const publicProfileTitle=locale==='en'?'Representative direction of this profile':locale==='ja'?'このタイプが示す代表的な方向':`유형 프로토타입이 보여주는 대표 방향`;
  const publicProfileDesc=locale==='en'?'Public bars illustrate representative tendencies. Your personal scores are calculated separately from all 42 answers.':locale==='ja'?'公開バーはタイプを説明するための代表傾向です。個人スコアは42問の実際の回答から別途算出されます。':`공개 막대는 유형을 설명하기 위한 대표 경향이며 개인 점수는 실제 42개 응답으로 별도 계산됩니다.`;
  const publicAssetView=locale==='en'?'How this profile tends to view assets':locale==='ja'?'資産を見る基本的な視点':'자산을 보는 관점';
  const publicReview=locale==='en'?'Review priorities':locale==='ja'?'検討の優先順位':'검토 우선순위';
  const publicWatch=locale==='en'?'Conditions to watch':locale==='ja'?'注意したい条件':'주의할 조건';
  const publicNoFake=locale==='en'?'No invented ranking':locale==='ja'?'仮の順位なし':'가짜 순위 없음';
  const publicFixed=locale==='en'?'Profile guide':locale==='ja'?'タイプ固定解説':'유형 고정 해설';
  const publicActualFit=locale==='en'?'Actual fit':locale==='ja'?'実際の適合性':'실제 적합성';
  const publicRank=locale==='en'?'Personal asset ranking':locale==='ja'?'個人資産順位':'개인 자산순위';
  const publicAfter42=locale==='en'?'Calculated after 42 questions':locale==='ja'?'42問完了後に算出':'42문항 완료 후 계산';
  const publicDecisionStart=locale==='en'?'Starting point of the decision':locale==='ja'?'判断の出発点':'판단의 출발점';
  const publicReviewStyle=locale==='en'?'Review style':locale==='ja'?'検討方式':'검토 방식';
  const publicBasicWay=locale==='en'?'Core decision style of this profile':locale==='ja'?'タイプの基本判断方式':'유형의 기본 판단 방식';
  const publicNextTitle=locale==='en'?['Your composite profile comes from','your actual three-stage result.']:locale==='ja'?['あなたの総合プロフィールは','実際の3段階結果から確認します。']:['내 종합 프로필은','실제 세 단계 결과로 확인합니다.'];
  const publicNextDesc=locale==='en'?'The actual FINAL connects your core investment tendency, asset fit, and decision behavior, then interprets where the three stages reinforce or contradict one another.':locale==='ja'?'実際のFINALでは、基本投資傾向・資産適合性・投資行動パターンをつなぎ、3つの結果が一致する点と衝突する点を個人回答に基づいて解釈します。':'실제 FINAL에서는 기본 투자성향, 자산 적합성, 투자 행동패턴을 하나로 연결하고 서로 일치하거나 충돌하는 지점을 개인 응답 기준으로 해석합니다.';
  const startText=locale==='en'?'Start the self-check':locale==='ja'?'自己診断を始める':'자가진단 시작하기';
  const catalogText=locale==='en'?'View all result types':locale==='ja'?'すべての結果タイプを見る':'전체 결과 유형 보기';
  const publicNote=locale==='en'?'The public composite result is an informational guide to the profile itself. It does not invent personal scores, asset rankings, or behavior results.':locale==='ja'?'公開総合結果はタイプ自体の情報解説であり、個人スコア・資産順位・行動結果を仮定して作成しません。':'공개 종합결과는 유형 자체의 정보 해설이며, 개인 점수나 자산·행동 결과를 임의로 만들지 않습니다.';

  return <main className="sc-page sc-result-page">
    <section className="sc-result-hero sc-result-hero-light sc-final-hero"><div className="sc-result-hero-copy"><small>{publicMode?`FINAL PUBLIC GUIDE · ${finalTypeId}`:ui.kicker}</small><h1>{publicMode?`${publicCharacter.name} · ${ui.finalProfile}`:finalProfile.title}</h1><p className="sc-result-lead">{publicMode?<>{publicCharacter.headline}<br/>{publicType.line}</>:<>{finalProfile.headline}<br/>{finalProfile.synthesis}</>}</p><div className="sc-result-status">{publicMode?<><span>{ui.basic} <strong>{publicType.name}</strong></span><span>{ui.assetFit} <strong>{publicCalc}</strong></span><span>{ui.behaviorPattern} <strong>{publicCalc}</strong></span></>:<><span>{ui.ready} <strong>{ready}</strong></span><span>{ui.asset} <strong>{finalProfile.asset}</strong></span><span>{ui.behavior} <strong>{finalProfile.behavior}</strong></span></>}</div></div><ResultVisual src={resultGraphic(finalTypeId,'final')} alt={`${publicCharacter.name} ${ui.altSuffix}`} tone="gold"/></section>

    <section className="sc-final-synthesis"><div className="sc-final-synthesis-head"><small>STEP 1 + STEP 2 + STEP 3</small><h2>{publicMode?publicMerged:ui.synthTitle}</h2><p>{publicMode?publicTypeGuide:finalProfile.integrated}</p></div><div className="sc-final-formula">{(publicMode?[{step:'STEP 1',label:ui.basic,value:publicType.name},{step:'STEP 2',label:ui.assetFit,value:publicCalc},{step:'STEP 3',label:ui.behaviorPattern,value:publicCalc}]:finalProfile.formula).map(x=><article key={x.step}><small>{x.step}</small><span>{x.label}</span><strong>{x.value}</strong>{x.sub&&<em>{x.sub}</em>}</article>)}<article className="final"><small>FINAL</small><span>{ui.finalProfile}</span><strong>{publicCharacter.name}</strong><em>{publicMode?ui.combined:(finalProfile.changed?ui.changed:ui.maintained)}</em></article></div></section>

    <section className="sc-final-integration-grid">
      <article><small>ASSET × PROFILE</small><h2>{publicMode?publicAssetView:ui.assetWhy(finalProfile.asset)}</h2><p>{publicMode?publicType.approach:finalProfile.assetLine}</p></article>
      <article><small>BEHAVIOR × PROFILE</small><h2>{publicMode?(locale==='en'?'A strength to preserve in the decision process':locale==='ja'?'判断過程で活かしたい強み':'판단 과정에서 유지할 강점'):ui.behaviorWhy(finalProfile.behavior)}</h2><p>{publicMode?publicType.strength:finalProfile.behaviorLine}</p></article>
      <article className="wide"><small>COMBINED CAUTION</small><h2>{ui.combinedCaution}</h2><p>{publicMode?publicType.caution:finalProfile.cautionLine}</p></article>
    </section>

    <section className="sc-findings"><small>{publicMode?'TYPE TALENT':'YOUR TALENT'}</small><h2>{publicMode?publicTalent:ui.talent}</h2><div>{praises.map(p=><span key={p.id}>{p.title}</span>)}</div>{praises.map(p=><p key={p.id}><strong>{p.title}</strong><br/>{p.text} {p.balance}</p>)}</section>

    <section className="sc-profile"><div><small>{publicMode?'TYPE PROFILE':'42 ANSWERS / PROFILE'}</small><h2>{publicMode?publicProfileTitle:ui.profileTitle}</h2><p>{publicMode?publicProfileDesc:ui.profileDesc}</p></div><div className="sc-bars">{profile.map(k=>{const v=axes[k]??0;return <div key={k}><span>{stage1AxisLabel(locale,k,AXIS_LABELS[k])}</span><div><i style={{width:`${((v+2)/4)*100}%`}}/></div><em>{stage1Level(locale,v)}</em></div>})}</div></section>

    <section className="sc-detail-list">{behaviors.map((b,i)=><article key={b.id} className={i===behaviors.length-1 && behaviors.length%2===1?'wide':''}><small>{publicMode?'TYPE SCENE':'REAL SCENE'} {String(i+1).padStart(2,'0')}</small><h2>{b.title}</h2><p>{b.text}</p></article>)}</section>

    {contradictions.length>0&&<section className="sc-caution"><small>SURPRISE</small><h2>{ui.surprise}</h2>{contradictions.map(x=><article key={x.id}><strong>{x.title}</strong><p>{x.text}<br/><b>{x.positive}</b> · {ui.nextCheck}: {x.check}</p></article>)}</section>}

    <section className="sc-asset-rank">{publicMode?<>
      <article><span className="sc-rank">01</span><small>ASSET VIEW</small><h2>{publicAssetView}</h2><p><strong>{publicType.approach}</strong></p><p>{publicType.features}</p><div className="sc-asset-meta"><span>{publicRank}</span><span>{publicAfter42}</span></div></article>
      <article><span className="sc-rank">02</span><small>REVIEW ORDER</small><h2>{publicReview}</h2><p><strong>{publicType.approach}</strong></p><p>{publicType.example}</p><div className="sc-asset-meta"><span>{publicFixed}</span><span>{publicNoFake}</span></div></article>
      <article><span className="sc-rank">03</span><small>WATCH OUT</small><h2>{publicWatch}</h2><p><strong>{publicType.caution}</strong></p><p>{publicType.example}</p><div className="sc-asset-meta"><span>{publicActualFit}</span><span>{publicCalc}</span></div></article>
    </>:topAssets.map((a,i)=>{const ac=getStage2Asset(locale,a.asset);const ch=ASSET_CHARACTERISTICS[a.asset]||{};return <article key={a.asset}><span className="sc-rank">0{i+1}</span><small>ASSET MATCH</small><h2>{ac.name}</h2><img className="sc-asset-thumb" src={assetGraphic(a.asset)} alt={`${ac.name} ${locale==='en'?'asset graphic':locale==='ja'?'資産グラフィック':'자산 그래픽'}`}/><p><strong>{ac.good||ui.assetFallback}</strong></p><p>{ac.goodText||ui.assetFallbackText}</p><div className="sc-asset-meta"><span>{ui.cashflow} {stage2Value(locale,ch.cashflow)}</span><span>{ui.management} {stage2Value(locale,ch.management)}</span><span>{ui.liquidity} {stage2Value(locale,ch.liquidity)}</span></div></article>})}</section>

    {rich.caution&&(()=>{const ac=getStage2Asset(locale,rich.caution.asset);return <section className="sc-caution"><small>ASSET CAUTION</small><h2>{ui.assetTired}</h2><article><strong>{ac.name}</strong><p><b>{ac.tired||ui.assetCautionFallback}</b><br/>{ac.tiredText||ui.assetCautionFallbackText}</p></article></section>})()}

    <section className="sc-process-cards">{publicMode?<>
      <article><span>01</span><small>DECISION VIEW</small><h2>{publicDecisionStart}</h2><p>{publicType.approach}</p></article>
      <article><span>02</span><small>REVIEW STYLE</small><h2>{publicReviewStyle}</h2><p>{publicType.approach}</p></article>
    </>:process.top.map((x,i)=>{const raw=PROCESSES[x.id];const pp=getStage3Process(locale,x.id,raw);return <article key={x.id}><span>0{i+1}</span><small>{pp.user}</small><h2>{pp.name}</h2><p>{pp.method}</p></article>})}</section>

    <section className="sc-detail-list"><article><small>PLAY STYLE</small><h2>{publicMode?publicBasicWay:c.name}</h2><p>{publicMode?publicType.approach:c.decision}</p></article><article><small>BEST WEAPON</small><h2>{praises[0]?.title||ui.bestWeapon}</h2><p>{praises[0]?.text||publicType.strength}</p></article>{risks.map((r,i)=><article key={r.id} className={i===risks.length-1&&risks.length%2===1?'wide':''}><small>RISK MOMENT {String(i+1).padStart(2,'0')}</small><h2>{ui.riskPrefix} {r.title}</h2><p>{r.text}<br/><b>{r.strength}</b><br/>{r.prescription}</p></article>)}</section>

    <section className="sc-next"><div><small>{publicMode?'TRY YOUR FINAL':'NEXT 3'}</small><h2>{publicMode?<>{publicNextTitle[0]}<br/>{publicNextTitle[1]}</>:<>{ui.nextTitle[0]}<br/>{ui.nextTitle[1]}</>}</h2><p>{publicMode?publicNextDesc:nextActions.map((x,i)=><span key={x}>{i+1}. {x}{i<nextActions.length-1?<br/>:null}</span>)}</p></div>{publicMode?<button className="sc-primary" onClick={onStart}>{startText} <span>→</span></button>:<a className="sc-primary" href={`${BASE_PATH}/${locale}`}>{ui.home} <span>→</span></a>}</section>

    <section className="sc-findings"><small>ONE LINE</small><h2>{ui.oneLine}</h2><p>{locale==='ko'?rich.finalLine:`${publicCharacter.headline} ${praises[0]?.title||ui.bestWeapon}${locale==='en'?' is a notable strength.':'は大きな強みです。'} ${locale==='en'?'Still, it is worth rechecking your usual criteria when that strength becomes excessive.':'ただし、その強みが行き過ぎる時ほど普段の基準をもう一度確認してください。'}`}</p></section>
    <section className="sc-final-note"><p>{publicMode?publicNote:ui.note}</p><a href={`${BASE_PATH}/${locale}`}>{ui.home}</a><button onClick={onRestart}>{publicMode?catalogText:ui.restart}</button></section>
  </main>;
}


const PREVIEW_TYPES = Object.keys(TYPE_REPORTS);
const PREVIEW_ASSETS = Object.keys(ASSET_CHARACTERISTICS);
const PREVIEW_COMICS = Object.keys(COMIC_REPORTS);

function makePreviewAxes() {
  return Object.fromEntries(Object.keys(AXIS_LABELS).map(k=>[k,0]));
}

function makePreviewAssets(primary) {
  const order=[primary,...PREVIEW_ASSETS.filter(x=>x!==primary)];
  const rows=order.map((asset,i)=>({
    asset,
    order:i,
    base:82-i*3,
    score:82-i*3,
    applied:[],
    reasonAxes:['현금흐름','관리부담','유동성'],
  }));
  return {top:rows.slice(0,3),caution:[],purposeLow:false};
}

function makePreviewProcess(comicId='C01') {
  const comic=COMIC_REPORTS[comicId] || COMIC_REPORTS.C01;
  const candidate=COMIC_CANDIDATES[comicId] || COMIC_CANDIDATES.C01;
  const pair=candidate?.pair || ['P01','P06'];
  return {
    comic,
    top:pair.slice(0,2).map((id,i)=>({id,base:82-i*5,score:82-i*5})),
    rows:[],
  };
}



function publicEditorialContent(kind,id) {
  if(kind==='basic' && TYPE_REPORTS[id]){
    const r=TYPE_REPORTS[id];
    return {
      eyebrow:`STEP 1 / ${id} / INVESTOR TYPE`,
      title:`${r.name} 투자성향을 어떻게 읽어야 할까요?`,
      lead:r.line,
      paragraphs:[
        `${r.features} 이 공개 해설은 유형명만 보여주는 페이지가 아니라, 건물을 볼 때 어떤 기준을 먼저 확인하는지와 그 기준이 실제 의사결정에서 어떻게 작동할 수 있는지를 설명합니다.`,
        `${r.view} 따라서 같은 매물을 보더라도 다른 투자성향과 비교해 무엇을 먼저 확인하고 무엇을 뒤로 미루는지가 달라질 수 있습니다.`,
        `${r.strength} 다만 ${r.caution} 실제 매물 검토에서는 ${r.next} 항목을 별도로 확인하는 편이 좋습니다.`,
      ],
      facts:[['판단 관점',r.view],['잘 맞는 검토 방식',r.approach],['먼저 확인할 것',r.next]],
    };
  }
  if(kind==='asset'){
    const asset=PUBLIC_ASSETS.find(x=>x.id===id)?.name;
    if(!asset) return null;
    const c=ASSET_CHARACTERISTICS[asset]||{};
    const i=ASSET_INSIGHTS[asset]||{};
    const g=ASSET_REVIEW_GUIDE[asset]||{};
    return {
      eyebrow:`STEP 2 / ${id} / ASSET FIT`,
      title:`${asset}은 어떤 투자조건과 잘 맞을까요?`,
      lead:g.focus || `${asset}의 일반적인 투자 특성과 검토 포인트를 정리합니다.`,
      paragraphs:[
        `${i.goodText || g.fit || ''} 자산 적합성은 자산 이름만으로 결정되는 것이 아니라 현금흐름, 공실, 관리부담, 유동성, 보유기간과 투자자의 실제 대응여력을 함께 놓고 봐야 합니다.`,
        `${g.caution || i.tiredText || ''} 특히 ${asset}은 현금흐름 ${c.cashflow || '-'}, 공실 ${c.vacancy || '-'}, 관리부담 ${c.management || '-'}, 유동성 ${c.liquidity || '-'}이라는 일반 특성을 갖는 것으로 분류해 비교합니다.`,
        `실제 매물에서는 ${(g.checks||[]).join(', ')} 같은 항목을 따로 확인해야 합니다. 같은 ${asset}이라도 입지·임차인·가격·대출조건에 따라 결과는 크게 달라질 수 있습니다.`,
      ],
      facts:[['현금흐름',c.cashflow||'-'],['공실',c.vacancy||'-'],['관리부담',c.management||'-'],['유동성',c.liquidity||'-']],
    };
  }
  if(kind==='behavior' && COMIC_REPORTS[id]){
    const r=COMIC_REPORTS[id];
    return {
      eyebrow:`STEP 3 / ${id} / DECISION BEHAVIOR`,
      title:`${r.name}은 실제 투자에서 어떻게 나타날까요?`,
      lead:r.character,
      paragraphs:[
        `${r.why} 이 단계는 성격을 좋고 나쁨으로 나누기보다, 관심이 생긴 순간부터 계약 직전까지 어떤 순서로 확인하고 어디서 판단이 흔들릴 수 있는지를 살펴봅니다.`,
        `${r.decision} 이 방식의 강점은 ${r.strength}라는 점입니다.`,
        `${r.caution} 이를 줄이기 위한 실행 루틴은 ${r.routine}처럼 판단 단계를 분리해두는 것입니다.`,
      ],
      facts:[['결정 방식',r.decision],['강점',r.strength],['보완 루틴',r.routine]],
    };
  }
  if(kind==='final' && TYPE_REPORTS[id]){
    const r=TYPE_REPORTS[id];
    return {
      eyebrow:`FINAL / ${id} / COMPOSITE PROFILE`,
      title:`${r.name}의 최종 투자 프로필은 어떻게 읽어야 할까요?`,
      lead:`${r.line} 공개 FINAL 페이지에서는 ${r.name} 성향 자체의 종합 해석 원칙을 설명하고, 특정 자산이나 행동유형을 임의로 연결하지 않습니다.`,
      paragraphs:[
        `${r.features} 최종 결과에서는 STEP 1의 기본 투자성향을 출발점으로 삼되, 실제 사용자의 STEP 2 자산 적합성과 STEP 3 행동분석 결과가 같은 방향을 가리키는지 또는 서로 충돌하는지를 함께 확인합니다.`,
        `${r.view} 이 성향의 강점은 ${r.strength} 반대로 ${r.caution}`,
        `실제 개인 종합결과에서는 42개 응답으로 계산된 자산 적합성과 행동패턴을 이 기본 프로필에 추가해 교차해석합니다. 공개 안내 페이지에서는 분석 신뢰성을 위해 임의의 자산·행동 조합을 예시 결과처럼 표시하지 않습니다.`,
      ],
      facts:[['기본 투자성향',r.name],['자산을 보는 관점',r.view],['잘 맞는 검토 방식',r.approach],['검토 우선순위',r.next]],
    };
  }
  return null;
}

function PublicEditorial({kind,id}){
  const content=publicEditorialContent(kind,id);
  if(!content) return null;
  return <section className="sc-public-editorial">
    <div className="sc-public-editorial-head"><small>{content.eyebrow}</small><h2>{content.title}</h2><p>{content.lead}</p></div>
    <div className="sc-public-editorial-copy">{content.paragraphs.map((x,i)=><p key={i}>{x}</p>)}</div>
    <div className="sc-public-editorial-facts">{content.facts.map(([k,v])=><article key={k}><small>{k}</small><strong>{v}</strong></article>)}</div>
  </section>;
}


function publicList(value, fallback=[]) {
  if(!value) return fallback;
  return String(value).split(/\s*[·→]|\s*\/\s*|\s*,\s*/).map(x=>x.trim()).filter(Boolean);
}

function publicDepthBlocks(kind,id){
  if(kind==='basic' && TYPE_REPORTS[id]){
    const r=TYPE_REPORTS[id];
    return [
      {eyebrow:'DECISION MAP',title:`${r.name}이 건물을 판단하는 순서`,copy:`${r.view} 이 유형의 공개 해설에서는 실제 개인 점수 대신, 기획 단계에서 정의한 ${r.name}의 판단 우선순위와 검토 습관을 충분한 텍스트로 설명합니다.`,items:[['첫 번째 기준',r.view],['검토할 때의 방식',r.approach],['결정 전 확인',r.next]]},
      {eyebrow:'STRENGTH IN PRACTICE',title:'강점이 실제 검토에서 도움이 되는 순간',copy:`${r.strength} 이런 강점은 후보를 고르고 비교할 때 장점이 될 수 있지만, 강점이 과해지면 다른 조건을 놓칠 수 있어 함께 점검해야 합니다.`,items:[['유지할 강점',r.strength],['대표적인 판단 장면',r.example],['균형을 위한 확인',r.caution]]},
      {eyebrow:'BLIND SPOT',title:'좋은 성향도 과해지면 확인할 것이 생깁니다.',copy:r.caution,items:[['주의 신호',r.caution],['대응 방식',r.approach],['실물 검토 전 체크',r.next]]},
      {eyebrow:'FIELD CHECK',title:'실제 건물을 보기 전에 이 항목부터 확인하세요.',copy:`${r.name}의 성향을 실제 매물 검토에 적용할 때는 유형명보다 구체적인 확인 항목이 더 중요합니다. 아래 항목은 공개 유형 해설에서 반복해서 확인할 실전 기준입니다.`,items:publicList(r.next).slice(0,4).map((x,i)=>[`CHECK ${String(i+1).padStart(2,'0')}`,x])},
    ];
  }
  if(kind==='asset'){
    const asset=PUBLIC_ASSETS.find(x=>x.id===id)?.name;
    if(!asset) return [];
    const c=ASSET_CHARACTERISTICS[asset]||{};
    const i=ASSET_INSIGHTS[asset]||{};
    const g=ASSET_REVIEW_GUIDE[asset]||{};
    return [
      {eyebrow:'ASSET CHARACTER',title:`${asset}의 투자 특성을 먼저 이해합니다.`,copy:`${g.focus||''} 공개 자산 결과는 단순 추천 순위가 아니라 해당 자산이 어떤 현금흐름·공실·관리·유동성 구조를 갖는지 이해하는 정보 페이지로 구성합니다.`,items:[['현금흐름',c.cashflow||'-'],['공실 민감도',c.vacancy||'-'],['관리 부담',c.management||'-'],['유동성',c.liquidity||'-'],['전문성',c.expertise||'-'],['장기보유 적합도',c.longhold||'-']]},
      {eyebrow:'FIT CONDITIONS',title:`${asset}이 잘 맞을 수 있는 조건`,copy:i.goodText||g.fit||'',items:[['적합 관점',i.good||g.fit||'-'],['운영 관점',g.fit||'-'],['보유 관점',`장기보유 성격 ${c.longhold||'-'}`]]},
      {eyebrow:'RISK CONDITIONS',title:`${asset}에서 부담이 커질 수 있는 조건`,copy:g.caution||i.tiredText||'',items:[['공실',`일반 특성 ${c.vacancy||'-'}`],['관리',`일반 특성 ${c.management||'-'}`],['유동성',`일반 특성 ${c.liquidity||'-'}`],['주의',i.tired||g.caution||'-']]},
      {eyebrow:'FIELD CHECK',title:`${asset} 실물 검토 체크포인트`,copy:`같은 ${asset}이라도 입지·가격·임차인·대출조건·관리상태에 따라 적합성은 달라집니다. 공개 페이지에서는 자산명만 보고 결론내리지 않도록 실물 확인 항목을 함께 제공합니다.`,items:(g.checks||[]).map((x,i)=>[`CHECK ${String(i+1).padStart(2,'0')}`,x])},
      {eyebrow:'READ THE RESULT',title:'자산 적합성 결과를 이렇게 활용하세요.',copy:`이 페이지의 목적은 ${asset}을 매수하라는 추천이 아니라, 어떤 조건에서 이 자산을 더 깊게 검토해야 하는지 알려주는 것입니다. 실제 개인 결과에서는 투자자의 현금흐름 선호, 위험 대응력, 레버리지, 관리 참여도 같은 응답값과 함께 계산합니다.`,items:[['잘 맞을 수 있는 이유',i.goodText||g.fit||'-'],['반드시 확인할 이유',g.caution||i.tiredText||'-'],['개인 결과와의 차이','개인 결과는 실제 응답값을 추가해 적합도를 계산합니다.']]},
    ];
  }
  if(kind==='behavior' && COMIC_REPORTS[id]){
    const r=COMIC_REPORTS[id];
    const routine=String(r.routine||'').split(/\s*→\s*/).map(x=>x.trim()).filter(Boolean);
    const answers=publicList(r.answers);
    return [
      {eyebrow:'WHY THIS PATTERN',title:`${r.name}이 나타나는 이유`,copy:r.why,items:answers.slice(0,5).map((x,i)=>[`SIGNAL ${String(i+1).padStart(2,'0')}`,x])},
      {eyebrow:'DECISION FLOW',title:'관심에서 결정까지 어떤 순서로 움직일까요?',copy:r.decision,items:[['판단 방식',r.decision],['잘 맞는 방식',r.fit],['주의할 순간',r.caution]]},
      {eyebrow:'STRENGTH',title:'이 행동패턴의 강점이 작동하는 순간',copy:r.strength,items:[['강점',r.strength],['실전 적용',r.fit],['균형점',r.caution]]},
      {eyebrow:'ROUTINE',title:'실수를 줄이기 위한 보완 루틴',copy:r.routine,items:routine.slice(0,6).map((x,i)=>[`STEP ${String(i+1).padStart(2,'0')}`,x])},
      {eyebrow:'INTERPRETATION',title:'행동유형은 성격표가 아니라 의사결정 습관입니다.',copy:r.evidence,items:[['해석 원칙',r.footer],['유지할 것',r.strength],['보완할 것',r.caution]]},
    ];
  }
  if(kind==='final' && TYPE_REPORTS[id]){
    const r=TYPE_REPORTS[id];
    return [
      {eyebrow:'COMPOSITE PROFILE',title:`${r.name} 종합 프로필의 핵심`,copy:`${r.features} 공개 FINAL은 특정 자산이나 행동유형을 임의로 조합하지 않고, ${r.name}이라는 기본 성향이 종합결과에서 어떤 기준으로 해석되는지 충분한 정보로 설명합니다.`,items:[['기본 성향',r.line],['자산을 보는 관점',r.view],['검토 방식',r.approach]]},
      {eyebrow:'DECISION EDGE',title:'종합결과에서 유지할 판단 강점',copy:r.strength,items:[['강점',r.strength],['대표적인 상황',r.example],['활용 방식',r.approach]]},
      {eyebrow:'COMBINED CAUTION',title:'다른 결과와 결합할 때 특히 확인할 주의점',copy:r.caution,items:[['주의점',r.caution],['먼저 확인할 항목',r.next],['균형을 잡는 방식',r.approach]]},
      {eyebrow:'HOW FINAL WORKS',title:'실제 개인 FINAL은 세 단계의 실제 응답을 교차해석합니다.',copy:'공개 FINAL은 유형 자체의 종합 해설을 제공합니다. 실제 개인 결과에서는 STEP 1 기본 투자성향, STEP 2 자산 적합성, STEP 3 투자 행동패턴을 42개 응답으로 각각 계산한 뒤 서로 같은 방향을 가리키는지, 또는 충돌하는 지점을 함께 확인합니다.',items:[['STEP 1','기본 투자성향과 판단 기준'],['STEP 2','자산 특성과 현실적인 적합 조건'],['STEP 3','실제 의사결정과 행동 습관'],['FINAL','세 결과의 일치·충돌을 종합 해석']]},
      {eyebrow:'FIELD CHECK',title:'종합 프로필을 실제 매물 검토에 적용하는 방법',copy:`${r.name}이라는 이름보다 실제 매물을 볼 때 무엇부터 확인하는지가 중요합니다. 공개 해설에서는 ${r.next}를 우선 체크하도록 안내합니다.`,items:publicList(r.next).slice(0,4).map((x,i)=>[`CHECK ${String(i+1).padStart(2,'0')}`,x])},
    ];
  }
  return [];
}


function PublicBasicResult({locale,id,onStart,onCatalog}){
  const axes=publicAxesForType(id);
  return <ResultShell stage={1} locale={locale}><Stage1Result axes={axes} typeId={id} onNext={onStart} onRestart={onCatalog} locale={locale} publicMode={true}/></ResultShell>;
}

function PublicAssetResult({locale,id,onStart,onCatalog}){
  const asset=PUBLIC_ASSETS.find(x=>x.id===id)?.name;
  const assets=publicAssetResult(asset);
  const axes=makePreviewAxes();
  return <ResultShell stage={2} locale={locale}><Stage2Result typeId={'T02'} axes={axes} assets={assets} onNext={onStart} locale={locale} publicHeading={<>{getStage2Asset(locale,asset).name}<br/>{getStage2Ui(locale).publicHeading}</>} publicMode={true}/></ResultShell>;
}

function PublicBehaviorResult({locale,id,onStart,onCatalog}){
  const result=makePreviewProcess(id);
  return <ResultShell stage={3} finalOpen={true} locale={locale}><Stage3Result result={result} onSummary={onStart} onRestart={onCatalog} locale={locale} publicMode={true}/></ResultShell>;
}

function PublicFinalResult({locale,id,onStart,onCatalog}){
  const axes=publicAxesForType(id);
  const assets={top:[],caution:[],purposeLow:false};
  const process=makePreviewProcess('C01');
  const rich=buildRichResult(id,axes,assets,process);
  return <ResultShell stage={3} finalOpen={true} finalActive={true} locale={locale}><SummaryResult stage1TypeId={id} finalTypeId={id} axes={axes} assets={assets} process={process} rich={rich} onRestart={onCatalog} onStart={onStart} locale={locale} publicMode={true}/></ResultShell>;
}

export function PublicResultPage({ locale='ko', kind, id }) {
  const goStart=()=>{window.location.href=`${BASE_PATH}/${locale}/self-check`;};
  const goCatalog=()=>{window.location.href=`${BASE_PATH}/${locale}/self-check/results`;};
  if(kind==='basic' && TYPE_REPORTS[id]) return <PublicBasicResult locale={locale} id={id} onStart={goStart} onCatalog={goCatalog}/>;
  if(kind==='asset' && PUBLIC_ASSETS.some(x=>x.id===id)) return <PublicAssetResult locale={locale} id={id} onStart={goStart} onCatalog={goCatalog}/>;
  if(kind==='behavior' && COMIC_REPORTS[id]) return <PublicBehaviorResult locale={locale} id={id} onStart={goStart} onCatalog={goCatalog}/>;
  if(kind==='final' && TYPE_REPORTS[id]) return <PublicFinalResult locale={locale} id={id} onStart={goStart} onCatalog={goCatalog}/>;
  const invalidTitle=locale==='en'?'Result type not found.':locale==='ja'?'結果タイプが見つかりません。':'결과 유형을 찾을 수 없습니다.';
  const invalidButton=locale==='en'?'View all result types':locale==='ja'?'すべての結果タイプを見る':'전체 결과 유형 보기';
  return <main className="sc-public-invalid"><h1>{invalidTitle}</h1><button onClick={goCatalog}>{invalidButton}</button></main>;
}

export function DevPreview({ locale='ko' }) {
  const [detail,setDetail]=useState(null);
  const [comicId,setComicId]=useState('C01');
  const axes=useMemo(()=>makePreviewAxes(),[]);
  const closeDetail=()=>{setDetail(null);try{window.scrollTo({top:0,behavior:'smooth'})}catch{}};

  if(detail){
    const target=detail.kind==='step1' ? `result/basic/${detail.id}` : detail.kind==='step2' ? `result/asset/${detail.id}` : detail.kind==='step3' ? `result/behavior/${detail.id}` : `result/final/${detail.id}`;
    if(typeof window!=='undefined') window.location.href=`${BASE_PATH}/${locale}/self-check/${target}`;
    return null;
  }

  return <>
    <BrandHeader/>
    <main className="sc-dev-preview">
      <header className="sc-dev-preview-head">
        <small>FIX BUILDING / SELF CHECK / DEV PREVIEW</small>
        <h1>결과 그래픽 검수 +<br/>공개 결과 페이지 확인</h1>
        <p>썸네일은 그래픽 슬롯을 검수하고, 카드를 누르면 애드센스·검색용 실제 공개 결과 URL로 이동합니다. 공개 결과는 STEP1 14개, STEP2 10개, STEP3 16개, FINAL 14개로 총 54개입니다.</p>
        <div className="sc-dev-counts">
          <span>STEP1 <b>14</b></span>
          <span>STEP2 <b>10</b></span>
          <span>STEP3 <b>16</b></span>
          <span>FINAL <b>14</b></span>
          <strong>TOTAL 54</strong>
        </div>
      </header>

      <section className="sc-dev-section">
        <div className="sc-dev-section-title"><div><small>STEP 1</small><h2>기본 투자성향 · 14유형</h2></div><p>유형별 결과 HERO를 확인합니다.</p></div>
        <div className="sc-dev-grid">
          {PREVIEW_TYPES.map((id,i)=>{
            const r=TYPE_REPORTS[id];
            return <button className="sc-dev-card" key={id} onClick={()=>setDetail({kind:'step1',id})}>
              <span className="sc-dev-num">{String(i+1).padStart(2,'0')}</span>
              <img src={resultGraphic(id,'step1')} alt={`${r.name} 그래픽`}/>
              <small>{id}</small><strong>{r.name}</strong><em>공개 결과 페이지 보기 →</em>
            </button>
          })}
        </div>
      </section>

      <section className="sc-dev-section">
        <div className="sc-dev-section-title"><div><small>STEP 2</small><h2>자산 적합성 · 10자산</h2></div><p>추천 1순위 자산에 표시되는 대표 그래픽입니다.</p></div>
        <div className="sc-dev-grid">
          {PREVIEW_ASSETS.map((asset,i)=>{const assetId=PUBLIC_ASSETS.find(x=>x.name===asset)?.id;return <button className="sc-dev-card" key={asset} onClick={()=>setDetail({kind:'step2',id:assetId})}>
            <span className="sc-dev-num">{String(i+1).padStart(2,'0')}</span>
            <img src={assetGraphic(asset)} alt={`${asset} 그래픽`}/>
            <small>{assetId}</small><strong>{asset}</strong><em>공개 결과 페이지 보기 →</em>
          </button>})}
        </div>
      </section>

      <section className="sc-dev-section">
        <div className="sc-dev-section-title"><div><small>STEP 3</small><h2>행동분석 · 공통 그래픽 1개</h2></div><p>행동유형 16개는 같은 흐름 그래픽을 사용하고 해석 문구가 바뀝니다.</p></div>
        <div className="sc-dev-step3">
          <img src={behaviorGraphic()} alt="행동분석 공통 흐름 그래픽"/>
          <div>
            <label htmlFor="sc-comic-preview">행동유형 선택</label>
            <select id="sc-comic-preview" value={comicId} onChange={e=>setComicId(e.target.value)}>
              {PREVIEW_COMICS.map(id=><option key={id} value={id}>{id} · {COMIC_REPORTS[id].name}</option>)}
            </select>
            <p>{COMIC_REPORTS[comicId]?.character}</p>
            <button className="sc-primary" onClick={()=>setDetail({kind:'step3',id:comicId})}>공개 STEP3 결과 페이지 보기 <span>→</span></button>
          </div>
        </div>
      </section>

      <section className="sc-dev-section">
        <div className="sc-dev-section-title"><div><small>FINAL</small><h2>최종 투자 프로필 · 14유형</h2></div><p>최종 리포트 상단 HERO 그래픽을 확인합니다.</p></div>
        <div className="sc-dev-grid">
          {PREVIEW_TYPES.map((id,i)=>{
            const r=TYPE_REPORTS[id];
            return <button className="sc-dev-card" key={id} onClick={()=>setDetail({kind:'final',id})}>
              <span className="sc-dev-num">{String(i+1).padStart(2,'0')}</span>
              <img src={resultGraphic(id,'final')} alt={`${r.name} 최종 그래픽`}/>
              <small>{id}</small><strong>{r.name}</strong><em>공개 FINAL 페이지 보기 →</em>
            </button>
          })}
        </div>
      </section>
    </main>
    
  </>;
}

export default function SelfCheckClient({ locale='ko', initialView=[] }) {
  const copy=getSelfCheckCopy(locale);
  const [screen,setScreen]=useState('landing');
  const [page,setPage]=useState(0);
  const [answers,setAnswers]=useState({});
  const [loaded,setLoaded]=useState(false);
  const routeFor=(s)=>({landing:'',stage1:'questions/basic',result1:'result/basic',stage2:'questions/asset',result2:'result/asset',result3:'result/behavior',summary:'result/final'}[s]||'');
  const navigate=(s,p=0)=>{setPage(p);setScreen(s);};
  useEffect(()=>{
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      const saved=raw ? JSON.parse(raw) : null;
      const isLandingEntry=!Array.isArray(initialView) || initialView.length===0;

      if(isLandingEntry){
        // Entering /self-check from the site must always show the landing page.
        // Saved answers may exist, but a completed screen must never hijack this entry.
        setScreen('landing');
        setPage(0);
        if(saved?.answers) setAnswers(saved.answers);
      }else if(saved){
        // Preserve the existing restore behavior for direct workflow URL refreshes.
        setScreen(saved.screen||'landing');
        setPage(saved.page||0);
        setAnswers(saved.answers||{});
      }
    }catch{}
    setLoaded(true);
  },[initialView]);
  useEffect(()=>{if(!loaded)return;localStorage.setItem(STORAGE_KEY,JSON.stringify({screen,page,answers}));try{const suffix=routeFor(screen);const path=`${BASE_PATH}/${locale}/self-check${suffix?'/'+suffix:''}`;if(window.location.pathname!==path) window.history.replaceState({screen,page},'',path);}catch{}},[loaded,screen,page,answers,locale]);
  const stage1Axes=useMemo(()=>axisScores(answers,STAGE1_IDS),[answers]);
  const finalAxes=useMemo(()=>axisScores(answers,[...STAGE1_IDS,...STAGE2_IDS]),[answers]);
  const stage1TypeId=useMemo(()=>pickType(stage1Axes),[stage1Axes]);
  const finalTypeId=useMemo(()=>pickType(finalAxes),[finalAxes]);
  const assets=useMemo(()=>assetResult(finalAxes),[finalAxes]);
  const process=useMemo(()=>processResult(finalAxes),[finalAxes]);
  const rich=useMemo(()=>buildRichResult(finalTypeId,finalAxes,assets,process),[finalTypeId,finalAxes,assets,process]);
  const reset=()=>{setAnswers({});setPage(0);setScreen('landing');try{localStorage.removeItem(STORAGE_KEY)}catch{}};
  const startNew=()=>{setAnswers({});setPage(0);setScreen('stage1');try{localStorage.removeItem(STORAGE_KEY)}catch{}};
  if(!loaded) return null;
  if(screen==='landing') return <Landing locale={locale} onStart={startNew}/>;
  if(screen==='stage1') return <FlowQuestions title={copy.stages[1].title} stage={1} locale={locale} onRestart={reset} screens={STAGE1_SCREENS} page={page} answers={answers} onAnswer={(id,i)=>setAnswers(a=>({...a,[id]:i}))} onPrev={page>0?()=>setPage(p=>p-1):()=>navigate('landing',0)} onNext={()=>{if(page<STAGE1_SCREENS.length-1)setPage(p=>p+1);else navigate('result1',0)}} nextLabel={page===STAGE1_SCREENS.length-1?copy.common.resultView:copy.common.next}/>;
  if(screen==='result1') return <ResultShell stage={1} locale={locale}><Stage1Result axes={stage1Axes} typeId={stage1TypeId} onNext={()=>navigate('stage2',0)} onRestart={reset} locale={locale}/></ResultShell>;
  if(screen==='stage2') return <FlowQuestions title={copy.stages[2].title} stage={2} locale={locale} onRestart={reset} screens={STAGE2_SCREENS} page={page} answers={answers} onAnswer={(id,i)=>setAnswers(a=>({...a,[id]:i}))} onPrev={page>0?()=>setPage(p=>p-1):()=>navigate('result1',0)} onNext={()=>{if(page<STAGE2_SCREENS.length-1)setPage(p=>p+1);else navigate('result2',0)}} nextLabel={page===STAGE2_SCREENS.length-1?copy.common.assetResultView:copy.common.next}/>;
  if(screen==='result2') return <ResultShell stage={2} locale={locale}><Stage2Result typeId={stage1TypeId} axes={finalAxes} assets={assets} onNext={()=>navigate('result3',0)} locale={locale}/></ResultShell>;
  if(screen==='result3') return <ResultShell stage={3} finalOpen={true} locale={locale}><Stage3Result result={process} onSummary={()=>navigate('summary',0)} onRestart={reset} locale={locale}/></ResultShell>;
  return <ResultShell stage={3} finalOpen={true} finalActive={true} locale={locale}><SummaryResult stage1TypeId={stage1TypeId} finalTypeId={finalTypeId} axes={finalAxes} assets={assets} process={process} rich={rich} onRestart={reset} locale={locale}/></ResultShell>;
}
