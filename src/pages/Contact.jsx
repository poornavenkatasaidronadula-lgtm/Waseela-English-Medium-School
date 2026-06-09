import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FadeUp } from '../components/Animations';
import SEO from '../components/SEO';
import './Contact.css';

const info = [
  {
    icon: <MapPin size={24} />,
    title: 'Our Address',
    lines: ['KVS Nagar, NTR Marg,', 'Near Tadipatri Road,', 'Old Town, Anantapur — 515001', 'Andhra Pradesh, India'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone Numbers',
    lines: ['+91 7901314488', '+91 7093417793'],
    links: ['tel:+917901314488', 'tel:+917093417793'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Address',
    lines: ['Waseelaenglishmediumschool@gmail.com'],
    links: ['mailto:Waseelaenglishmediumschool@gmail.com'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Office Hours',
    lines: ['Monday – Saturday: 9:00 AM – 4:00 PM', 'Sunday: Closed (Holiday)'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Contact Waseela English Medium School in Anantapur. Address: KVS Nagar, NTR Marg. Call us at +91 7901314488."
        url="/contact"
      />
      <div className="page-header">
        <div className="container page-header-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — reach out anytime and we'll respond promptly.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Phone size={12} /> Get In Touch</div>
            <h2 className="section-title">We're Here for You</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">Have a question about admissions, academics, or anything else? Don't hesitate to reach out.</p>
          </FadeUp>
          <div className="contact-cards-grid" style={{ marginTop: 56 }}>
            {info.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="contact-info-card">
                  <div className="contact-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <div className="contact-card-lines">
                    {item.lines.map((line, j) => (
                      item.links ? (
                        <a key={j} href={item.links[j]} className="contact-link">{line}</a>
                      ) : (
                        <span key={j}>{line}</span>
                      )
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <FadeUp>
              <div className="contact-form-wrap">
                <div className="section-tag"><Send size={12} /> Send a Message</div>
                <h2 className="section-title">Write to Us</h2>
                <div className="gold-divider" />

                {submitted ? (
                  <div className="contact-success">
                    <CheckCircle size={48} color="var(--secondary)" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button className="btn btn-outline-green" style={{ marginTop: 20 }} onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <input className="form-input" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Admission Enquiry, General Query..." required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Your Message *</label>
                      <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." rows={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                      {loading ? 'Sending…' : <><Send size={16} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* Map + Socials */}
            <FadeUp delay={0.15}>
              <div className="contact-right">
                <div className="map-wrap">
                  <iframe
                    title="Waseela School Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437.02456789!2d77.5942!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b1e1234abcd%3A0x567ef89abcdeff01!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="320"
                    style={{ border: 0, borderRadius: 'var(--radius-md)', display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Quick Contact */}
                <div className="quick-contact-card">
                  <h4>Quick Contact</h4>
                  <div className="quick-links">
                    <a href="tel:+917901314488" className="quick-link-btn call">
                      <Phone size={18} /> Call: +91 7901314488
                    </a>
                    <a
                      href="https://wa.me/917901314488?text=Hello%2C%20I%20have%20a%20query%20about%20Waseela%20School."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quick-link-btn whatsapp"
                    >
                      💬 WhatsApp Us
                    </a>
                    <a href="mailto:Waseelaenglishmediumschool@gmail.com" className="quick-link-btn email">
                      <Mail size={18} /> Email Us
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="socials-card">
                  <h4>Follow Us</h4>
                  <div className="social-links-row">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-item instagram">
                      <FaInstagram size={20} /> Instagram
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-item facebook">
                      <FaFacebook size={20} /> Facebook
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
