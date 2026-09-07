import HeroServicios from "./components/hero/HeroServicios";
import EstudioCreativo from "./components/Servicios/estudioCreativo/EstudioCreativo";


export default function ServiciosPage() {
  return (
    <>
        <section id="nosotros" className="w-full flex flex-col items-center overflow-hidden 
          px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12 bg-fondo"
        >
            <HeroServicios />
            <EstudioCreativo />

        </section>
    </>
  )
}
