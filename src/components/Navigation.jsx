import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScrollPosition()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )
    const ids = NAV_LINKS.map(({ id }) => id)
    const timer = setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 100)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const isScrolled = scrollY > 50
  const bgOpacity = Math.min(0.95, scrollY / 150)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300"
        style={{
          height: isScrolled ? 60 : 70,
          background: `rgba(10, 10, 10, ${bgOpacity})`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <nav className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-xl font-bold text-text-primary hover:opacity-90 transition-opacity"
            aria-label="Go to home"
          >
            Harini Ankireddypalli
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`nav-link-underline text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    activeSection === id ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-text-primary rounded-lg hover:bg-white/5 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[60px] z-40 md:hidden bg-bg-primary/98 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center justify-center gap-6 pt-12">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(id)
                      setMobileOpen(false)
                    }}
                    className={`text-lg font-medium ${
                      activeSection === id ? 'text-accent-primary' : 'text-text-primary'
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
