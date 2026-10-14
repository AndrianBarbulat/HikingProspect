import { Link } from 'react-router'

export function NotFoundPage() {
  return <section className="not-found page-shell"><p className="not-found__code">404</p><div><p className="eyebrow">Beyond the map edge</p><h1>This path isn’t marked</h1><p>The page you requested does not appear on this demonstration map.</p><Link className="button" to="/trails">Return to the trail map</Link></div></section>
}
