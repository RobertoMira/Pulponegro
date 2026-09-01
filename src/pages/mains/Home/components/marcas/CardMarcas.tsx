import type { ReactNode } from "react";


interface CardMarcasProps {
    titulo?: string;
    children: ReactNode;
}


export const CardMarcas = ({ titulo, children }: CardMarcasProps) => {
  return (
    <div className="grid grid-rows-6 justify-center items-center bg-inherit rounded-2xl w-100 h-100
        py-4 px-2
    ">
        <div className="row-span-5">
            {children}
        </div>
        <p className="row-span-1 text-2xl font-extrabold text-center">{titulo}</p>

    </div>
  )
}
