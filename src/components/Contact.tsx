import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Bedankt! Uw bericht is succesvol verzonden. we nemen zo snel mogelijk contact met u op.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Er is iets misgegaan. Probeer het later opnieuw.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Kon geen verbinding maken met de server. Controleer uw internetverbinding.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Naam</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Uw naam" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="uw@email.nl" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Onderwerp</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Waar gaat het over?" 
              required 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Bericht</label>
            <textarea 
              id="message" 
              rows={5} 
              placeholder="Vertel ons meer..." 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary btn-block" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Versturen...' : 'Verstuur Bericht'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
