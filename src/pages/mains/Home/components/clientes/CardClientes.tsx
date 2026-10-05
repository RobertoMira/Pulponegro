interface CardClientesProps {
    name: string;
    text?: string;
    imgC?: string;
}


export const CardClientes = ({name, text, imgC}: CardClientesProps) => {
  return (
    <div className="group bg-cyan-950 w-45 md:w-50 h-50 rounded-md flex flex-col gap-1
        justify-center text-center shadow-xl/90 shadow-lila
        transition-all duration-200 hover:-translate-y-1
    ">
        <img
            className="h-35 w-full object-contain px-4 brightness-30 invert opacity-70
                transition duration-200 group-hover:opacity-100 hover:brightness-70 group-hover:scale-105
                group-hover:drop-shadow-[0_0_10px_var(--color-lila)]"
            loading="lazy"
            src={imgC}
            alt={name}
        />
        {text && <p className="text-white/70 text-sm px-2">{text}</p>}
    </div>
  )
}