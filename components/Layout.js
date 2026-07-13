import Link from 'next/link';
import { useEffect, useState } from 'react';
import PartnerLogos from './PartnerLogos';

export default function Layout({ children, bare = false, hideHeader = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-locked', menuOpen);
    return () => document.body.classList.remove('mobile-menu-locked');
  }, [menuOpen]);

  useEffect(() => {
    if (bare) return undefined;

    function handleScroll() {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.75);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bare]);

  const handleHomeAnchorClick = (event, hash) => {
    if (typeof window === 'undefined' || window.location.pathname !== '/') {
      setMenuOpen(false);
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', hash);
  };

  if (bare) return <main>{children}</main>;

  return (
    <>
      <header className={hideHeader ? 'site-header hidden-header' : 'site-header'}>
        <Link className="brand" href="/" aria-label="Making Theatre Anti-Racist home">
          <span className="brand-title">
            <span>Making</span>
            <span>Theatre</span>
            <span>Anti-racist</span>
          </span>
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
          <Link href="/#about" onClick={(event) => handleHomeAnchorClick(event, '#about')}>
            About
          </Link>
          <Link className="nav-link-survey" href="/survey">
            Survey
          </Link>
          <Link className="nav-link-crash" href="/#crash-out" onClick={(event) => handleHomeAnchorClick(event, '#crash-out')}>
            Crash/Out
          </Link>
          <Link href="/#resource-pack" onClick={(event) => handleHomeAnchorClick(event, '#resource-pack')}>
            Resource Pack
          </Link>
          <Link href="/#privacy-contact" onClick={(event) => handleHomeAnchorClick(event, '#privacy-contact')}>
            Privacy
          </Link>
          <Link href="/#contact" onClick={(event) => handleHomeAnchorClick(event, '#contact')}>
            Contact
          </Link>
        </nav>
      </header>
      <nav className={menuOpen ? 'mobile-menu open' : 'mobile-menu'} id="mobile-menu" aria-label="Mobile navigation">
        <Link href="/#about" onClick={(event) => handleHomeAnchorClick(event, '#about')}>
          About
        </Link>
        <Link className="nav-link-survey" href="/survey" onClick={() => setMenuOpen(false)}>
          Survey
        </Link>
        <Link className="nav-link-crash" href="/#crash-out" onClick={(event) => handleHomeAnchorClick(event, '#crash-out')}>
          Crash/Out
        </Link>
        <Link href="/#resource-pack" onClick={(event) => handleHomeAnchorClick(event, '#resource-pack')}>
          Resource Pack
        </Link>
        <Link href="/#privacy-contact" onClick={(event) => handleHomeAnchorClick(event, '#privacy-contact')}>
          Privacy
        </Link>
        <Link href="/#contact" onClick={(event) => handleHomeAnchorClick(event, '#contact')}>
          Contact
        </Link>
        <Link href="/survey" onClick={() => setMenuOpen(false)}>
          Complete the Survey
        </Link>
      </nav>
      <main>{children}</main>
      <button
        className={showBackToTop ? 'back-to-top visible' : 'back-to-top'}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        Top
      </button>
      <footer className="site-footer">
        <PartnerLogos compact />
        <p>
          Making Theatre Anti-Racist. A survey and public research campaign about race, power and theatre producing in
          Britain.
        </p>
      </footer>
    </>
  );
}
