"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import TextReveal from "@/components/cine/TextReveal";
import { metodo } from "@/lib/conteudo";

/**
 * Scrollytelling do Método ADD:
 * 1) a frase de abertura acende letra por letra (PT) e palavra por palavra (DE);
 * 2) um painel fica preso à esquerda e troca de capítulo conforme cada pilar passa pela direita.
 */
export default function Metodo() {
  const [ativo, setAtivo] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const trilho = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trilho, offset: ["start 0.6", "end 0.6"] });
  const barra = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const p = metodo.pilares[ativo];

  return (
    <section className="relative bg-night">
      {/* Abertura: texto que acende com a rolagem */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-8 md:pb-24 md:pt-40">
        <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span className="flag-line h-[2px] w-8" aria-hidden />
          {metodo.eyebrow}
        </p>
        <TextReveal
          as="h2"
          modo="letra"
          text={metodo.abertura}
          className="text-[clamp(2rem,5.2vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-cream"
        />
        <TextReveal
          lang="de"
          text={metodo.aberturaDe}
          base={0.08}
          className="mt-8 max-w-3xl text-[clamp(1.1rem,2vw,1.5rem)] font-light italic leading-snug text-gold/90"
        />
        <TextReveal text={metodo.intro} base={0.2} className="mt-10 max-w-2xl text-lg leading-relaxed text-fog" />
      </div>

      {/* Pilares com painel fixo */}
      <div ref={trilho} className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 sm:px-8 md:pb-36 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-[100svh] flex-col justify-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-night-2 p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="flex items-baseline gap-3 text-sm tabular-nums text-fog">
                <span className="text-gold">Capítulo</span>
                <span>
                  {String(ativo + 1).padStart(2, "0")} / {String(metodo.pilares.length).padStart(2, "0")}
                </span>
              </div>
              <div className="relative mt-8 h-[15rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ativo}
                    initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={reduce ? undefined : { opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <p className="text-[7rem] font-bold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_var(--color-gold)]">
                      {String(ativo + 1).padStart(2, "0")}
                    </p>
                    <p lang="de" className="mt-6 text-2xl font-light italic text-cream">
                      {p.de}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-6 h-px w-full bg-white/10">
                <motion.div className="flag-line h-px" style={{ width: barra }} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-[30vh]">
          {metodo.pilares.map((pl, i) => (
            <div
              key={pl.titulo}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-i={i}
              className="flex min-h-[46vh] flex-col justify-center border-t border-white/[0.07] py-10 lg:min-h-[70vh]"
            >
              <motion.div
                animate={{ opacity: ativo === i || reduce ? 1 : 0.28 }}
                transition={{ duration: 0.6 }}
                className="max-lg:!opacity-100"
              >
                <p className="text-sm font-semibold tabular-nums text-gold lg:hidden">{String(i + 1).padStart(2, "0")}</p>
                <p lang="de" className="mt-1 text-sm italic text-fog lg:hidden">
                  {pl.de}
                </p>
                <h3 className="mt-3 text-[clamp(1.75rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-cream">{pl.titulo}</h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-fog">{pl.texto}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
