import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ArribaBtnProps {
  show: boolean;
}

const MotionLink = motion.create(Link);

export const ArribaBtn = ({ show }: ArribaBtnProps) => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById("inicioNosotros");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <MotionLink
      to="#inicioNosotros"
      onClick={handleScroll}
      animate={{ 
        opacity: show ? 1 : 0, 
        scale: show ? 1 : 0.5,
        pointerEvents: show ? "auto" : "none" 
      }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-10 right-10 z-50 flex items-center justify-center border border-gray-600 rounded-full w-fit bg-white/10 backdrop-blur-sm p-2 shadow-lg"
    >
      <span
        className="material-symbols-outlined text-[80px]"
        style={{ color: '#99adda' }}
      >
        keyboard_double_arrow_up
      </span>
    </MotionLink>
  );
};