import { FOOTER, LEGAL, SITE_CONFIG } from '../content/site.js';
import Icon from './Icon.jsx';
import { Logo, MarkTile } from './Brand.jsx';
import SiteLink from './SiteLink.jsx';

/** Closing call-to-action. Copy is passed per page so no two pages repeat it. */
export function FinalCTA({ title, text, primary = { href: '/book-demo', label: 'Book a Demo' }, secondary }) {
  return (
    <section className="wrap" aria-labelledby="h-final" style={{ marginTop: 'clamp(64px,8vw,104px)' }}>
      <div className="final">
        <MarkTile />
        <div>
          <h2 id="h-final">{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="cta-row">
          <SiteLink className="btn btn-primary" href={primary.href}>{primary.label}</SiteLink>
          {secondary && <SiteLink className="btn btn-outline-light" href={secondary.href}>{secondary.label}</SiteLink>}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const c = SITE_CONFIG;
  const social = c.social.filter((x) => x.href);
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <Logo />
          <p>{c.tagline}</p>
          <ul className="foot-contact">
            <li><span className="ico"><Icon name="mail" size={15} /></span><a href={`mailto:${c.email}`}>{c.email}</a></li>
            <li><span className="ico"><Icon name="phone" size={15} /></span><a href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a></li>
          </ul>
          {social.length > 0 && (
            <ul className="foot-social" aria-label="Social media">
              {social.map((x) => <li key={x.name}><a href={x.href} aria-label={x.label} target="_blank" rel="noreferrer"><Icon name={x.name} size={16} /></a></li>)}
            </ul>
          )}
        </div>

        <div className="foot-offices">
          {c.offices.map((o) => (
            <address key={o.title}>
              <span className="ico"><Icon name="pin" size={15} /></span>
              <div><b>{o.title}</b>{o.lines.map((l) => <span key={l}>{l}</span>)}</div>
            </address>
          ))}
        </div>

        {FOOTER.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>{col.links.map(([href, label]) => <li key={label}><SiteLink href={href}>{label}</SiteLink></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="wrap legal">
        <nav aria-label="Legal">{LEGAL.map(([href, label]) => <a key={label} href={href}>{label}</a>)}</nav>
        <span>Copyright {new Date().getFullYear()} {c.company}</span>
      </div>
    </footer>
  );
}
