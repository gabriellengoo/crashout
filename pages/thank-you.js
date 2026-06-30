import Link from 'next/link';
import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <Layout>
      <section className="page-hero">
        <p className="eyebrow">Survey submitted</p>
        <h1>Thank you for contributing to Crash Out.</h1>
        <p>
          Your response helps build a clearer evidence base for anti-racism in theatre. Identifying details will not be
          shared publicly without permission.
        </p>
        <div className="button-row">
          <Link className="button dark" href="/events">
            Return to Crash Out events
          </Link>
          <Link className="button outline-dark" href="/survey">
            Share the survey
          </Link>
          <Link className="button outline-dark" href="/">
            Read more about the project
          </Link>
        </div>
      </section>
    </Layout>
  );
}
