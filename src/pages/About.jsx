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
              <p style={{ marginBottom: 16 }}>
                Dear Parents, Students, and Visitors,
              </p>
              <p style={{ marginBottom: 16 }}>
                It is my pleasure to welcome you to Waseela English Medium School, where learning is nurtured with care, dedication, and excellence. We believe that education is the foundation upon which successful futures are built, and our goal is to provide every student with the knowledge, skills, and values needed to thrive in an ever-changing world.
              </p>
              <p style={{ marginBottom: 16 }}>
                At Waseela English Medium School, we strive to create a positive and stimulating learning environment where students feel encouraged to explore their potential, develop their talents, and achieve academic excellence. Our dedicated teachers work tirelessly to inspire curiosity, creativity, critical thinking, and a lifelong passion for learning.
              </p>
              <p style={{ marginBottom: 16 }}>
                While academic achievement remains an important focus, we equally emphasize character building, discipline, leadership, and social responsibility. We believe that true education shapes not only the mind but also the heart, helping students grow into confident, compassionate, and responsible individuals.
              </p>
              <p style={{ marginBottom: 16 }}>
                Our school is committed to fostering strong partnerships between parents, teachers, and students. Together, we can create an environment that supports holistic development and empowers every child to reach their highest potential.
              </p>
              <p style={{ marginBottom: 32 }}>
                I invite you to become a part of the Waseela family and join us in our mission of nurturing young minds, building strong character, and shaping bright futures.<br /><br />
                Thank you for your trust and support. We look forward to guiding our students on their journey toward excellence and success.
              </p>
              <div className="principal-signature">
                Warm Regards,<br /><br />
                — The Principal, Waseela English Medium School
              </div>
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
              <p style={{ marginBottom: 16 }}>
                Dear Parents, Students, and Well-Wishers,
              </p>
              <p style={{ marginBottom: 16 }}>
                Welcome to Waseela English Medium School, a place where education goes beyond textbooks and classrooms. Our vision is to provide every child with a strong foundation of knowledge, character, and confidence that prepares them for a successful future.
              </p>
              <p style={{ marginBottom: 16 }}>
                We believe that every child possesses unique talents and abilities. Our responsibility is to nurture these qualities through quality education, innovative teaching methods, and a supportive learning environment. Along with academic excellence, we emphasize discipline, integrity, compassion, and leadership—values that help students become responsible citizens and future leaders.
              </p>
              <p style={{ marginBottom: 16 }}>
                At Waseela English Medium School, we are committed to creating an atmosphere where students are encouraged to think creatively, explore new ideas, and develop a lifelong love for learning. Our dedicated faculty and staff work tirelessly to ensure that every student receives the guidance, encouragement, and opportunities needed to reach their full potential.
              </p>
              <p style={{ marginBottom: 16 }}>
                Education is a partnership between the school and parents. Together, we can provide our children with the best possible environment for growth and success. We thank all parents for their trust and support and invite you to be a part of our journey in shaping bright futures.
              </p>
              <p style={{ marginBottom: 32 }}>
                We look forward to inspiring young minds, building strong character, and creating future leaders who will make a positive impact on society.
              </p>
              <div className="principal-signature">
                Best Wishes,<br /><br />
                — Board of Directors, Waseela English Medium School
              </div>
            </div>
          </FadeUp>
        </div>
      </section>


    </div>
  );
}
