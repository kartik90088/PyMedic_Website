import { useEffect, useState } from 'react';
import { useReducedMotion, useTabs } from '../hooks.js';
import SectionHead from './SectionHead.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import { CONSULT_SCREENS } from './mocks/Screens.jsx';

const STEP_MS = 5000;

const STEPS = [
  { title: 'Call the next patient', text: 'Press Call Next. The token number appears on the waiting-room screen.', screen: 'My OPD · Queue' },
  { title: 'Talk. PyMedic writes it down.', text: 'Start Recording turns the conversation into notes. Enter vitals; BMI is calculated.', screen: 'Consultation · Arjun M. · Token #7' },
  { title: 'Prescribe in one click', text: 'Type a few letters to find a medicine, or apply a Medicine Pack or Test Panel.', screen: 'Prescription · Arjun M.' },
  { title: "Complete. It's sent.", text: "A signed PDF on your letterhead goes to the patient's WhatsApp, and the bill is created.", screen: 'Prescription complete' },
];

/** Interactive, auto-advancing walkthrough of a consultation. Used on the Consultation page. */
export default function ConsultationWalkthrough({ kicker, title, accent, lead }) {
  const reduce = useReducedMotion();
  const [auto, setAuto] = useState(true);
  const n = STEPS.length;
  const { active, setActive, tabProps } = useTabs(n, { onUserSelect: () => setAuto(false) });

  useEffect(() => {
    if (!auto || reduce) return;
    const id = setTimeout(() => setActive((active + 1) % n), STEP_MS);
    return () => clearTimeout(id);
  }, [active, auto, reduce, n, setActive]);

  const Screen = CONSULT_SCREENS[active];

  return (
    <section className="sec consult" id="walkthrough" aria-labelledby="h-c">
      <div className="wrap">
        <SectionHead id="h-c" kicker={kicker} title={title} accent={accent} lead={lead} />
        <div className="c-grid">
          <ol className="c-steps" role="tablist" aria-label="Consultation steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <button {...tabProps(i, 'consult')}>
                  <span className="n">{i + 1}</span>
                  <span><span className="t">{s.title}</span><span className="d">{s.text}</span></span>
                </button>
              </li>
            ))}
          </ol>
          <div className="c-stage">
            <ProductScreenshot slot={`screenshot-02-${active + 1}`} title={STEPS[active].screen} label={`PyMedic consultation step ${active + 1}: ${STEPS[active].title} (sample data)`}>
              <div className="app-main fade" key={active} role="tabpanel" id={`consult-panel-${active}`}
                aria-labelledby={`consult-tab-${active}`} aria-live="polite" style={{ minHeight: 400 }}>
                <Screen />
              </div>
            </ProductScreenshot>
            <div className="progress" aria-hidden="true">
              <i style={{ width: `${((active + 1) / n) * 100}%`, transition: 'width .4s ease' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
