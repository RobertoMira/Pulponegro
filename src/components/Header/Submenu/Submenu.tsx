import { useState, type ReactNode } from "react";
import { motion } from "motion";



interface SubmenuProps {
    titulo: string;
    children: ReactNode;
}


export const Submenu = ({ titulo, children }: SubmenuProps) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => { setIsOpen(prev => !prev) }
    const handleActivated = () => { setIsOpen(true) }
    const handleDeactivated = () => { setIsOpen(false) }

    

    return (

        <>
            <li
                className=""
                onMouseEnter={handleActivated}
                onMouseLeave={handleDeactivated}
            >
                <button
                    className=""
                    onClick={handleToggle}
                >
                    {titulo}
                </button>
                {isOpen && (
                    <motion.ul
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
