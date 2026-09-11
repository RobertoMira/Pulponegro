import { PrimaryButton } from "../../../../../components/ui/botones/PrimaryButton";
import { CardInput } from "./CardInput";

// import { useState, type ChangeEventHandler } from "react";



export default function FormContacto() {

  // const [ formData, setFormData ] = useState('');

  const handleSumbit = () => {
  }

  return (
    <div 
      className="w-full md:w-3/8 h-184 px-8 py-8 rounded-2xl bg-white border-2  border-lila shadow-2xl md:border-gray-200
      md:hover:border-lila md:hover:shadow-2xl">
      <form 
        action=""
        onSubmit={handleSumbit}
        className="flex flex-col gap-8"
      >
        <div>
          <h2 className="text-2xl text-lila font-bold text-shadow-2xs">Envíanos un mensaje!</h2>
        </div>

        <CardInput 
          fLabel="NOMBRE" 
          bgColor="bg-fondo"
          focusColor="focus:bg-lila/10 outline-lila/30 focus:outline focus:outline-4 focus:outline-lila/30"
          fType="text" 
          fname="nombre" 
          fplaceHolder="Ej. Pulpo Negro" 
          frequired
          variant="predeterminados"
        />
        <CardInput 
          fLabel="EMAIL" 
          bgColor="bg-fondo"
          focusColor="focus:bg-lila/10 outline-lila/30 focus:outline focus:outline-4 focus:outline-lila/30"
          fType="email" 
          fname="email" 
          fplaceHolder="Ej. PulpoNegro@gmail.com" 
          frequired
          variant="predeterminados"
        />
        <CardInput 
          fLabel="ASUNTO" 
          bgColor="bg-fondo"
          focusColor="focus:bg-lila/10 outline-lila/30 focus:outline focus:outline-4 focus:outline-lila/30"
          fType="text" 
          fname="asunto" 
          fplaceHolder="Asunto del mensaje" 
          frequired
          variant="predeterminados"
        />
        <CardInput 
          fLabel="MENSAJE" 
          bgColor="bg-fondo"
          focusColor="focus:bg-lila/10 outline-lila/30 focus:outline focus:outline-4 focus:outline-lila/30"
          fType="textarea" 
          fname="mensaje"
          fplaceHolder="Cuentanos lo que tienes en mente..." 
          frequired
          variant="textarea"
        />
    
        <PrimaryButton type="submit" variant="primary">Enviar Mensaje</PrimaryButton>

      </form>
    </div>
  )
}
