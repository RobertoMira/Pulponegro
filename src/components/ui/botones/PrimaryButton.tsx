
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  className?: string;
}

export const PrimaryButton = ({
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  ...buttonProps
}: PrimaryButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl px-5 py-2 text-sm transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 cursor-pointer';

  const variantStyles = {
    primary: 'bg-lila text-white hover:bg-purple-800 focus:ring-blue font-bold shadow-lg',
    secondary: 'bg-fondo text-lila border-3 border-lila hover:bg-gray-200 focus:ring-gray-200 shadow-lg',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-100',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type={type} className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
};
