import { motion } from "motion/react";

interface BarraSeparadorProps {
    colorBarra?: string;
    wAncho?: string;
    rBordes?: string;
    direccion?: "izquierda" | "centro" | "derecha"; // Nueva prop
}

export const BarraSeparadora = ({ 
  colorBarra = 'bg-lila', 
  wAncho = 'w-2/3', 
  rBordes = 'rounded-2xl',
  direccion = 'centro' // Por defecto desde el centro
}: BarraSeparadorProps) => {

  // Mapeo simple de puntos de origen para la animación de escala
  const origenes = {
    izquierda: 0,
    centro: 0.5,
    derecha: 1,
  };

  return (
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ originX: origenes[direccion] }} // Define el punto desde donde aparece
      className={`${wAncho} h-2 ${rBordes} ${colorBarra}`} 
    />
  );
};
