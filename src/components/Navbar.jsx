import { useState, useEffect } from 'react'
import { Menu, X, Wrench } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Wrench size={24} />
          <span>TechCare</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('why-us')}>Why Us</button></li>
          <li><button onClick={() => scrollTo('booking')}>Book Now</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
