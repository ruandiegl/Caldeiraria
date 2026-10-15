export type InstitutionalId = 'history' | 'identity' | 'structure' | 'quality' | 'esg' | 'social-actions';
export type EditorialStatus = 'approved' | 'needs-review' | 'asset-pending' | 'link-pending';
export type EditorialParagraph = {
  id: string;
  text: string;
  sourceParagraphs: number[];
  kind?: 'eyebrow' | 'heading' | 'body' | 'item';
};
export type InstitutionalSection = {
  id: InstitutionalId;
  title: string;
  paragraphs: EditorialParagraph[];
  detailParagraphs?: EditorialParagraph[];
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
): EditorialParagraph => ({
  id: `word-${Array.isArray(source) ? source.join('-') : source}`,
  text,
  sourceParagraphs: Array.isArray(source) ? source : [source],
  kind,
});

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

export const institutionalContent: Record<InstitutionalId, InstitutionalSection> = {
  history: {
    id: 'history',
    title: 'Nossa História',
    status: 'approved',
    paragraphs: [
      paragraph(2, 'Nossa História', 'eyebrow'),
      paragraph(4, 'Nossa História: Meio Século de Seriedade, Técnica e Inovação', 'heading'),
      paragraph(6, 'Fundada em 1º de julho de 1974 na cidade de Barra Mansa, Rio de Janeiro, a Metalúrgica Vulcano Ltda. iniciou sua trajetória focada na confecção de peças fundidas para o mercado nacional. Movida pela determinação de entregar máxima eficiência tecnológica, a empresa rapidamente expandiu suas capacidades, consolidando-se como uma parceira estratégica para as maiores e mais exigentes indústrias do país.'),
      paragraph(7, 'Ao longo das décadas, a Vulcano diversificou seu portfólio de soluções. De líder em fornecimento de insumos siderúrgicos, essenciais para a cadeia da siderurgia e metalurgia nacional, especializou-se também em setores de alta complexidade técnica, como caldeiraria pesada (Onshore e Offshore), fabricação de tubulações, suportes industriais, compósitos e prestação de serviços industriais especializados, com a inauguração em 2012 de sua unidade voltada para estes projetos.'),
      paragraph(9, 'A Expansão e Modernização', 'heading'),
      paragraph(10, 'Para acompanhar o ritmo de crescimento do mercado de energia, infraestrutura e mineração, a empresa expandiu sua presença física. Com unidades fabris modernas localizadas estrategicamente em Barra Mansa, num total de 34.500 m², a empresa estruturou parques industriais equipados com tecnologia de ponta e processos rigorosos de controle de qualidade e segurança.'),
      paragraph(12, 'Dividida em três unidades independentes, vizinhas uma das outras, a Metalúrgica Vulcano Ltda. apresenta uma unidade de 16.000 m², voltada para produtos refratários, insumos siderúrgicos e pré-moldados de concreto; outra de 15.000 m² para caldeiraria pesada e peças para o setor de máquinas, com infraestrutura de pintura e tratamento térmico; e uma terceira unidade, para caldeiraria leve, com 3.500 m². Todas as três unidades são atendidas por pontes rolantes de 5 a 16 toneladas, com disponibilidade de estocagem em pátios cercados e calçados.'),
      paragraph(14, 'Os Últimos Anos: Rumo ao Futuro', 'heading'),
      paragraph(15, 'Em 2024, a Metalúrgica Vulcano celebrou um marco histórico: 50 anos de operações ininterruptas no Brasil. Nos últimos anos, consolidamos nossa atuação no desenvolvimento de projetos especiais de engenharia, personalizados, e na ampliação do atendimento aos setores de óleo e gás, transição energética e siderurgia de larga escala.'),
      paragraph(17, 'Hoje, contando com uma equipe técnica altamente qualificada de engenheiros e especialistas formados nos principais centros do país, a empresa segue firme em sua missão: moldar o futuro da indústria com solidez, sustentabilidade, segurança e precisão.'),
    ],
  },
  identity: {
    id: 'identity',
    title: 'Missão, Visão e Valores',
    status: 'approved',
    paragraphs: [
      paragraph(19, 'Missão: Prover soluções de engenharia, caldeiraria e insumos siderúrgicos com excelência técnica, segurança e precisão, impulsionando o desenvolvimento da infraestrutura e da indústria nacional com responsabilidade e inovação.'),
      paragraph(21, 'Visão: Ser reconhecida como a parceira estratégica mais confiável do mercado metalmecânico nacional em projetos de alta complexidade, consolidando nossa expansão com base em inovação tecnológica e sustentabilidade.'),
      paragraph(23, 'Valores:', 'heading'),
      paragraph(24, 'Segurança e Respeito à Vida: Nossa prioridade absoluta em cada processo fabril e de montagem.', 'item'),
      paragraph(25, 'Excelência Técnica: Rigor e precisão em técnica que superam as expectativas do mercado.', 'item'),
      paragraph(26, 'Parceria de Longo Prazo: Relações transparentes e sólidas com clientes, colaboradores e fornecedores.', 'item'),
      paragraph(27, 'Sustentabilidade e Futuro: Compromisso contínuo com o desenvolvimento socioambiental e a governança.', 'item'),
    ],
  },
  structure: {
    id: 'structure',
    title: 'Estrutura industrial',
    status: 'approved',
    paragraphs: [
      paragraph(29, 'Descrição do Grupo (estrutura)', 'heading'),
      paragraph(31, 'Área total de 34.500 m², dividida em 3 unidades vizinhas.', 'item'),
      paragraph(32, 'Área coberta total de 17.000 m², atendida por 11 pontes rolantes de 5 a 16 toneladas.', 'item'),
      paragraph(33, 'Empilhadeiras de 2,5 a 4 toneladas, sendo 5 unidades.', 'item'),
      paragraph(34, 'Guindastes hidráulicos tipo Munck de 20 toneladas, 2 unidades.', 'item'),
      paragraph(35, 'Mesas de corte a plasma até 2 polegadas de espessura, 2 unidades.', 'item'),
      paragraph(36, 'Mesa de oxicorte até 250 mm de espessura, 1 unidade.', 'item'),
      paragraph(37, 'Calandras para até 25 mm de espessura, 2 unidades.', 'item'),
      paragraph(38, 'Dobradeiras para até 12 mm de espessura, 2 unidades.', 'item'),
      paragraph(39, 'Guilhotinas para até 12 mm de espessura, 2 unidades.', 'item'),
      paragraph(40, 'Mandrilhadoras CN de médio porte, 2 unidades.', 'item'),
      paragraph(41, 'Furadeiras radiais de grande porte, 2 unidades.', 'item'),
      paragraph(42, 'Prensas de 400, 100 e 50 toneladas, 4 unidades.', 'item'),
      paragraph(43, 'Máquinas de soldagem próprias, 35 unidades.', 'item'),
      paragraph(44, 'Fornos de tratamento térmico de grande porte, 2 unidades.', 'item'),
      paragraph(45, 'Cabine de jato abrasivo de grande porte.', 'item'),
      paragraph(46, 'Cabines de pintura de grande porte, 3 unidades.', 'item'),
      paragraph(47, 'Hidrojato abrasivo de alta pressão.', 'item'),
      paragraph(48, 'Mixers de materiais de concreto e refratário, 3 unidades.', 'item'),
      paragraph(49, 'Caminhões betoneira, 4 unidades.', 'item'),
      paragraph(50, 'Bomba de concreto de 2000 psi.', 'item'),
      paragraph(51, 'Misturadores de grande porte, 3 unidades.', 'item'),
    ],
  },
  quality: {
    id: 'quality',
    title: 'Qualidade, Segurança e Sustentabilidade',
    status: 'approved',
    certifications: institutionalFacts.certifications,
    editorialNotes: [
      'Parágrafo 54 pede link para a aba de qualidade; usar a rota real.',
      'Parágrafo 181 pede o certificado ISO 9001; arquivo oficial ainda não informado.',
      'O Word cita Barra Mansa e Itaboraí no parágrafo 60; validar a localização de Itaboraí antes da publicação final.',
    ],
    paragraphs: [
      paragraph(53, 'Qualidade: Compromisso com a Excelência: Qualidade, Segurança e Sustentabilidade', 'heading'),
      paragraph(56, 'Na Metalúrgica Vulcano Ltda., a busca pela perfeição técnica caminha lado a lado com a responsabilidade operacional. Como reflexo do nosso rigoroso padrão de governança e produção, celebramos a renovação da nossa certificação ISO 9001:2015, um selo que chancela a eficiência, a melhoria contínua e a qualidade internacional de todo o nosso Sistema de Gestão da Qualidade.'),
      paragraph(58, 'Olhando para o futuro e reafirmando nosso compromisso com a agenda ESG (Ambiental, Social e Governança), anunciamos que a empresa está em fase avançada de transição para as certificações ISO 14001 (Sistema de Gestão Ambiental) e ISO 45001 (Sistema de Gestão de Saúde e Segurança Ocupacional). Ambas com previsão para o primeiro semestre de 2027.'),
      paragraph(60, 'Mais do que a busca pelos selos de qualidade, a Metalúrgica Vulcano Ltda. já adota integralmente em suas rotinas fabris as práticas e exigências requeridas por ambas as normas. O cuidado com a preservação ambiental, a ecoeficiência em nossas unidades de Barra Mansa e Itaboraí e a garantia de um ambiente de trabalho com risco zero para os nossos colaboradores já fazem parte do nosso DNA diário.'),
      paragraph(61, 'Com a consolidação desses sistemas de gestão, a Metalúrgica Vulcano reafirma sua posição como uma parceira estratégica de alta confiabilidade para os mercados mais exigentes do país, unindo a força da engenharia pesada a um futuro mais seguro e sustentável.'),
    ],
    detailParagraphs: [
      paragraph(174, 'Qualidade', 'eyebrow'),
      paragraph(176, 'Compromisso com a Excelência: Qualidade, Segurança e Sustentabilidade na Vulcano', 'heading'),
      paragraph(177, 'Na Metalúrgica Vulcano Ltda., a busca pela perfeição técnica caminha lado a lado com a responsabilidade operacional. Como reflexo do nosso rigoroso padrão de governança e produção, celebramos a renovação da nossa certificação ISO 9001:2015, um selo que chancela a eficiência, a melhoria contínua e a qualidade internacional de todo o nosso Sistema de Gestão da Qualidade.'),
      paragraph(178, 'Olhando para o futuro e reafirmando nosso compromisso com a agenda ESG (Ambiental, Social e Governança), anunciamos que a empresa está em fase avançada de transição para as certificações ISO 14001 (Sistema de Gestão Ambiental) e ISO 45001 (Sistema de Gestão de Saúde e Segurança Ocupacional). Ambas com previsão para o primeiro semestre de 2027.'),
      paragraph(179, 'Mais do que a busca pelos selos formais, a Vulcano já adota integralmente em suas rotinas fabris as práticas e exigências requeridas por ambas as normas. O cuidado com a preservação ambiental, a ecoeficiência em nossas unidades de Barra Mansa e Itaboraí e a garantia de um ambiente de trabalho com risco zero para os nossos colaboradores já fazem parte do nosso DNA diário.'),
      paragraph(180, 'Com a consolidação desses sistemas de gestão, a Metalúrgica Vulcano reafirma sua posição como uma parceira estratégica de alta confiabilidade para os mercados mais exigentes do país, unindo a força da engenharia pesada a um futuro mais seguro e sustentável.'),
    ],
  },
  esg: {
    id: 'esg',
    title: 'ESG e sustentabilidade',
    status: 'link-pending',
    editorialNotes: [
      'Parágrafo 64 pede link para aba ESG; usar a rota real.',
      'Parágrafos 205 e 206 pedem canal de denúncia e imagem do Código de Conduta; aguardam URL e arquivo oficiais.',
    ],
    paragraphs: [
      paragraph(63, 'ESG Sustentabilidade em Ação: A Jornada ESG da Metalúrgica Vulcano', 'heading'),
      paragraph(66, 'Na Metalúrgica Vulcano Ltda., entendemos que o futuro exige responsabilidade ambiental, compromisso social e governança corporativa impecável. Em consonância com as melhores práticas globais e os rigorosos critérios estabelecidos no mercado, consolidamos a implantação da nossa Agenda ESG.'),
      paragraph(68, 'Nossa atuação desdobra-se em três pilares fundamentais de impacto:'),
      paragraph(69, '1. Ambiental (E): Ecoeficiência e Descarbonização', 'heading'),
      paragraph(70, 'Inspirados nas metas setoriais de redução da pegada de carbono e transição energética justa, a empresa direciona seus esforços para a mitigação do impacto ambiental nas suas unidades:'),
      paragraph(72, 'Gestão de Emissões e Energia: Monitoramento dos escopos de emissão com foco na eficiência energética de nossos processos industriais.', 'item'),
      paragraph(73, 'Preservação e Ecoeficiência: Práticas rigorosas de destinação e reciclagem de resíduos industriais, além de otimização do uso de recursos hídricos na produção.', 'item'),
      paragraph(75, '2. Social (S): Segurança, Saúde e Direitos Humanos', 'heading'),
      paragraph(76, 'Cuidar das pessoas e garantir operações seguras é a base da nossa produtividade diária. Nossas práticas refletem os itens sociais mais críticos da cadeia de fornecedores:'),
      paragraph(77, 'Risco Zero e Saúde Ocupacional: Manutenção de um ambiente de trabalho seguro e saudável, estruturado sob as exigências de conformidade técnica e proteção integral ao trabalhador.', 'item'),
      paragraph(78, 'Direitos Humanos e Desenvolvimento: Compromisso com o trabalho digno, diversidade, inclusão e capacitação contínua da nossa mão de obra técnica local.', 'item'),
      paragraph(80, '3. Governança (G): Integridade, Ética e Compliance', 'heading'),
      paragraph(81, 'A confiabilidade do Grupo Vulcano é chancelada por uma estrutura transparente e em total conformidade com a legislação. Nossas políticas estão desenhadas para atender plenamente a critérios avançados de auditoria corporativa:'),
      paragraph(82, 'Grau de Risco de Integridade (GRI): Nossos processos internos de governança são desenhados sob as diretrizes do Guia de Conduta Ética para Fornecedores da Petrobras, garantindo os mais altos padrões de conformidade no combate à corrupção, transparência em licitações e avaliação de riscos em subfornecedores (Due Diligence de Integridade).', 'item'),
      paragraph(84, 'Ética nos Negócios: Canais de denúncia ativos, políticas anticorrupção estruturadas e transparência em toda a cadeia de suprimentos.', 'item'),
      paragraph(85, 'Ao unir engenharia de alta complexidade com os critérios ESG mais rigorosos do país, a Metalúrgica Vulcano Ltda. reforça sua posição como a parceira ideal para os desafios do amanhã.'),
    ],
    detailParagraphs: [
      paragraph(183, 'ESG', 'eyebrow'),
      paragraph(185, 'Nossa atuação desdobra-se em três pilares fundamentais de impacto:'),
      paragraph(186, '1. Ambiental (E): Ecoeficiência e Descarbonização', 'heading'),
      paragraph(187, 'Inspirados nas metas setoriais de redução da pegada de carbono e transição energética justa, a empresa direciona seus esforços para a mitigação do impacto ambiental nas suas unidades:'),
      paragraph(189, 'Gestão de Emissões e Energia: Monitoramento dos escopos de emissão com foco na eficiência energética de nossos processos industriais.', 'item'),
      paragraph(190, 'Preservação e Ecoeficiência: Práticas rigorosas de destinação e reciclagem de resíduos industriais, além de otimização do uso de recursos hídricos na produção.', 'item'),
      paragraph(192, '2. Social (S): Segurança, Saúde e Direitos Humanos', 'heading'),
      paragraph(193, 'Cuidar das pessoas e garantir operações seguras é a base da nossa produtividade diária. Nossas práticas refletem os itens sociais mais críticos da cadeia de fornecedores:'),
      paragraph(194, 'Risco Zero e Saúde Ocupacional: Manutenção de um ambiente de trabalho seguro e saudável, estruturado sob as exigências de conformidade técnica e proteção integral ao trabalhador.', 'item'),
      paragraph(195, 'Direitos Humanos e Desenvolvimento: Compromisso com o trabalho digno, diversidade, inclusão e capacitação contínua da nossa mão de obra técnica local.', 'item'),
      paragraph(197, '3. Governança (G): Integridade, Ética e Compliance', 'heading'),
      paragraph(198, 'A confiabilidade do Grupo Vulcano é chancelada por uma estrutura transparente e em total conformidade com a legislação. Nossas políticas estão desenhadas para atender plenamente a critérios avançados de auditoria corporativa:'),
      paragraph(199, 'Grau de Risco de Integridade (GRI): Nossos processos internos de governança são desenhados sob as diretrizes do Guia de Conduta Ética para Fornecedores da Petrobras, garantindo os mais altos padrões de conformidade no combate à corrupção, transparência em licitações e avaliação de riscos em subfornecedores (Due Diligence de Integridade).', 'item'),
      paragraph(201, 'Ética nos Negócios: Canais de denúncia ativos, políticas anticorrupção estruturadas e transparência em toda a cadeia de suprimentos.', 'item'),
      paragraph([202, 204], 'Ao unir engenharia de alta complexidade com os critérios ESG mais rigorosos do país, a Metalúrgica Vulcano reforça sua posição como a parceira ideal para os desafios do amanhã.'),
    ],
  },
  'social-actions': {
    id: 'social-actions',
    title: 'Ações Sociais',
    status: 'asset-pending',
    editorialNotes: ['Parágrafo 213 solicita fotos e sites de instituições parceiras; aguardam aprovação do cliente.'],
    paragraphs: [
      paragraph(208, 'Ações Sociais', 'eyebrow'),
      paragraph(209, 'Ações Sociais: Fortalecendo Comunidades, Construindo Legados', 'heading'),
      paragraph(210, 'No Grupo Vulcano, entendemos que a nossa responsabilidade vai muito além dos limites dos nossos parques industriais. Com mais de 50 anos de história, consolidamos a certeza de que a solidez de uma grande empresa se mede pelo impacto positivo que ela gera na vida das pessoas e no desenvolvimento das comunidades que a acolhem.'),
      paragraph(211, 'Através do pilar Social (S) da nossa agenda ESG, atuamos de forma proativa no entorno de nossas unidades em Barra Mansa (RJ). Nosso compromisso é transformar o protagonismo industrial em desenvolvimento humano, apoiando iniciativas que geram autonomia, dignidade e novas oportunidades para as próximas gerações.'),
    ],
  },
};
