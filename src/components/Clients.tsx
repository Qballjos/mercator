import './Clients.css';

const clientProjects = [
  {
    company: 'Ministerie van Defensie',
    role: 'Freelance Projectleider Europese Aanbestedingen',
    period: '2024 - Heden',
    description: 'Begeleiding van complexe Europese aanbestedingstrajecten binnen de defensie-organisatie.',
    icon: '🛡️'
  },
  {
    company: 'Waterschap Hollandse Delta',
    role: 'Interim Inkoopadviseur Europese Aanbestedingen',
    period: '2023 - 2024',
    description: 'Projectbegeleiding en strategisch advies bij grootschalige aanbestedingen voor waterbeheer.',
    icon: '💧'
  },
  {
    company: 'Allinq',
    role: 'Freelance Tactisch Inkoper',
    period: '2023',
    description: 'Inkoop- en contractmanagement voor grootschalige telecom-infrastructuur projecten.',
    icon: '📶'
  },
  {
    company: 'Vitens',
    role: 'Interim Strategisch Inkoper Europese Aanbestedingen',
    period: '2022 - 2023',
    description: 'Strategische inkoop en begeleiding van Europese aanbestedingen voor de drinkwatersector.',
    icon: '🚰'
  },
  {
    company: 'Neways Electronics International',
    role: 'Freelance Inkoop Projectmanager',
    period: '2021 - 2022',
    description: 'Professionalisering van inkoopprocessen en vendor management in de high-tech elektronica.',
    icon: '🔌'
  },
  {
    company: 'NedTrain',
    role: 'Freelance Sr Inkoopadviseur',
    period: '2019 - 2021',
    description: 'Begeleiding van complexe Europese aanbestedingen voor spares en equipment in de railsector.',
    icon: '🚆'
  },
  {
    company: 'ASML',
    role: 'Interim Procurement Account Manager',
    period: '2018 - 2019',
    description: 'Selectie en contractering van strategische facilitaire partners voor de high-tech industrie.',
    icon: '🔬'
  },
  {
    company: 'Aspen Pharma',
    role: 'Freelance Procurement Specialist NPR',
    period: '2017 - 2018',
    description: 'Inkoop van NPR-pakketten en bouwcontracten (UAV/DNR) voor chemische productielocaties.',
    icon: '💊'
  },
  {
    company: 'NEVI',
    role: 'Freelance Docent / Trainer',
    period: '2005 - Heden',
    description: 'Docent voor NEVI MIL, NEVI 1 en 2. Training van inkoopprofessionals in publieke en private sectoren.',
    icon: '🎓'
  }
];

const Clients = () => {
  return (
    <section id="experience" className="clients">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Ervaring & Opdrachtgevers</h2>
          <p className="section-subtitle">Een selectie van freelance projecten en interim opdrachten bij toonaangevende organisaties.</p>
        </div>
        <div className="clients-grid">
          {clientProjects.map((project, index) => (
            <div key={index} className="client-card">
              <div className="client-header">
                <span className="client-icon">{project.icon}</span>
                <div className="client-title-group">
                  <h3>{project.company}</h3>
                  <span className="client-period">{project.period}</span>
                </div>
              </div>
              <div className="client-body">
                <p className="client-role">{project.role}</p>
                <p className="client-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
