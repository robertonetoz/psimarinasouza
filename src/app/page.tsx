import { MotionProvider } from "@/components/MotionProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Topics } from "@/components/Topics";
import { Steps } from "@/components/Steps";
import { Journey } from "@/components/Journey";
import { Reviews } from "@/components/Reviews";
import { Instagram } from "@/components/Instagram";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Topics />
        <Steps />
        <Journey />
        <Reviews />
        <Instagram />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionProvider>
  );
}
