import { motion } from 'framer-motion';
import { CloudRain, Compass, Cpu, Leaf } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <CloudRain size={32} />,
    title: 'Mezőgazdasági esőztetés',
    description: 'Nagy területű szántóföldek és legelők hatékony öntözése modern körforgó (pivot) és lineáris rendszerekkel, egyenletes vízeloszlással.',
    features: ['Lineáris & Körforgó rendszerek', 'Csővezetékes öntözés', 'Magas szélállóság']
  },
  {
    icon: <Leaf size={32} />,
    title: 'Csepegtető öntözőrendszerek',
    description: 'Célzott vízkijuttatás közvetlenül a növények gyökeréhez. Ideális gyümölcsösökbe, szőlőültetvényekbe és soros zöldségkultúrákba.',
    features: ['Akár 95%-os vízhasznosulás', 'Tápanyag-kijuttatással (fertigation)', 'Eltömődésmentes csepegtetők']
  },
  {
    icon: <Compass size={32} />,
    title: 'Mikro-szórófejes rendszerek',
    description: 'Finom permetezésű vízkijuttatás szántóföldi kultúrákhoz és gyümölcsösökbe, ahol a finom cseppképzés és az egyenletes talajnedvesség elengedhetetlen.',
    features: ['Finom cseppképzés szántóföldön', 'Talajmenti fagyvédelem', 'Mikroklíma szabályozás']
  },
  {
    icon: <Cpu size={32} />,
    title: 'Okos vezérlés & IoT szenzorok',
    description: 'Automatizálja mezőgazdasági öntözését talajnedvesség-mérők és helyi időjárás-előrejelzések alapján. Vezérelje rendszerét bárhonnan mobilalkalmazással.',
    features: ['Mobilalkalmazásos elérés', 'Talajnedvesség-alapú indítás', 'Időjárás-követő algoritmusok']
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
