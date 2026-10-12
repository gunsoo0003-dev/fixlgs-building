'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_COPY, LOCALES, HEADER_SUBMENUS } from './site-copy';
import {PUBLISHED_LOCALES} from '../publication-config.mjs';

const BASE_PATH = '/building';

export default function SiteHeader({ locale='ko' }) {
  const copy = SITE_COPY[locale] || SITE_COPY.ko;
  const services = copy.services;
  const submenus = HEADER_SUBMENUS[locale] || HEADER_SUBMENUS.ko;
  const pathname = usePathname();
  const publishedLanguages = LOCALES.filter(item => PUBLISHED_LOCALES.includes(item.code));
  const [langOpen, setLangOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const hideTimer = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLabels = {
    ko: {menu:'메뉴', sections:'세부 항목', samples:'결과 예시 보기'},
    en: {menu:'Menu', sections:'Details', samples:'Result examples'},
    ja: {menu:'メニュー', sections:'詳細項目', samples:'結果例を見る'},
  }[locale] || {menu:'메뉴', sections:'세부 항목', samples:'결과 예시 보기'};

  const cleanPath = (pathname || `/${locale}`).replace(/^\/building(?=\/|$)/, '');
  const localeRoot = `/${locale}`;
  const isHome = cleanPath === localeRoot || cleanPath === `${localeRoot}/`;

  useEffect(() => {
    const onMouseMove = (e) => {
      if (e.clientY < 14) {
        window.clearTimeout(hideTimer.current);
        setNavVisible(true);
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    let observer;
    if (isHome) {
      observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      }, { threshold: [0.35, 0.6] });

      services.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer?.disconnect();
      window.clearTimeout(hideTimer.current);
    };
  }, [isHome, services]);

  // Native <details> keeps the mobile menu keyboard-accessible without an added library.
  useEffect(() => {
    const closeOutside = (event) => {
      if (mobileMenuRef.current?.open && !mobileMenuRef.current.contains(event.target)) {
        mobileMenuRef.current.open = false;
      }
    };
    const closeEscape = (event) => {
      if (event.key === 'Escape' && mobileMenuRef.current?.open) {
        mobileMenuRef.current.open = false;
        mobileMenuRef.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  };

  const showNav = () => {
    window.clearTimeout(hideTimer.current);
    setNavVisible(true);
  };

  const queueHide = () => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      setNavVisible(false);
      setLangOpen(false);
    }, 380);
  };

  const serviceHref = (id) => {
    if (isHome) return `#${id}`;
    return `${BASE_PATH}/${locale}#${id}`;
  };

  const submenuHref = (href) => `${BASE_PATH}/${locale}${href}`;
  const sampleHref = `${BASE_PATH}/${locale}/self-check/results`;
  const serviceCurrent = (id) => {
    if (isHome) return activeSection === id;
    if (id === 'self') return cleanPath.startsWith(`${localeRoot}/self-check`);
    return cleanPath.startsWith(`${localeRoot}/${id}`);
  };

  const languageHref = (code) => `${BASE_PATH}${cleanPath.replace(/^\/(ko|en|ja)(?=\/|$)/, `/${code}`)}`;
  const switchLanguage = (event, code) => {
    if (code === locale) {
      event.preventDefault();
      setLangOpen(false);
      return;
    }
    try {
      localStorage.setItem('fix-building-locale', code);
      document.cookie = `fix-building-locale=${code}; Max-Age=31536000; Path=/; SameSite=Lax`;
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const target = current.replace(/\/(ko|en|ja)(?=\/|$)/, `/${code}`);
      if (target !== current) {
        event.preventDefault();
        window.location.assign(target);
      }
    } catch {}
  };

  return <>
    <header className="fb-mobile-header">
      <a className="fb-mobile-brand" href={`${BASE_PATH}/${locale}#top`} onClick={closeMobileMenu}>FIX BUILDING</a>
      <details className="fb-mobile-menu" ref={mobileMenuRef}>
        <summary>{mobileLabels.menu}<span aria-hidden="true">☰</span></summary>
        <nav className="fb-mobile-menu-panel" aria-label={copy.navAria}>
          {services.map((service) => {
            const children = submenus[service.id] || [];
            const current = serviceCurrent(service.id);
            return <div className="fb-mobile-group" key={service.id}>
              <a className={`fb-mobile-main-link ${current ? 'is-current' : ''}`} href={serviceHref(service.id)} onClick={closeMobileMenu}>{service.label}</a>
              {children.length > 0 && <details className="fb-mobile-submenu">
                <summary>{mobileLabels.sections} <span aria-hidden="true">⌄</span></summary>
                <div className="fb-mobile-submenu-links">
                  {children.map((item) => <a key={item.href} href={submenuHref(item.href)} onClick={closeMobileMenu}>{item.label}</a>)}
                </div>
              </details>}
            </div>;
          })}
          <a className="fb-mobile-samples" href={sampleHref} onClick={closeMobileMenu}>{mobileLabels.samples}</a>
        </nav>
      </details>
    </header>
    <div className="top-hotzone" onMouseEnter={showNav} aria-hidden="true" />
    <header className={`reveal-nav ${navVisible ? 'is-visible' : ''}`} onMouseEnter={showNav} onMouseLeave={queueHide}>
      <div className="nav-inner">
        <a className="nav-brand" href={`${BASE_PATH}/${locale}#top`}>FIX BUILDING</a>
        <div className="nav-actions">
          <nav className="nav-primary" aria-label={copy.navAria}>
            {services.map((service) => {
              const current = serviceCurrent(service.id);
              const children = submenus[service.id] || [];
              return <div className="nav-service" key={service.id}>
                <a href={serviceHref(service.id)} className={`nav-service-link ${current ? 'is-current' : ''}`}>{service.label}</a>
                {children.length > 0 && <div className="nav-submenu" aria-label={`${service.label} submenu`}>
                  {children.map((item) => <a key={item.href} href={submenuHref(item.href)}>{item.label}</a>)}
                </div>}
              </div>;
            })}
          </nav>
          <a className="nav-result-samples" href={sampleHref}>RESULT SAMPLES</a>
          {publishedLanguages.length > 1 && <div className={`language-menu ${langOpen ? 'is-open' : ''}`}>
            <button type="button" className="language-trigger" aria-haspopup="menu" aria-expanded={langOpen} onClick={() => setLangOpen((value) => !value)}>
              {locale.toUpperCase()} <span aria-hidden="true">⌄</span>
            </button>
            <div className="language-dropdown" role="menu">
              {publishedLanguages.map((item) => {
                const target = languageHref(item.code);
                return <a key={item.code} role="menuitem" href={target} onClick={(event)=>switchLanguage(event,item.code)} className={locale === item.code ? 'is-active' : ''} aria-current={locale === item.code ? 'page' : undefined}>{item.label}</a>;
              })}
            </div>
          </div>}
        </div>
      </div>
    </header>
  </>;
}
