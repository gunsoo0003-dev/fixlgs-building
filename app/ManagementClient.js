'use client';

import {Fragment,useEffect,useMemo,useRef,useState} from 'react';
import {getManagementContent,MANAGEMENT_SLUGS} from './management-i18n';
import AnalysisDetailShell from './AnalysisDetailShell';

const BASE_PATH='/building';

const MANAGEMENT_IMAGES={
  home:`${BASE_PATH}/images/management/management-main-hero.webp`,
  rent:`${BASE_PATH}/images/management/management-01-rent.webp`,
  vacancy:`${BASE_PATH}/images/management/management-02-vacancy.webp`,
  tenant:`${BASE_PATH}/images/management/management-03-tenant.webp`,
  cost:`${BASE_PATH}/images/management/management-04-cost.webp`,
  facility:`${BASE_PATH}/images/management/management-05-facility.webp`,
  facilityCriteria:`${BASE_PATH}/images/management/management-05-facility-criteria.webp`,
  record:`${BASE_PATH}/images/management/management-06-record.webp`,
};

const IDS=new Set(MANAGEMENT_SLUGS);

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

function Home({onOpen,content}){
  const {sections,tutorialGroups,tutorialAxes,periods,cases,tools,ui,imageAlts}=content;
  const toolsRef=useRef(null); const rootRef=useRef(null);
  useReveal(rootRef);
  const nav=sections.map(x=>({id:x.id,num:x.num,code:x.code,name:x.name,prompt:x.prompt,action:ui.actionLabels?.[x.id]||`${x.name}${ui.viewSuffix}`,facts:x.items.slice(0,3).map(i=>i[0])}));
  const go=(id)=>{if(id==='tools')toolsRef.current?.scrollIntoView({behavior:'smooth',block:'start'});else onOpen(id)};
  return <div ref={rootRef} className="an32-home">
    <section className="an32-hero mg-home-hero"><div className="an19-shell an32-hero-grid"><div className="an32-hero-left"><header className="an32-title an32-reveal"><small>FIX BUILDING / MANAGEMENT</small><h1>{ui.homeTitle}</h1><p><SentenceText text={ui.homeLead}/></p></header><nav className="an32-category-stack an34-category-stack an32-reveal" aria-label={ui.quickAria}>{nav.map(card=><article className="an34-entry" key={card.id}><p>{card.prompt}</p><button onClick={()=>go(card.id)}><span>{card.action}</span><b>→</b></button><div className="an34-entry-meta"><span><b>{card.num}</b> {card.code}</span>{card.facts.map(x=><span key={x}>{x}</span>)}</div></article>)}</nav><div className="an19-related an32-reveal"><div><button type="button" onClick={()=>go('tools')}>{ui.toolsView}</button></div></div></div><figure className="mg-home-hero-image an32-reveal"><img src={MANAGEMENT_IMAGES.home} alt={imageAlts.home} loading="eager" decoding="async"/></figure></div></section>

    <section className="an32-statement"><div className="an19-shell an32-reveal"><small>MANAGEMENT STARTS AFTER PURCHASE.</small><p><SentenceText text={ui.statementLead}/></p><span>{ui.statementBody}</span><div className="an33-state-grid">{tutorialGroups.slice(0,3).map(([num,title,body])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="an32-editorial"><div className="an19-shell an32-editorial-grid an32-reveal"><small>FROM EXPECTED TO ACTUAL.</small><div><h2>{ui.expectedTitle}</h2><p><SentenceText text={ui.expectedBody}/></p></div></div><div className="an19-shell an32-lens-list">{tutorialGroups.map(([num,name,body])=><article className="an32-reveal" key={num}><span>{num}</span><small>MANAGEMENT LENS</small><h3>{name}</h3><p>{body}</p></article>)}</div></section>

    <section className="an32-perspective"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>THE SIX AXES.</small><h2>{ui.axesTitle}</h2><p><SentenceText text={ui.axesBody}/></p></header><div className="an32-perspective-list mg-six-why-list">{tutorialAxes.map(([num,headline,body])=><article className="an32-reveal" key={num}><span>{num}</span><h3>{headline}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="an32-editorial"><div className="an19-shell an32-editorial-grid an32-reveal"><small>MANAGEMENT CALENDAR.</small><div><h2>{ui.calendarTitle}</h2><p><SentenceText text={ui.calendarBody}/></p></div></div><div className="an19-shell an32-lens-list">{periods.map(([num,name,body])=><article className="an32-reveal" key={num}><span>{num}</span><small>MANAGEMENT CYCLE</small><h3>{name}</h3><p>{body}</p></article>)}</div></section>

    <section className="an32-perspective mg-connected-management"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>CONNECTED MANAGEMENT.</small><h2>{ui.connectedTitle}</h2><p><SentenceText text={ui.connectedBody}/></p></header><div className="an32-perspective-list mg-connected-list">{cases.map(([num,title,body,key])=><article className="an32-reveal" key={num}><span>{num}</span><div className="mg-connected-copy"><h3 className="mg-connected-flow">{title.split(' → ').map((part,index,parts)=><span className="mg-connected-node" key={`${num}-${part}`}>{part}{index<parts.length-1&&<i aria-hidden="true">→</i>}</span>)}</h3><p><SentenceText text={body}/></p><strong><SentenceText text={key}/></strong></div></article>)}</div></div></section>

    <section id="management-tools" ref={toolsRef} className="an32-order an32-tools"><div className="an19-shell"><header className="an32-section-head an32-reveal"><small>USE THE TOOLS WHEN NEEDED.</small><h2>{ui.toolsTitle}</h2><p><SentenceText text={ui.toolsBody}/></p></header><div className="an32-order-list">{tools.map(tool=><div className="an32-reveal" key={tool.num}><span>{tool.num}</span><strong><a href={tool.href} onClick={e=>e.preventDefault()}>{tool.name} →</a></strong><p><SentenceText text={tool.desc}/></p></div>)}</div><p className="an19-note">{ui.toolsNote}</p></div></section>

    <section className="an32-final"><div className="an19-shell an32-reveal"><small>FINAL CHECK.</small><h2>{ui.finalTitle}</h2><p><SentenceText text={ui.finalBody}/></p><div className="an33-final-checks">{ui.finalChecks.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p><SentenceText text={body}/></p></article>)}</div><strong><span>{ui.finalStrong1}</span><br className="an34-final-break"/><span>{ui.finalStrong2}</span></strong><p><SentenceText text={ui.finalExit}/></p></div></section>
  </div>;
}

function MethodList({section,ui}){
  return <div className="an19-method-list mg-rent-method-list">{section.methodGuide.map((item,i)=><article key={item.title}><div className="an19-method-num">{String(i+1).padStart(2,'0')}</div><section><h3>{item.title}</h3><div className="mg-rent-step-copy">{(item.paragraphs||[item.why,item.body].filter(Boolean)).map((text,pi)=><p key={`${item.title}-${pi}`}><SentenceText text={text}/></p>)}</div><div className="an19-method-check"><small>{ui.check}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="an19-method-caution"><small>{ui.caution}</small><p><SentenceText text={item.caution}/></p></div></section></article>)}</div>;
}

function DetailPractice({section,practiceNo,ui}){
  return <section className={`an19-block an19-practice mg-rent-practice mg-detail-practice ${section.id==='record'?'mg-record-practice':''}`}><header><small>{practiceNo} · {ui.practice}</small><h2>{ui.practiceTitle}</h2><p><SentenceText text={ui.practiceLead}/></p></header><div className="an19-method-list mg-rent-case-list">{section.examplesDetailed.map((item,i)=><article key={item.title}><div className="an19-method-num">{String(i+1).padStart(2,'0')}</div><section><h3>{item.title}</h3><div className="mg-rent-step-copy">{item.desc.map((text,pi)=><p key={`${item.title}-desc-${pi}`}><SentenceText text={text}/></p>)}</div><div className="an19-method-check"><small>{ui.check}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="mg-rent-case-note"><small>{ui.howToJudge}</small><p><SentenceText text={item.judge}/></p></div><div className="mg-rent-case-note"><small>{ui.recordThis}</small><p><SentenceText text={item.record}/></p></div></section></article>)}</div></section>;
}

function DetailSignals({section,signalsNo,ui}){
  return <section className={`an19-block an19-related mg-rent-signals mg-detail-grid2 ${section.id==='record'?'mg-record-grid4':''}`}><header><small>{signalsNo} · {ui.signals}</small><h2>{ui.signalsTitle}</h2><p><SentenceText text={ui.signalsLead}/></p></header><div className="an19-terms">{section.signalsDetailed.map(item=><div key={item.title}><strong>{item.title}</strong><p><SentenceText text={item.desc}/></p><div className="an19-method-check"><small>{ui.check}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="mg-rent-interpret"><small>{ui.interpret}</small><p><SentenceText text={item.interpret}/></p></div></div>)}</div></section>;
}

function DetailPeriods({section,periodNo,ui}){
  return <section className={`an19-block an19-related mg-rent-periods mg-detail-grid2 ${section.id==='record'?'mg-record-grid4':''}`}><header><small>{periodNo} · {ui.period}</small><h2>{ui.periodTitle}</h2><p><SentenceText text={ui.periodLead}/></p></header><div className="an19-terms">{section.periodsDetailed.map(item=><div key={item.title}><strong>{item.title}</strong><p><SentenceText text={item.desc}/></p><div className="an19-method-check"><small>{ui.check}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="mg-rent-interpret"><small>{ui.judgePoint}</small><p><SentenceText text={item.judge}/></p></div></div>)}</div></section>;
}

function DetailSummary({section,ui}){
  const summaryTitle=ui.summaryTitles[section.id]||section.name;
  return <section className={`an19-block an19-related mg-rent-summary mg-detail-summary3 ${section.id==='record'?'mg-record-summary':''}`}><header><small>{ui.finalSummary}</small><h2>{summaryTitle}</h2></header><div className="an19-terms">{section.summaryDetailed.map((item,i)=><div key={item.title}><span className="mg-rent-summary-num">{String(i+1).padStart(2,'0')}</span><strong>{item.title}</strong><p><SentenceText text={item.desc}/></p></div>)}</div></section>;
}

function FacilityDetails({section,ui,imageAlts}){
  if(!section.facilityDetails)return null;
  return <section className="an19-block mg-facility-guide"><header><small>{ui.facilityLabel}</small><h2>{ui.facilityTitle}</h2><p><SentenceText text={ui.facilityLead}/></p></header><figure className="mg-facility-criteria-image"><img src={MANAGEMENT_IMAGES.facilityCriteria} alt={imageAlts.facilityCriteria} loading="lazy" decoding="async"/></figure><div className="an19-method-list mg-facility-list">{section.facilityDetails.map((item,i)=><article key={item.name}><div className="an19-method-num">{String(i+1).padStart(2,'0')}</div><section><h3>{item.name}</h3><div className="mg-facility-quick"><div><small>{ui.criteria}</small><ul>{item.criteria.map(x=><li key={x}>{x}</li>)}</ul></div><div><small>{ui.whatToCheck}</small><div className="mg-facility-chips">{item.checks.map(x=><span key={x}>{x}</span>)}</div></div></div><div className="mg-facility-post"><h4>{item.postTitle}</h4>{item.paragraphs.map((text,idx)=><p key={`${item.name}-p-${idx}`}><SentenceText text={text}/></p>)}</div><div className="mg-facility-cases">{item.cases.map(([situation,judge],idx)=><div key={`${item.name}-case-${idx}`}><small>{ui.caseLabel} {String.fromCharCode(65+idx)}</small><p><SentenceText text={situation}/></p><strong><SentenceText text={judge}/></strong></div>)}</div><div className="mg-facility-expert"><small>{ui.expert}</small><p><SentenceText text={item.expert}/></p></div></section></article>)}</div></section>;
}

function RecordQuality({section,ui}){
  if(section.id!=='record'||!section.recordQuality)return null;
  return <section className="an19-block mg-record-quality"><header><small>{ui.recordQualityLabel}</small><h2>{section.recordQuality.title}</h2></header><div className="an19-longcopy mg-rent-longcopy">{section.recordQuality.paragraphs.map((text,i)=><p key={`rq-${i}`}><SentenceText text={text}/></p>)}</div></section>;
}

function RecordCommonFields({section,ui}){
  if(section.id!=='record'||!section.commonFields)return null;
  return <section className="an19-block mg-record-fields"><header><small>{ui.commonFieldsLabel}</small><h2>{ui.commonFieldsTitle}</h2><p><SentenceText text={ui.commonFieldsLead}/></p></header><div className="mg-record-field-grid">{section.commonFields.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p><SentenceText text={item.desc}/></p><em><SentenceText text={item.detail}/></em></div></article>)}</div></section>;
}

function RecordEventFlow({section,ui}){
  if(section.id!=='record'||!section.eventFlow)return null;
  return <section className="an19-block an19-method mg-record-flow"><header><small>{ui.eventFlowLabel}</small><h2>{section.eventFlow.title}</h2><p><SentenceText text={section.eventFlow.desc}/></p></header><div className="an19-method-flow" aria-label={ui.eventFlowAria}>{section.eventFlow.steps.map((step,i)=><span key={step}><b>{String(i+1).padStart(2,'0')}</b>{step}</span>)}</div><div className="mg-record-flow-example"><small>{ui.example}</small><p><SentenceText text={section.eventFlow.example}/></p></div></section>;
}

function RecordQualityExamples({section,ui}){
  if(section.id!=='record'||!section.qualityExamples)return null;
  return <section className="an19-block mg-record-quality-examples"><header><small>{ui.qualityExamplesLabel}</small><h2>{ui.qualityExamplesTitle}</h2><p><SentenceText text={ui.qualityExamplesLead}/></p></header><div className="mg-record-compare-grid">{section.qualityExamples.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><div className="mg-record-compare bad"><small>{ui.badRecord}</small><p><SentenceText text={item.bad}/></p></div><div className="mg-record-compare good"><small>{ui.goodRecord}</small><p><SentenceText text={item.good}/></p></div></article>)}</div></section>;
}

function RecordExitBridge({section,ui}){
  if(section.id!=='record'||!section.exitBridge)return null;
  return <section className="an19-block mg-record-exit"><header><small>{ui.exitLabel}</small><h2>{section.exitBridge.title}</h2></header><div className="an19-longcopy mg-rent-longcopy">{section.exitBridge.paragraphs.map((text,i)=><p key={`exit-${i}`}><SentenceText text={text}/></p>)}</div><div className="mg-record-exit-facts">{section.exitBridge.facts.map(x=><span key={x}>{x}</span>)}</div></section>;
}

function RecordLog({section,ui}){
  if(!section.logSectionsDetailed)return null;
  return <section className="an19-block mg-record-log mg-detail-grid2"><header><small>07 · BUILDING MANAGEMENT LOG</small><h2>{ui.logTitle}</h2></header><div className="an19-longcopy"><p><SentenceText text={ui.logBody1}/></p><p><SentenceText text={ui.logBody2}/></p></div><div className="an19-terms">{section.logSectionsDetailed.map(item=><div key={item.title}><strong>{item.title}</strong><p><SentenceText text={item.desc}/></p><div className="an19-method-check"><small>{ui.recordThis}</small><div>{item.checks.map(x=><span key={x}>{x}</span>)}</div></div><div className="mg-rent-interpret"><small>{ui.usePoint}</small><p><SentenceText text={item.judge}/></p></div></div>)}</div></section>;
}

function SectionView({section,onHome,content}){
  const {sections,ui,imageAlts,locale}=content;
  useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[section.id]);
  const idx=sections.findIndex(x=>x.id===section.id);
  const nextSection=sections[idx+1]||null;
  const nextHref=nextSection?`${BASE_PATH}/${locale}/management/${nextSection.id}`:`${BASE_PATH}/${locale}/management#management-tools`;
  const nextNum=nextSection?nextSection.num:'07';
  const nextName=nextSection?nextSection.name:ui.toolsName;
  const nextPrompt=nextSection?nextSection.prompt:ui.toolsPrompt;
  const hasExtra=Boolean(section.facilityDetails||section.logSectionsDetailed);
  const practiceNo=hasExtra?'05':'04';
  const signalsNo=String(Number(practiceNo)+1).padStart(2,'0');
  const periodNo=String(Number(practiceNo)+(section.signalsDetailed?2:1)).padStart(2,'0');
  return <AnalysisDetailShell eyebrow={`${section.num} · ${section.code}`} title={section.name} lead={section.prompt} onBack={onHome} backLabel={ui.backLabel}>
    <figure className={`mg-detail-hero-image is-${section.id}`}><img src={MANAGEMENT_IMAGES[section.id]} alt={imageAlts[section.id]} loading="eager" decoding="async"/></figure>
    <section className={`an19-block mg-management-terms ${section.id==='record'?'mg-record-categories':''}`}><header><small>01 · {ui.glossary}</small><h2>{section.id==='record'?ui.glossaryRecordTitle:ui.glossaryTitle}</h2></header><div className="an19-terms">{section.items.map(([name,desc])=><div key={name}><strong>{name}</strong><p><SentenceText text={desc}/></p></div>)}</div></section>

    <section className="an19-block an19-concept mg-rent-detail"><header><small>02 · {ui.concept}</small><h2>{section.takeaway}</h2></header><div className="an19-longcopy mg-rent-longcopy">{section.introParagraphs.map((text,i)=><p key={`${section.id}-intro-${i}`}><SentenceText text={text}/></p>)}</div></section>

    <RecordQuality section={section} ui={ui}/>
    <RecordCommonFields section={section} ui={ui}/>
    <RecordEventFlow section={section} ui={ui}/>

    <section className="an19-block an19-method mg-rent-detail"><header><small>{section.id==='record'?'06':'03'} · {ui.method}</small><h2>{ui.methodTitle}</h2><p><SentenceText text={ui.methodLead}/></p></header><div className="an19-method-flow" aria-label={`${section.name} ${ui.managementFlow}`}>{section.methodGuide.map((item,i)=><span key={item.title}><b>{String(i+1).padStart(2,'0')}</b>{item.title}</span>)}</div><MethodList section={section} ui={ui}/></section>

    <FacilityDetails section={section} ui={ui} imageAlts={imageAlts}/>
    <RecordLog section={section} ui={ui}/>
    <RecordQualityExamples section={section} ui={ui}/>

    <DetailPractice section={section} practiceNo={section.id==='record'?'09':practiceNo} ui={ui}/>
    <DetailSignals section={section} signalsNo={section.id==='record'?'10':signalsNo} ui={ui}/>
    <DetailPeriods section={section} periodNo={section.id==='record'?'11':periodNo} ui={ui}/>

    <RecordExitBridge section={section} ui={ui}/>
    <DetailSummary section={section} ui={ui}/>

    <p className="an19-note">{ui.guideNote}</p>

    <div className="ctj-next"><div><small>{ui.currentCore}</small><strong>{section.takeaway}</strong></div><a href={nextHref}><small>{ui.nextStep}</small><strong>{nextNum} {nextName}</strong><p>{nextPrompt}</p><b>→</b></a></div>

    <nav className="an41-axis-endnav" aria-label={ui.otherAria}><button type="button" className="an41-back-home" onClick={onHome}><span aria-hidden="true">←</span><strong>{ui.backHome}</strong></button><div className="an41-other-head"><small>EXPLORE NEXT</small><h2>{ui.exploreTitle}</h2></div><div className="an41-other-grid">{sections.filter(x=>x.id!==section.id).map(item=><a key={item.id} className="an41-other-axis" href={`${BASE_PATH}/${locale}/management/${item.id}`}><span className="an41-other-num">{item.num}</span><span className="an41-other-copy"><small>{item.code}</small><strong>{item.name}</strong><em>{item.prompt}</em></span><span className="an41-other-arrow" aria-hidden="true">→</span></a>)}</div></nav>
  </AnalysisDetailShell>;
}

export default function ManagementClient({initialView=[],locale='ko'}){
  const content=useMemo(()=>getManagementContent(locale),[locale]);
  const initial=(initialView?.[0]||'').toLowerCase();
  const [view,setView]=useState(IDS.has(initial)?initial:'home');
  const section=useMemo(()=>content.sections.find(x=>x.id===view),[content.sections,view]);
  const open=id=>{setView(id);history.pushState({},'',`${BASE_PATH}/${content.locale}/management/${id}`);window.scrollTo({top:0,behavior:'smooth'});};
  const home=()=>{setView('home');history.pushState({},'',`${BASE_PATH}/${content.locale}/management`);window.scrollTo({top:0,behavior:'smooth'});};
  useEffect(()=>{const fn=()=>{const id=location.pathname.split('/management/')[1]?.split('/')[0]||'home';setView(IDS.has(id)?id:'home');};addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn);},[]);
  return <div className={`analysis-page-v019 mg-management-page mg-locale-${content.locale}`}>{section?<SectionView section={section} onHome={home} content={content}/>:<Home onOpen={open} content={content}/>}</div>;
}
