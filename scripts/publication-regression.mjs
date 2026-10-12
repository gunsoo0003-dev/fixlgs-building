import assert from 'node:assert/strict';
import fs from 'node:fs';
import {PUBLISHED_LOCALES, SUPPORTED_LOCALES, DEFAULT_LOCALE, publishedLanguageUrls, unpublishedLocaleRedirects} from '../publication-config.mjs';
import nextConfig from '../next.config.mjs';

assert(PUBLISHED_LOCALES.length > 0);
assert(PUBLISHED_LOCALES.includes(DEFAULT_LOCALE));
assert(PUBLISHED_LOCALES.every(locale => SUPPORTED_LOCALES.includes(locale)));
const hidden=SUPPORTED_LOCALES.filter(locale=>!PUBLISHED_LOCALES.includes(locale));
const redirects=await nextConfig.redirects();
assert.deepEqual(redirects,unpublishedLocaleRedirects());
assert.equal(redirects.length,hidden.length);
for(const locale of hidden){
  const rule=redirects.find(rule=>rule.source===`/building/${locale}/:path*`);
  assert(rule);
  assert.equal(rule.destination,`/building/${DEFAULT_LOCALE}/:path*`);
  assert.equal(rule.permanent,false);
  assert.equal(rule.basePath,false);
}
const urls=publishedLanguageUrls('/contract/parties','https://fixlgs.com/');
assert.equal(urls['x-default'],`https://fixlgs.com/building/${DEFAULT_LOCALE}/contract/parties`);
assert(Object.values(urls).every(url=>PUBLISHED_LOCALES.some(locale=>url.includes(`/building/${locale}/`))));
for(const filename of ['site-copy.js','contract-i18n-v035.js','analysis-v039-localized.js','self-check-stage1-copy.js','self-check-stage2-copy.js','self-check-stage3-copy.js','management-i18n.js','exit-i18n-data.js']){
  assert(fs.existsSync(new URL('../app/'+filename,import.meta.url)),filename);
}
console.log(`PASS: published=${PUBLISHED_LOCALES.join(',')}; hidden=${hidden.join(',')}; redirect configuration, alternate URLs and multilingual source preservation.`);
