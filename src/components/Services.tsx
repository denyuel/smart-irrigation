import { motion } from 'framer-motion';
import { CloudRain, Cpu, Compass } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <CloudRain size={32} />,
    title: 'Körforgó Pivot Rendszerek',
    description: 'Központi betonalap körül forgó, teljesen automatizált öntözőberendezések. Ideális nagy kiterjedésű, kör alakú szántóföldek rendkívül hatékony és egyenletes vízellátására.',
    features: ['Automatizált körforgás', 'Akár 100 hektár lefedettség', 'Minimális humán erőforrás igény']
  },
  {
    icon: <Compass size={32} />,
    title: 'Lineáris Öntözőrendszerek',
    description: 'Egyenes vonalban, oda-vissza mozgó mechanizált öntözőberendezések, amelyek tökéletesen alkalmazkodnak a négyszögletes vagy szabálytalan alakú szántóföldekhez.',
    features: ['Négyszögletes területek lefedése', 'Csatornás vagy tömlős víztáplálás', 'Maximális területkihasználás']
  },
  {
    icon: <Cpu size={32} />,
    title: 'Okos vezérlés & IoT rendszerek',
    description: 'Intelligens vezérlőrendszerek talajnedvesség-mérők és helyi időjárás-előrejelzések alapján. Felügyelje és vezérelje berendezését bárhonnan mobilalkalmazáson keresztül.',
    features: ['Mobilalkalmazásos elérés', 'Talajnedvesség-alapú indítás', 'Biztonsági nyomás- és dőlésérzékelés']
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

const Services = () => {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Profi <span>Öntözési Megoldások</span></h2>
          <p className="section-subtitle">
            A legújabb technológiákat alkalmazzuk, hogy minden szántóföldön és gyümölcsösben a legoptimálisabb vízkijuttatást biztosítsuk.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="dot"></span> {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
