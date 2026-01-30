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
          <h2 className="section-title">Excellentie in Inkoop</h2>
          <p className="lead-text">
            Bij Mercator Inkoopadviezen geloven we dat inkoop het hart van uw bedrijfsvoering is. Wij gaan verder dan alleen transacties; wij bouwen aan strategische partnerships die uw organisatie wendbaar en competitief maken.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <h4>Visie & Doelgerichtheid</h4>
              <p>Wij vertalen complexe marktdynamiek naar concrete kansen voor uw organisatie.</p>
            </div>
            <div className="feature-item">
              <h4>Toekomstbestendig Design</h4>
              <p>Alleen duurzame resultaten tellen. Wij borgen kennis en processen voor de lange termijn.</p>
            </div>
            <div className="feature-item">
              <h4>Meetbaar Resultaat</h4>
              <p>Onze aanpak is pragmatisch en resultaatgedreven. Wij maken de impact op uw bottom-line inzichtelijk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
