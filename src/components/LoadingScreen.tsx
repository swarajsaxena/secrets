import React from 'react'
import { createPortal } from 'react-dom'
import Loading from './Loading'
import { AnimatePresence, motion } from 'framer-motion'

const LoadingScreen = ({ open }: { open: Boolean }) => {
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute top-0 left-0 w-full h-full grid place-content-center bg-emerald-50/50 z-10'
        >
          <Loading />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default LoadingScreen
