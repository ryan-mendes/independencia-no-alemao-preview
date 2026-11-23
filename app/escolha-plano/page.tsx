import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import Planos from "@/components/ui/Planos";
import { links, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Escolha seu plano | Independência no Alemão",
  description: "Plano mensal (12 parcelas ao longo de um ano) ou plano anual (1 parcela). Garantia de 15 dias.",
};

export default function EscolhaPlanoPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Planos"
        eyebrow="Escolha seu plano"
        title="Qual plano você prefere?"
        destaque={["plano"]}
        description="Plano mensal em 12 parcelas ao longo de um ano, ou plano anual em uma parcela. Os dois com garantia de 15 dias."
        fundo={img.ravillePonte}
      />
      <section className="bg-night pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <Planos />
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-24">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-8">
          <MessageCircle size={36} className="text-cta" strokeWidth={1.6} />
          <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold tracking-[-0.03em]">Ficou alguma dúvida ou precisa de ajuda?</h2>
          <p className="text-lg text-ink-2">Basta clicar no botão abaixo para falar conosco.</p>
          <Botao href={links.whatsappMatricula}>Entrar no grupo</Botao>
        </Reveal>
      </section>
    </main>
  );
}
