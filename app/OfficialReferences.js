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

// The jurisdiction never changes with the interface language. Original links remain Korean-language sources.
const I18N = {
  ko:{heading:'본문 관련 공식 자료',method:'해석 기준',methodNote:'자가진단의 유형 분류와 결과 해설은 FIX BUILDING이 자체 구성한 교육용 판단 보조자료입니다. 공인 심리검사나 개인별 투자 적합성 판정 결과가 아닙니다.',note:'링크된 자료는 표시한 확인 항목의 참고용입니다. 이 사이트의 자체 분석틀·가상 사례를 공식기관이 검증하거나 인증한 것은 아니며, 실제 거래에는 최신 자료를 확인해야 합니다.'},
  en:{heading:'Related Korean official sources',method:'How to interpret this tool',methodNote:'The categories and explanations in this self-check are FIX BUILDING’s own educational aid. This is not a validated psychological test or a personalized investment-suitability assessment.',note:'This service explains South Korean real-estate rules, figures and records in English; it does not apply US, UK or other foreign law. Official references open in Korean and support only the indicated topics. Government agencies have not certified our analysis framework or hypothetical examples. Verify current sources before any transaction.'},
  ja:{heading:'関連する韓国の公的資料',method:'本ツールの解釈',methodNote:'自己診断の分類と結果解説はFIX BUILDINGが独自に構成した学習用の判断補助資料です。公認心理検査や個別の投資適合性判定ではありません。',note:'本サービスは韓国の不動産制度・金額・登記を日本語で説明します。日本の法令を適用するものではありません。リンク先の公式資料は韓国語で表示され、表示した事項の参考資料です。独自の分析方法や仮想事例が公的機関に認証されたものではありません。実際の取引では最新資料をご確認ください。'},
};

const SOURCE_NAMES = {
  en: {
    parties:['Easy Law (Korea) · Confirming the sale parties','Owner and agent authority'],
    agreement:['Easy Law (Korea) · Preparing a sale agreement','Purchase price, conditions, handover'],
    report:['Easy Law (Korea) · Real-estate transaction reporting','Report items and deadlines'],
    title:['Supreme Court of Korea · Internet Registry','Ownership and registered rights'],
    building:['Government24 (Korea) · Building register','Information recorded in the Korean building register'],
    transfer:['Easy Law (Korea) · Ownership transfer registration','Registration process and deadlines'],
    trade:['MOLIT (Korea) · Real transaction prices','Commercial property sale comparables'],
    rent:['Korea Real Estate Board · Commercial rent survey','Area rents, vacancies, yields'],
    stats:['Korea Real Estate Board · Real estate statistics','Data coverage and statistical definitions'],
  },
  ja: {
    parties:['韓国・生活法令情報 · 売買当事者の確認','所有者・代理権の確認'],
    agreement:['韓国・生活法令情報 · 売買契約書の作成','売買代金・特約・引渡し'],
    report:['韓国・生活法令情報 · 不動産取引の届出','届出事項・期限'],
    title:['韓国大法院 · インターネット登記所','所有権・登記された権利'],
    building:['韓国政府24 · 建築物台帳','韓国の建築物台帳に記録された建物情報'],
    transfer:['韓国・生活法令情報 · 所有権移転登記','登記申請と期限'],
    trade:['韓国国土交通部 · 実取引価格公開システム','商業用不動産の成約事例'],
    rent:['韓国不動産院 · 商業用不動産賃貸動向調査','地域別賃料・空室率・利回り'],
    stats:['韓国不動産院 · 不動産統計システム','統計の対象・集計基準'],
  },
};

function getPageReferences(section, view, locale='ko') {
  const registry=REFERENCES[section];
  if(!registry) return null;
  const ids=registry[view];
  return ids ? ids.map(id=>({
    ...S[id],
    name:SOURCE_NAMES[locale]?.[id]?.[0] || S[id].name,
    scope:SOURCE_NAMES[locale]?.[id]?.[1] || S[id].scope,
  })) : null;
}

export default function OfficialReferences() {
  const pathname=usePathname() || '';
  const parts=pathname.replace(/^\/building(?=\/|$)/,'').split('/').filter(Boolean);
  const locale=parts[0];
  if(!I18N[locale]) return null;
  const words=I18N[locale];
  const section=parts[1];
  // The proprietary questionnaire is not represented as scientifically validated by an unrelated source.
  if(section==='self-check') {
    if(parts.length>6) return null;
    return <aside className="fb-official-references fb-method-note" aria-label={words.method}>
      <div className="fb-official-inner"><span className="fb-official-heading">{words.method}</span><p>{words.methodNote}</p></div>
    </aside>;
  }
  const refs=getPageReferences(section,parts[2]||'home',locale);
  if(!refs?.length) return null;
  return <aside className="fb-official-references" aria-label={words.heading}>
    <div className="fb-official-inner">
      <span className="fb-official-heading">{words.heading}</span>
      <ul>{refs.map(ref=><li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.name}<span aria-hidden="true">↗</span></a><small>{ref.scope}</small></li>)}</ul>
      <p>{words.note}</p>
    </div>
  </aside>;
}
