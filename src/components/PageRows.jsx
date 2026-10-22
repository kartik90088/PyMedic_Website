import ProductScreenshot from './ProductScreenshot.jsx';
import SiteLink from './SiteLink.jsx';
import { FEATURE_SCREENS } from './mocks/Screens.jsx';

/**
 * Alternating text-and-screen rows for audience pages (Hospitals, Diagnostic Centre).
 * rows: [{ id, name, title, text, bullets, benefit, screen, href, cta }]; `screen` keys map to FEATURE_SCREENS.
 */
export default function PageRows({ rows }) {
  return (
    <>
      {rows.map((r, i) => {
        const screen = FEATURE_SCREENS[r.screen];
        const Body = screen.body;
        const shot = <ProductScreenshot slot={`screenshot-${r.id}`} title={screen.title} label={`PyMedic ${r.name} screen (sample data)`}><Body /></ProductScreenshot>;
        return (
          <section key={r.id} className={`sec feat${i % 2 ? ' alt' : ''}`} id={r.id} aria-labelledby={`h-${r.id}`}>
            <div className={`wrap m-panel${i % 2 ? ' rev' : ''}`}>
              {i % 2 === 1 && shot}
              <div>
                <h2 id={`h-${r.id}`} className="h2">{r.title}</h2>
                <p className="lead">{r.text}</p>
                <ul className="ticks">{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                {r.benefit && <p className="benefit"><b>Why it matters</b>{r.benefit}</p>}
                {r.href && <p className="sec-cta"><SiteLink href={r.href} className="more">{r.cta} →</SiteLink></p>}
              </div>
              {i % 2 === 0 && shot}
            </div>
          </section>
        );
      })}
    </>
  );
}
