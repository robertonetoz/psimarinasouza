"use client";

import { motion } from "motion/react";
import { photos, stats, whatsappLink } from "@/content/site";
import { Photo } from "./Photo";
import { StarRow, WhatsAppIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["Um lugar seguro", "para você", "se ouvir."];

// Contorno de coração que se desenha ao carregar a página, ecoando o símbolo da marca.
const heartPath =
  "M300 530 C 150 430, 28 312, 34 190 C 40 92, 120 34, 205 40 C 252 44, 286 74, 300 112 C 314 74, 348 44, 395 40 C 480 34, 560 92, 566 190 C 572 312, 450 430, 300 530 Z";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Mancha suave de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[44rem] rounded-full bg-blush blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-3 text-[0.95rem] text-rose-deep"
          >
            <span className="h-px w-10 bg-rose" aria-hidden="true" />
            Psicoterapia online para mulheres
          </motion.p>

          <h1 className="font-display text-[clamp(3.2rem,8.4vw,7.4rem)] leading-[0.95] tracking-[-0.01em] text-ink">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease, delay: 0.2 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.75 }}
          >
            <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-soft sm:text-xl">
              Atendimento especializado para mulheres jovens e adultas, com acolhimento, ética e escuta de verdade.
              De onde você estiver.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-deep px-7 py-4 text-white shadow-[0_18px_40px_-18px_rgba(148,103,122,0.8)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                <WhatsAppIcon className="size-5" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-rose-soft px-7 py-4 text-ink transition-colors hover:border-rose hover:bg-blush"
              >
                Conhecer a Marina
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:mr-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 600 560"
            className="pointer-events-none absolute -inset-x-[22%] -top-[12%] w-[144%] overflow-visible"
          >
            <motion.path
              d={heartPath}
              fill="none"
              stroke="#b98798"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ pathLength: { duration: 2.6, ease: "easeInOut", delay: 0.4 }, opacity: { duration: 0.3, delay: 0.4 } }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="relative"
          >
            <Photo
              src={photos.hero}
              alt="Psicóloga Marina Souza"
              label="Espaço para a foto principal da Marina (vertical, 4:5)"
              priority
              className="arch aspect-[4/5] w-full shadow-[0_40px_80px_-40px_rgba(67,52,59,0.45)]"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.4 }}
              className="absolute -bottom-6 -left-4 rounded-2xl bg-white/95 px-5 py-4 shadow-[0_20px_50px_-20px_rgba(67,52,59,0.35)] backdrop-blur sm:-left-10"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl leading-none text-ink">5,0</span>
                <span className="flex flex-col gap-1">
                  <StarRow className="size-3.5" />
                  <span className="text-xs text-ink-soft">151 avaliações no Google</span>
                </span>
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.6 }}
              className="absolute -right-2 top-10 rounded-full bg-white/95 px-4 py-2 text-sm text-ink shadow-[0_14px_30px_-16px_rgba(67,52,59,0.4)] sm:-right-6"
            >
              <span className="mr-2 inline-block size-2 rounded-full bg-[#7fb38e] align-middle" aria-hidden="true" />
              Sessões online
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <dl className="grid gap-8 border-t border-mist py-10 sm:grid-cols-3 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl leading-none text-rose-deep">{s.value}</dd>
              <dd className="max-w-[12rem] text-sm leading-snug text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
