import Link from 'next/link';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import PartnerLogos from '../components/PartnerLogos';
import { events } from '../data/events';

const audiences = [
  'Artists',
  'Producers',
  'Directors / writers / dramaturgs',
  'Performers / designers / technicians',
  'Administrators / stage managers',
  'Creative producers / facilitators',
  'Researchers / educators',
  'Freelancers, employees, and anyone else working across theatre or performance'
];

const resourcePrompts = [
  'Rates and pay',
  'Contracts',
  'Producing',
  'Development schemes',
  'West End points, royalties or commercial theatre',
  'Raising issues or protecting yourself',
  'Finding support',
  'Navigating power and opportunity'
];

export default function Home() {
  return (
    <Layout>
      <section className="site-logo-hero" id="site" aria-labelledby="site-title">
        <div className="landing-panel survey-panel">
          <div>
            <h1 id="site-title">Making Theatre Anti-racist</h1>
            <p className="hero-subtitle">A survey and public research campaign about race, power and theatre producing in Britain.</p>
            <p>
              Built for racially minoritised theatre workers to say what needs to change, without having to make it
              polite.
            </p>
            <p className="hero-note">10-15 minutes. You can skip any question.</p>
          </div>
          <div className="button-row">
            <Link className="button dark" href="/survey">
              Complete the Survey
            </Link>
            <Link className="button outline-dark" href="#about">
              Learn More
            </Link>
          </div>
        </div>
        <div className="landing-panel event-panel">
          <div>
            <p className="eyebrow">Public activation</p>
            <h2>
              <Link className="title-highlight" href="/events">Crash/Out</Link>
            </h2>
            <p className="hero-subtitle">A live survey activation for racially minoritised theatre workers.</p>
            <i aria-hidden="true" />
            <p>The conversation is collective. The survey is private.</p>
          </div>
          <div className="button-row">
            <Link className="button dark" href="/events">
              Join a Crash/Out event
            </Link>
          </div>
        </div>
      </section>

      <section className="resource-peek" aria-label="Resource pack prompt">
        <div className="resource-peek-icon" aria-hidden="true">
          <span />
        </div>
        <div>
          <h2>Resource Pack</h2>
          <p>Help build the resource pack we all wish existed earlier.</p>
        </div>
        <Link className="button outline-dark" href="#resource-pack">
          Contribute
        </Link>
        <div className="resource-peek-dots" aria-hidden="true" />
      </section>

      <section className="intro-band" id="about">
        <div className="intro-copy">
          <p className="eyebrow">About the project</p>
          <h2>Theatre producing should work better.</h2>
          <p>
            The survey gathers what people know from inside the work: what causes harm, what changes things, and what
            support should already exist.
          </p>
        </div>
        <PartnerLogos />
      </section>

      <section className="content-band white">
        <div className="split soft-split">
          <h2>About the Project</h2>
          <div className="step-list">
            <div>
              <span>Led by</span>
              <p>The Royal Central School of Speech and Drama and Rafia Hussain Productions.</p>
            </div>
            <div>
              <span>Supported by</span>
              <p>Arts Council England and the Arts and Humanities Research Council.</p>
            </div>
            <div>
              <span>Outreach</span>
              <p>Outreach for the survey is also being supported by state of the [art].</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band" id="learn-more">
        <div className="split">
          <h2>
            What the <Link className="title-highlight" href="/survey">survey</Link> is for
          </h2>
          <div>
            <p>
              The goal is simple: turn people&apos;s lived experience into practical recommendations for anti-racist
              producing.
            </p>
            <p>
              It was designed by Munotida Chinyanga and Tom Six, with input from the project advisory group. You can
              skip anything you do not want to answer.
            </p>
          </div>
        </div>
      </section>

      <section className="content-band white" id="who">
        <div className="section-head">
          <h2>Who Can Take Part?</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <p key={audience}>{audience}</p>
          ))}
        </div>
        <p className="section-note audience-note">
          If you work in British theatre and are racially minoritised in this country, this survey is for you.
        </p>
      </section>

      <section className="content-band" id="survey">
        <div className="split">
          <h2>
            Complete the <Link className="title-highlight" href="/survey">Survey</Link>
          </h2>
          <div>
            <p>
              The survey asks about you, your working life, racism, EDI and anti-racism.
            </p>
            <p>
              No question is compulsory. Take your time. Share what feels manageable.
            </p>
            <div className="button-row">
              <Link className="button dark" href="/survey">
                Complete the Survey
              </Link>
            </div>
          </div>
        </div>
        <div className="survey-details" aria-label="Survey details">
          <p><span>Estimated time</span>10-15 minutes</p>
          <p><span>Questions</span>Optional</p>
          <p><span>Audience</span>Racially minoritised theatre workers in Britain</p>
          <p><span>Privacy</span>Identifiable information will not be shared publicly</p>
        </div>
      </section>

      <section className="content-band white" id="privacy-contact">
        <div className="split soft-split">
          <h2>Privacy and Contact</h2>
          <div className="faq-list">
            <details>
              <summary>Do I have to answer every question?</summary>
              <p>No. Taking part is voluntary and you can skip any question.</p>
            </details>
            <details>
              <summary>How will my response be used?</summary>
              <p>
                Survey responses will help the project team understand how theatre producing can be made more
                effectively anti-racist.
              </p>
            </details>
            <details>
              <summary>Will identifying details be shared?</summary>
              <p>
                Any information that could identify you will not be shared publicly. Contact details for follow-up will
                only be used for the purpose you have agreed to.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="split soft-split">
          <h2>A Note on Identity Questions</h2>
          <div>
            <p>
              We will ask you to identify yourself in racialised and gendered terms. We are aware that this information
              is often used by organisations in ways that objectify or instrumentalise people.
            </p>
            <p>
              In this project, this information will only be used for the purposes of interpreting the data that we
              collect. We therefore ask that you represent yourself as accurately as possible within the terms available.
            </p>
          </div>
        </div>
      </section>

      <section className="content-band white" id="crash-out">
        <div className="section-head">
          <h2>
            <Link className="title-highlight" href="/events">Crash/Out</Link>
          </h2>
          <Link className="button outline-dark see-events-button" href="/events">
            See events
          </Link>
        </div>
        <div className="pullout-grid">
          <p>A live survey activation for racially minoritised theatre workers.</p>
          <p>The conversation is collective. The survey is private.</p>
        </div>
        <div className="split">
          <h3>
            <Link className="title-highlight" href="/events">Crash/Out</Link> is not about giving up. It is about
            refusing to keep absorbing pressure politely.
          </h3>
          <div>
            <p>
              60 minutes. Anonymous questions. Real answers.
            </p>
            <p>
              Come together, eat, ask what needs asking, and complete the survey privately if you want to.
            </p>
          </div>
        </div>
        <div className="event-grid">
          {events.slice(0, 2).map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </section>

      <section className="content-band" id="resource-pack">
        <div className="split soft-split">
          <h2>Resource Pack</h2>
          <div>
            <p className="large-copy">Help build the resource pack we all wish existed earlier.</p>
            <p>
              Alongside the survey, we are gathering questions and needs for a future resource pack for racially
              minoritised theatre workers.
            </p>
            <p>
              What do you wish someone had explained to you earlier about the theatre industry?
            </p>
          </div>
        </div>
        <div className="audience-grid resource-grid">
          {resourcePrompts.map((prompt) => (
            <p key={prompt}>{prompt}</p>
          ))}
        </div>
        <p className="section-note resource-note">Resource pack questions are separate from the main survey.</p>
      </section>

      <section className="content-band white" id="contact">
        <div className="split soft-split">
          <h2>Project Partners</h2>
          <div>
            <p>
              This project is being led by the Royal Central School of Speech and Drama and Rafia Hussain Productions.
              It is supported by Arts Council England and the Arts and Humanities Research Council.
            </p>
            <p>Outreach and activation support is being provided by state of the [art].</p>
            <p>
              For questions about the survey, access, events or the resource pack, please contact Munotida Chinyanga at{' '}
              <a className="inline-link" href="mailto:munotida.chinyanga@rssd.ac.uk">
                munotida.chinyanga@rssd.ac.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <p>Tired of being surveyed? Same.</p>
        <h2>
          Complete the Making Theatre Anti-Racist <Link className="title-highlight" href="/survey">survey</Link>.
        </h2>
        <Link className="button dark" href="/survey">
          Complete the Survey
        </Link>
      </section>
    </Layout>
  );
}
