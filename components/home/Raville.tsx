import Image from "next/image";
import Parallax from "@/components/cine/Parallax";
import TextReveal from "@/components/cine/TextReveal";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import SectionTitle from "@/components/ui/SectionTitle";
import { raville } from "@/lib/conteudo";
import { img } from "@/lib/site";

export default function Raville() {
  return (
    <section className="relative overflow-hidden bg-night-2 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Parallax speed={0.1} scale={[1.18, 1.04]} className="absolute inset-0">
              <Image src={img.ravillePonte} alt="Raville no porto de Hamburgo" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-[50%_45%]" />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
          </div>
          {/* Primeiro plano: recorte anda mais rápido que a foto */}
          <Parallax speed={-0.25} className="absolute -bottom-10 -right-2 w-[42%] sm:-right-8">
            <div className="overflow-hidden rounded-2xl ring-4 ring-night-2 shadow-deep">
              <Image src={img.ravilleNeve} alt="" width={914} height={1600} sizes="20vw" className="h-auto w-full" />
            </div>
          </Parallax>
        </div>

        <div>
          <SectionTitle eyebrow="Seu professor" title="Quem é o Raville?" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-fog">
            {raville.paragrafos.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 border-l-2 border-gold pl-6">
            <TextReveal as="blockquote" modo="letra" text={`“${raville.lema}”`} className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.02em] text-cream" />
            <TextReveal lang="de" text={`„${raville.lemaDe}“`} base={0.1} className="mt-3 text-lg font-light italic text-gold/90" />
          </div>
          <Reveal className="mt-10">
            <Botao href="#planos">Quero começar essa jornada com o Raville</Botao>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
