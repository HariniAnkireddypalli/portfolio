import { motion } from 'framer-motion'
import { Award, Trophy, Target, Star } from 'lucide-react'
import { fadeInUp, staggerContainerSlow, viewportDefault } from '../utils/animations'

const ACHIEVEMENTS = [
  {
    title: 'Senior Developer Promotion',
    year: '2024',
    description: 'Recognized for technical leadership and delivery excellence.',
    icon: Award,
    side: 'left',
  },
  {
    title: 'Hackathon Winner',
    year: '2023',
    description: 'First place in company-wide innovation challenge.',
    icon: Trophy,
    side: 'right',
  },
  {
    title: 'Open Source Maintainer',
    year: '2023',
    description: 'Active contributor to popular React and tooling projects.',
    icon: Star,
    side: 'left',
  },
  {
    title: 'Client Impact Award',
    year: '2022',
    description: 'Delivered project that exceeded client KPIs by 40%.',
    icon: Target,
    side: 'right',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center"
        >
          Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="text-text-secondary text-center mb-16 max-w-2xl mx-auto"
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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent hidden md:block" />

          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon
            const isLeft = item.side === 'left'
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.2)' }}
                    className="p-6 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent-primary/30 transition-colors duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex p-2 rounded-lg bg-accent-primary/20 text-accent-primary">
                        <Icon size={20} />
                      </span>
                      <span className="text-sm font-medium text-accent-primary">{item.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-primary shrink-0" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
