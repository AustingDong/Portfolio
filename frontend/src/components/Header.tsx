import { useState } from 'react'
import '../styles/Header.css'

const RESUME_URL = `${import.meta.env.BASE_URL}files/Austing_Dong_CV.pdf`

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#news', label: 'news' },
    { href: '#publications', label: 'publications' },
    { href: '#experience', label: 'experience' },
    { href: '#awards', label: 'awards' },
    { href: '#projects', label: 'projects' },
  ]

  return (
    <header className="header">
      <nav className="header-container">
        <a className="header-brand" href="#about">
          Austing&nbsp;<span className="header-brand-last">Dong</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a className="nav-link nav-cv" href={RESUME_URL} target="_blank" rel="noreferrer">
            cv
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

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
          <a
            className="mobile-nav-link"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            cv (pdf)
          </a>
        </div>
      )}
    </header>
  )
}
