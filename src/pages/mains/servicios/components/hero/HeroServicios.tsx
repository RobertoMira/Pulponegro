
import { motion } from "motion/react"
import Pulpo from "../../../../../assets/images/pulpoRecortado.png"
import { LinkPrimaryButton } from "../../../../../components/ui/navigation/LinkPrimaryButton"
import SeccionServicios from "./Herocomps/cardServicios/SeccionServicios"
import { FadeIn } from "../../../../../components/ui/animations/FadeIn"


export default function HeroServicios() {
  return (
    <section id="inicioServicios" className="relative w-full flex flex-col md:flex-row md:gap-10 px-5 py-5 md:py-5 md:px-[5%] mx-auto
            md:h-[calc(100vh-160px)] items-center justify-center md:justify-start">
        <div className="md:grid md:grid-cols-13 flex flex-col gap-6 md:gap-6 items-center justify-center">
          <FadeIn direction="izquierda" className="md:col-span-4 flex flex-col gap-6 items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-extrabold">NUESTROS <span className="text-lila">SERVICIOS</span></h2>
            <img className="w-100" src={Pulpo} alt="Imagen Pulpo" />
            <p className="text-xl text-center md:text-left font-semibold">OFRECEMOS DIVERSAS MANERAS DE IMPULSAR TU MARCA</p>
            <LinkPrimaryButton to="contacto" variant="primary" className="w-40 md:w-50">CONTACTANOS</LinkPrimaryButton>
          </FadeIn>
          <motion.div className="md:col-span-1 md:w-2 md:h-5/6 w-5/6 h-2 rounded-2xl bg-lila justify-self-center"  
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9 }}
          ></motion.div>
          <div className="md:col-span-8 h-full">
            <SeccionServicios />
          </div>
        </div>
    </section>
  )
}
