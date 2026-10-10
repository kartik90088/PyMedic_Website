import { ABDM, FAQ_GROUPS, FAQ_PAGE } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import FaqList, { faqSchema } from '../components/FaqList.jsx';
import SiteLink from '../components/SiteLink.jsx';
import { FinalCTA } from '../components/Footer.jsx';

const RELATED = {
  'Appointments and the OPD queue': { href: '/features#appointments', label: 'Appointments and queue features' },
  'Consultation and prescriptions': { href: '/for-doctors', label: 'For doctors: the consultation workflow' },
  'WhatsApp': { href: '/features#pyzap', label: 'WhatsApp engagement in detail' },
  'Billing and corporate healthcare': { href: '/features#billing', label: 'Billing and corporate B2B features' },
  'Platform': { href: '/features#multi-location', label: 'Multi-location architecture' },
};

export default function FaqPage() {
  const groups = ABDM.enabled ? [...FAQ_GROUPS, { title: 'ABDM', items: [{ id: 'abdm', ...ABDM.faq }] }] : FAQ_GROUPS;
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <Seo path="/faq" jsonLd={faqSchema(all)} />
      <div className="faq-pagebg" aria-hidden="true" />
      <PageHero kicker={FAQ_PAGE.kicker} h1={FAQ_PAGE.h1} lead={FAQ_PAGE.lead} />
      <section className="sec tight faq-onbg" id="faq-list" aria-label="Questions and answers">
        <div className="wrap">
          <FaqList groups={groups} search tools />
          <ul className="faqx-related" aria-label="Related pages">
            {Object.entries(RELATED).map(([t, r]) => <li key={t}><SiteLink href={r.href}>{r.label} →</SiteLink></li>)}
          </ul>
        </div>
      </section>
      <FinalCTA title="Still have a question?" text="Ask it on a demo call. We'll answer with the product open." secondary={{ href: '/demo-video', label: 'Watch Demo First' }} />
    </>
  );
}
