'use client';

import { useEffect, useMemo, useState } from 'react';
import AnalysisTenancy from './AnalysisTenancy';
import { ANALYSIS_DATA, ANALYSIS_SCENARIOS } from './analysis-copy';
import { eokText, manParts, manText } from './analysis-format';

const axisOrder=['PRICE','INCOME','FINANCE','TENANCY','BUILDING','SURVIVAL'];
const axisKeys=['price','income','finance','tenancy','building','survival'];
const scenarioOrder=['current','conservative','stress'];
const money=(v,locale)=>`${v>0?'+':v<0?'-':''}${v===0?'0':manText(Math.abs(v),locale)}`;

function Rule({copy,ui}){return <div className="an-rule"><small>{ui.rule}</small><strong>{copy.rule}</strong><div><span>{ui.judgment}</span><p>{copy.verdict}</p><em>{copy.note}</em></div></div>}

function PriceViz({copy,locale,compact=false}){
  const d=ANALYSIS_DATA.price;
  const points=[...d.comps,{id:'T',value:d.subject.value}];
  if(compact) return <div className="case-mini case-price"><div className="mini-axis"><i/>{points.map(item=><span key={item.id} className={item.id==='T'?'target':''} style={{left:`${((item.value-13.5)/2)*100}%`}}><b>{item.id}</b><em>{item.value.toFixed(1)}</em></span>)}</div><div className="mini-range"><span>13.5</span><span>{eokText(15.5,locale)}</span></div><details className="case-price-details"><summary>{copy.button}<b>+</b></summary><div>{d.comps.map(c=><article key={c.id}><header><strong>{c.id}</strong><span>{eokText(c.value,locale)}</span></header><p>{c.tags[locale].map(t=><i key={t}>{t}</i>)}</p></article>)}</div></details></div>;
  return <div className="an-price-viz"><div className="an-viz-label"><span>{copy.target}</span><b>{copy.verdict}</b></div><div className="an-price-axis"><i/><div className="an-price-points">{points.map(item=><div className={`an-price-point ${item.id==='T'?'is-target':''}`} style={{left:`${((item.value-13.5)/2)*100}%`}} key={item.id}><span/><b>{item.id==='T'?'15.0':`${item.id} ${item.value.toFixed(1)}`}</b></div>)}</div><div className="an-price-scale"><span>13.5</span><span>14.0</span><span>14.5</span><span>15.0</span><span>{eokText(15.5,locale)}</span></div></div><details className="an-condition-details"><summary>{copy.button}<span>+</span></summary><div>{d.comps.map(c=><article key={c.id}><div><b>{c.id}</b><strong>{eokText(c.value,locale)}</strong></div><p>{c.tags[locale].map(t=><span key={t}>{t}</span>)}</p></article>)}</div></details></div>;
}

function IncomeViz({copy,ui,locale,compact=false}){
  const d=ANALYSIS_DATA.income;
  if(compact) return <div className="case-mini case-income"><div><small>{copy.labels[0]}</small><strong>{manText(d.full,locale)}</strong></div><i>{copy.deduct[0]}</i><div><small>{copy.labels[1]}</small><strong>{manText(d.current,locale)}</strong></div><i>{copy.deduct[1]}</i><div className="accent"><small>NOI</small><strong>{manText(d.noi,locale)}</strong></div><span>{d.surfaceYield}% → {d.adjustedYield}%</span></div>;
  return <div className="an-income-viz"><div className="an-income-chain">{[[d.full,copy.labels[0]],[d.current,copy.labels[1]],[d.noi,copy.labels[2]]].map(([v,label],i)=>{const amount=manParts(v,locale);return <div className={`an-income-step step-${i+1}`} key={v}><small>{label}</small><strong>{amount.value}<em>{amount.unit}</em></strong>{i<2&&<span className="an-deduction"><b>{copy.deduct[i]}</b><i>↓</i></span>}</div>})}</div><div className="an-yield-shift"><small>{ui.yieldShift}</small><div><strong>{d.surfaceYield}%</strong><i>→</i><strong>{d.adjustedYield}%</strong></div><p>{copy.verdict}</p></div></div>;
}

function FinanceViz({copy,locale,compact=false}){
  if(compact) return <div className="case-mini case-finance">{['A','B'].map(k=>{const f=ANALYSIS_DATA.finance[k];return <article key={k}><header><strong>{k}</strong><b>{manText(f.interest,locale)}</b></header><div><i style={{width:`${f.equity/15*100}%`}}/><span style={{width:`${f.loan/15*100}%`}}/></div><p>{copy.labels.equity} {eokText(f.equity,locale)} · {copy.labels.loan} {eokText(f.loan,locale)} · {f.rate}%</p></article>})}</div>;
  return <><div className="an-finance-viz">{['A','B'].map(k=>{const f=ANALYSIS_DATA.finance[k];return <article key={k}><div className="an-finance-title"><strong>{k}</strong><div><span>{copy.labels.loan} {eokText(f.loan,locale)}</span><b>{f.rate}%</b></div></div><div className="an-capital-bar"><i style={{width:`${f.equity/15*100}%`}}/><b style={{width:`${f.loan/15*100}%`}}/></div><div className="an-capital-legend"><span><i/>{copy.labels.equity} {eokText(f.equity,locale)}</span><span><i/>{copy.labels.loan} {eokText(f.loan,locale)}</span></div><div className="an-interest"><small>{copy.labels.interest}</small><strong>{manText(f.interest,locale)}</strong></div></article>})}</div><div className="an-split-verdict"><span>A</span><strong>{copy.verdictA}</strong><span>B</span><strong>{copy.verdictB}</strong></div></>;
}

function BuildingViz({copy,ui,locale,compact=false}){
  const d=ANALYSIS_DATA.building;
  if(compact) return <div className="case-mini case-building"><div className="mini-building"><i/><i/><i/><i/></div><div>{d.repairs.map(r=><p key={r.key}><span>{copy.pins[r.key]}</span><b>{manText(r.amount,locale)}</b></p>)}<strong>{manText(d.total,locale)}</strong></div></div>;
  return <div className="an-building-viz"><div className="an-building-stage"><div className="an-building-shape" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>{d.repairs.map((r,i)=><div className={`an-building-pin pin-${i+1}`} key={r.key}><span>{copy.pins[r.key]}</span><b>{manText(r.amount,locale)}</b></div>)}</div><div className="an-repair-panel"><small>{copy.repair}</small><strong>{manParts(d.total,locale).value}<em>{manParts(d.total,locale).unit}</em></strong><span>{ui.building.age} · {d.age}{ui.building.yearShort}</span><div>{d.repairs.map((r,i)=><p key={r.key}><b>0{i+1}</b><span>{copy.pins[r.key]}</span><strong>{manText(r.amount,locale)}</strong></p>)}</div></div></div>;
}

function CashBars({scenario,s,locale,ui}){
  const max=4000; const width=(value)=>Math.min(50,Math.abs(value)/max*50);
  return <div className="an-cash-chart" aria-label={ui.cashFlowAria}><div className="an-zero-caption"><span>-</span><b>0</b><span>+</span></div>{[['A',scenario.A],['B',scenario.B]].map(([name,value])=><div className="an-cash-row" key={name}><strong>{name}</strong><div className="an-zero-track"><i className="an-zero-line"/><span className={`an-cash-bar ${value<0?'is-negative':''}`} style={{width:`${width(value)}%`,left:value<0?`${50-width(value)}%`:'50%'}}/></div><b className={value<0?'is-negative':''}>{value<0?'-':''}{value===0?'0':manText(Math.abs(value),locale)}</b></div>)}<small>{s.repeated}</small></div>;
}

function SurvivalViz({copy,ui,locale,scenarioId,setScenarioId,compact=false}){
  const scenario=ANALYSIS_SCENARIOS[scenarioId];
  const staticScenarioData=<ul className="an-sr-data">{scenarioOrder.map(id=>{const item=ANALYSIS_SCENARIOS[id];return <li key={id}>{item.label}: A {item.A>0?'+':''}{item.A===0?'0':manText(Math.abs(item.A),locale)} / B {item.B>0?'+':''}{item.B<0?'-':''}{item.B===0?'0':manText(Math.abs(item.B),locale)} / {copy.cashNeed} {item.cashNeed===0?'0':manText(item.cashNeed,locale)}</li>})}</ul>;
  if(compact) return <div className="an-case-survival">{staticScenarioData}<CashBars scenario={scenario} s={copy} locale={locale} ui={ui}/><div className="an-case-cash-need"><small>{copy.cashNeed}</small><strong>{scenario.cashNeed===0?'0':manText(scenario.cashNeed,locale)}</strong><span>{ui.oneTimeSeparate}</span></div></div>;
  return <div className="an-survival-panel">{staticScenarioData}<div className="an-scenario-tabs" role="group" aria-label={ui.scenarioAria}>{scenarioOrder.map(id=><button type="button" key={id} className={scenarioId===id?'is-active':''} onClick={()=>setScenarioId(id)} aria-pressed={scenarioId===id}><span>{ANALYSIS_SCENARIOS[id].label}</span><small>{copy.scenarioLeads[id]}</small></button>)}</div><div className="an-scenario-grid"><div className="an-scenario-main"><div className="an-scenario-summary"><small>{scenario.label}</small><h3>{copy.scenarioLeads[scenarioId]}</h3><p>{ui.scenarioAssumptions[scenarioId]}</p></div><CashBars scenario={scenario} s={copy} locale={locale} ui={ui}/></div><aside className="an-scenario-result"><small>{ui.judgment}</small><article><b>A</b><strong>{scenario.A>0?'+':''}{scenario.A===0?'0':manText(Math.abs(scenario.A),locale)}</strong><p>{ui.scenarioResults[scenarioId].A}</p></article><article><b>B</b><strong>{scenario.B>0?'+':''}{scenario.B<0?'-':''}{scenario.B===0?'0':manText(Math.abs(scenario.B),locale)}</strong><p>{ui.scenarioResults[scenarioId].B}</p></article></aside></div><div className="an-cause-grid"><article><small>{ui.rateImpact}</small><strong>{scenario.rate}</strong><p>A {scenario.rateA===0?'0':money(scenario.rateA,locale)} · B {scenario.rateB===0?'0':money(scenario.rateB,locale)}</p></article><article><small>{ui.vacancyImpact}</small><strong>{scenario.vacancy==='0'?copy.none:`${scenario.vacancy}${copy.months}`}</strong><p>{scenario.vacancyLoss===0?copy.none:money(scenario.vacancyLoss,locale)}</p></article><article className="an-cash-need"><small>{copy.cashNeed}</small><strong>{scenario.cashNeed===0?'0':manText(scenario.cashNeed,locale)}</strong><p>{ui.oneTimeSeparate}</p></article></div><div className="an-survival-fixed-notes"><p>{ui.scenarioFixedNote}</p><p>{copy.educationNote}</p></div></div>;
}

function AxisPanel({index,active,copy,ui,locale,scenarioId,setScenarioId}){
  const key=axisKeys[index]; const axis=copy.axis[key];
  return <section id={key} className={`an-learning-panel ${active?'is-active':''}`} aria-hidden={!active} data-axis={axisOrder[index]}>
    <header className="an-axis-head"><span>{axis.num}</span><div><small>{axisOrder[index]}</small><h2>{axis.question}</h2><p>{axis.intro}</p></div></header>
    <div className="an-flowline">{axis.flow}</div>
    <div className="an-learning-viz">
      {key==='price'&&<PriceViz copy={axis} locale={locale}/>} 
      {key==='income'&&<IncomeViz copy={axis} ui={ui} locale={locale}/>} 
      {key==='finance'&&<FinanceViz copy={axis} locale={locale}/>} 
      {key==='tenancy'&&<AnalysisTenancy copy={axis} ui={ui} locale={locale}/>} 
      {key==='building'&&<BuildingViz copy={axis} ui={ui} locale={locale}/>} 
      {key==='survival'&&<SurvivalViz copy={axis} ui={ui} locale={locale} scenarioId={scenarioId} setScenarioId={setScenarioId}/>} 
    </div>
    <Rule copy={axis} ui={ui}/>
  </section>;
}

function BaselineViz({ui,locale}){return <div className="case-mini case-baseline"><div className="baseline-total"><span className="is-deployable"/><i className="is-reserve"/><b className="is-initial"/></div><div className="baseline-labels"><p><small>{ui.baseline.deployable}</small><strong>{eokText(10,locale)}</strong></p><p><small>{ui.baseline.reserve}</small><strong>{eokText(1,locale)}</strong></p><p><small>{ui.baseline.initialCost}</small><strong>{ui.baseline.separate}</strong></p></div><footer><span>{ui.baseline.available}</span><b>{eokText(11,locale)}</b><em>{ui.baseline.hold} · {ui.baseline.initialCostNote}</em></footer></div>}
function CaseStartViz({ui,locale}){return <div className="case-mini case-start-viz"><div className="case-building-icon" aria-hidden="true"><i/><i/><i/><i/></div><div className="case-surface-numbers"><p><small>{ui.caseLabels.asking}</small><strong>{eokText(15,locale)}</strong></p><p><small>{ui.caseLabels.yield}</small><strong>6.4%</strong></p><p><small>{ui.caseLabels.vacancy}</small><strong>1</strong></p></div></div>}
function MiniTenancy({copy,ui}){const [focused,setFocused]=useState(false);return <div className={`case-mini case-tenancy ${focused?'is-focused':''}`}><div className="case-tenancy-action"><button type="button" onClick={()=>setFocused(v=>!v)} aria-pressed={focused}>{focused?ui.tenancy.reset:ui.tenancy.select}</button></div><div className="case-spaces">{[1,2,3,4,5].map(n=>{const key=n===1,vacant=n===5;return <button type="button" key={n} className={`${key?'key':''} ${vacant?'vacant':''}`} onClick={()=>key&&setFocused(true)} disabled={!key}><b>0{n}</b>{key?'43%':vacant?copy.vacant:ui.tenancy.tenant}</button>})}</div><div className="case-tenancy-focus"><strong>43%</strong><span>{copy.verdict}</span></div><div className="case-lease"><span>{ui.tenancy.now}</span><i/><b>14{ui.tenancy.monthShort}</b></div></div>}

function FinalCaseViz({copy,ui,scenario,scenarioId,locale}){
  const conditions=ui.finalConditions[scenarioId];
  return <div className="an-final-inline"><div className="an-final-shift"><div className="an-final-before"><small>{copy.final.before}</small><strong>{eokText(15,locale)}</strong><strong>6.4%</strong><span>{ui.final.surface}</span></div><i>→</i><div className="an-final-axes"><small>{copy.final.now}</small>{copy.final.axes.map((a,i)=><span key={a}><b>{String(i+1).padStart(2,'0')}</b>{a}</span>)}</div></div><div className="an-final-scenario"><span>{copy.case.scenario}</span><strong>{scenario.label}</strong><b>A {scenario.A>0?'+':''}{scenario.A===0?'0':manText(Math.abs(scenario.A),locale)} · B {scenario.B>0?'+':''}{scenario.B<0?'-':''}{scenario.B===0?'0':manText(Math.abs(scenario.B),locale)}</b></div><div className="an-final-conditions"><article><small>{ui.strong}</small><strong>{conditions.strong}</strong></article><article><small>{ui.weak}</small><strong>{conditions.weak}</strong></article><article><small>{ui.changes}</small><strong>{conditions.changes}</strong></article></div></div>;
}

function CaseVisual({index,scenario,scenarioId,setScenarioId,ui,bands,copy,locale}){
  const s=copy.axis.survival;
  if(index===0) return <CaseStartViz ui={ui} locale={locale}/>;
  if(index===1) return <BaselineViz ui={ui} locale={locale}/>;
  if(index===2) return <PriceViz copy={copy.axis.price} locale={locale} compact/>;
  if(index===3) return <IncomeViz copy={copy.axis.income} ui={ui} locale={locale} compact/>;
  if(index===4) return <FinanceViz copy={copy.axis.finance} locale={locale} compact/>;
  if(index===5) return <MiniTenancy copy={copy.axis.tenancy} ui={ui}/>;
  if(index===6) return <BuildingViz copy={copy.axis.building} ui={ui} locale={locale} compact/>;
  if(index===7) return <div><div className="an-scenario-tabs an-case-tabs" role="group" aria-label={ui.scenarioAria}>{scenarioOrder.map(id=><button type="button" key={id} className={scenarioId===id?'is-active':''} onClick={()=>setScenarioId(id)} aria-pressed={scenarioId===id}><span>{ANALYSIS_SCENARIOS[id].label}</span></button>)}</div><SurvivalViz copy={s} ui={ui} locale={locale} scenarioId={scenarioId} setScenarioId={setScenarioId} compact/></div>;
  if(index===8) return <div className="an-band-list">{bands.map(([name,value,judgment],i)=><article key={name} style={{'--band-delay':`${i*65}ms`}}><strong>{name}</strong><span>{value}</span><b>{judgment}</b></article>)}</div>;
  return <FinalCaseViz copy={copy} ui={ui} scenario={scenario} scenarioId={scenarioId} locale={locale}/>;
}

export default function AnalysisInteractive({copy,ui,locale='ko'}){
  const [courseStarted,setCourseStarted]=useState(false);
  const [learnStep,setLearnStep]=useState(0);
  const [learningComplete,setLearningComplete]=useState(false);
  const [caseStarted,setCaseStarted]=useState(false);
  const [scenarioId,setScenarioId]=useState('current');
  const [caseStep,setCaseStep]=useState(0);
  const scenario=ANALYSIS_SCENARIOS[scenarioId];
  const bands=useMemo(()=>[...copy.case.bands,['SURVIVAL',`${scenario.label} · A ${scenario.A>0?'+':''}${scenario.A===0?'0':manText(Math.abs(scenario.A),locale)} / B ${scenario.B>0?'+':''}${scenario.B<0?'-':''}${scenario.B===0?'0':manText(Math.abs(scenario.B),locale)}`,scenario.B<0?ui.scenarioResults[scenarioId].B:ui.scenarioResults[scenarioId].A]],[copy,scenario,scenarioId,ui,locale]);

  useEffect(()=>{
    const root=document.querySelector('.analysis-page');
    if(!root)return;
    root.classList.add('an-motion-ready');
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){root.querySelectorAll('[data-an-reveal]').forEach(el=>el.classList.add('is-visible'));return;}
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}}),{threshold:.12});
    root.querySelectorAll('[data-an-reveal]').forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[courseStarted,learningComplete,caseStarted,caseStep,learnStep]);

  const focus=(id)=>setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}),20);
  const startCourse=()=>{setCourseStarted(true);focus('analysis-learning');};
  const goLearn=(next)=>{setLearnStep(next);focus('analysis-learning');};
  const completeLearning=()=>{setLearningComplete(true);focus('analysis-learning');};
  const startCase=()=>{setCaseStarted(true);setCaseStep(0);focus('full-case');};
  const goCase=(next)=>{setCaseStep(next);focus('full-case');};

  return <>
    {!caseStarted&&<section className="an-section an-learning" id="analysis-learning" data-an-reveal>
      <div className="an-section-shell">
        <div className="an-course-intro" hidden={courseStarted}>
          <div className="an-phase-header"><small>{ui.learning.part1}</small><span>01 / 02</span></div>
          <div className="an-course-intro-copy"><small>{ui.learning.eyebrow}</small><h2>{ui.learning.courseIntro}</h2><p>{ui.learning.courseIntroLead}</p></div>
          <div className="an-course-sequence" aria-label={ui.learning.progressAria}>{axisOrder.map((name,i)=><span key={name}><b>{String(i+1).padStart(2,'0')}</b>{name}</span>)}</div>
          <div className="an-course-start"><p>{ui.learning.route}</p><button type="button" className="an-course-primary" onClick={startCourse}>{ui.learning.start}<b>→</b></button></div>
        </div>

        <div className="an-learning-course" hidden={!courseStarted||learningComplete}>
          <div className="an-phase-header"><small>{ui.learning.part1}</small><span>{String(learnStep+1).padStart(2,'0')} / 06</span></div>
          <div className="an-learning-heading"><small>{ui.learning.eyebrow}</small><h2>{ui.learning.title}</h2><p>{ui.learning.lead}</p></div>
          <div className="an-learning-progress" aria-label={ui.learning.progressAria}>{axisOrder.map((name,i)=><div key={name} className={`an-learning-progress-item ${i===learnStep?'is-active':i<learnStep?'is-done':'is-future'}`} aria-current={i===learnStep?'step':undefined}><span>{String(i+1).padStart(2,'0')}</span><small>{name}</small><i>{i<learnStep?'✓':''}</i></div>)}</div>
          <div className="an-learning-stage">{axisKeys.map((_,i)=><AxisPanel key={axisOrder[i]} index={i} active={learnStep===i} copy={copy} ui={ui} locale={locale} scenarioId={scenarioId} setScenarioId={setScenarioId}/>)}</div>
          <div className="an-learning-controls"><button type="button" onClick={()=>goLearn(Math.max(0,learnStep-1))} disabled={learnStep===0}>← {ui.learning.prev}</button><span>{String(learnStep+1).padStart(2,'0')} / 06 · {axisOrder[learnStep]}</span>{learnStep<5?<button type="button" className="is-primary" onClick={()=>goLearn(learnStep+1)}>{ui.learning.next}: {axisOrder[learnStep+1]} →</button>:<button type="button" className="is-primary" onClick={completeLearning}>{ui.learning.complete} →</button>}</div>
        </div>

        <div className="an-learning-complete" hidden={!learningComplete||caseStarted}>
          <div className="an-phase-header"><small>{ui.learning.part1}</small><span>06 / 06</span></div>
          <small className="an-complete-eyebrow">{ui.learning.bridgeEyebrow}</small>
          <h2>{ui.learning.bridgeTitle}</h2>
          <p>{ui.learning.bridgeLead}</p>
          <div className="an-complete-axes">{axisOrder.map((name,i)=><span key={name}><b>{String(i+1).padStart(2,'0')}</b>{name}</span>)}</div>
          <div className="an-phase-transition"><div><small>{ui.learning.part2}</small><strong>FULL ANALYSIS CASE</strong></div><button type="button" className="an-course-primary" onClick={startCase}>{ui.learning.bridgeCta}<b>→</b></button></div>
        </div>
      </div>
    </section>}

    <section className="an-section an-full-case" id="full-case" data-an-reveal hidden={!caseStarted} aria-hidden={!caseStarted}>
      <div className="an-section-shell">
        <div className="an-phase-header"><small>{ui.learning.part2}</small><span>{String(caseStep+1).padStart(2,'0')} / 10</span></div>
        <div className="an-case-heading"><small>{copy.case.eyebrow}</small><h2>{copy.case.title}</h2><p>{copy.case.lead}</p><em>{ui.caseNote}</em></div>
        <div className="an-case-panel">
          <div className="an-case-progress">{copy.case.steps.map((item,i)=><div key={item.name} className={`an-case-progress-item ${i===caseStep?'is-active':i<caseStep?'is-done':'is-future'}`} aria-current={i===caseStep?'step':undefined}><span>{String(i+1).padStart(2,'0')}</span><small>{item.name}</small></div>)}</div>
          <div className="an-case-stack">{copy.case.steps.map((step,i)=><article className={`an-case-stage ${i===caseStep?'is-active':''}`} key={step.name} aria-hidden={i!==caseStep}><div className="an-case-copy"><div className="an-case-kicker"><span>{String(i+1).padStart(2,'0')}</span><small>{ui.caseEyebrows?.[i]||step.name}</small>{i>=7&&<b>{copy.case.scenario}: {scenario.label}</b>}</div><h3>{step.title}</h3><p className="an-case-data">{step.body}</p>{step.support&&<p className="an-case-support">{step.support}</p>}{ui.caseSecondaryLabels?.[i]&&<p className="an-case-secondary">{ui.caseSecondaryLabels[i]}</p>}{step.note&&<p className="an-case-note">{step.note}</p>}<div className="an-case-decision"><small>{ui.judgment}</small><strong>{step.decision}</strong></div>{ui.caseFooterNotes?.[i]&&<em className="an-case-footnote">{ui.caseFooterNotes[i]}</em>}</div><div className="an-case-visual"><CaseVisual index={i} scenario={scenario} scenarioId={scenarioId} setScenarioId={setScenarioId} ui={ui} bands={bands} copy={copy} locale={locale}/></div></article>)}</div>
          <div className="an-case-controls"><button type="button" onClick={()=>goCase(Math.max(0,caseStep-1))} disabled={caseStep===0}>← {copy.case.prev}</button><span>{String(caseStep+1).padStart(2,'0')} / 10</span>{caseStep<9?<button type="button" className="is-primary" onClick={()=>goCase(caseStep+1)}>{ui.caseCtas?.[caseStep]||copy.case.next} →</button>:<button type="button" className="is-primary" disabled>{ui.caseCtas?.[9]||copy.case.finish}</button>}</div>
        </div>
      </div>
    </section>
  </>;
}
