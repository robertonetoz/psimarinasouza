"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-rose-deep p-4 text-white shadow-[0_18px_40px_-14px_rgba(67,52,59,0.6)] transition-colors hover:bg-ink sm:bottom-8 sm:right-8"
        >
          <WhatsAppIcon className="size-6" />
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-500 group-hover:max-w-40 sm:inline">
            Agendar sessão
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
