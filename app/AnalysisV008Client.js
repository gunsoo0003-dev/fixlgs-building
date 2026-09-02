'use client';

import {useEffect,useMemo,useRef,useState} from 'react';
import {ANALYSIS_AXES_V019,ANALYSIS_TOOLS_V019,ANALYSIS_SUMMARY_V019} from './analysis-v019-data';
import {ANALYSIS_HOME_V039,ANALYSIS_TOOLS_V039,ANALYSIS_AXES_V039} from './analysis-v039-localized';

const BASE_PATH='/building';
const AXIS_IDS=new Set(ANALYSIS_AXES_V019.map(x=>x.id));

const COPY={
  ko:{eyebrow:'FIX BUILDING / ANALYSIS',title:'건물분석',lead:'가격 하나, 수익률 하나만 보지 않습니다. 건물을 여섯 가지 기준으로 나누어 보고 필요한 도구로 확인한 뒤 하나의 판단으로 연결합니다.',tools:'계산하고 확인할 때 사용하는 7가지 도구',learn:'6 ANALYSIS AXES',use:'7 ANALYSIS TOOLS',back:'ANALYSIS HOME',terms:'01 · 기본용어',concept:'02 · 핵심개념',method:'03 · 분석방법',practice:'04 · 실전',related:'05 · 관련 분석도구',select:'이 축으로 들어가기',fix:'FIX ANALYSIS',why:'왜 이렇게 판단했을까?',homeSummary:'6축은 따로 보지만 마지막에는 함께 연결합니다.',summaryTitle:'6축 종합 프레임',summaryLead:'각 축에서 확인한 결과를 한 점수로 합치지 않습니다. 무엇이 강하고, 무엇을 더 확인해야 하는지 상태로 정리합니다.',final:'수익성과 입지는 좋지만, 권리와 운영 조건을 추가 확인한 뒤 가격 조건을 다시 검토합니다.',note:'교육용 분석 가이드이며 특정 물건의 투자·감정평가·법률 판단을 대신하지 않습니다.',next:'다음',analysisMethod:'분석방법',check:'확인할 것',caution:'주의사항',case:'05 · 실제 사례',judgment:'판단',relatedTitle:'필요할 때 이 도구를 사용합니다.',termsTitle:'먼저 이 말들만 알면 됩니다.',simpleMethodTitle:'이유를 이해했다면 실제 순서는 간단합니다.',relatedLabel:'07 · 관련 분석도구',flowAria:'분석 전체 흐름',backToAnalysis:'건물분석으로 돌아가기',otherAnalyses:'다른 분석도 함께 보기'},
  en:{eyebrow:'FIX BUILDING / ANALYSIS',title:'Building Analysis',lead:'Do not rely on one price or one yield. Read the building through six separate axes, verify with practical tools, then connect the findings into one judgment.',tools:'Seven tools for calculation and verification',learn:'6 ANALYSIS AXES',use:'7 ANALYSIS TOOLS',back:'ANALYSIS HOME',terms:'01 · TERMS',concept:'02 · CORE IDEA',method:'03 · METHOD',practice:'04 · PRACTICE',related:'05 · RELATED TOOLS',select:'OPEN THIS AXIS',fix:'FIX ANALYSIS',why:'WHY THIS RESULT?',homeSummary:'Read each axis separately, then connect them.',summaryTitle:'SIX-AXIS FRAME',summaryLead:'Do not collapse the axes into one score. Keep the strong points and the items that need more verification visible.',final:'Review price again after checking rights and operating conditions.',note:'Educational guide only; not investment, appraisal or legal advice.',next:'Next',analysisMethod:'ANALYSIS METHOD',check:'CHECK',caution:'CAUTION',case:'05 · CASE',judgment:'JUDGMENT',relatedTitle:'Use these tools when needed.',termsTitle:'Start with the terms that matter for this axis.',simpleMethodTitle:'Once the reason is clear, the sequence is straightforward.',relatedLabel:'07 · RELATED ANALYSIS TOOLS',flowAria:'analysis flow',backToAnalysis:'Back to Building Analysis',otherAnalyses:'Explore Other Analysis Areas'},
  ja:{eyebrow:'FIX BUILDING / ANALYSIS',title:'建物分析',lead:'価格や利回り一つだけで判断しません。建物を6つの基準に分け、必要なツールで確認し、最後に一つの判断へつなげます。',tools:'計算と確認に使う7つの分析ツール',learn:'6 ANALYSIS AXES',use:'7 ANALYSIS TOOLS',back:'ANALYSIS HOME',terms:'01 · 基本用語',concept:'02 · 核心概念',method:'03 · 分析方法',practice:'04 · 実践',related:'05 · 関連ツール',select:'この軸を見る',fix:'FIX ANALYSIS',why:'なぜこの判断？',homeSummary:'6軸は別々に見て、最後につなげます。',summaryTitle:'6軸総合フレーム',summaryLead:'一つの点数にまとめず、強い条件と追加確認が必要な条件をそのまま残します。',final:'権利と運営条件を追加確認したうえで価格条件を再検討します。',note:'教育用ガイドであり、投資・鑑定・法律判断を代替しません。',next:'次へ',analysisMethod:'分析方法',check:'確認すること',caution:'注意点',case:'05 · 実例',judgment:'判断',relatedTitle:'必要なときにこのツールを使います。',termsTitle:'この分析で使う基本用語から確認します。',simpleMethodTitle:'理由が分かれば、実際の順序はシンプルです。',relatedLabel:'07 · 関連分析ツール',flowAria:'分析の全体フロー',backToAnalysis:'建物分析に戻る',otherAnalyses:'ほかの分析も見る'}
};

function Paragraphs({text,className=''}){
  return <div className={className}>{String(text||'').split(/\n\n+/).filter(Boolean).map((p,i)=><p key={i}>{p}</p>)}</div>;
}


function AnalysisCityGraphic(){
  const windows=(cols,rows,x,y,w,h,gapX=10,gapY=10)=>Array.from({length:cols*rows}).map((_,i)=>{
    const c=i%cols,r=Math.floor(i/cols);
    return <rect key={`${x}-${y}-${i}`} x={x+c*(w+gapX)} y={y+r*(h+gapY)} width={w} height={h} rx="1.5" className="an36-window"/>;
  });
  return <svg className="an36-city" viewBox="0 0 760 650" role="img" aria-label="여러 형태의 건물을 6가지 기준으로 분석하는 인포그래픽">
    <defs>
      <linearGradient id="an36Glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#eaf5ff"/><stop offset="1" stopColor="#9dcaef"/></linearGradient>
      <linearGradient id="an36GlassDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe9fb"/><stop offset="1" stopColor="#6faee0"/></linearGradient>
      <linearGradient id="an36Wall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f9fcff"/><stop offset="1" stopColor="#d9e7ef"/></linearGradient>
      <filter id="an36Shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#4b708c" floodOpacity=".18"/></filter>
    </defs>
    <ellipse className="an36-ground" cx="380" cy="575" rx="300" ry="34"/>
    <g className="an36-buildings" filter="url(#an36Shadow)">
      <g className="an36-bld an36-bld-left">
        <path d="M80 295 L175 275 L175 535 L80 550 Z" className="an36-wall"/>
        <path d="M175 275 L205 292 L205 525 L175 535 Z" className="an36-side"/>
        <rect x="95" y="308" width="62" height="205" rx="3" className="an36-glass"/>
        {windows(3,7,101,318,13,16,6,10)}
        <rect x="110" y="525" width="34" height="23" className="an36-entry"/>
      </g>
      <g className="an36-bld an36-bld-wide">
        <path d="M175 205 Q190 178 220 174 H330 Q350 176 362 197 V535 H175 Z" className="an36-wall"/>
        <rect x="198" y="218" width="138" height="280" rx="6" className="an36-glass"/>
        <path d="M191 218 Q205 193 226 190 H320 Q339 193 348 213" className="an36-cap"/>
        {windows(5,8,207,232,18,18,7,11)}
        <rect x="248" y="505" width="48" height="31" className="an36-entry"/>
      </g>
      <g className="an36-bld an36-bld-center">
        <path d="M320 125 L430 125 L446 535 L310 535 Z" className="an36-wall"/>
        <rect x="336" y="145" width="80" height="350" rx="4" className="an36-glass-dark"/>
        <rect x="361" y="82" width="34" height="43" rx="3" className="an36-crown"/>
        <rect x="371" y="57" width="14" height="25" className="an36-crown"/>
        {windows(4,11,343,156,12,15,7,10)}
        <rect x="350" y="503" width="54" height="32" className="an36-entry"/>
      </g>
      <g className="an36-bld an36-bld-mid">
        <path d="M420 220 L515 205 L515 535 L420 535 Z" className="an36-wall"/>
        <path d="M515 205 L548 224 L548 526 L515 535 Z" className="an36-side"/>
        <rect x="438" y="237" width="60" height="260" rx="3" className="an36-glass"/>
        {windows(3,9,444,248,13,15,7,10)}
        <rect x="454" y="505" width="35" height="30" className="an36-entry"/>
      </g>
      <g className="an36-bld an36-bld-right">
        <path d="M520 155 L620 142 L620 535 L520 535 Z" className="an36-wall"/>
        <path d="M620 142 L654 162 L654 522 L620 535 Z" className="an36-side"/>
        <rect x="538" y="174" width="64" height="325" rx="4" className="an36-glass-dark"/>
        <path d="M530 155 L620 142 L634 151" className="an36-cap"/>
        {windows(3,10,545,185,13,16,7,10)}
        <rect x="554" y="505" width="36" height="30" className="an36-entry"/>
      </g>
    </g>
    <g className="an36-analysis-lines">
      <path d="M105 188 C205 150 260 145 334 164" className="an36-flow an36-flow-price"/>
      <path d="M650 236 C588 233 555 247 509 273" className="an36-flow an36-flow-income"/>
      <path d="M666 383 C585 369 551 354 512 341" className="an36-flow an36-flow-rights"/>
      <path d="M589 544 C536 508 498 491 454 468" className="an36-flow an36-flow-building"/>
      <path d="M145 538 C206 509 246 486 292 455" className="an36-flow an36-flow-location"/>
      <path d="M86 391 C167 382 223 365 305 340" className="an36-flow an36-flow-operation"/>
    </g>
    <g className="an36-data-dots">{Array.from({length:18}).map((_,i)=><circle key={i} cx={110+(i*31)%535} cy={164+(i*47)%340} r={i%4===0?4:2.4} className={`an36-dot d${i%6}`}/>)}</g>
    <text x="380" y="615" textAnchor="middle" className="an36-caption">6 AXES / BUILDING ANALYSIS</text>
  </svg>;
}

function Graphic({axis,locale='ko'}){
  const gtxt=locale==='en'?{target:'Subject price',sameYield:'Same yield',incoming:'Money coming in',registry:'Current registry',transaction:'Transaction',visible:'Visible today'}:locale==='ja'?{target:'対象価格',sameYield:'同じ利回り',incoming:'入ってくるお金',registry:'現在の登記',transaction:'取引過程',visible:'今見えているもの'}:{target:'분석대상 가격',sameYield:'같은 수익률',incoming:'들어오는 돈',registry:'현재 등기',transaction:'매매 과정',visible:'지금 보이는 값'};
  const v=axis.visual;
  if(v.type==='priceReasons') return <div className="an19-graphic an19-price-reasons" aria-label="가격이 만들어지는 조건"><div className="an19-price-number"><small>{gtxt.target}</small><strong>{v.price}</strong></div><div className="an19-price-arrow">↓</div><div className="an19-price-factors">{v.factors.map(x=><span key={x}>{x}</span>)}</div><div className="an19-price-arrow">↓</div><p>{v.result}</p></div>;
  if(v.type==='bars'){
    const max=Math.max(...v.items.map(x=>x[1]));
    return <div className="an19-graphic an19-bars" aria-label="가격 비교"><div className="an19-zero">0</div>{v.items.map(([name,value])=><div className={name==='분석대상'?'is-target':''} key={name}><span>{name}</span><i><b style={{width:`${Math.max(12,value/max*100)}%`}} /></i><strong>{value}{v.unit}</strong></div>)}</div>;
  }
  if(v.type==='flow') return <div className="an19-graphic an19-money-flow">{v.items.map(([a,b],i)=><div key={a} className={i===v.items.length-1?'is-result':''}><span>{a}</span><b>{b}</b>{i<v.items.length-1&&<i>↓</i>}</div>)}</div>;
  if(v.type==='incomeCore') return <div className="an19-graphic an28-income-core" aria-label="임대수입에서 비용을 반영해 실제 남는 돈을 확인하는 구조"><div className="an28-income-core-top"><small>{gtxt.incoming}</small><strong>{v.top}</strong></div><div className="an28-income-core-arrow">↓</div><div className="an28-income-core-deductions">{v.deductions.map(x=><span key={x}>− {x}</span>)}</div><div className="an28-income-core-arrow">↓</div><p>{v.result}</p></div>;
  if(v.type==='rightsCore') return <div className="an19-graphic an29-rights-core" aria-label="현재 권리가 거래 후 상태로 이어지는 구조"><div className="an29-core-start"><small>{gtxt.registry}</small><div>{v.current.map(x=><span key={x}>{x}</span>)}</div></div><i>↓</i><div className="an29-core-process"><small>{gtxt.transaction}</small><div>{v.process.map(x=><span key={x}>{x}</span>)}</div></div><i>↓</i><strong>{v.result}</strong></div>;
  if(v.type==='buildingCore') return <div className="an19-graphic an29-building-core" aria-label="매입가격과 미래 비용이 실제 건물 부담을 만드는 구조"><div className="an29-building-price"><small>{gtxt.visible}</small><strong>{v.price}</strong></div><b>＋</b><div className="an29-building-costs">{v.costs.map(x=><span key={x}>{x}</span>)}</div><i>↓</i><p>{v.result}</p></div>;
  if(v.type==='locationCore') return <div className="an19-graphic an29-location-core" aria-label="사람이 많은 것과 건물 수요가 다른 구조"><div className="an29-location-contrast"><strong>{v.left}</strong><b>≠</b><strong>{v.right}</strong></div><div className="an29-location-path">{v.path.map((x,i)=><div key={x}><span>{x}</span>{i<v.path.length-1&&<i>→</i>}</div>)}</div></div>;
  if(v.type==='operationCore') return <div className="an19-graphic an29-operation-core" aria-label="같은 수익률이라도 운영부담이 다른 구조"><div className="an29-op-yield"><small>{gtxt.sameYield}</small><strong>{v.yield}</strong></div><div className="an29-op-compare"><section><b>A</b>{v.a.map(x=><span key={x}>{x}</span>)}</section><section><b>B</b>{v.b.map(x=><span key={x}>{x}</span>)}</section></div><p>{v.result}</p></div>;
  if(v.type==='deed') return <div className="an19-graphic an19-deed"><div className="an19-deed-head">등기부등본</div>{v.items.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>;
  if(v.type==='building') return <div className="an19-graphic an19-building-graphic"><div className="an19-building-shape"><span>BUILDING</span></div><div>{v.items.map(([a,b])=><p key={a}><strong>{a}</strong><span>{b}</span></p>)}</div></div>;
  if(v.type==='location') return <div className="an19-graphic an19-location-graphic"><div className="an19-location-core">대상 건물</div>{v.items.map((x,i)=><div key={x} className={`ring r${i+1}`}><span>{x}</span></div>)}</div>;
  if(v.type==='operation') return <div className="an19-graphic an19-operation-flow">{v.items.map(([a],i)=><div key={a}><span>{String(i+1).padStart(2,'0')}</span><strong>{a}</strong>{i<v.items.length-1&&<i>→</i>}</div>)}</div>;
  return null;
}


function MethodGraphic({graphic}){
  if(!graphic) return null;
  if(graphic.type==='anchor') return <div className="an23-method-graphic an23-g-anchor" aria-label="호가는 판단의 출발점"><span>제시가격</span><i>→</i><strong>기준점</strong><i>→</i><b>판단 보류</b></div>;
  if(graphic.type==='comparable') return <div className="an23-method-graphic an23-g-comparable" aria-label="비교가능성 확인"><div className="an23-g-core">비교가능성</div><div className="an23-g-tags">{graphic.items.map(x=><span key={x}>{x}</span>)}</div><p>조건이 비슷할수록 가격 차이를 해석하기 쉽습니다.</p></div>;
  if(graphic.type==='unit') return <div className="an23-method-graphic an23-g-unit" aria-label="총가격과 단위가격 비교"><div><small>전체 금액</small><strong>총가격</strong></div><i>↔</i><div><small>규모 차이 보정</small><strong>단위가격</strong></div><p>두 숫자를 함께 보고 크기의 영향을 분리합니다.</p></div>;
  if(graphic.type==='causes') return <div className="an23-method-graphic an23-g-causes" aria-label="가격 차이의 원인"><div className="an23-g-center">가격 차이</div><div className="an23-g-cause-tags">{graphic.items.map(x=><span key={x}>{x}</span>)}</div><p>차이의 크기보다 차이를 만든 이유를 찾습니다.</p></div>;
  if(graphic.type==='premium') return <div className="an23-method-graphic an23-g-premium" aria-label="가격 프리미엄 근거"><div><small>가격을 지지</small><strong>우위 조건</strong><span>입지 · 임대 · 상태 · 활용성</span></div><div className="an23-g-premium-center">프리미엄</div><div><small>가격 부담</small><strong>근거 부족</strong><span>높은 가격을 설명할 장점 부족</span></div></div>;
  if(graphic.type==='cross') return <div className="an23-method-graphic an23-g-cross" aria-label="가격과 수익 교차검증"><div><small>PRICE</small><strong>가격 수준</strong></div><div className="an23-g-cross-center"><span>교차검증</span><b>같은 방향인가?</b></div><div><small>INCOME</small><strong>실제 운영수익</strong></div></div>;
  if(graphic.type==='decision') return <div className="an23-method-graphic an23-g-decision" aria-label="가격축 종합 판단">{graphic.items.map(x=><span key={x}>{x}</span>)}<i>↓</i><strong>PRICE 판단</strong></div>;
  if(graphic.type==='incomeContract') return <div className="an23-method-graphic an28-g-income-contract" aria-label="계약상 임대수입 구조"><div><span>01호</span><b>월세</b></div><div><span>02호</span><b>월세</b></div><div><span>03호</span><b>월세</b></div><i>↓</i><strong>계약상 임대수입</strong></div>;
  if(graphic.type==='incomeReceived') return <div className="an23-method-graphic an28-g-income-received" aria-label="계약상 수입과 실제 입금 비교"><div><small>받기로 한 돈</small><strong>계약상 수입</strong></div><i>→</i><div className="is-gap"><small>연체 · 미수 · 면제</small><strong>차이 확인</strong></div><i>→</i><div><small>실제로 받은 돈</small><strong>실제 수입</strong></div></div>;
  if(graphic.type==='incomeVacancy') return <div className="an23-method-graphic an28-g-income-vacancy" aria-label="공실 기간이 수익을 줄이는 구조"><small>12개월 임대 흐름</small><div className="an28-months">{['임대','임대','임대','공실','공실','임대','임대','임대','임대','임대','임대','임대'].map((x,i)=><span className={x==='공실'?'is-vacant':''} key={i}>{x}</span>)}</div><p>비어 있는 기간만큼 예정수입이 실제 수입에서 빠집니다.</p></div>;
  if(graphic.type==='incomeOpex') return <div className="an23-method-graphic an28-g-income-opex" aria-label="소유자 운영비 구조"><strong>실제 임대수입</strong><i>↓</i><div>{['공용전기','보험','청소','승강기','시설관리'].map(x=><span key={x}>− {x}</span>)}</div><i>↓</i><b>운영 후 남는 돈</b></div>;
  if(graphic.type==='incomeMaintenance') return <div className="an23-method-graphic an28-g-income-maintenance" aria-label="반복 유지비와 일회성 공사 구분"><div><small>반복비용</small><strong>점검 · 소모품 · 작은 수선</strong><span>운영수익에 반영</span></div><div><small>큰 일회성 비용</small><strong>대수선 · 대규모 교체</strong><span>별도 자본지출로 구분</span></div></div>;
  if(graphic.type==='incomeNet') return <div className="an23-method-graphic an28-g-income-net" aria-label="실제 운영수익 계산 흐름"><span>실제 수입</span><i>−</i><span>공실</span><i>−</i><span>운영비</span><i>−</i><span>반복비용</span><i>=</i><strong>운영수익</strong></div>;
  if(graphic.type==='incomeStability') return <div className="an23-method-graphic an28-g-income-stability" aria-label="현재 수익의 지속성 확인"><div><small>지금</small><strong>현재 수익</strong></div><i>→</i><div className="an28-stability-check"><span>임차 안정성</span><span>공실 반복</span><span>계약 만료</span><span>비용 변화</span></div><i>→</i><div><small>앞으로</small><strong>지속 가능한가?</strong></div></div>;
  if(graphic.type==='rightsOwner') return <div className="an23-method-graphic an29-rights-owner"><span>등기상 소유자</span><i>↔</i><span>매도인</span><strong>권한 일치 확인</strong></div>;
  if(graphic.type==='rightsHistory') return <div className="an23-method-graphic an29-rights-history"><div>{['A','B','C','현재'].map((x,i)=><span key={x}>{x}{i<3&&<i>→</i>}</span>)}</div><p>소유권 변동과 현재 제한기록을 시간순으로 확인</p></div>;
  if(graphic.type==='rightsMortgage') return <div className="an23-method-graphic an29-rights-mortgage"><div className="an29-building-icon">건물</div><div><span>근저당권자</span><span>설정일</span><span>채권최고액</span><span>순위</span></div><strong>담보관계</strong></div>;
  if(graphic.type==='rightsDebt') return <div className="an23-method-graphic an29-rights-debt"><div><small>등기부</small><strong>채권최고액</strong></div><b>≠</b><div><small>별도 확인</small><strong>실제 채무잔액</strong></div></div>;
  if(graphic.type==='rightsRestriction') return <div className="an23-method-graphic an29-rights-restrict"><span>압류 · 가압류</span><i>→</i><span>해소조건</span><i>→</i><strong>거래 가능 경로</strong></div>;
  if(graphic.type==='rightsSpecial') return <div className="an23-method-graphic an29-rights-special"><div><strong>전세권</strong><span>사용 · 점유 영향</span></div><div><strong>지상권</strong><span>토지 이용 영향</span></div><p>범위 · 기간 · 거래 후 존속 여부 확인</p></div>;
  if(graphic.type==='rightsSettlement') return <div className="an23-method-graphic an29-rights-settlement"><span>현재 권리</span><i>→</i><div><b>말소</b><b>승계</b><b>추가확인</b></div><i>→</i><strong>잔금 후 상태</strong></div>;
  if(graphic.type==='buildingDoc') return <div className="an23-method-graphic an29-building-doc"><div><small>서류</small><strong>건축물대장</strong></div><b>↔</b><div><small>현장</small><strong>실제 건물</strong></div><p>기본현황 일치 확인</p></div>;
  if(graphic.type==='buildingUse') return <div className="an23-method-graphic an29-building-use"><div className="an29-floor">3F <span>실제 사용</span></div><div className="an29-floor">2F <span>실제 사용</span></div><div className="an29-floor">1F <span>실제 사용</span></div><strong>용도 · 면적 · 구조 대조</strong></div>;
  if(graphic.type==='buildingHistory') return <div className="an23-method-graphic an29-building-history"><div>{['준공','수선','교체','현재'].map((x,i)=><span key={x}>{x}{i<3&&<i>→</i>}</span>)}</div><p>연식보다 관리가 이어진 흐름을 확인</p></div>;
  if(graphic.type==='buildingSystems') return <div className="an23-method-graphic an29-building-systems"><div className="an29-building-icon">BUILDING</div><div>{['방수','외벽','전기','배관','승강기','냉난방'].map(x=><span key={x}>{x}</span>)}</div></div>;
  if(graphic.type==='buildingViolation') return <div className="an23-method-graphic an29-building-violation"><span>대장상 상태</span><i>↔</i><span>실제 사용</span><strong>차이 발견 → 정비 확인</strong></div>;
  if(graphic.type==='buildingTimeline') return <div className="an23-method-graphic an29-building-timeline"><div><small>즉시</small><strong>지금 조치</strong></div><i>→</i><div><small>1~3년</small><strong>예상 교체</strong></div><i>→</i><div><small>장기</small><strong>관찰</strong></div></div>;
  if(graphic.type==='buildingCost') return <div className="an23-method-graphic an29-building-cost"><span>매입가격</span><i>＋</i><span>즉시비용</span><i>＋</i><span>중기비용</span><i>＋</i><span>법적정비</span><i>=</i><strong>실제 부담</strong></div>;
  if(graphic.type==='locationDemand') return <div className="an23-method-graphic an29-location-demand"><div>{['주거','직장','학교','병원','방문'].map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>주변 수요의 종류</strong></div>;
  if(graphic.type==='locationAccess') return <div className="an23-method-graphic an29-location-access"><div>{['도보','대중교통','차량'].map(x=><span key={x}>{x}</span>)}</div><i>→</i><strong>대상 건물</strong><p>실제 이동경로 확인</p></div>;
  if(graphic.type==='locationBack') return <div className="an23-method-graphic an29-location-back"><div className="an29-location-target">대상 건물</div>{['주거','직장','학교','병원'].map(x=><span key={x}>{x}</span>)}</div>;
  if(graphic.type==='locationAttract') return <div className="an23-method-graphic an29-location-attract"><div>{['역','병원','학교','쇼핑'].map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>누가 · 왜 오는가</strong></div>;
  if(graphic.type==='locationCompete') return <div className="an23-method-graphic an29-location-compete"><strong>대상</strong><div>{['경쟁 A','경쟁 B','경쟁 C'].map(x=><span key={x}>{x}</span>)}</div><p>같은 수요의 선택지가 얼마나 많은가</p></div>;
  if(graphic.type==='locationMarket') return <div className="an23-method-graphic an29-location-market"><div><small>공실</small><strong>얼마나 비는가</strong></div><b>＋</b><div><small>임대료</small><strong>실제로 받아지는가</strong></div><p>시장 수요 강도 확인</p></div>;
  if(graphic.type==='locationSustain') return <div className="an23-method-graphic an29-location-sustain"><span>현재 수요</span><i>→</i><div><b>구조적</b><b>일시적</b></div><i>→</i><strong>계속 존재할까?</strong></div>;
  if(graphic.type==='operationTenant') return <div className="an23-method-graphic an29-operation-tenant"><div>{['장기','단기','핵심 임차인','다수 임차인'].map(x=><span key={x}>{x}</span>)}</div><strong>임차인 구성 → 관리빈도</strong></div>;
  if(graphic.type==='operationExpiry') return <div className="an23-method-graphic an29-operation-expiry"><div className="an29-quarter"><span>Q1</span><b>●</b><span>Q2</span><b>●●●</b><span>Q3</span><b>●</b><span>Q4</span><b>●</b></div><p>계약만료가 한 시기에 몰리는지 확인</p></div>;
  if(graphic.type==='operationVacancy') return <div className="an23-method-graphic an29-operation-vacancy"><span>임대</span><i>→</i><b>공실</b><i>→</i><span>재임대</span><i>→</i><b>공실</b><p>반복되는 모집·교체 업무</p></div>;
  if(graphic.type==='operationIssues') return <div className="an23-method-graphic an29-operation-issues"><span>연체</span><span>민원</span><i>↓</i><strong>관리개입 증가</strong></div>;
  if(graphic.type==='operationFacilities') return <div className="an23-method-graphic an29-operation-facilities"><div>{['승강기','소방','전기','주차','공용설비'].map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>관리범위</strong></div>;
  if(graphic.type==='operationIntervention') return <div className="an23-method-graphic an29-operation-intervention"><div>{['임차교체','민원','수선','업체관리'].map(x=><span key={x}>{x}</span>)}</div><i>→</i><strong>사람의 시간 + 위탁비용</strong></div>;
  if(graphic.type==='operationBurden') return <div className="an23-method-graphic an29-operation-burden"><div>{['임차 안정성','공실 반복','민원·연체','시설 복잡도'].map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>운영부담</strong></div>;
  return null;
}


function PriceCaseGraphic({graphic,code='PRICE',locale='ko'}){
  const ct=locale==='en'?{yield:'Yield',relative:'Relative to price',aria:'Summary of judgment evidence',merge:'Evidence combined',incomeAria:'How income is reduced to what actually remains'}:locale==='ja'?{yield:'利回り',relative:'価格比',aria:'判断根拠の要約',merge:'根拠を総合',incomeAria:'収入から実際に残る金額までの流れ'}:{yield:'수익률',relative:'가격 대비',aria:'판단 근거 요약',merge:'근거 종합',incomeAria:'수익이 실제로 남는 과정'};
  if(!graphic) return null;
  if(graphic.type==='rightsProcess') return <div className="an24-case-graphic an29-rights-report-graphic"><small>{code} REPORT</small><h3>{graphic.title}</h3><div className="an29-report-current">{graphic.current.map(x=><span key={x}>{x}</span>)}</div><i>↓</i><div className="an29-report-actions">{graphic.actions.map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>{graphic.result}</strong></div>;
  if(graphic.type==='buildingHiddenCost') return <div className="an24-case-graphic an29-building-report-graphic"><small>{code} REPORT</small><h3>{graphic.title}</h3><strong className="an29-report-price">{graphic.price}</strong><i>＋</i><div>{graphic.layers.map(x=><span key={x}>{x}</span>)}</div><i>↓</i><b>{graphic.result}</b></div>;
  if(graphic.type==='locationConversion') return <div className="an24-case-graphic an29-location-report-graphic"><small>{code} REPORT</small><h3>{graphic.title}</h3><div>{graphic.stages.map(([a,b],i)=><section key={a}><span>{a}</span><strong>{b}</strong>{i<graphic.stages.length-1&&<i>↓</i>}</section>)}</div><b>{graphic.result}</b></div>;
  if(graphic.type==='operationCompare') return <div className="an24-case-graphic an29-operation-report-graphic"><small>{code} REPORT</small><h3>{graphic.title}</h3><div className="an29-op-report-yield">{ct.yield} <strong>{graphic.yield}</strong></div><div className="an29-op-report-compare"><section><b>{graphic.a.label}</b>{graphic.a.items.map(x=><span key={x}>{x}</span>)}<strong>{graphic.a.result}</strong></section><section><b>{graphic.b.label}</b>{graphic.b.items.map(x=><span key={x}>{x}</span>)}<strong>{graphic.b.result}</strong></section></div></div>;
  if(graphic.type==='incomeWaterfall') return <div className="an24-case-graphic an28-income-waterfall" aria-label={ct.incomeAria}><small>{code} REPORT</small><h3>{graphic.title}</h3><div className="an28-income-waterfall-stages">{graphic.stages.map(([label,value],i)=><div key={label}><small>{label}</small><strong>{value}</strong>{i<graphic.stages.length-1&&<i>↓</i>}</div>)}</div><div className="an28-income-yield"><span>{ct.relative}</span><strong>{graphic.yield}</strong></div></div>;
  return <div className="an24-case-graphic" aria-label={ct.aria}><small>{code} REPORT</small><h3>{graphic.title}</h3><div className="an24-case-inputs">{graphic.inputs.map(([label,state])=><div key={label}><span>{label}</span><strong>{state}</strong></div>)}</div><div className="an24-case-merge"><i>↓</i><span>{ct.merge}</span><i>↓</i></div><strong className="an24-case-result">{graphic.result}</strong></div>;
}

function PriceCaseReport({practice,axisCode='PRICE',locale='ko'}){
  const c=locale==='en'?{case:'05 · CASE',judgment:'JUDGMENT'}:locale==='ja'?{case:'05 · 実例',judgment:'判断'}:{case:'05 · 실제 사례',judgment:'판단'};
  const code=practice.reportCode||axisCode;
  return <section className={`an19-block an19-practice an24-case-report an29-case-${code.toLowerCase()} ${code==='INCOME'?'an28-income-report':''}`}><header><small>{c.case}</small><h2>{practice.title}</h2><p>{practice.subtitle}</p></header><div className="an24-case-subject"><small>{practice.subject.label}</small><strong>{practice.subject.price}</strong><span>{practice.subject.note}</span></div><div className="an24-case-snapshot">{practice.snapshot.map(([label,value,note])=><div key={label}><small>{label}</small><strong>{value}</strong><span>{note}</span></div>)}</div><div className="an24-case-report-list">{practice.report.map((item,i)=><article key={item.label}><div className="an24-case-report-index">{String(i+1).padStart(2,'0')}</div><div><small>{item.label}</small><h3>{item.state}</h3><p>{item.body}</p></div></article>)}</div><PriceCaseGraphic graphic={practice.graphic} code={code} locale={locale}/><div className="an24-case-conclusion"><small>{code} {c.judgment}</small><h3>{practice.conclusion.state}</h3><p>{practice.conclusion.body}</p><div>{practice.conclusion.note}</div></div></section>;
}

function PricePrincipleGraphic({graphic,locale='ko'}){
  const merge=locale==='en'?'Bring the evidence together':locale==='ja'?'根拠を一か所に集める':'근거를 한곳에 모아';
  if(!graphic) return null;
  if(graphic.type==='incomeDepth') return <div className="an25-principle-graphic an29-principle-income"><div>{graphic.stages.map((x,i)=><span key={x}>{x}{i<graphic.stages.length-1&&<i>↓</i>}</span>)}</div><strong>{graphic.question}</strong></div>;
  if(graphic.type==='rightsJourney') return <div className="an25-principle-graphic an29-principle-journey"><div>{graphic.stages.map((x,i)=><span key={x}>{x}{i<graphic.stages.length-1&&<i>→</i>}</span>)}</div><strong>{graphic.question}</strong></div>;
  if(graphic.type==='buildingFuture') return <div className="an25-principle-graphic an29-principle-future"><div>{graphic.stages.map((x,i)=><span key={x}>{x}{i<graphic.stages.length-1&&<i>→</i>}</span>)}</div><strong>{graphic.question}</strong></div>;
  if(graphic.type==='locationDemandFlow') return <div className="an25-principle-graphic an29-principle-location"><div>{graphic.stages.map((x,i)=><span key={x}>{x}{i<graphic.stages.length-1&&<i>→</i>}</span>)}</div><strong>{graphic.question}</strong></div>;
  if(graphic.type==='operationBurdenSummary') return <div className="an25-principle-graphic an29-principle-operation"><div className="an29-principle-op-top">{graphic.top}</div><i>↓</i><div>{graphic.inputs.map(x=><span key={x}>{x}</span>)}</div><i>↓</i><strong>{graphic.question}</strong></div>;
  return <div className="an25-principle-graphic" aria-label="분석 핵심 판단 구조"><div className="an25-principle-inputs">{graphic.inputs.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div><div className="an25-principle-merge"><i>↓</i><span>{merge}</span><i>↓</i></div><strong className="an25-principle-question">{graphic.question}</strong></div>;
}

function PriceSummary({summary,locale='ko'}){
  return <section className="an19-block an25-price-summary"><header><small>{summary.eyebrow}</small><h2>{summary.title}</h2><p>{summary.lead}</p></header><div className="an25-principle-layout"><div className="an25-principle-pillars">{summary.pillars.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div><PricePrincipleGraphic graphic={summary.graphic} locale={locale}/></div><div className="an25-principle-contrast">{summary.contrast.map(([label,text],i)=><div className={i===1?'is-key':''} key={label}><small>{label}</small><strong>{text}</strong></div>)}</div><blockquote className="an25-principle-final">{summary.principle}</blockquote><p className="an25-principle-next"><span>{summary.nextLabel||'NEXT · INCOME'}</span>{summary.next}</p></section>;
}

function Home({locale,onOpen}){
  const t=COPY[locale]||COPY.ko;
  const toolsRef=useRef(null);
  const rootRef=useRef(null);
  const [focus,setFocus]=useState('all');
  const ko=locale==='ko';
  const h=ANALYSIS_HOME_V039[locale]||null;
  const localizedAxes=ANALYSIS_AXES_V039[locale]||ANALYSIS_AXES_V019;
  const localizedTools=ANALYSIS_TOOLS_V039[locale]||ANALYSIS_TOOLS_V019;
  const categoryCopy={
    price:ko?'이 가격은 설명되는가':'Can this price be explained?',
    income:ko?'실제로 얼마가 남는가':'What actually remains?',
    rights:ko?'거래 후 무엇이 남는가':'What remains after the transaction?',
    building:ko?'앞으로 무엇에 돈이 들어가는가':'What will require future spending?',
    location:ko?'필요한 수요가 계속 존재하는가':'Will the needed demand persist?',
    operation:ko?'이 수익을 유지하려면 얼마나 손이 가는가':'How much management does this income require?'
  };
  const focusGuide=ko?[
    ['PRICE','가격','가격을 보자마자 싸다·비싸다를 결정하지 말고, 먼저 비교할 거래와 조건 차이를 적어 둡니다.'],
    ['INCOME','수익','월세 합계만 적지 말고 실제 입금, 공실, 소유자 부담비용을 따로 적어 남는 돈을 확인합니다.'],
    ['RIGHTS','권리','권리 이름만 체크하지 말고 잔금 전 말소되는지, 승계되는지, 추가 확인이 필요한지 구분합니다.'],
    ['BUILDING','건물','준공연도보다 지금 손볼 곳과 가까운 시기에 교체할 설비를 찾아 예상 부담으로 바꿔 봅니다.'],
    ['LOCATION','입지','사람 수보다 이 공간을 실제로 필요로 하는 수요가 어디서 오고 얼마나 지속되는지 확인합니다.'],
    ['OPERATION','운영','현재 수익보다 그 수익을 유지하기 위해 반복해서 해야 할 관리가 무엇인지 적어 봅니다.']
  ]:h.focusGuide;
  const prep=ko?[
    ['매매정보','매매가격 · 면적 · 토지와 건물의 기본정보'],
    ['임대정보','호실별 월세 · 보증금 · 공실 · 계약상태'],
    ['권리정보','등기부등본과 거래 과정에서 확인할 권리자료'],
    ['건물정보','건축물대장 · 준공연도 · 용도 · 주요 설비와 수선이력'],
    ['입지정보','주변 임대료 · 공실 · 배후수요 · 경쟁건물'],
    ['운영정보','관리비 · 소유자 부담비용 · 연체 · 민원 · 관리이력']
  ]:h.prep;
  const distinctions=ko?[
    ['매도희망가격','적정가격','제시된 가격은 출발점입니다. 비교 가능한 거래와 조건 차이가 있어야 가격 판단의 근거가 생깁니다.'],
    ['계약상 월세','실제 수입','계약서의 월세 합계와 실제로 받은 돈은 공실·연체·면제 때문에 달라질 수 있습니다.'],
    ['채권최고액','실제 채무액','등기부의 채권최고액을 현재 대출잔액으로 그대로 읽지 않습니다. 실제 채무는 별도로 확인합니다.'],
    ['준공연도','실제 건물상태','연식은 단서일 뿐입니다. 관리이력과 주요 설비의 상태가 앞으로의 비용을 더 직접적으로 보여줍니다.'],
    ['유동인구','임차수요','사람이 지나가는 것과 이 건물의 공간을 필요로 하는 수요는 같은 뜻이 아닙니다.'],
    ['수익률','운영 편의성','같은 수익률이라도 공실·민원·시설관리·임차인 교체에 따라 필요한 관리량은 크게 달라집니다.']
  ]:h.distinctions;
  const resultStates=ko?[
    ['01','확인됨','자료와 현장에서 근거가 충분히 확인된 내용입니다. 추측과 분리해서 기록합니다.'],
    ['02','추가확인','자료가 부족하거나 거래 전에 다시 확인해야 하는 항목입니다. 모르는 것을 빈칸으로 남겨두는 것도 분석입니다.'],
    ['03','감수할 부담','수선비·공실·운영난이도처럼 존재 자체가 곧 탈락을 뜻하지 않는 부담입니다. 내가 감수할 수 있는지 따로 판단합니다.']
  ]:h.resultStates;
  const workflow=ko?[
    ['01','기본자료 모으기','매매정보와 건물 기본정보부터 한곳에 모아 분석대상을 정확히 정의합니다.'],
    ['02','임대자료 맞춰보기','호실별 계약내용과 실제 입금·공실상태가 맞는지 확인합니다.'],
    ['03','공적자료 대조하기','등기부와 건축물대장을 실제 소유관계·이용상태와 대조합니다.'],
    ['04','현장에서 확인하기','서류만으로 알기 어려운 건물상태, 접근, 주변 공실과 관리흔적을 직접 확인합니다.'],
    ['05','비교자료 붙이기','주변 거래·임대료·경쟁공간을 붙여 현재 숫자가 어느 위치인지 확인합니다.'],
    ['06','모르는 것 남기기','확인되지 않은 항목을 억지로 추정하지 않고 추가확인 목록으로 분리합니다.'],
    ['07','마지막에 종합하기','확인됨·추가확인·감수할 부담을 함께 놓고 내 판단의 근거가 충분한지 다시 봅니다.']
  ]:h.workflow;
  const toolUse=ko?{
    '수익률 계산기':'현재 수입이 가격 대비 어느 수준인지 빠르게 확인할 때',
    '대출·레버리지 계산':'대출비율과 금리가 내 현금흐름에 어떤 영향을 주는지 볼 때',
    '적정가격 비교':'대상가격을 비교거래와 나란히 놓고 가격 차이를 검토할 때',
    '평당가 계산':'규모가 다른 물건을 같은 단위로 비교해야 할 때',
    '공실 반영 계산':'만실 가정이 아니라 공실이 생겼을 때 수익 변화를 확인할 때',
    '등기부 권리 체크':'등기부에서 확인한 권리를 말소·승계·추가확인으로 정리할 때',
    '종합 분석표':'6가지 기준의 결과를 점수가 아니라 상태로 한 화면에 모을 때'
  }:h.toolUse;
  const finalChecks=ko?[
    ['근거가 있는가','내가 내린 판단을 설명할 자료와 확인내용이 실제로 있는지 봅니다.'],
    ['더 확인할 것은 무엇인가','아직 확인하지 못한 항목을 별도 목록으로 남기고 계약 전에 다시 확인합니다.'],
    ['내가 감수할 수 있는가','발견된 비용·공실·권리·운영부담을 좋고 나쁨으로만 자르지 말고 감수 가능한지 판단합니다.']
  ]:h.finalChecks;
  const navCards=ko?[
    {id:'price',num:'01',code:'PRICE',name:'가격',prompt:'가격이 싸고 비싼지보다, 왜 이 가격인지부터 확인합니다.',action:'가격 분석 보기',facts:['비교거래','조건차이','가격근거']},
    {id:'income',num:'02',code:'INCOME',name:'수익',prompt:'월세 합계보다 공실과 비용을 반영해 실제 남는 돈을 봅니다.',action:'수익 분석 보기',facts:['실제입금','공실','운영비']},
    {id:'rights',num:'03',code:'RIGHTS',name:'권리',prompt:'권리의 이름보다 거래 후 어떻게 처리되고 무엇이 남는지 봅니다.',action:'권리 분석 보기',facts:['등기','말소·승계','추가확인']},
    {id:'building',num:'04',code:'BUILDING',name:'건물',prompt:'연식보다 앞으로 필요한 수선·교체와 실제 부담을 확인합니다.',action:'건물 분석 보기',facts:['현재상태','수선·교체','미래비용']},
    {id:'location',num:'05',code:'LOCATION',name:'입지',prompt:'사람 수보다 이 공간을 필요로 하는 수요가 계속 존재하는지 봅니다.',action:'입지 분석 보기',facts:['배후수요','접근성','지속성']},
    {id:'operation',num:'06',code:'OPERATION',name:'운영',prompt:'현재 수익보다 그 수익을 유지하기 위한 관리부담을 확인합니다.',action:'운영 분석 보기',facts:['임차안정','관리개입','운영부담']},
    {id:'tools',num:'07',code:'TOOLS',name:'분석도구',prompt:'판단에 필요한 숫자를 계산하고 확인할 때 7가지 도구를 사용합니다.',action:'분석도구',facts:['계산','비교','검증']}
  ]:h.nav;
  useEffect(()=>{
    const root=rootRef.current;if(!root)return;
    const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const els=[...root.querySelectorAll('.an32-reveal')];
    if(reduced){els.forEach(x=>x.classList.add('is-visible'));return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -8% 0px'});
    els.forEach(x=>io.observe(x));return()=>io.disconnect();
  },[]);
  return <div ref={rootRef} className="an32-home">
    <section className="an32-hero"><div className="an19-shell an32-hero-grid">
      <div className="an32-hero-left">
        <header className="an32-title an32-reveal"><small>{t.eyebrow}</small><h1>{t.title}</h1><p>{t.lead}</p></header>
        <nav className="an32-category-stack an34-category-stack an32-reveal" aria-label={ko?'건물분석 카테고리':h.navAria}>
          {navCards.map((card,i)=><article className={`an34-entry ${card.id==='tools'?'is-tools':''}`} key={card.id}>
            <p>{card.prompt}</p>
            <button onMouseEnter={()=>setFocus(card.id)} onMouseLeave={()=>setFocus('all')} onFocus={()=>setFocus(card.id)} onBlur={()=>setFocus('all')} onClick={()=>card.id==='tools'?toolsRef.current?.scrollIntoView({behavior:'smooth',block:'start'}):onOpen(card.id)}><span>{card.action}</span><b>{card.id==='tools'?'↓':'→'}</b></button>
            <div className="an34-entry-meta"><span><b>{card.num}</b> {card.code}</span>{card.facts.map(x=><span key={x}>{x}</span>)}</div>
          </article>)}
        </nav>
      </div>
      <div className={`an32-analyzer is-${focus}`} aria-label={ko?'6가지 분석축이 한 건물을 분석하는 애니메이션':h.graphicAria}>
        <div className="an32-orbit orbit-a"/><div className="an32-orbit orbit-b"/>
        <div className="an36-city-wrap" aria-hidden="true"><AnalysisCityGraphic/></div>
        {localizedAxes.map((a,i)=><div key={a.id} className={`an32-node node-${a.id} ${focus===a.id?'is-active':''}`}><span>{String(i+1).padStart(2,'0')}</span><strong>{a.code}</strong></div>)}
        <div className="an34-layer-tracks" aria-hidden="true">{navCards.map(card=><div key={card.id} className={`an34-track track-${card.id} ${focus===card.id?'is-active':''}`}><i/><span>{card.num}</span><strong>{card.code}</strong><em>{card.name}</em></div>)}</div>
        <div className={`an32-tool-pulse ${focus==='tools'?'is-active':''}`}>TOOLS · VERIFY</div>
      </div>
    </div></section>

    <section className="an32-statement"><div className="an19-shell an32-reveal"><small>START WITH THE MATERIALS.</small><p>{ko?'건물분석은 자료를 모으는 것부터 시작합니다.':h.statementTitle}</p><span>{ko?'주소 하나나 매매가격 하나만으로는 분석이 완성되지 않습니다. 가격·임대·권리·건물·입지·운영 자료를 먼저 나눠 모으면 뒤의 판단이 훨씬 선명해집니다.':h.statementLead}</span><div className="an33-prep-grid">{prep.map(([name,body],i)=><article key={name}><b>{String(i+1).padStart(2,'0')}</b><strong>{name}</strong><p>{body}</p></article>)}</div></div></section>

    <section className="an32-editorial"><div className="an19-shell an32-editorial-grid an32-reveal"><small>HOW TO LOOK.</small><div><h2>{ko?'처음부터 좋다·나쁘다를 결정하지 마세요.':h.lookTitle}</h2><p>{ko?'상세 분석으로 들어가기 전에는 각 기준에서 무엇을 찾아야 하는지만 분리해 두면 됩니다. 아래 여섯 문장은 상세페이지의 요약이 아니라, 자료를 볼 때 놓치지 않을 행동 기준입니다.':h.lookLead}</p></div></div><div className="an19-shell an32-lens-list">{focusGuide.map(([code,name,body],i)=><article className="an32-reveal" key={code}><span>{String(i+1).padStart(2,'0')}</span><small>{code}</small><h3>{name}</h3><p>{body}</p></article>)}</div></section>

    <section className="an32-perspective"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>READ THE DIFFERENCE.</small><h2>{ko?'숫자와 사실은 같은 뜻이 아닙니다.':h.diffTitle}</h2><p>{ko?'건물분석에서 자주 생기는 오류는 서로 다른 의미의 숫자를 같은 것으로 읽는 데서 시작합니다. 다음 여섯 쌍만 구분해도 판단이 훨씬 단단해집니다.':h.diffLead}</p></header><div className="an33-distinction-list">{distinctions.map(([left,right,body],i)=><article className="an32-reveal" key={left}><span>{String(i+1).padStart(2,'0')}</span><div><strong>{left}</strong><b>≠</b><strong>{right}</strong></div><p>{body}</p></article>)}</div></div></section>

    <section className="an32-mistakes"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>HOW TO RECORD THE RESULT.</small><h2>{ko?'분석 결과는 세 가지 상태로 정리하세요.':h.stateTitle}</h2><p>{ko?'여섯 축을 점수로 합쳐 버리면 무엇을 더 확인해야 하는지 사라집니다. 대신 확인된 사실, 아직 확인할 것, 감수해야 할 부담으로 나눠 기록합니다.':h.stateLead}</p></header><div className="an33-state-grid">{resultStates.map(([num,title,body])=><article className="an32-reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="an32-order"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>ANALYSIS WORKFLOW.</small><h2>{ko?'실제 건물은 이런 순서로 확인해 보세요.':h.workflowTitle}</h2><p>{ko?'여섯 축을 차례대로 읽는 것과 실제 자료를 모으는 순서는 조금 다릅니다. 먼저 자료를 맞추고, 현장과 비교자료를 붙인 뒤, 모르는 것을 남겨 마지막에 종합합니다.':h.workflowLead}</p></header><div className="an32-order-list">{workflow.map(([num,name,body])=><div className="an32-reveal" key={num}><span>{num}</span><strong>{name}</strong><p>{body}</p></div>)}</div></div></section>

    <section ref={toolsRef} className="an19-tools-section an32-tools"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>USE THE TOOLS WHEN NEEDED.</small><h2>{ko?'분석도구는 언제 사용해야 할까요?':h.toolsTitle}</h2><p>{ko?'도구는 분석을 대신하는 메뉴가 아니라 필요한 순간에 숫자를 계산하거나 사실을 정리하는 보조수단입니다. 먼저 무엇을 확인하려는지 정하고 그다음 필요한 도구를 선택합니다.':h.toolsLead}</p></header><div className="an19-tool-grid an33-tool-grid">{localizedTools.map(tool=><article className="an32-reveal" key={tool.num}><span>{tool.num}</span><h3>{tool.name}</h3><p className="an33-tool-when"><b>WHEN</b>{toolUse[tool.name]||tool.desc}</p><p>{tool.desc}</p></article>)}</div></div></section>

    <section className="an32-final"><div className="an19-shell an32-reveal"><small>FINAL CHECK.</small><h2>{ko?'분석이 끝났다면 마지막으로 세 가지를 확인하세요.':h.finalTitle}</h2><p>{ko?'여기까지 왔다면 더 많은 항목을 추가하는 것보다, 지금 가진 판단이 어떤 근거 위에 있는지를 확인하는 것이 중요합니다.':h.finalLead}</p><div className="an33-final-checks">{finalChecks.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div><strong>{ko?<><span>건물분석의 목적은 정답을 대신 내려주는 것이 아니라,</span><br className="an34-final-break"/><span>무엇을 확인하고 어떤 근거로 판단해야 하는지를 알게 하는 것입니다.</span></>:<><span>{h.finalLine1}</span><br className="an34-final-break"/><span>{h.finalLine2}</span></>}</strong></div></section>
  </div>;
}

function AxisView({axis,locale,onHome,onOpen,axes}){
  const t=COPY[locale]||COPY.ko;
  const [choice,setChoice]=useState('');
  useEffect(()=>{setChoice('');window.scrollTo({top:0,behavior:'instant'});},[axis.id]);
  useEffect(()=>{
    const root=document.querySelector('.an19-axis-page');
    if(!root) return;
    const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const reveal=(selector,step=90)=>{
      root.querySelectorAll(selector).forEach((el,i)=>{
        el.classList.add('an27-reveal');
        el.style.setProperty('--an27-delay',`${Math.min(i*step,420)}ms`);
      });
    };
    reveal('.an19-terms>div',70);
    reveal('.an19-concept>header, .an19-concept>.an19-longcopy, .an19-concept>.an19-graphic, .an19-concept>.an19-concept-takeaway',100);
    root.querySelectorAll('.an19-reason-item').forEach(item=>{
      item.querySelectorAll('.an19-reason-index, .an19-reason-content>h3, .an19-reason-answer, .an19-reason-body, .an19-reason-concept, .an19-reason-takeaway, .an19-reason-next').forEach((el,i)=>{
        el.classList.add('an27-reveal'); el.style.setProperty('--an27-delay',`${i*95}ms`);
      });
    });
    root.querySelectorAll('.an23-method-item').forEach(item=>{
      item.querySelectorAll('.an19-method-num, .an23-method-content>h3, .an23-method-copy .an23-method-part, .an23-method-graphic').forEach((el,i)=>{
        el.classList.add('an27-reveal'); el.style.setProperty('--an27-delay',`${i*105}ms`);
      });
      item.querySelector('.an23-method-graphic')?.classList.add('an27-graphic-stage');
    });
    reveal('.an24-case-subject, .an24-case-snapshot>div',75);
    reveal('.an24-case-report-list>article',100);
    reveal('.an24-case-graphic, .an24-case-conclusion',120);
    root.querySelector('.an24-case-graphic')?.classList.add('an27-graphic-stage');
    reveal('.an25-price-summary>header, .an25-principle-pillars>article, .an25-principle-graphic, .an25-principle-contrast>div, .an25-principle-final, .an25-principle-next',120);
    root.querySelector('.an25-principle-graphic')?.classList.add('an27-graphic-stage');
    const targets=[...root.querySelectorAll('.an27-reveal')];
    if(reduced){targets.forEach(el=>el.classList.add('is-visible'));return;}
    root.classList.add('an27-motion-ready');
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}});
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    targets.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[axis.id]);
  return <article className="an19-axis-page">
    <div className="an19-axis-hero"><div className="an19-shell"><button className="an19-back" onClick={onHome}>← {t.back}</button><small>{axis.num} · {axis.code}</small><h1>{axis.name}</h1><p>{axis.question}</p></div></div>
    <div className="an19-shell an19-content">
      <section className="an19-block"><header><small>{t.terms}</small><h2>{axis.termsTitle||t.termsTitle}</h2></header><div className="an19-terms">{axis.terms.map(([name,desc])=><div key={name}><strong>{name}</strong><p>{desc}</p></div>)}</div></section>
      <section className="an19-block an19-concept"><header><small>{t.concept}</small><h2>{axis.concept.title}</h2></header><Paragraphs text={axis.concept.body} className="an19-longcopy"/><Graphic axis={axis} locale={locale}/>{axis.concept.takeaway&&<p className="an19-concept-takeaway">{axis.concept.takeaway}</p>}</section>
      {axis.engineGuide&&<section className="an19-block an19-engine-guide an19-reason-story"><header><small>{axis.reasonSection?.eyebrow||'03 · 가격을 이렇게 분석하는 이유'}</small><h2>{axis.reasonSection?.title||'가격을 보는 순서에는 이유가 있습니다.'}</h2><p>{axis.reasonSection?.lead||'전문적인 분석법은 그대로 사용하되, 한 가지 질문씩 따라가며 왜 필요한지 이해합니다.'}</p></header><div className="an19-reason-list">{axis.engineGuide.map((item,i)=><article key={item.node} className="an19-reason-item"><div className="an19-reason-index">{String(i+1).padStart(2,'0')}</div><div className="an19-reason-content"><h3>{item.title}</h3><p className="an19-reason-answer">{item.answer}</p><Paragraphs text={item.body} className="an19-reason-body"/>{item.concept&&<p className="an19-reason-concept">{item.concept}</p>}{item.takeaway&&<p className="an19-reason-takeaway">{item.takeaway}</p>}{item.next&&<p className="an19-reason-next"><span>{t.next}</span>{item.next}</p>}</div></article>)}</div></section>}
      <section className="an19-block an19-method an23-analysis-method"><header><small>{axis.engineGuide?`04 · ${t.analysisMethod}`:t.method}</small><h2>{axis.methodGuide?(axis.methodTitle||t.simpleMethodTitle):t.simpleMethodTitle}</h2>{axis.methodGuide&&<p>{axis.methodLead||'여기서는 설명보다 분석 절차에 집중합니다. 각 단계에서 무엇을 어떻게 보고, 무엇을 확인하며, 어디에서 판단을 잘못하기 쉬운지 순서대로 정리합니다.'}</p>}</header><div className="an19-method-flow" aria-label={`${axis.name} ${t.flowAria}`}>{axis.steps.map(([title],i)=><span key={title}><b>{String(i+1).padStart(2,'0')}</b>{title}</span>)}</div>{axis.methodGuide?<div className="an19-method-list an23-method-list">{axis.methodGuide.map((item,i)=><article key={item.title} className="an23-method-item"><div className="an19-method-num">{String(i+1).padStart(2,'0')}</div><section className="an23-method-content"><h3>{item.title}</h3><div className="an23-method-grid"><div className="an23-method-copy"><div className="an23-method-part"><small>{t.analysisMethod}</small><Paragraphs text={item.body} className="an19-method-body"/></div><div className="an19-method-check an23-method-part"><small>{t.check}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="an19-method-caution an23-method-part"><small>{t.caution}</small><p>{item.caution}</p></div></div><MethodGraphic graphic={item.graphic}/></div></section></article>)}</div>:<div className="an19-steps">{axis.steps.map(([title,body],i)=><div key={title}><span>{String(i+1).padStart(2,'0')}</span><section><h3>{title}</h3><p>{body}</p></section></div>)}</div>}</section>
      {axis.practice.mode==='report'?<PriceCaseReport practice={axis.practice} axisCode={axis.code} locale={locale}/>:<section className="an19-block an19-practice"><header><small>{t.practice}</small><h2>한 건물을 놓고 바로 적용해봅니다.</h2></header><div className="an19-facts">{axis.practice.facts.map(x=><span key={x}>{x}</span>)}</div><h3>{axis.practice.question}</h3><div className="an19-choice">{axis.practice.choices.map(x=><button className={choice===x?'is-selected':''} key={x} onClick={()=>setChoice(x)}>{x}</button>)}</div>{choice&&<div className="an19-result"><small>{t.fix}</small><h3>{axis.practice.answer}</h3><p className="an19-selected">내가 고른 답: {choice}</p><h4>{t.why}</h4>{axis.practice.why.map(x=><p key={x}>{x}</p>)}</div>}</section>}
      {(axis.priceSummary||axis.axisSummary)&&<PriceSummary summary={axis.priceSummary||axis.axisSummary} locale={locale}/>}
      <section className="an19-block an19-related"><header><small>{axis.engineGuide?t.relatedLabel:t.related}</small><h2>{t.relatedTitle}</h2></header><div>{axis.tools.map(x=><span key={x}>{x}</span>)}</div></section>
      <p className="an19-note">{t.note}</p>
      <nav className="an41-axis-endnav" aria-label={t.otherAnalyses}>
        <button type="button" className="an41-back-home" onClick={onHome}><span aria-hidden="true">←</span><strong>{t.backToAnalysis}</strong></button>
        <div className="an41-other-head"><small>EXPLORE NEXT</small><h2>{t.otherAnalyses}</h2></div>
        <div className="an41-other-grid">{axes.filter(item=>item.id!==axis.id).map(item=><button type="button" key={item.id} className="an41-other-axis" onClick={()=>onOpen(item.id)}><span className="an41-other-num">{item.num}</span><span className="an41-other-copy"><small>{item.code}</small><strong>{item.name}</strong><em>{item.question}</em></span><span className="an41-other-arrow" aria-hidden="true">→</span></button>)}</div>
      </nav>
    </div>
  </article>;
}

export default function AnalysisV008Client({locale='ko',initialView=[]}){
  const initial=(initialView?.[0]||'').toLowerCase();
  const [view,setView]=useState(AXIS_IDS.has(initial)?initial:'home');
  const axes=locale==='ko'?ANALYSIS_AXES_V019:(ANALYSIS_AXES_V039[locale]||ANALYSIS_AXES_V019);
  const axis=useMemo(()=>axes.find(x=>x.id===view),[view,axes]);
  const open=(id)=>{setView(id);history.pushState({},'',`${BASE_PATH}/${locale}/analysis/${id}`);window.scrollTo({top:0,behavior:'smooth'});};
  const home=()=>{setView('home');history.pushState({},'',`${BASE_PATH}/${locale}/analysis`);window.scrollTo({top:0,behavior:'smooth'});};
  useEffect(()=>{const fn=()=>{const id=location.pathname.split('/analysis/')[1]?.split('/')[0]||'home';setView(AXIS_IDS.has(id)?id:'home');};addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn);},[]);
  return <div className="analysis-page-v019">{axis?<AxisView axis={axis} locale={locale} onHome={home} onOpen={open} axes={axes}/>:<Home locale={locale} onOpen={open}/>}</div>;
}
