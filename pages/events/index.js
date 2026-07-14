import Layout from '../../components/Layout';

export default function EventsPage() {
  return (
    <Layout>
      <section className="page-hero">
        <p className="eyebrow">Live Events</p>
        <h1>Crash/Out</h1>
        <p>A live event series for racially minoritised theatre workers.</p>
      </section>

      <section className="content-band white">
        <div className="split">
          <h2>Crash/Out</h2>
          <div>
            <p>Crash/Out is the live events strand of the Making Theatre Anti-Racist project.</p>
            <p>
              Part symposium, part conversation, part resource-building room, Crash/Out brings racially minoritised
              theatre workers together to think about what making theatre anti-racist might require in practice.
            </p>
            <p>
              Each event will invite speakers to respond to a topic connected to race, power, theatre and producing.
              There will also be time to eat, talk, complete the survey privately, and contribute to thinking around
              future resources for the sector.
            </p>
            <p>Crash/Out is not about giving up. It is about refusing to keep absorbing pressure politely.</p>
          </div>
        </div>
        <div className="pullout-grid">
          <p>The conversation is collective.</p>
          <p>The survey is private.</p>
        </div>
      </section>

      <section className="content-band" id="events-coming-soon">
        <div className="split soft-split">
          <h2>Events Coming Soon</h2>
          <div>
            <p>Crash/Out events are currently being planned in London and Birmingham.</p>
            <p>Dates, venues, speakers and booking links will be announced soon.</p>
            <div className="button-row">
              <button className="button muted-button" type="button" disabled>
                Event details coming soon
              </button>
              <a className="button outline-dark" href="https://buytickets.at/stateoftheart" target="_blank" rel="noreferrer">
                Book a Crash/Out Event
              </a>
            </div>
          </div>
        </div>
        <div className="event-grid coming-soon-grid">
          <article className="event-card event-card-cyan">
            <p className="eyebrow">Dates coming soon</p>
            <h2>London Crash/Out</h2>
            <p>Dates, venues, speakers and booking links will be announced soon.</p>
            <p className="event-meta">Event details coming soon</p>
          </article>
          <article className="event-card event-card-pink">
            <p className="eyebrow">Dates coming soon</p>
            <h2>Birmingham Crash/Out</h2>
            <p>Dates, venues, speakers and booking links will be announced soon.</p>
            <p className="event-meta">Event details coming soon</p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
