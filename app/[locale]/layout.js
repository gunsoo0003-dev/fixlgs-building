import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return <>
    <SiteHeader locale={locale}/>
    {children}
    <SiteFooter locale={locale}/>
  </>;
}
