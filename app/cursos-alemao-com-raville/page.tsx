import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { cursosNivel } from "@/lib/cursos";
import { img, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cursos por nível — Alemão com Raville",
  description: "Conheça os produtos que o Raville criou para te ajudar a falar alemão com mais confiança no dia a dia: do A1.1 ao C1.",
};

export default function CursosPage() {
  const redes = [
    { label: "Instagram", href: links.instagram },
    { label: "YouTube", href: links.youtube },
    { label: "TikTok", href: links.tiktok },
    { label: "WhatsApp", href: links.whatsappLink },
  ];
  return (
    <main className="relative isolate overflow-hidden bg-night pb-24 pt-32 md:pt-40">
      <Image src={img.ravilleNeve} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[40%_30%] opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night/60 via-night/90 to-night" />

      <div className="mx-auto max-w-2xl px-4 sm:px-8">
        <div className="fade-up text-center" style={{ "--d": "0.1s" } as React.CSSProperties}>
          <Image src={img.favicon} alt="" width={96} height={96} className="mx-auto h-20 w-20 rounded-full ring-2 ring-gold/40" />
          <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.03em] text-cream">Alemão com Raville</h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-fog">Conheça os produtos que eu criei pra te ajudar a falar alemão com mais confiança no dia a dia</p>
        </div>

        <ul className="mt-12 space-y-4">
          {cursosNivel.map((c, i) => (
            <Reveal as="li" key={c.nivel} delay={i * 0.04} y={20} className="rounded-2xl border border-white/[0.08] bg-night-2 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 min-w-12 place-items-center rounded-xl bg-gold/10 px-2 text-sm font-bold text-gold">{c.nivel}</span>
                <p className="pt-2.5 text-[17px] font-medium leading-snug text-cream">{c.titulo}</p>
              </div>
              <div className={`mt-5 grid gap-2 ${c.opcoes.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {c.opcoes.map((o) => (
                  <a
                    key={o.href}
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl bg-cta px-4 py-3 text-sm font-semibold text-white transition hover:bg-cta-strong"
                  >
                    {o.label}
                    <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>

        <nav aria-label="Redes sociais" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {redes.map((r) => (
            <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 py-3 text-center text-sm font-medium text-cream transition hover:border-gold/60 hover:text-gold">
              {r.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
