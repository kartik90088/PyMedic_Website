import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV } from '../content/site.js';
import { Logo } from './Brand.jsx';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); burgerRef.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-in">
          <Logo />
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV.map((l) => <li key={l.href}><NavLink to={l.href} end={l.href === '/'}>{l.label}</NavLink></li>)}
            </ul>
          </nav>
          <div className="nav-cta"><Link className="btn btn-primary" to="/book-demo">Book a Demo</Link></div>
          <button ref={burgerRef} className="burger" aria-label="Open menu" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(true)}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      <div className="drawer" id="drawer" hidden={!open} onClick={(e) => { if (e.target === e.currentTarget || e.target.closest('a')) setOpen(false); }}>
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer-top">
            <Logo size="sm" />
            <button className="drawer-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
          </div>
          {NAV.map((l, i) => <NavLink key={l.href} to={l.href} end={l.href === '/'} ref={i === 0 ? firstLinkRef : undefined}>{l.label}</NavLink>)}
          <Link className="btn btn-primary" to="/book-demo">Book a Demo</Link>
        </div>
      </div>
    </>
  );
}
