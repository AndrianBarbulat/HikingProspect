import type { Difficulty } from '../types/trail'

export type DifficultyFilter = 'All' | Difficulty
const difficulties: DifficultyFilter[] = ['All', 'Easy', 'Moderate', 'Hard']

interface FilterBarProps { difficulty: DifficultyFilter; maxDistance: string; hasFilters: boolean; onDifficultyChange: (difficulty: DifficultyFilter) => void; onDistanceChange: (distance: string) => void; onClear: () => void }

export function FilterBar({ difficulty, maxDistance, hasFilters, onDifficultyChange, onDistanceChange, onClear }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <fieldset className="filter-group"><legend>Difficulty</legend><div className="filter-pills">{difficulties.map((item) => <button type="button" key={item} className={item === difficulty ? 'is-active' : ''} aria-pressed={item === difficulty} onClick={() => onDifficultyChange(item)}>{item}</button>)}</div></fieldset>
      <label className="distance-filter"><span>Distance</span><select value={maxDistance} onChange={(event) => onDistanceChange(event.target.value)} aria-label="Maximum trail distance"><option value="all">Any distance</option><option value="5">Up to 5 km</option><option value="10">Up to 10 km</option><option value="15">Up to 15 km</option></select></label>
      <button className="clear-button" type="button" onClick={onClear} disabled={!hasFilters}>Clear filters</button>
    </div>
  )
}
