'use client';

import { SITE_COPY } from './site-copy';

const MAIN_HOME = 'https://fixlgs.com/';
const MAIN_PRIVACY = 'https://fixlgs.com/privacy';
const MAIN_TERMS = 'https://fixlgs.com/terms';
const MAIN_CONTACT = 'https://fixlgs.com/contact?app=FIX%20BUILDING';
const BASE_PATH = '/building';

export default function SiteFooter({ locale='ko' }) {
  const copy = SITE_COPY[locale] || SITE_COPY.ko;
  return (
    <footer className="site-footer">
      <a className="footer-main-home" href={MAIN_HOME} aria-label="FIXLGS HOME">FIXLGS</a>
      <a className="footer-current" href={`${BASE_PATH}/${locale}`}>FIX BUILDING</a>
      <nav aria-label="Footer">
        <a href={MAIN_PRIVACY}>{copy.footer.privacy}</a><span>|</span>
        <a href={MAIN_TERMS}>{copy.footer.terms}</a><span>|</span>
        <a href={MAIN_CONTACT}>{copy.footer.contact}</a>
      </nav>
    </footer>
  );
}
