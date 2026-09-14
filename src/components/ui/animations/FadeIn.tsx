import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "arriba" | "derecha" | "izquierda";
  amount?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  className = "",
  direction = "arriba",
  amount = 0.1,
  once = true,
}: FadeInProps) => {
  const initialX = direction === "derecha" ? 40 : direction === "izquierda" ? -40 : 0;
  const initialY = direction === "arriba" ? 40 : 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};