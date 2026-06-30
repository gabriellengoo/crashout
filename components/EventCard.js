import Link from 'next/link';

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <p className="eyebrow">{event.displayDate} / {event.time}</p>
      <h2>{event.title}</h2>
      <p>{event.summary}</p>
      <p className="event-meta">{event.venue}, {event.address}</p>
      <Link className="text-link" href={`/events/${event.slug}`}>
        View event
      </Link>
    </article>
  );
}
