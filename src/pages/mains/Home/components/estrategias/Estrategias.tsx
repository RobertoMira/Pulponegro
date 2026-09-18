import { CardEstrategias } from "./CardEstrategias"

import EjemploPulpo from '../../../../../assets/images//pulpoGrande.webp';
import { FadeIn } from "../../../../../components/ui/animations/FadeIn";



const estrategias = [
    {id: 1, titulo: 'CAMPAÑAS', children: EjemploPulpo },
    {id: 2, titulo: 'COMUNICACIÓN ORGANIZACIONAL', children: EjemploPulpo },
    {id: 3, titulo: 'BRANDING', children: EjemploPulpo },
    {id: 4, titulo: 'IDENTIDAD CORPORATIVA', children: EjemploPulpo },
]



export const Estrategias = () => {
  return (
    <section className=" flex flex-col w-full gap-10
        rounded-2xl z-10
    ">
        <FadeIn>
            <h2 className="font-extrabold text-white z-10 text-center text-3xl pt-10">ESTRATEGIAS</h2>
        </FadeIn>
        <FadeIn
            className="flex flex-wrap items-center justify-around gap-5 md:gap-3 py-10"
            stagger={0.15}
        >
            {estrategias.map((estrategia) => (
                <CardEstrategias key={estrategia.id} titulo={estrategia.titulo}><img src={estrategia.children} alt={estrategia.titulo} /></CardEstrategias>
            ))}
        </FadeIn>
    </section>
  )
}
