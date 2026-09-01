import { CardEstrategias } from "./CardEstrategias"

import EjemploPulpo from '../../../../../assets/images//pulpoGrande.png';



const estrategias = [
    {id: 1, titulo: 'CAMPAÑAS', children: EjemploPulpo },
    {id: 2, titulo: 'COMUNICACIÓN ORGANIZACIONAL', children: EjemploPulpo },
    {id: 3, titulo: 'BRANDING', children: EjemploPulpo },
    {id: 4, titulo: 'IDENTIDAD CORPORATIVA', children: EjemploPulpo },
]



export const Estrategias = () => {
  return (
    <section className="flex flex-col w-full bg-black
        rounded-2xl
    ">
        <h2 className="font-extrabold text-white text-center text-3xl pt-10">ESTATEGIAS</h2>
        <div className="flex flex-wrap items-center justify-around gap-5 md:gap-3 py-10">
            {estrategias.map((estrategia) => (
                <CardEstrategias key={estrategia.id} titulo={estrategia.titulo}><img src={estrategia.children} alt={estrategia.titulo} /></CardEstrategias>
            ))}
        </div>
        
    </section>
  )
}
