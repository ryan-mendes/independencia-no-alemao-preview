import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  destaque?: string[];
  description?: React.ReactNode;
  breadcrumb: string;
  /** Foto de fundo (parallax suave em CSS, escurecida) */
  fundo?: string;
  children?: React.ReactNode;
};

/** Cabeçalho das páginas internas: fundo escuro com foto da marca, título palavra por palavra. */
export default function PageHero({ eyebrow, title, destaque = [], description, breadcrumb, fundo, children }: Props) {
  const palavras = title.split(" ");
  const limpa = (s: string) => s.replace(/[.,!?:]/g, "");
  return (
    <section className="relative isolate overflow-hidden bg-night pb-16 pt-32 md:pb-24 md:pt-44">
      {fundo && (
        <>
          <Image src={fundo} alt="" fill priority sizes="100vw" className="-z-20 scale-110 object-cover object-[60%_30%] opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night to-transparent" />
        </>
      )}
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 ${children ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""}`}>
        <div className={children ? "min-w-0" : "max-w-4xl"}>
          <nav aria-label="Você está em" className="fade-up mb-6 flex items-center gap-1.5 text-xs text-fog" style={{ "--d": "0.1s" } as React.CSSProperties}>
            <Link href="/" className="hover:text-cream">
              Início
            </Link>
            <ChevronRight size={12} />
            <span className="font-medium text-cream">{breadcrumb}</span>
          </nav>
          <p className="fade-up mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold" style={{ "--d": "0.2s" } as React.CSSProperties}>
            <span className="flag-line h-[2px] w-8" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-cream text-balance">
            {palavras.map((w, i) => (
              <span key={i}>
                <span className="word-mask">
                  <span style={{ "--i": i * 0.7 } as React.CSSProperties} className={destaque.some((d) => limpa(w) === limpa(d)) ? "text-gold-grad" : undefined}>
                    {w}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>
          {description && (
            <div className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-fog" style={{ "--d": "0.9s" } as React.CSSProperties}>
              {description}
            </div>
          )}
        </div>
        {children && (
          <div className="fade-up min-w-0" style={{ "--d": "0.7s" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
