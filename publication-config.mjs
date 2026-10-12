// Publication controls only. EN/JA content remains available in the source tree.
export const BUILDING_BASE_PATH = '/building';
export const DEFAULT_LOCALE = 'ko';
export const SUPPORTED_LOCALES = ['ko', 'en', 'ja'];
export const PUBLISHED_LOCALES = ['ko'];

export function publishedLanguageUrls(path = '', siteUrl = '') {
  const prefix = siteUrl.replace(/\/$/, '');
  const tags = {ko: 'ko-KR', en: 'en', ja: 'ja-JP'};
  return {
    ...Object.fromEntries(PUBLISHED_LOCALES.map(locale => [
      tags[locale], `${prefix}${BUILDING_BASE_PATH}/${locale}${path}`,
    ])),
    'x-default': `${prefix}${BUILDING_BASE_PATH}/${DEFAULT_LOCALE}${path}`,
  };
}

export function unpublishedLocaleRedirects() {
  return SUPPORTED_LOCALES.filter(locale => !PUBLISHED_LOCALES.includes(locale))
    .map(locale => ({
      source: `${BUILDING_BASE_PATH}/${locale}/:path*`,
      destination: `${BUILDING_BASE_PATH}/${DEFAULT_LOCALE}/:path*`,
      basePath: false,
      permanent: false,
    }));
}
