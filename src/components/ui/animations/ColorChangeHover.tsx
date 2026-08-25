import { motion } from "motion/react"
import type { ReactNode } from "react";

interface ColorChangeHoverProps {
  hoverColor: string;
  children: ReactNode;
}


export const ColorChangeHover = ({ hoverColor, children }: ColorChangeHoverProps) => {
  return (
    <motion.div
        animate = {{ borderRadius: 10 }}
        whileHover={{ backgroundColor: hoverColor }}
        transition={{ duration: 0.3, ease: "easeOut" }}
    >
        {children}
    </motion.div>
  )
}