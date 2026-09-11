import PulpoHero from "../../../../assets/images/PulpoBlanco.png";
import CirculoHero from '../../../../assets/images/Circulo.png'

import { FadeIn } from "../../../../components/ui/animations/FadeIn";

import { LinkPrimaryButton } from "../../../../components/ui/navigation/LinkPrimaryButton";
import { BarraSeparadora } from "../../../../components/ui/separadores/BarraSeparadora";



export default function Hero() {
  return (
    <>
        <div className="relative w-full flex flex-col md:flex-row md:gap-10 md:py-20 md:px-[10%] mx-auto
            md:h-[calc(100vh-160px)] items-center justify-center md:justify-start bg-black
        ">
            <FadeIn className="flex flex-col gap-8 text-center md:text-left items-start md:w-7/10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-7xl text-shadow-lg text-white font-extrabold flex gap-4 items-center"><span className="font-poppins font-light -translate-y-10">En</span> <span className="font-artelinks text-[170px] -translate-y-10 font-normal">Pulpo</span> <span className="font-poppins translate-y-10 -translate-x-20">NEGRO</span></h1>
                    <p className="text-3xl md:text-7xl text-shadow-lg font-poppins font-extrabold text-lila">TODO COMUNICA</p>
                    <p className="text-base md:text-2xl text-shadow-2xs font-poppins font-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum animi. Sequi suscipit nisi incidunt nihil maxime quibusdam </p>
                </div>
                <BarraSeparadora colorBarra="bg-lila" />
                <div className="flex gap-6 w-full z-10">
                    <LinkPrimaryButton to="servicios" variant="primary" className="w-full">SERVICIOS</LinkPrimaryButton>
                    <LinkPrimaryButton to="nosotros" variant="secondary" className="w-full">CONOCENOS</LinkPrimaryButton>
                </div>
            </FadeIn>
            
            <img src={PulpoHero} alt="Pulpo Hero" className="md:w-1/2 h-auto absolute md:right-[7.5%] z-4 md:z-5" />
            <img src={CirculoHero} alt="Circulo Acompañante" className="flex w-40 md:w-1/4 h-auto absolute top-20 -right-20 md:right-15 md:top-0" />
        </div>
    </>
  )
}
