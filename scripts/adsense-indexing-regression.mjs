import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ANALYSIS_AXES_V019} from '../app/analysis-v019-data.js';
import {ANALYSIS_COPY,ANALYSIS_LOCALES} from '../app/analysis-copy.js';
import {PUBLIC_RESULT_PATHS} from '../app/self-check-public-data.js';
import {PUBLISHED_LOCALES,publishedLanguageUrls} from '../publication-config.mjs';

const read=(path)=>readFileSync(new URL(path,import.meta.url),'utf8');
const mgData=read('../app/management-i18n.js');
const match=mgData.match(/export const MANAGEMENT_SLUGS=(\[[^\]]+\]);/);
assert.ok(match,'Management slug registry missing');
const MANAGEMENT_SLUGS=Function(`return ${match[1]}`)();
const slugIds=ANALYSIS_AXES_V019.map(x=>x.id);
assert.deepEqual(slugIds,['price','income','rights','building','location','operation']);
assert.deepEqual(MANAGEMENT_SLUGS,['rent','vacancy','tenant','cost','facility','record']);

function metadataFunction(src,deps){
  const from=src.indexOf('const SITE_URL=');
  const end=src.indexOf('export default',from);
  assert.ok(from>=0 && end>from,'Route metadata block missing');
  const js=src.slice(from,end).replace('export async function generateMetadata','async function generateMetadata');
  return Function(...Object.keys(deps),`${js}\nreturn generateMetadata;`)(...Object.values(deps));
}
const enja=Object.fromEntries(['en','ja'].map(l=>[l,ANALYSIS_AXES_V019.map(a=>({...a,name:`${l}-${a.name}`}))]));
const analysisSrc=read('../app/[locale]/analysis/[[...view]]/page.js');
const analysisMeta=metadataFunction(analysisSrc,{
  process,ANALYSIS_AXES_V019,ANALYSIS_AXES_V039:enja,
  ANALYSIS_COPY,ANALYSIS_LOCALES,PUBLISHED_LOCALES,publishedLanguageUrls,
});
const managementSrc=read('../app/[locale]/management/[[...view]]/page.js');
const getManagementContent=(locale)=>({
  sections:MANAGEMENT_SLUGS.map(id=>({id,name:`${locale}-${id}`,prompt:`${locale} commercial property management guidance for ${id}`,introParagraphs:[`Practical steps to monitor and document ${id} management conditions in South Korean buildings.`]})),
  meta:{title:'Management | FIX BUILDING',description:'Management home',og:'Management home'},
});
const mgmtMeta=metadataFunction(managementSrc,{
  process,MANAGEMENT_SLUGS,MANAGEMENT_LOCALES:['ko','en','ja'],getManagementContent,
  PUBLISHED_LOCALES,publishedLanguageUrls,
});

function renderSitemap(){
  const src=read('../app/sitemap.js').replace(/^import .*;\r?\n/gm,'').replace('export default function sitemap()','function sitemap()');
  return Function('process','PUBLIC_RESULT_PATHS','ANALYSIS_AXES_V019','MANAGEMENT_SLUGS','PUBLISHED_LOCALES',`${src}\nreturn sitemap();`)(process,PUBLIC_RESULT_PATHS,ANALYSIS_AXES_V019,MANAGEMENT_SLUGS,PUBLISHED_LOCALES);
}
const sitemap=renderSitemap();
assert.equal(PUBLISHED_LOCALES.length,1,'Only Korean should be published for AdSense review');
assert.equal(PUBLISHED_LOCALES[0],'ko');
assert.equal(sitemap.length,88,'Sitemap should contain 76 existing URLs + 12 detail URLs');
const urlList=sitemap.map(x=>x.url);
assert.equal(new Set(urlList).size,urlList.length,'Sitemap URLs must be unique');
assert.ok(urlList.every(url=>url==='https://fixlgs.com/building/ko' || url.startsWith('https://fixlgs.com/building/ko/')));
for(const slug of slugIds){
  const path=`/building/ko/analysis/${slug}`;
  assert.ok(urlList.includes(`https://fixlgs.com${path}`),`Missing sitemap path: ${path}`);
  const meta=await analysisMeta({params:Promise.resolve({locale:'ko',view:[slug]})});
  assert.equal(meta.robots.index,true,`Analysis detail must be indexable: ${slug}`);
  assert.equal(meta.alternates.canonical,`https://fixlgs.com${path}`);
  assert.equal(meta.openGraph.url,meta.alternates.canonical);
  assert.ok(meta.title.includes('FIX BUILDING')&&meta.description.length>40);
  assert.deepEqual(Object.keys(meta.alternates.languages).sort(),['ko-KR','x-default']);
  assert.equal((await analysisMeta({params:Promise.resolve({locale:'en',view:[slug]})})).robots.index,false);
}
for(const slug of MANAGEMENT_SLUGS){
  const path=`/building/ko/management/${slug}`;
  assert.ok(urlList.includes(`https://fixlgs.com${path}`),`Missing sitemap path: ${path}`);
  const meta=await mgmtMeta({params:Promise.resolve({locale:'ko',view:[slug]})});
  assert.equal(meta.robots.index,true,`Management detail must be indexable: ${slug}`);
  assert.equal(meta.alternates.canonical,`https://fixlgs.com${path}`);
  assert.equal(meta.openGraph.url,meta.alternates.canonical);
  assert.ok(meta.title.includes('FIX BUILDING')&&meta.description.length>30);
  assert.deepEqual(Object.keys(meta.alternates.languages).sort(),['ko-KR','x-default']);
  assert.equal((await mgmtMeta({params:Promise.resolve({locale:'ja',view:[slug]})})).robots.index,false);
}
for(const group of ['analysis','management']){
  const meta=await (group==='analysis'?analysisMeta:mgmtMeta)({params:Promise.resolve({locale:'ko',view:[]})});
  assert.equal(meta.robots.index,true,`${group} home must remain indexable`);
  assert.equal(meta.alternates.canonical,`https://fixlgs.com/building/ko/${group}`);
}
assert.deepEqual(await analysisMeta({params:Promise.resolve({locale:'ko',view:['invalid-slug']})}),{});
assert.deepEqual(await analysisMeta({params:Promise.resolve({locale:'ko',view:['price','extra']})}),{});
assert.match(analysisSrc,/if\(!ANALYSIS_LOCALES\.includes\(locale\) \|\| !validView\(view\)\) notFound\(\)/);
for(const name of ['privacy','terms']){
  const page=read(`../app/[locale]/${name}/page.js`);
  assert.ok(page.includes(`permanentRedirect('https://fixlgs.com/${name}')`),`Shared policy destination must remain unchanged: ${name}`);
}
console.log(`PASS: ${slugIds.length} analysis and ${MANAGEMENT_SLUGS.length} management indexable detail pages; path-specific metadata/canonicals; 88 unique KO sitemap URLs; EN/JA not indexed; shared main policy URLs preserved.`);
