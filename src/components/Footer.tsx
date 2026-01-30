import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="logo-text">Mercator <span className="logo-sub">Inkoopadviezen</span></span>
          <p className="footer-tagline">Uw partner in strategische inkoop.</p>
        </div>
        <div className="footer-links">
          <h4>Navigatie</h4>
          <a href="#services">Diensten</a>
          <a href="#about">Over ons</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-legal">
          <h4>Juridisch</h4>
          <p>© {new Date().getFullYear()} Mercator Inkoopadviezen</p>
          <p>KVK: 61103861</p>
          <p>Thema door Antigravity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
