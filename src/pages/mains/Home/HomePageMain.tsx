import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import { SeparadorParrafo } from "../../../components/ui/separadores/SeparadorParrafo";
import { Clientes } from "./components/clientes/Clientes";
import { Estrategias } from "./components/estrategias/Estrategias";
import Hero from "./components/Hero";
import { Marcas } from "./components/marcas/Marcas";





export default function HomePageMain() {
  return (
    <>
      <section id="inicio" className="w-full flex flex-col items-center overflow-hidden px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12">
        <Hero/>
        <BarraSeparadora wAncho="w-1/3" />
        <Estrategias />
        <SeparadorParrafo encabezado="NUESTRAS MARCAS"  parrafo="INHOUSE"/>
        <Marcas />
        <BarraSeparadora wAncho="w-1/3" />
        <SeparadorParrafo encabezado="VALIOSOS CLIENTES"  parrafo="ALGUNOS DE NUESTROS"/>
        <Clientes />
      </section> 
    </>
  )
}
