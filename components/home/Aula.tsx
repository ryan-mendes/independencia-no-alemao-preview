import { CalendarCheck, ShieldCheck, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import SectionTitle from "@/components/ui/SectionTitle";
import YouTube from "@/components/ui/YouTube";
import { aprendizados, destaques, hero, investimento } from "@/lib/conteudo";
import { links } from "@/lib/site";

const ICONES = [CalendarCheck, Users, ShieldCheck];

/** Vídeo da aula preso na tela enquanto os aprendizados passam ao lado. */
export default function Aula() {
  return (
    <section id="aula" className="relative scroll-mt-20 bg-night py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle eyebrow="Aula de introdução" title="Assista gratuitamente e aprenda mais de 10 coisas" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <YouTube id={hero.videoAula} titulo="Aula: como falar alemão com mais confiança no dia a dia" />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Botao href={links.checkoutMensal} className="flex-1">
                  Quero entrar — Mensal
                </Botao>
                <Botao href={links.checkoutAnual} variante="ghost" className="flex-1">
                  Quero entrar — Anual
                </Botao>
              </div>
              <p className="mt-4 text-center text-sm text-fog sm:text-left">{investimento.pagamento}</p>
            </Reveal>
          </div>

          <ol className="relative space-y-3 border-l border-white/10 pl-6 sm:pl-8">
            {aprendizados.map((a, i) => (
              <Reveal as="li" key={a} delay={0.04} y={30} className="group relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-6 h-2.5 w-2.5 rounded-full border border-gold/60 bg-night transition group-hover:bg-gold sm:-left-[calc(2rem+5px)]" />
                <div className="rounded-2xl border border-white/[0.06] bg-night-2/60 p-5 transition duration-500 hover:border-gold/30 hover:bg-night-2 sm:p-6">
                  <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-[17px] leading-snug text-cream">{a}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {destaques.map((d, i) => {
            const Icone = ICONES[i];
            return (
              <Reveal key={d.titulo} delay={i * 0.08} className="rounded-3xl border border-white/[0.07] bg-night-2 p-7">
                <Icone className="text-gold" size={26} strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold text-cream">{d.titulo}</h3>
                <p className="mt-2 text-fog">{d.texto}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
