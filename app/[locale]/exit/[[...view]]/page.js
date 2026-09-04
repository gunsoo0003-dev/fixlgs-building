import {notFound} from 'next/navigation';
import ExitMainClient from '../../../ExitMainClient';
import ExitClient from '../../../ExitClient';
import ExitPrototypeClient from '../../../ExitPrototypeClient';
import {EXIT_LOCALES,getExitDecision,getExitMain,getExitSection} from '../../../exit-i18n-data';
import '../../../analysis.css';
import '../../../contract.css';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';
const ALLOWED=['decision','readiness','pricing','buyer-readiness','net-proceeds','closing'];

const META={
  ko:{
    main:['EXIT | FIX BUILDING','건물 보유 종료를 매각 판단, 가치정리, 가격전략, 매수자 준비, 순회수액, 종료·인계의 여섯 단계로 이해하는 EXIT 튜토리얼입니다.'],
    decision:['매각 판단 | FIX BUILDING','현재 가격 하나가 아니라 앞으로 보유할 때의 수익·비용·금융조건·자본 목적을 함께 비교해 매각 검토 기준을 정리합니다.'],
    readiness:['가치정리 | FIX BUILDING','매각 전에 임대차·시설·비용·문서를 같은 기준일과 근거로 연결해 설명 가능한 상태로 정리하는 가이드입니다.'],
    pricing:['가격전략 | FIX BUILDING','건물 분석에서 확보한 근거를 시장제시가격·목표가격·최소수용가격·가격 외 조건·가격 재검토 기준으로 바꾸는 가이드입니다.'],
    'buyer-readiness':['매수자 준비 | FIX BUILDING','매수자 질문을 첫 답변자료·근거자료·추가확인·담당자·확인상태로 연결해 실사 대응을 준비하는 가이드입니다.'],
    'net-proceeds':['순회수액 | FIX BUILDING','매각가격에서 대출·세금·거래비용·정산을 반영해 실제 회수 가능한 자본과 미확인 항목을 구분하는 가이드입니다.'],
    closing:['종료·인계 | FIX BUILDING','잔금 이후 열쇠·접근권한·업체관계·자동이체·개인정보·잔여업무까지 운영책임을 닫는 가이드입니다.'],
  },
  en:{
    main:['Commercial Property Exit Strategy | FIX BUILDING','A practical six-step framework for deciding whether to sell, organizing sale materials, setting pricing strategy, preparing for buyer due diligence, estimating net proceeds, and completing handover.'],
    decision:['Sell or Hold Decision | Property Exit | FIX BUILDING','Compare future cash flow, vacancy, financing, capital expenditure, management burden, and capital goals before deciding whether to keep holding or sell a commercial property.'],
    readiness:['Sale Preparation | Property Exit | FIX BUILDING','Turn lease, income, expense, vacancy, facility, and supporting records into an organized sale information pack that a buyer can verify without repeating the analysis.'],
    pricing:['Pricing Strategy | Property Exit | FIX BUILDING','Turn existing property analysis into an asking price, target price, minimum acceptable price, negotiation terms, and clear rules for when to review pricing.'],
    'buyer-readiness':['Buyer Due Diligence | Property Exit | FIX BUILDING','Prepare a buyer due diligence Q&A system that connects each question to first-response materials, supporting evidence, further verification, responsible parties, and status.'],
    'net-proceeds':['Net Proceeds | Property Exit | FIX BUILDING','Separate confirmed, estimated, and unresolved deductions from the sale price to understand the capital that can actually be recovered after debt, taxes, costs, and settlements.'],
    closing:['Closing & Handover | Property Exit | FIX BUILDING','Complete a property exit by confirming final settlement, physical access handover, digital permissions, vendor relationships, automatic payments, retained records, and zero remaining tasks.'],
  },
  ja:{
    main:['商業用不動産のEXIT戦略 | FIX BUILDING','売却判断、売却資料の整理、価格戦略、買主対応、手取り額、終了・引継ぎまでを6段階で確認する実務型のEXITガイドです。'],
    decision:['売却判断 | 商業用不動産EXIT | FIX BUILDING','今後のキャッシュフロー、空室、融資条件、CAPEX、管理負担、資本目的を比較し、保有継続か売却検討かを判断するための実務ガイドです。'],
    readiness:['売却資料の整理 | 商業用不動産EXIT | FIX BUILDING','賃貸借、収入・費用、空室、設備、根拠資料を、買主が確認しやすい売却資料PACKに整理するための実務ガイドです。'],
    pricing:['価格戦略 | 商業用不動産EXIT | FIX BUILDING','既存の分析根拠を、売出価格・目標価格・最低受入価格・価格以外の条件・価格見直しルールへ変換する実務ガイドです。'],
    'buyer-readiness':['買主対応・デューデリジェンス | 商業用不動産EXIT | FIX BUILDING','買主の質問を、最初の回答資料・根拠資料・追加確認・担当者・確認状態へつなぐ実査Q&Aの実務ガイドです。'],
    'net-proceeds':['手取り額 | 商業用不動産EXIT | FIX BUILDING','売却価格から融資返済、税金、取引費用、精算を差し引き、確定・推定・追加確認を分けて実際の回収資本を確認する実務ガイドです。'],
    closing:['終了・引継ぎ | 商業用不動産EXIT | FIX BUILDING','最終精算、鍵・カード、デジタル権限、業者関係、自動引落し、保管資料、残務まで確認してEXITを完了するための実務ガイドです。'],
  },
};

function pathFor(slug=''){return slug?`/exit/${slug}`:'/exit';}
function alternatesFor(path){return {ko:`${SITE_URL}/building/ko${path}`,en:`${SITE_URL}/building/en${path}`,ja:`${SITE_URL}/building/ja${path}`,'x-default':`${SITE_URL}/building/ko${path}`};}

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!EXIT_LOCALES.includes(locale)) return {};
  const list=Array.isArray(view)?view:(view?[view]:[]);
  if(list.length>1) return {};
  const slug=list[0]||'';
  if(slug&&!ALLOWED.includes(slug)) return {};
  const key=slug||'main'; const [title,description]=META[locale][key]; const path=pathFor(slug); const canonical=`${SITE_URL}/building/${locale}${path}`;
  return {title,description,alternates:{canonical,languages:alternatesFor(path)},robots:{index:true,follow:true},openGraph:{title,description,url:canonical,type:slug?'article':'website'}};
}

export default async function ExitRoute({params}){
  const {locale,view=[]}=await params;
  const list=Array.isArray(view)?view:(view?[view]:[]);
  if(!EXIT_LOCALES.includes(locale)||list.length>1) notFound();
  const slug=list[0]||''; if(slug&&!ALLOWED.includes(slug)) notFound();
  if(!slug){const s=getExitMain(locale);return <main className="analysis-page-v019-root mg-management-page exit-main-page"><ExitMainClient locale={locale}/><section className="an19-seo-corpus" aria-label="FIX BUILDING EXIT"><h2>FIX BUILDING EXIT</h2><p>{s.lead}</p></section></main>;}
  if(slug==='decision'){const s=getExitDecision(locale);return <main className="analysis-page-v019-root"><ExitClient locale={locale}/><section className="an19-seo-corpus" aria-label="FIX BUILDING EXIT 01"><h2>FIX BUILDING EXIT 01</h2><p>{s.lead}</p></section></main>;}
  const s=getExitSection(locale,slug); if(!s) notFound();
  return <main className="analysis-page-v019-root"><ExitPrototypeClient locale={locale} view={slug}/><section className="an19-seo-corpus" aria-label={`FIX BUILDING EXIT ${slug}`}><h2>FIX BUILDING EXIT</h2><p>{s.lead}</p></section></main>;
}
