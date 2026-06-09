import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, Star, Shield, Cpu, Dumbbell,
  ChevronRight, Quote, ArrowRight, CheckCircle, GraduationCap,
  Heart, Zap, UserCheck, FlaskConical
} from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FadeUp, StaggerParent, StaggerChild, ScaleIn } from '../components/Animations';
import SEO from '../components/SEO';
import './Home.css';

/* ── Data ────────────────────────────────────── */
const stats = [
  { value: 300, suffix: '+', label: 'Happy Students' },
  { value: 25, suffix: '+', label: 'Expert Teachers' },
  { value: 10, suffix: '+', label: 'Modern Facilities' },
  { value: 98, suffix: '%', label: 'Pass Rate' },
];

const whyUs = [
  { icon: <Award size={28} />, title: 'Academic Excellence', desc: 'We maintain high academic standards through rigorous curriculum, regular assessments, and dedicated faculty support for every student.' },
  { icon: <UserCheck size={28} />, title: 'Qualified Educators', desc: 'Our team of experienced and passionate teachers bring subject expertise and modern teaching methods to every classroom.' },
  { icon: <Star size={28} />, title: 'Holistic Development', desc: 'Beyond academics, we nurture creativity, sports, leadership, and moral values to shape well-rounded individuals.' },
  { icon: <Shield size={28} />, title: 'Safe Campus', desc: 'A fully secured campus with CCTV surveillance, trained staff, and child-safe infrastructure ensuring complete peace of mind.' },
  { icon: <FlaskConical size={28} />, title: 'Activity-Based Learning', desc: 'Hands-on experiments, projects, and activities make learning engaging, practical, and deeply effective for all age groups.' },
  { icon: <Users size={28} />, title: 'Parent-School Partnership', desc: 'We maintain open communication with parents through regular meetings, progress reports, and collaborative involvement in student growth.' },
];

const classes = [
  { level: 'Nursery', range: 'Pre-Primary', color: '#E8F5E9', icon: '🌱' },
  { level: 'LKG / UKG', range: 'Kindergarten', color: '#FFF8E1', icon: '🌸' },
  { level: 'Class I – II', range: 'Foundation', color: '#E3F2FD', icon: '📖' },
  { level: 'Class III – V', range: 'Primary', color: '#FCE4EC', icon: '✏️' },
  { level: 'Class VI – VIII', range: 'Middle School', color: '#F3E5F5', icon: '🔬' },
  { level: 'Class IX – X', range: 'Secondary', color: '#E8EAF6', icon: '🎓' },
];

const facilities = [
  { icon: <BookOpen size={26} />, title: 'Modern Library', desc: 'Thousands of books, digital resources and quiet study zones.' },
  { icon: <Dumbbell size={26} />, title: 'Sports Ground', desc: 'Spacious playground with cricket, football and athletics facilities.' },
  { icon: <Cpu size={26} />, title: 'Smart Classrooms', desc: 'Interactive boards and digital teaching tools in every room.' },
  { icon: <Shield size={26} />, title: 'CCTV Security', desc: '24/7 surveillance ensuring a safe environment for all students.' },
];

const testimonials = [
  { name: 'Fatima Begum', role: 'Parent of Class VI Student', text: 'Waseela School has transformed my child completely. The teachers are very dedicated and the curriculum is excellent. Highly recommended!', rating: 5 },
  { name: 'Ravi Kumar', role: 'Parent of Class IX Student', text: 'The school provides a perfect balance of academics and extracurricular activities. My son has grown so much in confidence here.', rating: 5 },
  { name: 'Sameera Khatoon', role: 'Parent of Nursery Student', text: 'The nursery program is exceptional. The teachers are patient, caring, and really understand how young children learn best.', rating: 5 },
];

const galleryImages = [
  '/campus/DSC01827.JPG',
  '/KRA_0048.JPG',
  '/DSC01566.JPG',
  '/DSC01764.JPG',
  '/activities/DSC01819.JPG',
  '/events/KRA_0031.JPG',
];

/* ── StatCounter ─────────────────────────────── */
function StatCounter({ value, suffix, label }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── Page ────────────────────────────────────── */
export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [facilityIndex, setFacilityIndex] = useState(0);

  const heroBgs = [
    '/campus/DSC01827.JPG',
    '/KRA_0048.JPG',
    '/events/KRA_0115.JPG'
  ];

  const facilityBgs = [
    '/DSC01566.JPG',
    '/DSC01601.JPG',
    '/DSC01805.JPG',
    '/DSC01783.JPG',
    '/events/KRA_0122.JPG',
    '/events/KRA_0067.JPG'
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroBgs.length);
    }, 4500);

    const facilityTimer = setInterval(() => {
      setFacilityIndex(prev => (prev + 1) % facilityBgs.length);
    }, 3500);

    return () => {
      clearInterval(heroTimer);
      clearInterval(facilityTimer);
    };
  }, []);

  return (
    <div className="home-page">
      <SEO
        title="Home"
        description="Waseela English Medium School in Anantapur offers quality education from Nursery to 10th Class. AC classrooms, Digital Panel Boards, expert educators &amp; affordable fees. Admissions open 2026–2027."
        url="/"
      />

      {/* ──── HERO ──── */}
      <section className="hero">
        <div className="hero-bg">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={heroIndex}
              src={heroBgs[heroIndex]}
              alt="School campus"
              className="hero-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-tags-wrapper">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star size={14} color="var(--secondary)" /> Nursery to 10th Class
            </motion.div>
            <motion.div
              className="hero-admissions-tag"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🎓 Admissions Open 2026–27
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Nurturing <span className="hero-highlight">Young Minds</span> for a Brighter Tomorrow
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            At Waseela English Medium School, we provide a safe, inspiring, and student-centered
            learning environment that helps children grow academically, socially, and morally.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/admissions" className="btn btn-primary hero-btn">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline hero-btn">
              Contact Us
            </Link>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <div className="scroll-dot" />
        </motion.div>
      </section>

      {/* ──── STATS BANNER ──── */}
      <section className="stats-banner">
        <div className="container stats-grid">
          {stats.map(s => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ──── ABOUT PREVIEW ──── */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <FadeUp>
              <div className="about-img-stack">
                <img
                  src="/campus/DSC01827.JPG"
                  alt="School building"
                  className="about-main-img"
                />
                <div className="about-badge-float glass-card">
                  <Award size={22} color="var(--secondary)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)' }}>Excellence</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>in Education</div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div>
                <div className="section-tag"><BookOpen size={12} /> Our Story</div>
                <h2 className="section-title">A Legacy of Quality  Education</h2>
                <div className="gold-divider" />
                <p style={{ marginBottom: 20 }}>
                  Waseela English Medium School is a newly established beacon of quality education in Anantapur.
                  We nurture students from Nursery through Class X in an environment built on discipline, respect, and intellectual curiosity.
                </p>
                <p style={{ marginBottom: 32 }}>
                  Our holistic approach combines rigorous academics with co-curricular excellence, equipping every student with the knowledge, skills, and values to succeed in life.
                </p>
                <div className="about-checks">
                  {['CBSE Aligned Curriculum', 'Experienced & Caring Faculty', 'Safe & Inclusive Campus', 'Focus on Moral Values'].map(item => (
                    <div key={item} className="about-check-item">
                      <CheckCircle size={16} color="var(--secondary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn btn-outline-green" style={{ marginTop: 32 }}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──── WHY CHOOSE US ──── */}
      <section className="section why-section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Star size={12} /> Why Choose Us</div>
            <h2 className="section-title">Why Waseela is the Right Choice</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">Admissions Open 2026–2027 · Nursery to 10th Class · Building a World for Your Child.</p>
          </FadeUp>
          <StaggerParent className="grid-3" style={{ marginTop: 56 }}>
            {whyUs.map((item) => (
              <StaggerChild key={item.title}>
                <div className="why-card">
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ──── CLASSES ──── */}
      <section className="section classes-section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><GraduationCap size={12} /> Academics</div>
            <h2 className="section-title">Classes We Offer</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">From Nursery to Class X — a complete educational journey under one roof.</p>
          </FadeUp>
          <StaggerParent className="classes-grid" style={{ marginTop: 56 }}>
            {classes.map((cls) => (
              <StaggerChild key={cls.level}>
                <div className="class-card" style={{ '--card-bg': cls.color }}>
                  <div className="class-emoji">{cls.icon}</div>
                  <div>
                    <div className="class-level">{cls.level}</div>
                    <div className="class-range">{cls.range}</div>
                  </div>
                  <Link to="/academics" className="class-arrow">
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ──── FACILITIES ──── */}
      <section className="section facilities-preview">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Shield size={12} /> Campus</div>
            <h2 className="section-title">World-Class Facilities</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <div className="facilities-layout" style={{ marginTop: 56 }}>
            <FadeUp className="facilities-main-img">
              <AnimatePresence mode="wait">
                <motion.img
                  key={facilityIndex}
                  src={facilityBgs[facilityIndex]}
                  alt="School facilities"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div className="facilities-img-overlay">
                <Link to="/facilities" className="btn btn-primary">
                  View All Facilities <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
            <StaggerParent className="facilities-cards">
              {facilities.map(f => (
                <StaggerChild key={f.title}>
                  <div className="facility-mini-card">
                    <div className="facility-mini-icon">{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>
        </div>
      </section>

      {/* ──── TESTIMONIALS ──── */}
      <section className="section testimonials-section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Star size={12} /> Reviews</div>
            <h2 className="section-title">What Parents Say</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <StaggerParent className="testimonials-grid" style={{ marginTop: 56 }}>
            {testimonials.map((t) => (
              <StaggerChild key={t.name}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon"><Quote size={28} /></div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--secondary)" color="var(--secondary)" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ──── GALLERY PREVIEW ──── */}
      <section className="section gallery-preview-section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><Star size={12} /> Campus Life</div>
            <h2 className="section-title">Gallery Highlights</h2>
            <div className="gold-divider center" />
          </FadeUp>
          <div className="gallery-preview-grid" style={{ marginTop: 48 }}>
            {galleryImages.map((src, i) => (
              <ScaleIn key={i} delay={i * 0.08}>
                <div className="gallery-preview-item">
                  <img src={src} alt={`School gallery ${i + 1}`} />
                  <div className="gallery-preview-hover">
                    <Link to="/gallery">View Gallery</Link>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
          <FadeUp className="text-center" style={{ marginTop: 72 }}>
            <Link to="/gallery" className="btn btn-outline-green">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ──── CTA BANNER ──── */}
      <section className="cta-banner">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=500&fit=crop"
            alt="Students"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container cta-content">
          <FadeUp>
            <h2>Ready to Give Your Child the Best Education?</h2>
            <p>Join the Waseela family and watch your child thrive in a nurturing, world-class environment.</p>
            <div className="cta-actions">
              <Link to="/admissions" className="btn btn-primary">
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Talk to Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
