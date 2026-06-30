export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-wrap" aria-label={`Survey progress: ${percentage}% complete`}>
      <span className="sr-only">{`Survey progress: ${percentage}% complete`}</span>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
