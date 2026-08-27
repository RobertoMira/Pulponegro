import type { ReactNode } from "react";
import { Link } from "react-router-dom";


interface LinkPrimaryButtonProps {
    to: string;
    variant: 'primary' | 'secondary' | 'ghost';
    children: ReactNode;
    className?: string;
}


export const LinkPrimaryButton = ({
    to,
    variant = 'primary',
    children,
    className = ''
}: LinkPrimaryButtonProps) => {

    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl px-5 py-2 text-sm transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4';

    const variantStyles = {
        primary: 'bg-lila text-white hover:bg-purple-800 focus:ring-blue font-bold shadow-lg',
        secondary: 'bg-fondo text-lila border-3 border-lila hover:bg-gray-200 focus:ring-gray-200 shadow-lg',
        ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-100',
    }

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <Link to={to} className={`${combinedStyles}`} >{children}</Link>
  )
}
