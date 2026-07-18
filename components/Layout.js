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
            <span>Anti-Racist</span>
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
          <Link className="nav-link-crash" href="/events">
            Crash/Out
          </Link>
          <Link href="/privacy">
            Privacy
          </Link>
          <Link href="/#contact" onClick={(event) => handleHomeAnchorClick(event, '#contact')}>
            Contact
          </Link>
          <Link className="nav-button" href="/survey">
            Complete the Survey
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
        <Link className="nav-link-crash" href="/events" onClick={() => setMenuOpen(false)}>
          Crash/Out
        </Link>
        <Link href="/privacy" onClick={() => setMenuOpen(false)}>
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
        <div className="footer-legacy">
          <PartnerLogos compact />
        </div>
        <div className="footer-main">
          <h2>Making Theatre Anti-Racist</h2>
          <p>Led by the Royal Central School of Speech and Drama and Rafia Hussain Productions.</p>
          <p>Supported by Arts Council England and the Arts and Humanities Research Council.</p>
          <p>Outreach supported by state of the [art].</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/survey">Complete the Survey</Link>
          <Link href="/#about">About</Link>
          <Link href="/survey">Survey</Link>
          <Link href="/events">Crash/Out</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <p>
            Survey / research:{' '}
            <a href="mailto:munotida.chinyanga@cssd.ac.uk">munotida.chinyanga@cssd.ac.uk</a>
          </p>
          <p>
            Events: <a href="mailto:info@stateassuch.com">info@stateassuch.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}
