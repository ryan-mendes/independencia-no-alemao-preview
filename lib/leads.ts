import "server-only";

/**
 * Encaminha um formulário para o webhook configurado (CRM, RD Station, n8n, Zapier, Make...).
 * LEAD_WEBHOOK_URL recebe todos os tipos; LEAD_WEBHOOK_URL_<TIPO> sobrescreve por tipo
 * (ex.: LEAD_WEBHOOK_URL_CONTATO). Sem webhook, apenas registra no log do servidor,
 * sem dados pessoais, o que basta para desenvolvimento.
 */
export async function encaminharLead(tipo: string, dados: Record<string, unknown>) {
  const webhook = process.env[`LEAD_WEBHOOK_URL_${tipo.toUpperCase()}`] ?? process.env.LEAD_WEBHOOK_URL;
  const payload = { tipo, ...dados, criadoEm: new Date().toISOString() };

  if (!webhook) {
    console.info(`[lead:${tipo}] (sem webhook)`, Object.keys(dados));
    return;
  }
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
}
