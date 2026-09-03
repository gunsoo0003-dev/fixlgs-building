import {notFound} from 'next/navigation';
import ContractPage from '../../../ContractPage';
import {CONTRACT_COPY,CONTRACT_LOCALES,CONTRACT_SLUGS} from '../../../contract-copy';
import '../../../contract.css';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';

export async function generateMetadata({params}){
  const {locale,view=[]}=await params;
  if(!CONTRACT_LOCALES.includes(locale)) return {};
  const copy=CONTRACT_COPY[locale];
  const slug=Array.isArray(view)?view[0]:undefined;
  const page=slug?copy.pages.find(p=>p.slug===slug):null;
  const valid=!slug || CONTRACT_SLUGS.includes(slug);
  if(!valid) return {};
  const path=page?`/contract/${page.slug}`:'/contract';
  const canonical=`${SITE_URL}/building/${locale}${path}`;
  const title=page?`${page.title} | FIX BUILDING`:copy.metaTitle;
  const description=page?page.hero:copy.metaDescription;
  return {title,description,alternates:{canonical,languages:{'ko':`${SITE_URL}/building/ko${path}`,'en':`${SITE_URL}/building/en${path}`,'ja':`${SITE_URL}/building/ja${path}`,'x-default':`${SITE_URL}/building/ko${path}`}},robots:{index:true,follow:true},openGraph:{title,description,url:canonical,type:'article'}};
}

export default async function ContractRoute({params}){
  const {locale,view=[]}=await params;
  if(!CONTRACT_LOCALES.includes(locale)) notFound();
  const list=Array.isArray(view)?view:[];
  if(list.length>1 || (list[0]&&!CONTRACT_SLUGS.includes(list[0]))) notFound();
  return <ContractPage locale={locale} initialView={list}/>;
}
