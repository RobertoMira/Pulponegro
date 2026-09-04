import { CardMV } from "./CardMisionVision/CardMV"


const contenido = [
    { id: 1, idMV: "mision", gIcon: "target", titulo: "MISIÓN", texto: "Acompañamos a personas, marcas y organizaciones a construir historias auténticas que conectan con propósito. Con creatividad, estrategia y empatía, diseñamos soluciones de comunicación que generan impacto y ayudan a alcanzar objetivos reales, desde lo emocional hasta lo comercial." },
    { id: 2, idMV: "vision", gIcon: "eye_tracking", titulo: "VISIÓN", texto: "Ser una agencia reconocida por poner lo humano en el centro de cada historia. Buscamos inspirar y colaborar con quienes desean transformar su entorno a través de la comunicación, siendo un puente entre lo que una marca sueña y lo que el mundo necesita escuchar." }
]


export default function MisionVision() {
  return (
    <div className="flex flex-wrap items-center md:justify-around gap-4 md:gap-0 w-full md:px-[5%]">
        {contenido.map((carta) => (
            <CardMV key={carta.id} idMV={carta.idMV} gIcon={carta.gIcon} titulo={carta.titulo} texto={carta.texto} />
        ))}
    </div>
  )
}
