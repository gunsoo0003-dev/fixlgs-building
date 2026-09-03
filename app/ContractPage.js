'use client';

import {useEffect} from 'react';
import {CONTRACT_COPY} from './contract-copy';
import {CONTRACT_KO_DEEP,CONTRACT_KO_SOURCES} from './contract-ko-deep';
import {CONTRACT_KO_COMPLETE} from './contract-ko-complete';
import {CONTRACT_PARTIES_V004} from './contract-parties-v004';
import {CONTRACT_0206_V013} from './contract-0206-v013';
import {CONTRACT_CHECKLIST_V016} from './contract-checklist-v016';
import {CONTRACT_REDFLAGS_V023} from './contract-redflags-v023';
import {CONTRACT_MISTAKES_V025} from './contract-mistakes-v025';
import {CONTRACT_I18N_V035} from './contract-i18n-v035';

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
  const local={en:{WHO:'WHO · Contracting Party',WHAT:'WHAT · Contract Scope',MONEY:'MONEY · Payment',TERMS:'TERMS · Contract Terms',VERIFY:'VERIFY · Recheck',CLOSE:'CLOSE · Closing'},ja:{WHO:'WHO · 契約相手',WHAT:'WHAT · 契約対象',MONEY:'MONEY · 支払い',TERMS:'TERMS · 契約条件',VERIFY:'VERIFY · 再確認',CLOSE:'CLOSE · 決済・引渡し'}};
  return <div className="ct-lock" aria-label="Contract verification layers">
    <div className="ct-building"><span>FIX</span><b>BUILDING</b></div>
    <div className="ct-layers">{labels.map((label,i)=><div className="ct-layer" style={{'--i':i}} key={label}><span>{String(i+1).padStart(2,'0')}</span><strong>{locale==='ko'?koLabel(label):(local[locale]?.[label]||label)}</strong></div>)}</div>
  </div>;
}

const CONTRACT_HOME_TUTORIAL_KO=[
  {
    type:'why',
    eyebrow:'01 · WHY CONTRACT MATTERS',
    title:'계약은 분석한 가치를 권리로 바꿉니다.',
    intro:'건물을 잘 분석했다는 사실만으로 원하는 자산을 그대로 인수하는 것은 아닙니다. 분석에서 확인한 가치와 위험이 실제 계약대상, 지급조건, 이행조건으로 연결되어야 처음 판단한 가치가 거래에서도 유지됩니다.',
    points:[
      ['좋은 건물과 좋은 계약은 다릅니다.','건물 분석은 이 자산을 사도 되는지를 판단하는 과정이고, 계약은 그 판단을 실제 거래조건으로 만드는 과정입니다. 수익성이나 입지가 좋아도 실제 인수범위와 권리관계가 분석 때의 전제와 다르면 결과는 달라질 수 있습니다.'],
      ['계약은 여러 단계가 연결된 과정입니다.','계약서에 서명하는 순간만 보는 것이 아니라 확인한 사실을 합의하고, 합의한 내용을 문서화하고, 잔금 전에 다시 확인한 뒤 지급과 인도를 맞추는 전체 과정을 봐야 합니다.'],
      ['작은 누락도 거래 전체를 흔듭니다.','권한, 시설범위, 임대차, 말소, 정산처럼 초기에 작아 보이는 항목도 뒤에서는 지급액, 인도범위, 권리이전 문제로 이어질 수 있습니다. 그래서 계약은 항목 하나보다 연결관계를 함께 확인하는 것이 중요합니다.']
    ],
    flow:[
      ['확인','현재 사실과 자료를 확인합니다.'],['합의','확인한 사실을 기준으로 거래조건을 정합니다.'],['문서화','구두합의를 확인 가능한 조건으로 남깁니다.'],['재확인','계약 이후 달라진 사항을 다시 봅니다.'],['지급','조건 충족을 확인한 뒤 돈을 움직입니다.'],['인도·이전','권리·서류·시설·운영자료까지 넘겨받습니다.']
    ],
    examples:[
      ['계약대상 누락','시설 하나의 소유관계가 불명확하면 인수범위와 가격이 달라질 수 있습니다.'],
      ['임대차 정보 누락','보증금이나 임차조건이 다르면 실제 정산금액과 인수 후 현금흐름이 바뀔 수 있습니다.'],
      ['권리변동 누락','계약 후 새로운 권리가 생기면 잔금과 소유권 이전 조건을 다시 판단해야 할 수 있습니다.']
    ],
    principle:'계약은 분석한 가치를 실제 권리와 거래조건으로 바꾸는 과정입니다.'
  },
  {
    type:'axes',
    eyebrow:'02 · SIX CONTRACT CHECKS',
    title:'계약은 여섯 축을 함께 봅니다.',
    intro:'건물 계약의 확인사항을 전부 외우는 것은 어렵습니다. 대신 사람·대상·돈·조건·변화·마무리라는 여섯 질문으로 나누면 복잡한 거래도 구조적으로 볼 수 있습니다.',
    axes:[
      ['WHO','누구와 계약하는가','계약 상대에게 실제 계약 권한이 있는가?','이름이 계약서에 적혀 있다는 사실만으로 충분하지 않습니다. 소유자, 대리인, 공동소유자 등 실제 계약에 관여하는 사람과 권한의 범위가 서로 맞는지 확인해야 합니다.','WHO가 불명확하면 뒤에 정하는 계약조건 자체가 흔들릴 수 있습니다.'],
      ['WHAT','무엇을 실제로 인수하는가','가격에 포함된 대상과 현장에서 보이는 대상이 같은가?','건물과 토지만 보는 것이 아니라 임대차, 시설, 집기, 주차공간, 부속설비 등 실제로 무엇이 거래에 포함되는지 분리해서 봐야 합니다.','WHAT이 달라지면 가격, 특약, 인도범위도 함께 달라질 수 있습니다.'],
      ['MONEY','돈은 어떤 조건에서 움직이는가','언제 얼마를 지급하는지보다 왜 그때 지급하는가?','계약금·중도금·잔금의 날짜만 보는 것이 아니라 각 지급시점에 어떤 조건이 충족되어 있어야 하는지를 함께 봐야 합니다.','돈은 일정이 아니라 확인된 조건과 연결되어야 합니다.'],
      ['TERMS','합의한 내용을 어떻게 남기는가','말로 합의한 내용을 나중에도 확인할 수 있는가?','수리, 시설 인수, 명도, 말소, 정산처럼 결과에 영향을 주는 합의는 누가 무엇을 언제까지 어떻게 이행하는지가 확인 가능하도록 계약조건으로 정리해야 합니다.','조건이 모호하면 문제가 생겼을 때 무엇이 약속이었는지부터 다시 다투게 됩니다.'],
      ['VERIFY','계약 이후 무엇이 달라졌는가','계약 당시 확인한 사실이 지금도 같은가?','계약일부터 잔금일까지는 시간이 흐릅니다. 권리관계, 임대차, 시설상태, 수리, 대출, 정산금액 등 거래조건에 영향을 주는 요소가 바뀔 수 있습니다.','한 번 확인한 사실을 거래가 끝날 때까지 그대로라고 가정하지 않습니다.'],
      ['CLOSE','거래가 실제로 끝났는가','돈·권리·서류·인도가 모두 맞았는가?','잔금을 보냈다고 거래가 모두 끝난 것은 아닙니다. 권리말소, 소유권 이전, 열쇠·시설·임대차 자료의 인수까지 함께 맞아야 실제 거래가 완결됩니다.','CLOSE는 돈의 지급이 아니라 거래 전체의 완료상태를 확인하는 단계입니다.']
    ],
    cascade:['계약대상 불명확','가격 판단 오류','특약 내용 불완전','잔금 시 분쟁','인수범위 문제'],
    principle:'계약은 앞 단계의 확인내용을 다음 단계의 조건으로 연결하는 작업입니다.'
  },
  {
    type:'thinking',
    eyebrow:'03 · CONTRACT THINKING',
    title:'계약서를 보기 전에 기준부터 세웁니다.',
    intro:'이 카테고리의 목적은 계약 문구를 외우는 것이 아닙니다. 실제 거래에서 설명을 어떻게 검증하고, 발견한 사실을 어떻게 조건으로 바꾸며, 지급 전에 무엇을 다시 판단해야 하는지 그 순서를 익히는 것입니다.',
    comparisons:[
      ['설명을 들었다','사실이 일치하는지 확인한다','상대방이나 중개인의 설명은 확인의 시작점일 수 있지만 확인 자체는 아닙니다. 사람의 설명, 공식자료, 현장상태가 같은 사실을 가리키는지 비교합니다.'],
      ['서류가 있다','서류의 내용과 시점을 본다','서류가 존재하는 것과 필요한 사실을 정확히 보여주는 것은 다릅니다. 언제 발급된 자료인지, 현재 상태를 반영하는지, 다른 자료와 일치하는지를 봅니다.'],
      ['계약서에 적었다','이행 여부까지 확인한다','계약조건은 약속을 남기는 장치이지만 실제 이행을 자동으로 보장하지는 않습니다. 잔금 전에 조건이 실제로 이행되었는지 다시 확인합니다.'],
      ['지급일이 됐다','지급조건이 충족됐는지 본다','날짜는 지급시점을 정하지만 지급의 안전성을 보장하지는 않습니다. 말소, 명도, 수리 등 선행조건이 있다면 날짜보다 조건 충족 여부를 먼저 봅니다.'],
      ['한 번 확인했다','중요 시점마다 다시 확인한다','계약 전에 확인한 정보가 잔금일까지 그대로 유지된다고 가정하지 않습니다. 중요한 자료는 계약 전과 잔금 전에 각각 다른 역할로 다시 봅니다.'],
      ['잔금을 보냈다','거래가 완결됐는지 확인한다','돈을 지급한 순간과 자산을 완전히 인수한 순간은 다를 수 있습니다. 권리·서류·물리적 인도까지 함께 확인해야 합니다.']
    ],
    principle:'계약의 핵심은 의심하는 것이 아니라 확인 가능한 상태를 만드는 것입니다.'
  },
  {
    type:'prepare',
    eyebrow:'04 · BEFORE CONTRACT',
    title:'계약서보다 먼저 기준자료를 준비합니다.',
    intro:'계약서를 받은 뒤 처음부터 자료를 찾기 시작하면 중요한 내용을 놓치기 쉽습니다. 계약 전에 거래의 기준상태를 정리해 두면 무엇이 빠졌는지, 어떤 내용을 조건으로 남겨야 하는지 훨씬 쉽게 판단할 수 있습니다.',
    preparations:[
      ['RIGHTS','현재 권리상태를 기준으로 잡습니다.',['최신 권리 관련 자료','소유자·공동소유 정보','담보와 기타 권리관계'],'계약 상대와 실제 권리자가 일치하는지 확인하고, 잔금 전 무엇이 바뀌었는지를 비교하기 위한 기준입니다.',['현재 상태','해결 필요','잔금 전 재확인']],
      ['SCOPE','인수대상을 목록으로 정리합니다.',['토지·건물','부속시설·설비','집기·주차·공용부분 관련사항'],'현장에서 보이는 것과 실제 소유하거나 인수할 수 있는 대상은 다를 수 있습니다. 포함·제외·확인 필요 항목을 미리 나눕니다.',['포함','제외','확인 필요']],
      ['TENANCY','임대차를 인수조건과 연결합니다.',['임차인·계약기간','보증금·임대료','미수·정산·명도 예정'],'임대차는 수익뿐 아니라 잔금 시 실제 지급액과 인수 후 운영에 직접 영향을 줍니다.',['승계','정산','명도·추가확인']],
      ['SITE','현장상태를 기록으로 남깁니다.',['주요 시설·하자','수리 약속','렌탈·리스·철거·교체 예정'],'계약 후에는 처음부터 그랬는지 계약 이후 달라졌는지 구분하기 어려울 수 있습니다. 사진과 목록으로 기준상태를 남기는 이유입니다.',['현재 상태','약속된 조치','완료 확인방법']],
      ['MONEY','매매가와 실제 지급액을 나눠 봅니다.',['매매대금·보증금 승계','대출·말소금액','정산금·세금·비용','계약금·중도금·잔금'],'매매가격과 잔금일 실제 송금액은 같지 않을 수 있습니다. 누구에게 얼마를 어떤 조건에서 지급하는지까지 계산해야 합니다.',['수령자','금액','지급조건']],
      ['TERMS','미확정사항은 계약 전에 정리합니다.',['수리·명도','권리말소·시설 인수','서류 제공·미납금 정산','계약 후 변경 방지'],'계약서를 받기 전에 조건 후보를 만들어 두면 계약서에 빠진 내용을 찾기 쉽습니다. 미확정사항에는 책임주체·기한·완료기준을 붙입니다.',['책임주체','기한','완료기준']]
    ],
    principle:'준비자료는 계약 전 상태를 기록하고 잔금 전 변화를 찾는 기준점이 됩니다.'
  },
  {
    type:'questions',
    eyebrow:'05 · FIVE QUESTIONS',
    title:'계약 전 다섯 질문에 답해야 합니다.',
    intro:'자료를 많이 모았더라도 거래 구조를 설명할 수 없다면 준비가 끝난 것이 아닙니다. 계약서를 작성하기 전에 아래 질문에 자신의 말로 답할 수 있는지 확인하면 빠진 부분을 찾기 쉽습니다.',
    questions:[
      ['누구와 계약하는가?','실제 권리자와 계약 상대의 관계, 대리나 공동소유가 있다면 그 권한 범위를 설명할 수 있어야 합니다.'],
      ['무엇을 인수하는가?','토지·건물뿐 아니라 임대차와 시설까지 실제 인수범위를 설명할 수 있어야 합니다.'],
      ['얼마를 왜 그때 지급하는가?','단순 지급일이 아니라 각 지급 전에 충족되어야 할 조건과 실제 송금액을 알고 있어야 합니다.'],
      ['잔금 전에 무엇을 다시 확인하는가?','계약일부터 달라질 수 있는 권리·임대차·시설·정산 등 재확인 항목을 미리 정해 둬야 합니다.'],
      ['무엇을 받아야 거래가 끝나는가?','소유권뿐 아니라 서류·열쇠·시설·임대차·운영자료까지 인수완료의 기준을 알고 있어야 합니다.']
    ],
    principle:'답하기 어려운 질문이 있다면 계약서를 쓰기 전에 그 사실부터 다시 확인합니다.'
  }
];

function ContractTutorialSection({section,index,locale='ko'}){
  const ui=locale==='en'?{cascade:'ONE ERROR CAN TRAVEL',prepare:'PREPARE',why:'WHY',result:'RESULT'}:locale==='ja'?{cascade:'ONE ERROR CAN TRAVEL · 1つの誤りが連鎖する流れ',prepare:'PREPARE · 準備',why:'WHY · 理由',result:'RESULT · 契約前の結果'}:{cascade:'ONE ERROR CAN TRAVEL · 하나의 오류가 이어지는 방식',prepare:'PREPARE · 준비',why:'WHY · 이유',result:'RESULT · 계약 전 결과'};
  return <article className={`ct-home-guide-section is-${section.type}`} data-ct-reveal>
    <div className="ct-home-guide-heading"><span>{String(index+1).padStart(2,'0')}</span><div><small>{section.eyebrow}</small><h3>{section.title}</h3><p>{ctUi(locale,section.intro,'lead')}</p></div></div>

    {section.points&&<div className="ct-home-guide-points">{section.points.map(([title,body],j)=>{const split=locale==='ko'&&index===0&&j===0?body.split(' 수익성이나 입지가'):null;return <div key={title}><span>{String(j+1).padStart(2,'0')}</span><div><h4>{title}</h4><p>{split?<>{split[0]}<br className="ct-pc-break"/>수익성이나 입지가{split[1]}</>:ctUi(locale,body,'card')}</p></div></div>})}</div>}

    {section.flow&&<div className="ct-home-process" aria-label="계약 기본 흐름">{section.flow.map(([title,body],i)=><div key={title}><span>{String(i+1).padStart(2,'0')}</span><strong>{title}</strong><p>{body}</p></div>)}</div>}

    {section.examples&&<div className="ct-home-examples">{section.examples.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h4>{title}</h4><p>{ctUi(locale,body,'card')}</p></article>)}</div>}

    {section.axes&&<div className="ct-home-axes">{section.axes.map(([key,title,question,body,connection],i)=><article key={key}><span>{String(i+1).padStart(2,'0')}</span><div className="ct-home-axis-copy"><small>{key}</small><h4>{title}</h4><strong>{question}</strong><p>{ctUi(locale,body,'card')}</p><em>{ctUi(locale,connection,'micro')}</em></div></article>)}</div>}

    {section.cascade&&<div className="ct-home-cascade"><small>{ui.cascade}</small><div>{section.cascade.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong>{i<section.cascade.length-1&&<b>→</b>}</div>)}</div></div>}

    {section.comparisons&&<div className="ct-home-thinking">{section.comparisons.map(([before,after,body],i)=><article key={before}><span>{String(i+1).padStart(2,'0')}</span><div className="ct-home-thinking-shift"><small>BEFORE</small><strong>{before}</strong><b>→</b><small>AFTER</small><strong>{after}</strong></div><p>{ctUi(locale,body,'card')}</p></article>)}</div>}

    {section.preparations&&<div className="ct-home-preparations">{section.preparations.map(([label,title,items,why,result],i)=><article key={label}><span>{String(i+1).padStart(2,'0')}</span><div><small>{label}</small><h4>{title}</h4><div className="ct-home-prep-body"><div><b>{ui.prepare}</b><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></div><div><b>{ui.why}</b><p>{ctUi(locale,why,'card')}</p></div><div><b>{ui.result}</b><div className="ct-home-prep-tags">{result.map(x=><em key={x}>{x}</em>)}</div></div></div></div></article>)}</div>}

    {section.questions&&<div className="ct-home-questions">{section.questions.map(([question,body],i)=><article key={question}><span>{String(i+1).padStart(2,'0')}</span><div><h4>{question}</h4><p>{ctUi(locale,body,'card')}</p></div></article>)}</div>}

    <strong className="ct-home-guide-principle">{section.principle}</strong>
  </article>;
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
  const deep=locale==='ko'?CONTRACT_KO_DEEP[page.slug]:CONTRACT_I18N_V035.advanced?.[locale]?.[page.slug]?.deep;
  if(!deep) return null;
  return <section className="ct-deep" data-ct-reveal>
    <header className="ct-deep-head"><small>{locale==='ko'?koLabel('FIELD GUIDE'):'FIELD GUIDE'}</small><h2>{locale==='en'?'Go one level deeper in practice':locale==='ja'?'実務でもう一段深く確認する':'실전에서 한 단계 더 확인하기'}</h2><p>{deep.intro}</p></header>
    <div className="ct-deep-cards">{deep.cards.map((card,i)=><article key={card.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{card.title}</h3><p>{card.body}</p><ul>{card.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
    <div className="ct-field-questions"><div><small>{locale==='ko'?koLabel('PRACTICAL QUESTIONS'):'PRACTICAL QUESTIONS'}</small><h3>{deep.fieldTitle}</h3></div><ol>{deep.fieldQuestions.map((q,i)=><li key={q}><span>{String(i+1).padStart(2,'0')}</span><p>{q}</p></li>)}</ol></div>
    <aside className="ct-source-note"><small>{locale==='ko'?koLabel('REFERENCE NOTE'):'REFERENCE NOTE'}</small><p>{deep.sourceNote}</p></aside>
  </section>;
}


function CompleteGuide({page,locale}){
  const data=locale==='ko'?CONTRACT_KO_COMPLETE[page.slug]:CONTRACT_I18N_V035.advanced?.[locale]?.[page.slug]?.complete;
  if(!data) return null;
  return <section className="ct-complete" data-ct-reveal>
    <header className="ct-complete-head"><small>{locale==='ko'?koLabel('COMPLETE PRACTICE GUIDE'):'COMPLETE PRACTICE GUIDE'}</small><h2>{data.title}</h2><p>{data.overview}</p></header>
    <div className="ct-complete-checks">{data.checks.map((item,i)=><article key={item[0]}>
      <div className="ct-complete-no">{String(i+1).padStart(2,'0')}</div><div><h3>{item[0]}</h3><p>{item[1]}</p><ul>{item[2].map(x=><li key={x}>{x}</li>)}</ul></div>
    </article>)}</div>
    <section className="ct-scenarios"><header><small>{locale==='ko'?koLabel('REAL-WORLD SCENARIOS'):'REAL-WORLD SCENARIOS'}</small><h3>{locale==='en'?'Recheck through real-world scenarios':locale==='ja'?'実際の状況でもう一度確認する':'상황으로 다시 확인하기'}</h3></header><div>{data.scenarios.map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h4>{x[0]}</h4><p>{x[1]}</p><dl><dt>{locale==='en'?'RISK':locale==='ja'?'注意':'주의할 점'}</dt><dd>{x[2]}</dd><dt>{locale==='en'?'RESPONSE':locale==='ja'?'対応':'확인 방향'}</dt><dd>{x[3]}</dd></dl></article>)}</div></section>
    <section className="ct-final-questions"><div><small>{locale==='ko'?koLabel('BEFORE YOU MOVE ON'):'BEFORE YOU MOVE ON'}</small><h3>{locale==='en'?'Questions before you move on':locale==='ja'?'次の段階へ進む前の質問':'다음 단계로 넘어가기 전 질문'}</h3></div><ol>{data.questions.map((q,i)=><li key={q}><span>{String(i+1).padStart(2,'0')}</span><p>{q}</p></li>)}</ol></section>
    {data.patterns&&<section className="ct-patterns"><header><small>{locale==='ko'?koLabel('CLAUSE PATTERNS'):'CLAUSE PATTERNS'}</small><h3>{locale==='en'?'Think about special conditions in this structure':locale==='ja'?'特約はこの構造で考えます':'특약은 이런 구조로 생각합니다'}</h3><p>{locale==='en'?'These are thinking patterns for designing conditions, not legal wording to copy verbatim.':locale==='ja'?'そのままコピーする法律文ではなく、条件を設計するための考え方です。':'아래는 그대로 복사하는 법률 문구가 아니라 조건을 설계하는 사고틀입니다.'}</p></header><div>{data.patterns.map(x=><article key={x[0]}><h4>{x[0]}</h4><p>{x[1]}</p><strong>{x[2]}</strong></article>)}</div></section>}
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



const CT_SHARED_LABELS={
  en:{'IF DIFFERENT':'IF DIFFERENT','WHAT TO CHECK':'WHAT TO CHECK','WHY IT MATTERS':'WHY IT MATTERS','IF YOU FIND IT':'IF YOU FIND IT','WHY THIS MATTERS':'WHY THIS MATTERS','PREVENT':'PREVENT','WHAT GOES WRONG':'WHAT GOES WRONG','IF DISCOVERED':'IF DISCOVERED','LOOK HERE':'LOOK HERE','COMPARE THIS':'COMPARE THIS','COMPARE':'COMPARE','IF MATCHED':'IF MATCHED','NORMAL':'NORMAL','IF NOT':'IF NOT','SAID':'SAID','SAID / EXPECTED':'SAID / EXPECTED','FOUND':'FOUND','ALL MATCH':'ALL MATCH','IF ONE IS DIFFERENT':'IF ONE IS DIFFERENT','IF NOT EXPLAINED':'IF NOT EXPLAINED','WHO OWNS':'WHO OWNS','WHO APPEARS':'WHO APPEARS','WHO SIGNS':'WHO SIGNS','WHO GETS PAID':'WHO GETS PAID','EXPERIENCED BUYERS MISS THIS':'EXPERIENCED BUYERS MISS THIS','REAL-WORLD CASES':'REAL-WORLD CASES','ACTION':'ACTION','CHECK':'CHECK','DECISION':'DECISION','CORE PRINCIPLE':'CORE PRINCIPLE','FINAL SUMMARY':'FINAL SUMMARY','NEXT':'NEXT','CONTRACT STANDARD':'CONTRACT STANDARD'},
  ja:{'IF DIFFERENT':'IF DIFFERENT · 不一致時','WHAT TO CHECK':'WHAT TO CHECK · 確認項目','WHY IT MATTERS':'WHY IT MATTERS · 重要な理由','IF YOU FIND IT':'IF YOU FIND IT · 発見時','WHY THIS MATTERS':'WHY THIS MATTERS · 重要な理由','PREVENT':'PREVENT · 予防','WHAT GOES WRONG':'WHAT GOES WRONG · 問題点','IF DISCOVERED':'IF DISCOVERED · 発見後','LOOK HERE':'LOOK HERE · 確認先','COMPARE THIS':'COMPARE THIS · 比較対象','COMPARE':'COMPARE · 比較','IF MATCHED':'IF MATCHED · 一致時','NORMAL':'NORMAL · 正常','IF NOT':'IF NOT · 不一致時','SAID':'SAID · 説明','SAID / EXPECTED':'SAID / EXPECTED · 説明 / 想定','FOUND':'FOUND · 実際の確認','ALL MATCH':'ALL MATCH · すべて一致','IF ONE IS DIFFERENT':'IF ONE IS DIFFERENT · 一つでも違う場合','IF NOT EXPLAINED':'IF NOT EXPLAINED · 説明できない場合','WHO OWNS':'WHO OWNS · 所有者','WHO APPEARS':'WHO APPEARS · 契約相手','WHO SIGNS':'WHO SIGNS · 契約権限','WHO GETS PAID':'WHO GETS PAID · 代金受領権限','EXPERIENCED BUYERS MISS THIS':'EXPERIENCED BUYERS MISS THIS · 経験者も見落とす点','REAL-WORLD CASES':'REAL-WORLD CASES · 実例','ACTION':'ACTION · 対応','CHECK':'CHECK · 確認','DECISION':'DECISION · 判断','CORE PRINCIPLE':'CORE PRINCIPLE · 核心原則','FINAL SUMMARY':'FINAL SUMMARY · 最終確認','NEXT':'NEXT · 次の内容','CONTRACT STANDARD':'CONTRACT STANDARD · 契約基準'}
};
function ctLabel(locale,text){
  if(locale==='ko') return koLabel(text);
  if(typeof text!=='string') return text;
  if(/^DEEP DIVE \d+$/.test(text)) return locale==='ja'?`${text} · 深掘り` : text;
  return CT_SHARED_LABELS[locale]?.[text]||text;
}
function ctStackLabel(locale,text){
  if(locale==='ko') return koStackLabel(text);
  if(locale==='ja' && (text==='CONDITION'||text==='OPERATION')) return <><span>{text}</span><span>{text==='CONDITION'?'条件':'運営'}</span></>;
  return ctLabel(locale,text);
}
function cycle(list,index,fallback=''){
  if(!Array.isArray(list)||!list.length) return fallback;
  return list[index%list.length];
}
function localText(locale,en,ja,ko){return locale==='ko'?(ko||en):(locale==='ja'?ja:en);}
const CT_UI_LIMITS={
  lead:{en:330,ja:125},card:{en:190,ja:92},micro:{en:135,ja:65},action:{en:150,ja:75}
};
function ctUi(locale,text,kind='card'){
  if(locale==='ko'||typeof text!=='string'||!text.trim()) return text;
  const limit=CT_UI_LIMITS[kind]?.[locale]||CT_UI_LIMITS.card[locale];
  if(text.length<=limit) return text;
  const sentences=locale==='ja'
    ? text.split('。').map(x=>x.trim()).filter(Boolean).map(x=>`${x}。`)
    : (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[text]).map(x=>x.trim()).filter(Boolean);
  let out='';
  let used=0;
  const minSentences=kind==='lead'?2:1;
  for(const sentence of sentences){
    const next=out+(out?' ':'')+sentence;
    if(used>=minSentences && next.length>limit) break;
    if(!out && sentence.length>limit) break;
    out=next; used+=1;
  }
  if(out) return out;
  const chunks=locale==='ja'?text.split('、'):text.split(/(?<=,|;|—)\s*/);
  out='';
  for(let chunk of chunks){
    chunk=chunk.trim(); if(!chunk) continue;
    const next=out+(out?(locale==='ja'?'、':' '):'')+chunk;
    if(out && next.length>limit) break;
    out=next;
    if(out.length>=limit*.72) break;
  }
  if(!out) return text;
  if(locale==='ja'&&!/[。！？]$/.test(out)) out+='。';
  if(locale==='en'&&!/[.!?]$/.test(out)) out=out.replace(/[;,—\s]+$/,'')+'.';
  return out;
}
function buildLocalizedPartiesData(locale,page){
  if(locale==='ko') return CONTRACT_PARTIES_V004;
  const adv=CONTRACT_I18N_V035.advanced?.[locale]?.parties;
  if(!adv) return CONTRACT_PARTIES_V004;
  const complete=adv.complete, deep=adv.deep, core=page.sections||[];
  const checks=complete.checks||[], cards=deep.cards||[], scenarios=complete.scenarios||[], questions=complete.questions||[];
  const who=localText(locale,'Owner','所有者'), party=localText(locale,'Contracting party','契約相手'), authority=localText(locale,'Authority','権限'), account=localText(locale,'Payment account','支払口座');
  const actionDefault=localText(locale,'Verify the relationship and authority before signing or paying.','署名・支払いの前に関係と権限を確認します。');
  const checkDefault=localText(locale,'Compare the people, documents and authority that support the transaction.','取引を支える人物・書類・権限を照合します。');
  const firstTitles=[...checks.map(x=>x[0]),...cards.map(x=>x.title),...questions];
  return {
    hero:{eyebrow:`01 · PARTIES & AUTHORITY`,title:page.title,question:page.question,lead:page.hero},
    firstDeal:{eyebrow:'FIELD GUIDE',title:localText(locale,'Start by confirming who can actually make this transaction.','まず、誰がこの取引を実際に行えるのかを確認します。'),lead:deep.intro,steps:Array.from({length:9},(_,i)=>{const c=cycle(checks,i,[]);const card=cycle(cards,i,{});return {no:String(i+1).padStart(2,'0'),title:firstTitles[i%firstTitles.length]||page.title,summary:c[1]||card.body||deep.intro,action:cycle(questions,i,actionDefault),checks:c[2]||card.points||[checkDefault],ifDifferent:actionDefault};}),rule:localText(locale,'Do not move from identity to payment until every authority link is explained.','本人確認から支払いまで、権限のつながりが説明できるまで次へ進みません。')},
    normal:{eyebrow:'NORMAL BASELINE',title:localText(locale,'A normal transaction connects the same ownership story from start to payment.','通常の取引では所有関係から支払いまで同じ取引としてつながります。'),lead:core[0]?.[1]||page.hero,chain:[who,party,authority,account]},
    variables:{eyebrow:'VARIABLES',title:localText(locale,'When one link changes, identify the transaction variable first.','一つのつながりが変わる場合は、まず取引変数を特定します。'),lead:complete.overview,items:Array.from({length:4},(_,i)=>{const c=cycle(checks,i,[]);return {no:String(i+1).padStart(2,'0'),title:c[0]||cycle(questions,i,page.title),situation:c[1]||complete.overview,check:c[2]||[checkDefault],why:cycle(cards,i,{}).body||deep.intro,prevent:cycle(c[2]||[],0,checkDefault),respond:cycle(questions,i,actionDefault),decision:localText(locale,'Verify before proceeding.','確認後に進行します。')};})},
    missed:{eyebrow:'EXPERIENCED BUYERS MISS THIS',title:localText(locale,'Small gaps between person, authority and payment can be missed.','人物・権限・支払いの小さなずれは見落とされやすいです。'),body:deep.intro,chain:Array.from({length:4},(_,i)=>({label:['WHO OWNS','WHO APPEARS','WHO SIGNS','WHO GETS PAID'][i],title:[who,party,authority,account][i],question:cycle(questions,i,checkDefault),check:cycle(checks,i,[])[1]||checkDefault})),scenarios:Array.from({length:4},(_,i)=>{const x=cycle(scenarios,i,[]);return {no:String(i+1).padStart(2,'0'),title:x[0]||cycle(questions,i,page.title),body:x[1]||deep.intro,point:x[2]||checkDefault,action:x[3]||actionDefault};}),prevention:questions.slice(0,4),decision:questions.slice(1,5)},
    mistakes:{eyebrow:'EXPERIENCED BUYERS MISS THIS',title:localText(locale,'Common mistakes come from treating an explanation as completed verification.','よくあるミスは、説明を確認済みの事実として扱うことから始まります。'),items:Array.from({length:5},(_,i)=>{const c=cycle(checks,i,[]);return {no:`MISTAKE ${String(i+1).padStart(2,'0')}`,title:c[0]||cycle(questions,i,page.title),reason:c[1]||deep.intro,problem:cycle(cards,i,{}).body||deep.intro,prevent:cycle(c[2]||[],0,checkDefault),after:cycle(questions,i,actionDefault),decision:localText(locale,'Recheck before signing or paying.','署名・支払いの前に再確認します。')};})},
    method:{eyebrow:'HOW TO CHECK',title:localText(locale,'Follow the authority check in the same order on site.','現場でも同じ順序で権限確認を進めます。'),lead:deep.intro,steps:Array.from({length:6},(_,i)=>{const c=cycle(checks,i,[]);return {no:String(i+1).padStart(2,'0'),title:c[0]||cycle(questions,i,page.title),where:c[1]||deep.intro,compare:cycle(c[2]||[],0,checkDefault),normal:localText(locale,'The information and authority connect consistently.','情報と権限が一貫してつながっています。'),ifDifferent:localText(locale,'Identify why the person, authority or payment route differs.','人物・権限・支払経路が異なる理由を特定します。'),actions:c[2]||[checkDefault],result:cycle(questions,i,actionDefault)};})},
    mismatch:{eyebrow:'WHEN THINGS DO NOT MATCH',title:localText(locale,'If the explanation and evidence differ, resolve the cause first.','説明と根拠が違う場合は、まず原因を解消します。'),examples:Array.from({length:4},(_,i)=>{const x=cycle(scenarios,i,[]);return [x[1]||cycle(questions,i,''),x[2]||checkDefault,x[3]||actionDefault];}),process:questions.slice(0,5).concat([actionDefault]).slice(0,6)},
    deepDives:Array.from({length:2},(_,di)=>({no:`DEEP DIVE ${String(di+1).padStart(2,'0')}`,title:cycle(cards,di,{}).title||complete.title,intro:cycle(cards,di,{}).body||deep.intro,sections:Array.from({length:5},(_,i)=>{const c=cycle(checks,di*3+i,[]);return {title:c[0]||cycle(questions,i,page.title),body:c[1]||deep.intro,checks:c[2]||[checkDefault]};}),action:cycle(questions,di,actionDefault)})),
    cases:Array.from({length:5},(_,i)=>{const x=cycle(scenarios,i,[]);return {no:`CASE ${String(i+1).padStart(2,'0')}`,title:x[0]||cycle(questions,i,page.title),situation:x[1]||deep.intro,check:[x[2]||checkDefault],finding:x[2]||checkDefault,action:x[3]||actionDefault,result:localText(locale,'VERIFY','確認')};}),
    decision:{eyebrow:'DECISION',title:localText(locale,'Choose the next action from the verification result.','確認結果に応じて次の行動を決めます。'),items:[
      {no:'01',title:localText(locale,'Proceed','進行'),body:localText(locale,'Identity, authority and payment are consistently verified.','本人・権限・支払いが一貫して確認できています。'),next:localText(locale,'Move to the next contract check.','次の契約確認へ進みます。')},
      {no:'02',title:localText(locale,'Proceed after clarification','確認後に進行'),body:localText(locale,'A transaction variable exists but can be verified.','取引変数はありますが確認可能です。'),next:actionDefault},
      {no:'03',title:localText(locale,'Hold signing or payment','署名・支払保留'),body:localText(locale,'A core authority or payment point remains unverified.','核心となる権限・支払いが未確認です。'),next:actionDefault},
      {no:'04',title:localText(locale,'Reconsider the transaction','取引再検討'),body:localText(locale,'Key explanations repeatedly conflict with the evidence.','重要な説明と根拠の不一致が繰り返されています。'),next:actionDefault}
    ]},
    principle:core[5]?.[1]||localText(locale,'Verify that authority remains connected from owner to payment.','所有者から支払いまで権限がつながっていることを確認します。'),
    finalChain:[who,party,authority,account,localText(locale,'Sign & pay','署名・支払い')],
    finalSummary:{eyebrow:'FINAL SUMMARY',title:localText(locale,'Recheck these five links before you move on.','次へ進む前にこの5つのつながりを再確認します。'),lead:complete.overview,items:Array.from({length:5},(_,i)=>({no:String(i+1).padStart(2,'0'),title:cycle(checks,i,[])[0]||cycle(questions,i,page.title),body:cycle(checks,i,[])[1]||deep.intro})),quickTitle:localText(locale,'Final 10-second check','最後の10秒確認'),quick:[who,party,authority,account,localText(locale,'Sign & pay','署名・支払い')],question:cycle(questions,0,actionDefault),nextTitle:localText(locale,'Next step','次の段階','다음 단계'),nextBody:localText(locale,'After the contracting party and authority are clear, verify exactly what is being acquired.','契約相手と権限が確認できたら、次に何を取得するのかを確認します。'),nextLabel:localText(locale,'02 Verify Property and Scope','02 契約対象・現況を確認')}
  };
}
const JOURNEY_DISPLAY_HEADS={
  en:{
    property:{flow:'Define the scope in one flow.',normal:'Start with the baseline scope.',variables:'Check the variables that change scope.',missed:'Easy-to-miss scope checks.',method:'Verify the scope in order.',mismatch:'Resolve scope differences first.',decision:'Choose the next action.',principle:'Buy the scope, not the address.',final:'Final scope check.'},
    payment:{flow:'Follow the money in one flow.',normal:'Start with the normal payment flow.',variables:'Check what changes the cash flow.',missed:'Easy-to-miss payment checks.',method:'Verify before each payment.',mismatch:'Resolve payment differences first.',decision:'Choose the next action.',principle:'Verify first. Then pay.',final:'Final payment check.'},
    terms:{flow:'Turn facts into contract terms.',normal:'Start with the agreed baseline.',variables:'Check what needs a clear term.',missed:'Easy-to-miss contract terms.',method:'Write terms that can be verified.',mismatch:'Resolve unclear terms first.',decision:'Choose the next action.',principle:'Put agreements into clear terms.',final:'Final terms check.'},
    recheck:{flow:'Recheck the deal before closing.',normal:'Start from the signing baseline.',variables:'Check what may have changed.',missed:'Easy-to-miss changes.',method:'Recheck the key facts in order.',mismatch:'Resolve changes before closing.',decision:'Choose the next action.',principle:'Recheck before closing.',final:'Final recheck.'},
    closing:{flow:'Align every closing step.',normal:'Start with the closing sequence.',variables:'Check what can disrupt closing.',missed:'Easy-to-miss closing checks.',method:'Close in a verified sequence.',mismatch:'Resolve closing gaps first.',decision:'Choose the next action.',principle:'Align money, rights, documents and handover.',final:'Final closing check.'}
  },
  ja:{
    property:{flow:'引継ぎ範囲を一つの流れで確認します。',normal:'まず基準となる範囲を確認します。',variables:'範囲を変える要素を確認します。',missed:'抜けやすい範囲確認です。',method:'引継ぎ範囲を順番に確認します。',mismatch:'範囲の差を先に解消します。',decision:'次の行動を決めます。',principle:'住所ではなく、引き継ぐ範囲を契約します。',final:'最後に範囲を確認します。'},
    payment:{flow:'資金の流れを一つにつなげます。',normal:'通常の支払フローから確認します。',variables:'資金の流れを変える要素を確認します。',missed:'抜けやすい支払確認です。',method:'支払い前に順番に確認します。',mismatch:'金額や条件の差を先に解消します。',decision:'次の行動を決めます。',principle:'確認してから支払います。',final:'最後に支払いを確認します。'},
    terms:{flow:'確認事項を契約条件へ変えます。',normal:'合意した基準から確認します。',variables:'明確な条件が必要な点を確認します。',missed:'抜けやすい契約条件です。',method:'確認できる条件として残します。',mismatch:'曖昧な条件を先に解消します。',decision:'次の行動を決めます。',principle:'合意は明確な契約条件にします。',final:'最後に契約条件を確認します。'},
    recheck:{flow:'決済前に取引を再確認します。',normal:'契約時の基準から確認します。',variables:'変わった可能性がある点を確認します。',missed:'抜けやすい変更確認です。',method:'重要事項を順番に再確認します。',mismatch:'変更点を決済前に解消します。',decision:'次の行動を決めます。',principle:'決済前にもう一度確認します。',final:'最後に再確認します。'},
    closing:{flow:'決済手続きを一つにつなげます。',normal:'決済の基本順序から確認します。',variables:'決済を止める要素を確認します。',missed:'抜けやすい決済確認です。',method:'確認できる順序で決済します。',mismatch:'決済のずれを先に解消します。',decision:'次の行動を決めます。',principle:'資金・権利・書類・引渡しをそろえます。',final:'最後に決済を確認します。'}
  }
};
function journeyDisplay(locale,slug,key,fallback){
  return JOURNEY_DISPLAY_HEADS?.[locale]?.[slug]?.[key]||fallback;
}

function buildLocalizedJourneyData(locale,page){
  if(locale==='ko') return CONTRACT_0206_V013[page.slug];
  const base=CONTRACT_0206_V013[page.slug];
  const adv=CONTRACT_I18N_V035.advanced?.[locale]?.[page.slug];
  if(!base||!adv) return base;
  const complete=adv.complete, deep=adv.deep, core=page.sections||[], checks=complete.checks||[], scenarios=complete.scenarios||[], questions=complete.questions||[];
  const chain=localChain(locale,page.slug);
  const normalChain=chain.slice(0,base.normal.chain.length);
  const genericCheck=localText(locale,'Compare the current evidence with the agreed transaction condition.','現在の資料と合意した取引条件を照合します。');
  const genericAction=localText(locale,'Resolve the difference before moving to payment or closing.','差異を解消してから支払い・決済へ進みます。');
  return {
    images:base.images, eyebrow:`${page.num} · ${page.label}`, title:page.title, question:page.question, lead:page.hero,
    flow:{eyebrow:'CONTRACT FLOW',title:journeyDisplay(locale,page.slug,'flow',localText(locale,'Connect each check as one transaction flow.','各確認を一つの取引フローとしてつなげます。')),lead:core[0]?.[1]||page.hero,steps:chain.map((x,i)=>[String(i+1).padStart(2,'0'),x,cycle(core,i,[])[1]||cycle(checks,i,[])[1]||page.hero])},
    normal:{eyebrow:'NORMAL BASELINE',title:journeyDisplay(locale,page.slug,'normal',localText(locale,'Start from the normal baseline before reading exceptions.','例外を見る前に正常な基準状態から確認します。')),lead:core[1]?.[1]||page.hero,chain:normalChain,result:localText(locale,'When the sequence connects without unexplained gaps, move to the next verification.','説明できないずれがなくつながれば次の確認へ進みます。')},
    variables:{eyebrow:'VARIABLES',title:journeyDisplay(locale,page.slug,'variables',complete.title),lead:complete.overview,items:Array.from({length:4},(_,i)=>{const c=cycle(checks,i,[]);return {title:c[0]||cycle(questions,i,page.title),situation:c[1]||complete.overview,check:c[2]||[genericCheck],why:cycle(deep.cards,i,{}).body||deep.intro,prevent:cycle(c[2]||[],0,genericCheck),respond:cycle(questions,i,genericAction),decision:genericAction};})},
    missed:{eyebrow:'MISSED POINT',title:journeyDisplay(locale,page.slug,'missed',localText(locale,'These are the points most easily skipped during a real transaction.','実際の取引で特に抜けやすい確認点です。')),body:deep.intro,points:Array.from({length:5},(_,i)=>[cycle(questions,i,cycle(checks,i,[])[0]||page.title),cycle(checks,i,[])[1]||deep.intro]),prevention:questions.slice(0,5)},
    method:{eyebrow:'HOW TO CHECK',title:journeyDisplay(locale,page.slug,'method',localText(locale,'Use the same verification order in practice.','実務でも同じ確認順序を使います。')),lead:deep.intro,steps:Array.from({length:5},(_,i)=>{const c=cycle(checks,i,[]);return {title:c[0]||cycle(questions,i,page.title),where:c[1]||deep.intro,compare:cycle(c[2]||[],0,genericCheck),normal:localText(locale,'The current evidence matches the expected condition.','現在の資料が想定条件と一致しています。'),ifDifferent:localText(locale,'Identify the cause and impact of the difference.','差異の原因と影響を特定します。'),actions:c[2]||[genericCheck],result:cycle(questions,i,genericAction)};})},
    mismatch:{eyebrow:'WHEN THINGS DO NOT MATCH',title:journeyDisplay(locale,page.slug,'mismatch',localText(locale,'If the expected condition and actual condition differ, verify before proceeding.','想定条件と実際の状態が違う場合は、進む前に確認します。')),examples:Array.from({length:3},(_,i)=>{const x=cycle(scenarios,i,[]);return [x[1]||cycle(questions,i,''),x[2]||genericCheck,x[3]||genericAction];}),process:questions.concat([genericAction]).slice(0,6)},
    deepDives:Array.from({length:base.deepDives.length},(_,di)=>({no:`DEEP DIVE ${String(di+1).padStart(2,'0')}`,title:cycle(deep.cards,di,{}).title||complete.title,intro:cycle(deep.cards,di,{}).body||deep.intro,sections:Array.from({length:base.deepDives[di].sections.length},(_,i)=>{const c=cycle(checks,di*3+i,[]);return [c[0]||cycle(questions,i,page.title),c[1]||deep.intro,cycle(c[2]||[],0,genericCheck)];}),action:cycle(questions,di,genericAction)})),
    cases:Array.from({length:base.cases.length},(_,i)=>{const x=cycle(scenarios,i,[]);return [`CASE ${String(i+1).padStart(2,'0')}`,x[0]||cycle(questions,i,page.title),x[1]||deep.intro,x[2]||genericCheck,x[3]||genericAction,localText(locale,'VERIFY','確認')];}),
    decision:{title:journeyDisplay(locale,page.slug,'decision',localText(locale,'Choose the next action from what you verified.','確認結果から次の行動を決めます。')),items:[
      ['01',localText(locale,'PROCEED','進行'),localText(locale,'The required condition is verified.','必要条件が確認できています。'),localText(locale,'Move to the next step.','次の段階へ進みます。')],
      ['02',localText(locale,'CLARIFY','補完'),localText(locale,'Additional evidence is needed but can be obtained.','追加確認が必要ですが補完可能です。'),genericAction],
      ['03',localText(locale,'HOLD','保留'),localText(locale,'A core condition remains unverified.','核心条件が未確認です。'),genericAction],
      ['04',localText(locale,'RECONSIDER','再検討'),localText(locale,'Important inconsistencies remain unresolved.','重要な不一致が解消していません。'),genericAction]
    ]},
    principle:journeyDisplay(locale,page.slug,'principle',core[5]?.[1]||localText(locale,'Do not move money until the required condition is verifiably complete.','必要条件の完了を確認できるまで資金を動かしません。')),
    final:{title:journeyDisplay(locale,page.slug,'final',localText(locale,'Final check before moving on','次へ進む前の最終確認')),lead:complete.overview,items:Array.from({length:base.final.items.length},(_,i)=>{const c=cycle(checks,i,[]);return [c[0]||cycle(questions,i,page.title),c[1]||deep.intro];})}
  };
}

function PartiesPrototype({copy,page,locale,data}){
  const d=data||CONTRACT_PARTIES_V004;
  const lines=(text)=>text.split('\n').map((line,i)=><span key={`${line}-${i}`}>{line}</span>);
  const bulletList=(items)=><ul className="ctp-bullets">{items.map(x=><li key={x}>{x}</li>)}</ul>;
  return <main className="contract-page ct-parties-page">
    <section className="ctp-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{ctLabel(locale,d.hero.eyebrow)}</small><h1>{d.hero.title}</h1><h2>{lines(d.hero.question)}</h2><p>{ctUi(locale,d.hero.lead,'lead')}</p><figure className="ctp-editorial-visual is-hero"><img src={CONTRACT_PARTIES_IMAGES.hero} alt={locale==='ko'?'소유자, 계약 상대, 계약 권한과 대금 수령 권한의 연결을 확인하는 계약 상대 확인 요약 그래픽':locale==='ja'?'所有者・契約相手・契約権限・代金受領権限のつながりを確認する概要グラフィック':'Overview graphic connecting owner, contracting party, signing authority and payment authority'} loading="eager" decoding="async"/></figure></div></section>

    <section className="ctp-firstdeal" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.firstDeal.eyebrow)}</small><h2>{d.firstDeal.title}</h2><p>{ctUi(locale,d.firstDeal.lead,'lead')}</p></header><div className="ctp-firstdeal-list">{d.firstDeal.steps.map(step=><article key={step.no}><div className="ctp-step-index"><span>{step.no}</span></div><div className="ctp-step-main"><h3>{step.title}</h3><p>{ctUi(locale,step.summary,'card')}</p><div className="ctp-step-action"><small>{ctLabel(locale,'ACTION')}</small><strong>{ctUi(locale,step.action,'action')}</strong></div></div><div className="ctp-step-check"><div><small>{ctLabel(locale,'CHECK')}</small>{bulletList(step.checks)}</div><div className="ctp-step-different"><small>{ctLabel(locale,'IF DIFFERENT')}</small><p>{ctUi(locale,step.ifDifferent,'action')}</p></div></div></article>)}</div><strong className="ctp-rule">{d.firstDeal.rule}</strong></div></section>

    <section className="ctp-normal" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.normal.eyebrow)}</small><h2>{d.normal.title}</h2><p>{ctUi(locale,d.normal.lead,'lead')}</p></header><div className="ctp-normal-intro"><strong>{localText(locale,'Owner, contracting party, authority and payment form one connected flow.','所有者・契約相手・権限・支払いは一つの流れとしてつながります。','소유자부터 지급까지 하나의 흐름으로 연결됩니다.')}</strong><p>{localText(locale,'These four blocks are not separate checklists. They test whether every part points to the same transaction.','この4つは別々のチェックリストではなく、すべてが同じ取引を示しているかを見るつながりです。','이 네 칸은 서로 독립된 체크리스트가 아니라 “같은 거래를 가리키는지”를 보는 연결선입니다.')}</p></div><div className="ctp-normal-chain">{d.normal.chain.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><small>{ctLabel(locale,['WHO OWNS','WHO APPEARS','WHO SIGNS','WHO GETS PAID'][i])}</small><strong>{x}</strong><p className="ctp-normal-question">{(locale==='ko'?['등기상 소유자는 누구인가?','지금 나온 사람이 그 소유자인가?','계약서의 매도인이 같은 사람인가?','돈은 누구에게 지급되는가?']:locale==='ja'?['公的記録上の所有者は誰か？','今対応している人はその所有者か？','契約書の売主は同じ主体か？','代金は誰に支払うのか？']:['Who is the owner in the current records?','Is the person present that owner?','Is the seller in the contract the same party?','Who is authorized to receive the money?'])[i]}</p>{i<d.normal.chain.length-1&&<b>→</b>}</div>)}</div><figure className="ctp-editorial-visual is-normal-variables"><img src={CONTRACT_PARTIES_IMAGES.normalVariables} alt={locale==='ko'?'정상적인 본인 계약 흐름과 공동소유, 대리인, 법인, 제3자 계좌 변수를 비교한 요약 그래픽':locale==='ja'?'本人契約の基本フローと共有・代理・法人・第三者口座の変数を比較するグラフィック':'Comparison of the normal owner transaction flow with co-owner, agent, company and third-party account variables'} loading="lazy" decoding="async"/></figure><div className="ctp-normal-result"><div><small>{ctLabel(locale,'ALL MATCH')}</small><strong>{localText(locale,'All four points connect naturally.','4つの確認点が自然につながっています。','네 지점이 자연스럽게 연결됨')}</strong><p>{localText(locale,'This is the normal direct-owner pattern. Complete the party check and move to the next contract check.','本人契約の基本形です。契約相手の確認を終え、次の契約確認へ進みます。','본인 계약의 기본형입니다. 01 상대 확인을 마치고 다음 계약 확인으로 이동합니다.')}</p></div><div><small>{ctLabel(locale,'IF ONE IS DIFFERENT')}</small><strong>{localText(locale,'A difference is not automatically a danger signal.','違いがあるだけで直ちに危険とは判断しません。','다르다고 바로 위험이라고 단정하지 않습니다.')}</strong><p>{localText(locale,'Classify whether the difference comes from agency, co-ownership, a company or a third-party account, then verify the relevant authority.','代理・共有・法人・第三者口座のどの変数かを分類し、その権限を追加確認します。','대리·공동소유·법인·제3자 계좌 중 어떤 변수인지 분류하고 그 변수의 권한을 추가 확인합니다.')}</p></div><div><small>{ctLabel(locale,'IF NOT EXPLAINED')}</small><strong>{localText(locale,'Stop until the reason and supporting evidence are clear.','理由と根拠が確認できるまで止まります。','이유와 근거가 해결될 때까지 멈춥니다.')}</strong><p>{localText(locale,'If there is only an explanation and no supporting evidence, hold signing and payment and verify the relationship and authority again.','説明だけで根拠がなければ署名・支払いを保留し、関係と権限を再確認します。','설명만 있고 근거가 없으면 서명·지급을 보류하고 관계와 권한을 다시 확인합니다.')}</p></div></div></div></section>

    <section className="ctp-variables" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.variables.eyebrow)}</small><h2>{d.variables.title}</h2><p>{ctUi(locale,d.variables.lead,'lead')}</p></header><div className="ctp-variable-detail">{d.variables.items.map((item,i)=><article key={item.no} className={`is-v${i+1}`}><div className="ctp-variable-title"><span>{item.no}</span><div><h3>{item.title}</h3><p>{ctUi(locale,item.situation,'card')}</p></div></div><div className="ctp-variable-layout"><div className="ctp-variable-check"><small>{ctLabel(locale,'WHAT TO CHECK')}</small>{bulletList(item.check)}</div><div className="ctp-variable-story"><div><small>{ctLabel(locale,'WHY IT MATTERS')}</small><p>{ctUi(locale,item.why,'card')}</p></div><blockquote>{ctUi(locale,item.prevent,'micro')}</blockquote></div></div><div className="ctp-variable-action"><div><small>{ctLabel(locale,'IF YOU FIND IT')}</small><p>{ctUi(locale,item.respond,'action')}</p></div><strong>{item.decision}</strong></div></article>)}</div></div></section>

    <section className="ctp-missed" data-ct-reveal><div className="ct-shell"><small>{ctLabel(locale,d.missed.eyebrow)}</small><h2>{lines(d.missed.title)}</h2><p>{ctUi(locale,d.missed.body,'lead')}</p><div className="ctp-missed-chain">{d.missed.chain.map((x,i)=><article key={x.title}><small>{ctLabel(locale,x.label)}</small><span>{String(i+1).padStart(2,'0')}</span><h3>{x.title}</h3><strong>{x.question}</strong><p>{ctUi(locale,x.check,'card')}</p></article>)}</div><div className="ctp-missed-scenes">{d.missed.scenarios.map(item=><article key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{ctUi(locale,item.body,'card')}</p></div><div><small>{ctLabel(locale,'WHY THIS MATTERS')}</small><strong>{ctUi(locale,item.point,'micro')}</strong></div><div><small>{ctLabel(locale,'ACTION')}</small><p>{ctUi(locale,item.action,'action')}</p></div></article>)}</div><div className="ctp-missed-prevent"><div><small>{ctLabel(locale,'PREVENT')}</small><h3>{localText(locale,'The simplest way to reduce avoidable problems','見落としを減らす最もシンプルな方法','사고를 줄이는 가장 단순한 방법')}</h3>{bulletList(d.missed.prevention)}</div><div><small>{ctLabel(locale,'DECISION')}</small><h3>{localText(locale,'If it differs, respond in this order.','違いがあればこの順序で対応します。','다르면 이렇게 행동합니다.')}</h3>{bulletList(d.missed.decision)}</div></div></div></section>

    <section className="ctp-mistakes" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.mistakes.eyebrow)}</small><h2>{d.mistakes.title}</h2></header><div className="ctp-mistake-detail">{d.mistakes.items.map(item=><article key={item.no}><div className="ctp-mistake-head"><span>{ctLabel(locale,item.no)}</span><h3>{item.title}</h3><p>{ctUi(locale,item.reason,'card')}</p></div><div className="ctp-mistake-flow"><div><small>{ctLabel(locale,'WHAT GOES WRONG')}</small><p>{ctUi(locale,item.problem,'card')}</p></div><div><small>{ctLabel(locale,'PREVENT')}</small><p>{ctUi(locale,item.prevent,'micro')}</p></div><div><small>{ctLabel(locale,'IF DISCOVERED')}</small><p>{ctUi(locale,item.after,'action')}</p></div></div><strong className="ctp-mistake-decision">{item.decision}</strong></article>)}</div></div></section>

    <section className="ctp-method" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.method.eyebrow)}</small><h2>{d.method.title}</h2><p>{ctUi(locale,d.method.lead,'lead')}</p></header><figure className="ctp-editorial-visual is-howto"><img src={CONTRACT_PARTIES_IMAGES.howToCheck} alt={locale==='ko'?'소유자, 신분, 계약 권한, 지급계좌를 순서대로 확인하고 진행 또는 보류를 판단하는 실전 확인 그래픽':locale==='ja'?'所有者・本人・契約権限・支払口座を順番に確認し進行または保留を判断する実務グラフィック':'Practical verification flow for owner, identity, authority and payment account before proceeding or holding'} loading="lazy" decoding="async"/></figure><ol>{d.method.steps.map(step=><li key={step.no}><span className="ctp-how-no">{step.no}</span><div className="ctp-how-body"><h3>{step.title}</h3><div className="ctp-how-path"><div><small>{ctLabel(locale,'LOOK HERE')}</small><p>{ctUi(locale,step.where,'card')}</p></div><div><small>{ctLabel(locale,'COMPARE THIS')}</small><p>{ctUi(locale,step.compare,'micro')}</p></div><div className="is-normal"><small>{ctLabel(locale,'IF MATCHED')}</small><strong>{step.normal}</strong></div><div className="is-different"><small>{ctLabel(locale,'IF NOT')}</small><strong>{ctUi(locale,step.ifDifferent,'micro')}</strong></div></div><div className="ctp-how-action"><small>{ctLabel(locale,'ACTION')}</small>{bulletList(step.actions)}<strong>{ctUi(locale,step.result,'action')}</strong></div></div></li>)}</ol></div></section>

    <section className="ctp-mismatch" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.mismatch.eyebrow)}</small><h2>{d.mismatch.title}</h2></header><div className="ctp-mismatch-examples">{d.mismatch.examples.map(([said,fact,action],i)=><article key={said}><span>0{i+1}</span><div><small>{ctLabel(locale,'SAID')}</small><strong>{said}</strong></div><b>≠</b><div><small>{ctLabel(locale,'FOUND')}</small><strong>{fact}</strong></div><div className="is-action"><small>{ctLabel(locale,'ACTION')}</small><p>{ctUi(locale,action,'action')}</p></div></article>)}</div><div className="ctp-mismatch-process">{d.mismatch.process.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></div></section>

    {d.deepDives.map((deep,i)=><section className={`ctp-deep ctp-deep-${i+1}`} data-ct-reveal key={deep.no}><div className="ct-shell"><header><small>{ctLabel(locale,deep.no)}</small><h2>{deep.title}</h2><p>{deep.intro}</p></header><div className="ctp-deep-sections">{deep.sections.map((section,j)=><article key={section.title}><span>{String(j+1).padStart(2,'0')}</span><div><h3>{section.title}</h3><p>{section.body}</p>{bulletList(section.checks)}</div></article>)}</div><strong className="ctp-deep-takeaway">{deep.action}</strong></div></section>)}

    <section className="ctp-cases" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,'REAL-WORLD CASES')}</small><h2>{localText(locale,'Follow real cases from verification to action.','実例で確認から対応まで追います。','실제 사례로 확인부터 행동까지 따라갑니다.')}</h2></header><div className="ctp-case-detail">{d.cases.map(item=><article key={item.no}><div className="ctp-case-head"><span>{ctLabel(locale,item.no)}</span><h3>{item.title}</h3><p>{ctUi(locale,item.situation,'card')}</p></div><div className="ctp-case-body"><div><small>{ctLabel(locale,'CHECK')}</small>{bulletList(item.check)}</div><div><small>{ctLabel(locale,'FOUND')}</small><p>{ctUi(locale,item.finding,'micro')}</p></div><div><small>{ctLabel(locale,'ACTION')}</small><p>{ctUi(locale,item.action,'action')}</p></div><strong>{item.result}</strong></div></article>)}</div></div></section>

    <section className="ctp-decision" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.decision.eyebrow)}</small><h2>{d.decision.title}</h2></header><div className="ctp-decision-grid">{d.decision.items.map((item,i)=><article key={item.no} className={i===3?'is-review':''}><span>{ctLabel(locale,item.no)}</span><h3>{item.title}</h3><p>{ctUi(locale,item.body,'card')}</p><strong>{item.next}</strong></article>)}</div></div></section>

    <section className="ctp-principle"><div className="ct-shell"><small>{ctLabel(locale,'CORE PRINCIPLE')}</small><h2>{lines(d.principle)}</h2><p>{d.finalChain}</p></div></section>

    <section className="ctp-final-summary" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.finalSummary.eyebrow)}</small><h2>{d.finalSummary.title}</h2><p>{ctUi(locale,d.finalSummary.lead,'lead')}</p></header><div className="ctp-final-grid">{d.finalSummary.items.map(item=><article key={item.no}><span>{ctLabel(locale,item.no)}</span><h3>{item.title}</h3><p>{ctUi(locale,item.body,'card')}</p></article>)}</div><div className="ctp-final-quick"><div><small>{d.finalSummary.quickTitle}</small><div>{d.finalSummary.quick.map((x,i)=><span key={x}>{x}{i<d.finalSummary.quick.length-1&&<b>→</b>}</span>)}</div><strong>{d.finalSummary.question}</strong></div><a href={`${BASE_PATH}/${locale}/contract/property`}><small>{d.finalSummary.nextTitle}</small><strong>{d.finalSummary.nextLabel}</strong><p>{d.finalSummary.nextBody}</p><b>→</b></a></div></div></section>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}


function Journey0206({copy,page,locale,data}){
  const d=data||CONTRACT_0206_V013[page.slug];
  const bullets=(items)=><ul className="ctj-bullets">{items.map(x=><li key={x}>{x}</li>)}</ul>;
  const lines=(text)=>text.split('\n').map((line,i)=><span key={`${line}-${i}`}>{line}</span>);
  const nextMap={property:'payment',payment:'terms',terms:'recheck',recheck:'closing',closing:'checklist'};
  const nextPage=copy.pages.find(x=>x.slug===nextMap[page.slug]);
  return <main className={`contract-page ct-journey ct-journey-${page.slug}`}>
    <section className="ctj-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{ctLabel(locale,d.eyebrow)}</small><h1>{d.title}</h1><h2>{d.question}</h2><p>{ctUi(locale,d.lead,'lead')}</p><figure className="ctj-visual is-hero"><img src={d.images.hero} alt={locale==='ko'?`${d.title} 핵심 요약 그래픽`:locale==='ja'?`${d.title}の核心確認を整理した概要グラフィック`:`Overview graphic for ${d.title}`} loading="eager" decoding="async"/></figure></div></section>

    <section className="ctj-flow" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.flow.eyebrow)}</small><h2>{d.flow.title}</h2><p>{d.flow.lead}</p></header><ol>{d.flow.steps.map(([no,title,body])=><li key={no}><span>{no}</span><strong className={(title==='CONDITION'||title==='OPERATION')?'ctj-bilingual-stack':''}>{ctStackLabel(locale,title)}</strong><p>{ctUi(locale,body,'card')}</p></li>)}</ol></div></section>

    <section className="ctj-normal" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.normal.eyebrow)}</small><h2>{d.normal.title}</h2><p>{ctUi(locale,d.normal.lead,'lead')}</p></header><div className="ctj-chain">{d.normal.chain.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong className={(x==='CONDITION'||x==='OPERATION')?'ctj-bilingual-stack':''}>{ctStackLabel(locale,x)}</strong>{i<d.normal.chain.length-1&&<b>→</b>}</div>)}</div><strong className="ctj-chain-result">{d.normal.result}</strong><figure className="ctj-visual is-support"><img src={d.images.support} alt={locale==='ko'?`${d.title} 실전 비교 요약 그래픽`:locale==='ja'?`${d.title}の実務比較ポイントを整理したグラフィック`:`Practical comparison graphic for ${d.title}`} loading="lazy" decoding="async"/></figure></div></section>

    <section className="ctj-variables" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.variables.eyebrow)}</small><h2>{d.variables.title}</h2><p>{ctUi(locale,d.variables.lead,'lead')}</p></header><div className="ctj-variable-list">{d.variables.items.map((item,i)=><article key={item.title}><div className="ctj-row-head"><span>{String(i+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{ctUi(locale,item.situation,'card')}</p></div></div><div className="ctj-variable-body"><div><small>{ctLabel(locale,'WHAT TO CHECK')}</small>{bullets(item.check)}</div><div><small>{ctLabel(locale,'WHY IT MATTERS')}</small><p>{ctUi(locale,item.why,'card')}</p><small>{ctLabel(locale,'PREVENT')}</small><p>{ctUi(locale,item.prevent,'micro')}</p></div></div><div className="ctj-action"><small>{ctLabel(locale,'IF DISCOVERED')}</small><p>{ctUi(locale,item.respond,'action')}</p><strong>{item.decision}</strong></div></article>)}</div></div></section>

    <section className="ctj-missed" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.missed.eyebrow)}</small><h2>{d.missed.title}</h2><p>{ctUi(locale,d.missed.body,'lead')}</p></header><div className="ctj-missed-list">{d.missed.points.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{ctUi(locale,body,'card')}</p></article>)}</div><aside className="ctj-prevention"><small>{ctLabel(locale,'PREVENT')}</small><h3>{localText(locale,'Prevent these points before they are missed.','見落とす前にこの方法で防ぎます。','놓치기 전에 이렇게 막습니다.')}</h3>{bullets(d.missed.prevention)}</aside></div></section>

    <section className="ctj-method" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.method.eyebrow)}</small><h2>{d.method.title}</h2><p>{ctUi(locale,d.method.lead,'lead')}</p></header><ol>{d.method.steps.map((step,i)=><li key={step.title}><span className="ctj-how-no">{String(i+1).padStart(2,'0')}</span><div className="ctj-how-main"><h3>{step.title}</h3><div className="ctj-how-grid"><div><small>{ctLabel(locale,'LOOK HERE')}</small><p>{ctUi(locale,step.where,'card')}</p></div><div><small>{ctLabel(locale,'COMPARE')}</small><p>{ctUi(locale,step.compare,'micro')}</p></div><div><small>{ctLabel(locale,'NORMAL')}</small><strong>{step.normal}</strong></div><div><small>{ctLabel(locale,'IF DIFFERENT')}</small><strong>{ctUi(locale,step.ifDifferent,'micro')}</strong></div></div><div className="ctj-how-action"><small>{ctLabel(locale,'ACTION')}</small>{bullets(step.actions)}<strong>{ctUi(locale,step.result,'action')}</strong></div></div></li>)}</ol></div></section>

    <section className="ctj-mismatch" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,d.mismatch.eyebrow)}</small><h2>{d.mismatch.title}</h2></header><div className="ctj-mismatch-list">{d.mismatch.examples.map(([said,found,action],i)=><article key={said}><span>{String(i+1).padStart(2,'0')}</span><div><small>{ctLabel(locale,'SAID / EXPECTED')}</small><strong>{said}</strong></div><b>≠</b><div><small>{ctLabel(locale,'FOUND')}</small><strong>{found}</strong></div><div><small>{ctLabel(locale,'ACTION')}</small><p>{ctUi(locale,action,'action')}</p></div></article>)}</div><div className="ctj-process">{d.mismatch.process.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></div></section>

    {d.deepDives.map((deep,idx)=><section className={`ctj-deep ${idx%2?'is-alt':''}`} data-ct-reveal key={deep.no}><div className="ct-shell"><header><small>{ctLabel(locale,deep.no)}</small><h2>{deep.title}</h2><p>{deep.intro}</p></header><div className="ctj-deep-list">{deep.sections.map(([title,body,check],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{ctLabel(locale,title)}</h3><p>{body}</p><strong>{check}</strong></div></article>)}</div><blockquote>{deep.action}</blockquote></div></section>)}

    <section className="ctj-cases" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,'REAL-WORLD CASES')}</small><h2>{localText(locale,'Follow the situation → check → finding → action → result.','状況 → 確認 → 発見 → 対応 → 結果まで追います。','상황 → 확인 → 발견 → 행동 → 결과까지 봅니다.')}</h2></header><div>{d.cases.map(([no,title,check,found,action,result])=><article key={no}><div><span>{ctLabel(locale,no)}</span><h3>{title}</h3></div><dl><dt>{ctLabel(locale,'CHECK')}</dt><dd>{check}</dd><dt>{ctLabel(locale,'FOUND')}</dt><dd>{found}</dd><dt>{ctLabel(locale,'ACTION')}</dt><dd>{ctUi(locale,action,'action')}</dd></dl><strong>{result}</strong></article>)}</div></div></section>

    <section className="ctj-decision" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,'DECISION')}</small><h2>{d.decision.title}</h2></header><div>{d.decision.items.map(([no,title,body,next])=><article key={no}><span>{no}</span><h3>{ctLabel(locale,title)}</h3><p>{ctUi(locale,body,'card')}</p><strong>{ctUi(locale,next,'action')}</strong></article>)}</div></div></section>

    <section className="ctj-principle"><div className="ct-shell"><small>{ctLabel(locale,'CORE PRINCIPLE')}</small><h2>{lines(d.principle)}</h2></div></section>

    <section className="ctj-final" data-ct-reveal><div className="ct-shell"><header><small>{ctLabel(locale,'FINAL SUMMARY')}</small><h2>{d.final.title}</h2><p>{ctUi(locale,d.final.lead,'lead')}</p></header><div className="ctj-final-list">{d.final.items.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{ctLabel(locale,title)}</h3><p>{body}</p></article>)}</div>{nextPage&&<div className="ctj-next"><div><small>{localText(locale,'Final 10-second contract check','契約現場で最後の10秒確認','계약 현장에서 마지막 10초 체크')}</small><strong>{d.final.items.map(x=>ctLabel(locale,x[0])).join('  ›  ')}</strong></div><a href={`${BASE_PATH}/${locale}/contract/${nextPage.slug}`}><small>{localText(locale,'Next step','次の段階','다음 단계')}</small><strong>{nextPage.num} {nextPage.title}</strong><p>{nextPage.question}</p><b>→</b></a></div>}</div></section>

    <p className="ct-notice ct-shell">{copy.notice}</p>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}


function localChain(locale,slug){
  const en={parties:['OWNER','PARTY','AUTHORITY','ACCOUNT','CONTRACT'],property:['LAND','BUILDING','RECORDS','SITE','FACILITIES','TENANCY','CONTRACT'],payment:['PRICE','PAID','ASSUMED','ADJUST','CLOSING','COSTS','CASH'],terms:['FACTS','RISK','RESPONSIBILITY','DEADLINE','VERIFY','IF NOT','TERM'],recheck:['SIGNING','RIGHTS','TENANCY','CONDITION','PROMISES','MONEY','CLOSING'],closing:['MONEY','RIGHTS','DOCUMENTS','HANDOVER','SYNC','TITLE','OPERATION']};
  const ja={parties:['所有者','契約相手','権限','口座','契約'],property:['土地','建物','公的資料','現場','設備','賃貸借','契約書'],payment:['価格','既払額','承継','精算','残代金','費用','必要資金'],terms:['事実','リスク','責任','期限','確認','未履行','契約条件'],recheck:['契約時','権利','賃貸借','現況','約束','金額','決済'],closing:['資金','権利','書類','引渡し','同期','権利移転','運営']};
  return (locale==='ja'?ja:en)[slug]||[];
}

function Checklist07({copy,page,locale}){
  const d=locale==='ko'?CONTRACT_CHECKLIST_V016:CONTRACT_I18N_V035.checklist?.[locale];
  const ui=locale==='en'?{badge:'ESSENTIAL',action:'IF NOT MET',usageFlow:'Recommended sequence',doc1Title:'Contract Essential Checklist',doc1Lead:'18 core checks for deciding whether the transaction should proceed.',doc2Title:'Detailed Contract Checklist',doc2Lead:'Includes all 18 ESSENTIAL checks plus detailed verification for WHO → WHAT → MONEY → TERMS → RECHECK → CLOSE.',continueLabel:'Continued',essentialSubtitle:'Use this version for a fast decision and a final core recheck before closing.',detailSubtitle:'Review core risks and transaction-specific variables in one document.',transitionTitle:'DETAIL already includes all 18 ESSENTIAL checks.',transitionBody:'Use ESSENTIAL for a fast decision and DETAIL for a precise transaction review. You may start directly with DETAIL.',principle:'CORE PRINCIPLE',essentialKicker:'ESSENTIAL CHECKLIST · Core Checks',included:'ESSENTIAL 18 INCLUDED'}:locale==='ja'?{badge:'必須',action:'未達時',usageFlow:'推奨使用順序',doc1Title:'契約必須チェックリスト',doc1Lead:'取引を進めるか判断するための核心18項目です。',doc2Title:'契約詳細チェックリスト',doc2Lead:'ESSENTIAL 18項目をすべて含み、WHO → WHAT → MONEY → TERMS → RECHECK → CLOSEの詳細確認を追加します。',continueLabel:'続き',essentialSubtitle:'迅速判断と決済直前の核心再確認に使用します。',detailSubtitle:'必須核心と取引別の詳細変数を一つの文書で確認します。',transitionTitle:'DETAILには必須18項目もすべて含まれています。',transitionBody:'迅速判断はESSENTIAL、精密確認はDETAILを使います。最初からDETAILで始めても構いません。',principle:'CORE PRINCIPLE · 核心原則',essentialKicker:'ESSENTIAL CHECKLIST · 必須チェックリスト',included:'ESSENTIAL 18項目を含む'}:{badge:'필수',action:'미충족 시 실행',usageFlow:'추천 사용 순서',doc1Title:'계약 필수 체크리스트',doc1Lead:'거래 진행 여부를 판단하는 핵심 18항목입니다. A4 한 장의 사용 가능한 영역을 최대한 채우되, 하나의 체크항목이 페이지 사이에서 잘리지 않도록 문서 단위로 배치합니다.',doc2Title:'계약 상세 체크리스트',doc2Lead:'ESSENTIAL 18개를 모두 포함하고, WHO → WHAT → MONEY → TERMS → RECHECK → CLOSE별 세부 검증항목을 추가한 정밀 점검 문서입니다. 상세판 안의 필수항목은 별도 표식으로 다시 확인할 수 있습니다.',continueLabel:'계속',essentialSubtitle:'필수판은 빠른 거래 판단과 잔금 직전 핵심 재확인에 사용합니다.',detailSubtitle:'필수 핵심과 거래별 세부변수를 한 문서에서 함께 확인합니다.',transitionTitle:'상세판 하나에 필수 18개까지 모두 담았습니다.',transitionBody:'빠르게 판단할 때는 ESSENTIAL, 실제 계약을 정밀하게 검토할 때는 DETAIL을 사용합니다. DETAIL은 필수 18개를 모두 포함한 확장판이므로 처음부터 상세판으로 바로 시작해도 됩니다.',principle:'CORE PRINCIPLE · 핵심 원칙',essentialKicker:'ESSENTIAL CHECKLIST · 필수 체크리스트',included:'ESSENTIAL 18 INCLUDED'};
  const essentialMap={
    '01 WHO · 계약 상대 / 권한':[0,1,2],
    '02 WHAT · 계약 대상 / 현황':[3,4,5],
    '03 MONEY · 가격 / 지급조건':[6,8,9,10],
    '04 TERMS · 계약서 / 특약':[11,12],
    '05 RECHECK · 계약 후 / 잔금 전':[7,13],
    '06 CLOSE · 잔금 / 이전 / 인도':[14,15,16,17]
  };
  const chunkPages=(items,size=9)=>Array.from({length:Math.ceil(items.length/size)},(_,i)=>items.slice(i*size,(i+1)*size));
  const essentialItems=d.essential.map((item,index)=>({...item,index,isEssential:true,group:'ESSENTIAL'}));
  const essentialPages=chunkPages(essentialItems,9);
  const detailItems=d.detailSequence?d.detailSequence.map((item,index)=>({...item,index,group:item.group||'DETAIL'})):Object.entries(d.detailed).flatMap(([group,items],groupIndex)=>[
    ...(essentialMap[group]||[]).map(index=>({...d.essential[index],index,isEssential:true,group,groupIndex})),
    ...items.map((item,detailIndex)=>({...item,isEssential:false,group,groupIndex,detailIndex}))
  ]);
  const detailPages=chunkPages(detailItems,9);
  const CheckRow=({item,index,showEssential=false})=><li className={`ct7-check-row${item.isEssential?' is-essential':''}`}><span className="ct7-box" aria-hidden="true"/><span className="ct7-index">{String(index+1).padStart(2,'0')}</span><div className="ct7-row-copy"><div className="ct7-question-line"><h3>{item.q}</h3>{showEssential&&item.isEssential&&<b className="ct7-essential-badge">{d.labels?.badge||ui.badge}</b>}</div><p><strong>{d.labels?.action||ui.action}</strong>{item.a}</p></div></li>;
  const SheetHeader=({documentNo,kicker,title,subtitle,pageNo,totalPages})=><header className="ct7-sheet-head"><div className="ct7-sheet-brand"><strong>FIX BUILDING</strong><span>CONTRACT CONTROL DOCUMENT</span></div><div className="ct7-sheet-code"><span>DOCUMENT {documentNo}</span><b>PAGE {String(pageNo).padStart(2,'0')} / {String(totalPages).padStart(2,'0')}</b></div><div className="ct7-sheet-title"><small>{kicker}</small><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div></header>;
  const SheetFooter=({documentNo,pageNo,totalPages})=><footer className="ct7-sheet-foot"><span>FIX BUILDING · CONTRACT CHECKLIST</span><span>DOCUMENT {documentNo}</span><b>{String(pageNo).padStart(2,'0')} / {String(totalPages).padStart(2,'0')}</b></footer>;
  let detailRunningIndex=0;
  return <main className="contract-page ct7-page">
    <section className="ct7-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{d.hero.eyebrow}</small><h1>{d.hero.title}</h1><h2>{d.hero.question}</h2><p>{ctUi(locale,d.hero.lead,'lead')}</p></div></section>

    <section className="ct7-intro" data-ct-reveal><div className="ct-shell"><header><small>{d.intro.eyebrow}</small><h2>{d.intro.title}</h2><p>{ctUi(locale,d.intro.body,'lead')}</p></header><figure className="ct7-editorial-visual ct7-why-image"><img src={`${BASE_PATH}/images/contract/building-contract-07-why-checklist.webp`} alt={locale==='en'?'Reviewing core items one by one with a contract checklist':locale==='ja'?'契約チェックリストで核心項目を一つずつ確認する場面':'실제 부동산 계약 검토 과정에서 체크리스트로 핵심 항목을 하나씩 확인하는 장면'} loading="lazy" decoding="async"/></figure><div className="ct7-intro-points">{d.intro.points.map(([t,b],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{ctUi(locale,b,'card')}</p></article>)}</div></div></section>

    <section className="ct7-basis" data-ct-reveal><div className="ct-shell"><header><small>{d.basis.eyebrow}</small><h2>{d.basis.title}</h2></header><div className="ct7-basis-stack"><article><small>{d.basis.essential.label}</small><h3>{d.basis.essential.title}</h3><p>{ctUi(locale,d.basis.essential.body,'lead')}</p><ul>{d.basis.essential.reasons.map(x=><li key={x}>{x}</li>)}</ul></article><article><small>{d.basis.detailed.label}</small><h3>{d.basis.detailed.title}</h3><p>{ctUi(locale,d.basis.detailed.body,'lead')}</p><ul>{d.basis.detailed.reasons.map(x=><li key={x}>{x}</li>)}</ul></article></div></div></section>

    <section className="ct7-usage" data-ct-reveal><div className="ct-shell"><header><small>{d.usage.eyebrow}</small><h2>{d.usage.title}</h2></header><div className="ct7-usage-modes">{d.usage.modes.map(([title,label,body])=><article key={title}><small>{label}</small><h3>{title}</h3><p>{ctUi(locale,body,'card')}</p></article>)}</div><h3 className="ct7-usage-flow-title">{ui.usageFlow}</h3><ol>{d.usage.steps.map(([no,time,body])=><li key={no}><span>{no}</span><strong>{time}</strong><p>{ctUi(locale,body,'card')}</p></li>)}</ol><blockquote>{ctUi(locale,d.usage.note,'lead')}</blockquote><figure className="ct7-editorial-visual ct7-documents-image"><img src={`${BASE_PATH}/images/contract/building-contract-07-essential-detail.webp`} alt={locale==='en'?'Using the ESSENTIAL and DETAIL contract checklists together':locale==='ja'?'ESSENTIALとDETAILの2種類の契約チェックリストを併用する場面':'필수 체크리스트와 상세 체크리스트 두 종류의 고급 A4 계약 점검 문서를 함께 사용하는 장면'} loading="lazy" decoding="async"/></figure></div></section>

    <section className="ct7-document-zone ct7-essential-document" data-ct-reveal><div className="ct-shell"><div className="ct7-document-intro"><small>DOCUMENT 01 · ESSENTIAL CHECKLIST</small><h2>{ui.doc1Title}</h2><p>{ui.doc1Lead}</p><div><span>18 CHECKS</span><span>{essentialPages.length} A4 PAGES</span></div></div><div className="ct7-paper-stack">{essentialPages.map((items,pageIndex)=><article className="ct7-sheet" key={`essential-${pageIndex}`}><SheetHeader documentNo="01" kicker={ui.essentialKicker} title={pageIndex===0?(d.labels?.core||ui.doc1Title):`${ui.doc1Title} · ${ui.continueLabel}`} subtitle={pageIndex===0?ui.essentialSubtitle:null} pageNo={pageIndex+1} totalPages={essentialPages.length}/><ol>{items.map(item=><CheckRow item={item} index={item.index} key={item.q}/>)}</ol><SheetFooter documentNo="01" pageNo={pageIndex+1} totalPages={essentialPages.length}/></article>)}</div></div></section>

    <section className="ct7-transition"><div className="ct-shell"><small>DOCUMENT 02 · DETAIL CHECKLIST</small><h2>{ui.transitionTitle}</h2><p>{ui.transitionBody}</p></div></section>

    <section className="ct7-document-zone ct7-detail-document" data-ct-reveal><div className="ct-shell"><div className="ct7-document-intro"><small>DOCUMENT 02 · DETAIL CHECKLIST</small><h2>{d.labels?.detailTitle||ui.doc2Title}</h2><p>{ui.doc2Lead}</p><div><span>{detailItems.length} CHECKS</span><span>{ui.included}</span><span>{detailPages.length} A4 PAGES</span></div></div><div className="ct7-paper-stack">{detailPages.map((items,pageIndex)=>{const startIndex=detailRunningIndex;detailRunningIndex+=items.length;const groups=[...new Set(items.map(item=>item.group.replace(/^\d+\s+/, '').split(' · ')[0]))].join(' / ');return <article className="ct7-sheet ct7-detail-sheet" key={`detail-${pageIndex}`}><SheetHeader documentNo="02" kicker={`DETAIL CHECKLIST · ${groups}`} title={pageIndex===0?(d.labels?.detailTitle||ui.doc2Title):`${ui.doc2Title} · ${ui.continueLabel}`} subtitle={pageIndex===0?ui.detailSubtitle:null} pageNo={pageIndex+1} totalPages={detailPages.length}/><ol>{items.map((item,i)=><CheckRow item={item} index={startIndex+i} showEssential key={`${item.group}-${item.q}`}/>)}</ol><SheetFooter documentNo="02" pageNo={pageIndex+1} totalPages={detailPages.length}/></article>})}</div></div></section>

    <section className="ct7-principle"><div className="ct-shell"><small>{ui.principle}</small><h2>{d.principle.split('\n').map(x=><span key={x}>{x}</span>)}</h2></div></section>
    <p className="ct-notice ct-shell">{copy.notice}</p>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}


function RedFlags08({copy,page,locale}){
  const d=locale==='ko'?CONTRACT_REDFLAGS_V023:CONTRACT_I18N_V035.redflags?.[locale];
  return <main className="contract-page ct8-page">
    <section className="ct8-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{d.hero.eyebrow}</small><h1>{d.hero.title.split('\n').map(x=><span key={x}>{x}</span>)}</h1><p>{ctUi(locale,d.hero.lead,'lead')}</p></div></section>

    <section className="ct8-content" data-ct-reveal><div className="ct-shell"><header className="ct8-content-intro"><small>{d.content.eyebrow}</small><h2>{d.content.title}</h2><p>{ctUi(locale,d.content.intro,'lead')}</p></header><figure className="ct89-editorial-image"><img src={`${BASE_PATH}/images/contract/building-contract-08-red-flag-scan.webp`} alt={locale==='en'?'Reviewing warning signs by connecting identity, authority, documents and payment flow':locale==='ja'?'本人・権限・書類・資金の流れをつなげて危険サインを確認する場面':'부동산 계약 자료의 신원, 권한, 서류, 지급 흐름을 연결해 위험신호를 검토하는 장면'} loading="lazy" decoding="async"/></figure><div className="ct8-editorial-stack">{d.content.sections.map((section)=><article className="ct8-editorial" key={section.no}><div className="ct8-editorial-meta"><span>{section.no}</span><small>{section.label}</small></div><h3>{section.title}</h3><div className="ct8-editorial-copy">{section.paragraphs.map(p=><p key={p}>{ctUi(locale,p,'card')}</p>)}</div><div className="ct8-editorial-flow">{section.flow.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div></article>)}</div><figure className="ct89-editorial-image ct89-editorial-image-end"><img src={`${BASE_PATH}/images/contract/building-contract-08-proceed-or-hold.webp`} alt={locale==='en'?'Decision flow for proceeding or holding a transaction after verifying parties, documents, authority, rights and terms':locale==='ja'?'当事者・書類・権限・最新の権利状態・契約条件を確認し、取引継続または保留を判断する流れ':'당사자, 서류, 권한, 최신 권리상태, 계약조건을 검증하며 거래 진행 또는 보류를 판단하는 흐름'} loading="lazy" decoding="async"/></figure></div></section>

    <section className="ct8-scan" data-ct-reveal><div className="ct-shell"><header className="ct8-scan-intro"><small>{d.scan?.eyebrow||'RED FLAG SCAN · 위험신호 스캔'}</small><h2>{d.scan?.title||'이상신호가 보이면 바로 검증할 지점을 찾습니다.'}</h2><p>{ctUi(locale,d.scan?.body||'이 영역은 체크박스 문서가 아닙니다. 각 SIGNAL에서 무엇이 이상한지 읽고, WHY와 VERIFY NOW를 따라 실제 거래구조를 다시 확인합니다.','lead')}</p></header><div className="ct8-scan-groups">{d.groups.map((group,gIndex)=><section className="ct8-scan-group" key={group.code}><header><span>{String(gIndex+1).padStart(2,'0')}</span><div><small>{group.code}</small><h3>{group.name||group.ko}</h3></div></header><ol>{group.items.map(([signal,why,action],i)=><li key={signal}><span className="ct8-signal-no">SIGNAL {String(i+1).padStart(2,'0')}</span><h4>{signal}</h4><div className="ct8-signal-detail"><p><strong>{locale==='ja'?'WHY · 理由':'WHY'}</strong>{ctUi(locale,why,'card')}</p><p><strong>{locale==='ja'?'VERIFY NOW · 今すぐ確認':'VERIFY NOW'}</strong>{ctUi(locale,action,'action')}</p></div></li>)}</ol></section>)}</div><section className="ct8-stop"><small>{d.stop.eyebrow}</small><h2>{d.stop.title}</h2><div>{d.stop.levels.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{ctUi(locale,body,'card')}</p></article>)}</div><p className="ct8-stop-note">{ctUi(locale,d.stop.note,'lead')}</p></section></div></section>
    <p className="ct-notice ct-shell">{copy.notice}</p>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}


function Mistakes09({copy,page,locale}){
  const d=locale==='ko'?CONTRACT_MISTAKES_V025:CONTRACT_I18N_V035.mistakes?.[locale];
  return <main className="contract-page ct8-page ct9-page">
    <section className="ct8-hero"><div className="ct-shell"><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{d.hero.eyebrow}</small><h1>{d.hero.title.split('\n').map(x=><span key={x}>{x}</span>)}</h1><p>{ctUi(locale,d.hero.lead,'lead')}</p></div></section>

    <section className="ct8-content" data-ct-reveal><div className="ct-shell"><header className="ct8-content-intro"><small>{d.content.eyebrow}</small><h2>{d.content.title}</h2><p>{ctUi(locale,d.content.intro,'lead')}</p></header><figure className="ct89-editorial-image"><img src={`${BASE_PATH}/images/contract/building-contract-09-skipped-checks.webp`} alt={locale==='en'?'Mistake pattern caused by skipping verbal-agreement documentation, document comparison and rechecking':locale==='ja'?'口頭合意の文書化・資料照合・再確認など重要手順を省略するミスの流れ':'부동산 계약 과정에서 구두합의, 문서대조, 재확인 등 중요한 절차가 생략되는 실수 흐름'} loading="lazy" decoding="async"/></figure><div className="ct8-editorial-stack">{d.content.sections.map((section)=><article className="ct8-editorial" key={section.no}><div className="ct8-editorial-meta"><span>{section.no}</span><small>{section.label}</small></div><h3>{section.title}</h3><div className="ct8-editorial-copy">{section.paragraphs.map(p=><p key={p}>{ctUi(locale,p,'card')}</p>)}</div><div className="ct8-editorial-flow">{section.flow.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div></article>)}</div></div></section>

    <section className="ct8-scan ct9-scan-unified" data-ct-reveal><div className="ct-shell"><header className="ct8-scan-intro"><small>{d.scan?.eyebrow||'MISTAKE SCAN · 계약 실수 점검'}</small><h2>{d.scan?.title||'내가 반복하는 생략부터 찾아냅니다.'}</h2><p>{ctUi(locale,d.scan?.body||d.content.transition?.body,'lead')}</p></header><div className="ct8-scan-groups">{d.groups.map((group,gIndex)=><section className="ct8-scan-group" key={group.code}><header><span>{String(gIndex+1).padStart(2,'0')}</span><div><small>{group.code}</small><h3>{group.name||group.ko}</h3></div></header><ol>{group.items.map(([mistake,why,block],i)=><li key={mistake}><span className="ct8-signal-no">MISTAKE {String(i+1).padStart(2,'0')}</span><h4>{mistake}</h4><div className="ct8-signal-detail"><p><strong>{locale==='ko'?'WHY IT HAPPENS · 왜 생기나':locale==='ja'?'WHY IT HAPPENS · なぜ起こるか':'WHY IT HAPPENS'}</strong>{ctUi(locale,why,'card')}</p><p><strong>{locale==='ko'?'BLOCK IT · 이렇게 차단':locale==='ja'?'BLOCK IT · 防ぐ方法':'BLOCK IT'}</strong>{ctUi(locale,block,'action')}</p></div></li>)}</ol></section>)}</div><figure className="ct89-editorial-image ct89-editorial-image-scan"><img src={`${BASE_PATH}/images/contract/building-contract-09-failure-control-path.webp`} alt={locale==='en'?'Comparison of a skipped-check failure path and a verification-based control path':locale==='ja'?'確認省略による失敗経路と検証中心の管理経路を比較する場面':'같은 부동산 거래에서 확인 생략의 실수 경로와 검증 중심의 통제 경로를 비교한 장면'} loading="lazy" decoding="async"/></figure>
    <section className="ct9-failure ct9-failure-unified"><small>{d.failure.eyebrow}</small><h2>{d.failure.title}</h2><div className="ct9-paths"><article className="is-bad"><small>{d.failure.badLabel}</small>{d.failure.bad.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</article><article className="is-good"><small>{d.failure.goodLabel}</small>{d.failure.good.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</article></div><p>{ctUi(locale,d.failure.note,'lead')}</p></section></div></section>

    <section className="ct9-principle"><div className="ct-shell"><small>{locale==='ko'?'CORE PRINCIPLE · 핵심 원칙':d.principle?.eyebrow||'CORE PRINCIPLE'}</small><h2>{(typeof d.principle==='string'?d.principle:d.principle?.title||'').split('\n').map(x=><span key={x}>{x}</span>)}</h2></div></section>
    <p className="ct-notice ct-shell">{copy.notice}</p>
    <OtherLinks copy={copy} current={page.slug} locale={locale}/>
  </main>;
}

function Detail({copy,page,locale}){
  return <main className="contract-page ct-detail">
    <section className="ct-detail-hero"><div className="ct-shell ct-detail-hero-grid"><div><a className="ct-back" href={`${BASE_PATH}/${locale}/contract`}>{copy.back}</a><small>{page.num} · {page.label}</small><h1>{page.title}</h1><p>{page.question}</p><em>{page.hero}</em></div><CharacterScene type={page.slug}/></div></section>
    <div className="ct-shell ct-detail-content">
      {page.sections.map(([title,body],i)=><section className="ct-detail-block" data-ct-reveal key={title}><header><small>{copy.sections[i]}</small><h2>{title}</h2></header>{i===5?<div className="ct-principle"><small>{copy.principle}</small><strong>{body}</strong></div>:i===4?<aside className="ct-case"><small>{copy.caseLabel}</small><span>{body}</span></aside>:<p>{body}</p>}{i===1&&<SummaryGraphic page={page}/>} {i===3&&['payment','terms','closing'].includes(page.slug)&&<SummaryGraphic page={page}/>}</section>)}
      <DeepDive page={page} locale={locale}/>
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
  if(page&&page.slug==='parties') return <PartiesPrototype copy={copy} page={page} locale={locale} data={buildLocalizedPartiesData(locale,page)}/>;
  if(page&&CONTRACT_0206_V013[page.slug]) return <Journey0206 copy={copy} page={page} locale={locale} data={buildLocalizedJourneyData(locale,page)}/>;
  if(page&&page.slug==='checklist') return <Checklist07 copy={copy} page={page} locale={locale}/>;
  if(page&&page.slug==='red-flags') return <RedFlags08 copy={copy} page={page} locale={locale}/>;
  if(page&&page.slug==='mistakes') return <Mistakes09 copy={copy} page={page} locale={locale}/>;
  if(page) return <Detail copy={copy} page={page} locale={locale}/>;
  return <main className="contract-page ct-main">
    <section className="ct-hero"><div className="ct-shell ct-hero-grid"><div className="ct-hero-copy"><small>{copy.eyebrow}</small><h1>{copy.title}</h1><p>{copy.lead}</p><div className="ct-hero-actions"><a className="is-primary" href="#contract-process">{copy.ctas.flow}<b>→</b></a><a href={`${BASE_PATH}/${locale}/contract/red-flags`}>{copy.ctas.risk}<b>→</b></a><a href={`${BASE_PATH}/${locale}/contract/mistakes`}>{copy.ctas.mistakes}<b>→</b></a></div></div><ContractLock locale={locale}/></div></section>
    <section className="ct-quick" id="contract-process" data-ct-reveal><div className="ct-shell"><header><small>{copy.quick.eyebrow}</small><h2>{copy.quick.title}</h2><p>{copy.quick.lead}</p></header><div className="ct-quick-grid">{copy.pages.slice(0,7).map((p,i)=><a href={`${BASE_PATH}/${locale}/contract/${p.slug}`} key={p.slug} style={{'--quick-i':i}}><span>{p.num}</span><MiniIcon type={p.icon}/><strong>{p.title}</strong><small>{locale==='ko'?koLabel(p.label):p.label}</small></a>)}</div></div></section>
    {(()=>{const home=locale==='ko'?{intro:{eyebrow:'CONTRACT TUTORIAL · 계약 튜토리얼',title:'계약 전에 전체 구조부터 이해합니다.',body:'복잡한 계약용어를 외우기보다 실제 거래가 어떤 순서로 연결되는지 이해하는 것이 먼저입니다. 아래 내용은 건물 계약에서 왜 확인이 필요한지, 무엇을 함께 봐야 하는지, 계약 전에 어떤 기준을 준비해야 하는지를 실전 흐름으로 설명합니다.'},sections:CONTRACT_HOME_TUTORIAL_KO}:CONTRACT_I18N_V035.home?.[locale];return <section className="ct-home-guide"><div className="ct-shell"><header className="ct-home-guide-intro" data-ct-reveal><small>{home.intro.eyebrow}</small><h2>{home.intro.title}</h2><p>{ctUi(locale,home.intro.body,'lead')}</p></header><div className="ct-home-guide-stack">{home.sections.map((section,i)=><ContractTutorialSection section={section} index={i} locale={locale} key={section.eyebrow}/>)}</div></div></section>})()}
    <section className="ct-takeaway" data-ct-reveal><div className="ct-shell"><small>{locale==='ko'?koLabel('CONTRACT STANDARD'):'CONTRACT STANDARD'}</small>{copy.takeaway.map(x=><strong key={x}>{x}</strong>)}</div></section>
  </main>;
}
