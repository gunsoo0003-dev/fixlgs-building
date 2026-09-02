import AnalysisV008Client from './AnalysisV008Client';
import {ANALYSIS_AXES_V019,ANALYSIS_TOOLS_V019} from './analysis-v019-data';
import {ANALYSIS_AXES_V039,ANALYSIS_TOOLS_V039} from './analysis-v039-localized';

export default function AnalysisPage({locale='ko',initialView=[]}){
  const axes=locale==='ko'?ANALYSIS_AXES_V019:(ANALYSIS_AXES_V039[locale]||ANALYSIS_AXES_V019);
  const tools=locale==='ko'?ANALYSIS_TOOLS_V019:(ANALYSIS_TOOLS_V039[locale]||ANALYSIS_TOOLS_V019);
  return <main className="analysis-page-v019-root">
    <AnalysisV008Client locale={locale} initialView={initialView}/>
    <section className="an19-seo-corpus" aria-label="Building analysis outline">
      <h2>FIX BUILDING ANALYSIS</h2>
      {axes.map(axis=><article key={axis.id}><h3>{axis.code} · {axis.name}</h3><p>{axis.question}</p><p>{axis.concept.title}</p><p>{axis.concept.body}</p>{axis.concept.takeaway&&<p>{axis.concept.takeaway}</p>}{axis.engineGuide?.map(item=><div key={item.node}><h4>{item.title}</h4><p>{item.body}</p><p>{item.takeaway}</p></div>)}{axis.methodGuide?.map(item=><div key={item.title}><h4>{item.title}</h4><p>{item.body}</p><p>{item.reason}</p>{item.caution&&<p>{item.caution}</p>}</div>)}{axis.steps.map(([title,body])=><div key={title}><h4>{title}</h4><p>{body}</p></div>)}</article>)}
      <article><h3>ANALYSIS TOOLS 07</h3>{tools.map(tool=><div key={tool.num}><h4>{tool.name}</h4><p>{tool.desc}</p></div>)}</article>
    </section>
  </main>;
}
