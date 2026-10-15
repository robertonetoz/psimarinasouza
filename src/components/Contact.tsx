import { MapPin } from "lucide-react";
import { contact, whatsappLink } from "@/content/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";

const socials = [
  { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: contact.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Contact() {
  return (
    <section id="contato" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-ink text-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-14 lg:p-16">
              <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl">
                Cuidar de você pode começar com uma mensagem.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
                Conte um pouco do que você está vivendo. A resposta chega pelo WhatsApp, com informações sobre
                horários e valores.
              </p>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-rose px-8 py-5 text-lg text-white transition-colors hover:bg-white hover:text-ink"
              >
                <WhatsAppIcon className="size-6" />
                {contact.whatsappDisplay}
              </a>

              <div className="mt-12 flex flex-wrap gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-rose hover:text-white"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col border-t border-white/10 lg:border-l lg:border-t-0">
              <iframe
                title="Localização do consultório no Griff Shopping Uberlândia"
                src={contact.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[0.6] lg:h-auto lg:flex-1"
              />
              <div className="flex gap-4 p-8 sm:px-14 lg:px-10">
                <MapPin className="mt-1 size-5 shrink-0 text-rose" strokeWidth={1.5} aria-hidden="true" />
                <address className="not-italic leading-relaxed text-white/80">
                  <span className="text-white">{contact.addressLine1}</span>
                  <br />
                  {contact.addressLine2}
                  <br />
                  {contact.addressLine3}
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-sm text-rose-soft underline-offset-4 hover:underline"
                  >
                    Abrir no Google Maps
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
