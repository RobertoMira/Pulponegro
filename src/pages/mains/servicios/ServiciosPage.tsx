import HeroServicios from "./components/hero/HeroServicios";

import { useState, useEffect } from "react";
import { ArribaBtn } from "./components/ArribaBtn";
import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import EstudioCreativo from "./components/Servicios/estudioCreativo/EstudioCreativo";


export default function ServiciosPage() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
        <section id="nosotros" className="relative w-full flex flex-col items-center overflow-hidden 
          px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12 bg-fondo"
        >
            <HeroServicios />
            <BarraSeparadora />
            <EstudioCreativo />

            <ArribaBtn show={showButton} />
        </section>
    </>
  )
}
