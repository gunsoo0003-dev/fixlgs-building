import { PUBLIC_RESULT_PATHS } from './self-check-public-data';
import { ANALYSIS_AXES_V019 } from './analysis-v019-data';
import { MANAGEMENT_SLUGS } from './management-i18n';
import {PUBLISHED_LOCALES} from '../publication-config.mjs';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';
const locales=PUBLISHED_LOCALES;

export default function sitemap(){
  const now=new Date();
  const home=locales.map((locale,i)=>({url:`${SITE_URL}/building/${locale}`,lastModified:now,changeFrequency:'weekly',priority:i===0?1:.8}));
  const analysis=locales.flatMap(locale=>[
    {url:`${SITE_URL}/building/${locale}/analysis`,lastModified:now,changeFrequency:'monthly',priority:.9},
    ...ANALYSIS_AXES_V019.map(axis=>({url:`${SITE_URL}/building/${locale}/analysis/${axis.id}`,lastModified:now,changeFrequency:'monthly',priority:.75})),
  ]);
  const contractSlugs=['parties','property','payment','terms','recheck','closing','checklist','red-flags','mistakes'];
  const contract=locales.flatMap(locale=>[
    {url:`${SITE_URL}/building/${locale}/contract`,lastModified:now,changeFrequency:'monthly',priority:.9},
    ...contractSlugs.map(slug=>({url:`${SITE_URL}/building/${locale}/contract/${slug}`,lastModified:now,changeFrequency:'monthly',priority:.75})),
  ]);
  const selfCheck=locales.flatMap(locale=>[
    {url:`${SITE_URL}/building/${locale}/self-check`,lastModified:now,changeFrequency:'monthly',priority:.9},
    {url:`${SITE_URL}/building/${locale}/self-check/results`,lastModified:now,changeFrequency:'monthly',priority:.8},
  ]);
  const results=locales.flatMap(locale=>PUBLIC_RESULT_PATHS.map(path=>({
    url:`${SITE_URL}/building/${locale}/self-check/${path}`,
    lastModified:now,
    changeFrequency:'monthly',
    priority:.65,
  })));
  const management=locales.flatMap(locale=>[
    {url:`${SITE_URL}/building/${locale}/management`,lastModified:now,changeFrequency:'monthly',priority:.9},
    ...MANAGEMENT_SLUGS.map(slug=>({url:`${SITE_URL}/building/${locale}/management/${slug}`,lastModified:now,changeFrequency:'monthly',priority:.75})),
  ]);
  const exitSlugs=['decision','readiness','pricing','buyer-readiness','net-proceeds','closing'];
  const exit=locales.flatMap(locale=>[
    {url:`${SITE_URL}/building/${locale}/exit`,lastModified:now,changeFrequency:'monthly',priority:.9},
    ...exitSlugs.map(slug=>({url:`${SITE_URL}/building/${locale}/exit/${slug}`,lastModified:now,changeFrequency:'monthly',priority:.75})),
  ]);
  return [...home,...analysis,...contract,...management,...exit,...selfCheck,...results];
}
