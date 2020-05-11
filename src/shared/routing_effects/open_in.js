import React from 'react';
import {motion} from 'framer-motion';


export default function OpenIn({children}) {
  const initAndExit = { scale: 0, opacity: 0};
  const variants = {
    in: {scale: 1},
    out: initAndExit,
    initial: {...initAndExit, opacity: 1}
  }
  return (
    <motion.div
      variants={variants}
      exit="out"
      initial="initial"
      animate="in"
      transition={{type: 'spring', stiffness: 100, mass: 0.5, restDelta: 1000}}
    >
      {children}
    </motion.div>
  )
}

OpenIn.displayName = 'OpenIn';