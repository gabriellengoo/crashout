import Link from 'next/link';

export default function Layout({ children, bare = false }) {
  if (bare) return <main>{children}</main>;

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Crash Out home">
          <span>Crash Out</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/events">Events</Link>
          <Link href="/survey">Survey</Link>
          <Link href="/missed-the-conference">Missed the conference?</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>State Presenting x Rafier Piare Production x Royal Speech of Art</p>
        <p>Making theatre anti-racist.</p>
      </footer>
    </>
  );
}
