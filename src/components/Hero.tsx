import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Ontgrendel het potentieel van je bedrijf met <span className="highlight">doelgerichte inkoopstrategieën</span>.
          </h1>
          <p className="hero-subtitle">
            Mercator Inkoopadviezen helpt u bij procesoptimalisatie, kostenbesparing en strategisch leveranciersmanagement voor meetbare bedrijfsresultaten.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">Start Vandaag</a>
            <a href="#services" className="btn btn-outline btn-lg">Onze Diensten</a>
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
