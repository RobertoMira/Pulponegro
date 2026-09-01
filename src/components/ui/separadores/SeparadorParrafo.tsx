


interface SeparadorParrafoProps {
    parrafo?: string;
    encabezado: string;
}


export const SeparadorParrafo = ({parrafo, encabezado}: SeparadorParrafoProps) => {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center px-15">
        <p className="text-lila font-semibold">{parrafo}</p>
        <h2 className="text-3xl font-extrabold text-nowrap text-shadow-lg">{encabezado}</h2>
    </div>
  )
}
