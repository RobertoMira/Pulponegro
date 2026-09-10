import { ContenedorContactoRedes } from "./ContenedorContactoRedes/ContenedorContactoRedes";
import FormContacto from "./form/FormContacto";






export default function ContactoPage() {
  return (
    <>
      <section className="relative w-full flex flex-wrap items-center justify-center overflow-hidden px-5 md:px-[5%] mx-auto gap-5 md:gap-12
        bg-fondo py-5"
      >
        <ContenedorContactoRedes />
        <FormContacto />
      </section>
    </>
  )
}
