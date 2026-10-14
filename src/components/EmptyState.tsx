export function EmptyState({ onClear }: { onClear: () => void }) {
  return <div className="empty-state"><span aria-hidden="true" className="empty-state__mark">×</span><h2>No trail marks found</h2><p>Try a different name, a wider distance, or another difficulty.</p><button className="text-button" type="button" onClick={onClear}>Clear every filter</button></div>
}
