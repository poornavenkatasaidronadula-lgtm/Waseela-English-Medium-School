import { Link } from 'react-router-dom';
import { BookOpen, Dumbbell, Cpu, Shield, FlaskConical, Bus, AirVent, Wifi } from 'lucide-react';
import { FadeUp, StaggerParent, StaggerChild } from '../components/Animations';
import SEO from '../components/SEO';
import './Facilities.css';

const facilities = [
  {
    icon: <Cpu size={32} />,
    title: 'Smart Classrooms',
    desc: 'Every classroom is equipped with HD interactive smart boards, projectors, and digital teaching tools that make learning visual, engaging, and effective.',
    features: ['Interactive Smart Boards', 'HD Projectors', 'Digital Learning Apps', 'Ergonomic Furniture'],
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Modern Library',
    desc: 'A curated collection of books across all subjects and genres, plus digital resources, periodicals, and a quiet reading lounge for focused study.',
    features: ['Digital Resources & E-Books', 'Quiet Study Lounge', 'Regular Book Additions'],
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
  },
  {
    icon: <Dumbbell size={32} />,
    title: 'Sports Ground',
    desc: 'A spacious, well-maintained playground that supports cricket, football, kabaddi, basketball, and athletics — promoting physical fitness and teamwork.',
    features: ['Cricket & Football Fields', 'Kabaddi Ground', 'Indoor Games Room'],
    img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
  },
  {
    icon: <FlaskConical size={32} />,
    title: 'Science Lab',
    desc: 'A fully equipped science laboratory where students conduct real experiments in Physics, Chemistry, and Biology — bringing textbook concepts to life.',
    features: ['Physics Lab Equipment', 'Chemistry Lab with Safety Gear', 'Biology Specimens & Microscopes', 'Trained Lab Assistants'],
    img: '/science_lab.png',
  },
  {
    icon: <Shield size={32} />,
    title: 'Safety & Security',
    desc: 'A comprehensive campus security system ensuring the highest standards of child safety at all times — giving parents complete peace of mind.',
    features: ['24/7 CCTV Surveillance', 'Trained Security Personnel', 'Biometric Entry System', 'Emergency Response Plan'],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  },
  {
    icon: <Wifi size={32} />,
    title: 'Computer Lab',
    desc: 'A modern computer laboratory with high-speed internet, age-appropriate software, and structured lessons in digital literacy and coding basics.',
    features: ['High-Speed Broadband', 'Coding & Digital Literacy', 'Safe Internet Filters'],
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
  },
];

const highlights = [
  { icon: <Bus size={22} />, title: 'School Transport', desc: 'Safe and reliable transport routes covering key areas of Anantapur.' },
  { icon: <AirVent size={22} />, title: 'AC Classrooms', desc: 'All classrooms are fully air-conditioned, ensuring a comfortable learning environment throughout the year.' },
  { icon: <Wifi size={22} />, title: 'Campus Wi-Fi', desc: 'High-speed internet across the campus for research and digital learning.' },
  { icon: <Shield size={22} />, title: 'First Aid Room', desc: 'A dedicated medical room with trained first aid staff for student welfare.' },
];

export default function Facilities() {
  return (
    <div>
      <SEO 
        title="Facilities"
        description="Discover the world-class facilities at Waseela English Medium School including smart classrooms, a modern library, science labs, and sports grounds."
        url="/facilities"
      />
      <div className="page-header">
        <div className="container page-header-content">
          <h1>Facilities</h1>
          <p>World-class infrastructure built to inspire and enable every learner</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Facilities</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Shield size={12} /> Our Campus</div>
            <h2 className="section-title">Infrastructure Built for Excellence</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle" style={{ maxWidth: 700, margin: '0 auto' }}>
              At Waseela, we believe the environment shapes the learner. Our facilities are designed not just for functionality, but to inspire curiosity, creativity, and confidence in every student.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Facilities — alternating layout */}
      <section className="section">
        <div className="container">
          {facilities.map((f, i) => (
            <FadeUp key={f.title}>
              <div className={`facility-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="facility-img-wrap">
                  <img src={f.img} alt={f.title} />
                  <div className="facility-icon-badge">
                    {f.icon}
                  </div>
                </div>
                <div className="facility-content">
                  <div className="section-tag" style={{ marginBottom: 12 }}>{f.title}</div>
                  <h3 className="facility-title">{f.title}</h3>
                  <div className="gold-divider" />
                  <p style={{ marginBottom: 24 }}>{f.desc}</p>
                  <div className="facility-features">
                    {f.features.map(feat => (
                      <div key={feat} className="facility-feature-item">
                        <div className="facility-feat-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Additional Highlights */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))' }}>
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px', background: 'rgba(200,169,81,0.18)', color: 'var(--secondary)' }}>
              <Shield size={12} /> Also Available
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>Additional Campus Highlights</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <StaggerParent className="grid-4" style={{ marginTop: 56 }}>
            {highlights.map(h => (
              <StaggerChild key={h.title}>
                <div className="highlight-card">
                  <div className="highlight-icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Visit Our Campus</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle" style={{ margin: '0 auto 36px', maxWidth: 540 }}>
              Experience our facilities in person. Schedule a campus visit and let your child discover their new learning home.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Schedule a Visit</Link>
              <Link to="/admissions" className="btn btn-outline-green">Apply for Admission</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
