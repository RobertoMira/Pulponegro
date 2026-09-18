import { motion } from "motion/react"
import type { ReactNode } from "react";


interface FloatingProps {
    children: ReactNode;
    classname?: string;
}


export const Floating = ({ children, classname }: FloatingProps) => {
  return (
    <motion.div
        className={classname}

        whileInView={{
            y: [-50, 10, -50], 
            rotate: [0.8, -0.8, 0.8, -0.8, 0.8]
        }}
        transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity
        }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
  )
}
