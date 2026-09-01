
import EjemploPulpo from '../../../../../assets/images//pulpoGrande.png';
import { CardMarcas } from './CardMarcas';



const marcas = [
    {id: 1, titulo: 'BLACK COVER', children: EjemploPulpo },
    {id: 2, titulo: 'MASCARA BENDITA', children: EjemploPulpo },
]



export const Marcas = () => {
  return (
    <section className="flex flex-col w-full bg-inherit
        rounded-2xl
    ">
        <div className="flex flex-wrap items-center justify-around gap-5 md:gap-0 py-10">
            {marcas.map((marca) => (
                <CardMarcas key={marca.id} titulo={marca.titulo}><img src={marca.children} alt={marca.titulo} /></CardMarcas>
            ))}
        </div>
        
    </section>
  )
}
