import { CONSULTATION_PAGE as C } from '../content/site.js';
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
        visual={<Photo id="consultation-hero" ratio="3 / 2" />} />

      <section className="sec" id="workflow" aria-labelledby="h-wf">
        <div className="wrap">
          <div className="m-panel" style={{ alignItems: 'start', marginBottom: 'clamp(28px,4vw,48px)' }}>
            <SectionHead id="h-wf" kicker="The workflow" title="Ten steps," accent="one screen." lead="Everything from Call Next to the follow-up reminder, in the order it happens." />
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

      <section className="sec" id="consultation-faq" aria-labelledby="h-cf" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead id="h-cf" kicker="Consultation questions" title="What doctors ask about the workflow." />
          <FaqList items={C.faq} />
          <p style={{ marginTop: 22 }}><SiteLink href={C.next.href} className="more">{C.next.label} →</SiteLink></p>
        </div>
      </section>

      <FinalCTA title="See a consultation on your own letterhead." text="A demo walks through Call Next, voice notes, a medicine pack and the WhatsApp delivery, with your clinic's details."
        secondary={{ href: '/features', label: 'Browse All Features' }} />
    </>
  );
}
