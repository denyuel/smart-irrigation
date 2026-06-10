import { motion } from 'framer-motion';
import { Shield, Settings, Smartphone, Award, ArrowRight } from 'lucide-react';
import './OpalPivot.css';
import pivotImg from '../assets/opal_pivot.png';

const OpalPivot = () => {
  const features = [
    {
      icon: <Shield size={22} />,
      title: 'Tűzihorganyzott acélváz',
      desc: 'Maximális korrózióvédelem és kiemelkedő szerkezeti stabilitás, amely akár 25-35 év élettartamot biztosít.'
    },
    {
      icon: <Award size={22} />,
      title: 'OPES szórófej-technológia',
      desc: 'Speciális fúvókák az optimális cseppképzésért, csökkentve a párolgási veszteséget még szeles időben is.'
    },
    {
      icon: <Smartphone size={22} />,
      title: 'Okos távvezérlő rendszer',
      desc: 'Bárhonnan ellenőrizhető és indítható körforgás, automatikus nyomás- és dőlésérzékelő biztonsági leállítással.'
    },
    {
      icon: <Settings size={22} />,
      title: 'Körforgó & Lineáris kivitel',
      desc: 'Egyedi igények szerint igazítható rendszerek kör alakú vagy szögletes szántóföldek teljes lefedésére.'
    }
  ];

  return (
    <section id="opal-pivot" className="pivot-section section">
      <div className="container pivot-container">
        <motion.div 
          className="pivot-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="pivot-img-border">
            <img src={pivotImg} alt="Opal Pivot körforgó öntözőrendszer szántóföldön" className="pivot-img-actual" />
            <div className="pivot-accent-badge">
              <span>Hivatalos forgalmazótól</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="pivot-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="pivot-tag">Kiemelt Termékünk</span>
          <h2 className="pivot-title">Opal Pivot <span>Öntözőrendszerek</span></h2>
          <p className="pivot-description">
            A törökországi gyártmányú **Opal Pivot** a modern szántóföldi öntözés csúcstechnológiáját képviseli. A mechanizált körforgó (pivot) és lineáris rendszerek kiemelkedő hatékonysággal juttatják ki a vizet, növelve a terméshozamot és minimalizálva a kézi munkaerőigényt.
          </p>

          <div className="pivot-features-list">
            {features.map((feat, index) => (
              <div key={index} className="pivot-feature-item">
                <div className="pivot-feature-icon">
                  {feat.icon}
                </div>
                <div className="pivot-feature-text">
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary pivot-btn">
            Kérjen Opal Pivot ajánlatot <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpalPivot;
