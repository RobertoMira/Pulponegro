import { Link } from 'react-router-dom';

import { ColorChangeHover } from '../ui/animations/ColorChangeHover';
import { SubMenu } from './Submenu/SubMenu';

import PulpoTexto from '../../assets/images/LogoPulpoEncabezado.png'


const liStyle = "list-none flex items-center justify-center";
const linkStyle = "text-left text-inherit w-full px-3 py-1 whitespace-nowrap";
const ulStyle = "flex items-center ml-auto justify-around w-full";
const headerStyle = "py-3 bg-black md:px-[5%] px-5 text-white grid grid-cols-3 items-center w-full";
const menuStyle = "col-span-2 flex w-full";


const subNosotros = [
  { id: 1, to: "#nosotros", titulo: "HISTORIA" },
  { id: 2, to: "#mision", titulo: "MISIÓN" },
  { id: 3, to: "#vision", titulo: "VISIÓN" }
]


const subServicios = [
  { id: 1, to: "#marketing", titulo: "MARKETING" },
  { id: 2, to: "#desarrollo-web", titulo: "DESARROLLO WEB" },
]


const menu = [
  { id: 1, to: "/", titulo: "INICIO" },
  { id: 2, to: "/nosotros", titulo: "NOSOTROS", children: subNosotros },
  { id: 3, to: "/servicios", titulo: "SERVICIOS", children: subServicios },
  { id: 4, to: "/contactanos", titulo: "CONTACTANOS" }
]



export default function Header() {
  return (
    <>
      <header className={headerStyle}>
        <div className='col-span-1'>
          <img src={PulpoTexto} alt="Logo Pulpo Negro" className='min-w-60 max-w-60 flex place-self-center' />
        </div>
        <nav className={menuStyle}>
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