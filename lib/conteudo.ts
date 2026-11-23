// Conteúdo real de independencianoalemao.de/aula (base da Home) e /aulao (níveis).
// Correções de digitação feitas: "Parecelado" → "Parcelado", "Reposta" → "Resposta".

const WP = "https://independencianoalemao.de/wp-content/uploads";

export const hero = {
  eyebrow: "Aula gratuita · Método ADD",
  titulo: "Como falar alemão com mais confiança no dia a dia",
  subtitulo: "Assista gratuitamente essa aula de introdução e você vai aprender mais de 10 coisas.",
  videoAula: "aAs2EAqv2xQ",
};

export const aprendizados = [
  "Como sair da vergonha de travar no médico e fingir que entendeu",
  "Como sair da humilhação diária de depender de alguém pra falar por você",
  "Por que estudar muito e não conseguir falar não é culpa sua (e como resolver isso)",
  "Por que você foca em fluência e paga com silêncio",
  "Os 3 erros invisíveis que estão destruindo sua confiança em alemão, e como corrigir cada um",
  "Como sair da frustração de entender, mas não conseguir falar",
  "O que faz um alemão te entender de primeira (mesmo com sotaque)",
  "O segredo pra falar frases que já saem da boca, sem precisar pensar",
  "Como fazer o alemão grudar de um jeito que sai quando você mais precisa",
  "IAs treinadas pelo Raville para corrigir fala e pronúncia 24h por dia",
  "O passo a passo pra sair de “muda sobrevivente” até se tornar “dona da própria voz”",
];

export const destaques = [
  { titulo: "Mentorias semanais no Zoom", texto: "Para praticar temas urgentes do dia a dia, tirar dúvidas e manter o ritmo." },
  { titulo: "Acesso à comunidade", texto: "Você estuda numa comunidade que te entende e te puxa pra cima. Sem julgamento." },
  { titulo: "Garantia de 15 dias", texto: "Você poderá pedir seu reembolso em até 15 dias e ter todo o seu dinheiro de volta." },
];

export const depoimentosVideo = [
  {
    id: "qICJvfMankI",
    nome: "Silvânia",
    texto: "A Silvânia nasceu e cresceu na roça, estudou só até a quarta série, e olha só a transformação dela depois do método ADD.",
    vertical: false,
  },
  {
    id: "UkLl4ERM5_I",
    nome: "Márcia",
    texto: "Márcia fugia das pessoas, e quando alguém a olhava, ela baixava a cabeça para desviar o olhar. Depois do método ADD, veja o que aconteceu com ela.",
    vertical: true,
  },
  {
    id: "fq9D2AvB8Cs",
    nome: "David, Vinicius e Kellen",
    texto: "Depois do ADD, o David entendeu tudo como se fosse português, o Vinicius perdeu o medo de fazer ligações, e a Kellen, que não entendia nada do que as pessoas falavam, hoje faz questão de ir na casa dos vizinhos para bater papo.",
    vertical: false,
  },
];

/** Prints reais de mensagens de alunos (imagens do site atual, com largura x altura). */
export const prints: { src: string; w: number; h: number }[] = [
  ["2025/11/Screenshot_20251108_093152_WhatsAppBusiness.jpg", 1380, 1754],
  ["2025/11/IMG_20250916_125312_735.jpg", 1440, 726],
  ["2025/11/Screenshot_20251027_090345_Chrome.jpg", 1248, 865],
  ["2025/11/IMG-20240124-WA0008.jpg", 1080, 1553],
  ["2025/11/Screenshot_20250822_102922_Chrome.jpg", 1275, 510],
  ["2025/11/IMG-20240323-WA0000.jpg", 1080, 1206],
  ["2025/11/Screenshot_20250819_165950_Chrome.jpg", 1270, 924],
  ["2025/11/IMG-20240612-WA0002.jpg", 1080, 1579],
  ["2025/11/Screenshot_20250818_154058_Chrome.jpg", 1324, 2117],
  ["2025/11/IMG-20240625-WA0001.jpg", 1080, 989],
  ["2025/11/Screenshot_20250814_113326_Chrome.jpg", 1270, 924],
  ["2025/11/IMG-20240704-WA0001.jpg", 1080, 1543],
  ["2025/11/Screenshot_20250729_105609_Chrome.jpg", 1259, 1025],
  ["2025/11/IMG-20240814-WA0001.jpg", 1080, 1543],
  ["2025/11/Screenshot_20250729_091708_Chrome.jpg", 1287, 1010],
  ["2025/11/IMG-20240612-WA0000.jpg", 1080, 1206],
  ["2025/11/Screenshot_20250512_141723_Chrome.jpg", 1287, 762],
  ["2025/11/Screenshot_20241202_183952_Chrome.jpg", 1321, 819],
  ["2025/11/Screenshot_20240611_174811_Chrome.jpg", 1178, 785],
  ["2025/11/IMG-20240430-WA0012-scaled.jpg", 2560, 1823],
].map(([p, w, h]) => ({ src: `${WP}/${p}`, w: w as number, h: h as number }));

export const metodo = {
  eyebrow: "Veja o Método ADD na prática",
  abertura: "Você já estudou regra, já fez curso… e ainda trava. O problema não é você. É o caminho.",
  aberturaDe: "Du hast Regeln gelernt, Kurse gemacht… und blockierst trotzdem. Das Problem bist nicht du. Es ist der Weg.",
  intro:
    "O Método ADD é a base do Independência no Alemão e vira o jogo porque começa onde a vida acontece: na fala. Veja como ele funciona:",
  pilares: [
    {
      de: "Sprechen vor Regeln",
      titulo: "Fala antes da regra",
      texto: "Gramática é importante, mas você não começa por ela — começa pela boca. Treina som, entonação e frases úteis desde o primeiro dia.",
    },
    {
      de: "Sätze aus dem echten Leben",
      titulo: "Frases da vida real, não de livro",
      texto: "Nada de “O urso come mel.” Aqui você aprende o que vai usar na rua: consulta médica, mercado, escola, DR com o parceiro, conversa no trabalho.",
    },
    {
      de: "Ein Gedächtnis, das antwortet",
      titulo: "Memória que responde na hora certa",
      texto: "Sua memória deixa de ser um depósito e vira reflexo. Sem tabelas inúteis. Sem decoreba.",
    },
    {
      de: "Nicht auf Fließend warten",
      titulo: "Sem esperar ficar fluente para falar no dia a dia",
      texto: "Você aprende o que precisa, do jeito que o cérebro entende e a vida exige.",
    },
  ],
};

export const paraQuem = [
  "Mora ou quer morar na Alemanha, Áustria ou Suíça",
  "Já gaguejou ou travou no médico, na imigração, no trabalho",
  "Já fingiu que entendeu só pra evitar constrangimento",
  "Já aceitou quando mudaram pro inglês — e se sentiu menor",
  "Já se calou porque teve vergonha de errar o der, die, das",
  "Tá só começando, e já sentiu que esse caminho tradicional te leva pro mesmo buraco: anos estudando, e no final, fica muda no consultório",
  "E se estuda há mais tempo, talvez a culpa tenha virado sua companheira na hora de dormir",
];

export const comparativo = {
  titulo: "O que trava em outros métodos — e o que destrava no Método ADD",
  linhas: [
    { item: "Foco", add: "Imigrante que precisa falar no dia a dia", outros: "Excesso de gramática" },
    { item: "Frases", add: "Da vida real", outros: "Fora da realidade" },
    { item: "Suporte", add: "Resposta do professor Raville", outros: "Resposta de time genérico" },
    { item: "Resultado", add: "Confiança na hora de falar", outros: "Medo e silêncio" },
  ],
};

export const modulos = [
  {
    titulo: "Curso completo do A1 ao C1",
    texto: "São trilhas progressivas e práticas, onde você estuda no seu ritmo, com começo, meio e fim. Sem aula morna, sem confusão.",
  },
  {
    titulo: "AMA - Ambiente Motivador e Acolhedor",
    texto: "Estude com quem te entende e te puxa para cima. Encontre apoio emocional, trocas reais e faça parte do nosso encontro anual em Düsseldorf.",
  },
  {
    titulo: "Treinamento de pronúncia limpa",
    texto: "Pra você ser entendida de primeira, mesmo com sotaque forte. Você vai aprender os sons que fazem a diferença entre ser ouvida... e ser ignorada.",
  },
  {
    titulo: "Trilha de Progressão em Níveis",
    texto: "Da “Muda Sobrevivente” até virar “Dona da Própria Voz”. Você vai entender onde você está e qual é o seu próximo passo. Evitando que você se perca ou se sobrecarregue.",
  },
  {
    titulo: "Acesso de onde você estiver",
    texto: "Baixe as aulas, assista offline, leve o curso com você. Estude 15 minutos no aeroporto, no ônibus, no intervalo do trabalho, sem depender de sala de aula.",
  },
  {
    titulo: "Gramática funcional que faz sentido",
    texto: "Você aprende no contexto, na prática e pela primeira vez, a gramática faz sentido. Com meu material, você NUNCA mais vai precisar gastar dinheiro com gramática.",
  },
  {
    titulo: "Cronograma estruturado",
    texto: "Nada de se perder no meio do caminho. O cronograma carrega você até nos dias puxados.",
  },
  {
    titulo: "Dúvidas respondidas direto pelo professor",
    texto: "Terminou uma aula e travou? A resposta vem de quem já viveu o que você vive. Nada de equipe terceirizada.",
  },
  {
    titulo: "Super Memória com Anki 100% pronto",
    texto: "Mais de 1000 frases úteis já organizadas para revisão inteligente. Você não perde tempo criando e cadastrando frase por frase. Isso já foi feito para você.",
  },
];

/** Os 5 níveis (texto da página /aulao). */
export const niveis = [
  { n: 1, nome: "Muda Sobrevivente", texto: "Você entende, mas trava. Aqui você começa a soltar a voz." },
  { n: 2, nome: "Falante Corajosa", texto: "Você arrisca frases, mesmo com medo de errar." },
  { n: 3, nome: "Usuária Real", texto: "Você usa o alemão nas situações do dia a dia." },
  { n: 4, nome: "Navegadora Independente", texto: "Você se vira sem depender de ninguém para falar por você." },
  { n: 5, nome: "Dona da Própria Voz", texto: "Você fala com clareza e firmeza, no médico, no trabalho e em casa." },
];

export const bonus = [
  {
    titulo: "Mentoria Semanal",
    paragrafos: [
      "Toda semana, encontros ao vivo com o professor e suas colegas que estão vivendo os mesmos desafios que você.",
      "É lá que a gente trata dos temas reais do dia a dia, tira dúvidas ao vivo e aprende em grupo, com as perguntas que você nem sabia que tinha.",
      "Esses encontros são o que mantêm seu ritmo, sua confiança e sua presença. Não conseguiu ao vivo? Sem problema. O material fica na plataforma.",
    ],
  },
  {
    titulo: "Professor Particular de Alemão 24h",
    paragrafos: [
      "Imagine ter um professor particular de alemão sempre ao seu lado 24 horas por dia, sem pressa, sem julgamentos.",
      "Você vai aprender a usar a Inteligência Artificial como seu tutor pessoal: agentes criados para praticar conversação, escrita e vocabulário, prontos para corrigir seus erros na hora, criar exercícios sob medida e responder suas dúvidas com paciência infinita.",
      "É o caminho para ganhar autonomia total: estudar no seu ritmo, sem depender de marido, filho ou professor fixo.",
    ],
  },
];

export const investimento = {
  quantoVale: [
    "Vale mais do que sair do hospital sem entender o diagnóstico.",
    "Mais do que engolir a resposta na reunião.",
    "Mais do que ser tratada como incapaz na imigração.",
  ],
  vhs: [
    "A escola mais barata da Alemanha, a VHS, cobra mais de 300€ por subnível. Para sair do A1 até o C1 (10 subníveis no total), você vai gastar mais de 3.000€.",
    "E mesmo assim… vai sair travada. Você paga caro pra ser tratada como burra. Porque lá o foco é regra, não fala.",
    "É prova, não vida real. É nota. Não dignidade.",
  ],
  fonteVhs: "Fonte: site da vhs, curso A1.1, set/2025.",
  inclui: [
    "Aulas completas do A1 ao C1",
    "Mentorias ao vivo",
    "Treinamento de pronúncia limpa",
    "Frases úteis com áudio real de nativos",
    "Professor particular 24h com IA",
    "Meu acompanhamento direto",
  ],
  pagamento: "Parcelado ou à vista, com ou sem cartão de crédito",
};

export const planos = [
  {
    rotulo: "Plano 1",
    nome: "Plano Mensal",
    texto: "12 parcelas mensais ao longo de um ano.",
    cta: "Matrícula mensal",
    destaque: false,
  },
  {
    rotulo: "Plano 2",
    nome: "Plano Anual",
    texto: "1 parcela ao longo do ano.",
    cta: "Matrícula anual",
    destaque: true,
  },
] as const;

export const garantia = {
  titulo: "Risco zero para começar ainda hoje",
  texto: [
    "Você tem 15 dias de garantia incondicional: entre, assista, teste, tire dúvidas.",
    "Se não for para você, devolvo 100% do valor — sem perguntas, sem enrolação.",
  ],
  extra:
    "Se você se comprometer por 30 dias, seguir as trilhas “Comece Aqui” e “Base Que Faz a Diferença”, colocar em prática de verdade e ainda assim não sentir evolução real, na tua fala, escuta e confiança… Tranquilo. Eu devolvo 100% do valor.",
};

export const raville = {
  paragrafos: [
    "Raville chegou na Alemanha com uma mala, um sonho e uma ilusão: que falar alemão era só estudar muito. Jurista e músico, largou tudo no Brasil pra fazer mestrado em Bonn, e descobriu que decorar regra não ensina ninguém a pedir socorro, nem a entender um grito na imigração.",
    "Ali, entre humilhações e bloqueios, nasceu sua virada: em vez de estudar pra prova, começou a focar no alemão do dia a dia.",
    "Dessa experiência nasceu o Método ADD — Alemão do Dia a Dia, um jeito direto e humano de ensinar o idioma pra quem vive na Alemanha e precisa se virar agora.",
    "Desde então, Raville já ajudou mais de mil alunos a ganharem autonomia e confiança. Seu curso, Independência no Alemão, virou referência entre imigrantes que querem parar de depender.",
    "Com mais de 78 mil seguidores no Instagram, ele ensina com impacto, empatia e um lema claro:",
  ],
  lema: "Falar não é decorar. É ocupar espaço.",
  lemaDe: "Sprechen heißt nicht auswendig lernen. Es heißt, Raum einzunehmen.",
};

export const faq: { p: string; r: string }[] = [
  { p: "Por que o seu curso seria diferente se eu já fiz vários e continuo travada?", r: "Aqui você não precisa esperar “ficar pronta” pra começar a falar. O método foi criado justamente pra quem já tentou de tudo e continua travando. Nada de regra solta ou teoria infinita. Você aprende frases reais, pronúncia limpa e treinos que funcionam na vida prática. É alemão pra viver, não pra decorar." },
  { p: "Preciso saber algo antes de começar?", r: "Não precisa. Se souber só Hallo e Danke, já dá pra começar. E se não souber nem isso, também dá. O curso começa do zero, com calma, clareza e sem exposição." },
  { p: "Serve pra quem tá no A2/B1 mas não consegue falar?", r: "Serve demais. Quem entende mas não consegue colocar pra fora evolui rápido aqui. Você aprende fala conectada, segurança emocional, pronúncia clara e frases reais pra usar no dia a dia." },
  { p: "Vou aprender alemão real ou gramática de livro?", r: "Alemão real. O alemão que se usa no trabalho, na padaria, no médico, nas conversas do cotidiano. A gramática aparece, mas sempre no contexto e só quando fizer sentido." },
  { p: "Quanto tempo leva pra sentir diferença na fala?", r: "Se você acompanha as aulas e pratica do jeito certo, em poucas semanas já sente mudança. Às vezes na primeira semana. Nada de milagre, é método." },
  { p: "E se eu tiver vergonha de falar nas aulas ao vivo?", r: "Ninguém é obrigado a falar. Você participa no seu ritmo, observando, anotando ou falando quando quiser. Áudios são privados, sem exposição. Aqui ninguém te interrompe ou ri da sua fala." },
  { p: "E se eu tiver pouco tempo pra estudar?", r: "O método foi feito pra rotina corrida. As aulas são curtas e diretas. Você avança com 15 minutos por dia. O que importa é constância leve, não perfeição." },
  { p: "Posso cancelar quando quiser mesmo?", r: "Pode. Você entra, testa por 15 dias e decide. Se não fizer sentido, cancela com um clique. Sem burocracia." },
  { p: "Qual é a diferença entre esse curso e apps ou escolas tradicionais?", r: "Apps te dão palavras soltas. Escolas te dão regra demais. Aqui você aprende frases reais, pronúncia funcional, segurança emocional e situações da vida real. É estudo que vira ação, não coleção de teoria." },
  { p: "Se eu entrar hoje, por onde começo?", r: "Você encontra uma trilha clara logo no início escrita COMECE AQUI. Primeiro sons, depois frases úteis, depois situações reais. Nada de ficar perdida. É passo a passo." },
  { p: "Tenho vergonha até de dizer Hallo. O curso é pra mim?", r: "É justamente pra você. O método foi criado pra quem sente vergonha até do básico. Você começa pequeno, sem medo, sem ninguém te olhando. A confiança vem do treino guiado." },
  { p: "Consigo acompanhar mesmo com TDAH, cansaço ou rotina pesada?", r: "Sim. As aulas são diretas e organizadas em blocos leves. Se perder uma semana, volta sem culpa. Nada de pressão, nada de maratona. O cronograma dentro do curso te ajuda nos momentos mais difíceis." },
  { p: "Funciona pra quem mora na Suíça ou Áustria?", r: "Funciona igual. A estrutura do alemão padrão é a mesma e o curso foca em situações reais que acontecem em qualquer país de língua alemã." },
  { p: "Vou aprender só frases prontas ou realmente falar?", r: "As frases prontas são o ponto de partida. Você aprende pra usar imediatamente. Depois aprende a expandir, adaptar e criar as suas. Frase pronta aqui é trampolim, não muleta." },
  { p: "Como funcionam as aulas ao vivo?", r: "Acontecem toda terça, 20h (horário da Alemanha). A gente treina situações reais: médico, DR, escola, trabalho. Você participa falando ou só assistindo." },
  { p: "Por que é assinatura e não curso fechado?", r: "Porque evolução no alemão precisa de continuidade. A assinatura te dá acesso a novos módulos, aulas ao vivo e revisões constantes. Você fica enquanto fizer sentido pra sua vida." },
  { p: "O curso ajuda com pronúncia? Tenho vergonha do meu sotaque.", r: "Ajuda sim. Não pra apagar seu sotaque, mas pra deixar seus sons claros o suficiente pra que o nativo entenda de cara. Quando você é entendida, a vergonha diminui naturalmente." },
  { p: "Vou conseguir resolver médico, escola, trabalho e burocracia?", r: "Esse é o objetivo central. Cada módulo traz frases e situações específicas pra consultas, e-mails, reuniões e atendimentos. Você aprende o alemão da vida prática." },
  { p: "E se eu sumir por algumas semanas?", r: "Você não perde nada. As aulas ficam gravadas, a trilha continua lá, e você retoma sem pressão. A vida acontece. O método acompanha." },
  { p: "Existe risco de eu ficar mais perdida do que antes?", r: "Não. A estrutura é clara e progressiva. Você avança em passos pequenos, que fazem sentido. Não tem salto que te deixe confusa." },
  { p: "Em quanto tempo eu paro de depender do meu marido ou filho?", r: "Muitas alunas começam a resolver coisas simples sozinhas nas primeiras semanas. A autonomia cresce aos poucos. O que importa é começar a usar o que você sabe desde já." },
  { p: "Consigo aprender mesmo sendo tímida ou ansiosa?", r: "Consegue. O método foi criado pra quem sente que alemão aperta a garganta. Você pratica num ambiente seguro, sem julgamento. A confiança nasce do uso guiado, não de coragem milagrosa." },
  { p: "Você garante que eu vou evoluir na fala?", r: "Eu garanto o processo e te dou 15 dias pra testar sem risco. Se você seguir o método, a evolução aparece. Se não fizer sentido pra você, cancela." },
  // Em /aula a resposta está vazia ("Conteúdo da alternância"); usamos a resposta da página /aulao.
  { p: "É caro pra mim agora. Vale a pena começar mesmo assim?", r: "Entendo. Por isso você tem 15 dias de garantia incondicional: entra, testa, e se não fizer sentido eu devolvo 100%. Para ter referência, na VHS cada subnível passa de 300€, e aqui você tem do A1 ao C1, aulas ao vivo toda semana e professor de IA 24h." },
  { p: "Consigo acompanhar mesmo morando há anos na Alemanha e estando desanimada com o idioma?", r: "Sim. Quem desistiu do alemão em algum momento encontra aqui um caminho de volta mais leve. Você não começa do zero, você começa de onde está." },
  { p: "Qual é a diferença entre fluência e independência no alemão?", r: "Fluência é conversa longa. Independência é resolver a vida sem travar. O curso entrega independência rápido. A fluência vem depois como consequência do uso constante." },
];
