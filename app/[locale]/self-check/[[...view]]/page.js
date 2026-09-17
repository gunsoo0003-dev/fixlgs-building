import { notFound } from 'next/navigation';
import SelfCheckClient, { DevPreview, PublicResultPage } from '../../../SelfCheckClient';
import SelfCheckResultsCatalog from '../../../SelfCheckResultsCatalog';
import { TYPE_REPORTS, COMIC_REPORTS, ASSET_CHARACTERISTICS } from '../../../self-check-data';
import { PUBLIC_TYPE_IDS, PUBLIC_ASSETS, PUBLIC_BEHAVIOR_IDS, PUBLIC_RESULT_PATHS } from '../../../self-check-public-data';
import { getStage1Type } from '../../../self-check-stage1-copy';
import { getStage2Asset, stage2Value } from '../../../self-check-stage2-copy';
import { getStage3Comic } from '../../../self-check-stage3-copy';

const locales = ['ko','en','ja'];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';
const assetById = Object.fromEntries(PUBLIC_ASSETS.map(x=>[x.id,x]));

const META_COPY={
  ko:{
    catalogTitle:'자가진단 결과 유형 안내 | FIX BUILDING',
    catalogDescription:'건물 투자성향 14유형, 자산 적합성 10유형, 투자 행동패턴 16유형, 최종 투자 프로필 14유형을 확인하는 FIX BUILDING 자가진단 결과 안내.',
    basicTitle:n=>`${n} 투자성향 해설 | STEP 1 · FIX BUILDING`,
    basicDescription:r=>`${r.line} ${r.features} 강점은 ${r.strength} 실제 건물 검토에서는 ${r.approach} 방식으로 확인해볼 수 있습니다.`,
    assetTitle:n=>`${n} 자산 적합성 분석 | STEP 2 · FIX BUILDING`,
    assetDescription:(a,c)=>`${a.name}의 자산 특성과 투자 적합성을 살펴봅니다. ${a.focus||''} 현금흐름 ${c.cashflow||'-'}, 공실 ${c.vacancy||'-'}, 관리부담 ${c.management||'-'}, 유동성 ${c.liquidity||'-'}을 함께 비교합니다.`,
    behaviorTitle:n=>`${n} 투자 행동패턴 해설 | STEP 3 · FIX BUILDING`,
    behaviorDescription:r=>`${r.character} ${r.decision} 강점은 ${r.strength}이며, ${r.caution}`,
    finalTitle:n=>`${n} 종합 투자 프로필 | FINAL · FIX BUILDING`,
    finalDescription:r=>`${r.name} 유형의 기본 투자성향, 자산을 보는 관점, 강점과 주의점을 종합해 설명합니다. 실제 개인 FINAL은 42개 응답의 자산 적합성과 행동패턴을 함께 해석합니다.`,
    workflowTitle:'자가진단 결과 | FIX BUILDING',
    workflowDescription:'FIX BUILDING 자가진단 개인 결과 화면.',
    landingTitle:'자가진단 | FIX BUILDING',
    landingDescription:'건물을 보기 전에 자신의 투자성향과 현재 준비상태를 점검하는 FIX BUILDING 자가진단.'
  },
  en:{
    catalogTitle:'Self-Check Result Types | FIX BUILDING',
    catalogDescription:'Explore 14 investor profiles, 10 asset-fit guides, 16 investment behavior patterns, and 14 composite profiles in the FIX BUILDING self-check.',
    basicTitle:n=>`${n} Investor Profile | STEP 1 · FIX BUILDING`,
    basicDescription:r=>`${r.line} ${r.features} A key strength is ${r.strength} Use ${r.approach} when reviewing an actual property.`,
    assetTitle:n=>`${n} Asset Fit Analysis | STEP 2 · FIX BUILDING`,
    assetDescription:(a,c)=>`Explore how ${a.name} may fit different investor profiles. ${a.focus||''} Compare cash flow, vacancy, management burden, and liquidity before reviewing a specific property.`,
    behaviorTitle:n=>`${n} Investment Behavior | STEP 3 · FIX BUILDING`,
    behaviorDescription:r=>`${r.character} ${r.decision} A key strength is ${r.strength} Watch for: ${r.caution}`,
    finalTitle:n=>`${n} Composite Investor Profile | FINAL · FIX BUILDING`,
    finalDescription:r=>`A composite guide to the ${r.name} profile, including core investment tendencies, how assets are evaluated, strengths, and caution points. Personal results combine all 42 responses.`,
    workflowTitle:'Self-Check Result | FIX BUILDING',
    workflowDescription:'Your personal FIX BUILDING self-check result.',
    landingTitle:'Property Investor Self-Check | FIX BUILDING',
    landingDescription:'Review your investment tendencies, risk approach, financing attitude, management style, and decision habits before evaluating a property.'
  },
  ja:{
    catalogTitle:'自己診断の結果タイプ一覧 | FIX BUILDING',
    catalogDescription:'FIX BUILDINGの自己診断で確認できる投資傾向14タイプ、資産適合性10タイプ、投資行動16タイプ、総合プロフィール14タイプを一覧で紹介します。',
    basicTitle:n=>`${n} 投資傾向の解説 | STEP 1 · FIX BUILDING`,
    basicDescription:r=>`${r.line} ${r.features} 強みは${r.strength} 実際の物件検討では、${r.approach}という進め方が役立ちます。`,
    assetTitle:n=>`${n} 資産適合性分析 | STEP 2 · FIX BUILDING`,
    assetDescription:(a,c)=>`${a.name}の一般的な資産特性と投資家との相性を確認します。${a.focus||''} キャッシュフロー、空室、管理負担、流動性を分けて比較します。`,
    behaviorTitle:n=>`${n} 投資行動パターン | STEP 3 · FIX BUILDING`,
    behaviorDescription:r=>`${r.character} ${r.decision} 強みは${r.strength} 注意点は${r.caution}`,
    finalTitle:n=>`${n} 総合投資プロフィール | FINAL · FIX BUILDING`,
    finalDescription:r=>`${r.name}タイプの基本投資傾向、資産を見る視点、強みと注意点を総合的に解説します。個人のFINALでは42問の回答による資産適合性と行動パターンも合わせて解釈します。`,
    workflowTitle:'自己診断結果 | FIX BUILDING',
    workflowDescription:'FIX BUILDING 自己診断の個人結果画面です。',
    landingTitle:'建物投資 自己診断 | FIX BUILDING',
    landingDescription:'物件を見る前に、自分の投資傾向、リスクへの向き合い方、融資への姿勢、管理スタイル、情報確認の習慣を点検する自己診断です。'
  }
};

function publicDescriptor(locale,view=[]){
  if(view.length!==3 || view[0]!=='result') return null;
  const [,kind,id]=view;
  const m=META_COPY[locale]||META_COPY.ko;
  if(kind==='basic' && TYPE_REPORTS[id]){
    const r=getStage1Type(locale,id,TYPE_REPORTS[id]);
    return {kind,id,title:m.basicTitle(r.name),description:m.basicDescription(r)};
  }
  if(kind==='asset' && assetById[id]){
    const assetKey=assetById[id].name;
    const a=getStage2Asset(locale,assetKey);
    const c=ASSET_CHARACTERISTICS[assetKey] || {};
    return {kind,id,title:m.assetTitle(a.name),description:m.assetDescription(a,c)};
  }
  if(kind==='behavior' && COMIC_REPORTS[id]){
    const r=getStage3Comic(locale,id,COMIC_REPORTS[id]);
    return {kind,id,title:m.behaviorTitle(r.name),description:m.behaviorDescription(r)};
  }
  if(kind==='final' && TYPE_REPORTS[id]){
    const r=getStage1Type(locale,id,TYPE_REPORTS[id]);
    return {kind,id,title:m.finalTitle(r.name),description:m.finalDescription(r)};
  }
  return null;
}

export function generateStaticParams(){
  return locales.flatMap(locale=>[
    {locale,view:[]},
    {locale,view:['results']},
    ...PUBLIC_RESULT_PATHS.map(path=>({locale,view:path.split('/')})),
  ]);
}

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!locales.includes(locale)) return {};
  const m=META_COPY[locale]||META_COPY.ko;

  if(view[0]==='dev-preview'){
    return {title:'Internal Preview | FIX BUILDING',robots:{index:false,follow:false}};
  }

  if(view.length===1 && view[0]==='results'){
    const canonical=`${SITE_URL}/building/${locale}/self-check/results`;
    return {
      title:m.catalogTitle,
      description:m.catalogDescription,
      alternates:{canonical,languages:{'ko-KR':`${SITE_URL}/building/ko/self-check/results`,'en':`${SITE_URL}/building/en/self-check/results`,'ja-JP':`${SITE_URL}/building/ja/self-check/results`}},
      robots:{index:true,follow:true},
    };
  }

  const descriptor=publicDescriptor(locale,view);
  if(descriptor){
    const canonical=`${SITE_URL}/building/${locale}/self-check/${view.join('/')}`;
    const languagePath=`self-check/${view.join('/')}`;
    return {
      title:descriptor.title,
      description:descriptor.description.slice(0,160),
      alternates:{canonical,languages:{'ko-KR':`${SITE_URL}/building/ko/${languagePath}`,'en':`${SITE_URL}/building/en/${languagePath}`,'ja-JP':`${SITE_URL}/building/ja/${languagePath}`}},
      robots:{index:true,follow:true},
      openGraph:{title:descriptor.title,description:descriptor.description.slice(0,160),url:canonical,type:'article'},
    };
  }

  if(view[0]==='result'){
    return {title:m.workflowTitle,description:m.workflowDescription,robots:{index:false,follow:true}};
  }

  const canonical=`${SITE_URL}/building/${locale}/self-check`;
  return {
    title:m.landingTitle,
    description:m.landingDescription,
    alternates:{canonical,languages:{'ko-KR':`${SITE_URL}/building/ko/self-check`,'en':`${SITE_URL}/building/en/self-check`,'ja-JP':`${SITE_URL}/building/ja/self-check`}},
  };
}

export default async function SelfCheckPage({params}){
  const {locale,view=[]}=await params;
  if(!locales.includes(locale)) notFound();
  if(view[0]==='dev-preview') return <DevPreview locale={locale}/>;
  if(view.length===1 && view[0]==='results') return <SelfCheckResultsCatalog locale={locale}/>;
  const descriptor=publicDescriptor(locale,view);
  if(descriptor) return <PublicResultPage locale={locale} kind={descriptor.kind} id={descriptor.id}/>;
  return <SelfCheckClient locale={locale} initialView={view}/>;
}
