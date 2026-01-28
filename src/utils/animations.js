/**
 * Reusable Framer Motion animation variants
 * Use transform/opacity for 60fps performance
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

export const scaleIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const slideIn = (direction = 'left') => ({
  initial: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 0.6 },
})

export const letterReveal = (i) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: i * 0.05 },
})

export const viewportDefault = {
  once: true,
  amount: 0.3,
}

export const viewportCenter = {
  once: true,
  amount: 0.5,
}
