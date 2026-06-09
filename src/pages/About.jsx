import { Link } from 'react-router-dom';
import { BookOpen, Target, Heart, Users, Star, CheckCircle } from 'lucide-react';
import { FadeUp, StaggerParent, StaggerChild } from '../components/Animations';
import SEO from '../components/SEO';
import './About.css';

const values = [
  { icon: <BookOpen size={22} />, title: 'Academic Excellence', desc: 'Rigorous, CBSE-aligned education that prepares students for competitive success.' },
  { icon: <Heart size={22} />, title: 'Compassion & Care', desc: 'We treat every child with warmth, patience, and individual attention.' },
  { icon: <Star size={22} />, title: 'Integrity & Discipline', desc: 'Building strong character through honesty, punctuality, and self-discipline.' },
  { icon: <Users size={22} />, title: 'Inclusive Community', desc: 'A welcoming school for all backgrounds, cultures, and abilities.' },
];

const team = [
  { name: 'The Principal', role: 'Principal & Academic Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&face' },
  { name: 'Head of Academics', role: 'Senior Academic Coordinator', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&face' },
  { name: 'Head of Arts', role: 'Co-curricular Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&face' },
];



export default function About() {
  return (
    <div>
      <SEO 
        title="About Us"
        description="Learn about the history, mission, and vision of Waseela English Medium School. Quality education based on discipline and core values in Anantapur."
        url="/about"
      />
      {/* Page Header */}
      <div className="page-header">
        <div className="container page-header-content">
          <h1>About Us</h1>
          <p>Nurturing young minds in the heart of Anantapur</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <FadeUp>
              <div className="about-img-group">
                <img
                  src="/campus/DSC01827.JPG"
                  alt="School campus"
                  className="about-intro-img main"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <div className="section-tag"><BookOpen size={12} /> Our Story</div>
                <h2 className="section-title">Building Strong Foundations for Lifelong Success</h2>
                <div className="gold-divider" />
                <p style={{ marginBottom: 18 }}>
                  Waseela English Medium School is committed to providing quality education that empowers students to excel in academics
                  while developing confidence, discipline, leadership, and compassion.
                </p>
                <p style={{ marginBottom: 18 }}>
                  Today, we proudly serve over 300 students from Nursery to Class X, maintaining our founding commitment to academic excellence,
                  strong values, and holistic development.
                </p>
                <p>
                  Our school is more than an institution — it is a community where every child is valued, every dream is nurtured, and every milestone is celebrated.
                </p>
                <div style={{ display: 'flex', gap: 24, marginTop: 36, flexWrap: 'wrap' }}>
                  <div className="about-stat">
                    <div className="about-stat-num">300+</div>
                    <div className="about-stat-label">Students</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-num">25+</div>
                    <div className="about-stat-label">Teachers</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-num">10+</div>
                    <div className="about-stat-label">Facilities</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Target size={12} /> Our Purpose</div>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <div className="mv-grid" style={{ marginTop: 56 }}>
            <FadeUp delay={0.1}>
              <div className="mv-card mission">
                <div className="mv-icon"><Target size={28} /></div>
                <h3>Our Mission</h3>
                <p>
                  Provide quality education through innovative teaching methods and foster creativity, leadership, and strong values.
                </p>
                <ul className="mv-list">
                  <li><CheckCircle size={14} /> Foster academic excellence and curiosity</li>
                  <li><CheckCircle size={14} /> Build strong character and values</li>
                  <li><CheckCircle size={14} /> Encourage creativity and innovation</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mv-card vision">
                <div className="mv-icon"><Star size={28} /></div>
                <h3>Our Vision</h3>
                <p>
                  To create a generation of confident, knowledgeable, and responsible individuals.
                </p>
                <ul className="mv-list">
                  <li><CheckCircle size={14} /> World-class education for every child</li>
                  <li><CheckCircle size={14} /> Leaders in holistic development</li>
                  <li><CheckCircle size={14} /> Community of lifelong learners</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Heart size={12} /> Core Values</div>
            <h2 className="section-title">What We Stand For</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <StaggerParent className="grid-4" style={{ marginTop: 56 }}>
            {values.map(v => (
              <StaggerChild key={v.title}>
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Principal Message */}
      <section className="section principal-section">
        <div className="container">
          <FadeUp>
            <div className="principal-message">
              <div className="section-tag"><Star size={12} /> From the Desk of</div>
              <h2 className="section-title">Principal's Message</h2>
              <div className="gold-divider" />
              <div className="principal-quote">"</div>
              <p>
                We strive to create an environment where every child feels inspired to learn, explore, and achieve.
              </p>
              <div className="principal-signature">— The Principal, Waseela English Medium School</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Board Of Directors Message */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <FadeUp>
            <div className="principal-message">
              <div className="section-tag"><Star size={12} /> Leadership</div>
              <h2 className="section-title">Board of Directors' Message</h2>
              <div className="gold-divider" />
              <div className="principal-quote">"</div>
              <p>
                Our vision is to build a foundation of excellence where modern education meets strong moral values. We are committed to providing world-class facilities and empowering every student to become a confident, responsible, and successful leader of tomorrow.
              </p>
              <div className="principal-signature">— Board of Directors, Waseela English Medium School</div>
            </div>
          </FadeUp>
        </div>
      </section>


    </div>
  );
}
