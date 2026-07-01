import Link from 'next/link';
import { useEffect, useState } from 'react';
import CrashOutLogo from './CrashOutLogo';
import PartnerLogos from './PartnerLogos';

export default function Layout({ children, bare = false, hideHeader = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-locked', menuOpen);
    return () => document.body.classList.remove('mobile-menu-locked');
  }, [menuOpen]);

  if (bare) return <main>{children}</main>;

  return (
    <>
      <header className={hideHeader ? 'site-header hidden-header' : 'site-header'}>
        <Link className="brand" href="/" aria-label="Crash Out home">
          <CrashOutLogo compact />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Menu
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/events">Events</Link>
          <Link href="/survey">Survey</Link>
          <Link href="/missed-the-conference">Missed the conference?</Link>
        </nav>
      </header>
      <nav className={menuOpen ? 'mobile-menu open' : 'mobile-menu'} id="mobile-menu" aria-label="Mobile navigation">
        <Link href="/events" onClick={() => setMenuOpen(false)}>
          Events
        </Link>
        <Link href="/survey" onClick={() => setMenuOpen(false)}>
          Survey
        </Link>
        <Link href="/missed-the-conference" onClick={() => setMenuOpen(false)}>
          Missed the conference?
        </Link>
      </nav>
      <main>{children}</main>
      <footer className="site-footer">
        <PartnerLogos compact />
        <p>Making theatre anti-racist.</p>
      </footer>
    </>
  );
}
