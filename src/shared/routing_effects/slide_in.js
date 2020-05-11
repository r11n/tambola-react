import React from 'react';
import { motion } from 'framer-motion';

export default function SlideIn({ children, slide = 0, slideUp = 0 }) {
  const initAndExit = { opacity: 0, x: slide, y: slideUp }
  const variants = {
    in: {opacity: 1, x: 0, y: 0},
    out: initAndExit,
    initial: initAndExit
  }
  return (
    <motion.div
      variants={variants}
      exit="out"
      animate="in"
      initial="initial"
      transition={{type: 'tween', ease: 'anticipate', duration: 0.5}}
    >
      {children}
    </motion.div>
  )
}
SlideIn.displayName = 'SlideIn'