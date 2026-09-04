import { BarraSeparadora } from "../../../components/ui/separadores/BarraSeparadora";
import HeroNosotros from "./components/HeroNosotros/HeroNosotros";
// import InfoNosotros from "./components/infoNosotros/InfoNosotros";
import MisionVision from "./components/misionVision/MisionVision";



export default function NosotrosPageMain() {
  return (
    <>
        <section id="nosotros" className="w-full flex flex-col items-center overflow-hidden px-5 md:px-[5%] py-8 mx-auto gap-5 md:gap-12">
            <HeroNosotros />
            <BarraSeparadora />
            {/* <InfoNosotros /> */}
            <MisionVision />
        </section>
    </>
  )
}
