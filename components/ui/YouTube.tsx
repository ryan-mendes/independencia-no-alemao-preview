"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/** YouTube leve: mostra a capa e só carrega o player ao clicar. */
export default function YouTube({
  id,
  titulo,
  vertical = false,
  className = "",
}: {
  id: string;
  titulo: string;
  vertical?: boolean;
  className?: string;
}) {
  const [ativo, setAtivo] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-night-3 shadow-deep ring-1 ring-white/10 ${
        vertical ? "aspect-[9/16]" : "aspect-video"
      } ${className}`}
    >
      {ativo ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setAtivo(true)} className="group absolute inset-0 h-full w-full" aria-label={`Assistir: ${titulo}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 ease-[var(--ease-cine)] group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cta text-white shadow-cta transition duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1" size={28} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
