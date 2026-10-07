import { PHOTOS } from '../content/site.js';

/**
 * Photography slot. Set `src` for the id in PHOTOS (src/content/site.js) and the real image renders;
 * until then a clearly labelled placeholder shows where the photo goes and what it should show.
 */
export default function Photo({ id, ratio = '4 / 3', className = '', animate = true }) {
  const p = PHOTOS[id];
  if (!p) return null;
  if (p.src) {
    return (
      <figure className={`photo${animate ? ' photo-live' : ''} ${className}`} style={{ aspectRatio: ratio }}>
        <img src={p.src} alt={p.alt} loading="lazy" decoding="async" width="1200" height="900" />
      </figure>
    );
  }
  return (
    <div className={`photo photo-ph ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder for a photo: ${p.alt}`}>
      <span><b>Photo</b>{p.brief}</span>
    </div>
  );
}
