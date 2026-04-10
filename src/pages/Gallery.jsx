import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../components/Animations';
import SEO from '../components/SEO';
import './Gallery.css';

const categories = ['All', 'Classrooms', 'Events', 'Activities', 'Campus'];

const allImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=420&fit=crop', cat: 'Classrooms', title: 'Smart Classroom Session' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=420&fit=crop', cat: 'Campus', title: 'School Library' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=420&fit=crop', cat: 'Campus', title: 'School Campus' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=420&fit=crop', cat: 'Events', title: 'Annual Day Celebration' },
  { src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=420&fit=crop', cat: 'Activities', title: 'Science Lab Work' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=420&fit=crop', cat: 'Activities', title: 'Project Presentation' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=420&fit=crop', cat: 'Activities', title: 'Sports Day' },
  { src: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=600&h=420&fit=crop', cat: 'Classrooms', title: 'Interactive Learning' },
  { src: 'https://images.unsplash.com/photo-1564979395532-c5c5b2d1c7a2?w=600&h=420&fit=crop', cat: 'Activities', title: 'Chemistry Lab' },
  { src: 'https://images.unsplash.com/photo-1491841651911-c44484a8efbd?w=600&h=420&fit=crop', cat: 'Events', title: 'Award Ceremony' },
  { src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=420&fit=crop', cat: 'Classrooms', title: 'Study Time' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=420&fit=crop', cat: 'Events', title: 'Cultural Programme' },
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
