import Link from 'next/link';

export default function SurveyNavigation({ canGoBack, isFirst = false, isLast, isSubmitting, onBack, onNext }) {
  return (
    <nav className="survey-nav" aria-label="Survey controls">
      {isFirst ? (
        <Link className="text-button" href="/">
          Home
        </Link>
      ) : (
        <button type="button" className="text-button" onClick={onBack} disabled={!canGoBack || isSubmitting}>
          Back
        </button>
      )}
      <button type="button" className="button dark" onClick={onNext} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : isLast ? 'Submit survey' : isFirst ? 'Start survey' : 'Continue'}
      </button>
    </nav>
  );
}
