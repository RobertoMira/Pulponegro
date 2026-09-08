import { useState } from "react"
import { ColorChangeHover } from "../../ui/animations/ColorChangeHover";
import { SubMenu } from "../Submenu/SubMenu";
import { Link } from "react-router-dom";

const linkStyle = "text-left text-inherit w-full px-3 py-1 whitespace-nowrap";
const liStyle = "list-none flex items-center justify-center";

import { menu } from "../Header";


export default function HamburMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative md:hidden">
        <button
            onClick={toggleMenu}
            type="button"
            className="cursor-pointer"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
            <span
                className="material-symbols-outlined text-[50px]! md:text-[80px]!"
                style={{ color: '#99adda' }}
            >
                {isOpen ? 'menu_open' : 'menu'}
            </span>
        </button>

        {isOpen && (
            <ul className="absolute left-1/2 top-full z-50 mt-3 flex w-[calc(100vw-2rem)] -translate-x-1/2 flex-col gap-1 bg-black px-4 py-3 text-left shadow-lg [&>div]:w-full">
                {menu.map((item) => (
                    <ColorChangeHover key={item.id} hoverColor='#99adda'>
                        {item.children ? (
                            <SubMenu title={item.titulo} to={item.to}>
                                {item.children.map((child) => (
                                    <ColorChangeHover key={child.id} hoverColor='#99adda'>
                                        <li className={liStyle}>
                                            <Link className={linkStyle} to={child.to}>
                                                {child.titulo}
                                            </Link>
                                        </li>
                                    </ColorChangeHover>
                                ))}
                            </SubMenu>
                        ) : (
                            <SubMenu title={item.titulo} to={item.to} />
                        )}
                    </ColorChangeHover>
                ))}
            </ul>
        )}
    </div>
  )
}
