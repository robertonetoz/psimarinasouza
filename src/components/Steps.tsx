import { steps, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function Steps() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">Como funciona a terapia online</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Simples do primeiro contato à sessão. Você só precisa de um lugar reservado, onde se sinta à vontade para
            falar.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,#d9bcc6_0_6px,transparent_6px_12px)] bg-[length:12px_1px] lg:block" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="relative grid size-14 place-items-center rounded-full border border-rose-soft bg-white font-display text-2xl italic text-rose-deep">
                {i + 1}
              </span>
              <h3 className="mt-7 font-display text-[1.9rem] leading-tight text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-5 rounded-[2rem] bg-mist/60 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="max-w-xl font-display text-3xl leading-tight text-ink">Pronta para o primeiro passo?</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-white transition-colors hover:bg-rose-deep"
          >
            <WhatsAppIcon className="size-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
