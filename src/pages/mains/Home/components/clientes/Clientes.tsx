

import * as ClientesLogos from '../../../../../assets/images/clientes/BarrelFile'
import { CardClientes } from './CardClientes'


const clientes = [
    { id: 1, name: "AGS", imgC: ClientesLogos.AGS},
    { id: 2, name: "ALSA", imgC: ClientesLogos.ALSA},
    { id: 3, name: "Arbolandia", imgC: ClientesLogos.Arbolandia},
    { id: 4, name: "CCERM", imgC: ClientesLogos.CCERM},
    { id: 5, name: "Chijaj", imgC: ClientesLogos.Chijaj},
    { id: 6, name: "Colegio Playa del Carmen", imgC: ClientesLogos.ColegioPlayaDelCarmen},
    { id: 7, name: "CPCRM", imgC: ClientesLogos.CPCRM},
    { id: 8, name: "Congreso Ibero", imgC: ClientesLogos.CongresoIbero},
    { id: 9, name: "DeMuerte", imgC: ClientesLogos.DeMuerte},
    { id: 10, name: "FEMCIC", imgC: ClientesLogos.FEMCIC},
    { id: 11, name: "Gobierno de Guadalajara", imgC: ClientesLogos.GobGdl},
    { id: 12, name: "HOMEZEN", imgC: ClientesLogos.HOMEZEN},
    { id: 13, name: "Jalisco es México", imgC: ClientesLogos.JalicoEsMexico},
    { id: 14, name: "LEMUS", imgC: ClientesLogos.LEMUS},
    { id: 15, name: "Nación MX", imgC: ClientesLogos.NacionMX},
    { id: 16, name: "PANAJAL", imgC: ClientesLogos.PANAJAL},
    { id: 17, name: "The Wine Corner", imgC: ClientesLogos.TheWineCorner},
    { id: 18, name: "VINESP", imgC: ClientesLogos.VINESP},
    { id: 19, name: "Wish Nana", imgC: ClientesLogos.WishNana},
]




export const Clientes = () => {
  return (
    <div className='md:w-full flex flex-wrap gap-2.5 items-center justify-around'>
      {clientes.map((cliente) => (
        <CardClientes key={cliente.id} name={cliente.name} imgC={cliente.imgC} />
      ))}
    </div>
  )
}
