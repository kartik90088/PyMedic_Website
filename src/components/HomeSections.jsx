// Home-page sections: problem, connected journey, six modules, consultation highlight, WhatsApp, billing, lead management, data flow, outcomes, FAQ preview.
import { ABDM, BILLING, CONSULT_HIGHLIGHT, DATA_FLOW, FAQ_GROUPS, FAQ_PREVIEW_IDS, JOURNEY, LEADFLOW, MODULES, OUTCOMES, PROBLEM, PYZAP } from '../content/site.js';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import SiteLink from './SiteLink.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import Photo from './Photo.jsx';
import FaqList from './FaqList.jsx';
import FlowCards from './FlowCards.jsx';
import { CONSULT_SCREENS, FEATURE_SCREENS } from './mocks/Screens.jsx';

export function Problem() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = PROBLEM.items.length;
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setActive((x) => (x + 1) % n), 4500);
    return () => clearInterval(id);
  }, [reduce, paused, n]);
  const pick = (i) => { setActive(i); setPaused(true); };
  return (
    <section className="sec" id="problem" aria-labelledby="h-prob">
      <div className="wrap">
        <SectionHead id="h-prob" kicker="The problem" title={PROBLEM.title} accent={PROBLEM.accent} lead={PROBLEM.lead} />
        <div className="prob-grid">
          <div className="prob-photo" aria-live="polite">
            {PROBLEM.images.map((im, i) => (
              <figure key={im.src} className={`photo prob-img${i === active ? ' on' : ''}`} aria-hidden={i !== active}>
                <img src={im.src} alt={i === active ? im.alt : ''} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
              </figure>
            ))}
            <div className="prob-cap" key={active}><b>{PROBLEM.items[active][0]}</b><span>{PROBLEM.items[active][1]}</span></div>
          </div>
          <ul className="frag" role="list">
            {PROBLEM.items.map(([k, v], i) => (
              <li key={k}>
                <button type="button" className={i === active ? 'on' : undefined} aria-pressed={i === active} onClick={() => pick(i)} onMouseEnter={() => !reduce && setActive(i)}>
                  <b>{k}</b><span>{v}</span>
                </button>
              </li>
            ))}
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
  const reduce = useReducedMotion();
  const n = JOURNEY.stages.length;
  const [step, setStep] = useState(reduce ? n - 1 : -1);
  const [seen, setSeen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen || reduce) return;
    const id = setInterval(() => setStep((x) => (x + 1 >= n + 2 ? 0 : x + 1)), 1100);
    return () => clearInterval(id);
  }, [seen, reduce, n]);

  return (
    <section className="sec journey-band" id="journey" aria-labelledby="h-journey">
      <div className="wrap">
        <SectionHead id="h-journey" center kicker={JOURNEY.kicker} title={JOURNEY.title} accent={JOURNEY.accent} lead={JOURNEY.lead} />
        <ol ref={ref} className={`jflow${seen ? ' in' : ''}`}>
          {JOURNEY.stages.map((s, i) => (
            <li key={s.stage} className={i < step ? 'done' : i === step ? 'now' : undefined} style={{ '--d': `${i * 70}ms` }}
              onMouseEnter={() => setStep(i)}>
              <span className="jf-ico"><Icon name={s.icon} size={22} /><span className="jf-n num">{i + 1}</span></span>
              <b className="jf-t">{s.stage}</b>
              <span className="jf-m">{s.module}</span>
              <p className="jf-x">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Modules() {
  const reduce = useReducedMotion();
  const n = MODULES.length;
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(-1);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Modules light up in order (01 -> 09), like the record being handed from one module to the next.
  useEffect(() => {
    if (!seen || reduce || hover) return;
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 90 + 400);
    const id = setInterval(() => setActive((x) => (x + 1 >= n + 1 ? 0 : x + 1)), 1900);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n]);
  return (
    <section className="sec" id="modules" aria-labelledby="h-mod">
      <div className="wrap">
        <SectionHead id="h-mod" kicker="Core modules" title="Nine parts," accent="one record." lead="Each module owns one stage of the visit and hands the record to the next." />
        <div ref={ref} className={`mods mods-live${seen ? ' in' : ''}`}>
          {MODULES.map((m, i) => (
            <article key={m.n} className={`mod${i < active ? ' done' : i === active ? ' on' : ''}`} style={{ '--d': `${i * 90}ms`, '--f': `${(i % 3) * 0.45}s` }}
              onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
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
          <div className="cta-row sec-cta">
            <SiteLink className="btn btn-ghost" href={CONSULT_HIGHLIGHT.cta.href}>{CONSULT_HIGHLIGHT.cta.label}</SiteLink>
          </div>
        </div>
        <ProductScreenshot slot="screenshot-consultation" title="Consultation · Arjun M. · Token #7" label="PyMedic doctor consultation screen with voice recording, notes converted from speech and vitals (sample data)">
          <div className="app-main ch-main">
            <Screen />
            <div className="vit vit-more">{[['Pulse', '84 bpm'], ['Resp', '18 /min'], ['Height', '172 cm'], ['Weight', '69 kg']].map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
            <div className="card">
              <h5>Prescription · Viral Fever Pack</h5>
              {[['Paracetamol 500 mg', '1-0-1', 'Tablet · 5 days · after food'], ['Cetirizine 10 mg', '0-0-1', 'Tablet · 5 days'], ['Multivitamin', '1-0-0', 'Tablet · 10 days']].map(([n, d, sub]) => (
                <div key={n} className="med"><b>{n}</b><span>{d}</span><small>{sub}</small></div>
              ))}
            </div>
          </div>
        </ProductScreenshot>
      </div>
    </section>
  );
}

export function WhatsAppSection() {
  return (
    <section className="sec" id="pyzap" aria-labelledby="h-pz">
      <div className="wrap pat">
        <div>
          <p className="kicker">{PYZAP.kicker}</p>
          <h2 id="h-pz" className="h2">{PYZAP.title} <span>{PYZAP.accent}</span></h2>
          <p className="lead">{PYZAP.lead}</p>
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
          <h3 className="h3 sec-cta">{BILLING.corporate.title}</h3>
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
        <ProductScreenshot slot="screenshot-leadflow" title={FEATURE_SCREENS.leadflow.title} label="PyMedic lead management pipeline with leads from website, WhatsApp and phone moving from New to Converted (sample data)">
          <Screen />
        </ProductScreenshot>
      </div>
    </section>
  );
}

const FLOW_ICONS = ['cal', 'queue', 'desk', 'steth', 'rx', 'chat', 'bill', 'bell'];

export function DataFlow() {
  return (
    <section className="sec flow-band" id="data-flow" aria-labelledby="h-flow">
      <div className="wrap">
        <SectionHead id="h-flow" kicker={DATA_FLOW.kicker} title={DATA_FLOW.title} accent={DATA_FLOW.accent} lead={DATA_FLOW.lead} />
        <FlowCards cols={4} every={1700} items={DATA_FLOW.steps.map(([title, text], i) => ({ title, text, icon: FLOW_ICONS[i] || 'check' }))} />
      </div>
    </section>
  );
}

export function Outcomes() {
  const reduce = useReducedMotion();
  const n = OUTCOMES.items.length;
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(-1);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // After the cards arrive, a highlight moves card to card; it pauses while the visitor hovers a card.
  useEffect(() => {
    if (!seen || reduce || hover) return;
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 90 + 500);
    const id = setInterval(() => setActive((x) => (x + 1) % n), 2200);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n]);
  return (
    <section className="sec" id="outcomes" aria-labelledby="h-out">
      <div className="wrap">
        <SectionHead id="h-out" kicker={OUTCOMES.kicker} title={OUTCOMES.title} accent={OUTCOMES.accent} />
        <div ref={ref} className={`outs outs-live${seen ? ' in' : ''}`}>
          {OUTCOMES.items.map((o, i) => (
            <article key={o.title} className={`out${i === active ? ' on' : ''}`} style={{ '--d': `${i * 90}ms`, '--f': `${(i % 4) * 0.4}s` }}
              onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
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
    <section className="sec tight" id="faq-preview" aria-labelledby="h-fp">
      <div className="wrap">
        <SectionHead id="h-fp" kicker="Common questions" title="Before you book a demo." />
        <FaqList items={items} more={{ href: '/faq', label: 'Read all PyMedic FAQs' }} />
      </div>
    </section>
  );
}
