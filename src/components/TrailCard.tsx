import { forwardRef } from 'react'
import { Link } from 'react-router'
import type { Trail } from '../types/trail'
import { TrailStats } from './TrailStats'

interface TrailCardProps { trail: Trail; selected: boolean; onSelect: (trail: Trail) => void }

export const TrailCard = forwardRef<HTMLElement, TrailCardProps>(function TrailCard({ trail, selected, onSelect }, ref) {
  return (
    <article ref={ref} className={`trail-card ${selected ? 'trail-card--selected' : ''}`} data-trail-card={trail.slug}>
      <button className="trail-card__select" type="button" onClick={() => onSelect(trail)} aria-pressed={selected} aria-label={`${selected ? 'Selected' : 'Show'} ${trail.name} on map`}><span className="trail-card__location">{trail.location}</span><span className="trail-card__title">{trail.name}</span><span className="trail-card__description">{trail.description}</span></button>
      <TrailStats trail={trail} />
      <span className="terrain-tags" aria-label={`Terrain: ${trail.terrain.join(', ')}`}>{trail.terrain.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</span>
      <Link className="trail-card__link" to={`/trails/${trail.slug}`}>View trail notes <span aria-hidden="true">→</span></Link>
    </article>
  )
})
