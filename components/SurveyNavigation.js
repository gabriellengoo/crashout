export default function SurveyNavigation({ canGoBack, isFirst = false, isLast, isSubmitting, onBack, onNext }) {
  return (
    <nav className="survey-nav" aria-label="Survey controls">
      <button type="button" className="text-button" onClick={onBack} disabled={!canGoBack || isSubmitting}>
        Back
      </button>
      <button type="button" className="button dark" onClick={onNext} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : isLast ? 'Submit survey' : isFirst ? 'Start survey' : 'Continue'}
      </button>
    </nav>
  );
}
