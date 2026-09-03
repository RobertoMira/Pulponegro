



interface CardInfoVectoresProps {
    imgV: string;
    infoMain: string;
    infoAux: string;
}


export const CardInfoVectores = ({ imgV, infoMain, infoAux }: CardInfoVectoresProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
        <img className="w-20 md:w-30" src={imgV} alt={infoAux} />
        <p className="text-3xl md:text-5xl text-center font-extrabold">{infoMain}</p>
        <p className="text-xl md:text-2xl text-center font-bold">{infoAux}</p>
    </div>
  )
}
