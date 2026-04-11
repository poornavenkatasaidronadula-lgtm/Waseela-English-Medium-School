import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone } from 'lucide-react';
import './AdmissionPopup.css';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: '',
    mobile: '',
    email: '',
    city: '',
    branch: '',
  });

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setForm({ parentName: '', mobile: '', email: '', city: '', branch: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Popup centered container */}
          <div className="popup-center">
          <motion.div
            className="popup-wrapper"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Left Panel */}
            <div className="popup-left">
              <img
                src="/campus/DSC01826.JPG"
                alt="Admission guidance"
                className="popup-img"
              />
              <div className="popup-left-overlay">
                <h2 className="popup-left-title">
                  Were you able to find the information you were looking for?
                </h2>
                <p className="popup-left-desc">
                  Choosing the right school for your child is an important decision.
                  If you still have questions about admissions, curriculum, fees, or
                  facilities — we're here to help.
                </p>
                <ul className="popup-features">
                  {[
                    'Dedicated Admissions Team',
                    'Personalized Guidance',
                    'Response within 24 Hours',
                  ].map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} className="popup-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Panel */}
            <div className="popup-right">
              {/* Close button */}
              <button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close">
                <X size={18} />
              </button>

              {submitted ? (
                <div className="popup-success">
                  <div className="popup-success-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Our admissions team will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <p className="popup-tagline">
                    We're here to help you make the right choice for your child.
                  </p>
                  <h3 className="popup-form-title">Get Personalised Admission Guidance</h3>
                  <p className="popup-form-desc">
                    Share your details below and our admissions experts will get in touch
                    with you to guide you personally.
                  </p>

                  <form className="popup-form" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Parent's full name *"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                      className="popup-input"
                    />

                    <div className="popup-row">
                      <div className="popup-phone-prefix">
                        <Phone size={14} />
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile number *"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        className="popup-input popup-mobile"
                        maxLength={10}
                      />
                    </div>

                    <div className="popup-row">
                      <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className="popup-select"
                      >
                        <option value="" disabled>Select City *</option>
                        <option>Anantapur</option>
                      </select>
                      <select
                        name="branch"
                        value={form.branch}
                        onChange={handleChange}
                        required
                        className="popup-select"
                      >
                        <option value="" disabled>Select Branch *</option>
                        <option>Main Branch</option>
                      </select>
                    </div>

                    <button type="submit" className="popup-btn">
                      Request a Call Back
                    </button>

                    <p className="popup-note">
                      We'll contact you shortly to answer your questions and help you
                      with admissions.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
