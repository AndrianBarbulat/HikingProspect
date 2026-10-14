import { latLngBounds } from 'leaflet'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import type { Trail } from '../types/trail'
import { TrailMarker } from './TrailMarker'

const mapCenter: [number, number] = [46.654, 10.146]

function MapController({ trails, selectedTrail }: { trails: Trail[]; selectedTrail?: Trail }) {
  const map = useMap()
  useEffect(() => { if (selectedTrail) map.flyTo(selectedTrail.coordinates, Math.max(map.getZoom(), 13), { duration: 0.6 }); else if (trails.length > 1) map.fitBounds(latLngBounds(trails.map((trail) => trail.coordinates)), { padding: [42, 42], maxZoom: 13 }); else if (trails[0]) map.setView(trails[0].coordinates, 13) }, [map, selectedTrail, trails])
  useEffect(() => { const container = map.getContainer(); const observer = new ResizeObserver(() => map.invalidateSize({ animate: false })); observer.observe(container); return () => observer.disconnect() }, [map])
  return null
}

interface MapViewProps { trails: Trail[]; selectedSlug?: string | null; onSelect?: (trail: Trail) => void; compact?: boolean }

export function MapView({ trails, selectedSlug, onSelect = () => undefined, compact = false }: MapViewProps) {
  const selectedTrail = trails.find((trail) => trail.slug === selectedSlug)
  return <div className={`map-view ${compact ? 'map-view--compact' : ''}`} aria-label="Illustrative trail map"><MapContainer center={mapCenter} zoom={12} scrollWheelZoom={!compact} keyboard={false} zoomControl={!compact} attributionControl><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{trails.map((trail) => <TrailMarker key={trail.slug} trail={trail} selected={trail.slug === selectedSlug} onSelect={onSelect} />)}<MapController trails={trails} selectedTrail={selectedTrail} /></MapContainer><span className="map-demo-label">Illustrative points · not routes</span></div>
}
