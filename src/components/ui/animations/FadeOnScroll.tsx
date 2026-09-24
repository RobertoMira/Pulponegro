import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface FadeOnScrollProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const FadeOnScroll = ({ children, className, id, }: FadeOnScrollProps) => {

  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 600],
    [1, 0]
  );

  const scale = useTransform(
    scrollY,
    [0, 600],
    [1, 0.85]
  );

  return (
    <motion.div
      id={id}
      className={`sticky top-0 w-full h-full ${className ?? ""}`}
      style={{
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};