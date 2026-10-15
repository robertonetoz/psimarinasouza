"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { topics, whatsappLink } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Topics() {
  const [active, setActive] = useState(0);
  const current = topics[active];

  return (
    <section id="temas" className="grain bg-blush py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">Como posso ajudar você</h2>
          <p className="max-w-[32rem] text-lg leading-relaxed text-ink-soft lg:justify-self-end">
            Cada história é única, mas algumas dores são comuns a muitas mulheres. Estes são alguns dos temas que
            acompanho no consultório.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <ul className="border-t border-rose-soft/70">
            {topics.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={t.title} className="border-b border-rose-soft/70">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={`tema-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  >
                    <span
                      className={`font-display text-3xl leading-tight transition-colors duration-300 sm:text-4xl ${
                        isActive ? "text-rose-deep" : "text-ink group-hover:text-rose-deep"
                      }`}
                    >
                      {t.title}
                    </span>
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        isActive ? "rotate-45 border-rose-deep bg-rose-deep text-white" : "border-rose-soft text-rose-deep"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="size-4" strokeWidth={1.5} />
                    </span>
                  </button>

                  {/* Texto inline no celular */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`tema-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden lg:hidden"
                      >
                        <p className="pb-6 pr-12 text-lg leading-relaxed text-ink-soft">{t.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Painel no desktop */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 min-h-[22rem] overflow-hidden rounded-[2rem] bg-white p-12 shadow-[0_30px_80px_-50px_rgba(67,52,59,0.5)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <span className="block h-px w-14 bg-rose" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-4xl leading-tight text-ink">{current.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">{current.text}</p>
                </motion.div>
              </AnimatePresence>
              <a
                href={whatsappLink(`Olá, Marina! Vim pelo site e gostaria de conversar sobre ${current.title.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 border-b border-rose pb-1 text-rose-deep transition-colors hover:border-ink hover:text-ink"
              >
                Conversar sobre esse tema
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
