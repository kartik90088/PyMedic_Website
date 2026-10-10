import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';

/**
 * Numbered list of steps: [title, text] pairs. `cols` sets the desktop column count.
 * Steps rise in on scroll; a highlight then walks through them in order, ticking off the ones it has passed.
 * Hovering a step moves the highlight there and pauses it.
 */
export default function StepList({ steps, cols = 2, className = '', every = 1600, onActive }) {
  const reduce = useReducedMotion();
  const n = steps.length;
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

  useEffect(() => {
    if (!seen || reduce || hover) return;
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 80 + 400);
    const id = setInterval(() => setActive((x) => (x + 1 >= n + 1 ? 0 : x + 1)), every);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n, every]);

  useEffect(() => { if (onActive) onActive(Math.max(0, Math.min(active, n - 1))); }, [active, n, onActive]);

  return (
    <ol ref={ref} className={`steps steps-live cols-${cols}${seen ? ' in' : ''} ${className}`}>
      {steps.map(([t, s], i) => (
        <li key={t} className={i < active ? 'done' : i === active ? 'on' : undefined} style={{ '--d': `${i * 80}ms` }}
          onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
          <b>{t}</b>{s && <p>{s}</p>}
          <span className="st-bar" aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
