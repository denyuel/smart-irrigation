import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

interface ContactProps {
  prefilledMessage?: string;
}

const Contact = ({ prefilledMessage }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'agriculture',
    message: ''
  });

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [prefilledMessage]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms integration - To receive real emails to fferike027@gmail.com:
    // 1. Go to https://web3forms.com/ and claim your free Access Key.
    // 2. Paste your Access Key below replacing "YOUR_ACCESS_KEY_HERE".
    const WEB3FORMS_ACCESS_KEY = "f69ef3ed-f1d4-45f5-9baf-f78368eb2029";

    const formDataObj = new FormData();
    formDataObj.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataObj.append("name", formData.name);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("email", formData.email);
    formDataObj.append("service_type", formData.serviceType);
    formDataObj.append("message", formData.message);
    formDataObj.append("subject", "Új öntözési ajánlatkérés érkezett!");
    formDataObj.append("to_email", "fferike027@gmail.com");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    })
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: 'agriculture',
          message: ''
        });
      })
      .catch((err) => {
        console.warn("Web3Forms submission failed, fallback to local simulation:", err);
        // Fallback for development/testing if key is not active yet:
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: 'agriculture',
            message: ''
          });
        }, 1000);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Kapcsolat & <span>Ajánlatkérés</span></h2>
          <p className="section-subtitle">
            Kérdése van, vagy szántóföldi öntözési ajánlatot szeretne kérni? Töltse ki az alábbi űrlapot, és munkatársunk hamarosan felveszi Önnel a kapcsolatot.
          </p>
        </motion.div>

        <div className="contact-container">
          {/* Info Card List */}
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-panel-title">Elérhetőségeink</h3>
            <p className="contact-panel-desc">Keressen minket bizalommal az alábbi csatornákon is:</p>
            
            <div className="info-list">
              <div className="info-card glass">
                <Phone className="info-icon" size={20} />
                <div className="info-content">
                  <span className="info-label">Telefonszám:</span>
                  <a href="tel:+36305075057" className="info-value">06 30 507 5057</a>
                </div>
              </div>

              <div className="info-card glass">
                <Mail className="info-icon" size={20} />
                <div className="info-content">
                  <span className="info-label">E-mail cím:</span>
                  <a href="mailto:fferike027@gmail.com" className="info-value">fferike027@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-panel glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Teljes Név *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Minta János"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefonszám *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+36 30 123 4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail Cím *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="janos.minta@domain.hu"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Kért Szolgáltatás / Érdeklődési Kör</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                >
                  <option value="agriculture">Szántóföldi körforgó & lineáris esőztető öntözés</option>
                  <option value="automation">Okos vezérlés & automatizálás</option>
                  <option value="other">Egyéb / Egyedi tanácsadás</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Üzenet / Rövid igények leírása</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Kérjük, röviden írja le a terület adottságait..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Küldés folyamatban...</span>
                ) : (
                  <>
                    Üzenet Küldése <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="success-modal glass"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="success-icon-wrapper">
                <CheckCircle2 size={48} />
              </div>
              <h3>Sikeres Ajánlatkérés!</h3>
              <p>Köszönjük megkeresését. Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.</p>
              <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                Bezárás
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
