import { useState, type ReactNode } from "react";
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
    const handleActivated = () => { setIsOpen(true) }
    const handleDeactivated = () => { setIsOpen(false) }

    

    return (

        <>
            <li
                className="relative flex items-center justify-center z-10"
                onMouseEnter={handleActivated}
                onMouseLeave={handleDeactivated}
            >
                <Link
                    className="bg-none px-3 py-1 font-bold text-fondo"
                    to={to}
                    onClick={handleToggle}
                >
                    {title}
                </Link>
                {(isOpen && children) && (
                    <motion.ul className="w-fit absolute top-full py-3 px-2 shadow-lg rounded-lg border-2 bg-gray-900"
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
