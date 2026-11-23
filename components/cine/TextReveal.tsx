"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

type Props = {
  text: string;
  className?: string;
  /** "letra" acende letra por letra; "palavra" acende palavra por palavra. */
  modo?: "letra" | "palavra";
  /** Opacidade das partes ainda não reveladas. */
  base?: number;
  as?: "p" | "h2" | "h3" | "blockquote";
  lang?: string;
};

/**
 * Texto que acende conforme chega ao meio da tela, ligado à rolagem (vai e volta com ela).
 * Mantém o texto completo para leitores de tela (aria-label) e para SEO.
 */
export default function TextReveal({ text, className, modo = "palavra", base = 0.14, as = "p", lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const Tag = motion[as];

  const palavras = text.split(" ");
  const total = modo === "letra" ? text.replace(/ /g, "").length : palavras.length;
  let idx = 0;

  return (
    <Tag ref={ref as never} className={className} aria-label={text} lang={lang}>
      {palavras.map((w, wi) => {
        const node =
          modo === "letra" ? (
            <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
              {[...w].map((ch, ci) => {
                const i = idx++;
                return (
                  <Parte key={ci} p={scrollYProgress} i={i} total={total} base={base} reduce={!!reduce}>
                    {ch}
                  </Parte>
                );
              })}
            </span>
          ) : (
            <Parte key={wi} p={scrollYProgress} i={idx++} total={total} base={base} reduce={!!reduce} aria-hidden>
              {w}
            </Parte>
          );
        return (
          <span key={`g${wi}`}>
            {node}
            {wi < palavras.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}

function Parte({
  p,
  i,
  total,
  base,
  reduce,
  children,
  ...rest
}: {
  p: MotionValue<number>;
  i: number;
  total: number;
  base: number;
  reduce: boolean;
  children: React.ReactNode;
  "aria-hidden"?: boolean;
}) {
  const ini = i / total;
  const fim = Math.min(1, ini + 1.5 / total + 0.02);
  const opacity = useTransform(p, [ini, fim], [base, 1]);
  const y = useTransform(p, [ini, fim], [8, 0]);
  const blur = useTransform(p, [ini, fim], ["blur(6px)", "blur(0px)"]);
  if (reduce) return <span {...rest}>{children}</span>;
  return (
    <motion.span {...rest} style={{ opacity, y, filter: blur, display: "inline-block" }}>
      {children}
    </motion.span>
  );
}
