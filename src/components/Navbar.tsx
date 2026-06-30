import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand-logo">
          <span className="brand-mark">CA</span>
          <div>
            <p>Chandra Associates</p>
            <small>Engineering & Architecture</small>
          </div>
        </Link>

        <button className="nav-toggle" onClick={() => setMenuOpen((open) => !open)}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
