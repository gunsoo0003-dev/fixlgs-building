'use client';

import {usePathname} from 'next/navigation';

// Each reference is limited to the narrow subject actually covered by the official page.
// These sources do not certify FIX BUILDING's original frameworks, calculations or scenarios.
const S = {
  parties: {name:'찾기쉬운 생활법령정보 · 매매당사자 확인', url:'https://www.easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=3&cciNo=1&cnpClsNo=1&csmSeq=649', scope:'소유자·대리권 확인'},
  agreement: {name:'찾기쉬운 생활법령정보 · 매매계약서 작성', url:'https://www.easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=3&cciNo=2&cnpClsNo=1&csmSeq=649', scope:'매매대금·특약·인도 조건'},
  report: {name:'찾기쉬운 생활법령정보 · 부동산거래 신고', url:'https://easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=4&cciNo=2&cnpClsNo=1&csmSeq=649&menuType=onhunqna&popMenu=ov', scope:'신고사항·신고기한'},
  title: {name:'대법원 인터넷등기소 · 부동산등기', url:'https://www.iros.go.kr/index.jsp', scope:'소유권·권리관계 열람'},
  building: {name:'정부24 · 건축물대장 열람·발급', url:'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098&HighCtgCD=A09005&tp_seq=01', scope:'공부상 건물 표시 확인'},
  transfer: {name:'찾기쉬운 생활법령정보 · 소유권이전등기', url:'https://easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=4&cciNo=1&cnpClsNo=1&csmSeq=649', scope:'등기 신청과 기한'},
  trade: {name:'국토교통부 · 실거래가 공개시스템', url:'https://rt.molit.go.kr/pt/gis/gis.do?mobileAt=&srhThingSecd=E', scope:'상업·업무용 거래사례 조회'},
  rent: {name:'한국부동산원 · 상업용부동산 임대동향조사', url:'https://www.reb.or.kr/reb/cm/cntnts/cntntsView.do?cntntsId=1052', scope:'상권별 임대료·공실률·수익률'},
  stats: {name:'한국부동산원 · 부동산통계정보시스템', url:'https://www.reb.or.kr/r-one/portal/stat/easyStatPage.do', scope:'통계의 집계 기준·조회'},
};

const REFERENCES = {
  contract: {
    home:['parties','agreement'], parties:['parties','title'], property:['building','title'],
    payment:['agreement','report'], terms:['agreement'], recheck:['title','building'],
    closing:['report','transfer'], checklist:['parties','agreement'],
    'red-flags':['parties','title'], mistakes:['agreement','title'],
  },
  analysis: {
    home:['trade','rent'], price:['trade','stats'], income:['rent'], finance:[],
    tenancy:['rent'], building:['building'], survival:[],
  },
  management: {
    home:['rent','stats'], rent:['rent'], vacancy:['rent'], tenant:['rent'],
    cost:[], facility:['building'], record:[],
  },
  exit: {
    home:['trade','rent'], decision:['rent'], readiness:['title','building'],
    pricing:['trade','rent'], 'buyer-readiness':['title','building'],
    'net-proceeds':[], closing:['report','transfer'],
  },
};

function getPageReferences(section, view) {
  const registry=REFERENCES[section];
  if(!registry) return null;
  const ids=registry[view];
  return ids ? ids.map(id=>S[id]) : null;
}

export default function OfficialReferences() {
  const pathname=usePathname() || '';
  const parts=pathname.replace(/^\/building(?=\/|$)/,'').split('/').filter(Boolean);
  if(parts[0]!=='ko') return null;
  const section=parts[1];
  // The proprietary questionnaire is not represented as scientifically validated by an unrelated source.
  if(section==='self-check') {
    if(parts.length>6) return null;
    return <aside className="fb-official-references fb-method-note" aria-label="자가진단 방법 안내">
      <div className="fb-official-inner"><span className="fb-official-heading">해석 기준</span><p>자가진단의 유형 분류와 결과 해설은 FIX BUILDING이 자체 구성한 교육용 판단 보조자료입니다. 공인 심리검사나 개인별 투자 적합성 판정 결과가 아닙니다.</p></div>
    </aside>;
  }
  const refs=getPageReferences(section,parts[2]||'home');
  if(!refs?.length) return null;
  return <aside className="fb-official-references" aria-label="본문 관련 공식 참고자료">
    <div className="fb-official-inner">
      <span className="fb-official-heading">본문 관련 공식 자료</span>
      <ul>{refs.map(ref=><li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.name}<span aria-hidden="true">↗</span></a><small>{ref.scope}</small></li>)}</ul>
      <p>링크된 자료는 표시한 확인 항목의 참고용입니다. 이 사이트의 자체 분석틀·가상 사례를 공식기관이 검증하거나 인증한 것은 아니며, 실제 거래에는 최신 자료를 확인해야 합니다.</p>
    </div>
  </aside>;
}
