import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import SectionTitle from "@/components/ui/SectionTitle";
import YouTube from "@/components/ui/YouTube";
import { depoimentosVideo, prints } from "@/lib/conteudo";

function Coluna({ itens, reverso }: { itens: typeof prints; reverso?: boolean }) {
  const lista = [...itens, ...itens];
  return (
    <div className="relative h-full overflow-hidden">
      <div className={`marquee-y flex flex-col gap-4 ${reverso ? "[animation-direction:reverse]" : ""}`}>
        {lista.map((p, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
            <Image src={p.src} alt={i < itens.length ? "Mensagem real de aluno do curso" : ""} width={p.w} height={p.h} sizes="(min-width:1024px) 22vw, 45vw" className="h-auto w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const metade = Math.ceil(prints.length / 2);
  return (
    <section className="relative overflow-hidden bg-night-2 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          eyebrow="Histórias reais"
          title="O método que mais gera resultado em brasileiros na Alemanha"
          description="Veja algumas histórias de pessoas que decidiram seguir o Método ADD e hoje falam alemão com mais confiança no dia a dia."
        />

        <div className="mt-14 grid items-start gap-6 md:grid-cols-[1fr_0.55fr_1fr]">
          {depoimentosVideo.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08} className={d.vertical ? "md:mx-auto md:w-full md:max-w-[16rem]" : ""}>
              <YouTube id={d.id} titulo={`Depoimento: ${d.nome}`} vertical={d.vertical} className={d.vertical ? "max-md:mx-auto max-md:max-w-[18rem]" : ""} />
              <h3 className="mt-5 text-lg font-semibold text-cream">{d.nome}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fog">{d.texto}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Mensagens de alunos" title="Prints reais, do jeito que chegaram" />
            <Reveal className="mt-10">
              <Botao href="#planos">Quero ser a próxima a falar com mais confiança</Botao>
            </Reveal>
          </div>
          <div className="relative grid h-[34rem] grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] md:h-[44rem]">
            <Coluna itens={prints.slice(0, metade)} />
            <Coluna itens={prints.slice(metade)} reverso />
          </div>
        </div>
      </div>
    </section>
  );
}
