
import MascaraBendita from '../../../../../assets/images/home/MascaraBendita.png'
import LogoBlackCover from '../../../../../assets/images/home/LogoBlackCover.png'
import { CardMarcas } from './CardMarcas';



const marcas = [
    {id: 1, titulo: 'BLACK COVER', children: LogoBlackCover },
    {id: 2, titulo: 'MASCARA BENDITA', children: MascaraBendita },
]



export const Marcas = () => {
  return (
    <section className="flex flex-col w-full bg-inherit
        rounded-2xl
    ">
        <div className="flex flex-wrap items-center justify-around gap-5 md:gap-0 py-10">
            {marcas.map((marca) => (
                <CardMarcas key={marca.id} titulo={marca.titulo}><img className='md:w-70' src={marca.children} alt={marca.titulo} /></CardMarcas>
            ))}
        </div>
        
    </section>
  )
}
