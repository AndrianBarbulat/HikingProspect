export type MobileView = 'list' | 'map'

export function MapListToggle({ value, onChange }: { value: MobileView; onChange: (value: MobileView) => void }) {
  return <div className="view-toggle" role="group" aria-label="Choose results view"><button type="button" aria-pressed={value === 'list'} onClick={() => onChange('list')}>☷ <span>List</span></button><button type="button" aria-pressed={value === 'map'} onClick={() => onChange('map')}>⌖ <span>Map</span></button></div>
}
