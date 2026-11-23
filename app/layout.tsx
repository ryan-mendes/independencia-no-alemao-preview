import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FilmOverlay from "@/components/cine/FilmOverlay";
import { img, marca } from "@/lib/site";
import "./globals.css";

const fonte = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(marca.dominio),
  title: `${marca.nome} | ${marca.slogan}`,
  description:
    "Curso online de alemão do professor Raville, com o Método ADD (Alemão do Dia a Dia): do A1 ao C1, mentorias semanais ao vivo e garantia de 15 dias.",
  icons: { icon: img.favicon },
  openGraph: { type: "website", locale: "pt_BR", siteName: marca.nome, images: [img.capa] },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: marca.nome,
  description: marca.slogan,
  inLanguage: "pt-BR",
  provider: { "@type": "Organization", name: marca.autor, legalName: marca.empresa, url: marca.dominio, email: marca.email },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fonte.variable}>
      <body className="bg-night font-sans text-cream">
        <Header />
        {children}
        <Footer />
        <FilmOverlay />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
