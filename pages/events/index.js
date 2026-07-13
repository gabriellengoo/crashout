import Link from 'next/link';
import Layout from '../../components/Layout';
import EventCard from '../../components/EventCard';
import { events } from '../../data/events';

export default function EventsPage() {
  return (
    <Layout>
      <section className="page-hero">
        <p className="eyebrow">Crash/Out events</p>
        <h1>Live survey activations for racially minoritised theatre workers.</h1>
        <p>
          Crash/Out creates space to gather, eat, ask honest questions, contribute to practical resource-building, and
          complete the Making Theatre Anti-Racist survey privately.
        </p>
      </section>
      <section className="content-band white">
        <div className="section-head">
          <h2>Upcoming events</h2>
          <Link className="text-link" href="/missed-the-conference">
            Missed the conference?
          </Link>
        </div>
        <div className="event-grid">
          {events.map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
