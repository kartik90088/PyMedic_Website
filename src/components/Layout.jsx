import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/** Shared shell for every page: navbar, page content, footer. Pages add their own closing CTA. */
export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <>
      <a className="sr" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
