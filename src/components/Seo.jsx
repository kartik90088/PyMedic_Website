import { useEffect } from 'react';
import { SEO, SITE_CONFIG } from '../content/site.js';

/** Updates the <head> tags that index.html ships with, so every route has its own title, description, canonical, OG and breadcrumb. */
function setTag(selector, create, value) {
  let el = document.head.querySelector(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(selector.startsWith('link') ? 'href' : 'content', value);
}
const meta = (attr, key) => () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m; };

export default function Seo({ path, jsonLd }) {
  const extra = jsonLd ? JSON.stringify(jsonLd) : '';
  useEffect(() => {
    const s = SEO[path];
    if (!s) return;
    const url = `${SITE_CONFIG.domain}${path === '/' ? '/' : path}`;
    document.title = s.title;
    setTag('meta[name="description"]', meta('name', 'description'), s.description);
    setTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l; }, url);
    setTag('meta[property="og:title"]', meta('property', 'og:title'), s.ogTitle || s.title);
    setTag('meta[property="og:description"]', meta('property', 'og:description'), s.ogDescription || s.description);
    setTag('meta[property="og:url"]', meta('property', 'og:url'), url);
    setTag('meta[name="twitter:title"]', meta('name', 'twitter:title'), s.ogTitle || s.title);
    setTag('meta[name="twitter:description"]', meta('name', 'twitter:description'), s.ogDescription || s.description);

    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_CONFIG.domain}/` }];
    if (s.crumb) crumbs.push({ '@type': 'ListItem', position: 2, name: s.crumb, item: url });
    const graph = [{ '@type': 'BreadcrumbList', itemListElement: crumbs }];
    if (extra) graph.push(JSON.parse(extra));
    let script = document.getElementById('ld-page');
    if (!script) { script = document.createElement('script'); script.id = 'ld-page'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }, [path, extra]);
  return null;
}
