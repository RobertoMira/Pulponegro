



interface CardInfoVectoresProps {
    imgV: string;
    infoMain: string;
    infoAux: string;
}


export const CardInfoVectores = ({ imgV, infoMain, infoAux }: CardInfoVectoresProps) => {
  return (
    <div>
        <img className="w-10" src={imgV} alt={infoAux} />
        <p className="text-center text-5xl font-extrabold">{infoMain}</p>
        <p className="text-center text-2xl font-bold">{infoAux}</p>
    </div>
  )
}
