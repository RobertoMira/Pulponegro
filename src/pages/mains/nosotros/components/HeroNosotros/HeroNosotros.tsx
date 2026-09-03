import { BarraSeparadora } from "../../../../../components/ui/separadores/BarraSeparadora";

import PulpoHero from "../../../../../assets/images/pulpoGrande.png";
import BanerHero from "../../../../../assets/images/nosotrosImagenes/queHacemos.png"
import ProyectosRealizados from '../../../../../assets/images/nosotrosImagenes/50Proyectos.png'
import MarcasImpulsadas from '../../../../../assets/images/nosotrosImagenes/marcasImpulsadas.png'
import PacionHacemos from '../../../../../assets/images/nosotrosImagenes/pasionHacemos.png'
import { CardInfoVectores } from "./CardInfoVectores";


const info = [
  { id: 1, imgV: ProyectosRealizados, infoMain: "+50", infoAux: "Proyectos Realizados" },
  { id: 2, imgV: MarcasImpulsadas, infoMain: "+20", infoAux: "Marcas Impulsadas" },
  { id: 3, imgV: PacionHacemos, infoMain: "100%", infoAux: "Pasión por lo que Hacemos" },
]


export default function HeroNosotros() {
  return (
    <>
      <div className="relative w-full flex flex-col md:grid md:grid-cols-12 md:gap-20 md:py-10 md:px-[5%] mx-auto
        items-center justify-center md:justify-start
      ">
        <div className="md:col-span-5 flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">HISTORIAS QUE <span className="text-lila">CONECTAN</span> IDEAS QUE <span className="text-lila">TRANSFORMAN</span></h2>
          <img className="absolute -z-10 md:w-100 lg:w-125 xl:w-150 top-0 right-2/6" src={PulpoHero} alt="Pulpo Negro Logo" />
          <BarraSeparadora wAncho="w-25" rBordes="rounded-r-2xl" />
          <p className="font-medium">
            Como un grupo creativo apasionados por contar historias poderosas. Durante un tiempo, nos hemos
            enfocado en generar estrategias y experiencias, que ayuden a nuestros clientes a alcanzar los
            objetivos de su marca.
          </p>
          <p className="font-medium">
            Porque creemos que cada proyecto es unico y entendemos el poder de la comunicación ,
            en <span className="font-extrabold">Pulpo Negro</span> construimos historias de éxito.
          </p>
          <div className="flex gap-5">
            {info.map((info) => (
              <CardInfoVectores key={info.id} imgV={info.imgV} infoMain={info.infoMain} infoAux={info.infoAux} />
            ))}
          </div>
        </div>
        <div className="md:col-span-7 md:w-[55vw] md:relative h-full flex items-start justify-center">
            <img className="w-9/10 md:absolute right-0 md:min-w-125 bg-white mix-blend-multiply" src={BanerHero} alt="Baner Estrategias" />
        </div>
      </div>
    </>
  )
}
