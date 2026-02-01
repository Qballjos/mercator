import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="container header-content">
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Mercator <span className="logo-sub">Inkoopadviezen</span></span>
            <p className="logo-tagline">Strategie • Rendement • Groei</p>
          </a>
        </div>
        <nav className="nav" aria-label="Hoofdnavigatie">
          <a href="#services" className="nav-link">Diensten</a>
          <a href="#experience" className="nav-link">Ervaring</a>
          <a href="#about" className="nav-link">Over mij</a>
          <a href="#contact" className="btn btn-primary" aria-label="Neem contact op">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
