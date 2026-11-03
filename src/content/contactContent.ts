import type { SourceRef } from './sourceDocuments';

export type ContactDepartment = {
  id: 'sales' | 'purchasing';
  title: string;
  description: string;
  question?: string;
  email: string;
  phone: string | null;
  originRefs: readonly SourceRef[];
};

export const contactContent = {
  eyebrow: 'Contato',
  eyebrowOriginRefs: [{ documentId: 'word-18-10', paragraph: 204 }],
  title: 'Fale com o Grupo Vulcano',
  titleOriginRefs: [{ documentId: 'word-18-10', paragraph: 206 }],
  introduction: 'Escolha a área desejada para direcionar sua mensagem à equipe técnica responsável. O Grupo Vulcano destaca agilidade, sigilo e transparência no atendimento.',
  introductionOriginRefs: [{ documentId: 'word-18-10', paragraph: 207 }],
  departments: [
    {
      id: 'sales',
      title: 'Vendas e soluções comerciais',
      question: 'Precisa de um orçamento ou quer fechar uma parceria?',
      description: 'Fale com a equipe de engenharia comercial sobre projetos sob encomenda, caldeiraria pesada, produtos siderúrgicos, linha amarela ou concreto usinado.',
      email: 'comercial@vulcano.ind.br',
      phone: null,
      originRefs: [
        { documentId: 'word-18-10', paragraph: 209 },
        { documentId: 'word-18-10', paragraph: 210 },
        { documentId: 'word-18-10', paragraph: 211 },
        { documentId: 'word-18-10', paragraph: 212 },
      ],
    },
    {
      id: 'purchasing',
      title: 'Compras e fornecedores',
      description: 'Para empresas interessadas em fornecer materiais ou insumos ao Grupo Vulcano e conhecer o processo de homologação.',
      email: 'compras@vulcano.ind.br',
      phone: null,
      originRefs: [
        { documentId: 'word-18-10', paragraph: 216 },
        { documentId: 'word-18-10', paragraph: 217 },
        { documentId: 'word-18-10', paragraph: 218 },
      ],
    },
  ] satisfies readonly ContactDepartment[],
  careersLink: {
    label: 'Trabalhe Conosco',
    href: '/pessoas/carreira',
    description: 'Consulte as vagas e conheça a área de carreira.',
    originRefs: [
      { documentId: 'word-18-10', paragraph: 222 },
      { documentId: 'word-18-10', paragraph: 223 },
      { documentId: 'word-18-10', paragraph: 224 },
    ],
  },
  pendingWhistleblowing: {
    title: 'Ouvidoria e canal de denúncias',
    copy: 'Espaço seguro para relatos de conduta, ética ou segurança. O documento descreve um canal exclusivo, confidencial e independente para relatar desvios de conduta, violações ao código de ética ou situações de risco operacional, com preservação da identidade.',
    actionLabel: 'Registrar um relato',
    href: null,
    status: 'awaiting-real-destination' as const,
    originRefs: [
      { documentId: 'word-18-10', paragraph: 226 },
      { documentId: 'word-18-10', paragraph: 227 },
      { documentId: 'word-18-10', paragraph: 228 },
    ],
  },
};
