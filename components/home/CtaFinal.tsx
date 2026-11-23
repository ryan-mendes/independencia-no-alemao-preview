import Image from "next/image";
import Parallax from "@/components/cine/Parallax";
import Reveal from "@/components/motion/Reveal";
import Botao from "@/components/ui/Botao";
import { links, marca, img } from "@/lib/site";

export default function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-28 md:py-40">
      <Parallax speed={0.15} className="absolute inset-0 -z-10 opacity-35">
        <Image src={img.ravilleNeve} alt="" fill sizes="100vw" className="object-cover object-[50%_35%]" />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night via-night/70 to-night" />
      <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-8">
        <span className="flag-line mx-auto block h-[3px] w-16" aria-hidden />
        <h2 className="mt-8 text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-cream text-balance">{marca.slogan}</h2>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Botao href="#planos">Começar agora com risco zero</Botao>
          <Botao href={links.whatsapp} variante="ghost">
            Tirar uma dúvida no WhatsApp
          </Botao>
        </div>
      </Reveal>
    </section>
  );
}
