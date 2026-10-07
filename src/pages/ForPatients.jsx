import { PATIENTS_PAGE as P } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import StepList from '../components/StepList.jsx';
import Icon from '../components/Icon.jsx';
import SiteLink from '../components/SiteLink.jsx';
import Photo from '../components/Photo.jsx';
import ProductScreenshot from '../components/ProductScreenshot.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function ForPatients() {
  return (
    <>
      <Seo path="/for-patients" />
      <PageHero kicker={P.kicker} h1={P.h1} primary={P.primary} secondary={P.secondary}
        lead={<>{P.lead} <span className="lead-accent">{P.leadAccent}</span></>}
        visual={
          <div className="pat-hero">
            <ProductScreenshot slot="screenshot-patient-portal" title="PyMedic · Patient portal · Dashboard" src={P.heroPhoto.src} alt={P.heroPhoto.alt} className="pat-shot" />
            <div className="chip chip-f">
              <span className="ico" style={{ background: '#DCF8C6', color: '#075E54' }}><Icon name="clock" size={14} /></span>
              <div><b>Your turn is next</b><small>Token #12 · please be ready</small></div>
            </div>
            <div className="chip chip-g">
              <span className="ico"><Icon name="rx" size={14} /></span>
              <div><b>Prescription.pdf</b><small>Delivered on WhatsApp</small></div>
            </div>
          </div>
        }>
        <ol className="pflow" aria-label="The patient journey in six steps">
          {P.flow.map((f, i) => (
            <li key={f.title} style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
              <span className="pflow-ico" style={{ animationDelay: `${i * 0.5}s` }}><Icon name={f.icon} size={22} /></span>
              <b>{f.title}</b><small>{f.sub}</small>
            </li>
          ))}
        </ol>
        <ul className="pbadges" aria-label="What patients can count on">
          {P.badges.map((b, i) => (
            <li key={b.title} style={{ animationDelay: `${1 + i * 0.15}s` }}><span className="ico"><Icon name={b.icon} size={20} /></span>{b.title}</li>
          ))}
        </ul>
      </PageHero>

      <section className="sec" id="patient-journey" aria-labelledby="h-pj" style={{ background: 'var(--white)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <SectionHead id="h-pj" kicker="The patient journey" title="Nine steps," accent="none of them a phone call to the desk." />
          <div className="prob-grid">
            <Photo id="patients-journey" ratio="2 / 3" />
            <StepList steps={P.journey} cols={2} />
          </div>
        </div>
      </section>

      <section className="sec" id="patient-highlights" aria-labelledby="h-ph">
        <div className="wrap">
          <SectionHead id="h-ph" kicker={P.highlights.kicker} title={P.highlights.title} accent={P.highlights.accent} />
          <div className="outs five">
            {P.highlights.items.map((h) => (
              <article key={h.title} className="out"><span className="ico"><Icon name={h.icon} size={20} /></span><h3>{h.title}</h3><p>{h.text}</p></article>
            ))}
          </div>
          <p style={{ marginTop: 28 }}><SiteLink href={P.next.href} className="more">{P.next.label} →</SiteLink></p>
        </div>
      </section>

      <FinalCTA title="Give your patients a visit they can follow." text="See the booking page, the queue link and the WhatsApp messages exactly as a patient receives them."
        secondary={{ href: '/demo-video', label: 'Watch Demo' }} />
    </>
  );
}
