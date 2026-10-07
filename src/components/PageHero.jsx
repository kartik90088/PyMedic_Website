import SiteLink from './SiteLink.jsx';

/** Top of every inner page: kicker, the page's single H1, lead and up to two CTAs. `visual` renders beside the text. */
export default function PageHero({ kicker, h1, lead, primary, secondary, visual, children }) {
  return (
    <section className={`page-hero${visual ? ' has-visual' : ''}`}>
      <div className="wrap page-hero-in">
        <div>
          {kicker && <p className="kicker">{kicker}</p>}
          <h1>{h1}</h1>
          {lead && <p className="lead">{lead}</p>}
          {(primary || secondary) && (
            <div className="cta-row">
              {primary && <SiteLink className="btn btn-primary" href={primary.href}>{primary.label}</SiteLink>}
              {secondary && <SiteLink className="btn btn-ghost" href={secondary.href}>{secondary.label}</SiteLink>}
            </div>
          )}
          {children}
        </div>
        {visual && <div className="page-hero-visual">{visual}</div>}
      </div>
    </section>
  );
}
