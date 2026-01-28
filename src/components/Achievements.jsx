import { motion } from 'framer-motion'
import { Award, Trophy, Target, Star } from 'lucide-react'
import {
  fadeInUp,
  staggerContainerSlow,
  viewportDefault,
} from '../utils/animations'

const ACHIEVEMENTS = [
  {
    title: 'Cambridge Certified',
    year: '2024',
    description: 'Cambridge B1 English Certification (CEFR Level)',
    side: 'left',
    icon: Award,
  },
  {
    title: 'Good CGPA',
    year: '2026',
    description: 'Maintained 8.5 CGPA in B.Tech Computer Science Engineering',
    side: 'right',
    icon: Trophy,
  },
  {
    title: 'Smart Internz Internship',
    year: '2026',
    description: 'Completed Full Stack Development Internship at Smart Internz',
    side: 'left',
    icon: Target,
  },
  {
    title: 'Core Java & Data Structures Training',
    year: '2026',
    description: 'Completed Core Java & Data Structures Training (Smart Interview)',
    side: 'right',
    icon: Star,
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-bg-primary py-20 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="mb-4 text-center font-display text-3xl font-bold text-text-primary md:text-4xl"
        >
          Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="mx-auto mb-16 max-w-2xl text-center text-text-secondary"
        >
          Milestones and recognitions along the way.
        </motion.p>

        {/* Timeline */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportDefault}
          variants={staggerContainerSlow}
          className="relative"
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent md:block" />

          {ACHIEVEMENTS.map((item) => {
            const Icon = item.icon
            const isLeft = item.side === 'left'

            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`relative mb-12 flex items-center gap-8 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${
                    isLeft ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow:
                        '0 20px 40px -15px rgba(99, 102, 241, 0.2)',
                    }}
                    className="rounded-2xl border border-white/5 bg-bg-secondary p-6 transition-colors duration-300 hover:border-accent-primary/30"
                  >
                    <div
                      className={`mb-2 flex items-center gap-3 ${
                        isLeft ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="inline-flex rounded-lg bg-accent-primary/20 p-2 text-accent-primary">
                        <Icon size={20} />
                      </span>
                      <span className="text-sm font-medium text-accent-primary">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-bg-primary bg-accent-primary md:block" />

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
