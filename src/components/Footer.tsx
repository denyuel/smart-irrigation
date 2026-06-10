import { Droplet, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <Droplet className="logo-icon" size={26} />
            <span>Szántóföldi</span> Öntözés
          </a>
          <p className="footer-desc">
            Precíziós mezőgazdasági és szántóföldi öntözőrendszerek tervezése és kivitelezése. Fenntartható vízgazdálkodás, termékenyebb jövő.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-col">
            <h4>Navigáció</h4>
            <ul>
              <li><a href="#home">Kezdőlap</a></li>
              <li><a href="#services">Szolgáltatások</a></li>
              <li><a href="#calculator">Kalkulátor</a></li>
              <li><a href="#benefits">Előnyök</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Szolgáltatások</h4>
            <ul>
              <li><a href="#services">Körforgó Pivot Rendszerek</a></li>
              <li><a href="#services">Lineáris Öntözőrendszerek</a></li>
              <li><a href="#services">Okos vezérlés & IoT</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Kapcsolat</h4>
            <ul className="footer-contact-details">
              <li>fferike027@gmail.com</li>
              <li>06 30 507 5057</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} szantofoldiontozes.hu. Minden jog fenntartva.
          </p>
          <button onClick={handleScrollToTop} className="btn-scroll-top" aria-label="Vissza a lap tetejére">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
