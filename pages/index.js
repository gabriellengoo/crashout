import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="site-logo-hero" id="site" aria-labelledby="site-title">
        <div className="landing-panel survey-panel">
          <div>
            <p className="eyebrow hero-section-label">Survey</p>
            <h1 id="site-title">Making Theatre Anti-Racist</h1>
            <p className="hero-subtitle">
              A survey and public research campaign about race, power and theatre producing in Britain.
            </p>
            <p>
              This project is gathering information and feedback from racially minoritised theatre workers about how
              theatre producing can work better, more fairly and more effectively.
            </p>
            <p>
              We want to understand people&apos;s working lives, experiences of racism, experiences of EDI and
              anti-racism, and what meaningful change could look like across the sector.
            </p>
            <p className="hero-note">10–15 minutes. You can skip any question.</p>
          </div>
          <div className="button-row">
            <Link className="button dark" href="/survey">
              Complete the Survey
            </Link>
            <Link className="button outline-dark" href="#learn-more">
              Learn More
            </Link>
          </div>
        </div>
        <div className="landing-panel event-panel">
          <div>
            <p className="eyebrow hero-section-label">Live Events</p>
            <h2>
              <Link className="title-static-link" href="/events">Crash/Out</Link>
            </h2>
            <p className="hero-subtitle">A live event series for racially minoritised theatre workers.</p>
            <i aria-hidden="true" />
          </div>
          <div className="button-row">
            <Link className="button dark" href="/events">
              Event details coming soon
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-band" id="about">
        <div className="intro-copy">
          <p className="eyebrow">About the project</p>
          <h2>Theatre producing should work better.</h2>
          <p>
            Making Theatre Anti-Racist is a research and engagement project asking how theatre producing can work better
            for racially minoritised artists and workers in Britain.
          </p>
        </div>
      </section>

      <section className="content-band white" id="learn-more">
        <div className="split soft-split">
          <h2>About the Project</h2>
          <div>
            <p>
              The project is led by the Royal Central School of Speech and Drama and Rafia Hussain Productions, with
              support from Arts Council England and the Arts and Humanities Research Council. Outreach for the survey is
              also being supported by state of the [art].
            </p>
            <p>
              The survey has been designed by Munotida Chinyanga and Tom Six, with advisory input from the
              project&apos;s advisory group.
            </p>
            <p>
              Theatre often talks about representation, access and inclusion. This project is also interested in
              producing structures: how work is made, who holds power, who is supported, who is protected, who gets paid,
              and who is able to keep working.
            </p>
            <p>
              The aim is to gather evidence that can support practical recommendations for making theatre producing more
              meaningfully anti-racist.
            </p>
            <div className="button-row">
              <Link className="button dark" href="/survey">
                Complete the Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band white" id="who">
        <div className="section-head">
          <h2>Who Can Take Part?</h2>
        </div>
        <div className="section-copy">
          <p>
            We want to hear from anyone who works in British theatre, in any role, and is racially minoritised in this
            country.
          </p>
          <p>
            You might be an artist, producer, director, writer, dramaturg, performer, designer, technician,
            administrator, facilitator, stage manager, creative producer, researcher, educator, community practitioner,
            freelancer, employee, or someone working across theatre and performance in another way.
          </p>
          <p>You do not need a specific job title, career stage or level of experience to take part.</p>
        </div>
        <p className="section-note audience-note">
          If you work in British theatre and are racially minoritised in this country, this survey is for you.
        </p>
        <div className="button-row center">
          <Link className="button dark" href="/survey">
            Complete the Survey
          </Link>
        </div>
      </section>

      <section className="content-band" id="survey">
        <div className="split">
          <h2>Complete the Survey</h2>
          <div>
            <p>
              The survey asks about you, your working life, your experiences of racism, and your experiences of EDI,
              equality, diversity and inclusion, and anti-racism.
            </p>
            <p>There are no compulsory questions. You can skip any question.</p>
            <p>
              Some questions ask about racism, racialised harm and difficult workplace experiences. Please take your
              time, and only share what feels manageable.
            </p>
            <p>Any information that you give us that could be used to identify you will not be shared publicly.</p>
            <div className="button-row">
              <Link className="button dark" href="/survey">
                Start Survey
              </Link>
            </div>
          </div>
        </div>
        <div className="survey-details" aria-label="Survey details">
          <p><span>Estimated time</span>10–15 minutes</p>
          <p><span>Questions</span>Optional</p>
          <p><span>Audience</span>Racially minoritised theatre workers in Britain</p>
          <p><span>Privacy</span>Identifiable information will not be shared publicly</p>
        </div>
      </section>

      <section className="content-band white" id="crash-out">
        <div className="split">
          <div>
            <p className="eyebrow">Live Events</p>
            <h2>Crash/Out</h2>
          </div>
          <div>
            <p className="large-copy">A live event series for racially minoritised theatre workers.</p>
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
            <p>Events are currently being planned in London and Birmingham.</p>
          </div>
        </div>
        <div className="button-row center">
          <button className="button muted-button" type="button" disabled>
            Event details coming soon
          </button>
          <a className="button outline-dark" href="https://buytickets.at/stateoftheart" target="_blank" rel="noreferrer">
            Book a Crash/Out Event
          </a>
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

      <section className="content-band white" id="privacy">
        <div className="split soft-split">
          <h2>Privacy and Consent</h2>
          <div>
            <p>Taking part in the survey is voluntary. You can skip any question.</p>
            <p>
              Any information that could identify you will not be shared publicly. If you choose to provide contact
              details for follow-up, those details will only be used for the purpose you have agreed to.
            </p>
            <div className="button-row">
              <Link className="button outline-dark" href="/privacy">
                Read Privacy Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band white" id="contact">
        <div className="split soft-split">
          <h2>Contact</h2>
          <div>
            <p>For questions about the survey, access, privacy or the research project, contact:</p>
            <p>
              Munotida Chinyanga<br />
              <a className="inline-link" href="mailto:munotida.chinyanga@cssd.ac.uk">
                munotida.chinyanga@cssd.ac.uk
              </a>
            </p>
            <p>
              For Crash/Out event questions, contact:{' '}
              <a className="inline-link" href="mailto:info@stateassuch.com">
                info@stateassuch.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <p>Tired of being surveyed? Same. Well hopefully this will be the last time.</p>
        <h2>Complete the Making Theatre Anti-Racist survey.</h2>
        <Link className="button dark" href="/survey">
          Complete the Survey
        </Link>
      </section>
    </Layout>
  );
}
