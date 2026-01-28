import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown } from 'lucide-react'
import { useMousePosition } from '../hooks/useMousePosition'
import { letterReveal, fadeInUp } from '../utils/animations'

const NAME = 'Your Name'
const TAGLINE = 'Full-Stack Developer & Creative Problem Solver'
const DESCRIPTION = 'Crafting digital experiences that inspire. Passionate about clean code, smooth animations, and user-centric design.'

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const { normalized } = useMousePosition(imageRef)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const shapeY3 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityOut = useTransform(scrollYProgress, [0.3, 0.6], [1, 0])

  const magneticX = (normalized?.x ?? 0) * 12
  const magneticY = (normalized?.y ?? 0) * 12

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: shapeY1 }}
          className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-accent-primary/20 blur-xl floating-shape"
        />
        <motion.div
          style={{ y: shapeY2 }}
          className="absolute top-[25%] right-[15%] w-32 h-32 rounded-lg bg-accent-secondary/15 blur-2xl floating-shape"
        />
        <motion.div
          style={{ y: shapeY3 }}
          className="absolute bottom-[30%] left-[20%] w-16 h-16 rounded-full bg-accent-primary/25 blur-lg floating-shape"
        />
        <motion.div
          style={{ opacity: opacityOut }}
          className="absolute top-[60%] right-[10%] w-24 h-24 rounded-full border border-accent-primary/30 floating-shape"
        />
        <motion.div
          style={{ opacity: opacityOut }}
          className="absolute bottom-[20%] right-[25%] w-14 h-14 rounded-lg bg-accent-secondary/20 blur-md floating-shape"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* Name - letter stagger */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-0.5 mb-4">
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterReveal(i)}
                initial="initial"
                animate="animate"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Tagline - typewriter */}
          <div className="min-h-[2.5rem] mb-4 text-lg md:text-xl text-accent-primary font-medium">
            <TypeAnimation
              sequence={[TAGLINE, 2000, '']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-cursor"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {DESCRIPTION}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative flex-shrink-0 order-1 lg:order-2"
          style={{
            transform: `translate(${magneticX}px, ${magneticY}px)`,
          }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-accent-primary/30 bg-bg-secondary group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl shadow-[0_0_60px_rgba(99,102,241,0.4)]" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 -z-10 rounded-2xl bg-accent-primary/20 blur-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-text-secondary"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
