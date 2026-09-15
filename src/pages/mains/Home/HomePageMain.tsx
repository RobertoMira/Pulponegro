import TintaFondo from '../../../assets/images/tinta.png'
import { FadeIn } from '../../../components/ui/animations/FadeIn';


import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import { SeparadorParrafo } from "../../../components/ui/separadores/SeparadorParrafo";
import { Clientes } from "./components/clientes/Clientes";
import { Estrategias } from "./components/estrategias/Estrategias";
import Hero from "./components/Hero";
import { Marcas } from "./components/marcas/Marcas";


export default function HomePageMain() {
  return (
    <section className="flex flex-col items-center justify-center bg-black">
      <section id="inicio" className="w-full flex flex-col items-center overflow-hidden px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12
        bg-black
        ">
        <Hero/>
      </section> 
      <FadeIn className='flex flex-col items-center justify-center w-full'>
        <BarraSeparadora wAncho="w-1/3" />
      </FadeIn>
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden px-5 md:px-[5%] mx-auto gap-5 md:gap-12
        bg-white py-5"
      >
        <img src={TintaFondo} alt="Tinta de fondo" 
            className="absolute bottom-50 z-0 w-[120%] h-[120%] max-w-none pointer-events-none"
        />
        <Estrategias />
      </section>
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden px-5 md:px-[5%] mx-auto gap-5 md:gap-12
        bg-white"
      >
        <FadeIn>
          <SeparadorParrafo encabezado="NUESTRAS MARCAS"  parrafo="INHOUSE"/>
        </FadeIn>
        <Marcas />
        <BarraSeparadora wAncho="w-1/3" />
        <FadeIn>
          <SeparadorParrafo encabezado="VALIOSOS CLIENTES"  parrafo="ALGUNOS DE NUESTROS"/>
        </FadeIn>
        <Clientes />
      </section>
    </section>
  
  )
}
