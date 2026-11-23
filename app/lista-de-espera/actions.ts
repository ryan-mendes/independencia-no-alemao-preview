"use server";

import { encaminharLead } from "@/lib/leads";
import { MENSAGENS, temErros, validarLista, type ListaState } from "@/lib/validacao";

export async function entrarNaLista(_prev: ListaState, fd: FormData): Promise<ListaState> {
  const { errors, dados } = validarLista(fd);
  if (temErros(errors)) return { ok: false, message: MENSAGENS.confira, errors };
  try {
    await encaminharLead("lista", dados);
    return { ok: true, message: MENSAGENS.lista };
  } catch {
    return { ok: false, message: MENSAGENS.erro };
  }
}
