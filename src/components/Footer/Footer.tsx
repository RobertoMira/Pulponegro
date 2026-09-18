

import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import PulpoTexto from "../../assets/images/LogoPulpoEncabezado.png";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/+523334847616", icon: faWhatsapp },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577207035070", icon: faFacebookF },
  { label: "Instagram", href: "#", icon: faInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/pulpo-negro-agencia-de-comunicaci%C3%B3n/?viewAsMember=true", icon: faLinkedinIn },
];

export default function Footer() {
  return (
    <footer className="bg-black px-5 pt-12 text-white md:px-[5%]">
      <div className="mx-auto grid max-w-7xl gap-10 pb-10 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-16">
        <div className="flex flex-col items-start gap-5">
          <img src={PulpoTexto} alt="Logo Pulpo Negro" className="w-60 max-w-full" />
          <p className="max-w-sm text-sm leading-6 text-white/70">
            Impulsamos marcas con ideas que conectan y estrategias que dejan huella.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-lila text-lila transition-colors hover:bg-lila hover:text-black"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-bold tracking-[0.2em] text-lila">NAVEGACIÓN</h2>
          <nav className="flex flex-col items-start gap-3 text-sm">
            <Link className="transition-colors hover:text-lila" to="/">Inicio</Link>
            <Link className="transition-colors hover:text-lila" to="/nosotros">Nosotros</Link>
            <Link className="transition-colors hover:text-lila" to="/servicios">Servicios</Link>
            <Link className="transition-colors hover:text-lila" to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-bold tracking-[0.2em] text-lila">CONTACTO</h2>
          <div className="flex flex-col gap-4 text-sm text-white/80">
            <a className="flex items-center gap-3 transition-colors hover:text-lila" href="/contacto">
              <FontAwesomeIcon className="w-4 text-lila" icon={faPhone} />
              <span>+52 33 2597 4209</span>
            </a>
            <a className="flex items-center gap-3 transition-colors hover:text-lila" href="/contacto">
              <FontAwesomeIcon className="w-4 text-lila" icon={faEnvelope} />
              <span>unpulponegro@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-5 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Pulpo Negro. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
