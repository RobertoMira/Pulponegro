
import { Link } from 'react-router-dom'
import { CardServicios } from './CardServicios'
import { FadeIn } from '../../../../../../../components/ui/animations/FadeIn'


const servicios = [
    {id: 1, label: 'ESTUDIO CREATIVO', iconS: 'design_services', description: 'DISEÑADORES A TU DISPOSICIÓN', path: '#estudioCreativo' },
    {id: 2, label: 'REDES SOCICALES', iconS: 'thumbs_up_double', description: 'MANEJAMOS TUS REDES SOCIALES', path: '#redesSociales' },
    {id: 3, label: 'DESARROLLO WEB', iconS: 'code', description: 'PAGINAS WEB A MEDIDA', path: '#desarrolloWeb' },
    {id: 4, label: 'AUDIOVISUALES', iconS: 'video_camera_back', description: 'CREACION DE CONTENIDO PARA TU MARCA', path: '#audiovisuales' },
    {id: 5, label: 'CONSULTORÍA', iconS: 'business_center', description: 'CONSULTORÍA PERSONALIZADA', path: '#consultoria' },
]


export default function SeccionServicios() {
  return (
    <FadeIn
        className="w-full h-full flex flex-wrap justify-center gap-5"
        stagger={0.2}
        duration={0.55}
    >
        {servicios.map((servicio) => (
            <Link key={servicio.id} to={servicio.path}>
                <CardServicios label={servicio.label} iconS={servicio.iconS} description={servicio.description} />
            </Link>
        ))}
    </FadeIn>
  )
}
