import { CardContacto } from "./CardContacto"
import { CardRedes } from "./CardRedes"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"

export const ContenedorContactoRedes = () => {
  return (
    <div className="w-full md:w-3/8 h-184 px-8 py-8 rounded-2xl bg-white border-2  border-lila shadow-2xl md:border-gray-200
      md:hover:border-lila md:hover:shadow-2xl flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-lila text-shadow-2xs">Contactanos!</h2>
          <p className="tex-xl font-bold text-lila text-shadow-2xs">Estamos siempre dispuestos a llevar tu marca al siguiente nivel</p>
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-xl font-bold text-lila text-shadow-2xs">Contacto Directos:</p>
          <CardContacto label="Email" description="PulpoNegro@gmail.com" iconC="mail" cType="link" cTo="" />
          <CardContacto label="Ubicación" description="Guadalajara, Jal, México" iconC="location_on" cType="link" cTo="" />
          <CardContacto label="WhatsApp" description="Chat Directo" iconC={<FontAwesomeIcon icon={faWhatsapp} size="xl" className="text-lila" />} cType="link" cTo="" />
          <CardContacto label="Celular" description="+52 33 3484 7616" iconC="call" cType="link" cTo="" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-lila text-shadow-2xs">Redes Sociales</h2>
          <div className="flex gap-7 ">
            <CardRedes pathR="https://wa.me/+523334847616"><FontAwesomeIcon icon={faWhatsapp} size="xl" className="text-lila group-hover:text-white" /></CardRedes>
            <CardRedes pathR="https://www.facebook.com/profile.php?id=61577207035070"><FontAwesomeIcon icon={faFacebookF} size="lg" className="text-lila group-hover:text-white" /></CardRedes>
            <CardRedes pathR=""><FontAwesomeIcon icon={faInstagram} size="xl" className="text-lila group-hover:text-white" /></CardRedes>
            <CardRedes pathR="https://www.linkedin.com/company/pulpo-negro-agencia-de-comunicaci%C3%B3n/?viewAsMember=true"><FontAwesomeIcon icon={faLinkedinIn} className="text-lila group-hover:text-white" /></CardRedes>
            <CardRedes pathR="https://mail.google.com/mail/?view=cm&fs=1&to=comunicacion@pulponegro.com.mx"><FontAwesomeIcon icon={faEnvelope} className="text-lila group-hover:text-white" /> </CardRedes>
          </div>
        </div>
    </div>
  
  )
}
