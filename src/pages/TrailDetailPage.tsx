import { Link, useParams } from 'react-router'
import { SafetyNotice } from '../components/SafetyNotice'
import { TrailStats } from '../components/TrailStats'
import { getTrailBySlug } from '../data/trails'
import { NotFoundPage } from './NotFoundPage'

export function TrailDetailPage() {
  const { slug } = useParams()
  const trail = getTrailBySlug(slug)
  if (!trail) return <NotFoundPage />

  return (
    <article className="page-shell detail-page">
      <Link className="back-link" to="/trails">← Back to the map</Link>
      <span className="demo-chip">Illustrative trail</span><p className="eyebrow">{trail.location}</p><h1>{trail.name}</h1><p className="lede">{trail.description}</p>
      <TrailStats trail={trail} detailed /><SafetyNotice />
    </article>
  )
}
