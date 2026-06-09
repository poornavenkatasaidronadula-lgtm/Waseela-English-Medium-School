import { Link } from 'react-router-dom';
import { BookOpen, Microscope, Palette, Dumbbell, Music, Globe } from 'lucide-react';
import { FadeUp, StaggerParent, StaggerChild } from '../components/Animations';
import SEO from '../components/SEO';
import './Academics.css';

const classes = [
  {
    level: 'Pre-Primary',
    classes: 'Nursery · LKG · UKG',
    emoji: '🌱',
    age: 'Ages 3 – 5',
    color: '#E8F5E9',
    subjects: ['English Language', 'Basic Numeracy', 'Environmental Awareness', 'Arts & Crafts', 'Physical Play'],
    desc: 'A play-based learning environment that builds curiosity, language skills, and social confidence in young learners.',
  },
  {
    level: 'Primary School',
    classes: 'Class I – V',
    emoji: '📖',
    age: 'Ages 6 – 11',
    color: '#FFF8E1',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi / Telugu', 'Computer Basics'],
    desc: 'Strong foundational education developing literacy, numeracy, and scientific thinking through interactive lessons.',
  },
  {
    level: 'Upper Primary',
    classes: 'Class VI – VIII',
    emoji: '🔬',
    age: 'Ages 12 – 14',
    color: '#E3F2FD',
    subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'Computer Science'],
    desc: 'Deepening subject knowledge with analytical thinking, lab experiments, and project-based learning.',
  },
  {
    level: 'High School Programs',
    classes: 'Class IX – X',
    emoji: '🎓',
    age: 'Ages 15 – 16',
    color: '#F3E5F5',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi / Telugu', 'Information Technology'],
    desc: 'Rigorous CBSE board preparation with focused academics, mock exams, and personalised mentor support.',
  },
];

const activities = [
  { icon: <Palette size={24} />, title: 'Arts & Crafts', desc: 'Painting, drawing, sculpture — nurturing artistic expression and creativity.' },
  { icon: <Dumbbell size={24} />, title: 'Sports & Athletics', desc: 'Cricket, football, kabaddi, and athletics for physical fitness and teamwork.' },

  { icon: <Globe size={24} />, title: 'Debates & Quiz', desc: 'Interschool competitions sharpening communication, reasoning, and general knowledge.' },
  { icon: <Microscope size={24} />, title: 'Science Club', desc: 'Hands-on experiments and projects that make science exciting and relevant.' },
  { icon: <BookOpen size={24} />, title: 'Reading Club', desc: 'A love of reading fostered through guided library sessions and storytelling events.' },
];

const methodology = [
  { num: '01', title: 'Concept-First Learning', desc: 'We build deep understanding of core concepts before moving to application and exam preparation.' },
  { num: '02', title: 'Collaborative Classrooms', desc: 'Group projects, peer learning, and discussions that develop critical thinking and communication skills.' },
  { num: '03', title: 'Digital Integration', desc: 'Smart boards, educational apps, and multimedia resources enhance every lesson.' },
  { num: '04', title: 'Regular Assessments', desc: 'Continuous evaluation through unit tests, projects, and formative feedback — not just final exams.' },
];

export default function Academics() {
  return (
    <div>
      <SEO 
        title="Academics"
        description="Our holistic curriculum from Nursery to Class X is built for 21st-century learners. CBSE-aligned education with a strong teaching methodology."
        url="/academics"
      />
      <div className="page-header">
        <div className="container page-header-content">
          <h1>Academics</h1>
          <p>A holistic curriculum from Nursery to Class X built for 21st-century learners</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Academics</span>
          </div>
        </div>
      </div>

      {/* Curriculum Overview */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><BookOpen size={12} /> Curriculum</div>
            <h2 className="section-title">Classes &amp; Programme Overview</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">Each stage is carefully designed to build upon the last — guiding students from curiosity to confidence.</p>
          </FadeUp>
          <StaggerParent className="academics-grid" style={{ marginTop: 56 }}>
            {classes.map((cls) => (
              <StaggerChild key={cls.level}>
                <div className="academic-card" style={{ '--card-accent': cls.color }}>
                  <div className="academic-card-header">
                    <div className="academic-emoji">{cls.emoji}</div>
                    <div>
                      <div className="academic-level">{cls.level}</div>
                      <div className="academic-classes">{cls.classes}</div>
                    </div>
                    <span className="badge badge-green" style={{ marginLeft: 'auto' }}>{cls.age}</span>
                  </div>
                  <p className="academic-desc">{cls.desc}</p>

                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="methodology-grid">
            <FadeUp>
              <div className="section-tag"><Microscope size={12} /> Our Approach</div>
              <h2 className="section-title">Teaching Methodology</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: 40 }}>
                We believe in learning by doing. Our teaching blends traditional rigour with modern pedagogy — creating classrooms that are dynamic, inclusive, and deeply effective.
              </p>
              <div className="method-list">
                {methodology.map(m => (
                  <div key={m.num} className="method-item">
                    <div className="method-num">{m.num}</div>
                    <div>
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="methodology-img">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=580&h=620&fit=crop"
                  alt="Teaching methodology"
                />
                <div className="method-highlight glass-card">
                  <div className="method-h-num">98%</div>
                  <div className="method-h-label">Board Exam Pass Rate</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Holistic Banner */}
      <section className="holistic-banner">
        <div className="container">
          <FadeUp className="text-center">
            <h2>Holistic Development Approach</h2>
            <p>We educate the whole child — mind, body, and character.</p>
            <div className="holistic-pillars">
              {['Academic Excellence', 'Physical Fitness', 'Creative Arts', 'Moral Values', 'Digital Literacy'].map(p => (
                <div key={p} className="holistic-pill">{p}</div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Activities */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Palette size={12} /> Beyond Academics</div>
            <h2 className="section-title">Co-Curricular Activities</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">Education extends beyond the classroom — we build well-rounded individuals through diverse activities.</p>
          </FadeUp>
          <StaggerParent className="grid-3" style={{ marginTop: 56 }}>
            {activities.map(a => (
              <StaggerChild key={a.title}>
                <div className="activity-card">
                  <div className="activity-icon">{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="section" style={{ background: 'var(--primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeUp>
            <h2 style={{ color: 'white', marginBottom: 16 }}>Ready to Enrol?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36 }}>Take the first step towards your child's bright future today.</p>
            <Link to="/admissions" className="btn btn-primary">Apply for Admission</Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
