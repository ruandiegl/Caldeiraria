import type { SourceRef } from './sourceDocuments';

export type InstitutionalId = 'history' | 'identity' | 'structure' | 'quality' | 'esg' | 'social-actions';
export type EditorialStatus = 'approved' | 'needs-review' | 'asset-pending' | 'link-pending';
export type EditorialParagraph = {
  id: string;
  text: string;
  sourceParagraphs: number[];
  originRefs: readonly SourceRef[];
  anchorId?: string;
  kind?: 'eyebrow' | 'heading' | 'body' | 'item';
};
export type InstitutionalSection = {
  id: InstitutionalId;
  title: string;
  paragraphs: EditorialParagraph[];
  detailParagraphs?: EditorialParagraph[];
  pendingParagraphs?: readonly EditorialParagraph[];
  status: EditorialStatus;
  editorialNotes?: string[];
  certifications?: readonly { name: string; status: 'vigente' | 'em transição' }[];
};

export const institutionalFacts = {
  foundedYear: 1974,
  anniversaryYears: 50,
  units: 3,
  unitAreas: ['16.000 m²', '15.000 m²', '3.500 m²'],
  totalArea: '34.500 m²',
  coveredArea: '17.000 m²',
  gantryCranes: 11,
  certifications: [
    { name: 'ISO 9001:2015', status: 'vigente' },
    { name: 'ISO 14001', status: 'em transição' },
    { name: 'ISO 45001', status: 'em transição' },
  ],
} as const;

const paragraph = (
  source: number | number[],
  text: string,
  kind: EditorialParagraph['kind'] = 'body',
): EditorialParagraph => {
  const legacyParagraphs = Array.isArray(source) ? source : [source];
  return {
    id: `legacy-${legacyParagraphs.join('-')}`,
    text,
    sourceParagraphs: legacyParagraphs,
    originRefs: legacyParagraphs.map((paragraphNumber) => ({ documentId: 'word-legacy', paragraph: paragraphNumber + 1 })),
    kind,
  };
};

export const homeSectionIds: readonly InstitutionalId[] = [
  'history', 'identity', 'structure', 'quality', 'esg',
];
export const companyTopicPaths: Record<InstitutionalId, string> = {
  history: '/empresa/historia',
  identity: '/empresa/historia',
  structure: '/empresa/estrutura',
  quality: '/empresa/qualidade',
  esg: '/empresa/esg',
  'social-actions': '/empresa/acoes-sociais',
};

const clientParagraph = (
  id: string,
  source: number | number[],
  text: string,
  kind: EditorialParagraph['kind'] = 'body',
  anchorId?: string,
): EditorialParagraph => {
  const paragraphs = Array.isArray(source) ? source : [source];
  return {
    id,
    text,
    sourceParagraphs: [],
    originRefs: paragraphs.map((paragraphNumber) => ({ documentId: 'word-18-10', paragraph: paragraphNumber })),
    kind,
    ...(anchorId ? { anchorId } : {}),
  };
};

export const institutionalContent: Record<InstitutionalId, InstitutionalSection> = {
  history: {
    id: 'history',
    title: 'Nossa História',
    status: 'approved',
    paragraphs: [
      clientParagraph('history.origin', 7, 'Nossa História: Meio Século de Seriedade, Técnica e Inovação', 'heading', 'origem'),
      clientParagraph('history.foundation', 9, 'Fundada em 1º de julho de 1974 na cidade de Barra Mansa, Rio de Janeiro, a Metalúrgica Vulcano Ltda. iniciou sua trajetória focada na confecção de peças fundidas para o mercado nacional. Movida pela determinação de entregar máxima eficiência tecnológica, a empresa rapidamente expandiu suas capacidades, consolidando-se como uma parceira estratégica para as maiores e mais exigentes indústrias do país.'),
      clientParagraph('history.portfolio', 10, 'Ao longo das décadas, a Vulcano diversificou seu portfólio de soluções. De líder no fornecimento de insumos siderúrgicos, essenciais para a cadeia da siderurgia e metalurgia nacional, especializou-se também em setores de alta complexidade técnica, como caldeiraria pesada (onshore e offshore), fabricação de tubulações, suportes industriais, compósitos e serviços industriais especializados. Em 2012, inaugurou sua unidade voltada para esses projetos.'),
      clientParagraph('history.expansion', 12, 'A Expansão e Modernização', 'heading', 'expansao'),
      clientParagraph('history.facilities', 13, 'Para acompanhar o ritmo de crescimento dos mercados de energia, infraestrutura e mineração, a empresa expandiu sua presença física. Com unidades fabris modernas localizadas estrategicamente em Barra Mansa e área total de 34.500 m², estruturou parques industriais equipados com tecnologia e processos rigorosos de controle de qualidade e segurança.'),
      clientParagraph('history.units', 15, 'Dividida em três unidades independentes e vizinhas, a Metalúrgica Vulcano Ltda. apresenta uma unidade de 16.000 m², voltada para produtos refratários, insumos siderúrgicos e pré-moldados de concreto; outra de 15.000 m² para caldeiraria pesada e peças para o setor de máquinas, com infraestrutura de pintura e tratamento térmico; e uma terceira unidade, para caldeiraria leve, com 3.500 m². Todas são atendidas por pontes rolantes de 5 a 16 toneladas e contam com pátios cercados e calçados para estocagem.'),
      clientParagraph('history.future', 17, 'Os Últimos Anos: Rumo ao Futuro', 'heading', 'futuro'),
      clientParagraph('history.50-years', 18, 'Em 2024, a Metalúrgica Vulcano celebrou um marco histórico: 50 anos de operações ininterruptas no Brasil. Nos últimos anos, consolidou sua atuação no desenvolvimento de projetos especiais de engenharia personalizados e ampliou o atendimento aos setores de óleo e gás, transição energética e siderurgia de larga escala.'),
      clientParagraph('history.today', 20, 'Hoje, com uma equipe técnica altamente qualificada de engenheiros e especialistas formados nos principais centros do país, a empresa segue firme em sua missão: moldar o futuro da indústria com solidez, sustentabilidade, segurança e precisão.'),
    ],
  },
  identity: {
    id: 'identity',
    title: 'Missão, Visão e Valores',
    status: 'approved',
    paragraphs: [
      clientParagraph('identity.mission', 22, 'Missão: Prover soluções de engenharia, caldeiraria e insumos siderúrgicos com excelência técnica, segurança e precisão, impulsionando o desenvolvimento da infraestrutura e da indústria nacional com responsabilidade e inovação.'),
      clientParagraph('identity.vision', 24, 'Visão: Ser reconhecida como a parceira estratégica mais confiável do mercado metalmecânico nacional em projetos de alta complexidade, consolidando nossa expansão com base em inovação tecnológica e sustentabilidade.'),
      clientParagraph('identity.values', 26, 'Valores:', 'heading'),
      clientParagraph('identity.safety', 27, 'Segurança e Respeito à Vida: Nossa prioridade absoluta em cada processo fabril e de montagem.', 'item'),
      clientParagraph('identity.excellence', 28, 'Excelência Técnica: Rigor e precisão técnica para superar as expectativas do mercado.', 'item'),
      clientParagraph('identity.partnership', 29, 'Parceria de Longo Prazo: Relações transparentes e sólidas com clientes, colaboradores e fornecedores.', 'item'),
      clientParagraph('identity.sustainability', 30, 'Sustentabilidade e Futuro: Compromisso contínuo com o desenvolvimento socioambiental e a governança.', 'item'),
    ],
  },
  structure: {
    id: 'structure',
    title: 'Estrutura industrial',
    status: 'approved',
    paragraphs: [
      clientParagraph('structure.capacity', 32, 'Descrição do Grupo (estrutura)', 'heading', 'capacidades'),
      clientParagraph('structure.total-area', 34, 'Área total de 34.500 m², dividida em 3 unidades vizinhas.', 'item'),
      clientParagraph('structure.covered-area', 35, 'Área coberta total de 17.000 m², atendida por 11 pontes rolantes de 5 a 16 toneladas.', 'item'),
      clientParagraph('structure.forklifts', 36, 'Empilhadeiras de 2,5 a 4 toneladas: 5 unidades.', 'item'),
      clientParagraph('structure.cranes', 37, 'Guindastes hidráulicos tipo Munck de 20 toneladas: 2 unidades.', 'item'),
      clientParagraph('structure.plasma-cutting', 38, 'Mesas de corte a plasma até 2 polegadas de espessura: 2 unidades.', 'item'),
      clientParagraph('structure.oxycutting', 39, 'Mesa de oxicorte até 250 mm de espessura: 1 unidade.', 'item'),
      clientParagraph('structure.rolling', 40, 'Calandras para até 25 mm de espessura: 2 unidades.', 'item'),
      clientParagraph('structure.bending', 41, 'Dobradeiras para até 12 mm de espessura: 2 unidades.', 'item'),
      clientParagraph('structure.shearing', 42, 'Guilhotinas para até 12 mm de espessura: 2 unidades.', 'item'),
      clientParagraph('structure.boring', 43, 'Mandrilhadoras CN de médio porte: 2 unidades.', 'item'),
      clientParagraph('structure.radial-drills', 44, 'Furadeiras radiais de grande porte: 2 unidades.', 'item'),
      clientParagraph('structure.presses', 45, 'Prensas de 400, 100 e 50 toneladas: 4 unidades.', 'item'),
      clientParagraph('structure.welding', 46, 'Máquinas de soldagem próprias: 35 unidades.', 'item'),
      clientParagraph('structure.heat-treatment', 47, 'Fornos de tratamento térmico de grande porte: 2 unidades.', 'item'),
      clientParagraph('structure.blasting', 48, 'Cabine de jato abrasivo de grande porte.', 'item'),
      clientParagraph('structure.painting', 49, 'Cabines de pintura de grande porte: 3 unidades.', 'item'),
      clientParagraph('structure.hydroblasting', 50, 'Hidrojato abrasivo de alta pressão.', 'item'),
      clientParagraph('structure.concrete-mixers', 51, 'Mixer de materiais de concreto e refratário: 3 unidades.', 'item'),
      clientParagraph('structure.mixer-trucks', 52, 'Caminhões betoneira: 4 unidades.', 'item'),
      clientParagraph('structure.concrete-pump', 53, 'Bomba de concreto de 2000 psi.', 'item'),
      clientParagraph('structure.large-mixers', 54, 'Misturadores de grande porte: 3 unidades.', 'item'),
      clientParagraph('structure.road-scale', 55, 'Balança rodoviária própria de 45 toneladas.', 'item'),
    ],
  },
  quality: {
    id: 'quality',
    title: 'Qualidade, Segurança e Sustentabilidade',
    status: 'link-pending',
    certifications: institutionalFacts.certifications,
    editorialNotes: [
      'O arquivo oficial do certificado ISO 9001:2015 ainda não foi informado (P177).',
      'O conteúdo fornecido menciona as unidades de Barra Mansa e Itaboraí (P64/P175); a página mantém a afirmação sem atribuir número de unidades por localidade.',
    ],
    paragraphs: [
      clientParagraph('quality.eyebrow', 170, 'Qualidade', 'eyebrow'),
      clientParagraph('quality.commitment', [57, 172], 'Compromisso com a Excelência: Qualidade, Segurança e Sustentabilidade na Vulcano', 'heading', 'certificacoes'),
      clientParagraph('quality.iso-9001', [60, 173], 'Na Metalúrgica Vulcano Ltda., a busca pela perfeição técnica caminha lado a lado com a responsabilidade operacional. Como reflexo do nosso rigoroso padrão de governança e produção, celebramos a renovação da nossa certificação ISO 9001:2015, um selo que chancela a eficiência, a melhoria contínua e a qualidade internacional de todo o nosso Sistema de Gestão da Qualidade.'),
      clientParagraph('quality.iso-transition', [62, 174], 'Olhando para o futuro e reafirmando nosso compromisso com a agenda ESG (Ambiental, Social e Governança), anunciamos que a empresa está em fase avançada de transição para as certificações ISO 14001 (Sistema de Gestão Ambiental) e ISO 45001 (Sistema de Gestão de Saúde e Segurança Ocupacional). Ambas têm previsão para o primeiro semestre de 2027.'),
      clientParagraph('quality.daily-practices', [64, 175], 'Mais do que a busca pelos selos formais, a Vulcano já adota integralmente em suas rotinas fabris as práticas e exigências requeridas por ambas as normas. O cuidado com a preservação ambiental, a ecoeficiência em nossas unidades de Barra Mansa e Itaboraí e a garantia de um ambiente de trabalho com risco zero para os nossos colaboradores já fazem parte do nosso DNA diário.'),
      clientParagraph('quality.conclusion', [65, 176], 'Com a consolidação desses sistemas de gestão, a Metalúrgica Vulcano reafirma sua posição como uma parceira estratégica de alta confiabilidade para os mercados mais exigentes do país, unindo a força da engenharia pesada a um futuro mais seguro e sustentável.'),
    ],
  },
  esg: {
    id: 'esg',
    title: 'ESG e sustentabilidade',
    status: 'link-pending',
    editorialNotes: ['O canal de denúncias e a imagem do Código de Conduta estão sem URL/arquivo oficiais; o texto que pressupõe um canal ativo fica retido até haver destino real.'],
    paragraphs: [
      clientParagraph('esg.title', [67, 179], 'Sustentabilidade em ação: a jornada ESG da Metalúrgica Vulcano', 'heading'),
      clientParagraph('esg.introduction', 70, 'Na Metalúrgica Vulcano Ltda., entendemos que o futuro exige responsabilidade ambiental, compromisso social e governança corporativa. Em consonância com práticas globais e critérios do mercado, consolidamos a implantação da nossa Agenda ESG.'),
      clientParagraph('esg.pillars-intro', [72, 181], 'Nossa atuação desdobra-se em três pilares fundamentais de impacto:'),
      clientParagraph('esg.environment', [73, 182], '1. Ambiental (E): Ecoeficiência e Descarbonização', 'heading'),
      clientParagraph('esg.environment-intro', [74, 183], 'Inspirados nas metas setoriais de redução da pegada de carbono e transição energética justa, direcionamos esforços para mitigar o impacto ambiental nas unidades.'),
      clientParagraph('esg.energy', [76, 185], 'Gestão de Emissões e Energia: Monitoramento dos escopos de emissão com foco na eficiência energética de nossos processos industriais.', 'item'),
      clientParagraph('esg.resources', [77, 186], 'Preservação e Ecoeficiência: Práticas rigorosas de destinação e reciclagem de resíduos industriais, além de otimização do uso de recursos hídricos na produção.', 'item'),
      clientParagraph('esg.social', [79, 188], '2. Social (S): Segurança, Saúde e Direitos Humanos', 'heading'),
      clientParagraph('esg.social-intro', [80, 189], 'Cuidar das pessoas e garantir operações seguras é a base da produtividade diária. Nossas práticas refletem os itens sociais mais críticos da cadeia de fornecedores.'),
      clientParagraph('esg.occupational-safety', [81, 190], 'Risco Zero e Saúde Ocupacional: Manutenção de um ambiente de trabalho seguro e saudável, estruturado sob as exigências de conformidade técnica e proteção integral ao trabalhador.', 'item'),
      clientParagraph('esg.human-rights', [82, 191], 'Direitos Humanos e Desenvolvimento: Compromisso com o trabalho digno, diversidade, inclusão e capacitação contínua da mão de obra técnica local.', 'item'),
      clientParagraph('esg.governance', [84, 193], '3. Governança (G): Integridade, Ética e Compliance', 'heading'),
      clientParagraph('esg.governance-intro', [85, 194], 'A confiabilidade do Grupo Vulcano é apoiada por uma estrutura transparente e em conformidade com a legislação. As políticas buscam atender a critérios avançados de auditoria corporativa.'),
      clientParagraph('esg.integrity-risk', [86, 195], 'Grau de Risco de Integridade (GRI): Os processos internos de governança seguem as diretrizes do Guia de Conduta Ética para Fornecedores da Petrobras, com padrões de conformidade no combate à corrupção, transparência em licitações e avaliação de riscos em subfornecedores (Due Diligence de Integridade).', 'item'),
      clientParagraph('esg.conclusion', [89, 198], 'Ao unir engenharia de alta complexidade com critérios ESG rigorosos, a Metalúrgica Vulcano Ltda. reforça sua posição como parceira para os desafios do amanhã.'),
    ],
    pendingParagraphs: [
      clientParagraph('esg.channel-promise-pending', [88, 197], 'Ética nos Negócios: Canais de denúncia ativos, políticas anticorrupção estruturadas e transparência em toda a cadeia de suprimentos.', 'item'),
    ],
  },
  'social-actions': {
    id: 'social-actions',
    title: 'Ações Sociais',
    status: 'asset-pending',
    editorialNotes: ['O Word 18-10 não contém uma seção nova de Ações Sociais. Esta página mantém a redação da fonte anterior e aguarda revisão editorial e aprovação de imagens.'],
    paragraphs: [
      paragraph(208, 'Ações Sociais', 'eyebrow'),
      paragraph(209, 'Ações Sociais: Fortalecendo Comunidades, Construindo Legados', 'heading'),
      paragraph(210, 'No Grupo Vulcano, entendemos que a nossa responsabilidade vai muito além dos limites dos nossos parques industriais. Com mais de 50 anos de história, consolidamos a certeza de que a solidez de uma grande empresa se mede pelo impacto positivo que ela gera na vida das pessoas e no desenvolvimento das comunidades que a acolhem.'),
      paragraph(211, 'Através do pilar Social (S) da nossa agenda ESG, atuamos de forma proativa no entorno de nossas unidades em Barra Mansa (RJ). Nosso compromisso é transformar o protagonismo industrial em desenvolvimento humano, apoiando iniciativas que geram autonomia, dignidade e novas oportunidades para as próximas gerações.'),
    ],
  },
};
