import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RsvpForm from '../../components/RsvpForm';
import { events, getEventBySlug } from '../../data/events';

export default function EventPage({ event }) {
  const router = useRouter();
  if (router.isFallback || !event) return null;

  return (
    <Layout>
      <article>
        <section className="page-hero">
          <p className="eyebrow">{event.displayDate} / {event.time}</p>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <div className="button-row">
            <a className="button dark" href="#rsvp">
              RSVP
            </a>
            <Link className="button outline-dark" href={`/survey?source=${event.slug}`}>
              Complete the survey
            </Link>
          </div>
        </section>

        <section className="content-band event-section event-programme">
          <div className="split">
            <h2>Programme</h2>
            <ul className="ruled-list">
              {event.programme.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-band event-section event-venue">
          <div className="split">
            <h2>Venue</h2>
            <div>
              <p className="eyebrow">{event.displayDate} / {event.time}</p>
              <p className="large-copy">{event.venue}</p>
              <p>
                <a className="text-link venue-link" href={event.mapUrl} target="_blank" rel="noreferrer">
                  {event.address}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="content-band event-section event-schedule">
          <div className="split">
            <h2>Schedule</h2>
            <ul className="schedule-list">
              {event.schedule.map((slot) => (
                <li key={`${slot.time}-${slot.item}`}>
                  <span>{slot.time}</span>
                  <p>{slot.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-band event-section event-rsvp" id="rsvp">
          <div className="split">
            <h2>RSVP</h2>
            <RsvpForm eventTitle={event.title} />
          </div>
        </section>

        <section className="cta-band">
          <p>Want to contribute?</p>
          <h2>You can still take part in the survey.</h2>
          <div className="button-row center">
            <Link className="button dark" href={`/survey?source=${event.slug}`}>
              Complete the survey
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: events.map((event) => ({ params: { slug: event.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      event: getEventBySlug(params.slug)
    }
  };
}
