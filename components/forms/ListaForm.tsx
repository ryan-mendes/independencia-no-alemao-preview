"use client";

import { useActionState, useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { entrarNaLista } from "@/lib/acoes";
import type { ListaState } from "@/lib/validacao";
import { legais } from "@/lib/site";

const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term", "utm_content"];

export default function ListaForm() {
  const [state, action, pending] = useActionState<ListaState, FormData>(entrarNaLista, { ok: false, message: "" });
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setUtm(Object.fromEntries(UTM.map((k) => [k, q.get(k) ?? ""])));
  }, []);

  if (state.ok) {
    return (
      <div role="status" className="rounded-3xl border border-cta/40 bg-night-2 p-8 text-center">
        <CheckCircle2 className="mx-auto text-cta" size={44} />
        <p className="mt-4 text-lg text-cream">{state.message}</p>
      </div>
    );
  }

  const politica = legais[0].href;

  return (
    <form action={action} noValidate className="rounded-3xl border border-white/10 bg-night-2 p-6 shadow-deep sm:p-8">
      {UTM.map((k) => (
        <input key={k} type="hidden" name={k} value={utm[k] ?? ""} />
      ))}
      <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream">
        E-mail
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="seu@email.com"
        aria-invalid={Boolean(state.errors?.email)}
        aria-describedby={state.errors?.email ? "email-err" : undefined}
        className={`w-full rounded-xl border bg-night px-4 py-3.5 text-cream outline-none transition placeholder:text-fog/50 focus:border-gold focus:ring-4 focus:ring-gold/15 ${
          state.errors?.email ? "border-red" : "border-white/15"
        }`}
      />
      {state.errors?.email && (
        <p id="email-err" className="mt-1.5 text-xs text-[#ff6b6b]">
          {state.errors.email}
        </p>
      )}

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-fog">
        <input
          type="checkbox"
          name="consentimento"
          aria-invalid={Boolean(state.errors?.consentimento)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-cta)]"
        />
        <span>
          Concordo com a{" "}
          <a href={politica} target="_blank" rel="noopener noreferrer" className="text-cream underline underline-offset-2 hover:text-gold">
            política de privacidade
          </a>
        </span>
      </label>
      {state.errors?.consentimento && <p className="mt-1.5 text-xs text-[#ff6b6b]">{state.errors.consentimento}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 font-semibold uppercase tracking-wide text-white shadow-cta transition hover:bg-cta-strong disabled:opacity-70"
      >
        {pending && <Loader2 size={18} className="animate-spin" />}
        Quero entrar na lista de espera
      </button>
      {state.message && !state.ok && <p className="mt-3 text-center text-sm text-[#ff6b6b]">{state.message}</p>}
    </form>
  );
}
