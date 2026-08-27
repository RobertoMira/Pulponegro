import PulpoHero from "../../../../assets/images/pulpoGrande.png";
import { LinkPrimaryButton } from "../../../../components/ui/navigation/LinkPrimaryButton";
import { BarraSeparadora } from "../../../../components/ui/separadores/BarraSeparadora";



export default function Hero() {
  return (
    <>
        <div className="relative w-full flex flex-col md:flex-row md:gap-10 md:py-20 md:px-[15%] mx-auto
            md:h-[calc(100vh-160px)] items-center justify-center md:justify-start
        ">
            <div className="flex flex-col gap-8 text-center items-center justify-center">
                <div className="flex flex-col gap-4">
                    <p className="text-base md:text-xl text-shadow-md font-extrabold text-lila">COMUNICACIÓN CREATIVA</p>
                    <h1 className="text-3xl md:text-5xl text-shadow-lg font-extrabold">EN PULPO NEGRO</h1>
                    <p className="text-3xl md:text-5xl text-shadow-lg font-extrabold text-lila">TODO COMUNICA</p>
                </div>
                
                <BarraSeparadora colorBarra="bg-lila" />
                <div className="flex mx-10 gap-6 items-center">
                    <LinkPrimaryButton to="servicios" variant="primary" className="w-full">SERVICIOS</LinkPrimaryButton>
                    <LinkPrimaryButton to="nosotros" variant="secondary" className="w-full">CONOCENOS</LinkPrimaryButton>
                </div>
            </div>
            
            <img src={PulpoHero} alt="Pulpo Hero" className="md:w-1/2 h-auto md:absolute md:right-[7.5%] md:-z-10" />
        </div>
    </>
  )
}
