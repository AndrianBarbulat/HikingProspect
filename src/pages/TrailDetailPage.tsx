import { Link, useParams } from 'react-router'
import { SafetyNotice } from '../components/SafetyNotice'
import { TrailStats } from '../components/TrailStats'
import { getRelatedTrails, getTrailBySlug } from '../data/trails'
import { MapView } from '../map/MapView'
import { NotFoundPage } from './NotFoundPage'

export function TrailDetailPage() {
  const { slug } = useParams()
  const trail = getTrailBySlug(slug)
  if (!trail) return <NotFoundPage />
  const relatedTrails = getRelatedTrails(trail)

  return (
    <article className="detail-page">
      <header className="detail-hero page-shell">
        <Link className="back-link" to="/trails">← Back to the map</Link>
        <div className="detail-hero__title"><div><span className="route-chip">Published route facts</span><p className="eyebrow">{trail.location}</p><h1>{trail.name}</h1><p className="lede">{trail.description}</p></div><TrailStats trail={trail} detailed /></div>
      </header>
      <div className="detail-map page-shell"><MapView trails={[trail]} selectedSlug={trail.slug} /></div>
      <div className="detail-content page-shell">
        <div className="detail-main">
          <SafetyNotice />
          <section><h2>Overview</h2><p>{trail.description}</p><p className="source-note">Route facts checked 15 October 2026. <a href={trail.sourceUrl}>{trail.sourceLabel} ↗</a></p></section>
          <section><h2>Terrain</h2><ul className="tag-list">{trail.terrain.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>Highlights</h2><ol className="highlight-list">{trail.highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol></section>
          <section><h2>Access notes</h2><p>{trail.accessNotes}</p></section>
        </div>
        <aside className="detail-sidebar">
          <section><h2>Suggested equipment</h2><ul className="equipment-list">{trail.equipment.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="specific-safety"><h2>Safety note</h2><p>{trail.safetyNote}</p></section>
          <Link className="button button--block" to="/trails?view=map">Back to the map</Link>
        </aside>
      </div>
      <section className="related-section page-shell"><div className="section-heading"><div><p className="eyebrow">Continue across the sheet</p><h2>Related park trails</h2></div></div><div className="related-grid">{relatedTrails.map((related) => <article key={related.slug}><p>{related.location}</p><h3><Link to={`/trails/${related.slug}`}>{related.name}</Link></h3><TrailStats trail={related} /><span>{related.terrain[0]}</span></article>)}</div></section>
    </article>
  )
}
