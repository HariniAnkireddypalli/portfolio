import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const SOCIAL = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
]

export default function Footer() {
  const { scrollY } = useScrollPosition()
  const [hoverTop, setHoverTop] = useState(false)
  const showBackTop = scrollY > 400

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-secondary text-sm"
        >
          © {new Date().getFullYear()} Harini Ankireddypalli. All rights reserved.
        </motion.p>

        <div className="flex items-center gap-4">
          {SOCIAL.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          showBackTop
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8, pointerEvents: 'none' }
        }
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        onMouseEnter={() => setHoverTop(true)}
        onMouseLeave={() => setHoverTop(false)}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-accent-primary text-white shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 transition-shadow duration-300"
        aria-label="Back to top"
      >
        <motion.span animate={{ y: hoverTop ? -2 : 0 }}>
          <ArrowUp size={24} />
        </motion.span>
      </motion.button>
    </footer>
  )
}
