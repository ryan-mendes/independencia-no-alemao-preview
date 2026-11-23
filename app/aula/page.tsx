import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/layout/PageHero";
import Botao from "@/components/ui/Botao";
import YouTube from "@/components/ui/YouTube";
import Planos from "@/components/ui/Planos";
import SectionTitle from "@/components/ui/SectionTitle";
import { aprendizados, hero } from "@/lib/conteudo";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aula gratuita: como falar alemão com mais confiança no dia a dia | Independência no Alemão",
  description: hero.subtitulo,
};

export default function AulaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Aula gratuita"
        eyebrow="Aula de introdução · gratuita"
        title="Como falar alemão com mais confiança no dia a dia"
        destaque={["confiança"]}
        description={hero.subtitulo}
        fundo={img.ravilleNeve}
      >
        <YouTube id={hero.videoAula} titulo="Aula: como falar alemão com mais confiança no dia a dia" />
      </PageHero>

      <section className="bg-night py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle eyebrow="Nesta aula" title="Você vai aprender:" />
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {aprendizados.map((a, i) => (
              <Reveal as="li" key={a} delay={(i % 2) * 0.06} y={24} className="flex gap-5 rounded-2xl border border-white/[0.07] bg-night-2 p-6">
                <span className="text-sm font-semibold tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] leading-snug text-cream">{a}</span>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Botao href="/">Conhecer o curso completo</Botao>
          </Reveal>
        </div>
      </section>

      <section className="bg-night-2 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <SectionTitle center eyebrow="Matrícula" title="Quero falar alemão com mais confiança" />
          <div className="mt-12">
            <Planos />
          </div>
        </div>
      </section>
    </main>
  );
}
