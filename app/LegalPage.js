import { LEGAL_COPY } from './legal-copy';

const BASE_PATH = '/building';

export default function LegalPage({ locale='ko', type='privacy' }) {
  const language = LEGAL_COPY[locale] || LEGAL_COPY.ko;
  const page = language[type] || language.privacy;
  return <>
    <main className="legal-page">
      <section className="legal-shell">
        <small>{page.eyebrow}</small>
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>
        <div className="legal-sections">
          {page.sections.map(([title, body]) => <section key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>)}
        </div>
        <a className="legal-back" href={`${BASE_PATH}/${locale}`}>{language.home} <span>→</span></a>
      </section>
    </main>
    
  </>;
}
