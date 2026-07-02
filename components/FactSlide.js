export default function FactSlide({ screen }) {
  return (
    <section
      className={['question-screen', 'fact-slide', screen.variant === 'statement' ? 'fact-slide-statement' : '']
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={screen.id}
    >
      <h1 id={screen.id}>{screen.label}</h1>
      <p className="question-description large">{screen.description}</p>
    </section>
  );
}
