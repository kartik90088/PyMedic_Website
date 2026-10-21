import { useEffect, useState } from 'react';
import { CAPABILITIES, HERO } from '../content/site.js';
import { useReducedMotion } from '../hooks.js';
import Icon from './Icon.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import SiteLink from './SiteLink.jsx';
import { HeroDashboard, FEATURE_SCREENS } from './mocks/Screens.jsx';

const SLIDES = [
  { short: 'My OPD', title: 'PyMedic · My OPD · Today', label: "Doctor's dashboard with today's appointments, the live OPD queue and a voice note" },
  { short: 'Booking', key: 'appointments', title: 'Book · Dr. Sharma · Tuesday', label: 'Appointment booking with doctor slots filling in real time' },
  { short: 'Queue', key: 'queue', title: 'Waiting room display', label: 'Waiting-room TV display showing the token each doctor is seeing' },
  { short: 'Customer appointments', key: 'customer', title: 'Customer appointments · WhatsApp & AI calling', label: 'Customer appointments confirmed over WhatsApp and AI calls' },
  { short: 'Billing', key: 'billing', title: 'Billing', label: 'Billing with consultation, diagnostic and pharmacy invoices and a corporate credit meter' },
];

/** Splits the headline into words that rise in one by one; the key phrases get a highlight that moves between them. */
function HeadlineWords({ text, keywords, active }) {
  // Tokens: plain words, or a key phrase. Punctuation stays glued to the word before it so lines never start with ",".
  const tokens = [];
  let rest = text;
  while (rest.length) {
    let hit = -1, at = rest.length;
    keywords.forEach((k, ki) => { const p = rest.indexOf(k); if (p >= 0 && p < at) { at = p; hit = ki; } });
    rest.slice(0, at).split(/\s+/).filter(Boolean).forEach((w) => {
      if (/^[,.;:!?]+$/.test(w) && tokens.length) tokens[tokens.length - 1].tail += w; else tokens.push({ w, tail: '' });
    });
    if (hit < 0) break;
    const k = keywords[hit];
    rest = rest.slice(at + k.length);
    const m = rest.match(/^[,.;:!?]+/);
    tokens.push({ w: k, tail: m ? m[0] : '', key: hit });
    if (m) rest = rest.slice(m[0].length);
  }
  let i = 0;
  return tokens.map((t, n) => {
    const el = (
      <span key={n} className="hw" style={{ '--i': i }}>
        {t.key !== undefined ? <span className={`hk${t.key === active ? ' on' : ''}`}>{t.w}</span> : t.w}{t.tail}
      </span>
    );
    i += t.w.split(' ').length;
    return n < tokens.length - 1 ? [el, ' '] : el;
  });
}

export function Hero() {
  const reduce = useReducedMotion();
  const [token, setToken] = useState(6);
  const [slide, setSlide] = useState(0);
  const [kw, setKw] = useState(0);
  const [rot, setRot] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const a = setInterval(() => setKw((x) => (x + 1) % HERO.keywords.length), 2600);
    const b = setInterval(() => setRot((x) => (x + 1) % HERO.rotate.length), 1900);
    return () => { clearInterval(a); clearInterval(b); };
  }, [reduce]);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, [reduce, paused]);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setToken((t) => (t >= 9 ? 6 : t + 1)), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="hero" id="top" aria-labelledby="h1">
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">{HERO.kicker}</p>
          <h1 id="h1" className="hero-h1" aria-label={`${HERO.titleStart} ${HERO.titleEmphasis}`}>
            <HeadlineWords text={HERO.titleStart} keywords={HERO.keywords} active={kw} />{' '}
            <em className="hw h1-line2" style={{ '--i': HERO.titleStart.split(' ').length }}>{HERO.titleEmphasis}</em>
          </h1>
          <p className="sr">{HERO.lead}</p>
          <div className="hero-sub" aria-hidden="true">
            <p className="hero-rot">
              {HERO.rotateLine[0]}{' '}
              <span className="rot-box"><span key={rot} className="rot-word">{HERO.rotate[rot]}</span></span>
              <span className="rot-end">{HERO.rotateLine[1]}</span>
            </p>
            <ul className="hero-promise">{HERO.promises.map((x) => <li key={x}><Icon name="check" size={13} />{x}</li>)}</ul>
          </div>
          <div className="cta-row">
            <SiteLink className="btn btn-primary" href={HERO.primary.href}>{HERO.primary.label}</SiteLink>
            <SiteLink className="btn btn-ghost" href={HERO.secondary.href}><Icon name="play" size={14} />{HERO.secondary.label}</SiteLink>
          </div>
          <ul className="hero-points">
            {HERO.points.map((p) => (
              <li key={p.text}><span className="ico"><Icon name={p.icon} size={14} /></span>{p.text}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-stage">
            <div className="hero-carousel" aria-roledescription="carousel" aria-label="PyMedic product screens">
              {SLIDES.map((sl, i) => {
                const Body = sl.key ? FEATURE_SCREENS[sl.key].body : null;
                return (
                  <div key={sl.label} className={`hc-slide${i === slide ? ' on' : ''}`} aria-hidden={i !== slide} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${SLIDES.length}: ${sl.label}`}>
                    <ProductScreenshot slot={`screenshot-hero-${i + 1}`} title={sl.title} label={`${sl.label} (sample data)`}>
                      {Body ? <Body /> : <HeroDashboard token={token} />}
                    </ProductScreenshot>
                  </div>
                );
              })}
            </div>
            <div className="chip chip-b">
              <span className="ico"><Icon name="rx" size={14} /></span>
              <div><b>Prescription sent</b><small>Signed PDF delivered on WhatsApp</small></div>
            </div>
            <div className="chip chip-a">
              <span className="ico" style={{ background: '#DCF8C6', color: '#075E54' }}><Icon name="clock" size={14} /></span>
              <div><b>"You are #3 · about 9 min"</b><small>Queue position on the patient's phone</small></div>
            </div>
          </div>
          <div className="hc-dots" role="tablist" aria-label="Choose a screen">
            {SLIDES.map((sl, i) => (
              <button key={sl.label} type="button" role="tab" aria-selected={i === slide} aria-label={sl.label} className={i === slide ? 'on' : undefined}
                onClick={() => { setSlide(i); setPaused(true); }}><span>{sl.short}</span></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Capability strip under the hero. Text only: no customer logos until real, approved ones exist. */
export function CapabilityStrip() {
  return (
    <section className="strip" aria-label="What PyMedic covers">
      <div className="wrap strip-in">
        <p>One platform for</p>
        <div className="marquee">
          <ul className="marquee-track">
            {[0, 1].map((copy) => CAPABILITIES.map((m) => <li key={`${copy}-${m}`} aria-hidden={copy === 1 || undefined}>{m}</li>))}
          </ul>
        </div>
      </div>
    </section>
  );
}
