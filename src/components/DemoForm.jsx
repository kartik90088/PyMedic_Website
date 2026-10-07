import { useState } from 'react';
import { DEMO, SITE_CONFIG } from '../content/site.js';
import { markUrl } from './Brand.jsx';

const FIELDS = [
  { name: 'name', label: 'Full name', autoComplete: 'name', placeholder: 'Dr. Anjali Rao', error: 'Please enter your name.' },
  { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email', placeholder: 'you@clinic.in', error: 'Please enter a valid email, like you@clinic.in.' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', inputMode: 'tel', placeholder: '+91', error: 'Please enter a phone number with at least 10 digits.' },
  { name: 'organization', label: 'Clinic or hospital', autoComplete: 'organization', error: 'Please enter your clinic or hospital name.' },
  { name: 'org_type', label: 'Type', options: DEMO.orgTypes, error: 'Please choose a type.' },
  { name: 'team_size', label: 'Number of doctors', options: DEMO.sizes, error: 'Please choose the number of doctors.' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name, value) {
  const v = (value || '').trim();
  if (name === 'phone') return v.replace(/\D/g, '').length >= 10;
  if (name === 'email') return EMAIL_RE.test(v);
  return v !== '';
}

/** The form itself. `idPrefix` keeps ids unique when it appears twice on one page (page + popup). */
export function DemoFormFields({ idPrefix = 'f', compact = false, onSuccess }) {
  const id = (n) => `${idPrefix}-${n}`;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const set = (name) => (e) => setValues((v) => ({ ...v, [name]: e.target.value }));
  const check = (f) => {
    const ok = validate(f.name, values[f.name]);
    setErrors((er) => ({ ...er, [f.name]: ok ? '' : f.error }));
    return ok;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const bad = FIELDS.filter((f) => !check(f));
    if (bad.length) { document.getElementById(id(bad[0].name))?.focus(); return; }
    if (!values.consent) { setErrors((er) => ({ ...er, consent: 'Please tick the box so we can contact you about your demo.' })); document.getElementById(id('consent'))?.focus(); return; }
    if (!SITE_CONFIG.formEndpoint) { setStatus('Details look good. Requests will be delivered once the form endpoint is connected.'); return; }
    setSending(true);
    try {
      const r = await fetch(SITE_CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      if (!r.ok) throw new Error();
      setStatus('Thank you. Our team will call you to schedule the demo.');
      setValues({});
      onSuccess?.();
    } catch {
      setStatus("We couldn't send your request. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={`f${compact ? ' compact' : ''}`} noValidate onSubmit={onSubmit}>
      <div className="f-head">
        <img src={markUrl} alt="" width="36" height="34" />
        <div><b>Book your PyMedic demo</b><small>Takes under a minute</small></div>
      </div>
    
      {FIELDS.map((f) => (
        <div className="field" key={f.name} data-invalid={errors[f.name] ? '' : undefined}>
          <label htmlFor={id(f.name)}>{f.label}</label>
          {f.options ? (
            <select id={id(f.name)} name={f.name} required value={values[f.name] || ''} onChange={set(f.name)} onBlur={() => check(f)} aria-invalid={!!errors[f.name]}>
              <option value="">Select…</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : (
            <input id={id(f.name)} name={f.name} type={f.type || 'text'} required autoComplete={f.autoComplete} inputMode={f.inputMode}
              placeholder={f.placeholder} value={values[f.name] || ''} onChange={set(f.name)} onBlur={() => check(f)} aria-invalid={!!errors[f.name]} />
          )}
          <span className="err" aria-live="polite">{errors[f.name]}</span>
        </div>
      ))}
    
      <div className="field full">
        <label htmlFor={id('message')}>Anything we should know? <span className="opt">(optional)</span></label>
        <textarea id={id('message')} name="message" placeholder="For example: we want to cut waiting-room crowding" value={values.message || ''} onChange={set('message')} />
      </div>
    
      <div className="field full consent" data-invalid={errors.consent ? '' : undefined}>
        <label htmlFor={id('consent')}>
          <input id={id('consent')} name="consent" type="checkbox" checked={!!values.consent} aria-invalid={!!errors.consent}
            onChange={(e) => { setValues((v) => ({ ...v, consent: e.target.checked })); if (e.target.checked) setErrors((er) => ({ ...er, consent: '' })); }} />
          <span>I consent to being contacted by PyMedic regarding my enquiry, appointment, or requested services via phone, email, WhatsApp, or text message.</span>
        </label>
        <span className="err" aria-live="polite">{errors.consent}</span>
      </div>

      <div className="f-foot">
        <small>We'll use these details only to arrange your demo.</small>
        <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Book a Demo'}</button>
      </div>
      {status && <p className="f-status" role="status">{status}</p>}
    </form>
  );
}

/** Book a Demo page section. `heading` is "h1" on the Book a Demo page and "h2" when embedded elsewhere. */
export default function DemoForm({ heading: H = 'h2' }) {
  return (
    <section className="sec" id="book-demo" aria-labelledby="h-d" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)' }}>
      <div className="wrap demo">
        <div>
          <p className="kicker">{DEMO.kicker}</p>
          <H id="h-d" className="h2">{DEMO.title}</H>
          <p className="lead">{DEMO.lead}</p>
          <ul className="expect">
            {DEMO.expect.map((x, i) => <li key={x}><span className="ico">{i + 1}</span><div>{x}</div></li>)}
          </ul>
        </div>
        <DemoFormFields />
      </div>
    </section>
  );
}
