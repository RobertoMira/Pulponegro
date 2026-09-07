
import Pulpo from "../../../../../assets/images/pulpoRecortado.png"
import { LinkPrimaryButton } from "../../../../../components/ui/navigation/LinkPrimaryButton"
import SeccionServicios from "./Herocomps/cardServicios/SeccionServicios"


export default function HeroServicios() {
  return (
    <section className="relative w-full flex flex-col md:flex-row md:gap-10 md:py-5 md:px-[5%] mx-auto
            md:h-[calc(100vh-160px)] items-center justify-center md:justify-start">
        <div className="grid grid-cols-12 gap-6 items-center justify-center">
          <div className="col-span-4 flex flex-col gap-6 items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">NUESTROS <span className="text-lila">SERVICIOS</span></h2>
            <img className="w-100" src={Pulpo} alt="Imagen Pulpo" />
            <p className="text-xl font-semibold">OFRECEMOS DIVERSAS MANERAS DE IMPULSAR TU MARCA</p>
            <LinkPrimaryButton to="contacto" variant="primary" className="w-50">CONTACTANOS</LinkPrimaryButton>
          </div>
          <div className="col-span-8 flex flex-wrap justify-center gap-5">
            <SeccionServicios />
          </div>
        </div>
    </section>
  )
}
