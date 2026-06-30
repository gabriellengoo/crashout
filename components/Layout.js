import Link from 'next/link';
import CrashOutLogo from './CrashOutLogo';
import PartnerLogos from './PartnerLogos';

export default function Layout({ children, bare = false }) {
  if (bare) return <main>{children}</main>;

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Crash Out home">
          <CrashOutLogo compact />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/events">Events</Link>
          <Link href="/survey">Survey</Link>
          <Link href="/missed-the-conference">Missed the conference?</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <PartnerLogos compact />
        <p>Making theatre anti-racist.</p>
      </footer>
    </>
  );
}
