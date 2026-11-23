import Link from "next/link";
import { legais, links, marca, nav } from "@/lib/site";
import { Marca } from "./Header";

export default function Footer() {
  const redes = [
    { label: "Instagram", href: links.instagram },
    { label: "YouTube", href: links.youtube },
    { label: "TikTok", href: links.tiktok },
    { label: "WhatsApp", href: links.whatsapp },
  ];
  return (
    <footer className="relative border-t border-white/[0.06] bg-night">
      <div className="flag-line h-[3px] w-full opacity-80" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Marca />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">{marca.slogan}.</p>
          <a href={`mailto:${marca.email}`} className="mt-5 inline-block break-all text-sm font-medium text-cream hover:text-gold">
            {marca.email}
          </a>
        </div>

        <nav aria-label="Site">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Site</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-fog transition hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Redes sociais">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Redes</p>
          <ul className="space-y-2.5 text-sm">
            {redes.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-fog transition hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Legal</p>
          <ul className="space-y-2.5 text-sm">
            {legais.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-fog transition hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-6 text-center text-xs text-fog/70">
        Todos os direitos reservados. {marca.autor}. CNPJ: {marca.cnpj}
      </div>
    </footer>
  );
}
