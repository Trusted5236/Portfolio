import React from 'react'
import { motion } from 'framer-motion'

function ScrollReaveal({children}: {children: React.ReactNode}) {
  return (
    
        <motion.div
            initial={{ opacity: 0, y: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{
                y: ["0", "-10px", "0"], // Bounce effect using keyframes
                transition: {
                  duration: 0.6,
                  repeat: Infinity, // Keep repeating the bounce animation
                  repeatType: "loop", // Loop forever
                  ease: "easeInOut", // Smooth easing
                },
              }}
            
        >
            {children}
        </motion.div>
  )
}

export default ScrollReaveal