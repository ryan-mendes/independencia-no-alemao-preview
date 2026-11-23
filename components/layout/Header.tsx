"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { links, marca, nav } from "@/lib/site";

export function Marca({ compacta = false }: { compacta?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flag-line-v h-8 w-1.5 shrink-0 rounded-full" aria-hidden />
      <span className="leading-none">
        <span className={`block font-bold tracking-tight text-cream ${compacta ? "text-[15px]" : "text-base sm:text-lg"}`}>{marca.nome}</span>
        <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.22em] text-fog">{marca.autor}</span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const ativo = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-cine)] ${
        scrolled || open ? "border-b border-white/[0.06] bg-night/80 py-3 backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
        <Link href="/" aria-label={`${marca.nome}, página inicial`} className="shrink-0">
          <Marca compacta={scrolled} />
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7 whitespace-nowrap text-[13px] font-medium text-fog">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative py-1 transition-colors hover:text-cream after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    ativo(item.href) ? "text-cream after:scale-x-100" : "after:scale-x-0"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={links.ctaPrincipal}
            className="hidden whitespace-nowrap rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition hover:bg-cta-strong sm:inline-block"
          >
            {links.ctaPrincipalTexto}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Menu móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-3 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-3xl border border-white/10 bg-night-2 p-4 shadow-deep xl:hidden"
          >
            <ul className="space-y-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 text-lg hover:bg-white/5 ${ativo(item.href) ? "bg-white/5 text-gold" : "text-cream"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={links.ctaPrincipal} onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-cta py-3.5 text-center font-semibold text-white">
              {links.ctaPrincipalTexto}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
