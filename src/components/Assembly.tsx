import { motion } from 'framer-motion';
import { Hammer, Truck, CheckSquare, Settings } from 'lucide-react';
import './Assembly.css';
import assemblyImg from '../assets/pivot_assembly.png';

const Assembly = () => {
  const steps = [
    {
      icon: <Truck size={22} />,
      title: 'Helyszíni szállítás és előkészítés',
      desc: 'Az Opal Pivot rendszerelemek biztonságos szállítása közvetlenül a szántóföldre, a szerelési pontok kijelölése és az alkatrészek csoportosítása.'
    },
    {
      icon: <Hammer size={22} />,
      title: 'Szerkezeti összeszerelés',
      desc: 'A horganyzott acél tornyok és fesztávok összeszerelése a földön, majd darus emeléssel történő felállítása és rögzítése a központi betonalaphoz.'
    },
    {
      icon: <Settings size={22} />,
      title: 'Gépészeti és IoT bekötés',
      desc: 'A meghajtó motorok, kerekek, hajtóművek felszerelése, a vízelosztó csövek és szórófejek rögzítése, valamint az elektromos vezérlés bekötése.'
    },
    {
      icon: <CheckSquare size={22} />,
      title: 'Nyomáspróba és kalibráció',
      desc: 'A vízellátó hálózat nyomáspróbája, a fúvókák finomhangolása, a távvezérlés tesztelése és a kész rendszer átadása üzemeltetési oktatással.'
    }
  ];

  return (
    <section id="assembly" className="assembly-section section">
      <div className="container assembly-container">
        <motion.div 
          className="assembly-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="assembly-tag">Kivitelezés</span>
          <h2 className="assembly-title">Helyszíni <span>Összeszerelés</span></h2>
          <p className="assembly-description">
            Saját gépparkkal és szakképzett szerelőcsapattal vállaljuk a körforgó és lineáris öntözőberendezések teljes körű helyszíni összeszerelését, csőhálózatok kiépítését és üzembe helyezését. Garantáljuk a mérnöki pontosságú, biztonságos telepítést.
          </p>

          <div className="assembly-steps">
            {steps.map((step, index) => (
              <div key={index} className="assembly-step-item">
                <div className="assembly-step-number">{index + 1}</div>
                <div className="assembly-step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="assembly-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="assembly-img-border">
            <img src={assemblyImg} alt="Opal Pivot öntözőrendszer helyszíni összeszerelése szántóföldön" className="assembly-img-actual" />
            <div className="assembly-accent-badge">
              <span>Saját gépparkkal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Assembly;
