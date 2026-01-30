import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Mercator <span className="logo-sub">Inkoopadviezen</span></span>
        </div>
        <nav className="nav">
          <a href="#services" className="nav-link">Diensten</a>
          <a href="#about" className="nav-link">Over ons</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
