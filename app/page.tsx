import Hero from "@/components/home/Hero";
import Aula from "@/components/home/Aula";
import Metodo from "@/components/home/Metodo";
import ParaQuem from "@/components/home/ParaQuem";
import Modulos from "@/components/home/Modulos";
import Niveis from "@/components/home/Niveis";
import Bonus from "@/components/home/Bonus";
import Depoimentos from "@/components/home/Depoimentos";
import Investimento from "@/components/home/Investimento";
import Raville from "@/components/home/Raville";
import Faq from "@/components/home/Faq";
import CtaFinal from "@/components/home/CtaFinal";

// A Home conta a história do curso na ordem da página /aula do site atual.
export default function Home() {
  return (
    <main>
      <Hero />
      <Aula />
      <Depoimentos />
      <Metodo />
      <ParaQuem />
      <Modulos />
      <Niveis />
      <Bonus />
      <Investimento />
      <Raville />
      <Faq />
      <CtaFinal />
    </main>
  );
}
