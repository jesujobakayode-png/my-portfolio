
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          OA<span>.</span>
        </a>

        {/* Desktop navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <a href="#contact" className="nav-cta">
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a href="#contact" onClick={closeMenu}>
            Let's talk ↗
          </a>

          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      )}
    </header>
  )
}

export default Navbar
