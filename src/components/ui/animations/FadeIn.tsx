import { motion, useInView } from "motion/react";
import { Children, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "arriba" | "derecha" | "izquierda";
  amount?: number;
  once?: boolean;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export const FadeIn = ({
  children,
  className = "",
  direction = "arriba",
  amount = 0.1,
  once = true,
  duration = 0.7,
  delay = 0,
  stagger,
}: FadeInProps) => {
  const initialX = direction === "derecha" ? 40 : direction === "izquierda" ? -40 : 0;
  const initialY = direction === "arriba" ? 40 : 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const content = stagger === undefined
    ? children
    : Children.toArray(children).map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: initialX, y: initialY }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
          transition={{ duration, delay: delay + stagger * index, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {content}
    </motion.div>
  );
};