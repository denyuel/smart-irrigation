import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kezdőlap', href: '#home' },
    { name: 'Szolgáltatások', href: '#services' },
    { name: 'Vízigény Kalkulátor', href: '#calculator' },
    { name: 'Előnyök', href: '#benefits' },
    { name: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <Droplet className="logo-icon" size={28} />
          <span>Aqua</span>Farm
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-nav">
            Ajánlatkérés
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menü megnyitása">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary btn-mobile-nav" onClick={() => setIsOpen(false)}>
          Ajánlatkérés
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
