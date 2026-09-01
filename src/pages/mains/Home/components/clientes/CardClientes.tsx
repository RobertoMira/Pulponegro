



interface CardClientesProps {
    name: string;
    text?: string;
    imgC?: string;
}



export const CardClientes = ({name, text, imgC}: CardClientesProps) => {
  return (
    <div className="bg-white w-45 md:w-50 h-70 rounded-md flex flex-col gap-1
        justify-center text-center shadow-xl/90 shadow-lila 
        transition-all invert-0 hover:invert duration-200
    ">
        <h2 className="font-extrabold">{name}</h2>
        <img className="hover:drop-shadow-md hover:drop-shadow-blue-600" src={imgC} alt={name} />
        <p>{text}</p>
    </div>
  )
}
