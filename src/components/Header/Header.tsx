import { Link } from 'react-router-dom';

import { ColorChangeHover } from '../ui/animations/ColorChangeHover';
import { SubMenu } from './Submenu/SubMenu';

import PulpoTexto from '../../assets/images/LogoPulpoEncabezado.png'
import HamburMenu from './MenuHamburger/HamburMenu';


const liStyle = "list-none flex items-center justify-center";
const linkStyle = "text-left text-inherit w-full px-3 py-1 whitespace-nowrap";
const ulStyle = "hidden md:flex items-center justify-end gap-8 ml-auto";
const headerStyle = "w-full bg-black px-5 py-3 text-white md:px-[5%] flex items-center justify-between";
const menuStyle = "relative flex w-full items-center justify-between";


export const subNosotros = [
  { id: 1, to: "/nosotros#historia", titulo: "HISTORIA" },
  { id: 2, to: "/nosotros#mision", titulo: "MISIÓN" },
  { id: 3, to: "/nosotros#vision", titulo: "VISIÓN" }
]


export const subServicios = [
  { id: 1, to: "#marketing", titulo: "MARKETING" },
  { id: 2, to: "#desarrollo-web", titulo: "DESARROLLO WEB" },
]


export const menu = [
  { id: 1, to: "/", titulo: "INICIO" },
  { id: 2, to: "/nosotros", titulo: "NOSOTROS", children: subNosotros },
  { id: 3, to: "/servicios", titulo: "SERVICIOS", children: subServicios },
  { id: 4, to: "/contactanos", titulo: "CONTACTANOS" }
]



export default function Header() {
  return (
    <>
      <header className={headerStyle}>
        <nav className={menuStyle}>
          <div className='shrink-0 md:w-auto'>
            <img src={PulpoTexto} alt="Logo Pulpo Negro" className='flex min-w-60 max-w-60 place-self-center' />
          </div>
          <ul className={ulStyle}>
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
                  // <Link className={linkStyle} to={item.to}>
                  //   {item.titulo}
                  // </Link>
                )}
              </ColorChangeHover>
            ))}
          </ul>
          
          <HamburMenu />
          
        </nav>
      </header>
    </>
  );
}
// }
//             <ColorChangeHover hoverColor='#99adda'>
//               <li className={styles.lilista}><Link className={styles.alista} to="/nosotros">NOSOTROS</Link></li>
//             </ColorChangeHover>
//             {/* <li className={styles.lilista}><Link className={styles.alista} to="">SERVICIOS</Link></li> */}
//             <ColorChangeHover hoverColor='#99adda'>
//               <SubMenu title='SERVICIOS' to="/servicios">
//                 <ColorChangeHover hoverColor='#99adda'>
//                   <li className={styles.lilista}><Link className={styles.alista} to="">MARKETING</Link></li>
//                 </ColorChangeHover>
//                 <ColorChangeHover hoverColor='#99adda'>
//                   <li className={styles.lilista}><Link className={styles.alista} to="">DESARROLLO WEB</Link></li>
//                 </ColorChangeHover>
//               </SubMenu>
//             </ColorChangeHover>
//             <ColorChangeHover hoverColor='#99adda'>
//               <li className={styles.lilista}><Link className={styles.alista} to="">CONTACTANOS</Link></li>
//             </ColorChangeHover>

//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// }