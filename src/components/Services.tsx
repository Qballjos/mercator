import './Services.css';

const services = [
  {
    title: 'Inkoopstrategieën op Maat',
    description: 'Onze specialisten werken nauw samen met jouw team om aangepaste inkoopstrategieën te ontwikkelen die aansluiten bij jouw specifieke bedrijfsbehoeften en doelstellingen.',
    icon: '🎯'
  },
  {
    title: 'Kostenoptimalisatie',
    description: 'Wij identificeren kansen om kosten te verlagen en efficiëntie te vergroten binnen jouw inkoopcyclus, waardoor jouw bedrijf meer waarde kan halen uit elke uitgave.',
    icon: '💰'
  },
  {
    title: 'Leveranciersmanagement',
    description: 'Met een focus op het versterken van relaties met leveranciers, helpen wij bij het selecteren en beheren van de juiste partners om de kwaliteit en betrouwbaarheid van jouw toeleveringsketen te waarborgen.',
    icon: '🤝'
  },
  {
    title: 'Inkoopadvies & Interim Management',
    description: 'Ons team staat klaar om jou te voorzien van op maat gemaakt inkoopadvies, gericht op het verbeteren van processen en het behalen van meetbare resultaten.',
    icon: '📈'
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
