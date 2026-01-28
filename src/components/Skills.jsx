import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Cpu, Database, GitBranch, Layout } from 'lucide-react'
import { fadeInUp, viewportDefault } from '../utils/animations'

const SKILLS = [
  { name: 'JavaScript / React', level: 95, icon: Code2 },
  { name: 'UI/UX Design', level: 85, icon: Palette },
  { name: 'Node.js / Backend', level: 88, icon: Cpu },
  { name: 'Databases', level: 82, icon: Database },
  { name: 'Git & DevOps', level: 80, icon: GitBranch },
  { name: 'CSS / Tailwind', level: 92, icon: Layout },
]

function SkillBar({ name, level, icon: Icon, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportDefault}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent-primary/20 text-accent-primary group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} />
          </div>
          <span className="font-medium text-text-primary">{name}</span>
        </div>
        <span className="text-sm text-text-secondary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="text-text-secondary text-center mb-14 max-w-2xl mx-auto"
        >
          Technologies and tools I work with every day.
        </motion.p>

        <div className="space-y-8">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
