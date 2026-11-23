"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import { modulos } from "@/lib/conteudo";
import { img } from "@/lib/site";

/**
 * Sticky scroll: a foto do Raville com a bandeira fica presa na tela
 * enquanto os cards dos módulos passam por cima.
 */
export default function Modulos() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const escala = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const escurece = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0.15, 0.45, 0.45, 0.85]);
  const brilho = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="modulos" className="relative bg-night">
      {/* Camada presa */}
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: escala }}>
          <Image src={img.ravilleBandeira} alt="" fill sizes="100vw" className="object-cover object-[50%_20%] md:object-contain md:object-right" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-transparent" />
        <motion.div className="absolute inset-0 bg-night" style={{ opacity: escurece }} />
        <motion.div
          aria-hidden
          className="absolute -left-1/4 top-1/3 h-[50vmax] w-[50vmax] rounded-full bg-red/10 blur-[120px]"
          style={reduce ? undefined : { x: brilho }}
        />
      </div>

      {/* Conteúdo que passa por cima */}
      <div className="relative z-10 -mt-[100svh]">
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-8">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="flag-line h-[2px] w-8" aria-hidden />
            Veja o que você vai receber ao entrar no curso
          </p>
          <h2 className="max-w-3xl text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-cream text-balance">
            Tudo que você precisa para falar alemão com <span className="text-gold-grad">mais confiança</span> no dia a dia
          </h2>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-[30vh] sm:px-8">
          <ol className="space-y-[18vh] md:max-w-xl">
            {modulos.map((m, i) => (
              <Reveal as="li" key={m.titulo} y={60}>
                <article className="rounded-[1.75rem] border border-white/10 bg-night-2/95 p-7 shadow-deep sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Módulo {String(i + 1).padStart(2, "0")}</span>
                    <span className="flag-line h-[2px] w-10 opacity-80" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-cream sm:text-[1.75rem]">{m.titulo}</h3>
                  <p className="mt-4 leading-relaxed text-fog">{m.texto}</p>
                </article>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-[14vh]">
            <Botao href="#planos">Quero entrar no Independência no Alemão</Botao>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
