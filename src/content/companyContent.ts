import { institutionalFacts } from './institutionalContent';

export type EditorialStatus = 'approved' | 'needs-review' | 'asset-pending' | 'link-pending';

export type HistorySlide = {
  id: string;
  marker: string;
  label: string;
  title: string;
  summary: string;
  image: { src: string | null; alt: string; status: EditorialStatus };
  sourceRefs: string[];
};

export type HistoryBlockItem = {
  title: string;
  body?: string;
  items?: string[];
};

export type HistoryBlock = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items?: HistoryBlockItem[];
  presentation: 'prose' | 'list' | 'accordion';
  sourceRefs: string[];
  editorialNotes?: string[];
};

export type CompanyAction = {
  label: string;
  href: string;
  status: EditorialStatus;
};

export type CompanyContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  slides: HistorySlide[];
  blocks: HistoryBlock[];
  actions: CompanyAction[];
};

export const companyContent: CompanyContent = {
  hero: {
    eyebrow: 'Nossa história',
    title: 'Uma trajetória industrial construída em obras de alta responsabilidade.',
    body:
      'Desde 1974, a Metalúrgica Vulcano transforma engenharia pesada em realidade, integrando caldeiraria técnica, insumos siderúrgicos, serviços especializados e infraestrutura para as maiores exigências do país.',
  },

  slides: [
    {
      id: 'slide-1974',
      marker: '1974',
      label: 'Fundação',
      title: 'Meio século de seriedade e técnica',
      summary:
        'Fundada em 1º de julho de 1974, em Barra Mansa (RJ), a Vulcano iniciou sua trajetória focada na confecção de peças fundidas para o mercado nacional, estabelecendo as bases de precisão que guiam o grupo.',
      image: {
        src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=82',
        alt: 'Imagem ilustrativa de operação metalúrgica',
        status: 'needs-review',
      },
      sourceRefs: ['history.foundation'],
    },
    {
      id: 'slide-2012',
      marker: '2012',
      label: 'Especialização',
      title: 'Caldeiraria pesada e serviços técnicos',
      summary:
        'Inauguração da unidade voltada a projetos de alta complexidade técnica: caldeiraria pesada Onshore e Offshore, fabricação de tubulações, suportes industriais, compósitos e serviços industriais especializados.',
      image: {
        src: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=82',
        alt: 'Área de caldeiraria pesada e fabricação de tubulações industriais',
        status: 'needs-review',
      },
      sourceRefs: ['history.portfolio', 'history.expansion'],
    },
    {
      id: 'slide-unidades',
      marker: institutionalFacts.totalArea,
      label: 'Modernização',
      title: 'Três parques industriais integrados',
      summary:
        `Estruturação de ${institutionalFacts.units} unidades fabris vizinhas em Barra Mansa, totalizando ${institutionalFacts.totalArea} de área e ${institutionalFacts.coveredArea} de área coberta atendida por ${institutionalFacts.gantryCranes} pontes rolantes de 5 ton a 16 ton, pintura e tratamento térmico.`,
      image: {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=82',
        alt: 'Imagem ilustrativa de infraestrutura industrial',
        status: 'needs-review',
      },
      sourceRefs: ['structure.units', 'structure.capacity'],
    },
    {
      id: 'slide-2024',
      marker: '2024',
      label: '50 Anos',
      title: 'Marco histórico de solidez nacional',
      summary:
        'Celebração de 50 anos de operações ininterruptas no Brasil, consolidando projetos especiais de engenharia personalizada e atendimento aos setores de energia, óleo e gás, infraestrutura e siderurgia.',
      image: {
        src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=82',
        alt: 'Profissionais de engenharia atuando em fabricações industriais complexas',
        status: 'needs-review',
      },
      sourceRefs: ['history.50years'],
    },
    {
      id: 'slide-2027',
      marker: '2027',
      label: 'Rumo ao Futuro',
      title: 'Agenda ESG e gestão integrada',
      summary:
        'Fase avançada de transição para as certificações ISO 14001 e ISO 45001 com previsão para o primeiro semestre de 2027, somando ecoeficiência, descarbonização e risco zero à excelência da ISO 9001:2015.',
      image: {
        src: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=82',
        alt: 'Instalações industriais com padrões de gestão ambiental e de segurança ocupacional',
        status: 'needs-review',
      },
      sourceRefs: ['quality.iso-14001-45001-transition', 'esg.environmental'],
    },
  ],

  blocks: [
    {
      id: 'segments',
      eyebrow: 'Divisões e frentes',
      title: 'Segmentos de Atuação do Grupo Vulcano',
      paragraphs: [
        'O Grupo Vulcano organiza sua capacidade fabril e de campo em frentes coordenadas, cobrindo da siderurgia à construção civil pesada.',
      ],
      items: [
        {
          title: 'Siderurgia',
          body:
            'Soluções avançadas em produtos para siderurgia: refratários sob encomenda, insumos e equipamentos customizados, projetados para garantir estabilidade operacional e rendimento dos processos industriais.',
        },
        {
          title: 'Caldeiraria',
          body:
            'Caldeiraria de alta tecnologia e soluções integradas de engenharia mecânica avançada, combinando precisão dimensional, soldagem de alta tecnologia e capacidade de execução de ponta a ponta.',
        },
        {
          title: 'Serviços Industriais',
          body:
            'Serviços industriais com qualidade: engenharia de campo, manutenção e soluções turnkey em ambientes desafiadores (Onshore e Offshore), unindo agilidade e segurança contínua.',
        },
        {
          title: 'Projetos e Equipamentos Sob Encomenda',
          body:
            'Engenharia de alta complexidade: equipamentos siderúrgicos e projetos sob encomenda para siderurgia, mineração, infraestrutura e óleo e gás, integrando capacidade fabril à modelagem digital.',
        },
        {
          title: 'Concretos Especiais e Peças Pré-Moldadas — Barra Ligas',
          body:
            'A força da engenharia civil no Grupo Vulcano: usina moderna de concreto em Barra Mansa (RJ), atendendo a projetos comerciais, industriais e de infraestrutura pesada.',
        },
        {
          title: 'Máquinas para Construção — Vulcano Constructions',
          body:
            'Engenharia de peso: componentes estruturais, subconjuntos de chassis, linha amarela, implementos agrícolas, implementos rodoviários e serviços de retrofit.',
        },
      ],
      presentation: 'list',
      sourceRefs: [
        'segments.siderurgia',
        'segments.caldeiraria',
        'segments.servicos',
        'segments.projetos',
        'segments.barraligas',
        'segments.constructions',
      ],
      editorialNotes: ['Baseado nos parágrafos 87 a 112 do documento-mestre do cliente.'],
    },
    {
      id: 'catalog',
      eyebrow: 'Portfólio técnico',
      title: 'Produtos, Equipamentos e Catálogo Técnico',
      paragraphs: [
        'Catálogo técnico abrangente com os suprimentos, peças fabricadas, conjuntos e serviços fornecidos pelas divisões da Metalúrgica Vulcano.',
      ],
      items: [
        {
          title: 'Insumos Siderúrgicos e Dispositivos de Fluxo',
          body:
            'Areias de cromita e areias de vedação para forno elétrico e válvulas gaveta de panelas de aço líquido; granulados para isolamento térmico (AM 30); condicionadores de escória para controle de pH; granulados de escória sintética pré-fundida; pás de skimmer de alta resistência térmica para desnatamento; Slagball (esferas retentoras); dardo refratário (Slag Dart); retentores de escória em carro torpedo (RCT); retentor de primeira escória Vulcanstop; barreiras refratárias de contenção de aço e escória líquida; tampas para isolamento térmico de panelas e distribuidores; tampas superleves para aquecedores; peças refratárias particulares com modelagem 3D e simulação de choque térmico; redutores de splash em aço estrutural; ferramentas operacionais e raspadores especiais para aciaria.',
        },
        {
          title: 'Equipamentos Siderúrgicos Especializados',
          body:
            'Sistemas RCL de raspagem contínua de cascão de lança de oxigênio em convertedores; sistemas automatizados de aplicação e injeção à distância de areias refratárias com controle via PLC; aquecedores e sistemas de secagem para refratários de panelas e distribuidores com curvas controladas de aquecimento.',
        },
        {
          title: 'Caldeiraria Pesada, Tubulações e Estruturas Metálicas',
          body:
            'Estruturas metálicas e galpões industriais; escadas, passarelas, plataformas de acesso e grades de piso; guarda-corpos e gradis adequados à NR12; formas para pré-moldados; tubulações e spools em aço carbono (API 5L, ASTM A106, A105), aços inoxidáveis (304, 316, 310), aços liga, fibra de vidro (FRP/PRFV) e CPVC; tanques de armazenamento conforme norma API 650; vasos de pressão sob código ASME e NR13; sistemas completos de suportação industrial (abraçadeiras forjadas, rigid struts, berços, pipe racks, suportes elétricos e de instrumentação); insertos galvanizados e grapados para concretagem; chumbadores padrão Petrobras PB N134 e ASTM F1554 (graus 36, 55 e 105); equipamentos de transporte e logística (skids estruturais, containers sob encomenda, gaiolas, ganchos tipo C, vigas de içamento, monotrilhos e caçambas roll-on/roll-off).',
        },
        {
          title: 'Serviços Industriais Especializados e Soluções Turnkey',
          body:
            'Soldagem qualificada multidisciplinar (MIG/MAG, TIG e Arco Submerso) para aços carbono, aços liga, inoxidáveis, duplex, superduplex, Inconel e alumínio; montagem de tubulações em compósitos e fibra de vidro; tratamento térmico pós-solda (TTPS) para alívio de tensões; preparação superficial com jateamento abrasivo e hidrojateamento de ultra-alta pressão; pintura industrial líquida e a pó (epóxi e poliuretano); revestimentos em glass flake, PTFE (Teflon), cerâmica antiabrasiva e metalização por aspersão térmica (zinco, alumínio e inox); refratamento de fornos e tanques; isolamento térmico e acústico; corte plasma CNC e calandragem pesada; prensagem e estampagem; montagem e rigging turnkey em paradas de aciaria e manutenção offshore; delineamento de campo e engenharia as-built.',
        },
        {
          title: 'Projetos de Engenharia Consultiva e Diferenciais Tecnológicos',
          body:
            'Engenharia baseada em gêmeos digitais (BIM); escaneamento a laser tridimensional (Laser Scanning); delineamento as-built para plantas existentes; tropicalização e engenharia reversa de equipamentos importados; projetos completos de adequação estrutural à norma NR12; automação com foco em risco operacional zero para operadores em áreas de alta temperatura.',
        },
        {
          title: 'Concretos Especiais e Pré-Moldados — Barra Ligas',
          body:
            'Concretos usinados para projetos industriais e comerciais pesados; artefatos e peças pré-moldadas de concreto armado; concretos refratários de baixa alumina; contrapesos para maquinário e estruturas civis de grande porte.',
        },
        {
          title: 'Linha Amarela, Implementos e Retrofit — Vulcano Constructions',
          body:
            'Componentes estruturais robotizados e contrapesos para escavadeiras e carregadeiras de montadoras OEM; implementos rodoviários (caçambas basculantes e roll-on, semirreboques prancha carrega-tudo, carrocerias metálicas para carga seca, linhas de vida para frotas e protetores laterais homologados); implementos agrícolas (enxadas rotativas, facas para roçadeiras, chassis para microsemeadoras e hastes sulcadoras); engenharia de retrofit e reforma estrutural de caçambas e caminhões betoneira (troca de assoalho em chapas de alta resistência, alinhamento de vigas de chassi, revisão hidráulica, substituição de espirais de mistura e revestimento de balão).',
        },
      ],
      presentation: 'accordion',
      sourceRefs: [
        'catalog.siderurgia',
        'catalog.equipamentos',
        'catalog.caldeiraria',
        'catalog.servicos',
        'catalog.diferenciais',
        'catalog.barraligas',
        'catalog.constructions',
      ],
      editorialNotes: [
        'Documento-mestre original continha instruções de links internos que foram normalizadas em grupos técnicos do catálogo.',
      ],
    },
    {
      id: 'contact',
      eyebrow: 'Canais de comunicação',
      title: 'Contato: Fale com o Grupo Vulcano',
      paragraphs: [
        'Escolha a área desejada abaixo para direcionar sua mensagem diretamente à nossa equipe técnica e especializada. Garantimos agilidade, sigilo e transparência no seu atendimento.',
      ],
      items: [
        {
          title: 'Vendas e Soluções Comerciais',
          body:
            'Precisa de um orçamento ou quer fechar uma parceria? Fale com a nossa equipe de engenharia comercial para projetos sob encomenda, caldeiraria pesada, produtos siderúrgicos, linha amarela ou concreto usinado.',
        },
        {
          title: 'Compras (Seja um Fornecedor)',
          body:
            'Sua empresa quer fornecer materiais ou insumos para o Grupo Vulcano? Mantemos um processo rígido e transparente de homologação, alinhado aos critérios de integridade e conformidade de mercado.',
        },
        {
          title: 'Ouvidoria e Canal de Denúncias',
          body:
            'Espaço seguro para relatos de conduta, ética ou segurança operacional. Canal exclusivo, confidencial e independente para relatar desvios de conduta, violações ao código de ética ou situações de risco operacional, com identidade preservada.',
        },
      ],
      presentation: 'list',
      sourceRefs: ['contact.sales', 'contact.purchasing', 'contact.compliance'],
      editorialNotes: [
        'Telefones temporários com dígitos não preenchidos foram omitidos da publicação por política de qualidade.',
        'Canal de denúncias independente aguarda URL do sistema de governança contratado.',
      ],
    },
    {
      id: 'careers',
      eyebrow: 'Oportunidades',
      title: 'Trabalhe Conosco: Construa o Futuro da Engenharia Conosco',
      paragraphs: [
        'Na Metalúrgica Vulcano e em todas as divisões do nosso grupo (Barra Ligas e Vulcano Constructions), acreditamos que a força da nossa engenharia pesada não vem apenas das máquinas ou do aço, mas sim da energia, do intelecto e da dedicação das nossas pessoas.',
        'Com mais de 50 anos de história, construímos um ambiente de trabalho que valoriza o conhecimento técnico, estimula o protagonismo e desafia nossos profissionais a transformarem grandes projetos industriais em realidade. Se você busca uma carreira sólida, pautada pela inovação contínua, excelência operacional e desenvolvimento humano, o seu lugar é aqui.',
        'Para nós, o crescimento profissional só faz sentido se caminhar de mãos dadas com a sustentabilidade e a valorização da vida. O pilar Social (S) e de Governança (G) da nossa estratégia corporativa reflete-se diretamente no dia a dia das nossas equipes fabris e de campo.',
      ],
      items: [
        {
          title: 'Por que fazer parte do nosso time?',
          items: [
            'Cultura de Aprendizado e Inovação: Atuamos na vanguarda tecnológica da indústria, utilizando processos avançados de modelagem digital e automação.',
            'Desafios Reais de Grande Porte: Nossas equipes desenvolvem soluções complexas sob encomenda para os setores mais vitais da economia, como siderurgia, mineração e infraestrutura.',
            'Ambiente Técnico Altamente Qualificado: Oportunidade de trocar experiências diárias com engenheiros e especialistas formados nos principais centros do país.',
          ],
        },
        {
          title: 'Nosso Compromisso Humano: O Vínculo com a Nossa Agenda ESG',
          items: [
            'Risco Zero e Segurança Absoluta: O respeito à integridade física de cada colaborador é o nosso valor inegociável. Trabalhamos sob os rígidos critérios das práticas internacionais de saúde e segurança ocupacional.',
            'Diversidade, Inclusão e Oportunidades Iguais: Promovemos um ambiente plural, transparente e ético, livre de qualquer tipo de discriminação, onde o mérito e o talento são os únicos combustíveis para a evolução.',
            'Desenvolvimento de Mão de Obra Local: Orgulho em capacitar e desenvolver as comunidades onde operamos, gerando emprego de qualidade e fortalecendo o ecossistema industrial da nossa região.',
          ],
        },
      ],
      presentation: 'list',
      sourceRefs: ['careers.culture', 'careers.growth', 'careers.esg-commitment'],
      editorialNotes: [
        'Área de envio de currículo e vagas ativas aguardando integração com sistema de recrutamento.',
      ],
    },
  ],

  actions: [
    {
      label: 'Fale com a nossa equipe',
      href: '/contato',
      status: 'approved',
    },
    {
      label: 'Conheça nossa galeria de obras',
      href: '/obras-clientes',
      status: 'approved',
    },
    {
      label: 'Conheça nossas instalações',
      href: '/instalacoes',
      status: 'approved',
    },
    {
      label: 'Ouvidoria e Canal de Denúncias',
      href: '/contato',
      status: 'link-pending',
    },
    {
      label: 'Trabalhe Conosco',
      href: '/contato',
      status: 'approved',
    },
  ],
};
