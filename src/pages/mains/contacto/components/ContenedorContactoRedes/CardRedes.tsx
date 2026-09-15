import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { motion } from "motion/react";

interface CardRedesProps {
    pathR: string;
    children: ReactNode;
    rTarget?: boolean;
}


export const CardRedes = ({ pathR, children, rTarget }: CardRedesProps) => {
  return (
    <motion.div 
        className="group flex w-12 h-12 items-center justify-center rounded-2xl border border-lila"
        
        whileHover={{
            y: -3,
            color: '#fff',
            backgroundColor: "#99adda"
        }}

        animate={{
            y: [-3, 2, 0]
        }}

        transition={{
            duration: 0.2,
            ease: "easeInOut",
        }}
    >

        <Link 
            className=" flex items-center justify-center rounded-2xl w-full h-full" 
            to={pathR}
            target={rTarget ? "_blank" : undefined }
        >
            {children}
        </Link>
    </motion.div>
  )
}