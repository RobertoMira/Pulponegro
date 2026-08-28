import type { ReactNode } from "react";


interface CardEstrategiasProps {
    titulo?: string;
    children: ReactNode;
}


export const CardEstrategias = ({ titulo, children }: CardEstrategiasProps) => {
  return (
    <div className="grid grid-rows-6 justify-center items-center bg-white rounded-2xl w-80 h-80
        shadow-lila shadow-2xl/75 py-4 px-2
    ">
        <p className="row-span-1 text-2xl font-extrabold text-center">{titulo}</p>
        <div className="row-span-5">
            {children}
        </div>

    </div>
  )
}
