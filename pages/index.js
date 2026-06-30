import Link from 'next/link';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

const audiences = [
  'Theatre workers',
  'Actors / performers',
  'Directors / writers / producers',
  'Front of house / backstage / technical staff',
  'Students / graduates',
  'Freelancers',
  'Audience members',
  'People who left theatre because of racism or exclusion'
];

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">State Presenting x Rafier Piare Production x Royal Speech of Art</p>
          <h1>Crash Out</h1>
          <p className="hero-subtitle">Making theatre anti-racist</p>
          <p>
            A research and engagement project collecting Black and Brown people&apos;s experiences in theatre, so the
            sector can be challenged with real data, lived testimony, and clear demands for change.
          </p>
          <div className="button-row">
            <Link className="button light" href="/survey">
              Complete the survey
            </Link>
            <Link className="button outline-light" href="/events">
              RSVP to an event
            </Link>
            <Link className="button outline-light" href="/missed-the-conference">
              I missed the conference
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="split">
          <h2>Experience into evidence</h2>
          <div>
            <p>
              Crash Out hosts events to encourage people to complete the survey and make space for experiences that are
              often excluded from official theatre records.
            </p>
            <p>
              The survey collects information about Black and Brown people&apos;s lives and experiences in theatre. The
              data will support research, reporting, sector accountability, and government-facing advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="content-band white">
        <h2>Who should complete this?</h2>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <p key={audience}>{audience}</p>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div className="section-head">
          <h2>Events</h2>
          <Link className="text-link" href="/events">
            See all events
          </Link>
        </div>
        <div className="event-grid">
          {events.slice(0, 2).map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <p>Your experience is evidence.</p>
        <h2>Complete the Crash Out survey.</h2>
        <Link className="button dark" href="/survey">
          Complete the survey
        </Link>
      </section>
    </Layout>
  );
}
