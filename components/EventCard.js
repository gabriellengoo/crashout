import Link from 'next/link';

export default function EventCard({ event }) {
  return (
    <article className={`event-card event-card-${event.theme || 'yellow'}`}>
      <p className="eyebrow">{event.displayDate} / {event.time}</p>
      <h2>{event.title}</h2>
      <p>{event.summary}</p>
      <p className="event-meta">
        {event.venue},{' '}
        <a href={event.mapUrl} target="_blank" rel="noreferrer" onClick={(clickEvent) => clickEvent.stopPropagation()}>
          {event.address}
        </a>
      </p>
      <Link className="text-link" href={`/events/${event.slug}`}>
        View event
      </Link>
    </article>
  );
}
