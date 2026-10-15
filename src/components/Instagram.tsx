import Image from "next/image";
import { CalendarHeart, HeartHandshake, Mic, Ribbon, Tv, type LucideIcon } from "lucide-react";
import { contact, instagramHighlights, instagramPosts } from "@/content/site";
import { InstagramIcon } from "./icons";

const highlightIcons: Record<string, LucideIcon> = {
  Terapia: HeartHandshake,
  "Setembro Amarelo": Ribbon,
  "Janeiro Branco": CalendarHeart,
  Palestras: Mic,
  Entrevistas: Tv,
};

// Cada arte do feed ganha um tratamento diferente, como no perfil real.
const tileStyles = [
  "bg-white text-rose-deep",
  "bg-rose text-white",
  "bg-blush text-ink italic",
  "bg-mist text-ink",
];

export function Instagram() {
  return (
    <section id="instagram" className="relative overflow-hidden bg-rose-deep py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-1/3 size-[36rem] rounded-full border border-white/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-[40%] size-[36rem] rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-5 transition-colors hover:bg-white/20"
          >
            <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-white">
              <Image src="/logo-symbol.png" alt="" width={150} height={137} className="w-7" />
            </span>
            {contact.instagramHandle}
          </a>

          <h2 className="mt-8 font-display text-5xl leading-[1.02] sm:text-6xl">Um pouco de terapia no seu dia a dia</h2>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/90">
            No Instagram, Marina compartilha reflexões e dicas práticas sobre ansiedade, autoestima e emoções, além de
            palestras, entrevistas e campanhas de saúde mental. Conteúdo para salvar, compartilhar e voltar sempre que
            precisar.
          </p>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-display text-5xl leading-none">9,5 mil</p>
              <p className="mt-2 text-sm text-white/85">seguidoras</p>
            </div>
            <div>
              <p className="font-display text-5xl leading-none">1.420</p>
              <p className="mt-2 text-sm text-white/85">publicações</p>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-5" aria-label="Destaques do perfil">
            {instagramHighlights.map((h) => {
              const Icon = highlightIcons[h] ?? HeartHandshake;
              return (
                <li key={h} className="flex w-20 flex-col items-center gap-2 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-rose p-[3px] ring-2 ring-white/70 ring-offset-2 ring-offset-rose-deep">
                    <Icon className="size-6" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="text-xs leading-tight text-white/90">{h}</span>
                </li>
              );
            })}
          </ul>

          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-ink transition-colors hover:bg-blush"
          >
            <InstagramIcon className="size-5" />
            Seguir no Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {instagramPosts.map((post, i) => (
            <a
              key={post.quote}
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver no Instagram: ${post.quote}`}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(40,20,30,0.6)] ${
                i % 2 === 1 ? "sm:translate-y-10" : ""
              } ${tileStyles[i % tileStyles.length]}`}
            >
              {post.image ? (
                <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="flex h-full flex-col justify-between p-5 transition-transform duration-700 group-hover:scale-[1.03] sm:p-7">
                  <p className="font-display text-[clamp(1.1rem,2.6vw,2rem)] leading-[1.12]">{post.quote}</p>
                  <p className="text-[0.7rem] not-italic opacity-80 sm:text-xs">{contact.instagramHandle}</p>
                </div>
              )}
              <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:bg-white/90 group-hover:text-rose-deep group-hover:opacity-100">
                <InstagramIcon className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
