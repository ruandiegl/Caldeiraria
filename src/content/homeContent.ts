import { institutionalFacts } from './institutionalContent';

export type HomeMedia = {
  src: string | null;
  alt: string;
  caption: string;
  status: 'pending-asset' | 'preview-asset' | 'approved';
};

export type HomeMetric = {
  value: string;
  label: string;
  context: string;
};

export const homeContent = {
  hero: {
    eyebrow: '50 anos de história',
    title: 'Gente que transforma engenharia em realidade',
    body:
      'Desde 1974, pessoas, técnica e responsabilidade movem soluções para a indústria, a infraestrutura e os desafios que exigem precisão.',
    primaryAction: { label: 'Conheça nossa trajetória', href: '/empresa/historia' },
    secondaryAction: { label: 'Fale com a nossa equipe', href: '/contato' },
  },
  history: {
    eyebrow: 'Uma história feita em conjunto',
    title: '50 anos de seriedade, técnica e inovação.',
    body:
      'Fundada em 1º de julho de 1974, em Barra Mansa, a Metalúrgica Vulcano começou produzindo peças fundidas para o mercado nacional. Ao longo das décadas, ampliou sua atuação para insumos siderúrgicos, caldeiraria, tubulações, compósitos e serviços industriais especializados.',
    link: { label: 'Conheça a história completa', href: '/empresa/historia' },
  },
  identity: {
    eyebrow: 'Missão, visão e valores',
    title: 'O que nos move.',
    body: 'A Vulcano reúne excelência técnica, segurança e precisão para apoiar a indústria nacional com responsabilidade e inovação.',
    values: [
      { title: 'Respeito à vida', detail: 'Segurança em cada processo e em cada equipe.' },
      { title: 'Excelência técnica', detail: 'Rigor do projeto à entrega.' },
      { title: 'Parceria duradoura', detail: 'Relações transparentes com clientes, pessoas e fornecedores.' },
    ],
    link: { label: 'Conheça nossa identidade', href: '/empresa/historia' },
  },
  work: {
    eyebrow: 'Por dentro do trabalho',
    title: 'Por dentro do trabalho: a capacidade aparece no detalhe de cada dia.',
    intro:
      'Uma entrega confiável começa antes do produto pronto: no planejamento, na preparação, na conversa entre áreas e no cuidado de quem executa.',
    moments: [
      {
        title: 'Preparar',
        detail: 'Planejamento, desenho e organização para começar cada etapa com clareza.',
        mediaIndex: 1,
      },
      {
        title: 'Fazer',
        detail: 'Mãos, máquinas e experiência trabalhando juntas dentro da unidade.',
        mediaIndex: 2,
      },
      {
        title: 'Cuidar',
        detail: 'Qualidade, segurança e rastreabilidade acompanhando a entrega até o campo.',
        mediaIndex: 3,
      },
    ],
  },
  metrics: [
    { value: `${institutionalFacts.anniversaryYears} anos`, label: 'de história', context: `Uma trajetória iniciada em ${institutionalFacts.foundedYear}.` },
    { value: `${institutionalFacts.units} unidades`, label: 'vizinhas', context: 'Estrutura integrada em Barra Mansa.' },
    { value: institutionalFacts.totalArea, label: 'de área total', context: 'Parques industriais próximos entre si.' },
    { value: institutionalFacts.coveredArea, label: 'de área coberta', context: `Espaço atendido por ${institutionalFacts.gantryCranes} pontes rolantes.` },
  ] satisfies HomeMetric[],
  solutions: [
    { title: 'Siderurgia', detail: 'Insumos e soluções para uma cadeia industrial essencial.', href: '/servicos', tone: 'blue' },
    { title: 'Caldeiraria', detail: 'Peças, estruturas e conjuntos feitos sob medida.', href: '/servicos', tone: 'blue' },
    { title: 'Serviços industriais', detail: 'Experiência técnica para fabricar, montar e manter.', href: '/servicos', tone: 'blue' },
    { title: 'Projetos especiais', detail: 'Engenharia aplicada aos requisitos de cada desafio.', href: '/servicos', tone: 'blue' },
    { title: 'Offshore', detail: 'Fabricação, montagem e manutenção para operações no mar.', href: '/servicos/offshore', tone: 'offshore' },
    { title: 'Linha Amarela', detail: 'Componentes e soluções para máquinas de construção e implementos.', href: '/servicos', tone: 'linha-amarela' },
  ],
  culture: {
    eyebrow: 'O jeito de trabalhar',
    title: 'Segurança, precisão e respeito à vida em cada processo.',
    body:
      'A qualidade não está separada das pessoas. Ela aparece na forma como cada equipe planeja, executa, verifica e melhora o trabalho.',
    currentCertification: { label: 'Certificação vigente', items: institutionalFacts.certifications.filter(({ status }) => status === 'vigente').map(({ name }) => name) },
    futureCertifications: { label: 'Em transição', items: institutionalFacts.certifications.filter(({ status }) => status === 'em transição').map(({ name }) => name) },
    link: { label: 'Conheça nossos compromissos', href: '/empresa/qualidade' },
  },
  esg: {
    eyebrow: 'ESG em ação',
    title: 'Responsabilidade em cada decisão.',
    body: 'A agenda ESG conecta cuidado ambiental, desenvolvimento das pessoas e integridade à operação industrial.',
    pillars: [
      { title: 'Ambiente', detail: 'Eficiência no uso de energia, água e materiais.' },
      { title: 'Pessoas', detail: 'Segurança, trabalho digno e formação contínua.' },
      { title: 'Governança', detail: 'Ética e transparência nas relações.' },
    ],
    link: { label: 'Conheça nossa agenda ESG', href: '/empresa/esg' },
  },
  careers: {
    eyebrow: 'Trabalhe conosco',
    title: 'O futuro também é construído por quem chega.',
    body:
      'Se você quer desenvolver sua trajetória em engenharia, caldeiraria, siderurgia ou infraestrutura, venha conhecer as pessoas e os desafios que fazem parte da Vulcano.',
    link: { label: 'Conheça as oportunidades', href: '/pessoas/carreira' },
  },
  contact: {
    eyebrow: 'Vamos conversar',
    title: 'Seu próximo desafio começa com uma conversa.',
    body: 'Conte o que você precisa. Nossa equipe técnica ajuda a encontrar o caminho mais adequado para o seu projeto.',
    link: { label: 'Fale com a Vulcano', href: '/contato' },
  },
  media: [
    {
      src: 'https://images.unsplash.com/photo-1695603414724-2396274ef5cc?auto=format&fit=crop&w=1600&q=82',
      alt: 'Trabalhadores usando equipamentos de proteção em uma fábrica industrial',
      caption: 'Imagem de demonstração via Unsplash — substituir por foto autorizada da Vulcano.',
      status: 'preview-asset',
    },
    {
      src: 'https://images.unsplash.com/photo-1667589181956-7975c643d660?auto=format&fit=crop&w=1200&q=82',
      alt: 'Pessoa trabalhando em uma etapa de produção industrial',
      caption: 'Preparar: imagem de demonstração via Unsplash — substituir por foto autorizada.',
      status: 'preview-asset',
    },
    {
      src: 'https://images.unsplash.com/photo-1738162837330-9257f938463c?auto=format&fit=crop&w=1200&q=82',
      alt: 'Profissional operando uma máquina em uma fábrica',
      caption: 'Fazer: imagem de demonstração via Unsplash — substituir por foto autorizada.',
      status: 'preview-asset',
    },
    {
      src: 'https://images.unsplash.com/photo-1675109786596-0c20239ad292?auto=format&fit=crop&w=1200&q=82',
      alt: 'Profissional realizando uma atividade de fabricação em uma máquina',
      caption: 'Cuidar: imagem de demonstração via Unsplash — substituir por foto autorizada.',
      status: 'preview-asset',
    },
  ] satisfies HomeMedia[],
};
