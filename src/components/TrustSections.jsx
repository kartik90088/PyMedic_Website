// Multi-tenant architecture and data/access trust. Claims here come from the product document only; no certifications are asserted.
import { TENANCY, TRUST } from '../content/site.js';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import SiteLink from './SiteLink.jsx';
import { TenancyDiagram } from './mocks/Screens.jsx';

export function Tenancy({ cta }) {
  return (
    <section className="sec" id="multi-location" aria-labelledby="h-ten" style={{ background: 'var(--surface-2)' }}>
      <div className="wrap trust">
        <div>
          <SectionHead id="h-ten" kicker={TENANCY.kicker} title={TENANCY.title} accent={TENANCY.accent} lead={TENANCY.lead} />
          <div className="t-cols">
            <div><h3 className="h4">Shared across the platform</h3><ul className="ticks">{TENANCY.shared.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><h3 className="h4">Private to each clinic</h3><ul className="ticks">{TENANCY.isolated.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <p className="fine">{TENANCY.branches}</p>
          {cta && <SiteLink href={cta.href} className="more">{cta.label} →</SiteLink>}
        </div>
        <TenancyDiagram />
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="sec tight" id="security" aria-labelledby="h-sec">
      <div className="wrap">
        <SectionHead id="h-sec" kicker={TRUST.kicker} title={TRUST.title} accent={TRUST.accent} />
        <div className="t-list four">
          {TRUST.items.map((t) => <div key={t.title}><span className="lock"><Icon name="lock" size={13} />{t.title}</span><p>{t.text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
