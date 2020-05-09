import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
// import {BackDrop} from './landscape';
const BDrop = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 999;
  background: var(--backdrop-bg);
  color: var(--text-primary);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`
// export const Backer = motion.custom(BackDrop);
export default function Modal({variant, onDismiss, children, open}) {
  return (
    <AnimatePresence>
      {
        (
          open && <BDrop>
            <motion.div>

            </motion.div>
          </BDrop>
        )
      }
    </AnimatePresence>
  )
}

// export const RefModal = React.forwardRef(({variant, onDismiss, children, open}, ref) => {
//   return (
//     <AnimatePresence>
//       {
//         (
//           open && <Backer>
//             <motion.div>

//             </motion.div>
//           </Backer>
//         )
//       }
//     </AnimatePresence>
//   )
// })