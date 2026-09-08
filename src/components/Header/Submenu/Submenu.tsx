import { useState, type MouseEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";



interface SubMenuProps {
    title: string;
    to: string;
    children?: ReactNode;
}


export const SubMenu = ({ title, to, children }: SubMenuProps) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => { setIsOpen(prev => !prev) }
    const handleActivated = () => {
        if (window.innerWidth >= 768) setIsOpen(true);
    }
    const handleDeactivated = () => {
        if (window.innerWidth >= 768) setIsOpen(false);
    }
    const handleTitleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (window.innerWidth < 768) event.preventDefault();
        handleToggle();
    }

    

    return (

        <>
            <li
                className="relative z-10 flex w-full items-center justify-center max-md:flex-col max-md:items-stretch"
                onMouseEnter={handleActivated}
                onMouseLeave={handleDeactivated}
            >
                <Link
                    className="block w-full bg-none px-3 py-2 font-bold text-fondo"
                    to={to}
                    onClick={children ? handleTitleClick : handleToggle}
                >
                    {title}
                </Link>
                {(isOpen && children) && (
                    <motion.ul className="absolute top-full w-fit rounded-lg border-2 bg-gray-900 px-2 py-3 shadow-lg max-md:static max-md:w-full max-md:rounded-none max-md:border-0 max-md:px-0 max-md:py-0 max-md:shadow-none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {children}
                    </motion.ul>
                )}
            </li>
        </>
  )
}
