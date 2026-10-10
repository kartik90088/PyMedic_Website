import { Fragment, useEffect, useMemo, useState } from 'react';
import SiteLink from './SiteLink.jsx';

/** Wraps every case-insensitive match of `q` in <mark>. */
function Hi({ text, q }) {
  if (!q) return text;
  const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'));
  return parts.map((p, i) => (p.toLowerCase() === q.toLowerCase() ? <mark key={i}>{p}</mark> : <Fragment key={i}>{p}</Fragment>));
}

function Item({ f, n, open, onToggle, q }) {
  const [vote, setVote] = useState(null);
  const [copied, setCopied] = useState(false);
  const id = f.id || `q${n}`;
  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}#faq-${id}`;
    navigator.clipboard?.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {});
  };
  return (
    <div className={`fq${open ? ' open' : ''}`} id={`faq-${id}`}>
      <h3 className="fq-h">
        <button type="button" className="fq-q" aria-expanded={open} aria-controls={`faq-a-${id}`} onClick={onToggle}>
          <span className="fq-n num">{String(n).padStart(2, '0')}</span>
          <span className="fq-t"><Hi text={f.q} q={q} /></span>
          <span className="fq-i" aria-hidden="true" />
        </button>
      </h3>
      <div className="fq-wrap" id={`faq-a-${id}`} role="region" aria-hidden={!open}>
        <div className="fq-inner">
          <p className="fq-a"><Hi text={f.a} q={q} /></p>
          <div className="fq-foot">
            {vote ? <span className="fq-thanks" role="status">{vote === 'yes' ? 'Thanks, glad it helped.' : 'Thanks. Ask us on a demo call and we will answer properly.'}</span> : (
              <span className="fq-vote">Was this helpful?
                <button type="button" tabIndex={open ? 0 : -1} onClick={() => setVote('yes')}>Yes</button>
                <button type="button" tabIndex={open ? 0 : -1} onClick={() => setVote('no')}>No</button>
              </span>
            )}
            <button type="button" className="fq-link" tabIndex={open ? 0 : -1} onClick={copy}>{copied ? 'Link copied' : 'Copy link'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive FAQ. Pass `items` for a flat list, or `groups` ([{title, items}]) for topic chips.
 * `search` adds a filter box; `tools` adds expand/collapse all. Opens the question named in the URL hash.
 */
export default function FaqList({ items, groups, search = false, tools = false, openFirst = true, more }) {
  const all = useMemo(() => (groups ? groups.flatMap((g) => g.items.map((f) => ({ ...f, group: g.title }))) : items), [groups, items]);
  const key = (f, i) => f.id || `q${i + 1}`;
  const [open, setOpen] = useState(() => new Set(openFirst && all[0] ? [key(all[0], 0)] : []));
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState('All');

  useEffect(() => {
    const h = decodeURIComponent(window.location.hash || '');
    if (!h.startsWith('#faq-')) return;
    const id = h.slice(5);
    if (all.some((f, i) => key(f, i) === id)) {
      setOpen(new Set([id])); setTopic('All');
      setTimeout(() => document.getElementById(`faq-${id}`)?.scrollIntoView({ block: 'center' }), 60);
    }
  }, [all]);

  const term = q.trim();
  const shown = all
    .map((f, i) => ({ f, i, k: key(f, i) }))
    .filter(({ f }) => topic === 'All' || f.group === topic)
    .filter(({ f }) => !term || `${f.q} ${f.a}`.toLowerCase().includes(term.toLowerCase()));

  const toggle = (k) => setOpen((s) => { const n = new Set(s); n.has(k) ? n.delete(k) : n.add(k); return n; });
  const allOpen = shown.length > 0 && shown.every(({ k }) => open.has(k));

  let lastGroup = null;
  return (
    <div className="faqx">
      {(search || tools || groups) && (
        <div className="faqx-bar">
          {search && (
            <label className="faqx-search">
              <span className="sr">Search the FAQ</span>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              <input type="search" value={q} placeholder="Search questions, e.g. WhatsApp, walk-in, billing" onChange={(e) => { setQ(e.target.value); if (e.target.value) setOpen(new Set()); }} />
              {q && <button type="button" className="faqx-clear" aria-label="Clear search" onClick={() => setQ('')}>×</button>}
            </label>
          )}
          {groups && (
            <div className="faqx-chips" role="group" aria-label="Filter by topic">
              {['All', ...groups.map((g) => g.title)].map((t) => {
                const count = t === 'All' ? all.length : all.filter((f) => f.group === t).length;
                return <button key={t} type="button" aria-pressed={topic === t} className={topic === t ? 'on' : undefined} onClick={() => setTopic(t)}>{t}<span>{count}</span></button>;
              })}
            </div>
          )}
          {tools && shown.length > 0 && (
            <button type="button" className="faqx-all" onClick={() => setOpen(allOpen ? new Set() : new Set(shown.map(({ k }) => k)))}>
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          )}
        </div>
      )}

      {term && <p className="faqx-count" role="status">{shown.length ? `${shown.length} ${shown.length === 1 ? 'answer' : 'answers'} for “${term}”` : ''}</p>}

      <div className="faq">
        {shown.map(({ f, i, k }) => {
          const head = groups && topic === 'All' && !term && f.group !== lastGroup ? f.group : null;
          lastGroup = f.group;
          return (
            <Fragment key={k}>
              {head && <h2 className="faqx-group">{head}</h2>}
              <Item f={f} n={i + 1} open={open.has(k) || (!!term && shown.length <= 3)} onToggle={() => toggle(k)} q={term} />
            </Fragment>
          );
        })}
      </div>

      {shown.length === 0 && (
        <div className="faqx-empty" role="status">
          <b>No answer for “{term}” yet.</b>
          <p>Ask it on a demo call and we will answer with the product open.</p>
          <SiteLink className="btn btn-primary" href="/book-demo">Book a Demo</SiteLink>
        </div>
      )}
      {more && shown.length > 0 && <p className="faqx-more"><SiteLink href={more.href} className="more">{more.label} →</SiteLink></p>}
    </div>
  );
}

export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
