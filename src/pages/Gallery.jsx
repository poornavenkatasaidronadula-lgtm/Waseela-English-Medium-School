import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../components/Animations';
import SEO from '../components/SEO';
import './Gallery.css';

const categories = ['All', 'Classrooms', 'Events', 'Activities', 'Campus'];

const allImages = [
  // ── Real School Photos ──
  { src: '/DSC01529.JPG', cat: 'Classrooms', title: 'Classroom Activity' },
  { src: '/DSC01543.JPG', cat: 'Classrooms', title: 'Learning Session' },
  { src: '/DSC01548.JPG', cat: 'Classrooms', title: 'Student Engagement' },
  { src: '/DSC01566.JPG', cat: 'Classrooms', title: 'Classroom Environment' },
  { src: '/DSC01593.JPG', cat: 'Classrooms', title: 'Academic Session' },
  { src: '/DSC01601.JPG', cat: 'Classrooms', title: 'Interactive Class' },
  { src: '/DSC01693.JPG', cat: 'Classrooms', title: 'Hands-on Learning' },
  { src: '/DSC01703.JPG', cat: 'Classrooms', title: 'Teacher & Students' },
  { src: '/DSC01711.JPG', cat: 'Classrooms', title: 'Focused Learning' },
  { src: '/DSC01729.JPG', cat: 'Classrooms', title: 'Classroom Discussion' },
  { src: '/DSC01756.JPG', cat: 'Classrooms', title: 'School Day Moments' },
  { src: '/DSC01805.JPG', cat: 'Classrooms', title: 'Student Activities' },
  { src: '/DSC01764.JPG', cat: 'Classrooms', title: 'Classroom Moments' },
  { src: '/DSC01782.JPG', cat: 'Classrooms', title: 'School Life' },
  { src: '/DSC01783.JPG', cat: 'Classrooms', title: 'Learning Together' },
  { src: '/DSC01791.JPG', cat: 'Classrooms', title: 'Student Focus' },
  // ── Activities ──
  { src: '/activities/DSC01620.JPG', cat: 'Activities', title: 'Activity 1' },
  { src: '/activities/DSC01639.JPG', cat: 'Activities', title: 'Activity 2' },
  { src: '/activities/DSC01648.JPG', cat: 'Activities', title: 'Activity 3' },
  { src: '/activities/DSC01660.JPG', cat: 'Activities', title: 'Activity 4' },
  { src: '/activities/DSC01669.JPG', cat: 'Activities', title: 'Activity 5' },
  { src: '/activities/DSC01682.JPG', cat: 'Activities', title: 'Activity 6' },
  { src: '/activities/DSC01688.JPG', cat: 'Activities', title: 'Activity 7' },
  { src: '/activities/DSC01815.JPG', cat: 'Activities', title: 'Activity 8' },
  { src: '/activities/DSC01819.JPG', cat: 'Activities', title: 'Activity 9' },
  { src: '/activities/DSC01823.JPG', cat: 'Activities', title: 'Activity 10' },
  { src: '/activities/KRA_0001.JPG', cat: 'Activities', title: 'Activity 11' },
  { src: '/activities/KRA_0004.JPG', cat: 'Activities', title: 'Activity 12' },
  // ── Events ──
  { src: '/events/KRA_0006.JPG', cat: 'Events', title: 'Event Moments' },
  { src: '/events/KRA_0015.JPG', cat: 'Events', title: 'School Celebration' },
  { src: '/events/KRA_0017.JPG', cat: 'Events', title: 'Special Occasion' },
  { src: '/events/KRA_0022.JPG', cat: 'Events', title: 'Student Performance' },
  { src: '/events/KRA_0023.JPG', cat: 'Events', title: 'Campus Event' },
  { src: '/events/KRA_0028.JPG', cat: 'Events', title: 'Gathering' },
  { src: '/events/KRA_0029.JPG', cat: 'Events', title: 'Event Highlights' },
  { src: '/events/KRA_0031.JPG', cat: 'Events', title: 'Festivity' },
  { src: '/events/KRA_0038.JPG', cat: 'Events', title: 'Program Function' },
  { src: '/events/KRA_0056.JPG', cat: 'Events', title: 'Performance' },
  { src: '/events/KRA_0057.JPG', cat: 'Events', title: 'Campus Showcase' },
  { src: '/events/KRA_0065.JPG', cat: 'Events', title: 'Ceremony' },
  { src: '/events/KRA_0067.JPG', cat: 'Events', title: 'Annual Function' },
  { src: '/events/KRA_0071.JPG', cat: 'Events', title: 'School Gathering' },
  { src: '/events/KRA_0087.JPG', cat: 'Events', title: 'Celebration Moment' },
  { src: '/events/KRA_0089.JPG', cat: 'Events', title: 'Event Activity' },
  { src: '/events/KRA_0099.JPG', cat: 'Events', title: 'Event Display' },
  { src: '/events/KRA_0106.JPG', cat: 'Events', title: 'School Activity' },
  { src: '/events/KRA_0109.JPG', cat: 'Events', title: 'Group Photo' },
  { src: '/events/KRA_0115.JPG', cat: 'Events', title: 'Special Memory' },
  { src: '/events/KRA_0118.JPG', cat: 'Events', title: 'Function Highlights' },
  { src: '/events/KRA_0122.JPG', cat: 'Events', title: 'Program Showcase' },
  { src: '/events/KRA_0126.JPG', cat: 'Events', title: 'School Memory' },
  // ── Campus ──
  { src: '/campus/DSC01826.JPG', cat: 'Campus', title: 'Campus View' },
  { src: '/campus/DSC01827.JPG', cat: 'Campus', title: 'Campus Facilities' },
  { src: '/campus/DSC01831.JPG', cat: 'Campus', title: 'School Grounds' },
  { src: '/campus/DSC01835.JPG', cat: 'Campus', title: 'School Building' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter(img => img.cat === activeCategory);

  return (
    <div>
      <SEO
        title="Gallery"
        description="A visual journey through life at Waseela English Medium School. See our classrooms, campus events, and activities."
        url="/gallery"
      />
      <div className="page-header">
        <div className="container page-header-content">
          <h1>Gallery</h1>
          <p>A visual journey through life at Waseela English Medium School</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Gallery</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeUp className="text-center">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>📸 Campus Life</div>
            <h2 className="section-title">Moments That Matter</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">From classrooms to playgrounds — every moment at Waseela tells a story of growth and joy.</p>
          </FadeUp>

          {/* Category Filter */}
          <div className="gallery-filter" style={{ marginTop: 40 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div className="gallery-grid" layout style={{ marginTop: 40 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setLightbox(img)}
                >
                  <img src={img.src} alt={img.title} />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-cat">{img.cat}</span>
                    <span className="gallery-item-title">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightbox(null)}>
                <X size={22} />
              </button>
              <img src={lightbox.src} alt={lightbox.title} />
              <div className="lightbox-caption">
                <span className="badge badge-gold">{lightbox.cat}</span>
                <span className="lightbox-title">{lightbox.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
