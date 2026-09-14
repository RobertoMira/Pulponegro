
import MascaraBendita from '../../../../../assets/images/home/MascaraBendita.png'
import LogoBlackCover from '../../../../../assets/images/home/LogoBlackCover.png'
import { CardMarcas } from './CardMarcas';
import { FadeIn } from '../../../../../components/ui/animations/FadeIn';



const marcas = [
    {id: 1, titulo: 'BLACK COVER', children: LogoBlackCover, fade: "izquierda" },
    {id: 2, titulo: 'MASCARA BENDITA', children: MascaraBendita, fade: "derecha" },
] as const;



export const Marcas = () => {
  return (
    <section className="flex flex-col w-full bg-inherit
        rounded-2xl
    ">
        <div className="flex flex-wrap items-center justify-around gap-5 md:gap-0 py-10">
            {marcas.map((marca) => (
                <FadeIn key={marca.id} direction={marca.fade} >
                    <CardMarcas titulo={marca.titulo}><img className='md:w-70' src={marca.children} alt={marca.titulo} /></CardMarcas>
                </FadeIn>
            ))}
        </div>
        
    </section>
  )
}
