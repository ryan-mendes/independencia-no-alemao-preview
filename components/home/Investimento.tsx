import Image from "next/image";
import { Check } from "lucide-react";
import TextReveal from "@/components/cine/TextReveal";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Planos from "@/components/ui/Planos";
import { garantia, investimento } from "@/lib/conteudo";
import { img } from "@/lib/site";

export default function Investimento() {
  return (
    <>
      {/* Quanto vale: texto que acende */}
      <section className="bg-night py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="flag-line h-[2px] w-8" aria-hidden />O investimento pra virar esse jogo
          </p>
          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-cream">Quanto vale falar alemão com confiança?</h2>
          <div className="mt-12 space-y-4">
            {investimento.quantoVale.map((t) => (
              <TextReveal key={t} text={t} className="text-[clamp(1.35rem,2.8vw,2.3rem)] font-medium leading-snug tracking-[-0.02em] text-cream" />
            ))}
          </div>
        </div>
      </section>

      {/* Comparação VHS (faixa clara) */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <Image src={img.escolaTradicional} alt="Print do preço do curso A1.1 no site da VHS" width={1440} height={1145} sizes="(min-width:1024px) 45vw, 100vw" className="h-auto w-full rounded-2xl" />
              <figcaption className="px-2 pb-1 pt-3 text-xs text-muted">{investimento.fonteVhs}</figcaption>
            </figure>
          </Reveal>
          <div>
            <SectionTitle dark eyebrow="Compare isso aqui" title="A escola mais barata da Alemanha" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-2">
              {investimento.vhs.map((p, i) => (
                <Reveal key={p} delay={i * 0.06}>
                  <p className={i === 2 ? "font-semibold text-ink" : undefined}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contraste + planos */}
      <section id="planos" className="relative scroll-mt-16 overflow-hidden bg-night py-24 md:py-36">
        <div className="pointer-events-none absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-cta/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionTitle eyebrow="Agora segura o contraste" title="No Independência no Alemão, você recebe tudo isso:" />
              <ul className="mt-10 space-y-4">
                {investimento.inclui.map((t, i) => (
                  <Reveal as="li" key={t} delay={i * 0.05} y={20} className="flex items-center gap-4 text-lg text-cream">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cta/20 text-cta">
                      <Check size={17} strokeWidth={2.6} />
                    </span>
                    {t}
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:pt-6">
              <Planos />
            </div>
          </div>

          <Reveal className="mt-20 grid items-center gap-10 rounded-[2rem] border border-white/[0.08] bg-night-2 p-8 sm:p-12 md:grid-cols-[auto_1fr]">
            <Image src={img.garantia} alt="Selo de garantia de 15 dias" width={800} height={800} className="mx-auto h-auto w-40 md:w-52" />
            <div>
              <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.03em] text-cream">{garantia.titulo}</h3>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-fog">
                {garantia.texto.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-gold pl-5 leading-relaxed text-cream/90">
                <span className="font-semibold text-gold">E mais: </span>
                {garantia.extra}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
