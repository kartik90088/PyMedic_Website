import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';

/**
 * Before / with-PyMedic comparison table. rows: [label, before, after].
 * Rows arrive one by one; then a highlight walks down the table, striking out the old way
 * and lighting up the PyMedic way. Hovering a row takes over.
 */
export default function Compare({ heads, rows, every = 1800 }) {
  const reduce = useReducedMotion();
  const n = rows.length;
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

  useEffect(() => {
    if (!seen || reduce || hover) return;
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 120 + 500);
    const id = setInterval(() => setActive((x) => (x + 1 >= n + 1 ? 0 : x + 1)), every);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n, every]);

  return (
    <div ref={ref} className={`compare-wrap compare-live${seen ? ' in' : ''}`}>
      <table className="compare">
        <thead><tr>{heads.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map(([k, a, b], i) => (
            <tr key={k} className={i < active ? 'done' : i === active ? 'on' : undefined} style={{ '--d': `${i * 120}ms` }}
              onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
              <th scope="row">{k}</th>
              <td className="before" data-label={heads[1]}><span className="cmp-x" aria-hidden="true">✕</span><span className="cmp-t">{a}</span></td>
              <td className="after" data-label={heads[2]}><span className="cmp-ok" aria-hidden="true">✓</span><span className="cmp-t">{b}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cmp-score" aria-hidden="true">
        <span>{Math.max(0, Math.min(active + 1, n))} of {n} steps connected</span>
        <i><b style={{ width: `${(Math.max(0, Math.min(active + 1, n)) / n) * 100}%` }} /></i>
      </div>
    </div>
  );
}
