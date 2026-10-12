import { notFound } from 'next/navigation';
import AnalysisPage from '../../../AnalysisPage';
import { ANALYSIS_COPY, ANALYSIS_LOCALES } from '../../../analysis-copy';
import { ANALYSIS_AXES_V019 } from '../../../analysis-v019-data';
import { ANALYSIS_AXES_V039 } from '../../../analysis-v039-localized';
import '../../../analysis.css';
import { PUBLISHED_LOCALES, publishedLanguageUrls } from '../../../../publication-config.mjs';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';
const ANALYSIS_IDS=new Set(ANALYSIS_AXES_V019.map(axis=>axis.id));

function validView(view){
  const list=Array.isArray(view)?view:(view?[view]:[]);
  return list.length<=1 && (!list[0] || ANALYSIS_IDS.has(list[0]));
}

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!ANALYSIS_LOCALES.includes(locale) || !validView(view)) return {};
  const slug=Array.isArray(view)?view[0]:view;
  const copy=ANALYSIS_COPY[locale];
  const axes=locale==='ko'?ANALYSIS_AXES_V019:ANALYSIS_AXES_V039[locale];
  const axis=slug?axes.find(item=>item.id===slug):null;
  const path=axis?`/analysis/${axis.id}`:'/analysis';
  const canonical=`${SITE_URL}/building/${locale}${path}`;
  const analysisSuffix=locale==='en'?'Analysis':locale==='ja'?'分析':'분석';
  const title=axis?`${axis.name} ${analysisSuffix} | FIX BUILDING`:copy.metaTitle;
  const context=axis?(axis.concept?.takeaway||axis.concept?.body||axis.question):'';
  const description=axis?`${axis.question} ${String(context).replace(/\s+/g,' ').trim().slice(0,170)}`:copy.metaDescription;
  return {
    title,
    description,
    alternates:{canonical,languages:publishedLanguageUrls(path,SITE_URL)},
    robots:{index:PUBLISHED_LOCALES.includes(locale),follow:true},
    openGraph:{title,description,url:canonical,type:axis?'article':'website'},
  };
}

export default async function AnalysisRoute({params}){
  const {locale,view=[]}=await params;
  if(!ANALYSIS_LOCALES.includes(locale) || !validView(view)) notFound();
  return <AnalysisPage locale={locale} initialView={Array.isArray(view)?view:[]}/>;
}
