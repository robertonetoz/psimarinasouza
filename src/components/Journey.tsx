import { contact, education, experience } from "@/content/site";
import { LinkedInIcon } from "./icons";

type Item = { period: string; title: string; place: string };

function Timeline({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h3 className="font-display text-3xl text-ink">{title}</h3>
      <ol className="mt-8 border-l border-rose-soft">
        {items.map((item) => (
          <li key={item.title + item.period} className="relative pb-10 pl-8 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-rose bg-white" />
            <p className="text-sm text-rose-deep">{item.period}</p>
            <p className="mt-1 text-lg leading-snug text-ink">{item.title}</p>
            <p className="mt-1 leading-relaxed text-ink-soft">{item.place}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="trajetoria" className="border-y border-mist bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">Formação e trajetória</h2>
          <p className="max-w-[32rem] text-lg leading-relaxed text-ink-soft lg:justify-self-end">
            Mais de quinze anos de psicologia, entre saúde mental pública, gestão de pessoas e uma década de
            consultório particular.
          </p>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-2 lg:gap-24">
          <Timeline title="Formação acadêmica" items={education} />
          <Timeline title="Experiência profissional" items={experience} />
        </div>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-rose-deep"
        >
          <LinkedInIcon className="size-4" />
          Ver perfil completo no LinkedIn
        </a>
      </div>
    </section>
  );
}
