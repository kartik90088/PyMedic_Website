import markUrl from '../assets/brand/pymedic-mark.webp';
import wordUrl from '../assets/brand/pymedic-wordmark.webp';
import { useLocation } from 'react-router-dom';
import SiteLink from './SiteLink.jsx';

export { markUrl };

/** Full logo: mark + wordmark image. Use on light backgrounds. */
export function Logo({ size = 'md', href = '/' }) {
  const mk = size === 'sm' ? 36 : 42;
  const wh = size === 'sm' ? 22 : 26;
  const { pathname } = useLocation();
  // Always lands on the home hero: from another page via the router, and on the home page by scrolling back to the top.
  const onClick = () => { if (pathname === href) window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <SiteLink className="brand" href={href} aria-label="PyMedic home" onClick={onClick}>
      <img className="mk" src={markUrl} alt="" width={mk} height={Math.round(mk * 0.95)} style={{ width: mk }} />
      <img className="wm" src={wordUrl} alt="PyMedic" height={wh} width={Math.round(wh * 3.9)} style={{ height: wh }} />
    </SiteLink>
  );
}

/** Small logo used inside product screens. */
export function AppBrand({ text = true, light = false }) {
  return (
    <span className="app-brand" style={light ? { color: '#fff' } : undefined}>
      <img src={markUrl} alt="" />
      {text && (light ? <span>PyMedic</span> : <span>Py<b>Medic</b></span>)}
    </span>
  );
}

/** Logo mark on a white tile, for dark backgrounds. */
export function MarkTile({ className = '' }) {
  return (
    <span className={`mk-tile ${className}`}>
      <img src={markUrl} alt="" />
    </span>
  );
}
