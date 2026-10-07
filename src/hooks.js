import { useEffect, useRef, useState } from 'react';

export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const on = (e) => setReduce(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduce;
}

/** Accessible tabs: returns props for the tablist, each tab and each panel. */
export function useTabs(count, { initial = 0, onUserSelect } = {}) {
  const [active, setActive] = useState(initial);
  const refs = useRef([]);
  const select = (i, focus = false) => {
    setActive(i);
    if (focus) refs.current[i]?.focus();
  };
  const tabProps = (i, idBase) => ({
    role: 'tab',
    id: `${idBase}-tab-${i}`,
    'aria-selected': active === i,
    'aria-controls': `${idBase}-panel-${i}`,
    tabIndex: active === i ? 0 : -1,
    ref: (el) => (refs.current[i] = el),
    onClick: () => { onUserSelect?.(); select(i); },
    onKeyDown: (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); onUserSelect?.(); select((i + d + count) % count, true); }
    },
  });
  const panelProps = (i, idBase) => ({
    role: 'tabpanel',
    id: `${idBase}-panel-${i}`,
    'aria-labelledby': `${idBase}-tab-${i}`,
    hidden: active !== i,
  });
  return { active, setActive: select, tabProps, panelProps };
}

/** Loops 0..steps-1 every `ms` milliseconds. Drives the "live" sample screens; frozen when the visitor prefers reduced motion. */
export function useTick(steps, ms = 2400) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((x) => (x + 1) % steps), ms);
    return () => clearInterval(id);
  }, [steps, ms, reduce]);
  return i;
}
