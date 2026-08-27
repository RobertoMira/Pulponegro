import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import Hero from "./components/Hero";





export default function HomePageMain() {
  return (
    <>
      <section id="inicio" className="w-full flex flex-col overflow-hidden px-5 md:px-[5%] py-8 mx-auto gap-8">
        <Hero/>
        <BarraSeparadora  />
      </section> 
    </>
  )
}
