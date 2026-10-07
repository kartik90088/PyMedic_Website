import { FEATURE_SECTIONS } from '../content/site.js';
import Icon from './Icon.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import SiteLink from './SiteLink.jsx';
import { FEATURE_SCREENS } from './mocks/Screens.jsx';

/** In-page index of feature sections. */
export function FeatureIndex() {
  return (
    <nav className="wrap" aria-label="Features on this page">
      <ul className="subnav">
        {FEATURE_SECTIONS.map((f) => <li key={f.id}><a href={`#${f.id}`}><Icon name={f.icon} size={14} />{f.name}</a></li>)}
      </ul>
    </nav>
  );
}

/** One section per workflow, alternating text and screen. */
export default function FeatureBlocks() {
  return (
    <>
      {FEATURE_SECTIONS.map((f, i) => {
        const screen = FEATURE_SCREENS[f.screen];
        const Body = screen.body;
        return (
          <section key={f.id} className={`sec feat${i % 2 ? ' alt' : ''}`} id={f.id} aria-labelledby={`h-${f.id}`}>
            <div className={`wrap m-panel${i % 2 ? ' rev' : ''}`}>
              {i % 2 === 1 && (
                <ProductScreenshot slot={`screenshot-${f.id}`} title={screen.title} label={`PyMedic ${f.name} screen (sample data)`}><Body /></ProductScreenshot>
              )}
              <div>
                <p className="kicker">{f.name}</p>
                <h2 id={`h-${f.id}`} className="h2">{f.title}</h2>
                <p className="lead">{f.text}</p>
                <ul className="ticks">{f.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <p className="benefit"><b>Why it matters</b>{f.benefit}</p>
                {f.href && <SiteLink href={f.href} className="more">{f.cta} →</SiteLink>}
              </div>
              {i % 2 === 0 && (
                <ProductScreenshot slot={`screenshot-${f.id}`} title={screen.title} label={`PyMedic ${f.name} screen (sample data)`}><Body /></ProductScreenshot>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
