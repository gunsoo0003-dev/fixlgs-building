import {notFound} from 'next/navigation';
import ManagementClient from '../../../ManagementClient';
import {getManagementContent,MANAGEMENT_LOCALES,MANAGEMENT_SLUGS} from '../../../management-i18n';
import '../../../analysis.css';
import '../../../contract.css';
import {PUBLISHED_LOCALES,publishedLanguageUrls} from '../../../../publication-config.mjs';

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
  const baseDescription=section?`${section.prompt}. ${section.introParagraphs?.[0]||''}`.replace(/\s+/g,' ').trim():content.meta.description;
  const koreaScope=locale==='en'?' Applicable to real estate in South Korea under Korean laws, KRW and Korean area units.':locale==='ja'?' 対象は韓国の不動産で、法制度・通貨（KRW）・面積単位は韓国基準です。':'';
  const description=baseDescription+koreaScope;
  const languages=publishedLanguageUrls(path,SITE_URL);
  return {
    title,
    description,
    alternates:{canonical,languages},
    robots:{index:PUBLISHED_LOCALES.includes(locale),follow:true},
    openGraph:{title,description:section?description:content.meta.og+koreaScope,url:canonical,type:'article'},
  };
}

export default async function ManagementRoute({params}){
  const {locale,view=[]}=await params;
  if(!MANAGEMENT_LOCALES.includes(locale)) notFound();
  const list=Array.isArray(view)?view:[];
  if(list.length>1 || (list[0]&&!MANAGEMENT_SLUGS.includes(list[0]))) notFound();
  return <main className="analysis-page-v019-root"><ManagementClient locale={locale} initialView={list}/></main>;
}
