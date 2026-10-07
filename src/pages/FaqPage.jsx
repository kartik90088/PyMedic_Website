import { ABDM, FAQ_GROUPS, FAQ_PAGE } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import FaqList, { faqSchema } from '../components/FaqList.jsx';
import SiteLink from '../components/SiteLink.jsx';
import { FinalCTA } from '../components/Footer.jsx';

const RELATED = {
  'Appointments and the OPD queue': { href: '/features#appointments', label: 'Appointments and queue features' },
  'Consultation and prescriptions': { href: '/for-doctors', label: 'For doctors: the consultation workflow' },
  'WhatsApp and PyZap': { href: '/features#pyzap', label: 'PyZap in detail' },
  'Billing and corporate healthcare': { href: '/features#billing', label: 'Billing and corporate B2B features' },
  'Platform': { href: '/features#multi-location', label: 'Multi-location architecture' },
};

export default function FaqPage() {
  const groups = ABDM.enabled ? [...FAQ_GROUPS, { title: 'ABDM', items: [{ id: 'abdm', ...ABDM.faq }] }] : FAQ_GROUPS;
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <Seo path="/faq" jsonLd={faqSchema(all)} />
      <PageHero kicker={FAQ_PAGE.kicker} h1={FAQ_PAGE.h1} lead={FAQ_PAGE.lead}>
        <ul className="subnav" aria-label="FAQ topics">
          {groups.map((g, i) => <li key={g.title}><a href={`#faq-group-${i}`}>{g.title}</a></li>)}
        </ul>
      </PageHero>
      {groups.map((g, i) => (
        <section key={g.title} className="sec faq-group" id={`faq-group-${i}`} aria-labelledby={`h-fg-${i}`}>
          <div className="wrap">
            <h2 id={`h-fg-${i}`} className="h3 faq-title">{g.title}</h2>
            <FaqList items={g.items} openFirst={i === 0} />
            {RELATED[g.title] && <p className="faq-rel"><SiteLink href={RELATED[g.title].href} className="more">{RELATED[g.title].label} →</SiteLink></p>}
          </div>
        </section>
      ))}
      <FinalCTA title="Still have a question?" text="Ask it on a demo call. We'll answer with the product open." secondary={{ href: '/demo-video', label: 'Watch Demo First' }} />
    </>
  );
}
