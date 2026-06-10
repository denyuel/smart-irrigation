import { motion } from 'framer-motion';
import { Sprout, Droplet, Zap, ArrowRight } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Smart Agricultural Solutions</span>
          <h1 className="hero-title">
            Intelligens öntözés <br />
            <span>a fenntartható jövőért</span>
          </h1>
          <p className="hero-description">
            Optimalizálja a vízfelhasználást és maximalizálja a terméshozamot automata, precíziós csepegtető és esőztető öntözőrendszereinkkel. Tervezés, telepítés és okos vezérlés egy helyen.
          </p>
          <div className="hero-btns">
            <a href="#calculator" className="btn btn-primary">
              Vízigény Kalkulátor <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Kérjen Ajánlatot
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon-wrapper green">
                <Sprout size={20} />
              </div>
              <span>40% Vízmegtakarítás</span>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper blue">
                <Droplet size={20} />
              </div>
              <span>Optimális növekedés</span>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper orange">
                <Zap size={20} />
              </div>
              <span>Automata IoT vezérlés</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-wrapper">
             <img src={heroImg} alt="Smart crop field irrigation system" className="hero-img-actual" />
             <div className="hero-shape-decorator"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
