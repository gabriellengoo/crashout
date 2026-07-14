import { useState } from 'react';

export default function RsvpForm({ eventTitle }) {
  const [status, setStatus] = useState('idle');
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_EVENT_ENDPOINT;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');

    if (!endpoint) {
      setStatus('missing');
      return;
    }

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <label>
        Full name
        <input name="fullName" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Organisation/company/training institution <span>Optional</span>
        <input name="organisation" />
      </label>
      <label>
        Role in theatre <span>Optional</span>
        <input name="role" />
      </label>
      <label>
        Which event are you attending?
        <input name="event" required defaultValue={eventTitle} />
      </label>
      <label>
        Access needs <span>Optional</span>
        <textarea name="accessNeeds" rows="4" />
      </label>
      <label className="consent-row compact">
        <input name="consent" type="checkbox" required />
        <span>I consent to Crash/Out using these details to manage my RSVP and event access needs.</span>
      </label>
      <button className="button dark" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending' : 'Submit RSVP'}
      </button>
      {status === 'success' ? <p className="form-status">Your RSVP has been sent.</p> : null}
      {status === 'error' ? <p className="field-error">The RSVP could not be sent. Please try again.</p> : null}
      {status === 'missing' ? (
        <p className="field-error">RSVP endpoint missing. Add NEXT_PUBLIC_FORMSPREE_EVENT_ENDPOINT to the environment.</p>
      ) : null}
    </form>
  );
}
