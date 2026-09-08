




interface CardServiciosProps {
    label: string;
    iconS: string;
    description: string;
}


export const CardServicios = ({ label, iconS, description }: CardServiciosProps) => {
  return (
    <div className="w-70 h-30 md:w-90 md:h-40 rounded-2xl grid grid-cols-5 bg-fondo p-3 gap-10 shadow-2xl md:shadow-[9px_9px_16px_#cbd5e1,-9px_-9px_16px_#ffffff]">
        <div className="col-span-3 flex flex-col gap-4 justify-center w-full">
            <h3 className="text-2xs md:text-2xl font-bold text-shadow-2xs border-b-4 border-b-lila">{label}</h3>
            <p className="text-xs md:text-base font-light">{description}</p>
        </div>
        <div className="col-span-2 w-full flex items-center justify-center bg-lila/20 rounded-2xl">
            <span className="material-symbols-outlined text-[60px]! md:text-[80px]!"
                style={{ color: '#99adda' }}
            >
            {iconS}
            </span>
        </div>
    </div>
  )
}
