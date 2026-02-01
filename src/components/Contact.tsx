import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <div className="contact-info">
          <h2 className="section-title">Laten we praten</h2>
          <p className="contact-lead">
            Klaar om uw inkoopprocessen te optimaliseren? Neem direct contact op voor een vrijblijvend adviesgesprek.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Ericalaan 14, 3911XN Rhenen</p>
            </div>
            <div className="contact-item">
              <span className="icon">🏢</span>
              <p>KVK: 61103861</p>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <div className="contact-card">
            <h3>Direct Contact</h3>
            <p>Stuur ons een bericht of bekijk ons zakelijke profiel.</p>
            <div className="action-buttons">
              <a href="mailto:info@mercatorinkoopadviezen.nl" className="btn btn-primary">
                <span className="icon">✉️</span> info@mercatorinkoopadviezen.nl
              </a>
              <a 
                href="https://www.linkedin.com/in/wouter-dijkhuizen-60743738/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <span className="icon">🔗</span> LinkedIn Profiel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
