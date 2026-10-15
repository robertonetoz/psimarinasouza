// Todo o conteúdo do site fica aqui, para facilitar a edição.
// Para trocar uma foto, coloque o arquivo em /public/fotos e preencha o caminho
// (ex.: "/fotos/marina-hero.jpg"). Enquanto estiver vazio, o site mostra a moldura reservada.

export const photos = {
  hero: "",
  about: "",
  contact: "",
};

export const contact = {
  whatsappDisplay: "(34) 99880-6090",
  whatsappNumber: "5534998806090",
  whatsappMessage: "Olá, Marina! Vim pelo site e gostaria de informações sobre a terapia.",
  instagram: "https://www.instagram.com/psicologamarinasouza",
  instagramHandle: "@psicologamarinasouza",
  facebook: "https://www.facebook.com/psicologamarinasouza/",
  linkedin: "https://www.linkedin.com/in/marina-souza-a561734a/",
  crp: "CRP 04/37760",
  addressLine1: "Griff Shopping Uberlândia",
  addressLine2: "Av. Rondon Pacheco, 2300 – Saraiva",
  addressLine3: "Uberlândia – MG, 38408-404",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Psic%C3%B3loga+Marina+Souza+Griff+Shopping+Uberl%C3%A2ndia",
  mapsEmbed:
    "https://www.google.com/maps?q=Griff+Shopping+Uberl%C3%A2ndia,+Av.+Rondon+Pacheco,+2300&output=embed",
};

export const whatsappLink = (message = contact.whatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#temas", label: "Como posso ajudar" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export const stats = [
  { value: "5,0", label: "nota no Google, com 151 avaliações" },
  { value: "+15", label: "anos de experiência em psicologia" },
  { value: "9,5 mil", label: "mulheres acompanham no Instagram" },
];

export const topics = [
  {
    title: "Ansiedade",
    text: "Quando a mente não desliga, o corpo sente. Na terapia você aprende a reconhecer os gatilhos, entender o que a ansiedade está tentando dizer e construir formas mais leves de lidar com ela.",
  },
  {
    title: "Depressão e tristeza persistente",
    text: "Desânimo, cansaço e a sensação de que nada faz sentido merecem cuidado. O acompanhamento ajuda a nomear o que você sente e a recuperar, passo a passo, o vínculo com aquilo que importa para você.",
  },
  {
    title: "Autoestima e autoconfiança",
    text: "Olhar para si mesma com mais gentileza. Trabalhamos a autocrítica, a comparação e as crenças que fazem você duvidar do próprio valor.",
  },
  {
    title: "Relacionamentos e sexualidade",
    text: "Vínculos amorosos, familiares e a vivência da sexualidade, com a base da pós-graduação em Terapia Familiar e Sexologia. Um espaço sem julgamentos para falar do que muitas vezes fica guardado.",
  },
  {
    title: "Emoções e autoconhecimento",
    text: "Você controla suas emoções ou elas controlam você? Entender a própria história e os próprios padrões é o primeiro passo para escolher novos caminhos.",
  },
  {
    title: "Carreira e momentos de transição",
    text: "Mudanças, decisões e a pressão do dia a dia profissional. A experiência em RH e a formação em coaching ajudam a olhar para seus objetivos com clareza e acolhimento.",
  },
];

export const steps = [
  {
    title: "Você chama no WhatsApp",
    text: "Conte um pouco do que está buscando e tire suas dúvidas sobre horários, valores e funcionamento.",
  },
  {
    title: "Combinamos o primeiro encontro",
    text: "Escolhemos juntas o melhor dia e horário. Você recebe o link da sessão e as orientações para se preparar.",
  },
  {
    title: "A sessão acontece online",
    text: "Por videochamada, de onde você estiver: casa, trabalho ou outra cidade. Basta um lugar reservado e uma boa conexão.",
  },
  {
    title: "Seguimos no seu ritmo",
    text: "Com encontros regulares, construímos um processo terapêutico pensado para a sua história e os seus objetivos.",
  },
];

export const education = [
  {
    period: "2006 – 2010",
    title: "Graduação em Psicologia",
    place: "UFU – Universidade Federal de Uberlândia",
  },
  {
    period: "2012 – 2013",
    title: "MBA em Gestão Organizacional e Desenvolvimento de Talentos Humanos",
    place: "Faculdade Católica de Uberlândia",
  },
  {
    period: "2013 – 2014",
    title: "Pós-graduação em Terapia Familiar e Sexologia",
    place: "FASES – Faculdade Shalom de Ensino Superior",
  },
  {
    period: "2017",
    title: "Formação em Terapia Cognitivo-Comportamental",
    place: "Instituto Integrare",
  },
  {
    period: "2019",
    title: "Formação em Coaching",
    place: "Progrhedir",
  },
];

export const experience = [
  {
    period: "2016 – hoje",
    title: "Psicóloga clínica",
    place: "Consultório particular de psicologia, Uberlândia",
  },
  {
    period: "2016 – 2017",
    title: "Psicóloga",
    place: "Serviço para o Bem-Estar Humano – ONG Bem Estar",
  },
  {
    period: "2014 – 2015",
    title: "Psicóloga",
    place: "CAPSi – Centro de Atenção Psicossocial Infância e Adolescência & Unidade de Acolhimento Infantojuvenil",
  },
  {
    period: "2010 – 2015",
    title: "Analista de Recursos Humanos / Psicóloga",
    place: "Hospital Santa Genoveva",
  },
];

export const reviews = [
  {
    name: "Anny R.",
    when: "há 1 mês",
    text: "A Marina é uma excelente profissional: muito atenciosa, empática e competente! Desde a primeira sessão, me senti muito acolhida e, principalmente, ouvida. A terapia foi muito importante para mim e me ajudou a compreender melhor meus sentimentos.",
  },
  {
    name: "Bruna R.",
    when: "há 11 meses",
    text: "Faço acompanhamento com a Marina há quase um ano e posso dizer que foi a melhor profissional que já encontrei. Desde o início, ela me deixou muito à vontade, sempre prestativa, acolhedora e atenta em cada detalhe.",
  },
  {
    name: "Lara C.",
    when: "há 11 meses",
    text: "É nítida a evolução que tive desde que começamos as sessões. Ela é uma pessoa doce e gentil e uma profissional muito comprometida. Me sinto acolhida e compreendida em cada sessão.",
  },
  {
    name: "Luanny A.",
    when: "há 9 meses",
    text: "Profissional muito atenciosa e acolhedora. Demonstra ética, escuta ativa e respeito durante as sessões. Me senti confortável para falar e fui bem orientada.",
  },
  {
    name: "Maria K.",
    when: "há 10 meses",
    text: "Sempre me senti muito bem acolhida nas sessões e gostei bastante da forma leve e atenciosa com que ela conduz o atendimento. Foi uma experiência muito positiva e realmente me ajudou.",
  },
  {
    name: "Tábata L.",
    when: "há 6 meses",
    text: "Excelente profissional, super indico. Conheço o trabalho dela há mais de 10 anos e a abordagem é cada vez mais excepcional.",
  },
  {
    name: "Julia T.",
    when: "há 9 meses",
    text: "Excelente profissional! Muito acolhedora, atenciosa, empática. A terapia tem ajudado muito para o meu crescimento emocional.",
  },
  {
    name: "Gianni C.",
    when: "há 8 meses",
    text: "Desde a primeira sessão me senti acolhida e principalmente ouvida. Graças a ela hoje eu consigo compreender melhor as coisas e lidar melhor com meus sentimentos.",
  },
];

// Frases publicadas no Instagram. "image" pode receber o caminho de uma arte do feed.
export const instagramPosts = [
  { quote: "Nem sempre é intuição, às vezes pode ser apenas uma cabeça ansiosa.", image: "" },
  { quote: "Você controla suas emoções ou elas controlam você?", image: "" },
  { quote: "Você tem olhado para si mesma? O poder de olhar pra dentro.", image: "" },
  { quote: "Mais que ouvir, é entender para transformar.", image: "" },
];

export const instagramHighlights = [
  "Terapia",
  "Setembro Amarelo",
  "Janeiro Branco",
  "Palestras",
  "Entrevistas",
];

export const faq = [
  {
    q: "A terapia online funciona tão bem quanto a presencial?",
    a: "Sim. A psicoterapia online é regulamentada pelo Conselho Federal de Psicologia e mantém o mesmo cuidado, ética e sigilo do atendimento presencial. Para muitas mulheres, ela ainda facilita a rotina e a constância do processo.",
  },
  {
    q: "Quem pode ser atendida?",
    a: "O atendimento é especializado para mulheres jovens e adultas. Como é online, você pode estar em Uberlândia, em outra cidade ou até em outro país.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "É um momento para nos conhecermos. Você conta o que a trouxe até aqui, tira suas dúvidas e combinamos juntas a frequência e os próximos passos.",
  },
  {
    q: "O que eu preciso para a sessão online?",
    a: "Um celular ou computador com câmera, internet estável e um lugar reservado, onde você se sinta à vontade para falar. Fones de ouvido ajudam a garantir a privacidade.",
  },
  {
    q: "O que eu falar fica entre nós?",
    a: "Sim. O sigilo é um dever ético da psicóloga, garantido pelo Código de Ética Profissional do Psicólogo.",
  },
  {
    q: "Quais são os valores e as formas de pagamento?",
    a: "Valores, formas de pagamento e horários disponíveis são informados diretamente pelo WhatsApp.",
  },
];
