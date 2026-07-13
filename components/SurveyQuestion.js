export default function SurveyQuestion({ screen, value, onChange, extraValue, onExtraChange, error, onEnter }) {
  const requiredText = screen.required ? 'Required' : 'Optional';
  const fieldId = `field-${screen.id}`;
  const isCompact = Array.isArray(screen.options) && screen.options.length >= 10;
  const otherOption = Array.isArray(screen.options)
    ? screen.options.find((option) => typeof option === 'string' && option.includes('Other, please specify'))
    : '';
  const showOtherField =
    screen.otherField &&
    otherOption &&
    ((Array.isArray(value) && value.includes(otherOption)) || value === otherOption);
  const className = ['question-screen', isCompact ? 'compact-question' : '', screen.type === 'matrix' ? 'matrix-question' : '']
    .filter(Boolean)
    .join(' ');

  function toggleOption(option) {
    const current = Array.isArray(value) ? value : [];
    if (current.includes(option)) {
      onChange(current.filter((item) => item !== option));
      return;
    }

    const exclusiveOptions = screen.exclusiveOptions || [];
    if (exclusiveOptions.includes(option)) {
      onChange([option]);
      return;
    }

    onChange([...current.filter((item) => !exclusiveOptions.includes(item)), option]);
  }

  function setMatrixValue(row, answer) {
    const current = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    onChange({ ...current, [row]: answer });
  }

  return (
    <section className={className} aria-labelledby={`${screen.id}-label`}>
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
            onInput={(event) => onChange(event.currentTarget.value)}
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
            onInput={(event) => onChange(event.currentTarget.value)}
            onChange={(event) => onChange(event.target.value)}
            rows={5}
            aria-describedby={error ? `${screen.id}-error` : undefined}
          />
        ) : null}

        {screen.type === 'select' ? (
          <select
            id={fieldId}
            value={value || ''}
            onInput={(event) => onChange(event.currentTarget.value)}
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

        {showOtherField ? (
          <label className="other-field" htmlFor={`${fieldId}-other`}>
            Other, please specify
            <textarea
              id={`${fieldId}-other`}
              value={extraValue || ''}
              onInput={(event) => onExtraChange(event.currentTarget.value)}
              onChange={(event) => onExtraChange(event.target.value)}
              rows={3}
            />
          </label>
        ) : null}

        {screen.type === 'matrix' ? (
          <div className="matrix-list" aria-describedby={error ? `${screen.id}-error` : undefined}>
            <div className="matrix-key" aria-hidden="true">
              {screen.options.map((option) => (
                <span key={option.value || option}>
                  <strong>{option.short || option}</strong>
                  {option.label || option}
                </span>
              ))}
            </div>
            {screen.rows.map((row) => (
              <div className="matrix-row" key={row}>
                <span>{row}</span>
                <div className="matrix-options" role="radiogroup" aria-label={`${screen.label} ${row}`}>
                  {screen.options.map((option) => (
                    <button
                      type="button"
                      key={option.value || option}
                      className={value?.[row] === (option.value || option) ? 'matrix-choice active' : 'matrix-choice'}
                      onClick={() => setMatrixValue(row, option.value || option)}
                      aria-label={`${row}: ${option.label || option}`}
                      aria-pressed={value?.[row] === (option.value || option)}
                    >
                      {option.short || option}
                    </button>
                  ))}
                </div>
              </div>
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
