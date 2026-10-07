// Home-page sections: problem, connected journey, six modules, consultation highlight, PyZap, billing, LeadFlow, data flow, outcomes, FAQ preview.
import { ABDM, BILLING, CONSULT_HIGHLIGHT, DATA_FLOW, FAQ_GROUPS, FAQ_PREVIEW_IDS, JOURNEY, LEADFLOW, MODULES, OUTCOMES, PROBLEM, PYZAP } from '../content/site.js';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import SiteLink from './SiteLink.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import Photo from './Photo.jsx';
import { CONSULT_SCREENS, FEATURE_SCREENS } from './mocks/Screens.jsx';

export function Problem() {
  return (
    <section className="sec" id="problem" aria-labelledby="h-prob">
      <div className="wrap">
        <SectionHead id="h-prob" kicker="The problem" title={PROBLEM.title} accent={PROBLEM.accent} lead={PROBLEM.lead} />
        <div className="prob-grid">
          <Photo id="home-problem" ratio="4 / 5" />
          <ul className="frag">
            {PROBLEM.items.map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}
          </ul>
        </div>
        <div className="bridge">
          <span className="ico"><Icon name="check" size={18} /></span>
          <div><h3>{PROBLEM.bridgeTitle}</h3><p>{PROBLEM.bridgeText}</p></div>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="sec journey-band" id="journey" aria-labelledby="h-journey">
      <div className="wrap">
        <SectionHead id="h-journey" center kicker={JOURNEY.kicker} title={JOURNEY.title} accent={JOURNEY.accent} lead={JOURNEY.lead} />
        <ol className="journey">
          {JOURNEY.stages.map((s) => (
            <li key={s.stage}>
              <span className="j-stage">{s.stage}</span>
              <span className="j-module">{s.module}</span>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Modules() {
  return (
    <section className="sec" id="modules" aria-labelledby="h-mod">
      <div className="wrap">
        <SectionHead id="h-mod" kicker="Six core modules" title="Six parts," accent="one record." lead="Each module owns one stage of the visit and hands the record to the next." />
        <div className="mods">
          {MODULES.map((m) => (
            <article key={m.n} className="mod">
              <div className="mod-top"><span className="ico"><Icon name={m.icon} size={20} /></span><span className="mod-n num">{m.n}</span></div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <SiteLink href={m.href} className="more">{m.cta} →</SiteLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultHighlight() {
  const Screen = CONSULT_SCREENS[1];
  return (
    <section className="sec consult" id="consultation-highlight" aria-labelledby="h-ch">
      <div className="wrap m-panel">
        <div>
          <p className="kicker">{CONSULT_HIGHLIGHT.kicker}</p>
          <h2 id="h-ch" className="h2">{CONSULT_HIGHLIGHT.title} <span>{CONSULT_HIGHLIGHT.accent}</span></h2>
          <p className="lead">{CONSULT_HIGHLIGHT.text}</p>
          <div className="cta-row" style={{ marginTop: 26 }}>
            <SiteLink className="btn btn-ghost" href={CONSULT_HIGHLIGHT.cta.href}>{CONSULT_HIGHLIGHT.cta.label}</SiteLink>
          </div>
        </div>
        <ProductScreenshot slot="screenshot-consultation" title="Consultation · Arjun M. · Token #7" label="PyMedic doctor consultation screen with voice recording, notes converted from speech and vitals (sample data)">
          <div className="app-main" style={{ minHeight: 300 }}><Screen /></div>
        </ProductScreenshot>
      </div>
    </section>
  );
}

export function PyZap() {
  return (
    <section className="sec" id="pyzap" aria-labelledby="h-pz">
      <div className="wrap pat">
        <div>
          <p className="kicker">{PYZAP.kicker}</p>
          <h2 id="h-pz" className="h2">{PYZAP.title} <span>{PYZAP.accent}</span></h2>
          <p className="lead" style={{ marginTop: 14 }}>{PYZAP.lead}</p>
          <ul className="pat-list">
            {PYZAP.types.map((t) => (
              <li key={t.title}><span className="ico"><Icon name={t.icon} size={20} /></span><div><b>{t.title}</b><p>{t.text}</p></div></li>
            ))}
          </ul>
          <p className="fine">{PYZAP.numbers}</p>
        </div>
        <div className="showcase">
          <figure className="photo showcase-img" style={{ aspectRatio: '16 / 9' }}>
            <img src="/photos/doctor-laptop.jpg" alt="A doctor using the PyMedic dashboard on a laptop, showing today's appointments and queue" loading="lazy" decoding="async" width="1280" height="720" />
          </figure>
          <div className="chip chip-c">
            <span className="ico" style={{ background: '#DCF8C6', color: '#075E54' }}><Icon name="chat" size={14} /></span>
            <div><b>Appointment confirmed</b><small>Token #6 · sent on WhatsApp</small></div>
          </div>
          <div className="chip chip-d">
            <span className="ico"><Icon name="rx" size={14} /></span>
            <div><b>Prescription delivered</b><small>PDF in the patient's chat</small></div>
          </div>
          <div className="chip chip-e">
            <span className="ico" style={{ background: 'var(--warn-soft)', color: 'var(--warn)' }}><Icon name="bell" size={14} /></span>
            <div><b>Day 3 reminder</b><small>Scheduled · runs automatically</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Billing() {
  const Screen = FEATURE_SCREENS.billing.body;
  return (
    <section className="sec" id="billing" aria-labelledby="h-bill" style={{ background: 'var(--white)', borderBlock: '1px solid var(--line)' }}>
      <div className="wrap m-panel rev">
        <ProductScreenshot slot="screenshot-billing" title={FEATURE_SCREENS.billing.title} label="PyMedic billing screen with consultation, diagnostic and pharmacy invoice series and a corporate credit meter (sample data)">
          <Screen />
        </ProductScreenshot>
        <div>
          <p className="kicker">{BILLING.kicker}</p>
          <h2 id="h-bill" className="h2">{BILLING.title} <span>{BILLING.accent}</span></h2>
          <p className="lead">{BILLING.text}</p>
          <h3 className="h3" style={{ marginTop: 26 }}>{BILLING.corporate.title}</h3>
          <ol className="steps cols-1 tight">{BILLING.corporate.steps.map((s) => <li key={s}><p>{s}</p></li>)}</ol>
        </div>
      </div>
    </section>
  );
}

export function LeadFlow() {
  const Screen = FEATURE_SCREENS.leadflow.body;
  return (
    <section className="sec" id="leadflow" aria-labelledby="h-lf">
      <div className="wrap m-panel">
        <div>
          <p className="kicker">{LEADFLOW.kicker}</p>
          <h2 id="h-lf" className="h2">{LEADFLOW.title} <span>{LEADFLOW.accent}</span></h2>
          <p className="lead">{LEADFLOW.lead}</p>
          <div className="tags" aria-label="Where leads come from">{LEADFLOW.sources.map((s) => <span key={s}>{s}</span>)}</div>
          <ol className="pipeline" aria-label="Pipeline stages">{LEADFLOW.stages.map((s) => <li key={s}>{s}</li>)}</ol>
          <ul className="ticks">{LEADFLOW.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <ProductScreenshot slot="screenshot-leadflow" title={FEATURE_SCREENS.leadflow.title} label="PyMedic LeadFlow pipeline with leads from website, WhatsApp and phone moving from New to Converted (sample data)">
          <Screen />
        </ProductScreenshot>
      </div>
    </section>
  );
}

export function DataFlow() {
  return (
    <section className="sec flow-band" id="data-flow" aria-labelledby="h-flow">
      <div className="wrap">
        <SectionHead id="h-flow" kicker={DATA_FLOW.kicker} title={DATA_FLOW.title} accent={DATA_FLOW.accent} lead={DATA_FLOW.lead} />
        <ol className="flow">
          {DATA_FLOW.steps.map(([t, s]) => <li key={t}><b>{t}</b><small>{s}</small></li>)}
        </ol>
      </div>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="sec" id="outcomes" aria-labelledby="h-out">
      <div className="wrap">
        <SectionHead id="h-out" kicker={OUTCOMES.kicker} title={OUTCOMES.title} accent={OUTCOMES.accent} />
        <div className="outs">
          {OUTCOMES.items.map((o) => (
            <article key={o.title} className="out">
              <span className="ico"><Icon name={o.icon} size={20} /></span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Rendered only when ABDM.enabled is true and the copy has been confirmed. */
export function Abdm() {
  if (!ABDM.enabled) return null;
  return (
    <section className="sec" id="abdm" aria-labelledby="h-abdm">
      <div className="wrap">
        <SectionHead id="h-abdm" kicker={ABDM.kicker} title={ABDM.title} lead={ABDM.text} />
      </div>
    </section>
  );
}

/** Questions only; the answers live on /faq so they are not duplicated here. */
export function FaqPreview() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  const items = FAQ_PREVIEW_IDS.map((id) => all.find((f) => f.id === id)).filter(Boolean);
  return (
    <section className="sec" id="faq-preview" aria-labelledby="h-fp" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead id="h-fp" kicker="Common questions" title="Before you book a demo." />
        <ul className="faq-q">
          {items.map((f) => <li key={f.id}><SiteLink href={`/faq#faq-${f.id}`}>{f.q}<span aria-hidden="true">→</span></SiteLink></li>)}
        </ul>
        <p style={{ marginTop: 22 }}>
          <SiteLink href="/faq" className="more">Read all PyMedic FAQs →</SiteLink>
        </p>
      </div>
    </section>
  );
}
