import Image from "next/image";
import { Check, X } from "lucide-react";
import Parallax from "@/components/cine/Parallax";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import SectionTitle from "@/components/ui/SectionTitle";
import { comparativo, paraQuem } from "@/lib/conteudo";
import { img } from "@/lib/site";

export default function ParaQuem() {
  return (
    <>
      <section className="relative overflow-hidden bg-night-2 py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative h-[60vh] overflow-hidden rounded-[2rem] lg:sticky lg:top-24 lg:h-[80vh]">
            <Parallax speed={0.12} scale={[1.2, 1.05]} className="absolute inset-0">
              <Image src={img.ravilleNeve} alt="Raville caminhando na neve" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[40%_40%]" />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
            <p lang="de" className="absolute bottom-6 left-6 right-6 text-2xl font-light italic leading-snug text-cream md:text-3xl">
              „Der, die, das?“
            </p>
          </div>

          <div>
            <SectionTitle eyebrow="Para quem é" title="Esse método é para você que:" />
            <ul className="mt-10 space-y-3">
              {paraQuem.map((t, i) => (
                <Reveal as="li" key={t} delay={(i % 3) * 0.05} y={24} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-night/60 p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="text-[17px] leading-snug text-cream">{t}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10">
              <Botao href="#planos">Quero mudar essa história agora</Botao>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Faixa clara: comparativo */}
      <section className="relative bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <SectionTitle dark center eyebrow="Comparativo" title={comparativo.titulo} />
          <Reveal className="mt-14 overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-[0.8fr_1.2fr_1.2fr] border-b border-ink/10 text-xs font-semibold uppercase tracking-[0.14em] sm:grid-cols-[0.6fr_1.2fr_1.2fr] sm:text-sm">
              <span className="p-4 sm:p-6" />
              <span className="bg-night p-4 text-gold sm:p-6">Método ADD</span>
              <span className="p-4 text-muted sm:p-6">Outros métodos</span>
            </div>
            {comparativo.linhas.map((l) => (
              <div key={l.item} className="grid grid-cols-[0.8fr_1.2fr_1.2fr] border-b border-ink/[0.06] last:border-0 sm:grid-cols-[0.6fr_1.2fr_1.2fr]">
                <span className="p-4 text-sm font-semibold text-ink sm:p-6 sm:text-base">{l.item}</span>
                <span className="flex min-w-0 gap-2 bg-night p-4 text-sm text-cream sm:p-6 sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-cta" />
                  {l.add}
                </span>
                <span className="flex min-w-0 gap-2 p-4 text-sm text-muted sm:p-6 sm:text-base">
                  <X size={18} className="mt-0.5 shrink-0 text-red" />
                  {l.outros}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
