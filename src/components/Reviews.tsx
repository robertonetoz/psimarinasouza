"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { contact, reviews } from "@/content/site";
import { StarRow } from "./icons";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const review = reviews[index];

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + reviews.length) % reviews.length);
  };

  return (
    <section id="avaliacoes" className="grain bg-blush py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">O que dizem as pacientes</h2>
          <div className="mt-10 flex items-center gap-5">
            <span className="font-display text-[5.5rem] leading-none text-rose-deep">5,0</span>
            <span className="flex flex-col gap-2">
              <StarRow className="size-5" />
              <span className="text-ink-soft">151 avaliações no Google</span>
            </span>
          </div>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border-b border-rose pb-1 text-rose-deep transition-colors hover:border-ink hover:text-ink"
          >
            Ler todas as avaliações no Google
          </a>
        </div>

        <figure className="relative flex min-h-[24rem] flex-col justify-between rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_-50px_rgba(67,52,59,0.5)] sm:p-12">
          <span aria-hidden="true" className="pointer-events-none absolute right-8 top-2 font-display text-[10rem] leading-none text-mist sm:right-12">
            &rdquo;
          </span>

          <div className="relative" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <StarRow className="size-4" />
                <blockquote className="mt-6 font-display text-[1.7rem] leading-[1.3] text-ink sm:text-[2.1rem]">
                  {review.text}
                </blockquote>
                <figcaption className="mt-8 text-ink-soft">
                  <span className="text-ink">{review.name}</span>, {review.when}, no Google
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative mt-10 flex items-center justify-between gap-4">
            <p className="text-sm text-ink-soft">
              {index + 1} de {reviews.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Avaliação anterior"
                className="grid size-12 place-items-center rounded-full border border-rose-soft text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
              >
                <ArrowLeft className="size-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próxima avaliação"
                className="grid size-12 place-items-center rounded-full border border-rose-soft text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
              >
                <ArrowRight className="size-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
