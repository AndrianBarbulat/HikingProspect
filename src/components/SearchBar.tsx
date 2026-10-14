export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="search-field">
      <span className="sr-only">Search trails by name or location</span>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" /></svg>
      <input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search by trail or location" />
    </label>
  )
}
