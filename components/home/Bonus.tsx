import { Bot, Video } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import SectionTitle from "@/components/ui/SectionTitle";
import { bonus } from "@/lib/conteudo";

const ICONES = [Video, Bot];

export default function Bonus() {
  return (
    <section className="relative overflow-hidden bg-night py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle center eyebrow="Bônus" title="Além dos conteúdos acima, você ainda leva 2 bônus totalmente gratuitos" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {bonus.map((b, i) => {
            const Icone = ICONES[i];
            return (
              <Reveal key={b.titulo} delay={i * 0.1} className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-b from-night-2 to-night p-8 sm:p-10">
                <span className="absolute right-8 top-8 text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">Bônus {i + 1}</span>
                <Icone className="text-gold" size={34} strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-cream sm:text-3xl">{b.titulo}</h3>
                <div className="mt-5 space-y-4 leading-relaxed text-fog">
                  {b.paragrafos.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 text-center">
          <Botao href="#planos">Quero garantir os bônus</Botao>
        </Reveal>
      </div>
    </section>
  );
}
