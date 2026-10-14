import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </div>
  )
}
