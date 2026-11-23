import type { Metadata } from "next";
import Image from "next/image";
import { Bell, CalendarHeart, Users } from "lucide-react";
import ListaForm from "@/components/forms/ListaForm";
import PageHero from "@/components/layout/PageHero";
import Parallax from "@/components/cine/Parallax";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lista de espera | Independência no Alemão",
  description: "As inscrições estão encerradas. Entre na lista de espera para receber avisos em primeira mão, convites para eventos gratuitos e a abertura de novas turmas.",
};

const beneficios = [
  { icone: Bell, texto: "Receber avisos em primeira mão" },
  { icone: CalendarHeart, texto: "Convite para eventos 100% gratuitos" },
  { icone: Users, texto: "Abertura de novas turmas" },
];

const professor = [
  "Meu jeito de ensinar alemão é bem diferente do tradicional. Ensino o que realmente importa pro imigrante: falar, se virar, resolver as coisas do dia a dia sem passar vergonha. Nada de frases de livro que ninguém usa. É o alemão da vida real, o que você precisa no trabalho, no médico, no atendimento…",
  "E o melhor: sou eu quem tá ali do seu lado o tempo todo. Dou todas as aulas, respondo pessoalmente, acompanho de perto. Eu já passei por isso, aprendi alemão na raça, errando, travando, e sei exatamente o que funciona na prática. Então, ensino de um jeito direto, útil, acolhedor, mas sem passar a mão na cabeça.",
  "Meu objetivo não é só te ensinar alemão. É te dar confiança pra abrir a boca, se impor, se sentir parte. Eu ensino pra transformar. E tudo o que ensino, eu vivi na pele.",
];

export default function ListaEsperaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Lista de espera"
        eyebrow="Inscrições encerradas"
        title="Entre na lista de espera"
        destaque={["lista", "de", "espera"]}
        description="No momento as inscrições para o Independência no Alemão estão encerradas, se inscreva abaixo para:"
        fundo={img.ravillePonte}
      >
        <ListaForm />
      </PageHero>

      <section className="bg-night pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-8 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <Reveal key={b.texto} delay={i * 0.08} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-night-2 p-6">
              <b.icone className="shrink-0 text-gold" size={26} strokeWidth={1.6} />
              <span className="text-cream">{b.texto}</span>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-fog">Apenas o que importa.</p>
      </section>

      <section className="bg-night-2 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[551/634] w-full max-w-sm overflow-hidden rounded-[2rem]">
            <Parallax speed={0.08} scale={[1.12, 1]} className="absolute inset-0">
              <Image src={img.ravilleBandeira} alt="Raville, professor do curso" fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover" />
            </Parallax>
          </div>
          <div>
            <SectionTitle eyebrow="Seu professor" title="Sou Raville, e meu maior objetivo é te ajudar a falar alemão com mais confiança no dia a dia." />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-fog">
              {professor.map((p) => (
                <Reveal key={p}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
