// Versão de demonstração das ações (prévia estática): valida igual ao servidor,
// mostra sucesso, mas não envia dados para lugar nenhum.
import { MENSAGENS, temErros, validarLista, type ListaState } from "./validacao";

const espera = () => new Promise((r) => setTimeout(r, 700));

export async function entrarNaLista(_prev: ListaState, fd: FormData): Promise<ListaState> {
  const { errors } = validarLista(fd);
  if (temErros(errors)) return { ok: false, message: MENSAGENS.confira, errors };
  await espera();
  return { ok: true, message: MENSAGENS.lista + MENSAGENS.demo };
}
