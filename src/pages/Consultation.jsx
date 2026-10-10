import { CONSULTATION_PAGE as C, DOCTOR_ABDM as A } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import StepList from '../components/StepList.jsx';
import ConsultationWalkthrough from '../components/ConsultationWalkthrough.jsx';
import Compare from '../components/Compare.jsx';
import ProductScreenshot from '../components/ProductScreenshot.jsx';
import Photo from '../components/Photo.jsx';
import FaqList from '../components/FaqList.jsx';
import Icon from '../components/Icon.jsx';
import SiteLink from '../components/SiteLink.jsx';
import { FinalCTA } from '../components/Footer.jsx';
import { PrescriptionScreen, RX_PRIYA, WorkflowScreen } from '../components/mocks/Screens.jsx';

export default function Consultation() {
  return (
    <>
      <Seo path="/for-doctors" />
      <PageHero kicker={C.kicker} h1={C.h1} lead={C.lead} primary={C.primary} secondary={C.secondary}
        visual={<Photo id="consultation-hero" ratio="3 / 2" />}>
        <a className="abdm-badge" href="#abdm"><span className="abdm-mark" aria-hidden="true">ABDM</span>{A.badge}</a>
      </PageHero>

      <section className="sec" id="workflow" aria-labelledby="h-wf">
        <div className="wrap">
          <div className="m-panel" style={{ alignItems: 'center', marginBottom: 'var(--head-gap)' }}>
            <div>
              <SectionHead id="h-wf" kicker="The workflow" title="Ten steps," accent="one screen." lead="Everything from Call Next to the follow-up reminder, in the order it happens." />
              <ul className="wf-facts">
                {C.workflowFacts.map((f) => <li key={f.title}><span className="ico"><Icon name={f.icon} size={18} /></span><div><b>{f.title}</b><p>{f.text}</p></div></li>)}
              </ul>
              <div className="cta-row sec-cta"><a className="btn btn-ghost" href="#walkthrough">Try the walkthrough</a></div>
            </div>
            <ProductScreenshot slot="screenshot-consultation-workflow" title="Consultation · Arjun M. · Token #7" label="PyMedic consultation workspace stepping through Call Next, recording, notes, vitals, medicines, medicine pack, tests, prescription, WhatsApp delivery and the automatic next steps (sample data)"><WorkflowScreen /></ProductScreenshot>
          </div>
          <StepList steps={C.workflow} cols={2} />
        </div>
      </section>

      <ConsultationWalkthrough {...C.walkthrough} />

      <section className="sec" id="compare" aria-labelledby="h-cmp">
        <div className="wrap">
          <SectionHead id="h-cmp" kicker={C.compare.kicker} title={C.compare.title} accent={C.compare.accent} />
          <Compare heads={C.compare.heads} rows={C.compare.rows} />
        </div>
      </section>

      <section className="sec" id="triggers" aria-labelledby="h-trg" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap m-panel rev">
          <ProductScreenshot slot="screenshot-prescription-pdf" title="Prescription · Priya R. · PDF" label="PyMedic prescription PDF on the clinic letterhead with digital signature and QR verification code (sample data)"><PrescriptionScreen rx={RX_PRIYA} /></ProductScreenshot>
          <div>
            <SectionHead id="h-trg" kicker={C.triggers.kicker} title={C.triggers.title} accent={C.triggers.accent} />
            <ul className="trig">
              {C.triggers.items.map((t) => <li key={t.title}><span className="ico"><Icon name={t.icon} size={18} /></span><div><b>{t.title}</b><p>{t.text}</p></div></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec abdm-band" id="abdm" aria-labelledby="h-abdm">
        <div className="wrap m-panel">
          <div>
            <h2 id="h-abdm" className="h2">{A.title} <span>{A.accent}</span>{A.soon && <span className="soon-tag">Coming soon</span>}</h2>
            <p className="lead">{A.lead}</p>
            <ul className="trig">
              {A.points.map((t) => <li key={t.title}><span className="ico"><Icon name={t.icon} size={18} /></span><div><b>{t.title}</b><p>{t.text}</p></div></li>)}
            </ul>
            <div className="cta-row sec-cta"><SiteLink className="btn btn-ghost" href={A.cta.href}>{A.cta.label}</SiteLink></div>
          </div>
          <div className="abdm-flow" aria-label="How ABDM linking will work">
            <div className="abdm-flow-head"><span className="abdm-flow-mark" aria-hidden="true">ABDM</span><b>How linking will work</b><span className="soon-tag">Coming soon</span></div>
            <ol>
              {A.flow.map((f, i) => (
                <li key={f.title} style={{ '--d': `${i * 0.6}s` }}>
                  <span className="abdm-ico"><Icon name={f.icon} size={22} /><span className="num">{i + 1}</span></span>
                  <div><b>{f.title}</b><small>{f.text}</small></div>
                </li>
              ))}
            </ol>
            <p>Planned flow · available when ABDM integration launches</p>
          </div>
        </div>
      </section>

      <section className="sec tight" id="consultation-faq" aria-labelledby="h-cf">
        <div className="wrap">
          <SectionHead id="h-cf" kicker="Consultation questions" title="What doctors ask about the workflow." />
          <FaqList items={C.faq} tools />
          <p className="sec-cta"><SiteLink href={C.next.href} className="more">{C.next.label} →</SiteLink></p>
        </div>
      </section>

      <FinalCTA title="See a consultation on your own letterhead." text="A demo walks through Call Next, voice notes, a medicine pack and the WhatsApp delivery, with your clinic's details."
        secondary={{ href: '/features', label: 'Browse All Features' }} />
    </>
  );
}
