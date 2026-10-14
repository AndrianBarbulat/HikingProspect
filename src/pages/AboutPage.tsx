import { Link } from 'react-router'
import { SafetyNotice } from '../components/SafetyNotice'

export function AboutPage() {
  return (
    <div className="page-shell editorial-page">
      <header className="page-intro"><p className="eyebrow">About the prototype</p><h1>A field guide for the frontend</h1><p className="lede">Trailmark explores how a calm, map-led interface can make a small trail catalogue feel useful, legible and inviting.</p></header>
      <SafetyNotice />
      <div className="about-columns"><section><h2>Why it exists</h2><p>This is a frontend demonstration built to exercise responsive layouts, accessible filtering, reusable detail templates and an interactive map experience. All six trails, locations and descriptions are fictional.</p><h2>Technology</h2><p>Vite, React, TypeScript, React Router, Leaflet, React Leaflet and a custom-property CSS design system. The site is fully static and uses no API keys or personal data.</p></section><section><h2>Maps and source</h2><p>Base map tiles and data are attributed to <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>. The repository link belongs in the footer and project documentation.</p><p><a href="https://github.com/AndrianBarbulat/HikingProspect">View the GitHub repository</a></p><h2>Possible next steps</h2><p>A future real product might add verified data partnerships, offline-first map sheets and specialist accessibility information. None of those features are implemented here.</p></section></div>
      <Link className="button" to="/trails">Explore the demonstration</Link>
    </div>
  )
}
