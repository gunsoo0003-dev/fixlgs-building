import {notFound} from 'next/navigation';
import ManagementClient from '../../../ManagementClient';
import {getManagementContent,MANAGEMENT_LOCALES,MANAGEMENT_SLUGS} from '../../../management-i18n';
import '../../../analysis.css';
import '../../../contract.css';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!MANAGEMENT_LOCALES.includes(locale)) return {};
  const list=Array.isArray(view)?view:[];
  const slug=list[0];
  if(list.length>1 || (slug&&!MANAGEMENT_SLUGS.includes(slug))) return {};
  const content=getManagementContent(locale);
  const section=slug?content.sections.find(x=>x.id===slug):null;
  const path=section?`/management/${section.id}`:'/management';
  const canonical=`${SITE_URL}/building/${locale}${path}`;
  const title=section?`${section.name} | FIX BUILDING`:content.meta.title;
  const description=section?`${section.prompt}. ${section.introParagraphs?.[0]||''}`.replace(/\s+/g,' ').trim():content.meta.description;
  const languages={
    ko:`${SITE_URL}/building/ko${path}`,
    en:`${SITE_URL}/building/en${path}`,
    ja:`${SITE_URL}/building/ja${path}`,
    'x-default':`${SITE_URL}/building/ko${path}`,
  };
  return {
    title,
    description,
    alternates:{canonical,languages},
    robots:{index:!section,follow:true},
    openGraph:{title,description:section?description:content.meta.og,url:canonical,type:'article'},
  };
}

export default async function ManagementRoute({params}){
  const {locale,view=[]}=await params;
  if(!MANAGEMENT_LOCALES.includes(locale)) notFound();
  const list=Array.isArray(view)?view:[];
  if(list.length>1 || (list[0]&&!MANAGEMENT_SLUGS.includes(list[0]))) notFound();
  const content=getManagementContent(locale);
  return <main className="analysis-page-v019-root"><ManagementClient locale={locale} initialView={list}/><section className="an19-seo-corpus" aria-label="FIX BUILDING MANAGEMENT"><h2>FIX BUILDING MANAGEMENT</h2><p>{content.ui.seoCorpus}</p></section></main>;
}
