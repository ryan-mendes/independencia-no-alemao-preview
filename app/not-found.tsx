import Botao from "@/components/ui/Botao";

// Também evita o erro "no direct app page entry found for /_not-found" no build estático.
export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-night pt-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <p className="text-gold-grad text-8xl font-semibold tracking-tight md:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-cream md:text-4xl">Seite nicht gefunden</h1>
        <p className="mt-4 text-fog">Página não encontrada. O endereço pode ter mudado com o novo site.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Botao href="/">Ir para o início</Botao>
          <Botao href="/aula" variante="ghost">
            Assistir à aula gratuita
          </Botao>
        </div>
      </div>
    </main>
  );
}
