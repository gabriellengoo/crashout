export default function FactSlide({ screen }) {
  return (
    <section className="question-screen" aria-labelledby={screen.id}>
      <p className="survey-kicker">{screen.section}</p>
      <h1 id={screen.id}>{screen.label}</h1>
      <p className="question-description large">{screen.description}</p>
    </section>
  );
}
