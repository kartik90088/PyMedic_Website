import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';
import Icon from './Icon.jsx';

/**
 * Icon cards in a grid. Cards rise in on scroll; a highlight then moves card to card (hover takes over).
 * items: [{ icon, title, text }]; cols: desktop column count.
 */
export default function CardGrid({ items, cols = 4, every = 1900, numbered = false }) {
  const reduce = useReducedMotion();
  const n = items.length;
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
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 90 + 400);
    const id = setInterval(() => setActive((x) => (x + 1 >= n + 1 ? 0 : x + 1)), every);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n, every]);

  return (
    <div ref={ref} className={`mods mods-live cg cols-${cols}${seen ? ' in' : ''}`}>
      {items.map((it, i) => (
        <article key={it.title} className={`mod${i < active ? ' done' : i === active ? ' on' : ''}`} style={{ '--d': `${i * 90}ms`, '--f': `${(i % cols) * 0.45}s` }}
          onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
          <div className="mod-top"><span className="ico"><Icon name={it.icon} size={20} /></span>{numbered && <span className="mod-n num">{String(i + 1).padStart(2, '0')}</span>}</div>
          <h3>{it.title}</h3>
          {it.text && <p>{it.text}</p>}
        </article>
      ))}
    </div>
  );
}
