import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import { investimento, planos } from "@/lib/conteudo";
import { links } from "@/lib/site";

/** Cards Mensal / Anual com os links de checkout atuais (sem preço: o site não publica os valores). */
export default function Planos({ claro = false }: { claro?: boolean }) {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        {planos.map((p, i) => (
          <Reveal
            key={p.nome}
            delay={i * 0.1}
            className={`relative flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${
              p.destaque
                ? "bg-gradient-to-b from-[#1f1c12] to-night-2 ring-1 ring-gold/50"
                : claro
                  ? "bg-white ring-1 ring-ink/10"
                  : "bg-night-2 ring-1 ring-white/10"
            }`}
          >
            <span className={`text-xs font-semibold uppercase tracking-[0.24em] ${p.destaque ? "text-gold" : claro ? "text-red" : "text-fog"}`}>{p.rotulo}</span>
            <h3 className={`mt-3 text-3xl font-semibold tracking-[-0.03em] ${claro && !p.destaque ? "text-ink" : "text-cream"}`}>{p.nome}</h3>
            <p className={`mt-3 flex-1 leading-relaxed ${claro && !p.destaque ? "text-ink-2" : "text-fog"}`}>{p.texto}</p>
            <p className={`mt-6 flex items-center gap-2 text-sm ${claro && !p.destaque ? "text-ink-2" : "text-fog"}`}>
              <ShieldCheck size={16} className="text-cta" /> Garantia de 15 dias incondicional
            </p>
            <Botao href={i === 0 ? links.checkoutMensal : links.checkoutAnual} className="mt-6 w-full">
              {p.cta}
            </Botao>
          </Reveal>
        ))}
      </div>
      <p className={`mt-6 text-center text-sm ${claro ? "text-ink-2" : "text-fog"}`}>{investimento.pagamento}</p>
    </div>
  );
}
