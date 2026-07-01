export default function SurveyQuestion({ screen, value, onChange, error, onEnter }) {
  const requiredText = screen.required ? 'Required' : 'Optional';
  const fieldId = `field-${screen.id}`;

  function toggleOption(option) {
    const current = Array.isArray(value) ? value : [];
    if (current.includes(option)) {
      onChange(current.filter((item) => item !== option));
      return;
    }
    onChange([...current, option]);
  }

  return (
    <section className="question-screen" aria-labelledby={`${screen.id}-label`}>
      <div className="question-heading-row">
        <h1 id={`${screen.id}-label`}>{screen.label}</h1>
        <span>{requiredText}</span>
      </div>
      {screen.description ? <p className="question-description">{screen.description}</p> : null}

      <div className="field-zone">
        {screen.type === 'text' || screen.type === 'email' ? (
          <input
            id={fieldId}
            type={screen.type}
            value={value || ''}
            placeholder={screen.placeholder || ''}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') onEnter();
            }}
            aria-describedby={error ? `${screen.id}-error` : undefined}
          />
        ) : null}

        {screen.type === 'textarea' ? (
          <textarea
            id={fieldId}
            value={value || ''}
            placeholder={screen.placeholder || ''}
            onChange={(event) => onChange(event.target.value)}
            rows={5}
            aria-describedby={error ? `${screen.id}-error` : undefined}
          />
        ) : null}

        {screen.type === 'select' ? (
          <select
            id={fieldId}
            value={value || ''}
            onChange={(event) => onChange(event.target.value)}
            aria-describedby={error ? `${screen.id}-error` : undefined}
          >
            <option value="">Select an answer</option>
            {screen.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : null}

        {['radio', 'segmented'].includes(screen.type) ? (
          <div className="choice-list" role="radiogroup" aria-describedby={error ? `${screen.id}-error` : undefined}>
            {screen.options.map((option) => (
              <button
                type="button"
                key={option}
                className={value === option ? 'choice active' : 'choice'}
                onClick={() => onChange(option)}
                aria-pressed={value === option}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        {screen.type === 'multi-select' ? (
          <div className="choice-list" aria-describedby={error ? `${screen.id}-error` : undefined}>
            {screen.options.map((option) => (
              <button
                type="button"
                key={option}
                className={Array.isArray(value) && value.includes(option) ? 'choice active' : 'choice'}
                onClick={() => toggleOption(option)}
                aria-pressed={Array.isArray(value) && value.includes(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        {screen.type === 'consent' ? (
          <label className="consent-row" htmlFor={fieldId}>
            <input
              id={fieldId}
              type="checkbox"
              checked={Boolean(value)}
              onChange={(event) => onChange(event.target.checked)}
              aria-describedby={error ? `${screen.id}-error` : undefined}
            />
            <span>{screen.description}</span>
          </label>
        ) : null}

        {error ? (
          <p className="field-error" id={`${screen.id}-error`}>
            {error}
          </p>
        ) : null}
      </div>
    </section>
  );
}
