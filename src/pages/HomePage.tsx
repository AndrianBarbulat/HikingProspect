import { Link } from 'react-router'
import { DifficultyBadge } from '../components/DifficultyBadge'
import { SafetyNotice } from '../components/SafetyNotice'
import { featuredTrail, trails } from '../data/trails'

export function HomePage() {
  const recommendations = trails.filter((trail) => trail.featured)
  return (
    <>
      <section className="home-hero"><div className="home-hero__content page-shell"><div className="home-hero__copy"><p className="eyebrow">Morrow Highlands · Field notes 01–06</p><h1>Find your line through the landscape.</h1><p>Six fictional trails, one considered map, and a clearer way to choose your next demonstration route.</p><div className="button-row"><Link className="button" to="/trails">Explore trails</Link><Link className="text-link" to="/plan">Read the planning notes →</Link></div></div><div className="map-placeholder" aria-label="Illustrative Morrow Highlands map preview"><span className="map-placeholder__label">Map preview</span></div></div></section>
      <section className="featured-band page-shell"><div><p className="eyebrow">Editor’s sample</p><h2>{featuredTrail.name}</h2><p>{featuredTrail.description}</p><Link className="text-link" to={`/trails/${featuredTrail.slug}`}>Read the field notes →</Link></div><dl className="featured-band__stats"><div><dt>Grade</dt><dd><DifficultyBadge difficulty={featuredTrail.difficulty} /></dd></div><div><dt>Distance</dt><dd>{featuredTrail.distanceKm} km</dd></div><div><dt>Ascent</dt><dd>{featuredTrail.elevationGainM} m</dd></div></dl></section>
      <section className="home-section page-shell"><div className="section-heading"><div><p className="eyebrow">Three ways upward</p><h2>Recommended field notes</h2></div><Link className="text-link" to="/trails">See all six trails →</Link></div><div className="recommendation-grid">{recommendations.map((trail, index) => <article className="recommendation" key={trail.slug}><span className="recommendation__number">0{index + 1}</span><p className="recommendation__location">{trail.location}</p><h3><Link to={`/trails/${trail.slug}`}>{trail.name}</Link></h3><div className="recommendation__meta"><DifficultyBadge difficulty={trail.difficulty} /><span>{trail.distanceKm} km</span></div><p>{trail.description}</p></article>)}</div></section>
      <section className="grade-section page-shell"><div><p className="eyebrow">A simple key</p><h2>Choose a pace, not a promise</h2></div><div className="grade-strip"><div><DifficultyBadge difficulty="Easy" /><p>Gentler ground and shorter distance.</p></div><div><DifficultyBadge difficulty="Moderate" /><p>More ascent, distance or rough terrain.</p></div><div><DifficultyBadge difficulty="Hard" /><p>Long, strenuous and potentially exposed.</p></div></div></section>
      <section className="responsibility-section page-shell"><SafetyNotice /><div><p className="eyebrow">Walk lightly</p><h2>Leave the landscape as you found it.</h2><p>Plan ahead, respect access, carry everything out, and give wildlife and other visitors room.</p></div></section>
      <section className="final-cta"><div className="page-shell final-cta__inner"><p className="eyebrow">Map sheet ready</p><h2>Six trails. One fictional highland.</h2><Link className="button button--light" to="/trails?view=map">Open the full map</Link></div></section>
    </>
  )
}
