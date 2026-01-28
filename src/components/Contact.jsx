import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportDefault } from '../utils/animations'

const SOCIAL_LINKS = [
  { href: 'mailto:ankireddypalliharini@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://github.com/HariniAnkireddypalli', icon: Github, label: 'GitHub' },
  { href: 'www.linkedin.com/in/harini-ankireddypalli-a75b39287', icon: Linkedin, label: 'LinkedIn' }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          className="text-text-secondary text-lg mb-12 max-w-xl mx-auto"
        >
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </motion.p>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportDefault}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4"
        >
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-bg-primary border border-white/10 hover:border-accent-primary/50 hover:bg-accent-primary/10 text-text-secondary hover:text-accent-primary transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportDefault}
          className="mt-8 text-text-secondary text-sm"
        >
          ankireddypalliharini@gmail.com
        </motion.p>
      </div>
    </section>
  )
}
