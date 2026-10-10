import { useState } from 'react';
import { PATIENTS_PAGE as P } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import StepList from '../components/StepList.jsx';
import Icon from '../components/Icon.jsx';
import SiteLink from '../components/SiteLink.jsx';
import Photo from '../components/Photo.jsx';
import FlowCards from '../components/FlowCards.jsx';
import ProductScreenshot from '../components/ProductScreenshot.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function ForPatients() {
  const [step, setStep] = useState(0);
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
          <div className="prob-grid journey-grid">
            <div className="prob-photo journey-photo" aria-live="polite">
              {P.journeyImages.map((im, i) => (
                <figure key={im.src} className={`photo prob-img${i === step ? ' on' : ''}`} aria-hidden={i !== step}>
                  <img src={im.src} alt={i === step ? im.alt : ''} width="800" height="1200" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                </figure>
              ))}
              <div className="prob-cap" key={step}><b>{String(step + 1).padStart(2, '0')} · {P.journey[step][0]}</b><span>{P.journey[step][1]}</span></div>
            </div>
            <StepList steps={P.journey} cols={2} onActive={setStep} />
          </div>
        </div>
      </section>

      <section className="sec" id="patient-highlights" aria-labelledby="h-ph">
        <div className="wrap">
          <SectionHead id="h-ph" kicker={P.highlights.kicker} title={P.highlights.title} accent={P.highlights.accent} />
          <FlowCards items={P.highlights.items} />
          <p className="sec-cta"><SiteLink href={P.next.href} className="more">{P.next.label} →</SiteLink></p>
        </div>
      </section>

      <FinalCTA title="Give your patients a visit they can follow." text="See the booking page, the queue link and the WhatsApp messages exactly as a patient receives them."
        secondary={{ href: '/demo-video', label: 'Watch Demo' }} />
    </>
  );
}
