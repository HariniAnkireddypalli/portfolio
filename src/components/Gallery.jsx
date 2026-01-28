import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Eye } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportDefault } from '../utils/animations'

const CATEGORIES = ['All', 'Hobbies', 'Travel', 'Achievements', 'Inspiration']

const GALLERY_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516979187457-637ebb4ac844?w=600&h=400&fit=crop', title: 'Morning Coffee', category: 'Hobbies' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', title: 'Mountain View', category: 'Travel' },
  { id: 3, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', title: 'Landscape', category: 'Travel' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', title: 'Coding Setup', category: 'Achievements' },
  { id: 5, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', title: 'Workspace', category: 'Inspiration' },
  { id: 6, src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop', title: 'Collaboration', category: 'Achievements' },
  { id: 7, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop', title: 'Tech', category: 'Inspiration' },
  { id: 8, src: 'https://images.unsplash.com/photo-1514565131-fce0801e578f?w=600&h=400&fit=crop', title: 'City Lights', category: 'Travel' },
  { id: 9, src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop', title: 'Reading', category: 'Hobbies' },
  { id: 10, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', title: 'Ideas', category: 'Inspiration' },
]

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [failedIds, setFailedIds] = useState(new Set())

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory)

  const openLightbox = (index) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === filtered[index].id)
    setLightboxIndex(idx >= 0 ? idx : index)
    setLightboxOpen(true)
  }

  const slides = GALLERY_ITEMS.map((i) => ({ src: i.src, title: i.title }))

  return (
    <section id="gallery" className="py-20 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="text-text-secondary text-center mb-10 max-w-2xl mx-auto"
        >
          A visual journey through hobbies, travels, and milestones.
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/30'
                  : 'bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportDefault}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="wait">
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[3/2] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={failedIds.has(item.id) ? FALLBACK_IMAGE : item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"
                  loading="lazy"
                  onError={() => setFailedIds((prev) => new Set(prev).add(item.id))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Eye size={18} className="text-white" />
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-4 rounded-full bg-white/20 backdrop-blur-md"
                  >
                    <Eye size={32} className="text-white" />
                  </motion.span>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        animation={{ fade: 0.3 }}
      />
    </section>
  )
}
