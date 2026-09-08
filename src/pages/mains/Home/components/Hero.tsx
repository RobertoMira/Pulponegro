import PulpoHero from "../../../../assets/images/PulpoBlanco.png";
import { LinkPrimaryButton } from "../../../../components/ui/navigation/LinkPrimaryButton";
import { BarraSeparadora } from "../../../../components/ui/separadores/BarraSeparadora";



export default function Hero() {
  return (
    <>
        <div className="relative w-full flex flex-col md:flex-row md:gap-10 md:py-20 md:px-[15%] mx-auto
            md:h-[calc(100vh-160px)] items-center justify-center md:justify-start
        ">
            <div className="flex flex-col gap-8 text-center md:text-left items-start md:w-7/10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-7xl text-shadow-lg text-white font-extrabold flex gap-4 items-center"><span className="font-poppins font-light">En</span> <span className="font-artelinks text-[140px]">PULPO</span> <span className="font-poppins align-bottom">NEGRO</span></h1>
                    <p className="text-3xl md:text-7xl text-shadow-lg font-poppins font-extrabold text-lila">TODO COMUNICA</p>
                    <p className="text-base md:text-2xl text-shadow-2xs font-poppins font-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum animi. Sequi suscipit nisi incidunt nihil maxime quibusdam </p>
                </div>
                
                <BarraSeparadora colorBarra="bg-lila" />
                <div className="flex gap-6 w-full z-10">
                    <LinkPrimaryButton to="servicios" variant="primary" className="w-full">SERVICIOS</LinkPrimaryButton>
                    <LinkPrimaryButton to="nosotros" variant="secondary" className="w-full">CONOCENOS</LinkPrimaryButton>
                </div>
            </div>
            
            <img src={PulpoHero} alt="Pulpo Hero" className="md:w-1/2 h-auto md:absolute md:right-[7.5%] md:z-5" />
        </div>
    </>
  )
}
