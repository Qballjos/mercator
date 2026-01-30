import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-visual">
          <div className="image-placeholder">
            <span className="placeholder-text">Business Excellence</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">10+</span>
            <span className="stat-label">Jaar Ervaring</span>
          </div>
        </div>
        <div className="about-text">
          <h2 className="section-title">Waarom Mercator?</h2>
          <p className="lead-text">
            Bij Mercator Inkoopadviezen geloven we dat inkoop meer is dan alleen het kopen van producten of diensten. Het is een strategische kans om waarde te creëren.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <h4>Expertise</h4>
              <p>Diepgaande kennis van inkoopprocessen en strategieën.</p>
            </div>
            <div className="feature-item">
              <h4>Maatwerk</h4>
              <p>Elk bedrijf is uniek. Wij bieden advies dat perfect past.</p>
            </div>
            <div className="feature-item">
              <h4>Resultaatgericht</h4>
              <p>Focus op meetbare verbeteringen die uw bedrijf naar een hoger niveau tillen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
