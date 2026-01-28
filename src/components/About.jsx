import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Globe, Zap } from 'lucide-react'
import { fadeInUp, staggerContainerSlow, viewportDefault } from '../utils/animations'

const QUICK_FACTS = [
  { icon: Code2, value: 5, suffix: '+', label: 'Years Experience', color: 'from-accent-primary to-indigo-400' },
  { icon: Globe, value: 20, suffix: '+', label: 'Projects Delivered', color: 'from-accent-secondary to-purple-400' },
  { icon: Zap, value: 99, suffix: '%', label: 'Client Satisfaction', color: 'from-amber-500 to-orange-400' },
]

function AnimatedCounter({ value, suffix = '', duration = 1.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let rafId
    const startTime = performance.now()
    const step = (now) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, value, duration])

  return (
    <span ref={ref}>{count}{suffix}</span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportDefault}
          variants={staggerContainerSlow}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I'm a passionate developer who loves turning ideas into elegant, performant digital
              experiences. With a strong foundation in React, Node, and modern tooling, I focus on
              accessibility, performance, and delightful interactions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open source, or perfecting my coffee brew.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-end">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-accent-primary/30 shadow-xl shadow-accent-primary/10">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                alt="Harini Ankireddypalli"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Quick facts cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportDefault}
          variants={staggerContainerSlow}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {QUICK_FACTS.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.25)' }}
              className="p-6 rounded-2xl bg-bg-primary border border-white/5 hover:border-accent-primary/30 transition-colors duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} text-white mb-4`}>
                <Icon size={24} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p className="text-text-secondary text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
