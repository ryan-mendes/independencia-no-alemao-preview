// Página "Todos meus links" (/cursos-alemao-com-raville) do site atual.
// No original, cada nível tem botões-imagem sem texto; os rótulos "À vista"/"Parcelado" vêm dos nomes dos links.
const S = "https://independencianoalemao.short.gy";

export const cursosNivel = [
  { nivel: "A1.1", titulo: "A1.1 para começar sem medo", opcoes: [{ label: "Quero o A1.1", href: `${S}/A1-1` }] },
  { nivel: "A1.2", titulo: "A1.2 para falar o básico com confiança", opcoes: [{ label: "Quero o A1.2", href: `${S}/A1-2` }] },
  {
    nivel: "A1",
    titulo: "A1 para sair da mímica",
    opcoes: [
      { label: "A1 completo à vista", href: `${S}/A1-completo-a-vista` },
      { label: "A1 completo parcelado", href: `${S}/A1-completo-parcelado` },
    ],
  },
  {
    nivel: "A2",
    titulo: "A2 para transformar confusão em clareza",
    opcoes: [
      { label: "A2 completo à vista", href: `${S}/A2-completo-a-vista` },
      { label: "A2 completo parcelado", href: `${S}/A2-completo-parcelado` },
    ],
  },
  {
    nivel: "B1",
    titulo: "B1 para parar de só entender e começar a falar",
    opcoes: [
      { label: "B1 completo à vista", href: `${S}/B1-completo-a-vista` },
      { label: "B1 completo parcelado", href: `${S}/B1-completo-parcelado` },
    ],
  },
  {
    nivel: "B2",
    titulo: "B2 para ter voz e te levarem a sério",
    opcoes: [
      { label: "B2 completo à vista", href: `${S}/B2-completo-a-vista` },
      { label: "B2 completo parcelado", href: `${S}/B2-completo-parcelado` },
    ],
  },
  {
    nivel: "C1",
    titulo: "C1 para falar com inteligência no nível mais alto",
    opcoes: [
      { label: "C1 completo à vista", href: `${S}/C1-completo-a-vista` },
      { label: "C1 completo parcelado", href: `${S}/C1-completo-parcelado` },
    ],
  },
];
