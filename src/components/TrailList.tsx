import type { RefObject } from 'react'
import type { Trail } from '../types/trail'
import { EmptyState } from './EmptyState'
import { TrailCard } from './TrailCard'

interface TrailListProps { trails: Trail[]; selectedSlug: string | null; cardRefs: RefObject<Map<string, HTMLElement>>; onSelect: (trail: Trail) => void; onClear: () => void }

export function TrailList({ trails, selectedSlug, cardRefs, onSelect, onClear }: TrailListProps) {
  if (!trails.length) return <EmptyState onClear={onClear} />
  return <div className="trail-list">{trails.map((trail) => <TrailCard key={trail.slug} trail={trail} selected={trail.slug === selectedSlug} onSelect={onSelect} ref={(node) => { if (node) cardRefs.current.set(trail.slug, node); else cardRefs.current.delete(trail.slug) }} />)}</div>
}
