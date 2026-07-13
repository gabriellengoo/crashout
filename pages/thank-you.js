import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add('landing-locked');
    const timer = window.setTimeout(() => router.push('/events'), 6500);

    return () => {
      document.body.classList.remove('landing-locked');
      window.clearTimeout(timer);
    };
  }, [router]);

  return (
    <Layout bare>
      <section className="thank-you-overlay">
        <p className="survey-brand-lockup">Making Theatre Anti-Racist</p>
        <p className="eyebrow">Survey submitted</p>
        <h1>Thank you for contributing to Making Theatre Anti-Racist.</h1>
        <p>Your response helps build clearer recommendations for anti-racist theatre producing. Redirecting to Crash/Out events.</p>
        <div className="button-row center">
          <Link className="button dark" href="/events">
            See events
          </Link>
          <Link className="button outline-dark" href="/">
            Return home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
