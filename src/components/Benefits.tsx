import { motion } from 'framer-motion';
import { ShieldCheck, Coins, CloudSun, Heart } from 'lucide-react';
import './Benefits.css';

const benefits = [
  {
    icon: <Coins size={28} />,
    title: 'Gyors megtérülés',
    description: 'A precíz adagolás csökkenti a víz- és energiafogyasztást, miközben a nagyobb terméshozam rövid időn belül visszahozza a beruházás árát.'
  },
  {
    icon: <CloudSun size={28} />,
    title: 'Időjárás-független védelem',
    description: 'Automatizált rendszereink a kritikus aszályos időszakokban is garantálják a növények egyenletes fejlődését és a kiszámítható termést.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Hosszú élettartam',
    description: 'Kizárólag prémium minőségű, UV- és fagyálló alapanyagokat használunk, így az öntözőrendszer évtizedeken át megbízhatóan működik.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Növény- és talajegészség',
    description: 'A lassú és célzott csepegtetés megakadályozza a talajeróziót és a tápanyagok kimosódását, miközben ideális mikroklímát teremt.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section section">
      <div className="container">
        <div className="benefits-layout">
          {/* Left Side: Headline and brief pitch */}
          <motion.div 
            className="benefits-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="benefits-badge">Miért válasszon minket?</span>
            <h2 className="section-title text-left">A professzionális öntözés <span>valódi előnyei</span></h2>
            <p className="benefits-pitch">
              A modern földművelés és kertészet elképzelhetetlen mérnöki pontossággal megtervezett öntözés nélkül. Rendszereinkkel vizet, időt és energiát spórol meg.
            </p>
            <div className="benefits-stat-box glass">
              <span className="stat-num">-40%</span>
              <span className="stat-text">átlagos vízköltség-csökkenés a precíziós adagolásnak köszönhetően.</span>
            </div>
          </motion.div>

          {/* Right Side: Features Grid */}
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-item glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div className="benefit-text">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
