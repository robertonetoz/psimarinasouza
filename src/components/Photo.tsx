import Image from "next/image";

type PhotoProps = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Moldura de foto. Sem `src`, mostra um espaço reservado com o símbolo da marca,
 * indicando onde a foto da Marina deve entrar.
 */
export function Photo({ src, alt, label, className = "", priority, sizes = "(min-width: 1024px) 40vw, 90vw" }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(120%_80%_at_50%_20%,#f7f2f4_0%,#e9e4e6_70%)] p-6 text-center">
          <Image src="/logo-symbol.png" alt="" width={150} height={137} className="w-16 opacity-60" />
          <p className="max-w-[16rem] text-sm leading-relaxed text-ink-soft">{label}</p>
        </div>
      )}
    </div>
  );
}
