import type { Trail } from '../types/trail'
import { DifficultyBadge } from './DifficultyBadge'

export function TrailStats({ trail, detailed = false }: { trail: Trail; detailed?: boolean }) {
  return (
    <dl className={`trail-stats ${detailed ? 'trail-stats--detailed' : ''}`}>
      <div><dt>Difficulty</dt><dd><DifficultyBadge difficulty={trail.difficulty} /></dd></div>
      <div><dt>Distance</dt><dd>{trail.distanceKm.toFixed(1)} km</dd></div>
      {detailed && <><div><dt>Time</dt><dd>{trail.duration}</dd></div><div><dt>Ascent</dt><dd>{trail.elevationGainM} m</dd></div></>}
    </dl>
  )
}
