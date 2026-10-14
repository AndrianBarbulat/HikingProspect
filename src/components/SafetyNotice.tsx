export function SafetyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`safety-notice ${compact ? 'safety-notice--compact' : ''}`}>
      <span className="safety-notice__icon" aria-hidden="true">!</span>
      <div><strong>Demonstration only</strong><p>This is a demonstration website. Trail locations and details are illustrative and must not be used for navigation or safety decisions.</p></div>
    </aside>
  )
}
