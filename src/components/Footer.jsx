import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top strip */}
      <div className="footer-top-strip">
        <div className="container">
          <div className="footer-strip-inner">
            <span>📞 +91 7901314488 &nbsp;|&nbsp; +91 7093417793</span>
            <span>✉️ Waseelaenglishmediumschool@gmail.com</span>
            <span>⏰ Mon – Sat: 9AM – 4PM</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/Logo.png" alt="Waseela English Medium School" className="footer-logo-img" />
              </div>
              <p>Shaping young minds for a better future through quality education, discipline, and strong values since our founding.</p>
              <div className="footer-socials">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <FaFacebook size={16} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/academics', label: 'Academics' },
                  { to: '/admissions', label: 'Admissions' },
                  { to: '/facilities', label: 'Facilities' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/contact', label: 'Contact Us' },
                ].map(l => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Classes */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Classes</h4>
              <ul className="footer-links">
                {['Nursery & LKG / UKG', 'Class I – II', 'Class III – V', 'Class VI – VIII', 'Class IX – X', 'Extra-Curricular', 'Digital Learning'].map(c => (
                  <li key={c}><span className="footer-link-plain">→ {c}</span></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={15} className="contact-icon" />
                  <span>KVS Nagar, NTR Marg, Near Tadipatri Road, Old Town, Anantapur, AP</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} className="contact-icon" />
                  <div>
                    <a href="tel:+917901314488">+91 7901314488</a><br />
                    <a href="tel:+917093441703">+91 7093441703</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <Mail size={15} className="contact-icon" />
                  <a href="mailto:Waseelaenglishmediumschool@gmail.com" style={{ fontSize: '0.8rem' }}>
                    Waseelaenglishmediumschool@gmail.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <Clock size={15} className="contact-icon" />
                  <span>Mon – Sat: 9:00 AM – 4:00 PM<br />Sunday: Holiday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Waseela English Medium School. All rights reserved.</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              KVS Nagar, Anantapur, Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
