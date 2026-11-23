"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Botao from "@/components/ui/Botao";
import { hero } from "@/lib/conteudo";
import { img } from "@/lib/site";

const PALAVRAS = hero.titulo.split(" ");
const DESTAQUE = new Set(["mais", "confiança"]);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Três planos em velocidades diferentes: foto (lenta), texto (rápido), recorte (médio)
  const fundoY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const fundoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const textoY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const palavraY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className="letterbox relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night pb-20 pt-32 md:items-center md:pb-0">
      {/* Plano de fundo: Raville em Hamburgo */}
      <motion.div className="absolute inset-0 -z-20 max-md:bottom-[28%] md:left-[38%]" style={reduce ? undefined : { y: fundoY, scale: fundoScale }}>
        <Image
          src={img.ravillePonte}
          alt="Raville em uma ponte do porto de Hamburgo"
          fill
          priority
          sizes="(min-width:768px) 62vw, 100vw"
          className="object-cover object-[50%_20%] md:object-[50%_55%]"
        />
        <div className="absolute inset-y-0 -left-px hidden w-1/2 bg-gradient-to-r from-night to-transparent md:block" />
      </motion.div>
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-night from-0% via-night/85 via-40% to-night/0 to-75% md:block" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night from-40% via-night/75 via-62% to-night/20 md:from-night md:from-0% md:via-night/30 md:to-night/50" />

      {/* Plano do meio: palavra gigante em alemão, contorno */}
      <motion.p
        aria-hidden
        lang="de"
        style={reduce ? undefined : { y: palavraY }}
        className="pointer-events-none absolute -right-4 top-[18%] -z-10 hidden select-none md:block text-[clamp(6rem,19vw,18rem)] font-bold leading-none tracking-[-0.05em] text-transparent opacity-40 [-webkit-text-stroke:1px_rgba(254,206,0,0.35)]"
      >
        Sprechen.
      </motion.p>

      <div className="veil pointer-events-none absolute inset-0 z-40 bg-black" />

      <motion.div className="mx-auto w-full max-w-7xl px-4 sm:px-8" style={reduce ? undefined : { y: textoY, opacity: textoOpacity }}>
        <p className="fade-up mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold" style={{ "--d": "0.4s" } as React.CSSProperties}>
          <span className="flag-line h-[2px] w-10" aria-hidden />
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.4rem,6.4vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-cream text-balance">
          {PALAVRAS.map((w, i) => (
            <span key={i}>
              <span className="word-mask">
                <span style={{ "--i": i } as React.CSSProperties} className={DESTAQUE.has(w) ? "text-gold-grad" : undefined}>
                  {w}
                </span>
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-fog md:text-xl" style={{ "--d": "1.3s" } as React.CSSProperties}>
          {hero.subtitulo}
        </p>
        <div className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ "--d": "1.5s" } as React.CSSProperties}>
          <Botao href="#aula">Assistir à aula gratuita</Botao>
          <Botao href="#planos" variante="ghost">
            Quero falar alemão com mais confiança
          </Botao>
        </div>
      </motion.div>

      <div className="fade-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-fog md:flex" style={{ "--d": "2s" } as React.CSSProperties}>
        Role
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </div>
    </section>
  );
}
