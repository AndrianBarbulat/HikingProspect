import { Link } from 'react-router'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid page-shell">
        <div>
          <Link className="brand brand--footer" to="/"><BrandMark /><span>Trailmark</span></Link>
          <p>A considered guide to selected Swiss National Park trails.</p>
        </div>
        <div><h2>Explore</h2><Link to="/trails">All trails</Link><Link to="/plan">Plan your hike</Link><Link to="/about">About the project</Link></div>
        <div><h2>Map credits</h2><a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a><a href="https://github.com/AndrianBarbulat/HikingProspect">GitHub repository</a></div>
      </div>
      <div className="site-footer__base page-shell"><span>© {new Date().getFullYear()} Trailmark</span><span>Verify conditions with official sources</span></div>
    </footer>
  )
}
