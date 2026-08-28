import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import { Estrategias } from "./components/estrategias/Estrategias";
import Hero from "./components/Hero";





export default function HomePageMain() {
  return (
    <>
      <section id="inicio" className="w-full flex flex-col items-center overflow-hidden px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12">
        <Hero/>
        <BarraSeparadora wAncho="w-1/3" />
        <Estrategias />

      </section> 
    </>
  )
}
