import PulpoTexto from '../../assets/images/PULPO-NEGRO-LARGE-TEXTO.png'

import { Link } from 'react-router-dom';
import SubMenu from '../SubMenu/SubMenu';

import styles from './Header.module.css'
import { ColorChangeHover } from '../Animaciones/ColorChangeHover';

export default function Header() {
  return (
    <>
      <header className={styles.navMenu}>

        <div>
          <img src={PulpoTexto} alt="Icono" className='min-w-60 max-w-60 flex place-self-center' />
        </div>

        <nav className={styles.menu}>
          <ul className={styles.ulLista}>
            <ColorChangeHover hoverColor='#99adda'>
              <li className={styles.lilista}><Link className={styles.alista} to="/">INICIO</Link></li>
            </ColorChangeHover>
            <ColorChangeHover hoverColor='#99adda'>
              <li className={styles.lilista}><Link className={styles.alista} to="/nosotros">NOSOTROS</Link></li>
            </ColorChangeHover>
            {/* <li className={styles.lilista}><Link className={styles.alista} to="">SERVICIOS</Link></li> */}
            <ColorChangeHover hoverColor='#99adda'>
              <SubMenu title='SERVICIOS'>
                <ColorChangeHover hoverColor='#99adda'>
                  <li className={styles.lilista}><Link className={styles.alista} to="">MARKETING</Link></li>
                </ColorChangeHover>
                <ColorChangeHover hoverColor='#99adda'>
                  <li className={styles.lilista}><Link className={styles.alista} to="">DESARROLLO WEB</Link></li>
                </ColorChangeHover>
              </SubMenu>
            </ColorChangeHover>
            <ColorChangeHover hoverColor='#99adda'>
              <li className={styles.lilista}><Link className={styles.alista} to="">CONTACTANOS</Link></li>
            </ColorChangeHover>

          </ul>
        </nav>
      </header>
    </>
  );
}