import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollPosition } from './hooks/useScrollPosition'

export default function App() {
  const { scrollProgress } = useScrollPosition()

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary origin-left z-[9999]"
        style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
      />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
