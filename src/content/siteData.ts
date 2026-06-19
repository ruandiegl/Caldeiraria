export const services = [
  {
    slug: 'soldagem',
    title: 'Servicos de Soldagem',
    eyebrow: 'AWS e ASME IX',
    summary:
      'Soldagem especial para conjuntos metalicos, tubulacoes e estruturas submetidas a requisitos de qualidade, rastreabilidade e inspecao.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=82',
    applications: ['Caldeiraria pesada', 'Tubulacoes industriais', 'Estruturas metalicas', 'Manutencao de campo'],
    differentials: ['Procedimentos qualificados', 'Equipe tecnica especializada', 'Controle documental', 'Inspecao dimensional'],
    standards: ['AWS', 'ASME IX', 'ABS', 'DNV'],
  },
  {
    slug: 'tubulacao',
    title: 'Sistemas de Tubulacao',
    eyebrow: 'Spools industriais',
    summary:
      'Fabricacao e montagem de spools, linhas metalicas e sistemas especiais para oleo e gas, energia, siderurgia e infraestrutura.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=82',
    applications: ['Spools industriais', 'Linhas de processo', 'Tubulacoes metalicas', 'Tubulacoes FRP'],
    differentials: ['Pre-montagem em fabrica', 'Rastreabilidade por lote', 'Soldagem qualificada', 'Planejamento de montagem'],
    standards: ['ASME IX', 'AWS', 'CRC Petrobras', 'NR-34'],
  },
  {
    slug: 'suportes',
    title: 'Suportes para Tubulacao',
    eyebrow: 'Fixacao e sustentacao',
    summary:
      'Suportes, bases e elementos de sustentacao projetados para estabilidade, montagem e manutencao segura de sistemas industriais.',
    image:
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=82',
    applications: ['Pipe racks', 'Skids', 'Bases metalicas', 'Suportes especiais'],
    differentials: ['Corte e dobra integrados', 'Controle dimensional', 'Acabamento anticorrosivo', 'Identificacao tecnica'],
    standards: ['NR-12', 'NR-34', 'ISO 9001:2015'],
  },
  {
    slug: 'tanques-vasos',
    title: 'Tanques e Vasos de Pressao',
    eyebrow: 'Caldeiraria critica',
    summary:
      'Fabricacao de tanques, vasos e componentes cilindricos com calandragem, soldagem, ensaios e dossie tecnico.',
    image:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=82',
    applications: ['Tanques industriais', 'Vasos de pressao', 'Reservatorios', 'Componentes calandrados'],
    differentials: ['Calandras dedicadas', 'Plano de soldagem', 'Ensaios aplicaveis', 'Dossie de qualidade'],
    standards: ['ASME IX', 'ISO 9001:2015', 'DNV'],
  },
  {
    slug: 'chumbadores',
    title: 'Chumbadores e Insertos',
    eyebrow: 'Ancoragem industrial',
    summary:
      'Fabricacao de chumbadores, insertos e fixadores especiais para estruturas, bases de equipamentos e obras industriais.',
    image:
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1600&q=82',
    applications: ['Bases de maquinas', 'Estruturas metalicas', 'Obras civis industriais', 'Insertos sob desenho'],
    differentials: ['Fabricacao sob projeto', 'Lotes rastreaveis', 'Geometrias especiais', 'Tratamento superficial'],
    standards: ['ISO 9001:2015', 'NR-12'],
  },
  {
    slug: 'miscelaneas',
    title: 'Miscelaneas Industriais',
    eyebrow: 'Componentes especiais',
    summary:
      'Pecas e subconjuntos metalicos sob demanda para manutencao, expansoes, paradas industriais e adequacoes de planta.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=82',
    applications: ['Escadas e plataformas', 'Guarda-corpos', 'Bases', 'Componentes de reposicao'],
    differentials: ['Agilidade fabril', 'Compatibilizacao em campo', 'Acabamento tecnico', 'Controle de prazo'],
    standards: ['NR-12', 'NR-34', 'ISO 9001:2015'],
  },
  {
    slug: 'projetos-sob-medida',
    title: 'Projetos Sob Medida',
    eyebrow: 'Engenharia aplicada',
    summary:
      'Desenvolvimento, fabricacao e montagem de solucoes metalicas desenhadas para requisitos especificos de processo, obra e campo.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82',
    applications: ['Skids', 'Estruturas especiais', 'Retrofits', 'Adequacoes industriais'],
    differentials: ['Leitura de projeto', 'Fabricabilidade', 'Interface com engenharia', 'Entrega documentada'],
    standards: ['ISO 9001:2015', 'AWS', 'ASME IX'],
  },
  {
    slug: 'offshore',
    title: 'Offshore Services',
    eyebrow: 'Campo e mar',
    summary:
      'Fabricacao, montagem e manutencao offshore para linhas metalicas, FRP, CPVC, PEAD, PTFE, revestimentos e montagens mecanicas.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=82',
    applications: ['Plataformas', 'FPSOs', 'Paradas offshore', 'Montagem em campo'],
    differentials: ['Equipe qualificada', 'T-HUET', 'SAVATAGE', 'Rotina de seguranca offshore'],
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
  { name: 'COMPERJ', detail: 'Consorcio TUC, Toshiba, QQGI, Qualiman, Actemium, MIP, Milplan e Kerui.' },
  { name: 'RENEST', detail: 'Fabricacao, tubulacao e apoio a montagem em empreendimento de refino.' },
  { name: 'BRASFELS', detail: 'Componentes industriais e suporte a operacoes navais e offshore.' },
  { name: 'MODEC', detail: 'Servicos especiais e atendimento de campo para ativos offshore.' },
  { name: 'PRIO', detail: 'Manutencao, adequacoes e solucoes metalicas para oleo e gas.' },
];

export const facilities = [
  { title: 'Unidade Matriz', area: '15.000m2', items: ['Pontes rolantes', 'Balanca rodoviaria', 'Laboratorio proprio', 'Expedicao'] },
  { title: 'Nova Vulcano', area: '12.000m2', items: ['Area para spools', 'Linhas de montagem', 'Controle dimensional', 'Fluxo logistico'] },
  { title: 'Servicos Especiais', area: '3.000m2', items: ['Soldagem especial', 'Revestimentos', 'Preparacao offshore', 'Ensaios'] },
  { title: 'Unidade Apoio', area: '2.000m2', items: ['Almoxarifado tecnico', 'Empilhadeiras', 'Pre-montagem', 'Apoio a campo'] },
];

export const equipment = [
  ['Corte CNC', 'Precisao para chapas, geometrias complexas e repetibilidade produtiva.'],
  ['Dobradeiras', 'Conformacao controlada para suportes, caixas, perfis e componentes estruturais.'],
  ['Guilhotinas', 'Corte linear para chapas e preparacao de subconjuntos metalicos.'],
  ['Calandras', 'Conformacao cilindrica para tanques, aneis, vasos e componentes especiais.'],
  ['Cabine de Jato/Pintura', 'Preparacao de superficie e aplicacao de revestimentos anticorrosivos.'],
  ['Usinagem Pesada', 'Acabamento mecanico para interfaces, bases e componentes de responsabilidade.'],
  ['Frota', 'Movimentacao, apoio logistico e expedicao de conjuntos fabricados.'],
] as const;
