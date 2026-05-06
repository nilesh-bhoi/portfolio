import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // This effect locks body scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  // This helper closes the menu after a mobile user clicks a link.
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="nav-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={handleNavClick}>
          NB
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          id="mobile-navigation"
          className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              className="nav-link"
              href={item.href}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
