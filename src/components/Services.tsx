import './Services.css';

const services = [
  {
    title: 'Strategische Inkoop',
    description: 'Niet alleen besparen, maar structurele waarde toevoegen. Wij ontwikkelen inkoopstrategieën die naadloos aansluiten op uw lange-termijn organisatiedoelen.',
    icon: '🎯'
  },
  {
    title: 'Rendementsoptimalisatie',
    description: 'Maximaliseer uw marge door slimme procesoptimalisatie en data-analyse. Wij identificeren verborgen besparingspotentieel in uw gehele inkoopcyclus.',
    icon: '📊'
  },
  {
    title: 'Supplier Excellence',
    description: 'Bouw aan een veerkrachtige keten met de juiste partners. Wij professionaliseren uw sourcing- en contractmanagement voor maximale kwaliteit en continuïteit.',
    icon: '🛡️'
  },
  {
    title: 'Interim & Projectmanagement',
    description: 'Directe impact op uw inkoopafdeling. Wij bieden ervaren interim-experts die resultaten boeken en zorgen voor duurzame kennisborging binnen uw team.',
    icon: '🚀'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Onze Expertise</h2>
          <p className="section-subtitle">Professionele begeleiding voor elke stap in uw inkoopproces.</p>
        </div>
        <div className="grid grid-4 services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
