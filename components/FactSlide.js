import Link from 'next/link';

export default function FactSlide({ screen }) {
  return (
    <section
      className={[
        'question-screen',
        'fact-slide',
        screen.variant === 'survey-intro' ? 'fact-slide-survey-intro' : '',
        screen.variant === 'statement' ? 'fact-slide-statement' : '',
        screen.variant === 'interlude' ? 'fact-slide-interlude' : ''
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={screen.id}
    >
      <h1 id={screen.id}>{screen.label}</h1>
      {screen.subtitle ? <p className="fact-subtitle">{screen.subtitle}</p> : null}
      <p className="question-description large">{screen.description}</p>
      {screen.details ? (
        <div className="survey-details survey-details-compact" aria-label="Survey details">
          {screen.details.map(([label, text]) => (
            <p key={label}>
              <span>{label}</span>
              {text}
            </p>
          ))}
        </div>
      ) : null}
      {screen.privacyHref ? (
        <Link className="text-link fact-privacy-link" href={screen.privacyHref}>
          Read privacy information
        </Link>
      ) : null}
      {screen.source ? <p className="fact-source">Source: {screen.source}</p> : null}
    </section>
  );
}
