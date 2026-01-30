import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <div className="contact-info">
          <h2 className="section-title">Laten we praten</h2>
          <p className="contact-lead">
            Klaar om uw inkoopprocessen te optimaliseren? Neem contact op voor een vrijblijvend adviesgesprek.
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
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Naam</label>
            <input type="text" id="name" placeholder="Uw naam" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="uw@email.nl" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Onderwerp</label>
            <input type="text" id="subject" placeholder="Waar gaat het over?" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Bericht</label>
            <textarea id="message" rows={5} placeholder="Vertel ons meer..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Verstuur Bericht</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
