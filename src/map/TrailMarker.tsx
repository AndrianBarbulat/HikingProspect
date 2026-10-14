import { divIcon, type Marker as LeafletMarker } from 'leaflet'
import { useEffect, useMemo, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router'
import { DifficultyBadge } from '../components/DifficultyBadge'
import type { Trail } from '../types/trail'

export function TrailMarker({ trail, selected, onSelect }: { trail: Trail; selected: boolean; onSelect: (trail: Trail) => void }) {
  const markerRef = useRef<LeafletMarker>(null)
  const icon = useMemo(() => divIcon({ className: 'trail-marker-wrap', html: `<span class="trail-marker trail-marker--${trail.difficulty.toLowerCase()} ${selected ? 'trail-marker--selected' : ''}"><span>${trail.difficulty === 'Easy' ? '●' : trail.difficulty === 'Moderate' ? '◆' : '▲'}</span></span>`, iconSize: selected ? [44, 52] : [34, 42], iconAnchor: selected ? [22, 48] : [17, 38], popupAnchor: [0, -40] }), [selected, trail.difficulty])
  useEffect(() => { if (selected) markerRef.current?.openPopup() }, [selected])
  return <Marker ref={markerRef} position={trail.coordinates} icon={icon} title={trail.name} alt={`${trail.name}, ${trail.difficulty}`} eventHandlers={{ click: () => onSelect(trail), keypress: () => onSelect(trail) }}><Popup className="trail-popup" minWidth={210}><p>{trail.location}</p><h3>{trail.name}</h3><div><DifficultyBadge difficulty={trail.difficulty} /><span>{trail.distanceKm} km</span></div><Link to={`/trails/${trail.slug}`}>View trail notes →</Link></Popup></Marker>
}
