import Icon from './Icon.jsx';

/** Features hero: bedside photo with an animated cluster of module icons and a patient-record card beside it. */
const TILES = [
  { icon: 'cal', label: 'Appointments', angle: -100 },
  { icon: 'build', label: 'Hospital', angle: -40 },
  { icon: 'lock', label: 'Secure', angle: 30 },
  { icon: 'chat', label: 'WhatsApp', angle: 110 },
  { icon: 'rx', label: 'Prescription', angle: 180 },
  { icon: 'steth', label: 'Consultation', angle: 240 },
];
const R = 20; // ring radius, % of the art width

export default function FeatureHeroArt() {
  return (
    <div className="fx-art" aria-label="A doctor with a tablet talking with a patient at the bedside, surrounded by PyMedic modules">
      <img className="fx-photo" src="/photos/features-bedside.jpg" alt="" width="984" height="1024" fetchPriority="high" decoding="async" />
      <div className="fx-ring" aria-hidden="true" />
      <div className="fx-card" aria-hidden="true">
        <span className="fx-av"><Icon name="desk" size={20} /></span>
        <span className="fx-heart"><Icon name="heart" size={16} /></span>
        <i className="l1" /><i className="l2" /><i className="l3" /><i className="l4" />
        <svg className="fx-ecg" viewBox="0 0 120 24" aria-hidden="true"><path d="M0 12h22l6-9 8 18 7-13 5 4h18l5-8 7 14 6-6h36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" /></svg>
      </div>
      {TILES.map((t, i) => {
        const a = (t.angle * Math.PI) / 180;
        return (
          <span key={t.icon} className="fx-tile" title={t.label} style={{ left: `${26 + R * Math.cos(a)}%`, top: `${50 + R * 1.3 * Math.sin(a)}%`, animationDelay: `${0.3 + i * 0.15}s, ${i * 0.6}s` }}>
            <Icon name={t.icon} size={22} />
          </span>
        );
      })}
    </div>
  );
}
