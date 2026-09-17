import { notFound } from 'next/navigation';
import AnalysisPage from '../../../AnalysisPage';
import { ANALYSIS_COPY, ANALYSIS_LOCALES } from '../../../analysis-copy';
import '../../../analysis.css';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!ANALYSIS_LOCALES.includes(locale)) return {};
  const copy=ANALYSIS_COPY[locale];
  const canonical=`${SITE_URL}/building/${locale}/analysis`;
  const isRoot=!view?.length;
  return {
    title:copy.metaTitle,
    description:copy.metaDescription,
    alternates:{canonical,languages:{'ko-KR':`${SITE_URL}/building/ko/analysis`,'en':`${SITE_URL}/building/en/analysis`,'ja-JP':`${SITE_URL}/building/ja/analysis`}},
    robots:{index:isRoot,follow:true},
    openGraph:{title:copy.metaTitle,description:copy.metaDescription,url:canonical,type:'article'},
  };
}

export default async function AnalysisRoute({params}){
  const {locale,view=[]}=await params;
  if(!ANALYSIS_LOCALES.includes(locale)) notFound();
  return <AnalysisPage locale={locale} initialView={Array.isArray(view)?view:[]}/>;
}
