import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Jost } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psimarinasouza.vercel.app"),
  title: "Psicóloga Marina Souza | Psicoterapia online para mulheres",
  description:
    "Psicoterapia online especializada para mulheres jovens e adultas. Marina Souza, psicóloga em Uberlândia – MG, CRP 04/37760. Agende pelo WhatsApp (34) 99880-6090.",
  keywords: [
    "psicóloga Uberlândia",
    "psicóloga online",
    "terapia para mulheres",
    "psicoterapia online",
    "ansiedade",
    "autoestima",
    "Marina Souza",
  ],
  openGraph: {
    title: "Psicóloga Marina Souza",
    description: "Psicoterapia online especializada para mulheres jovens e adultas.",
    locale: "pt_BR",
    type: "website",
    siteName: "Psicóloga Marina Souza",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#b98798",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Psicóloga Marina Souza",
  description: "Psicoterapia online especializada para mulheres jovens e adultas.",
  telephone: "+55 34 99880-6090",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Rondon Pacheco, 2300 – Griff Shopping Uberlândia",
    addressLocality: "Uberlândia",
    addressRegion: "MG",
    postalCode: "38408-404",
    addressCountry: "BR",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "151" },
  sameAs: [
    "https://www.instagram.com/psicologamarinasouza",
    "https://www.facebook.com/psicologamarinasouza/",
    "https://www.linkedin.com/in/marina-souza-a561734a/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${instrument.variable} ${jost.variable} antialiased`}>
      <body className="min-h-dvh overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
