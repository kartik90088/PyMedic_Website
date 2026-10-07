import { TEAM_PAGE } from '../content/site.js';
import Icon from './Icon.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import { FEATURE_SCREENS } from './mocks/Screens.jsx';

/** One section per user role, with the screen that role works in. */
export default function RoleSections() {
  return (
    <>
      {TEAM_PAGE.roles.map((r, i) => {
        const screen = FEATURE_SCREENS[r.screen];
        const Body = screen.body;
        return (
          <section key={r.id} className={`sec${i % 2 ? ' alt' : ''}`} id={r.id} aria-labelledby={`h-${r.id}`}>
            <div className={`wrap m-panel${i % 2 ? ' rev' : ''}`}>
              {i % 2 === 1 && <ProductScreenshot slot={`screenshot-role-${r.id}`} title={screen.title} label={`PyMedic screen used by ${r.title.toLowerCase()} (sample data)`}><Body /></ProductScreenshot>}
              <div>
                <p className="kicker"><Icon name={r.icon} size={14} /> {r.sub}</p>
                <h2 id={`h-${r.id}`} className="h2">{r.title}</h2>
                <p className="lead">{r.lead}</p>
                <ul className="ticks">{r.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              {i % 2 === 0 && <ProductScreenshot slot={`screenshot-role-${r.id}`} title={screen.title} label={`PyMedic screen used by ${r.title.toLowerCase()} (sample data)`}><Body /></ProductScreenshot>}
            </div>
          </section>
        );
      })}
    </>
  );
}
