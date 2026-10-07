import { FEATURE_SECTIONS, ORBIT } from '../content/site.js';
import { markUrl } from './Brand.jsx';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';

/** Places `items` evenly on a ring of radius `r` (% of the container), starting at the top. */
const ring = (items, r, offset = -90) =>
  items.map((it, i) => {
    const a = ((offset + (360 / items.length) * i) * Math.PI) / 180;
    return { ...it, left: `${50 + r * Math.cos(a)}%`, top: `${50 + r * Math.sin(a)}%` };
  });

/** Platform map: every PyMedic module in orbit around the platform. Links jump to the feature sections above. */
export default function ModuleOrbit() {
  const HIDE = ['consultation', 'pyzap']; // shown elsewhere on the page; left off the map by request
  const shown = FEATURE_SECTIONS.filter((f) => !HIDE.includes(f.id));
  const inner = ring(shown.slice(0, 3), 26, -90);
  const outer = ring(shown.slice(3), 44, -90);
  const all = [...inner, ...outer];
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
          <div className="orbit-core">
            <img src={markUrl} alt="" width="56" height="53" />
            <b>Py<span>Medic</span></b>
            <small>One connected platform</small>
          </div>
          {all.map((m, i) => (
            <a key={m.id} href={`#${m.id}`} className={`orbit-pill t${i % 3}`} style={{ left: m.left, top: m.top, animationDelay: `${0.15 + i * 0.12}s, ${(i % 5) * 0.7}s` }}>
              <Icon name={m.icon} size={14} />{m.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
