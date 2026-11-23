"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Move o conteúdo em velocidade diferente da rolagem.
 * speed > 0: anda mais devagar que a página (fundo); speed < 0: anda mais rápido (primeiro plano).
 */
export default function Parallax({
  children,
  speed = 0.2,
  className,
  scale,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  /** Zoom lento ao rolar, ex.: [1.15, 1] */
  scale?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  const s = useTransform(scrollYProgress, [0, 1], scale ?? [1, 1]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="h-full w-full will-change-transform" style={reduce ? undefined : { y, scale: s }}>
        {children}
      </motion.div>
    </div>
  );
}
