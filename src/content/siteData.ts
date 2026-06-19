export const services = [
  {
    slug: 'soldagem',
    title: 'Serviços de Soldagem',
    eyebrow: 'AWS e ASME IX',
    summary:
      'Soldagem especial para conjuntos metálicos, tubulações e estruturas submetidas a requisitos de qualidade, rastreabilidade e inspeção.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=82',
    applications: ['Caldeiraria pesada', 'Tubulações industriais', 'Estruturas metálicas', 'Manutenção de campo'],
    differentials: ['Procedimentos qualificados', 'Equipe técnica especializada', 'Controle documental', 'Inspeção dimensional'],
    standards: ['AWS', 'ASME IX', 'ABS', 'DNV'],
  },
  {
    slug: 'tubulacao',
    title: 'Sistemas de Tubulação',
    eyebrow: 'Spools industriais',
    summary:
      'Fabricação e montagem de spools, linhas metálicas e sistemas especiais para óleo e gás, energia, siderurgia e infraestrutura.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=82',
    applications: ['Spools industriais', 'Linhas de processo', 'Tubulações metálicas', 'Tubulações FRP'],
    differentials: ['Pré-montagem em fábrica', 'Rastreabilidade por lote', 'Soldagem qualificada', 'Planejamento de montagem'],
    standards: ['ASME IX', 'AWS', 'CRC Petrobras', 'NR-34'],
  },
  {
    slug: 'suportes',
    title: 'Suportes para Tubulação',
    eyebrow: 'Fixação e sustentação',
    summary:
      'Suportes, bases e elementos de sustentação projetados para estabilidade, montagem e manutenção segura de sistemas industriais.',
    image:
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=82',
    applications: ['Pipe racks', 'Skids', 'Bases metálicas', 'Suportes especiais'],
    differentials: ['Corte e dobra integrados', 'Controle dimensional', 'Acabamento anticorrosivo', 'Identificação técnica'],
    standards: ['NR-12', 'NR-34', 'ISO 9001:2015'],
  },
  {
    slug: 'tanques-vasos',
    title: 'Tanques e Vasos de Pressão',
    eyebrow: 'Caldeiraria crítica',
    summary:
      'Fabricação de tanques, vasos e componentes cilíndricos com calandragem, soldagem, ensaios e dossiê técnico.',
    image:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=82',
    applications: ['Tanques industriais', 'Vasos de pressão', 'Reservatórios', 'Componentes calandrados'],
    differentials: ['Calandras dedicadas', 'Plano de soldagem', 'Ensaios aplicáveis', 'Dossiê de qualidade'],
    standards: ['ASME IX', 'ISO 9001:2015', 'DNV'],
  },
  {
    slug: 'chumbadores',
    title: 'Chumbadores e Insertos',
    eyebrow: 'Ancoragem industrial',
    summary:
      'Fabricação de chumbadores, insertos e fixadores especiais para estruturas, bases de equipamentos e obras industriais.',
    image:
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1600&q=82',
    applications: ['Bases de máquinas', 'Estruturas metálicas', 'Obras civis industriais', 'Insertos sob desenho'],
    differentials: ['Fabricação sob projeto', 'Lotes rastreáveis', 'Geometrias especiais', 'Tratamento superficial'],
    standards: ['ISO 9001:2015', 'NR-12'],
  },
  {
    slug: 'miscelaneas',
    title: 'Miscelâneas Industriais',
    eyebrow: 'Componentes especiais',
    summary:
      'Peças e subconjuntos metálicos sob demanda para manutenção, expansões, paradas industriais e adequações de planta.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=82',
    applications: ['Escadas e plataformas', 'Guarda-corpos', 'Bases', 'Componentes de reposição'],
    differentials: ['Agilidade fabril', 'Compatibilização em campo', 'Acabamento técnico', 'Controle de prazo'],
    standards: ['NR-12', 'NR-34', 'ISO 9001:2015'],
  },
  {
    slug: 'projetos-sob-medida',
    title: 'Projetos Sob Medida',
    eyebrow: 'Engenharia aplicada',
    summary:
      'Desenvolvimento, fabricação e montagem de soluções metálicas desenhadas para requisitos específicos de processo, obra e campo.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82',
    applications: ['Skids', 'Estruturas especiais', 'Retrofits', 'Adequações industriais'],
    differentials: ['Leitura de projeto', 'Fabricabilidade', 'Interface com engenharia', 'Entrega documentada'],
    standards: ['ISO 9001:2015', 'AWS', 'ASME IX'],
  },
  {
    slug: 'offshore',
    title: 'Serviços Offshore',
    eyebrow: 'Campo e mar',
    summary:
      'Fabricação, montagem e manutenção offshore para linhas metálicas, FRP, CPVC, PEAD, PTFE, revestimentos e montagens mecânicas.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=82',
    applications: ['Plataformas', 'FPSOs', 'Paradas offshore', 'Montagem em campo'],
    differentials: ['Equipe qualificada', 'T-HUET', 'SAVATAGE', 'Rotina de segurança offshore'],
    standards: ['AWS', 'ASME IX', 'OPITO T-HUET', 'SAVATAGE'],
  },
];

export const certifications = {
  seguranca: ['NR-06', 'NR-07', 'NR-10', 'NR-17', 'NR-26', 'NR-33', 'NR-34', 'NR-35', 'NR-37'],
  offshore: ['T-HUET', 'SAVATAGE'],
  soldagem: ['ABS', 'DNV', 'AWS', 'ASME IX'],
  qualidade: ['ISO 9001:2015', 'CRC Petrobras'],
};

export const clients = ['Petrobras', 'MODEC', 'PRIO', 'CSN', 'ArcelorMittal', 'Gerdau', 'Toshiba', 'Toyo', 'Votorantim'];

export const projects = [
  { name: 'COMPERJ', detail: 'Consórcio TUC, Toshiba, QQGI, Qualiman, Actemium, MIP, Milplan e Kerui.' },
  { name: 'RENEST', detail: 'Fabricação, tubulação e apoio à montagem em empreendimento de refino.' },
  { name: 'BRASFELS', detail: 'Componentes industriais e suporte a operações navais e offshore.' },
  { name: 'MODEC', detail: 'Serviços especiais e atendimento de campo para ativos offshore.' },
  { name: 'PRIO', detail: 'Manutenção, adequações e soluções metálicas para óleo e gás.' },
];

export const facilities = [
  { title: 'Unidade Matriz', area: '15.000 m²', items: ['Pontes rolantes', 'Balança rodoviária', 'Laboratório próprio', 'Expedição'] },
  { title: 'Nova Vulcano', area: '12.000 m²', items: ['Área para spools', 'Linhas de montagem', 'Controle dimensional', 'Fluxo logístico'] },
  { title: 'Serviços Especiais', area: '3.000 m²', items: ['Soldagem especial', 'Revestimentos', 'Preparação offshore', 'Ensaios'] },
  { title: 'Unidade Apoio', area: '2.000 m²', items: ['Almoxarifado técnico', 'Empilhadeiras', 'Pré-montagem', 'Apoio a campo'] },
];

export const equipment = [
  ['Corte CNC', 'Precisão para chapas, geometrias complexas e repetibilidade produtiva.'],
  ['Dobradeiras', 'Conformação controlada para suportes, caixas, perfis e componentes estruturais.'],
  ['Guilhotinas', 'Corte linear para chapas e preparação de subconjuntos metálicos.'],
  ['Calandras', 'Conformação cilíndrica para tanques, anéis, vasos e componentes especiais.'],
  ['Cabine de Jato/Pintura', 'Preparação de superfície e aplicação de revestimentos anticorrosivos.'],
  ['Usinagem Pesada', 'Acabamento mecânico para interfaces, bases e componentes de responsabilidade.'],
  ['Frota', 'Movimentação, apoio logístico e expedição de conjuntos fabricados.'],
] as const;
