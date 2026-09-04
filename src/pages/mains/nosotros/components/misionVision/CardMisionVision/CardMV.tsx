import PulpoFondo from '../../../../../../assets/images/pulpoRecortado.png'


interface CardMVProps {
    idMV: string;
    gIcon: string;
    titulo: string;
    texto: string;
}


export const CardMV = ({ idMV, gIcon, titulo, texto }: CardMVProps) => {
  return (
    <div className='grid grid-rows-2 w-140 md:h-180 md:gap-10 items-center justify-center bg-white rounded-2xl border-lila border-x-10 border-2 shadow-2xl px-10 py-4'>
        <div id={idMV} className='relative row-span-1 flex items-center justify-center w-full h-full'>      
            <img className='absolute opacity-40 w-full' src={PulpoFondo} alt="Pulpo De Fondo" />
            <span className="absolute material-symbols-outlined text-[150px]! md:text-[340px]!"
                style={{ color: '#99adda' }}
            >
            {gIcon}
            </span>
        </div>
        <div className='row-span-1'>
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-3xl font-extrabold tracking-widest text-shadow-lg">{titulo}</h2>
                <p className="text-lg md:text-2xl text-center font-bold text-shadow-xs">{texto}</p>
            </div>
        </div>
        
    </div>
  )
}
