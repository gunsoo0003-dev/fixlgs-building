'use client';

import {useEffect} from 'react';
import {CONTRACT_COPY} from './contract-copy';
import {CONTRACT_KO_DEEP,CONTRACT_KO_SOURCES} from './contract-ko-deep';
import {CONTRACT_KO_COMPLETE} from './contract-ko-complete';
import {CONTRACT_PARTIES_V004} from './contract-parties-v004';
import {CONTRACT_0206_V013} from './contract-0206-v013';

const BASE_PATH='/building';

const KO_LABELS={
  'CONTRACT FLOW':'계약 흐름','NORMAL BASELINE':'정상 기준','VARIABLES':'실제 거래 변수','MISSED POINT':'놓치기 쉬운 지점',
  'HOW TO CHECK':'실제 확인 방법','WHEN THINGS DO NOT MATCH':'설명과 자료가 다를 때','WHEN WORDS DO NOT MATCH':'말과 문서가 다를 때',
  'WHEN MONEY DOES NOT MATCH':'금액과 지급이 맞지 않을 때','WHEN THE BASELINE CHANGES':'기준 상태가 달라졌을 때',
  'WHEN CLOSING DOES NOT ALIGN':'클로징 조건이 맞지 않을 때','DECISION':'행동 판단','CORE PRINCIPLE':'핵심 원칙','FINAL SUMMARY':'최종 요약',
  'REAL-WORLD CASES':'실전 사례','ACTION':'행동','CHECK':'확인','IF DIFFERENT':'다르면','WHAT TO CHECK':'무엇을 확인','WHY IT MATTERS':'왜 중요한가',
  'IF YOU FIND IT':'발견했다면','WHY THIS MATTERS':'왜 중요한가','PREVENT':'예방','WHAT GOES WRONG':'어떤 문제가 생기나','IF DISCOVERED':'발견 후 대응',
  'LOOK HERE':'어디서 확인','COMPARE THIS':'무엇과 비교','COMPARE':'무엇과 비교','IF MATCHED':'정상이면','NORMAL':'정상 기준','IF NOT':'다르면',
  'SAID':'설명','SAID / EXPECTED':'설명 / 예상','FOUND':'실제 확인','ALL MATCH':'모두 일치','IF ONE IS DIFFERENT':'하나라도 다르면','IF NOT EXPLAINED':'설명되지 않으면',
  'WHO OWNS':'소유자','WHO APPEARS':'현장 상대','WHO SIGNS':'계약 권한','WHO GETS PAID':'대금 수령 권한',
  'EXPERIENCED BUYERS MISS THIS':'경험자도 놓치는 지점','FIELD GUIDE':'실전 가이드','PRACTICAL QUESTIONS':'실전 질문','REFERENCE NOTE':'참고 메모',
  'COMPLETE PRACTICE GUIDE':'실전 완성 가이드','REAL-WORLD SCENARIOS':'실전 상황','BEFORE YOU MOVE ON':'다음 단계 전 확인','CLAUSE PATTERNS':'특약 설계 패턴',
  '10 RED FLAGS':'위험 신호 10가지','15 COMMON MISTAKES':'흔한 실수 15가지','ESSENTIAL 18':'필수 체크 18','DETAILED CHECKLIST':'상세 체크리스트',
  'OFFICIAL REFERENCES':'공식 참고자료','NEXT':'다음 콘텐츠','CONTRACT STANDARD':'계약 기준','RISK GUIDE':'위험 가이드',
  'CONTRACT SCOPE':'계약 범위','MONEY FLOW':'자금 흐름','CONTRACT ENGINEERING':'계약조건 설계','TIME CONTROL':'변화 관리','CLOSING CONTROL':'클로징 관리',
  'WHAT':'계약 대상','SCOPE':'범위','MONEY':'자금','TERMS':'계약 조건','RECHECK':'재확인','CLOSE':'거래 마무리','VERIFY':'확인','RIGHTS':'권리',
  'DOCUMENTS':'서류','HANDOVER':'인도','OPERATION':'운영 인수','LEGAL CLOSE':'법적 종결','OPERATIONAL HANDOVER':'운영 인수인계','REGISTRATION':'등기',
  'BEFORE PAYMENT':'지급 전','CURRENT':'현재 상태','BASELINE':'기준 상태','INFO':'정보','CONDITION':'조건 이행','STOP':'중단','PROMISES':'약속 이행','TENANCY':'임대차',
  'SYNC':'동시 정렬','STATE':'완료 상태','WHEN':'기한','WHO':'책임 주체','TERM':'계약 조건','PAY':'지급','FACTS':'확인 사실','SIGNING':'계약 시점','PRE-CLOSING':'잔금 전',
  'CURRENT CONDITION':'현재 상태','PROPERTY':'계약 대상','OWNER':'소유자','AGENT':'대리인','AUTHORITY':'계약 권한','ACCOUNT':'지급계좌','CONTRACT':'계약',
  '01 · PARTIES & AUTHORITY':'01 · 계약 상대 / 권한','02 · WHAT / SCOPE':'02 · 계약 대상 / 범위','03 · MONEY':'03 · 자금','04 · TERMS':'04 · 계약 조건','05 · RECHECK':'05 · 재확인','06 · CLOSE':'06 · 거래 마무리',
  'WHO CAN SIGN':'계약할 권한','WHO CAN RECEIVE':'대금을 받을 권한','EXPERIENCED BUYERS MISS THIS':'경험자도 놓치는 지점','MONEY FLOW':'자금 흐름',
  'SAID / EXPECTED':'설명 / 예상','BEFORE / DURING / AFTER':'지급 전 / 진행 중 / 지급 후'
};
function koLabel(text){
  if(typeof text!=='string') return text;
  if(KO_LABELS[text]) return `${text} · ${KO_LABELS[text]}`;
  const deep=text.match(/^DEEP DIVE (\d+)$/); if(deep) return `${text} · 심화 분석 ${deep[1]}`;
  const caseNo=text.match(/^CASE ([A-Z0-9]+)$/); if(caseNo) return text;
  return text;
}
function koStackLabel(text){
  if(text==='CONDITION' || text==='OPERATION'){
    return <><span>{text}</span><span>{KO_LABELS[text]}</span></>;
  }
  return koLabel(text);
}

const CONTRACT_PARTIES_IMAGES={
  hero:`${BASE_PATH}/images/contract/building-contract-01-hero.webp`,
  normalVariables:`${BASE_PATH}/images/contract/building-contract-01-normal-variables.webp`,
  howToCheck:`${BASE_PATH}/images/contract/building-contract-01-howto-check.webp`
};

function MiniIcon({type}){
  const common={viewBox:'0 0 64 64','aria-hidden':'true'};
  if(type==='person') return <svg {...common}><circle cx="25" cy="19" r="8"/><path d="M10 48c2-12 9-18 15-18s13 6 15 18"/><path d="M42 18h12v17H42zM45 22h6M45 27h6"/></svg>;
  if(type==='building') return <svg {...common}><path d="M10 53V18h27v35M37 29h15v24M17 25h5M27 25h5M17 34h5M27 34h5M17 43h5M27 43h5"/><circle cx="45" cy="18" r="7"/><path d="M50 23l7 7"/></svg>;
  if(type==='payment') return <svg {...common}><rect x="7" y="14" width="16" height="13" rx="2"/><rect x="41" y="37" width="16" height="13" rx="2"/><path d="M23 20h16M35 16l5 4-5 4M41 44H25M29 40l-5 4 5 4"/></svg>;
  if(type==='document') return <svg {...common}><path d="M15 8h25l10 10v38H15zM40 8v12h10M23 29h19M23 37h19M23 45h12"/><rect x="39" y="40" width="16" height="13" rx="2"/><path d="M43 40v-3a4 4 0 018 0v3"/></svg>;
  if(type==='recheck') return <svg {...common}><path d="M47 19a20 20 0 10 4 25M47 19V8M47 19H36"/><path d="M21 32l7 7 14-16"/></svg>;
  if(type==='transfer') return <svg {...common}><path d="M8 50V25l14-10 14 10v25M14 50h16M39 20h17v28H39zM44 28h7M44 35h7"/><path d="M31 42h14M41 38l5 4-5 4"/></svg>;
  if(type==='check') return <svg {...common}><rect x="13" y="9" width="38" height="46" rx="2"/><path d="M21 21l4 4 7-8M35 21h9M21 34l4 4 7-8M35 34h9M21 47l4 4 7-8M35 47h9"/></svg>;
  if(type==='alert') return <svg {...common}><path d="M32 8l25 44H7z"/><path d="M32 23v14M32 44v1"/><circle cx="48" cy="16" r="6"/><path d="M48 12v5"/></svg>;
  return <svg {...common}><path d="M9 14h46M14 23h36M18 32h28M22 41h20M26 50h12"/><path d="M12 10l40 44"/></svg>;
}

function ContractLock({locale}){
  const labels=['WHO','WHAT','MONEY','TERMS','VERIFY','CLOSE'];
  return <div className="ct-lock" aria-label="Contract verification layers">
    <div className="ct-building"><span>FIX</span><b>BUILDING</b></div>
    <div className="ct-layers">{labels.map((label,i)=><a href={`${BASE_PATH}/${locale}/contract/${['parties','property','payment','terms','recheck','closing'][i]}`} className="ct-layer" style={{'--i':i}} key={label}><span>{String(i+1).padStart(2,'0')}</span><strong>{locale==='ko'?koLabel(label):label}</strong><i>{locale==='ko'?'LOCK → OPEN · 잠금 해제':'LOCK → OPEN'}</i></a>)}</div>
  </div>;
}

function CharacterScene({type}){
  return <div className={`ct-character ct-character-${type}`} aria-hidden="true">
    <div className="ct-person"><i/><span/><b/></div>
    <div className="ct-scene-board">
      <div className="ct-scene-line l1"/><div className="ct-scene-line l2"/><div className="ct-scene-line l3"/>
      <div className="ct-scene-focus"/>
    </div>
    <div className="ct-scene-mark">✓</div>
  </div>;
}

function SummaryGraphic({page}){
  if(page.slug==='payment') return <div className="ct-summary-flow"><span>VERIFY</span><i>→</i><span>CONDITION</span><i>→</i><strong>PAY</strong></div>;
  if(page.slug==='terms') return <div className="ct-clause-builder">{['WHO','WHAT','WHEN','VERIFY','IF NOT'].map((x,i)=><div key={x}><small>0{i+1}</small><b>{x}</b></div>)}<i>→</i><strong>TERM</strong></div>;
  if(page.slug==='recheck') return <div className="ct-before-after"><div><small>SIGNING</small><b>FACTS</b><span>RIGHTS · TENANCY · CONDITION</span></div><i>→ TIME →</i><div><small>PRE-CLOSING</small><b>RECHECK</b><span>COMPARE WHAT CHANGED</span></div></div>;
  if(page.slug==='closing') return <div className="ct-closing-sync">{['MONEY','RIGHTS','DOCS','HANDOVER'].map(x=><span key={x}>{x}</span>)}<strong>CLOSE</strong></div>;
  if(page.slug==='red-flags') return <div className="ct-radar">{['IDENTITY','DOCUMENT','MONEY','PRESSURE','STORY','AVOIDANCE'].map((x,i)=><span key={x} style={{'--r':`${i*60}deg`}}>{x}</span>)}<b>DEAL</b></div>;
  if(page.slug==='mistakes') return <div className="ct-failure"><div><span>VERIFY</span><i>→</i><span>WRITE</span><i>→</i><span>RECHECK</span><i>→</i><strong>PAY</strong></div><div className="is-bad"><span>ASSUME</span><i>→</i><span>VERBAL</span><i>→</i><span>SKIP</span><i>→</i><strong>PAY</strong></div></div>;
  if(page.slug==='checklist') return <div className="ct-check-compare"><div><small>ESSENTIAL</small><strong>FAST</strong><span>CORE CHECKS</span></div><div><small>DETAILED</small><strong>DEEP</strong><span>01 → 06</span></div></div>;
  if(page.slug==='property') return <div className="ct-layers-mini">{['DOCUMENTS','PROPERTY','CURRENT CONDITION'].map(x=><span key={x}>{x}</span>)}</div>;
  return <div className="ct-authority-map"><span>OWNER</span><span>AGENT</span><strong>AUTHORITY</strong><span>ACCOUNT</span><span>CONTRACT</span></div>;
}

function ChecklistPreview({page,copy}){
  if(!page.checklist) return null;
  return <div className="ct-checklists">
    <article><small>ESSENTIAL</small><h3>{copy.checklistLabels.essential}</h3><p>{copy.checklistLabels.essentialLead}</p><ul>{page.checklist.essential.map(x=><li key={x}>□ {x}</li>)}</ul></article>
    <article><small>DETAILED</small><h3>{copy.checklistLabels.detailed}</h3><p>{copy.checklistLabels.detailedLead}</p><ul>{page.checklist.detailed.map(x=><li key={x}>□ {x}</li>)}</ul></article>
  </div>;
}

function OtherLinks({copy,current,locale}){
  return <section className="ct-other"><div className="ct-shell"><small>{locale==='ko'?koLabel('NEXT'):'NEXT'}</small><h2>{copy.other}</h2><div className="ct-other-grid">{copy.pages.filter(p=>p.slug!==current).map(p=><a key={p.slug} href={`${BASE_PATH}/${locale}/contract/${p.slug}`}><span>{p.num}</span><strong>{p.title}</strong><b>→</b></a>)}</div></div></section>;
}

function DeepDive({page,locale}){
  if(locale!=='ko') return null;
  const deep=CONTRACT_KO_DEEP[page.slug];
  if(!deep) return null;
  return <section className="ct-deep" data-ct-reveal>
    <header className="ct-deep-head"><small>{koLabel('FIELD GUIDE')}</small><h2>실전에서 한 단계 더 확인하기</h2><p>{deep.intro}</p></header>
    <div className="ct-deep-cards">{deep.cards.map((card,i)=><article key={card.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{card.title}</h3><p>{card.body}</p><ul>{card.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
    <div className="ct-field-questions"><div><small>{koLabel('PRACTICAL QUESTIONS')}</small><h3>{deep.fieldTitle}</h3></div><ol>{deep.fieldQuestions.map((q,i)=><li key={q}><span>{String(i+1).padStart(2,'0')}</span><p>{q}</p></li>)}</ol></div>
    <aside className="ct-source-note"><small>{koLabel('REFERENCE NOTE')}</small><p>{deep.sourceNote}</p></aside>
  </section>;
}


function CompleteGuide({page,locale}){
  if(locale!=='ko') return null;
  const data=CONTRACT_KO_COMPLETE[page.slug];
  if(!data) return null;
  return <section className="ct-complete" data-ct-reveal>
    <header className="ct-complete-head"><small>{koLabel('COMPLETE PRACTICE GUIDE')}</small><h2>{data.title}</h2><p>{data.overview}</p></header>
    <div className="ct-complete-checks">{data.checks.map((item,i)=><article key={item[0]}>
      <div className="ct-complete-no">{String(i+1).padStart(2,'0')}</div><div><h3>{item[0]}</h3><p>{item[1]}</p><ul>{item[2].map(x=><li key={x}>{x}</li>)}</ul></div>
    </article>)}</div>
    <section className="ct-scenarios"><header><small>{koLabel('REAL-WORLD SCENARIOS')}</small><h3>상황으로 다시 확인하기</h3></header><div>{data.scenarios.map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h4>{x[0]}</h4><p>{x[1]}</p><dl><dt>주의할 점</dt><dd>{x[2]}</dd><dt>확인 방향</dt><dd>{x[3]}</dd></dl></article>)}</div></section>
    <section className="ct-final-questions"><div><small>{koLabel('BEFORE YOU MOVE ON')}</small><h3>다음 단계로 넘어가기 전 질문</h3></div><ol>{data.questions.map((q,i)=><li key={q}><span>{String(i+1).padStart(2,'0')}</span><p>{q}</p></li>)}</ol></section>
    {data.patterns&&<section className="ct-patterns"><header><small>{koLabel('CLAUSE PATTERNS')}</small><h3>특약은 이런 구조로 생각합니다</h3><p>아래는 그대로 복사하는 법률 문구가 아니라 조건을 설계하는 사고틀입니다.</p></header><div>{data.patterns.map(x=><article key={x[0]}><h4>{x[0]}</h4><p>{x[1]}</p><strong>{x[2]}</strong></article>)}</div></section>}
    {data.signals&&<section className="ct-signal-list"><header><small>{koLabel('10 RED FLAGS')}</small><h3>한 번 더 확인할 거래 신호</h3></header><ol>{data.signals.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></li>)}</ol></section>}
    {data.mistakes&&<section className="ct-signal-list"><header><small>{koLabel('15 COMMON MISTAKES')}</small><h3>건물 계약에서 반복되는 작은 생략</h3></header><ol>{data.mistakes.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></li>)}</ol></section>}
    {data.essential&&<section className="ct-full-checklist"><header><small>{koLabel('ESSENTIAL 18')}</small><h3>필수 체크리스트 전체 항목</h3><p>필수 항목을 빠르게 훑고, 상세 항목은 단계별로 다시 확인할 수 있도록 구성했습니다.</p></header><ol>{data.essential.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></li>)}</ol></section>}
    {data.detailed&&<section className="ct-detailed-checklist"><header><small>{koLabel('DETAILED CHECKLIST')}</small><h3>상세 체크리스트 전체 구조</h3><p>실제 거래에서는 확인 완료, 추가 확인, 문제 발견을 구분해 사용하는 것을 전제로 설계했습니다.</p></header><div>{Object.entries(data.detailed).map(([group,items])=><article key={group}><h4>{group}</h4><ol>{items.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></li>)}</ol></article>)}</div></section>}
  </section>;
}

function SourceLinks({locale}){
  if(locale!=='ko') return null;
  return <section className="ct-sources" data-ct-reveal><small>{koLabel('OFFICIAL REFERENCES')}</small><h2>내용 확인에 참고한 공식 자료</h2><p>법령과 행정 안내는 변경될 수 있습니다. 실제 거래에서는 계약 시점의 최신 자료를 다시 확인하세요.</p><div>{CONTRACT_KO_SOURCES.map(source=><a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<b>↗</b></a>)}</div></section>;
}


function PartiesPrototype({copy,page,locale}){
  const d=CONTRACT_PARTIES_V004;
  const lines=(text)=>text.split('\n').map((line,i)=><span key={`${line}-${i}`}>{line}</span>);
  const bulletList=(items)=><ul className="ctp-bullets">{items.map(x=><li key={x}>{x}</li>)}</ul>;
  return <main className="contract-page ct-parties-page">
    <section className="ctp-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{koLabel(d.hero.eyebrow)}</small><h1>{d.hero.title}</h1><h2>{lines(d.hero.question)}</h2><p>{d.hero.lead}</p><figure className="ctp-editorial-visual is-hero"><img src={CONTRACT_PARTIES_IMAGES.hero} alt="소유자, 계약 상대, 계약 권한과 대금 수령 권한의 연결을 확인하는 계약 상대 확인 요약 그래픽" loading="eager" decoding="async"/></figure></div></section>

    <section className="ctp-firstdeal" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.firstDeal.eyebrow)}</small><h2>{d.firstDeal.title}</h2><p>{d.firstDeal.lead}</p></header><div className="ctp-firstdeal-list">{d.firstDeal.steps.map(step=><article key={step.no}><div className="ctp-step-index"><span>{step.no}</span></div><div className="ctp-step-main"><h3>{step.title}</h3><p>{step.summary}</p><div className="ctp-step-action"><small>{koLabel('ACTION')}</small><strong>{step.action}</strong></div></div><div className="ctp-step-check"><div><small>{koLabel('CHECK')}</small>{bulletList(step.checks)}</div><div className="ctp-step-different"><small>{koLabel('IF DIFFERENT')}</small><p>{step.ifDifferent}</p></div></div></article>)}</div><strong className="ctp-rule">{d.firstDeal.rule}</strong></div></section>

    <section className="ctp-normal" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.normal.eyebrow)}</small><h2>{d.normal.title}</h2><p>{d.normal.lead}</p></header><div className="ctp-normal-intro"><strong>소유자부터 지급까지 하나의 흐름으로 연결됩니다.</strong><p>이 네 칸은 서로 독립된 체크리스트가 아니라 “같은 거래를 가리키는지”를 보는 연결선입니다.</p></div><div className="ctp-normal-chain">{d.normal.chain.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><small>{koLabel(['WHO OWNS','WHO APPEARS','WHO SIGNS','WHO GETS PAID'][i])}</small><strong>{x}</strong><p className="ctp-normal-question">{['등기상 소유자는 누구인가?','지금 나온 사람이 그 소유자인가?','계약서의 매도인이 같은 사람인가?','돈은 누구에게 지급되는가?'][i]}</p>{i<d.normal.chain.length-1&&<b>→</b>}</div>)}</div><figure className="ctp-editorial-visual is-normal-variables"><img src={CONTRACT_PARTIES_IMAGES.normalVariables} alt="정상적인 본인 계약 흐름과 공동소유, 대리인, 법인, 제3자 계좌 변수를 비교한 요약 그래픽" loading="lazy" decoding="async"/></figure><div className="ctp-normal-result"><div><small>{koLabel('ALL MATCH')}</small><strong>네 지점이 자연스럽게 연결됨</strong><p>본인 계약의 기본형입니다. 01 상대 확인을 마치고 다음 계약 확인으로 이동합니다.</p></div><div><small>{koLabel('IF ONE IS DIFFERENT')}</small><strong>다르다고 바로 위험이라고 단정하지 않습니다.</strong><p>대리·공동소유·법인·제3자 계좌 중 어떤 변수인지 분류하고 그 변수의 권한을 추가 확인합니다.</p></div><div><small>{koLabel('IF NOT EXPLAINED')}</small><strong>이유와 근거가 해결될 때까지 멈춥니다.</strong><p>설명만 있고 근거가 없으면 서명·지급을 보류하고 관계와 권한을 다시 확인합니다.</p></div></div></div></section>

    <section className="ctp-variables" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.variables.eyebrow)}</small><h2>{d.variables.title}</h2><p>{d.variables.lead}</p></header><div className="ctp-variable-detail">{d.variables.items.map((item,i)=><article key={item.no} className={`is-v${i+1}`}><div className="ctp-variable-title"><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.situation}</p></div></div><div className="ctp-variable-layout"><div className="ctp-variable-check"><small>{koLabel('WHAT TO CHECK')}</small>{bulletList(item.check)}</div><div className="ctp-variable-story"><div><small>{koLabel('WHY IT MATTERS')}</small><p>{item.why}</p></div><blockquote>{item.prevent}</blockquote></div></div><div className="ctp-variable-action"><div><small>{koLabel('IF YOU FIND IT')}</small><p>{item.respond}</p></div><strong>{item.decision}</strong></div></article>)}</div></div></section>

    <section className="ctp-missed" data-ct-reveal><div className="ct-shell"><small>{koLabel(d.missed.eyebrow)}</small><h2>{lines(d.missed.title)}</h2><p>{d.missed.body}</p><div className="ctp-missed-chain">{d.missed.chain.map((x,i)=><article key={x.title}><small>{koLabel(x.label)}</small><span>{String(i+1).padStart(2,'0')}</span><h3>{x.title}</h3><strong>{x.question}</strong><p>{x.check}</p></article>)}</div><div className="ctp-missed-scenes">{d.missed.scenarios.map(item=><article key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><div><small>{koLabel('WHY THIS MATTERS')}</small><strong>{item.point}</strong></div><div><small>{koLabel('ACTION')}</small><p>{item.action}</p></div></article>)}</div><div className="ctp-missed-prevent"><div><small>{koLabel('PREVENT')}</small><h3>사고를 줄이는 가장 단순한 방법</h3>{bulletList(d.missed.prevention)}</div><div><small>{koLabel('DECISION')}</small><h3>다르면 이렇게 행동합니다.</h3>{bulletList(d.missed.decision)}</div></div></div></section>

    <section className="ctp-mistakes" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.mistakes.eyebrow)}</small><h2>{d.mistakes.title}</h2></header><div className="ctp-mistake-detail">{d.mistakes.items.map(item=><article key={item.no}><div className="ctp-mistake-head"><span>{koLabel(item.no)}</span><h3>{item.title}</h3><p>{item.reason}</p></div><div className="ctp-mistake-flow"><div><small>{koLabel('WHAT GOES WRONG')}</small><p>{item.problem}</p></div><div><small>{koLabel('PREVENT')}</small><p>{item.prevent}</p></div><div><small>{koLabel('IF DISCOVERED')}</small><p>{item.after}</p></div></div><strong className="ctp-mistake-decision">{item.decision}</strong></article>)}</div></div></section>

    <section className="ctp-method" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.method.eyebrow)}</small><h2>{d.method.title}</h2><p>{d.method.lead}</p></header><figure className="ctp-editorial-visual is-howto"><img src={CONTRACT_PARTIES_IMAGES.howToCheck} alt="소유자, 신분, 계약 권한, 지급계좌를 순서대로 확인하고 진행 또는 보류를 판단하는 실전 확인 그래픽" loading="lazy" decoding="async"/></figure><ol>{d.method.steps.map(step=><li key={step.no}><span className="ctp-how-no">{step.no}</span><div className="ctp-how-body"><h3>{step.title}</h3><div className="ctp-how-path"><div><small>{koLabel('LOOK HERE')}</small><p>{step.where}</p></div><div><small>{koLabel('COMPARE THIS')}</small><p>{step.compare}</p></div><div className="is-normal"><small>{koLabel('IF MATCHED')}</small><strong>{step.normal}</strong></div><div className="is-different"><small>{koLabel('IF NOT')}</small><strong>{step.ifDifferent}</strong></div></div><div className="ctp-how-action"><small>{koLabel('ACTION')}</small>{bulletList(step.actions)}<strong>{step.result}</strong></div></div></li>)}</ol></div></section>

    <section className="ctp-mismatch" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.mismatch.eyebrow)}</small><h2>{d.mismatch.title}</h2></header><div className="ctp-mismatch-examples">{d.mismatch.examples.map(([said,fact,action],i)=><article key={said}><span>0{i+1}</span><div><small>{koLabel('SAID')}</small><strong>{said}</strong></div><b>≠</b><div><small>{koLabel('FOUND')}</small><strong>{fact}</strong></div><div className="is-action"><small>{koLabel('ACTION')}</small><p>{action}</p></div></article>)}</div><div className="ctp-mismatch-process">{d.mismatch.process.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></div></section>

    {d.deepDives.map((deep,i)=><section className={`ctp-deep ctp-deep-${i+1}`} data-ct-reveal key={deep.no}><div className="ct-shell"><header><small>{koLabel(deep.no)}</small><h2>{deep.title}</h2><p>{deep.intro}</p></header><div className="ctp-deep-sections">{deep.sections.map((section,j)=><article key={section.title}><span>{String(j+1).padStart(2,'0')}</span><div><h3>{section.title}</h3><p>{section.body}</p>{bulletList(section.checks)}</div></article>)}</div><strong className="ctp-deep-takeaway">{deep.action}</strong></div></section>)}

    <section className="ctp-cases" data-ct-reveal><div className="ct-shell"><header><small>{koLabel('REAL-WORLD CASES')}</small><h2>실제 사례로 확인부터 행동까지 따라갑니다.</h2></header><div className="ctp-case-detail">{d.cases.map(item=><article key={item.no}><div className="ctp-case-head"><span>{koLabel(item.no)}</span><h3>{item.title}</h3><p>{item.situation}</p></div><div className="ctp-case-body"><div><small>{koLabel('CHECK')}</small>{bulletList(item.check)}</div><div><small>{koLabel('FOUND')}</small><p>{item.finding}</p></div><div><small>{koLabel('ACTION')}</small><p>{item.action}</p></div><strong>{item.result}</strong></div></article>)}</div></div></section>

    <section className="ctp-decision" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.decision.eyebrow)}</small><h2>{d.decision.title}</h2></header><div className="ctp-decision-grid">{d.decision.items.map((item,i)=><article key={item.no} className={i===3?'is-review':''}><span>{koLabel(item.no)}</span><h3>{item.title}</h3><p>{item.body}</p><strong>{item.next}</strong></article>)}</div></div></section>

    <section className="ctp-principle"><div className="ct-shell"><small>{koLabel('CORE PRINCIPLE')}</small><h2>{lines(d.principle)}</h2><p>{d.finalChain}</p></div></section>

    <section className="ctp-final-summary" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.finalSummary.eyebrow)}</small><h2>{d.finalSummary.title}</h2><p>{d.finalSummary.lead}</p></header><div className="ctp-final-grid">{d.finalSummary.items.map(item=><article key={item.no}><span>{koLabel(item.no)}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><div className="ctp-final-quick"><div><small>{d.finalSummary.quickTitle}</small><div>{d.finalSummary.quick.map((x,i)=><span key={x}>{x}{i<d.finalSummary.quick.length-1&&<b>→</b>}</span>)}</div><strong>{d.finalSummary.question}</strong></div><a href={`${BASE_PATH}/${locale}/contract/property`}><small>{d.finalSummary.nextTitle}</small><strong>{d.finalSummary.nextLabel}</strong><p>{d.finalSummary.nextBody}</p><b>→</b></a></div></div></section>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}


function Journey0206({copy,page,locale}){
  const d=CONTRACT_0206_V013[page.slug];
  const bullets=(items)=><ul className="ctj-bullets">{items.map(x=><li key={x}>{x}</li>)}</ul>;
  const lines=(text)=>text.split('\n').map((line,i)=><span key={`${line}-${i}`}>{line}</span>);
  const nextMap={property:'payment',payment:'terms',terms:'recheck',recheck:'closing',closing:'checklist'};
  const nextPage=copy.pages.find(x=>x.slug===nextMap[page.slug]);
  return <main className={`contract-page ct-journey ct-journey-${page.slug}`}>
    <section className="ctj-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{koLabel(d.eyebrow)}</small><h1>{d.title}</h1><h2>{d.question}</h2><p>{d.lead}</p><figure className="ctj-visual is-hero"><img src={d.images.hero} alt={`${d.title} 핵심 요약 그래픽`} loading="eager" decoding="async"/></figure></div></section>

    <section className="ctj-flow" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.flow.eyebrow)}</small><h2>{d.flow.title}</h2><p>{d.flow.lead}</p></header><ol>{d.flow.steps.map(([no,title,body])=><li key={no}><span>{no}</span><strong className={(title==='CONDITION'||title==='OPERATION')?'ctj-bilingual-stack':''}>{koStackLabel(title)}</strong><p>{body}</p></li>)}</ol></div></section>

    <section className="ctj-normal" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.normal.eyebrow)}</small><h2>{d.normal.title}</h2><p>{d.normal.lead}</p></header><div className="ctj-chain">{d.normal.chain.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong className={(x==='CONDITION'||x==='OPERATION')?'ctj-bilingual-stack':''}>{koStackLabel(x)}</strong>{i<d.normal.chain.length-1&&<b>→</b>}</div>)}</div><strong className="ctj-chain-result">{d.normal.result}</strong><figure className="ctj-visual is-support"><img src={d.images.support} alt={`${d.title} 실전 비교 요약 그래픽`} loading="lazy" decoding="async"/></figure></div></section>

    <section className="ctj-variables" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.variables.eyebrow)}</small><h2>{d.variables.title}</h2><p>{d.variables.lead}</p></header><div className="ctj-variable-list">{d.variables.items.map((item,i)=><article key={item.title}><div className="ctj-row-head"><span>{String(i+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{item.situation}</p></div></div><div className="ctj-variable-body"><div><small>{koLabel('WHAT TO CHECK')}</small>{bullets(item.check)}</div><div><small>{koLabel('WHY IT MATTERS')}</small><p>{item.why}</p><small>{koLabel('PREVENT')}</small><p>{item.prevent}</p></div></div><div className="ctj-action"><small>{koLabel('IF DISCOVERED')}</small><p>{item.respond}</p><strong>{item.decision}</strong></div></article>)}</div></div></section>

    <section className="ctj-missed" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.missed.eyebrow)}</small><h2>{d.missed.title}</h2><p>{d.missed.body}</p></header><div className="ctj-missed-list">{d.missed.points.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div><aside className="ctj-prevention"><small>{koLabel('PREVENT')}</small><h3>놓치기 전에 이렇게 막습니다.</h3>{bullets(d.missed.prevention)}</aside></div></section>

    <section className="ctj-method" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.method.eyebrow)}</small><h2>{d.method.title}</h2><p>{d.method.lead}</p></header><ol>{d.method.steps.map((step,i)=><li key={step.title}><span className="ctj-how-no">{String(i+1).padStart(2,'0')}</span><div className="ctj-how-main"><h3>{step.title}</h3><div className="ctj-how-grid"><div><small>{koLabel('LOOK HERE')}</small><p>{step.where}</p></div><div><small>{koLabel('COMPARE')}</small><p>{step.compare}</p></div><div><small>{koLabel('NORMAL')}</small><strong>{step.normal}</strong></div><div><small>{koLabel('IF DIFFERENT')}</small><strong>{step.ifDifferent}</strong></div></div><div className="ctj-how-action"><small>{koLabel('ACTION')}</small>{bullets(step.actions)}<strong>{step.result}</strong></div></div></li>)}</ol></div></section>

    <section className="ctj-mismatch" data-ct-reveal><div className="ct-shell"><header><small>{koLabel(d.mismatch.eyebrow)}</small><h2>{d.mismatch.title}</h2></header><div className="ctj-mismatch-list">{d.mismatch.examples.map(([said,found,action],i)=><article key={said}><span>{String(i+1).padStart(2,'0')}</span><div><small>{koLabel('SAID / EXPECTED')}</small><strong>{said}</strong></div><b>≠</b><div><small>{koLabel('FOUND')}</small><strong>{found}</strong></div><div><small>{koLabel('ACTION')}</small><p>{action}</p></div></article>)}</div><div className="ctj-process">{d.mismatch.process.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></div></section>

    {d.deepDives.map((deep,idx)=><section className={`ctj-deep ${idx%2?'is-alt':''}`} data-ct-reveal key={deep.no}><div className="ct-shell"><header><small>{koLabel(deep.no)}</small><h2>{deep.title}</h2><p>{deep.intro}</p></header><div className="ctj-deep-list">{deep.sections.map(([title,body,check],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{koLabel(title)}</h3><p>{body}</p><strong>{check}</strong></div></article>)}</div><blockquote>{deep.action}</blockquote></div></section>)}

    <section className="ctj-cases" data-ct-reveal><div className="ct-shell"><header><small>{koLabel('REAL-WORLD CASES')}</small><h2>상황 → 확인 → 발견 → 행동 → 결과까지 봅니다.</h2></header><div>{d.cases.map(([no,title,check,found,action,result])=><article key={no}><div><span>{koLabel(no)}</span><h3>{title}</h3></div><dl><dt>{koLabel('CHECK')}</dt><dd>{check}</dd><dt>{koLabel('FOUND')}</dt><dd>{found}</dd><dt>{koLabel('ACTION')}</dt><dd>{action}</dd></dl><strong>{result}</strong></article>)}</div></div></section>

    <section className="ctj-decision" data-ct-reveal><div className="ct-shell"><header><small>{koLabel('DECISION')}</small><h2>{d.decision.title}</h2></header><div>{d.decision.items.map(([no,title,body,next])=><article key={no}><span>{no}</span><h3>{koLabel(title)}</h3><p>{body}</p><strong>{next}</strong></article>)}</div></div></section>

    <section className="ctj-principle"><div className="ct-shell"><small>{koLabel('CORE PRINCIPLE')}</small><h2>{lines(d.principle)}</h2></div></section>

    <section className="ctj-final" data-ct-reveal><div className="ct-shell"><header><small>{koLabel('FINAL SUMMARY')}</small><h2>{d.final.title}</h2><p>{d.final.lead}</p></header><div className="ctj-final-list">{d.final.items.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{koLabel(title)}</h3><p>{body}</p></article>)}</div>{nextPage&&<div className="ctj-next"><div><small>계약 현장에서 마지막 10초 체크</small><strong>{d.final.items.map(x=>koLabel(x[0])).join('  ›  ')}</strong></div><a href={`${BASE_PATH}/${locale}/contract/${nextPage.slug}`}><small>다음 단계</small><strong>{nextPage.num} {nextPage.title}</strong><p>{nextPage.question}</p><b>→</b></a></div>}</div></section>

    <p className="ct-notice ct-shell">{copy.notice}</p>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}

function Detail({copy,page,locale}){
  return <main className="contract-page ct-detail">
    <section className="ct-detail-hero"><div className="ct-shell ct-detail-hero-grid"><div><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{page.num} · {page.label}</small><h1>{page.title}</h1><p>{page.question}</p><em>{page.hero}</em></div><CharacterScene type={page.slug}/></div></section>
    <div className="ct-shell ct-detail-content">
      {page.sections.map(([title,body],i)=><section className="ct-detail-block" data-ct-reveal key={title}><header><small>{copy.sections[i]}</small><h2>{title}</h2></header>{i===5?<div className="ct-principle"><small>{copy.principle}</small><strong>{body}</strong></div>:i===4?<aside className="ct-case"><small>{copy.caseLabel}</small><span>{body}</span></aside>:<p>{body}</p>}{i===1&&<SummaryGraphic page={page}/>} {i===3&&['payment','terms','closing'].includes(page.slug)&&<SummaryGraphic page={page}/>}</section>)}
      <CompleteGuide page={page} locale={locale}/>
      <ChecklistPreview page={page} copy={copy}/>
      <SourceLinks locale={locale}/>
      <p className="ct-notice">{copy.notice}</p>
    </div>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}

export default function ContractPage({locale='ko',initialView=[]}){
  const copy=CONTRACT_COPY[locale]||CONTRACT_COPY.ko;
  const slug=initialView?.[0]||'';
  const page=copy.pages.find(p=>p.slug===slug);
  useEffect(()=>{
    const root=document.querySelector('.contract-page'); if(!root) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){root.querySelectorAll('[data-ct-reveal]').forEach(x=>x.classList.add('is-visible'));return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.12});
    root.querySelectorAll('[data-ct-reveal]').forEach(x=>io.observe(x)); return()=>io.disconnect();
  },[slug]);
  if(page&&locale==='ko'&&page.slug==='parties') return <PartiesPrototype copy={copy} page={page} locale={locale}/>;
  if(page&&locale==='ko'&&CONTRACT_0206_V013[page.slug]) return <Journey0206 copy={copy} page={page} locale={locale}/>;
  if(page) return <Detail copy={copy} page={page} locale={locale}/>;
  return <main className="contract-page">
    <section className="ct-hero"><div className="ct-shell ct-hero-grid"><div className="ct-hero-copy"><small>{copy.eyebrow}</small><h1>{copy.title}</h1><p>{copy.lead}</p><div className="ct-hero-actions"><a className="is-primary" href="#contract-process">{copy.ctas.flow}<b>→</b></a><a href={`${BASE_PATH}/${locale}/contract/red-flags`}>{copy.ctas.risk}<b>→</b></a><a href={`${BASE_PATH}/${locale}/contract/mistakes`}>{copy.ctas.mistakes}<b>→</b></a></div></div><ContractLock locale={locale}/></div></section>
    <section className="ct-quick" id="contract-process" data-ct-reveal><div className="ct-shell"><header><small>{copy.quick.eyebrow}</small><h2>{copy.quick.title}</h2><p>{copy.quick.lead}</p></header><div className="ct-quick-grid">{copy.pages.slice(0,7).map(p=><a href={`${BASE_PATH}/${locale}/contract/${p.slug}`} key={p.slug}><span>{p.num}</span><MiniIcon type={p.icon}/><strong>{p.title}</strong><small>{locale==='ko'?koLabel(p.label):p.label}</small></a>)}</div></div></section>
    <section className="ct-tutorial" data-ct-reveal><div className="ct-shell"><header><small>{copy.tutorial.eyebrow}</small><h2>{copy.tutorial.title}</h2><p>{copy.tutorial.lead}</p></header><div className="ct-tutorial-list">{copy.tutorial.items.map(([t,b],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{b}</p></div></article>)}</div></div></section>
    <section className="ct-takeaway"><div className="ct-shell"><small>{locale==='ko'?koLabel('CONTRACT STANDARD'):'CONTRACT STANDARD'}</small>{copy.takeaway.map(x=><strong key={x}>{x}</strong>)}</div></section>
    <section className="ct-risk-strip" data-ct-reveal><div className="ct-shell"><header><small>{locale==='ko'?koLabel('RISK GUIDE'):'RISK GUIDE'}</small><h2>{copy.riskStrip.title}</h2><p>{copy.riskStrip.lead}</p></header><div className="ct-risk-links"><a href={`${BASE_PATH}/${locale}/contract/red-flags`}><span>08</span><strong>{copy.pages[7].title}</strong><b>→</b></a><a href={`${BASE_PATH}/${locale}/contract/mistakes`}><span>09</span><strong>{copy.pages[8].title}</strong><b>→</b></a></div></div></section>

  </main>;
}
