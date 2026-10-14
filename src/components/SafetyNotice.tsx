export function SafetyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`safety-notice ${compact ? 'safety-notice--compact' : ''}`}>
      <span className="safety-notice__icon" aria-hidden="true">!</span>
      <div><strong>Check current conditions</strong><p>Trailmark summarises published route information. Always verify trail status, weather, transport and park rules with the Swiss National Park before setting out.</p></div>
    </aside>
  )
}
