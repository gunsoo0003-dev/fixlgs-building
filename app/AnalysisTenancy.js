'use client';

import { useState } from 'react';
import { ANALYSIS_DATA } from './analysis-copy';
import { manText } from './analysis-format';

export default function AnalysisTenancy({copy,ui,locale='ko'}){
  const [focused,setFocused]=useState(false);
  const d=ANALYSIS_DATA.tenancy;
  return <div className={`an-tenancy-viz ${focused?'is-focused':''}`}>
    <div>
      <div className="an-tenancy-instruction"><span>{ui.tenancy.instruction}</span><button type="button" onClick={()=>setFocused(v=>!v)} aria-pressed={focused}>{focused?ui.tenancy.reset:ui.tenancy.select}</button></div>
      <div className="an-space-grid">
        {[1,2,3,4,5].map(n=>{
          const isKey=n===1;
          const isVacant=n===5;
          return <button type="button" key={n} className={`${isKey?'is-key':''} ${isVacant?'is-vacant':''}`} onClick={()=>isKey&&setFocused(true)} aria-label={isKey?ui.tenancy.keyAria:undefined} disabled={!isKey}>
            <span>0{n}</span>
            <strong>{isKey?copy.key:isVacant?copy.vacant:ui.tenancy.tenant}</strong>
            {isKey&&<div className="an-key-details"><b>{d.share}%</b><em>{manText(d.keyRent,locale)} / {ui.tenancy.year}</em></div>}
          </button>;
        })}
      </div>
    </div>
    <div className="an-tenancy-side" aria-live="polite">
      <div className="an-impact-number"><small>{ui.tenancy.incomeShare}</small><strong>{d.share}%</strong><p>{copy.verdict}</p></div>
      <div className="an-lease-timeline"><small>{copy.timeline}</small><div><span>{ui.tenancy.now}</span><i/><b>{d.months}{ui.tenancy.monthShort}</b></div></div>
    </div>
  </div>;
}
