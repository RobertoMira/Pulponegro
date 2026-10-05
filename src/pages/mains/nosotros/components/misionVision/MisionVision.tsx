import { FadeIn } from "../../../../../components/ui/animations/FadeIn"
import { LinkPrimaryButton } from "../../../../../components/ui/navigation/LinkPrimaryButton"
import PulpoHero from "../../../../../assets/images/pulpoGrande.webp"
import { CardMV } from "./CardMisionVision/CardMV"


const contenido = [
    { id: 1, idMV: "mision", gIcon: "target", titulo: "MISIÓN", texto: "Acompañamos a personas, marcas y organizaciones a construir historias auténticas que conectan con propósito. Con creatividad, estrategia y empatía, diseñamos soluciones de comunicación que generan impacto y ayudan a alcanzar objetivos reales, desde lo emocional hasta lo comercial." },
    { id: 2, idMV: "vision", gIcon: "eye_tracking", titulo: "VISIÓN", texto: "Ser una agencia reconocida por poner lo humano en el centro de cada historia. Buscamos inspirar y colaborar con quienes desean transformar su entorno a través de la comunicación, siendo un puente entre lo que una marca sueña y lo que el mundo necesita escuchar." }
]


export default function MisionVision() {
  return (
    <section className="w-full md:px-[5%]" aria-labelledby="mision-vision-title">
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="mision-vision-title" className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">CREATIVIDAD CON <span className="text-lila">PROPÓSITO</span></h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-black/65 md:text-base">Cada idea parte de una intención: conectar con las personas y generar un impacto que se sienta</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {contenido.map((carta) => (
          <FadeIn key={carta.id} className="h-full">
            <CardMV idMV={carta.idMV} gIcon={carta.gIcon} titulo={carta.titulo} texto={carta.texto} />
          </FadeIn>
        ))}
      </div>
      <section className="relative isolate rounded-2xl mt-10 overflow-hidden bg-black px-6 py-8 text-white sm:px-9 md:mt-14 md:flex md:items-center md:justify-between md:gap-8 md:px-12 md:py-10" aria-labelledby="mision-vision-cta-title">
        <img aria-hidden="true" className="pointer-events-none absolute -right-10 -top-24 -z-10 w-64 opacity-10 md:right-24 md:w-80" src={PulpoHero} alt="" />
        <div className="relative z-10 mb-6 md:mb-0">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lila">¿Tienes una idea?</p>
          <h3 id="mision-vision-cta-title" className="text-3xl font-extrabold leading-tight sm:text-4xl">HAGAMOS QUE <span className="text-lila">CONECTE</span></h3>
        </div>
        <LinkPrimaryButton to="/contacto" variant="primary" className="relative z-10 w-full rounded-sm px-7 py-4 md:w-auto">CONTÁCTANOS<span aria-hidden="true"></span></LinkPrimaryButton>
      </section>
    </section>
  )
}
