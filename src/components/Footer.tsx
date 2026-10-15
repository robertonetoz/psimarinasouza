import Image from "next/image";
import { contact, nav } from "@/content/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-blush/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <Image src="/logo-full.png" alt="Marina Souza, psicóloga" width={479} height={251} className="w-48" />
            <p className="mt-4 text-sm text-ink-soft">{contact.crp}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-rose-deep">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-ink-soft">
            <p>
              WhatsApp{" "}
              <a href={`https://wa.me/${contact.whatsappNumber}`} className="text-ink hover:text-rose-deep">
                {contact.whatsappDisplay}
              </a>
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: contact.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-rose-soft text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 rounded-2xl bg-white px-6 py-5 text-sm leading-relaxed text-ink-soft">
          Este site não oferece atendimento de urgência. Em situação de crise ou risco, procure ajuda imediata: CVV,
          ligação gratuita 24 horas, no <a href="tel:188" className="text-ink underline underline-offset-4">188</a>, ou
          SAMU no <a href="tel:192" className="text-ink underline underline-offset-4">192</a>.
        </p>

        <p className="mt-8 text-sm text-ink-soft">
          © 2026 Psicóloga Marina Souza. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
