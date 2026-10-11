import AnalysisV008Client from './AnalysisV008Client';

export default function AnalysisPage({locale='ko',initialView=[]}){
  return <main className="analysis-page-v019-root">
    <AnalysisV008Client locale={locale} initialView={initialView}/>

  </main>;
}
