import { Link } from 'react-router'
import { SafetyNotice } from '../components/SafetyNotice'

export function AboutPage() {
  return (
    <div className="page-shell editorial-page">
      <header className="page-intro"><p className="eyebrow">About Trailmark</p><h1>A calmer way into the park</h1><p className="lede">Trailmark brings selected Swiss National Park routes into a focused, map-led guide designed for clear comparison.</p></header>
      <SafetyNotice />
      <div className="about-columns"><section><h2>Route information</h2><p>Distances, durations, ascent, grades and access notes are based on route information published by the Swiss National Park and were checked on 15 October 2026. Each trail page links to its official source. Conditions and transport can change, so Trailmark does not display a cached open or closed status.</p><h2>Technology</h2><p>Vite, React, TypeScript, React Router, Leaflet, React Leaflet and a custom-property CSS design system. The site is fully static and uses no API keys or personal data.</p></section><section><h2>Maps and sources</h2><p>Route facts come from the <a href="https://nationalpark.ch/en/visit/trails-routes/">Swiss National Park</a>. Base map tiles and data are attributed to <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>. Markers identify trailheads; they are not route geometry.</p><p><a href="https://github.com/AndrianBarbulat/HikingProspect">View the GitHub repository</a></p><h2>Know before you go</h2><p>Use the park’s current route status, official topographic mapping, weather forecast and transport information when planning. Dogs are not permitted in the Swiss National Park, even on a lead.</p></section></div>
      <Link className="button" to="/trails">Explore the routes</Link>
    </div>
  )
}
