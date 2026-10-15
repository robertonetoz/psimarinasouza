import Image from "next/image";
import { contact, photos } from "@/content/site";
import { Photo } from "./Photo";

const facts = [
  { term: "Abordagem", desc: "Terapia Cognitivo-Comportamental" },
  { term: "Atendimento", desc: "Online, para mulheres jovens e adultas" },
  { term: "Registro", desc: contact.crp },
  { term: "Base", desc: "Uberlândia – MG" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <Photo
            src={photos.about}
            alt="Marina Souza em seu espaço de atendimento"
            label="Espaço para uma foto da Marina no consultório ou em atendimento"
            className="aspect-[3/4] w-full rounded-[2rem]"
          />
          <div className="absolute -bottom-8 -right-4 hidden w-40 rounded-[1.5rem] bg-white p-5 shadow-[0_24px_60px_-28px_rgba(67,52,59,0.4)] sm:block lg:-right-12">
            <Image src="/logo-symbol.png" alt="" width={150} height={137} className="mx-auto w-20" />
            <p className="mt-3 text-center font-display text-lg italic leading-tight text-ink">Razão e emoção, lado a lado.</p>
          </div>
        </div>

        <div className="lg:pt-8">
          <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">Olá, eu sou a Marina.</h2>

          <div className="mt-8 max-w-[38rem] space-y-5 text-lg leading-[1.75] text-ink-soft">
            <p>
              Sou psicóloga formada pela Universidade Federal de Uberlândia e, desde 2016, me dedico à clínica. Hoje
              meu atendimento é especializado para mulheres jovens e adultas e acontece online, para que você possa
              cuidar de si de onde estiver.
            </p>
            <p>
              Minha trajetória passou pela saúde mental pública no CAPSi, pelo terceiro setor e por anos na área de
              pessoas de um grande hospital da cidade. Essa vivência, somada às formações em Terapia
              Cognitivo-Comportamental e em Terapia Familiar e Sexologia, me ajuda a olhar para cada mulher de forma
              integral: suas emoções, seus vínculos e seus projetos.
            </p>
            <p>
              Acredito numa terapia feita com acolhimento, ética e escuta de verdade, em que mente e coração caminham
              juntos, como no símbolo que me representa.
            </p>
          </div>

          <dl className="mt-12 grid max-w-[38rem] grid-cols-1 gap-x-10 gap-y-6 border-t border-mist pt-8 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="text-sm text-rose-deep">{f.term}</dt>
                <dd className="mt-1 text-ink">{f.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
