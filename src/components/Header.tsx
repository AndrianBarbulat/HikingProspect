import { useState } from 'react'
import { NavLink } from 'react-router'
import { BrandMark } from './BrandMark'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/trails', label: 'Explore' },
  { to: '/plan', label: 'Plan your hike' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand" to="/" aria-label="Trailmark home" onClick={() => setOpen(false)}>
          <BrandMark />
          <span>Trailmark</span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? 'primary-nav--open' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="button button--small" to="/trails?view=map" onClick={() => setOpen(false)}>Open map</NavLink>
        </nav>
      </div>
    </header>
  )
}
