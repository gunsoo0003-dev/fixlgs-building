'use client';

import {Fragment,useEffect,useRef} from 'react';
import {getExitMain,getExitUi,normalizeExitLocale} from './exit-i18n-data';
import {EXIT_IMAGES,getExitImageAlt} from './exit-images';

const BASE_PATH='/building';

function SentenceText({text}){
  const value=String(text??'').trim();
  const sentences=value.match(/[^.!?。！？\n]+[.!?。！？]?/g)?.map(x=>x.trim()).filter(Boolean)||[];
  return <>{sentences.map((sentence,i)=><Fragment key={`${i}-${sentence}`}>{sentence}{i<sentences.length-1&&<br/>}</Fragment>)}</>;
}
function useReveal(rootRef){
  useEffect(()=>{
    const root=rootRef.current;if(!root)return;
    const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const els=[...root.querySelectorAll('.an32-reveal')];
    if(reduced){els.forEach(x=>x.classList.add('is-visible'));return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -8% 0px'});
    els.forEach(x=>io.observe(x));return()=>io.disconnect();
  },[rootRef]);
}

export default function ExitMainClient({locale='ko'}){
  const lang=normalizeExitLocale(locale);
  const rootRef=useRef(null); useReveal(rootRef);
  const s=getExitMain(lang); const ui=getExitUi(lang);
  const open=(step)=>{location.href=`${BASE_PATH}/${lang}/exit/${step.id}`;};
  const actionLabel=(name)=>lang==='en'?`View ${name}`:lang==='ja'?`${name}を見る`:`${name} 보기`;
  const nav=s.steps.map(step=>({...step,action:actionLabel(step.name)}));
  return <div ref={rootRef} className="an32-home exit-home">
    <section className="an32-hero mg-home-hero"><div className="an19-shell an32-hero-grid"><div className="an32-hero-left"><header className="an32-title an32-reveal"><small>FIX BUILDING / EXIT</small><h1>{s.title}</h1><p><SentenceText text={s.lead}/></p></header><nav className="an32-category-stack an34-category-stack an32-reveal" aria-label={ui.exitNavAria}>{nav.map(step=><article className="an34-entry" key={step.id}><p>{step.prompt}</p><button type="button" onClick={()=>open(step)}><span>{step.action}</span><b>→</b></button><div className="an34-entry-meta"><span><b>{step.num}</b> {step.code}</span><span>{step.name}</span><span>EXIT GUIDE</span></div></article>)}</nav></div><figure className="mg-home-hero-image an32-reveal"><img src={EXIT_IMAGES.home} alt={getExitImageAlt(lang,'home')} loading="eager" decoding="async"/></figure></div></section>

    <section className="an32-statement"><div className="an19-shell an32-reveal"><small>EXIT IS A CAPITAL DECISION.</small><p>{s.statement.title}</p><span className="exit-main-one-line"><SentenceText text={s.statement.body}/></span><div className="an33-state-grid">{s.statement.groups.map(([num,title,body])=><article key={num}><span>{num}</span><h3>{title}</h3><p><SentenceText text={body}/></p></article>)}</div></div></section>

    <section className="an32-perspective"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>THE SIX STEPS.</small><h2>{ui.sixTitle}</h2><p>{ui.sixLead}</p></header><div className="an32-perspective-list mg-six-why-list">{s.steps.map(step=><article className="an32-reveal" key={step.id}><span>{step.num}</span><h3>{step.name}</h3><p><SentenceText text={step.desc}/></p></article>)}</div></div></section>

    <section className="an32-perspective mg-connected-management"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>CONNECTED EXIT.</small><h2>{ui.connectedTitle}</h2><p>{ui.connectedLead}</p></header><div className="an32-perspective-list mg-connected-list">{s.connected.map(([num,title,body,key])=><article className="an32-reveal" key={num}><span>{num}</span><div className="mg-connected-copy"><h3 className="mg-connected-flow">{title.split(' → ').map((part,index,parts)=><span className="mg-connected-node" key={`${num}-${part}`}>{part}{index<parts.length-1&&<i aria-hidden="true">→</i>}</span>)}</h3><p><SentenceText text={body}/></p><strong><SentenceText text={key}/></strong></div></article>)}</div></div></section>

    <section className="an32-editorial exit-net-preview"><div className="an19-shell an32-editorial-grid an32-reveal"><small>PRICE ≠ PROCEEDS.</small><div><h2>{ui.netTitle}</h2><p>{ui.netLead}</p><div className="exit-net-formula"><span>{ui.netFormula[0]}</span><i>−</i><span>{ui.netFormula[1]}</span><i>=</i><strong>{ui.netFormula[2]}</strong></div></div></div></section>

    <section className="an32-editorial exit-timeline"><div className="an19-shell an32-editorial-grid an32-reveal"><small>EXIT TIMELINE.</small><div><h2>{ui.timelineTitle}</h2><p className="exit-main-one-line">{ui.timelineLead}</p></div></div><div className="an19-shell an32-lens-list">{s.timeline.map(([num,name,body])=><article className="an32-reveal" key={num}><span>{num}</span><small>EXIT STEP</small><h3>{name}</h3><p>{body}</p></article>)}</div></section>

    <section className="an32-order an32-tools exit-expert"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>KNOW WHEN TO CHECK.</small><h2>{ui.expertTitle}</h2><p>{ui.expertLead}</p></header><div className="an32-order-list">{s.experts.map(([topic,expert],i)=><div className="an32-reveal" key={topic}><span>{String(i+1).padStart(2,'0')}</span><strong>{topic}</strong><p>{expert}</p></div>)}</div></div></section>

    <section className="an32-final"><div className="an19-shell an32-reveal"><small>FINAL CHECK.</small><h2>{ui.finalTitle}</h2><p className="exit-main-one-line">{ui.finalLead}</p><div className="an33-final-checks">{s.finalChecks.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p><SentenceText text={body}/></p></article>)}</div><strong>{ui.finalStrong}</strong><p>{ui.finalBody}</p><button className="exit-main-primary" type="button" onClick={()=>open(s.steps[0])}>{ui.startDecision}</button></div></section>
  </div>;
}
