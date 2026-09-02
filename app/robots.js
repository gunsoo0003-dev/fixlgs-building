const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fixlgs.com';

export default function robots(){
  return {
    rules:[{
      userAgent:'*',
      allow:'/',
      disallow:['/building/ko/self-check/dev-preview','/building/en/self-check/dev-preview','/building/ja/self-check/dev-preview'],
    }],
    sitemap:`${SITE_URL}/building/sitemap.xml`,
  };
}
