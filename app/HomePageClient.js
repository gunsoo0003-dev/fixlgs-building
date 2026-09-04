'use client';

import { useEffect, useState } from 'react';
import { SITE_COPY } from './site-copy';

const BASE_PATH = '/building';

function FlowIcon({ type }) {
  const common = { viewBox:"0 0 160 120", className:"flow-svg", "aria-hidden":"true" };

  const Dot = ({cx,cy,active=false}) => <circle className={active ? "g-node g-node-active" : "g-node"} cx={cx} cy={cy} r="3.2"/>;
  const Block = ({x,y,w,h}) => <rect className="g-block" x={x} y={y} width={w} height={h} rx="2"/>;

  if(type==="check") return <svg {...common}>
    <rect className="g-frame" x="12" y="15" width="76" height="88" rx="2"/>
    <path className="g-heavy" d="M12 30h76M28 15v15M47 15v15M66 15v15"/>
    <Block x="24" y="40" w="18" h="12"/><Block x="48" y="40" w="26" h="12"/>
    <Block x="24" y="58" w="26" h="12"/><Block x="56" y="58" w="18" h="12"/>
    <path className="g-checkpath" d="M27 82l6 6 11-13"/>
    <path className="g-flowpath" d="M88 27h18v22h16M88 73h18v20h16"/>
    <Dot cx="106" cy="27"/><Dot cx="122" cy="49"/><Dot cx="106" cy="73"/><Dot cx="122" cy="93"/>
    <path className="g-signal-in" d="M-2 60h20l7-7 7 7"/>
    <circle className="g-core" cx="21" cy="60" r="4"/>
    <path className="g-out" d="M122 60h30"/>
  </svg>;

  if(type==="analysis") return <svg {...common}>
    <rect className="g-frame" x="22" y="16" width="104" height="88" rx="3"/>
    <path className="g-grid" d="M22 36h104M22 56h104M22 76h104M42 16v88M64 16v88M86 16v88M106 16v88"/>
    <path className="g-heavy" d="M32 88h78M32 88V46"/>
    <path className="g-chart" d="M38 79l12-16 10 9 12-23 12 13 15-20"/>
    <Dot cx="50" cy="63"/><Dot cx="72" cy="49"/><Dot cx="84" cy="62"/><Dot cx="99" cy="42"/>
    <path className="g-scan" d="M29 25h90"/>
    <path className="g-signal-in" d="M-2 60h24"/>
    <circle className="g-core" cx="25" cy="60" r="4"/>
    <path className="g-out" d="M126 60h28"/>
  </svg>;

  if(type==="contract") return <svg {...common}>
    <rect className="g-frame" x="17" y="14" width="84" height="92" rx="2"/>
    <path className="g-heavy" d="M17 29h84M31 14v15M54 14v15M77 14v15"/>
    <Block x="29" y="39" w="28" h="9"/><Block x="62" y="39" w="25" h="9"/>
    <Block x="29" y="54" w="58" h="8"/><Block x="29" y="68" w="40" h="8"/>
    <path className="g-sign" d="M31 89c9-8 12 8 20-1 6-7 9 6 16-2 7-9 11 2 17-5"/>
    <circle className="g-approve" cx="104" cy="91" r="10"/>
    <path className="g-approve-mark" d="M99 91l4 4 7-9"/>
    <path className="g-signal-in" d="M-2 57h19"/>
    <circle className="g-core" cx="21" cy="57" r="4"/>
    <path className="g-out" d="M104 25h18v32h16M104 91h18v-34"/>
  </svg>;

  if(type==="management") return <svg {...common}>
    <path className="g-frame" d="M13 103V46l24-17 24 17v57M61 103V24h55v79"/>
    <path className="g-heavy" d="M20 56h12M20 68h12M20 80h12M70 39h13M70 53h13M70 67h13M70 81h13"/>
    <path className="g-monitor" d="M94 39h14M94 53h14M94 67h14M94 81h14"/>
    <circle className="g-node" cx="43" cy="51" r="4"/><circle className="g-node" cx="43" cy="77" r="4"/>
    <circle className="g-node" cx="122" cy="31" r="4"/><circle className="g-node" cx="122" cy="64" r="4"/><circle className="g-node" cx="122" cy="94" r="4"/>
    <path className="g-flowpath" d="M61 42h61M61 75h61M61 94h61"/>
    <path className="g-chart" d="M72 91l8-8 7 5 9-13 9 7"/>
    <path className="g-signal-in" d="M-2 75h20"/>
    <circle className="g-core" cx="21" cy="75" r="4"/>
    <path className="g-out" d="M126 75h28"/>
  </svg>;

  if(type==="exit") return <svg {...common}>
    <rect className="g-frame" x="12" y="18" width="55" height="82" rx="2"/>
    <path className="g-heavy" d="M25 33h28M25 47h20M25 61h28M25 75h17"/>
    <circle className="g-decision" cx="82" cy="60" r="13"/>
    <path className="g-branch" d="M95 60h19M82 47V27M82 73v20"/>
    <circle className="g-node" cx="114" cy="27" r="4"/><circle className="g-node" cx="114" cy="93" r="4"/>
    <path className="g-route" d="M114 27h32M114 93h32"/>
    <path className="g-signal-in" d="M-2 60h14"/>
    <circle className="g-core" cx="16" cy="60" r="4"/>
    <path className="g-out" d="M95 60h58"/>
  </svg>;

  return <svg {...common}>
    <rect className="g-result" x="113" y="45" width="28" height="30" rx="3"/>
    <circle className="g-node" cx="20" cy="23" r="6"/><circle className="g-node" cx="24" cy="94" r="6"/>
    <circle className="g-node" cx="68" cy="16" r="6"/><circle className="g-node" cx="72" cy="101" r="6"/>
    <circle className="g-node" cx="65" cy="59" r="8"/>
    <path className="g-network" d="M26 25l33 28M29 91l30-25M74 21l-4 30M76 97l-8-30M73 59h40"/>
    <path className="g-network-soft" d="M26 25l48 72M29 91l45-70M20 23l52 78"/>
    <Block x="47" y="43" w="15" h="9"/><Block x="47" y="67" w="15" h="9"/>
    <path className="g-signal-in" d="M-2 59h17"/>
    <circle className="g-core" cx="19" cy="59" r="4"/>
    <path className="g-out" d="M141 60h13"/>
  </svg>;
}

export default function HomePage({ locale = 'ko' }) {
  const copy = SITE_COPY[locale] || SITE_COPY.ko;
  const services = copy.services;
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : locale === 'en' ? 'en' : 'ko';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let flowTimer;
    if (!reduce) {
      flowTimer = window.setInterval(() => setActiveFlow((v) => (v + 1) % services.length), 3200);
    }

    return () => {
      if (flowTimer) window.clearInterval(flowTimer);
    };
  }, [locale, services]);

  return (
    <>
      <div className="page-viewport">
        <div className="page-canvas">
      <main id="top">
        <section className="hero" aria-label={copy.heroAria}>
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/building/assets/service-self.webp">
            <source src="/building/assets/hero-building.mp4" type="video/mp4" />
          </video>
          <div className="hero-vignette" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">FIX BUILDING</div>
              <h1>BUILDING<br/>YOUR NEXT<br/><span>FIX.</span></h1>
              <p>{copy.heroLine1}<br/>{copy.heroLine2}</p>
              <a className="hero-cta" href="#flow">{copy.heroCta} <span>→</span></a>
            </div>
            <div className="scroll-cue">SCROLL <span /></div>
          </div>
        </section>

        <section className="flow-section" id="flow" aria-label={copy.flowAria}>
          <div className="flow-intro"><small>FIX PROCESS</small><h2>SEE THE WHOLE FLOW.</h2></div>
          <div className="flow-shell">
            <div className="flow-track">
              {services.map((s, idx) => (
                <div className="flow-pair" key={s.id}>
                  <article className={`flow-item flow-${s.id} ${activeFlow === idx ? 'is-active' : ''}`}>
                    <FlowIcon type={s.icon} />
                    <strong>{s.label}</strong>
                  </article>
                  {idx < services.length - 1 && (
  <div className={`flow-link ${activeFlow === idx ? 'is-current-link' : ''}`} aria-hidden="true">
    <svg viewBox="0 0 260 64" preserveAspectRatio="none">
      <path className="ecg-base" d="M0 32 H82 L96 32 L106 12 L119 52 L132 20 L144 32 H260"/>
      <path className="ecg-signal" d="M0 32 H82 L96 32 L106 12 L119 52 L132 20 L144 32 H260"/>
      <path className="ecg-light-blue" d="M0 32 H82 L96 32 L106 12 L119 52 L132 20 L144 32 H260"/>
      <path className="ecg-light" d="M0 32 H82 L96 32 L106 12 L119 52 L132 20 L144 32 H260"/>
    </svg>
  </div>
)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" aria-label={copy.servicesAria}>
          <div className="services-grid">
            {services.map((s) => (
              <a className="service-card" id={s.id} href={s.id === 'self' ? `${BASE_PATH}/${locale}/self-check` : s.id === 'analysis' ? `${BASE_PATH}/${locale}/analysis` : s.id === 'contract' ? `${BASE_PATH}/${locale}/contract` : s.id === 'management' && locale === 'ko' ? `${BASE_PATH}/${locale}/management` : '#'} key={s.id}>
                <img src={s.image} alt={s.alt} />
                <div className="service-shade" />
                <div className="service-copy"><small>{s.num}</small><h2>{s.cardTitle || s.label}</h2><p>{s.desc}</p><b>→</b></div>
              </a>
            ))}
          </div>
        </section>

      </main>

      </div>
      <section className="blue-statement" aria-label={copy.guideIntroAria}>
        <div className="blue-inner"><small>SIMPLE TO USE.</small><h2>HOW TO USE FIX.</h2></div>
      </section>
        <section className="guide-section" aria-label={copy.guideAria}>
          <div className="guide-inner">
            <div className="guide-lead">
              <div className="guide-label">GUIDE</div>
              <div>
                <h2>{copy.guideTitle}</h2>
                <p>{copy.guideLead}</p>
              </div>
            </div>
            <div className="guide-copy-list">
              {copy.guideItems.map((item) => (
                <article key={item.num}>
                  <div className="guide-meta">
                    <div className="guide-step"><span>{item.num}</span><em>{item.phase}</em></div>
                    <div className="guide-check"><small>{copy.checkLabel}</small>{item.checks.map((check) => <span key={check}>{check}</span>)}</div>
                  </div>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}
