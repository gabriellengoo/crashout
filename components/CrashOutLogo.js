export default function CrashOutLogo({ compact = false }) {
  return (
    <span className={compact ? 'crash-logo compact' : 'crash-logo'} aria-label="Crash Out">
      <span>Crash</span>
      <span>Out</span>
      <i aria-hidden="true" />
    </span>
  );
}
