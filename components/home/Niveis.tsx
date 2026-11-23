"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { niveis } from "@/lib/conteudo";

/**
 * A jornada em 5 níveis. No desktop, a rolagem vertical move a trilha na horizontal (seção presa).
 * No celular, vira uma linha do tempo vertical.
 */
export default function Niveis() {
  const ref = useRef<HTMLElement>(null);
  const trilha = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distancia, setDistancia] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distancia]);
  const progresso = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  useEffect(() => {
    const medir = () => {
      if (!trilha.current) return;
      setDistancia(Math.max(0, trilha.current.scrollWidth - window.innerWidth + 64));
    };
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  const Cabecalho = (
    <div className="max-w-3xl">
      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        <span className="flag-line h-[2px] w-8" aria-hidden />
        Trilha de progressão
      </p>
      <h2 className="text-[clamp(2rem,4.6vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-cream text-balance">
        Da “Muda Sobrevivente” até “Dona da Própria Voz”
      </h2>
      <p className="mt-5 text-lg text-fog">Em 5 níveis, você sempre sabe onde está e qual é o seu próximo passo. Sem se perder e sem se sentir sobrecarregada.</p>
    </div>
  );

  return (
    <>
      {/* Desktop: horizontal presa */}
      <section ref={ref} className="relative hidden h-[360vh] bg-night lg:block">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-8">{Cabecalho}</div>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-[3.25rem] h-px bg-white/10" />
            <motion.div className="flag-line absolute left-0 top-[3.25rem] h-[2px]" style={{ width: progresso }} />
            <motion.div ref={trilha} className="flex gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-8" style={reduce ? undefined : { x }}>
              {niveis.map((n) => (
                <article key={n.n} className="w-[26rem] shrink-0">
                  <span className="relative z-10 grid h-[6.5rem] w-[6.5rem] place-items-center rounded-full border border-gold/40 bg-night text-5xl font-bold tracking-tight text-gold">
                    {n.n}
                  </span>
                  <div className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-night-2 p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fog">Nível {n.n}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-cream">{n.nome}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-fog">{n.texto}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Celular e tablet: vertical */}
      <section className="bg-night py-24 lg:hidden">
        <div className="mx-auto max-w-2xl px-4 sm:px-8">
          {Cabecalho}
          <ol className="relative mt-12 space-y-6 border-l border-white/10 pl-8">
            <span className="flag-line-v absolute -left-px top-0 h-full w-[2px] opacity-70" aria-hidden />
            {niveis.map((n, i) => (
              <Reveal as="li" key={n.n} delay={i * 0.04} className="relative">
                <span className="absolute -left-[3.15rem] top-1 grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-night text-sm font-bold text-gold">
                  {n.n}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fog">Nível {n.n}</p>
                <h3 className="mt-1 text-2xl font-semibold text-cream">{n.nome}</h3>
                <p className="mt-2 text-fog">{n.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
