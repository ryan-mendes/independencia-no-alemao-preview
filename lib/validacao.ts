// Validação pura dos formulários: roda no servidor (Server Actions) e na prévia estática
// (GitHub Pages, lib/acoes.demo.ts). Não importe nada de servidor aqui.

export const emailValido = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export type FormState<C extends string> = { ok: boolean; message: string; errors?: Partial<Record<C, string>> };
type Resultado<C extends string, D> = { errors: Partial<Record<C, string>>; dados: D };
export const temErros = (e: object) => Object.keys(e).length > 0;

const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term", "utm_content"];
const utm = (fd: FormData) => Object.fromEntries(UTM.map((k) => [k, fd.get(k) || null]));

/* ── Lista de espera (campos do formulário atual: e-mail + concordância com a política) ── */
export type CampoLista = "email" | "consentimento";
export type ListaState = FormState<CampoLista>;

export function validarLista(fd: FormData): Resultado<CampoLista, Record<string, unknown>> {
  const email = String(fd.get("email") ?? "").trim();
  const errors: Partial<Record<CampoLista, string>> = {};
  if (!emailValido(email)) errors.email = "Informe um e-mail válido.";
  if (fd.get("consentimento") !== "on") errors.consentimento = "É preciso concordar com a política de privacidade.";
  return { errors, dados: { email, consentimento: true, utm: utm(fd) } };
}

export const MENSAGENS = {
  lista: "Pronto! Você está na lista de espera e vai receber os avisos em primeira mão.",
  erro: "Não foi possível enviar agora. Tente novamente em instantes.",
  confira: "Confira os campos destacados.",
  demo: " (Prévia: nenhum dado foi enviado.)",
};
