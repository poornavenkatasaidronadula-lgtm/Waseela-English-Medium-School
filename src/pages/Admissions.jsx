import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, User, Phone, Mail, ChevronDown, Send } from 'lucide-react';
import { FadeUp, StaggerParent, StaggerChild } from '../components/Animations';
import SEO from '../components/SEO';
import './Admissions.css';

const steps = [
  { num: '01', icon: <Phone size={22} />, title: 'Submit Enquiry', desc: 'Fill out our simple online form or call us to express your interest in admissions.' },
  { num: '02', icon: <User size={22} />, title: 'Visit Campus', desc: 'Parents and children are invited for a guided campus tour and a meeting with our faculty.' },
  { num: '03', icon: <FileText size={22} />, title: 'Complete Application', desc: 'Submit the formal application form along with the necessary supporting documents.' },
  { num: '04', icon: <CheckCircle size={22} />, title: 'Confirm Admission', desc: 'Receive your confirmation letter and complete the fee payment to secure the seat.' },
];

const eligibility = [
  { class: 'Nursery', age: '3 – 4 years' },
  { class: 'LKG', age: '4 – 5 years' },
  { class: 'UKG', age: '5 – 6 years' },
  { class: 'Class I', age: '6 – 7 years' },
  { class: 'Class II – V', age: 'As per previous class' },
  { class: 'Class VI – X', age: 'Merit + Assessment' },
];

const documents = [
  'Birth Certificate (Original + Copy)',
  'Passport Size Photographs (4 copies)',
  'Previous School Transfer Certificate (TC)',
  'Previous Year Report Card / Marksheet',
  'Aadhaar Card (Child & Parent)',
  'Parent / Guardian ID Proof',
  'Caste Certificate (if applicable)',
  'Medical / Vaccination Record (Pre-Primary)',
];

const classes = ['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];

export default function Admissions() {
  const [form, setForm] = useState({ studentName: '', dob: '', applyClass: '', fatherName: '', motherName: '', phone: '', email: '', address: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const message = `----------------------------------------
🎓 NEW ADMISSION INQUIRY 🎓
----------------------------------------

👤 Student Details
• Name: ${form.studentName}
• DOB: ${form.dob}
• Class Applied: ${form.applyClass}

👨‍👩‍👦 Parent Details
• Father's Name: ${form.fatherName}
• Mother's Name: ${form.motherName || 'N/A'}
• Contact Number: ${form.phone}
• Email: ${form.email || 'N/A'}

🏠 Address
${form.address}

📝 Additional Message
${form.message || 'N/A'}

----------------------------------------`;

    const whatsappNumber = '919030499487';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div>
      <SEO 
        title="Admissions"
        description="Apply for admissions at Waseela English Medium School. Simple 4-step admission process for Nursery to Class X. Seats are limited, apply today."
        url="/admissions"
      />
      <div className="page-header">
        <div className="container page-header-content">
          <h1>Admissions</h1>
          <p>Begin your child's journey with Waseela — seats are limited, apply today.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Admissions</span>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><FileText size={12} /> How to Apply</div>
            <h2 className="section-title">Simple 4-Step Admission Process</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">We've made the admission process smooth and transparent for every family.</p>
          </FadeUp>
          <div className="steps-container" style={{ marginTop: 64 }}>
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="step-card">
                  <div className="step-num">{step.num}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {i < steps.length - 1 && <div className="step-connector" />}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="elig-grid">
            <FadeUp>
              <div className="section-tag"><CheckCircle size={12} /> Eligibility</div>
              <h2 className="section-title">Age Criteria</h2>
              <div className="gold-divider" />
              <div className="elig-table">
                <div className="elig-table-header">
                  <span>Class</span><span>Age Requirement</span>
                </div>
                {eligibility.map(e => (
                  <div key={e.class} className="elig-table-row">
                    <span>{e.class}</span><span>{e.age}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="section-tag"><FileText size={12} /> Documents Required</div>
              <h2 className="section-title">What to Bring</h2>
              <div className="gold-divider" />
              <ul className="doc-list">
                {documents.map(d => (
                  <li key={d}>
                    <CheckCircle size={15} color="var(--secondary)" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Online Form */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Send size={12} /> Online Application</div>
            <h2 className="section-title">Apply Now</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">Fill in the form below and we'll get in touch with you within 24 hours.</p>
          </FadeUp>

          <FadeUp style={{ marginTop: 56 }}>
            <div className="admission-form-card glass-card">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">🎉</div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for applying to Waseela English Medium School. Our admissions team will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: 24 }}>
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-section-title">Student Information</div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Student's Full Name *</label>
                      <input className="form-input" type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Enter student's full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date of Birth *</label>
                      <input className="form-input" type="date" name="dob" value={form.dob} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Applying for Class *</label>
                      <div className="select-wrap">
                        <select className="form-select" name="applyClass" value={form.applyClass} onChange={handleChange} required>
                          <option value="">Select Class</option>
                          {classes.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <ChevronDown size={16} className="select-arrow" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Father's Name *</label>
                      <input className="form-input" type="text" name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Enter father's name" required />
                    </div>
                  </div>
                  <div className="form-section-title">Contact Details</div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Mother's Name</label>
                      <input className="form-input" type="text" name="motherName" value={form.motherName} onChange={handleChange} placeholder="Enter mother's name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number *</label>
                      <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Residential Address *</label>
                      <input className="form-input" type="text" name="address" value={form.address} onChange={handleChange} placeholder="Full residential address" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Message</label>
                    <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Any questions or special requirements..." rows={4} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} disabled={loading}>
                    {loading ? 'Submitting…' : <><Send size={16} /> Submit Application</>}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
