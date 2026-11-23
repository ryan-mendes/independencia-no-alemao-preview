// Dados da marca e da navegação, extraídos de independencianoalemao.de (nov/2026).
// Imagens: por enquanto servidas do WordPress atual (remotePatterns no next.config.ts).

export const marca = {
  nome: "Independência no Alemão",
  autor: "Alemão com Raville",
  slogan: "Fale alemão com mais confiança no dia a dia",
  dominio: "https://independencianoalemao.de",
  email: "alemao.com.raville@gmail.com",
  empresa: "RAVILLE EDUCAÇÃO LTDA – ME",
  cnpj: "60.124.315/0001-72",
};

const WP = "https://independencianoalemao.de/wp-content/uploads";

export const img = {
  favicon: `${WP}/2023/12/Favicon-Novo-512-x-512.png`,
  ravilleBandeira: `${WP}/2024/01/Foto-expert-site.png`, // recorte com a bandeira, 551x634
  ravillePonte: `${WP}/2026/01/Foto-Raville-Site-1.jpeg`, // Hamburgo, 1200x1600
  ravilleNeve: `${WP}/2026/01/Foto-Raville-Site-2.jpeg`, // neve, 914x1600
  capa: `${WP}/2025/11/Independencia-no-Alemao-Capa-Site.png`,
  garantia: `${WP}/2025/10/garantia-15-dias.png`,
  escolaTradicional: `${WP}/2025/11/print-escola-tradicional.jpg`,
};

/** Site antigo: páginas legais continuam lá. */
const LEGADO = marca.dominio;

const WHATSAPP_NUM = "491634706022";
const WHATSAPP_MSG = "Olá Raville! Assisti à aula gratuita e queria tirar uma dúvida sobre o Independência no Alemão.";

export const links = {
  checkoutMensal: "https://independencianoalemao.short.gy/mensal",
  checkoutAnual: "https://independencianoalemao.short.gy/anual",
  ctaPrincipal: "/#planos",
  ctaPrincipalTexto: "Quero entrar",
  whatsapp: `https://api.whatsapp.com/send?phone=${WHATSAPP_NUM}&text=${encodeURIComponent(WHATSAPP_MSG)}`,
  whatsappMatricula: `https://api.whatsapp.com/send?phone=491633720809&text=${encodeURIComponent("Quero ajuda com a matrícula")}`,
  instagram: "https://www.instagram.com/alemao.com.raville/",
  youtube: "https://www.youtube.com/c/Alem%C3%A3oComRaville",
  tiktok: "https://www.tiktok.com/@alemao.com.raville",
  whatsappLink: "https://wa.link/i1jxeh",
};

export const legais = [
  { label: "Política de Privacidade", href: `${LEGADO}/politica-de-privacidade/` },
  { label: "Termos de Uso", href: `${LEGADO}/termos-de-uso/` },
  { label: "Impressum", href: `${LEGADO}/impressum/` },
  { label: "Datenschutzerklärung", href: `${LEGADO}/datenschutzerklaerung/` },
  { label: "AGB", href: `${LEGADO}/agb/` },
];

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Aula gratuita", href: "/aula" },
  { label: "Planos", href: "/escolha-plano" },
  { label: "Cursos por nível", href: "/cursos-alemao-com-raville" },
  { label: "Lista de espera", href: "/lista-de-espera" },
];
