import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagem de pré-visualização ao compartilhar o link (WhatsApp, Instagram, Facebook...).
export const alt = "Psicóloga Marina Souza – Psicoterapia online para mulheres";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "node_modules/@fontsource");
const [serif, serifItalic, sans, symbol] = await Promise.all([
  readFile(join(fontsDir, "instrument-serif/files/instrument-serif-latin-400-normal.woff")),
  readFile(join(fontsDir, "instrument-serif/files/instrument-serif-latin-400-italic.woff")),
  readFile(join(fontsDir, "jost/files/jost-latin-400-normal.woff")),
  readFile(join(process.cwd(), "public/logo-symbol.png"), "base64"),
]);

const heartPath =
  "M300 530 C 150 430, 28 312, 34 190 C 40 92, 120 34, 205 40 C 252 44, 286 74, 300 112 C 314 74, 348 44, 395 40 C 480 34, 560 92, 566 190 C 572 312, 450 430, 300 530 Z";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#ffffff",
          fontFamily: "Jost",
          color: "#43343b",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -200,
            width: 720,
            height: 720,
            borderRadius: 720,
            background: "#f7f2f4",
          }}
        />

        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 84px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#94677a" }}>
            <div style={{ width: 48, height: 2, background: "#b98798", marginRight: 18 }} />
            Psicoterapia online para mulheres
          </div>

          <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 128, lineHeight: 1, marginTop: 30 }}>
            Marina Souza
          </div>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 12, color: "#94677a", marginTop: 14 }}>
            PSICÓLOGA
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontSize: 44,
              lineHeight: 1.15,
              color: "#6f5f66",
              marginTop: 40,
            }}
          >
            Um lugar seguro para você se ouvir.
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: 46, fontSize: 24, color: "#6f5f66" }}>
            <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 44, color: "#94677a", marginRight: 20 }}>
              5,0
            </div>
            <div style={{ display: "flex", marginRight: 14 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 20 20" style={{ marginRight: 3 }}>
                  <path fill="#b98798" d="M10 1.6l2.47 5.3 5.8.67-4.29 3.96 1.15 5.73L10 14.4l-5.13 2.86 1.15-5.73L1.73 7.57l5.8-.67z" />
                </svg>
              ))}
            </div>
            151 avaliações no Google
            <div style={{ width: 1, height: 30, background: "#d9bcc6", margin: "0 22px" }} />
            CRP 04/37760
          </div>
        </div>

        {/* Arco com o símbolo */}
        <div style={{ display: "flex", position: "absolute", right: 90, top: 70, width: 330, height: 490 }}>
          <svg width="460" height="430" viewBox="0 0 600 560" style={{ position: "absolute", left: -65, top: -10 }}>
            <path d={heartPath} fill="none" stroke="#b98798" strokeWidth="2.2" />
          </svg>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 330,
              height: 490,
              borderRadius: "165px 165px 28px 28px",
              background: "#e9e4e6",
              boxShadow: "0 40px 80px -40px rgba(67,52,59,0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${symbol}`} width={190} height={174} alt="" />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "Jost", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
