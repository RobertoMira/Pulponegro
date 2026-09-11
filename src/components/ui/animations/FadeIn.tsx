import { motion } from "motion/react"
import { type ReactNode } from "react"


interface FadeInProps {
    children: ReactNode;
    className: string;
}

export const FadeIn = ({ children, className }: FadeInProps) => {
  return (
    <>
        <motion.div

            variants={{
            
            }}

            whileInView={{
                

            }}

            animate={{
                y: [ 2, 0 ],
            }}

            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}

            className={className}
        >
            {children}
        </motion.div>
    </>
  )
}
