import { BarraSeparadora } from "../../../../../components/ui/separadores/BarraSeparadora";

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
      <div className="relative w-full flex flex-col md:grid md:grid-cols-12 md:gap-10 md:py-20 md:px-[5%] mx-auto
        items-center justify-center md:justify-start
      ">
        <div className="md:col-span-5 flex flex-col gap-8">
          <h2 className="text-5xl font-extrabold">HISTORIAS QUE <span className="text-lila">CONECTAN</span> IDEAS QUE <span className="text-lila">TRANSFORMAN</span></h2>
          <BarraSeparadora />
          <p></p>
          <div className="flex gap-5">
            {info.map((info) => (
              <CardInfoVectores key={info.id} imgV={info.imgV} infoMain={info.infoMain} infoAux={info.infoAux} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
