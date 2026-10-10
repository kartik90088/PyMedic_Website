import { useEffect, useState } from 'react';
import { FEATURE_SECTIONS, ORBIT } from '../content/site.js';
import { useReducedMotion } from '../hooks.js';
import SiteLink from './SiteLink.jsx';
import { markUrl } from './Brand.jsx';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';

/** Places `items` evenly on a ring of radius `r` (% of the container), starting at `offset` degrees. */
const ring = (items, r, offset = -90) =>
  items.map((it, i) => {
    const deg = offset + (360 / items.length) * i;
    const a = (deg * Math.PI) / 180;
    return { ...it, r, deg, left: `${50 + r * Math.cos(a)}%`, top: `${50 + r * Math.sin(a)}%` };
  });

/**
 * Platform map: every PyMedic module in orbit around the platform.
 * A highlight travels round the map, with a beam from the core to the active module. Hover takes over.
 */
export default function ModuleOrbit() {
  const reduce = useReducedMotion();
  const HIDE = ['consultation', 'pyzap']; // shown elsewhere on the page; left off the map by request
  const shown = FEATURE_SECTIONS.filter((f) => !HIDE.includes(f.id)).map((f) => ({ ...f, href: `#${f.id}` }));
  const extra = ORBIT.extra || [];
  const inner = ring([...shown.slice(0, 3), ...extra.filter((x) => x.ring === 'inner')], 26, -90);
  const outer = ring([...shown.slice(3), ...extra.filter((x) => x.ring !== 'inner')], 44, -75);
  const all = [...inner, ...outer];
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (reduce || hover) return;
    const id = setInterval(() => setActive((x) => (x + 1) % all.length), 1600);
    return () => clearInterval(id);
  }, [reduce, hover, all.length]);

  const cur = all[active];
  return (
    <section className="sec orbit-band" id="platform-map" aria-labelledby="h-orbit">
      <div className="wrap">
        <SectionHead id="h-orbit" kicker={ORBIT.kicker} title={ORBIT.title} accent={ORBIT.accent} lead={ORBIT.lead} />
        <div className="orbit" aria-label="PyMedic modules arranged around the platform">
          <div className="orbit-ring r1" aria-hidden="true" />
          <div className="orbit-ring r2" aria-hidden="true" />
          <div className="orbit-ring r3" aria-hidden="true" />
          <div className="orbit-sat s1" aria-hidden="true"><i /></div>
          <div className="orbit-sat s2" aria-hidden="true"><i /></div>
          {cur && !reduce && <span key={active} className="orbit-beam" aria-hidden="true" style={{ width: `${cur.r}cqw`, transform: `rotate(${cur.deg}deg)` }} />}
          <div className="orbit-core">
            <img src={markUrl} alt="" width="56" height="53" />
            <b>Py<span>Medic</span></b>
            <small key={cur ? cur.name : ''} className="orbit-now">{cur ? cur.name : 'One connected platform'}</small>
          </div>
          {all.map((m, i) => (
            <SiteLink key={m.name} href={m.href} className={`orbit-pill t${i % 3}${i === active ? ' on' : ''}${m.soon ? ' soon' : ''}`}
              style={{ left: m.left, top: m.top, animationDelay: `${0.15 + i * 0.1}s, ${(i % 5) * 0.7}s` }}
              onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
              <Icon name={m.icon} size={14} />{m.name}{m.soon && <em>Soon</em>}
            </SiteLink>
          ))}
        </div>
        <p className="orbit-count">{all.length} capabilities · one patient record</p>
      </div>
    </section>
  );
}
