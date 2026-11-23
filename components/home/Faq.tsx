import { Plus } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { faq } from "@/lib/conteudo";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };
  const meio = Math.ceil(faq.length / 2);
  const colunas = [faq.slice(0, meio), faq.slice(meio)];
  return (
    <section id="faq" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle dark eyebrow="Perguntas frequentes" title="Ficou alguma dúvida?" />
        <div className="mt-14 grid gap-x-8 lg:grid-cols-2">
          {colunas.map((col, c) => (
            <div key={c}>
              {col.map((f) => (
                <Reveal key={f.p} y={16}>
                  <details className="group border-b border-ink/10 py-1">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[17px] font-medium leading-snug text-ink transition hover:text-red">
                      {f.p}
                      <Plus size={20} className="mt-0.5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="pb-6 pr-10 leading-relaxed text-ink-2">{f.r}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
