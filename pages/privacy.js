import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <main className="privacy-simple">
        <h1>Privacy and Consent</h1>
        <p>Taking part in the survey is voluntary. You can skip any question.</p>
        <p>
          Survey responses will be used to help the project team understand how theatre producing can be made more
          effectively anti-racist.
        </p>
        <p>
          The survey may ask about racial identity, gender, working life, experiences of racism, experiences of EDI and
          anti-racism, and views on change in the theatre sector.
        </p>
        <p>Any information that could identify you will not be shared publicly.</p>
        <p>
          If you choose to provide contact details for follow-up, those details will only be used for the purpose you
          have agreed to.
        </p>
        <p>
          Crash/Out events are part of the wider engagement around the Making Theatre Anti-Racist project. Attendance is
          voluntary and you do not have to complete the survey in order to attend.
        </p>
        <p>
          For survey, access, privacy or research questions: <br />
          <a className="inline-link" href="mailto:munotida.chinyanga@cssd.ac.uk">
            munotida.chinyanga@cssd.ac.uk
          </a>
        </p>
        <p>
          For Crash/Out event questions: <br />
          <a className="inline-link" href="mailto:info@stateassuch.com">
            info@stateassuch.com
          </a>
        </p>
      </main>
    </Layout>
  );
}
