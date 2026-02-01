import './Clients.css';

const clientProjects = [
  {
    company: 'Ministerie van Defensie',
    role: 'Projectleider Europese Aanbestedingen',
    period: '2024 - Heden',
    description: 'Verantwoordelijk voor complexe Europese aanbestedingstrajecten binnen de defensie-organisatie.',
    icon: '🛡️'
  },
  {
    company: 'NEVI',
    role: 'Teacher / Trainer',
    period: '2005 - Heden',
    description: 'Docent voor NEVI MIL, NEVI 1 en 2. Training van inkoopprofessionals in publieke en private sectoren.',
    icon: '🎓'
  },
  {
    company: 'Waterschap Hollandse Delta',
    role: 'Inkoopadviseur Europese Aanbestedingen',
    period: '2023 - 2024',
    description: 'Projectbegeleiding en advies bij grootschalige aanbestedingen voor waterbeheer.',
    icon: '💧'
  },
  {
    company: 'Vitens',
    role: 'Strategisch Inkoper Europese Aanbestedingen',
    period: '2022 - 2023',
    description: 'Strategische inkoop en begeleiding van Europese aanbestedingen voor de drinkwatersector.',
    icon: '🚰'
  },
  {
    company: 'Allinq',
    role: 'Tactisch Inkoper',
    period: '2023',
    description: 'Inkoop en contractmanagement binnen de telecom-infrastructuur sector.',
    icon: '📶'
  },
  {
    company: 'NedTrain',
    role: 'Sr Inkoopadviseur Spare Parts & Equipment',
    period: '2019 - 2021',
    description: 'Begeleiding van Europese aanbestedingen voor spares en equipment in de railsector.',
    icon: '🚆'
  },
  {
    company: 'ASML',
    role: 'Procurement Account Manager (PAM)',
    period: '2018 - 2019',
    description: 'Selectie en contractering van facilitaire dienstverleners voor de high-tech semiconductor industrie.',
    icon: '🔬'
  },
  {
    company: 'Aspen Pharma',
    role: 'Procurement Specialist NPR',
    period: '2017 - 2018',
    description: 'Inkoop van NPR-pakketten, inclusief bouwcontracten (UAV/DNR) voor chemische fabrieken.',
    icon: '💊'
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
