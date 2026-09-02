import Link from 'next/link';
import { TYPE_REPORTS, COMIC_REPORTS } from './self-check-data';
import { PUBLIC_TYPE_IDS, PUBLIC_ASSETS, PUBLIC_BEHAVIOR_IDS } from './self-check-public-data';
import { getStage1Type } from './self-check-stage1-copy';
import { getStage2Asset } from './self-check-stage2-copy';
import { getStage3Comic } from './self-check-stage3-copy';

const COPY={
  ko:{kicker:'FIX BUILDING / SELF CHECK / RESULT GUIDE',title:'자가진단 결과 유형 안내',lead:'FIX BUILDING 자가진단에서 확인할 수 있는 투자성향, 자산 적합성, 투자 행동패턴과 최종 투자 프로필을 유형별로 정리했습니다. 실제 개인 결과는 42개 응답을 종합해 결정됩니다.',start:'자가진단 시작하기',basic:'기본 투자성향 14유형',asset:'자산 적합성 10유형',assetDesc:'현금흐름, 관리부담, 유동성 등 자산의 일반 특성과 투자성향의 적합성을 확인합니다.',behavior:'투자 행동패턴 16유형',final:'최종 투자 프로필 14유형'},
  en:{kicker:'FIX BUILDING / SELF CHECK / RESULT GUIDE',title:'Self-Check Result Types',lead:'Explore the investor tendencies, asset-fit profiles, decision behaviors, and composite profiles used in the FIX BUILDING self-check. Your personal result is calculated from all 42 responses.',start:'Start the self-check',basic:'14 Core Investor Profiles',asset:'10 Asset-Fit Guides',assetDesc:'Review how an asset’s cash flow, management burden, liquidity, and other characteristics may align with different investor profiles.',behavior:'16 Investment Behavior Patterns',final:'14 Composite Investor Profiles'},
  ja:{kicker:'FIX BUILDING / SELF CHECK / RESULT GUIDE',title:'自己診断の結果タイプ一覧',lead:'FIX BUILDINGの自己診断で確認できる投資傾向、資産適合性、投資行動パターン、最終投資プロフィールをタイプ別にまとめています。個人結果は42問すべての回答を総合して算出します。',start:'自己診断を始める',basic:'基本投資傾向 14タイプ',asset:'資産適合性 10タイプ',assetDesc:'キャッシュフロー、管理負担、流動性などの一般的な資産特性と投資傾向との相性を確認します。',behavior:'投資行動パターン 16タイプ',final:'総合投資プロフィール 14タイプ'}
};

export default function SelfCheckResultsCatalog({locale='ko'}){
  const base=`/${locale}/self-check/result`;
  const c=COPY[locale]||COPY.ko;
  return <>
    <main className="sc-public-catalog">
      <header>
        <small>{c.kicker}</small><h1>{c.title}</h1><p>{c.lead}</p>
        <Link className="sc-primary" href={`/${locale}/self-check`}>{c.start} <span>→</span></Link>
      </header>
      <section><div className="sc-public-catalog-title"><small>STEP 1</small><h2>{c.basic}</h2></div><div className="sc-public-linkgrid">
        {PUBLIC_TYPE_IDS.map(id=>{const r=getStage1Type(locale,id,TYPE_REPORTS[id]);return <Link key={id} href={`${base}/basic/${id}`}><small>{id}</small><strong>{r.name}</strong><p>{r.line}</p></Link>})}
      </div></section>
      <section><div className="sc-public-catalog-title"><small>STEP 2</small><h2>{c.asset}</h2></div><div className="sc-public-linkgrid">
        {PUBLIC_ASSETS.map(x=>{const a=getStage2Asset(locale,x.name);return <Link key={x.id} href={`${base}/asset/${x.id}`}><small>{x.id}</small><strong>{a.name}</strong><p>{a.focus||c.assetDesc}</p></Link>})}
      </div></section>
      <section><div className="sc-public-catalog-title"><small>STEP 3</small><h2>{c.behavior}</h2></div><div className="sc-public-linkgrid">
        {PUBLIC_BEHAVIOR_IDS.map(id=>{const r=getStage3Comic(locale,id,COMIC_REPORTS[id]);return <Link key={id} href={`${base}/behavior/${id}`}><small>{id}</small><strong>{r.name}</strong><p>{r.character}</p></Link>})}
      </div></section>
      <section><div className="sc-public-catalog-title"><small>FINAL</small><h2>{c.final}</h2></div><div className="sc-public-linkgrid">
        {PUBLIC_TYPE_IDS.map(id=>{const r=getStage1Type(locale,id,TYPE_REPORTS[id]);return <Link key={id} href={`${base}/final/${id}`}><small>{id}</small><strong>{r.name}</strong><p>{r.features}</p></Link>})}
      </div></section>
    </main>
    
  </>;
}
