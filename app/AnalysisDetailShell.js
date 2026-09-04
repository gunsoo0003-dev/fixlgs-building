'use client';

export default function AnalysisDetailShell({eyebrow,title,lead,onBack,backLabel='← ANALYSIS HOME',children}){
  return <article className="an19-axis-page">
    <div className="an19-axis-hero">
      <div className="an19-shell">
        <button className="an19-back" onClick={onBack}>{backLabel}</button>
        <small>{eyebrow}</small>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </div>
    <div className="an19-shell an19-content">{children}</div>
  </article>;
}
