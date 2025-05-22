import { useState } from 'react'
import '../styles/Header.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#resume', label: 'Resume' },
  ]

  return (
    <header className="header">
      <nav className="header-container">
        <div className="header-content">
          <div>
            <h1 className="header-title">Lianghan (Austing) Dong</h1>
            <p className="header-subtitle">Explainable AI & Generative Research</p>
          </div>
          
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
} 