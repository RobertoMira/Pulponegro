import { Link } from "react-router-dom";

interface CardContactoProps {
    label: string;
    iconC: string;
    description: string;
    cType: 'link' | 'text';
    cTo: string;
}


export const CardContacto = ({ label, iconC, description, cType, cTo }: CardContactoProps) => {
  return (
    <div className="w-full h-fit flex  items-center gap-5">
        <div className="w-12 h-12 flex items-center justify-center bg-lila/20 rounded-2xl border border-gray-300">
            <span className="material-symbols-outlined text-[30px]! md:text-[30px]!"
                style={{ color: '#99adda' }}
            >
                {iconC}
            </span>
        </div>
        <div className="flex flex-col gap-1 justify-center">
            <p className="text-base text-gray-500">{label}</p>
            {cType === 'text' ? (
                <p className="text-lila">{description}</p>
            ) : (
                <Link className="text-lila font-bold text-shadow-2xs" to={cTo} >{description}</Link>
            )}
        </div>
    </div>
  )
}
