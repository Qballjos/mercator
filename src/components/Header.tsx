import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="container header-content">
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Mercator <span className="logo-sub">Inkoopadviezen</span></span>
            <p className="logo-tagline">Uw inkooper</p>
          </a>
        </div>
        <nav className="nav" aria-label="Hoofdnavigatie">
          <a href="#services" className="nav-link">Diensten</a>
          <a href="#about" className="nav-link">Over ons</a>
          <a href="#contact" className="btn btn-primary" aria-label="Neem contact op">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
