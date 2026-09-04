'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_COPY, LOCALES, HEADER_SUBMENUS } from './site-copy';

const BASE_PATH = '/building';

export default function SiteHeader({ locale='ko' }) {
  const copy = SITE_COPY[locale] || SITE_COPY.ko;
  const services = copy.services;
  const submenus = HEADER_SUBMENUS[locale] || HEADER_SUBMENUS.ko;
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const hideTimer = useRef(null);

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
          <div className={`language-menu ${langOpen ? 'is-open' : ''}`}>
            <button type="button" className="language-trigger" aria-haspopup="menu" aria-expanded={langOpen} onClick={() => setLangOpen((value) => !value)}>
              {locale.toUpperCase()} <span aria-hidden="true">⌄</span>
            </button>
            <div className="language-dropdown" role="menu">
              {LOCALES.map((item) => {
                const target = languageHref(item.code);
                return <a key={item.code} role="menuitem" href={target} onClick={(event)=>switchLanguage(event,item.code)} className={locale === item.code ? 'is-active' : ''} aria-current={locale === item.code ? 'page' : undefined}>{item.label}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  </>;
}
