import PulpoFondo from '../../../../../../assets/images/pulpoRecortado.webp'


interface CardMVProps {
    idMV: string;
    gIcon: string;
    titulo: string;
    texto: string;
}


export const CardMV = ({ idMV, gIcon, titulo, texto }: CardMVProps) => {
    const isVision = idMV === 'vision'

  return (
        <article className={`relative isolate flex h-full min-h-80 overflow-hidden border-t-4 border-lila ${isVision ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <img className={`pointer-events-none absolute -right-12 top-1/2 w-64 -translate-y-1/2 ${isVision ? 'opacity-[0.08]' : 'opacity-[0.12] invert'}`} src={PulpoFondo} alt="" loading="lazy" />
            <div className="relative z-10 grid w-full grid-cols-1 items-center gap-5 p-6 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:p-8 md:p-10">
                <div id={idMV} className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                    <span className="material-symbols-outlined text-lila text-[40px]! md:text-[90px]!" aria-hidden="true">{gIcon}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="h-1 w-10 bg-lila" />
                    <h3 className="text-3xl font-extrabold tracking-widest">{titulo}</h3>
                    <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${isVision ? 'text-black/70' : 'text-white/75'}`}>{texto}</p>
                </div>
            </div>
        </article>
  )
}
