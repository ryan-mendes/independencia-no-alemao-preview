import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "cta" | "ghost" | "claro";
  className?: string;
  seta?: boolean;
};

const estilos = {
  cta: "bg-cta text-white shadow-cta hover:bg-cta-strong",
  ghost: "border border-white/20 text-cream hover:border-gold/60 hover:text-gold",
  claro: "border border-ink/15 text-ink hover:border-ink/40",
};

/** Botão-link. Rotas internas usam next/link (respeita o basePath da prévia). */
export default function Botao({ href, children, variante = "cta", className = "", seta = true }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-center text-[15px] font-semibold transition duration-300 ease-[var(--ease-cine)] sm:px-7 sm:py-4 ${estilos[variante]} ${className}`;
  const conteudo = (
    <>
      <span>{children}</span>
      {seta && <ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {conteudo}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {conteudo}
      </a>
    );
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {conteudo}
    </a>
  );
}
