import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import { FilterBar, type DifficultyFilter } from '../components/FilterBar'
import { MapListToggle, type MobileView } from '../components/MapListToggle'
import { SafetyNotice } from '../components/SafetyNotice'
import { SearchBar } from '../components/SearchBar'
import { TrailList } from '../components/TrailList'
import { trails } from '../data/trails'
import { MapView } from '../map/MapView'
import type { Trail } from '../types/trail'

export function TrailsPage() {
  const [params, setParams] = useSearchParams()
  const search = params.get('q') ?? ''
  const difficultyParam = params.get('difficulty')
  const difficulty: DifficultyFilter = difficultyParam === 'Easy' || difficultyParam === 'Moderate' || difficultyParam === 'Hard' ? difficultyParam : 'All'
  const maxDistance = ['5', '10', '15'].includes(params.get('max') ?? '') ? params.get('max')! : 'all'
  const mobileView: MobileView = params.get('view') === 'map' ? 'map' : 'list'
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const cardRefs = useRef(new Map<string, HTMLElement>())

  const filteredTrails = useMemo(() => {
    const needle = search.trim().toLocaleLowerCase()
    return trails.filter((trail) => {
      const matchesText = !needle || `${trail.name} ${trail.location}`.toLocaleLowerCase().includes(needle)
      const matchesDifficulty = difficulty === 'All' || trail.difficulty === difficulty
      const matchesDistance = maxDistance === 'all' || trail.distanceKm <= Number(maxDistance)
      return matchesText && matchesDifficulty && matchesDistance
    })
  }, [search, difficulty, maxDistance])

  const activeSelectedSlug = filteredTrails.some((trail) => trail.slug === selectedSlug) ? selectedSlug : null

  function updateParam(key: string, value: string, defaultValue: string) {
    const next = new URLSearchParams(params)
    if (!value || value === defaultValue) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
    if (key !== 'view') setSelectedSlug(null)
  }

  function clearFilters() {
    const next = new URLSearchParams(params)
    next.delete('q')
    next.delete('difficulty')
    next.delete('max')
    setParams(next, { replace: true })
    setSelectedSlug(null)
  }

  function selectFromMap(trail: Trail) {
    setSelectedSlug(trail.slug)
    requestAnimationFrame(() => cardRefs.current.get(trail.slug)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }))
  }

  const hasFilters = Boolean(search || difficulty !== 'All' || maxDistance !== 'all')

  return (
    <div className="explore-page">
      <header className="explore-header page-shell"><div><p className="eyebrow">Morrow Highlands · map sheet 04</p><h1>Explore sample trails</h1></div><SafetyNotice compact /></header>
      <div className="explore-controls page-shell"><SearchBar value={search} onChange={(value) => updateParam('q', value, '')} /><FilterBar difficulty={difficulty} maxDistance={maxDistance} hasFilters={hasFilters} onDifficultyChange={(value) => updateParam('difficulty', value, 'All')} onDistanceChange={(value) => updateParam('max', value, 'all')} onClear={clearFilters} /><MapListToggle value={mobileView} onChange={(value) => updateParam('view', value, 'list')} /></div>
      <div className="explore-layout page-shell">
        <section className={`results-panel ${mobileView === 'map' ? 'mobile-hidden' : ''}`} aria-label="Trail results"><div className="results-panel__heading"><p aria-live="polite"><strong>{filteredTrails.length}</strong> {filteredTrails.length === 1 ? 'trail' : 'trails'} found</p><span>Select a card to locate it</span></div><TrailList trails={filteredTrails} selectedSlug={activeSelectedSlug} cardRefs={cardRefs} onSelect={(trail) => setSelectedSlug(trail.slug)} onClear={clearFilters} /></section>
        <section className={`map-panel ${mobileView === 'list' ? 'mobile-hidden' : ''}`} aria-label="Trail map"><MapView trails={filteredTrails} selectedSlug={activeSelectedSlug} onSelect={selectFromMap} /></section>
      </div>
    </div>
  )
}
