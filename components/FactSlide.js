export default function FactSlide({ screen }) {
  return (
    <section
      className={[
        'question-screen',
        'fact-slide',
        screen.variant === 'statement' ? 'fact-slide-statement' : '',
        screen.variant === 'interlude' ? 'fact-slide-interlude' : ''
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={screen.id}
    >
      <h1 id={screen.id}>{screen.label}</h1>
      <p className="question-description large">{screen.description}</p>
      {screen.source ? <p className="fact-source">Source: {screen.source}</p> : null}
    </section>
  );
}
