import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transformeer uw inkoop naar een <span className="highlight">strategisch voordeel</span>.
          </h1>
          <p className="hero-subtitle">
            Wij helpen ambitieuze organisaties bij het realiseren van structurele kostenbesparingen en het bouwen van een toekomstbestendige supply chain door middel van data-gedreven inkoopstrategieën.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg" aria-label="Start vandaag met inkoopadvies">Start Vandaag</a>
            <a href="#services" className="btn btn-outline btn-lg" aria-label="Bekijk onze inkoopdiensten">Onze Diensten</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
