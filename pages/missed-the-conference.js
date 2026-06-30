import Link from 'next/link';
import Layout from '../components/Layout';

export default function MissedConference() {
  return (
    <Layout>
      <section className="page-hero">
        <p className="eyebrow">Crash Out</p>
        <h1>Missed the conference?</h1>
        <p>
          You can still take part. The Crash Out survey is open to Black and Brown people with experiences in theatre,
          whether or not you attended an event.
        </p>
        <div className="button-row">
          <Link className="button dark" href="/survey?source=missed-the-conference">
            Complete the survey
          </Link>
          <Link className="button outline-dark" href="/events">
            See upcoming events
          </Link>
        </div>
      </section>
    </Layout>
  );
}
