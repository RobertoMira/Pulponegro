import { CardContacto } from "./CardContacto"








export const ContenedorContactoRedes = () => {
  return (
    <div className="w-full md:w-3/8 h-185 px-8 py-8 rounded-2xl bg-white border-2  border-lila shadow-2xl md:border-gray-200
      md:hover:border-lila md:hover:shadow-2xl flex flex-col gap-7">
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-lila text-shadow-2xs">Contactanos!</h2>
            <p className="tex-xl font-bold text-lila text-shadow-2xs">Estamos siempre dispuestos a llevar tu marca al siguiente nivel</p>
            <p className="tex-xl font-bold text-lila text-shadow-2xs">Contacto Directos:</p>
        </div>

        <div className="flex flex-col gap-7">
            <CardContacto label="Email" description="PulpoNegro@gmail.com" iconC="mail" cType="link" cTo="" />
            <CardContacto label="Ubicación" description="Guadalajara, Jal, México" iconC="location_on" cType="link" cTo="" />
            <CardContacto label="WhatsApp" description="Chat Directo" iconC="chat" cType="link" cTo="" />
            <CardContacto label="Celular" description="+52 33 241 12 23" iconC="call" cType="link" cTo="" />
        </div>
    </div>
  )
}
