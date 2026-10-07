import { useEffect, useState } from 'react';
import { CAPABILITIES, HERO } from '../content/site.js';
import { useReducedMotion } from '../hooks.js';
import Icon from './Icon.jsx';
import ProductScreenshot from './ProductScreenshot.jsx';
import SiteLink from './SiteLink.jsx';
import { HeroDashboard } from './mocks/Screens.jsx';

export function Hero() {
  const reduce = useReducedMotion();
  const [token, setToken] = useState(6);
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
          <h1 id="h1">{HERO.titleStart} <em>{HERO.titleEmphasis}</em></h1>
          <p className="lead">{HERO.lead}</p>
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
          <ProductScreenshot slot="screenshot-01" title="PyMedic · My OPD · Today" label="PyMedic hospital practice management dashboard showing today's appointments, the live OPD queue and a voice note (sample data)">
            <HeroDashboard token={token} />
          </ProductScreenshot>
          <div className="chip chip-b">
            <span className="ico"><Icon name="rx" size={14} /></span>
            <div><b>Prescription sent</b><small>Signed PDF delivered on WhatsApp</small></div>
          </div>
          <div className="chip chip-a">
            <span className="ico" style={{ background: '#DCF8C6', color: '#075E54' }}><Icon name="clock" size={14} /></span>
            <div><b>"You are #3 · about 9 min"</b><small>Queue position on the patient's phone</small></div>
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
