import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import OfficialReferences from '../OfficialReferences';
import '../official-references.css';
import '../mobile-navigation.css';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return <>
    <SiteHeader locale={locale}/>
    {children}
    <OfficialReferences/>
    <SiteFooter locale={locale}/>
  </>;
}
