import { useEffect, useRef, useState } from 'react';
import { DEMO } from '../content/site.js';
import { markUrl } from './Brand.jsx';
import { DemoFormFields } from './DemoForm.jsx';

/**
 * Opens whenever the visitor scrolls past the middle of the home page.
 * After it is closed it re-arms once they scroll back up above `rearm`, so it does not flicker,
 * but it will show again on the next pass. It stops for the visit once a request has been sent.
 */
export default function DemoPopup({ at = 0.5, rearm = 0.35 }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const armed = useRef(true);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (done) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pos = window.scrollY / max;
      if (pos <= rearm) armed.current = true;
      if (armed.current && pos >= at) {
        armed.current = false;
        openerRef.current = document.activeElement;
        setOpen(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [at, rearm, done]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const close = () => { setOpen(false); openerRef.current?.focus?.(); };

  if (!open) return null;
  return (
    <div className="popup" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup-panel" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <button ref={closeRef} className="popup-close" type="button" aria-label="Close" onClick={close}>×</button>
        <div className="popup-head">
          <img src={markUrl} alt="" width="40" height="38" />
          <div>
            <p className="kicker">{DEMO.kicker}</p>
            <h2 id="popup-title">{DEMO.title}</h2>
            <p>{DEMO.lead}</p>
          </div>
        </div>
        <DemoFormFields idPrefix="pf" compact onSuccess={() => { setDone(true); setTimeout(close, 2500); }} />
      </div>
    </div>
  );
}
