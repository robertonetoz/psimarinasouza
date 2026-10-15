"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open ? "bg-white/85 shadow-[0_1px_0_#e9e4e6] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Psicóloga Marina Souza, voltar ao início">
          <Image src="/logo-symbol.png" alt="" width={150} height={137} className="w-10" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.45rem] tracking-wide text-ink">Marina Souza</span>
            <span className="mt-1 text-[0.68rem] tracking-[0.32em] text-rose-deep">psicóloga</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.95rem] text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-rose after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-colors hover:bg-rose-deep sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Agendar sessão
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-mist xl:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white xl:hidden"
          >
            <ul className="flex flex-col px-5 pt-6 sm:px-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4 }}
                  className="border-b border-mist"
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl text-ink">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-5 pt-8 sm:px-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-white"
              >
                <WhatsAppIcon className="size-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
