import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import CrashOutLogo from '../components/CrashOutLogo';
import PartnerLogos from '../components/PartnerLogos';
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
  const router = useRouter();
  const [siteEntered, setSiteEntered] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#site') {
      window.setTimeout(() => setSiteEntered(true), 0);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('landing-locked', !siteEntered);
    return () => document.body.classList.remove('landing-locked');
  }, [siteEntered]);

  function enterSite() {
    setSiteEntered(true);
    window.history.replaceState(null, '', '#site');
    window.setTimeout(() => {
      document.getElementById('site')?.scrollIntoView({ block: 'start' });
    }, 0);
  }

  return (
    <Layout hideHeader={!siteEntered}>
      {!siteEntered ? (
      <section className="choice-landing" aria-labelledby="landing-title">
        <button className="choice-panel survey-choice" type="button" onClick={() => router.push('/survey')}>
          <div>
            <p className="eyebrow">Start here</p>
            <h1 id="landing-title">Take the Crash Out survey</h1>
            <p>
              Share lived experience, barriers, harm, and what needs to change. One question at a time, with optional
              sensitive questions.
            </p>
          </div>
          <span className="choice-link primary">
            Complete the survey
          </span>
        </button>

        <button className="choice-panel site-choice" type="button" onClick={enterSite}>
          <div>
            <CrashOutLogo />
            <p className="hero-subtitle">Making theatre anti-racist</p>
            <p>
              A research and engagement project collecting Black and Brown people&apos;s experiences in theatre, so the
              sector can be challenged with real data and clear demands.
            </p>
          </div>
          <span className="choice-link secondary">
            Go to the site
          </span>
        </button>
      </section>
      ) : null}

      <section className="site-logo-hero" id="site" aria-labelledby="site-title">
        <div>
          <CrashOutLogo />
          <h1 id="site-title">Making theatre anti-racist</h1>
          <p>
            State Presenting x Rafier Piare Production x Royal Speech of Art
          </p>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-copy">
          <p className="eyebrow">Crash Out</p>
          <h2>Your experience is evidence.</h2>
          <p>
            Crash Out hosts events and survey spaces to gather structured research and lived testimony about racism in
            theatre.
          </p>
        </div>
        <PartnerLogos />
      </section>

      <section className="quick-actions" aria-label="Main actions">
        <Link className="action-tile accent-magenta" href="/survey">
          <span>01</span>
          <strong>Complete the survey</strong>
          <p>Private, structured, and built to move one question at a time.</p>
        </Link>
        <Link className="action-tile accent-cyan" href="/events">
          <span>02</span>
          <strong>Find an event</strong>
          <p>RSVP to a conference, drop-in survey room, or project gathering.</p>
        </Link>
        <Link className="action-tile accent-red" href="/missed-the-conference">
          <span>03</span>
          <strong>Missed the conference?</strong>
          <p>You can still take part whether or not you attended.</p>
        </Link>
      </section>

      <section className="content-band white">
        <div className="split soft-split">
          <h2>What Crash Out does</h2>
          <div className="step-list">
            <div>
              <span>Listen</span>
              <p>Creates accessible routes for Black and Brown people to share theatre experiences safely.</p>
            </div>
            <div>
              <span>Record</span>
              <p>Turns testimony into structured survey data that can be analysed and reported.</p>
            </div>
            <div>
              <span>Challenge</span>
              <p>Uses evidence for research, sector accountability, and government-facing advocacy.</p>
            </div>
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
        <div className="section-head">
          <h2>Who should complete this?</h2>
          <p className="section-note">Choose the survey if any of these describe you.</p>
        </div>
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

      <section className="content-band white">
        <div className="split soft-split">
          <h2>Questions people ask</h2>
          <div className="faq-list">
            <details>
              <summary>Do I have to answer every question?</summary>
              <p>No. Sensitive demographic and testimony questions can be skipped unless they are marked required.</p>
            </details>
            <details>
              <summary>Will my name be published?</summary>
              <p>Identifying details will not be shared publicly without permission.</p>
            </details>
            <details>
              <summary>Can I complete it if I missed an event?</summary>
              <p>Yes. The survey is open whether or not you attended a Crash Out event.</p>
            </details>
          </div>
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
