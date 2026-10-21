import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';
import Icon from './Icon.jsx';

/**
 * Cards laid out as a connected flow: numbered, joined by arrows, rising in on scroll,
 * with a highlight that travels card to card and fills the connector behind it. Hover takes over.
 */
export default function FlowCards({ items, every = 2000, cols }) {
  const reduce = useReducedMotion();
  const n = items.length;
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(reduce ? n - 1 : -1);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen || reduce || hover) return;
    const start = setTimeout(() => setActive((x) => (x < 0 ? 0 : x)), n * 100 + 400);
    const id = setInterval(() => setActive((x) => (x + 1 >= n + 1 ? 0 : x + 1)), every);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [seen, reduce, hover, n, every]);

  return (
    <ol ref={ref} className={`fcards${seen ? ' in' : ''}${cols ? ` cols-${cols}` : ''}`} style={{ '--n': cols || n }}>
      {items.map((it, i) => (
        <li key={it.title} className={i < active ? 'done' : i === active ? 'on' : undefined} style={{ '--d': `${i * 100}ms`, '--f': `${i * 0.35}s` }}
          onMouseEnter={() => { setHover(true); setActive(i); }} onMouseLeave={() => setHover(false)}>
          <div className="fc-top">
            <span className="ico"><Icon name={it.icon} size={20} /></span>
            <span className="fc-n num">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{it.title}</h3>
          {it.text && <p>{it.text}</p>}
          {i < n - 1 && <span className="fc-link" aria-hidden="true"><i /></span>}
        </li>
      ))}
    </ol>
  );
}
