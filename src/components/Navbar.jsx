import { useState } from 'react'
import './styles.css'

const Navbar = ({
  darkMode,
  setDarkMode,
  navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          ES
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode && setDarkMode(!darkMode)}
            className="btn btn-secondary"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-nav-button"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <button
          onClick={() => setDarkMode && setDarkMode(!darkMode)}
          className="mobile-nav-link"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar 