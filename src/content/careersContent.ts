import type { SourceRef } from './sourceDocuments';

export type CareerPoint = { title: string; text: string; originRefs: readonly SourceRef[] };

export const careersContent = {
  eyebrow: 'Trabalhe conosco',
  eyebrowOriginRefs: [{ documentId: 'word-18-10', paragraph: 230 }],
  title: 'Construa o futuro da engenharia conosco',
  titleOriginRefs: [{ documentId: 'word-18-10', paragraph: 232 }],
  introduction: [
    {
      text: 'Na Metalúrgica Vulcano e em todas as divisões do nosso grupo (Barra Ligas e Vulcano Constructions), acreditamos que a força da nossa engenharia pesada não vem apenas das máquinas ou do aço, mas sim da energia, do intelecto e da dedicação das nossas pessoas.',
      originRefs: [{ documentId: 'word-18-10', paragraph: 233 }],
    },
    {
      text: 'Com mais de 50 anos de história, construímos um ambiente de trabalho que valoriza o conhecimento técnico, estimula o protagonismo e desafia nossos profissionais a transformarem grandes projetos industriais em realidade. Se você busca uma carreira sólida, pautada pela inovação contínua, excelência operacional e desenvolvimento humano, o seu lugar é aqui.',
      originRefs: [{ documentId: 'word-18-10', paragraph: 234 }],
    },
  ],
  whyJoinTitle: 'Por que fazer parte do nosso time?',
  whyJoinTitleOriginRefs: [{ documentId: 'word-18-10', paragraph: 235 }],
  whyJoin: [
    { title: 'Cultura de Aprendizado e Inovação', text: 'Atuamos na vanguarda tecnológica da indústria, utilizando processos avançados de modelagem digital e automação.', originRefs: [{ documentId: 'word-18-10', paragraph: 236 }] },
    { title: 'Desafios Reais de Grande Porte', text: 'Nossas equipes desenvolvem soluções complexas sob encomenda para os setores mais vitais da economia, como siderurgia, mineração e infraestrutura.', originRefs: [{ documentId: 'word-18-10', paragraph: 237 }] },
    { title: 'Ambiente Técnico Altamente Qualificado', text: 'Oportunidade de trocar experiências diárias com engenheiros e especialistas formados nos principais centros do país.', originRefs: [{ documentId: 'word-18-10', paragraph: 238 }] },
  ] satisfies readonly CareerPoint[],
  applicationOriginRefs: [{ documentId: 'word-18-10', paragraph: 240 }, { documentId: 'word-18-10', paragraph: 242 }] as readonly SourceRef[],
  commitmentTitle: 'Nosso Compromisso Humano: O Vínculo com a Nossa Agenda ESG',
  commitmentTitleOriginRefs: [{ documentId: 'word-18-10', paragraph: 244 }],
  commitmentIntroduction: 'Para nós, o crescimento profissional só faz sentido se caminhar de mãos dadas com a sustentabilidade e a valorização da vida. O pilar Social (S) e de Governança (G) da nossa estratégia corporativa reflete-se diretamente no dia a dia das nossas equipes fabris e de campo.',
  commitmentIntroductionOriginRefs: [{ documentId: 'word-18-10', paragraph: 245 }],
  commitment: [
    { title: 'Risco Zero e Segurança Absoluta', text: 'O respeito à integridade física de cada colaborador é o nosso valor inegociável. Trabalhamos sob os rígidos critérios das práticas internacionais de saúde e segurança ocupacional, garantindo que você retorne seguro para casa todos os dias.', originRefs: [{ documentId: 'word-18-10', paragraph: 246 }] },
    { title: 'Diversidade, Inclusão e Oportunidades Iguais', text: 'Promovemos um ambiente plural, transparente e ético, livre de qualquer tipo de discriminação, onde o mérito e o talento são os únicos combustíveis para a sua evolução.', originRefs: [{ documentId: 'word-18-10', paragraph: 247 }] },
    { title: 'Desenvolvimento de Mão de Obra Local', text: 'Temos orgulho em capacitar e desenvolver as comunidades onde operamos, gerando emprego de qualidade e fortalecendo o ecossistema industrial da nossa região.', originRefs: [{ documentId: 'word-18-10', paragraph: 248 }] },
  ] satisfies readonly CareerPoint[],
  closing: 'Se você compartilha do nosso propósito de unir alta engenharia com responsabilidade socioambiental, queremos conhecer o seu talento.',
  closingOriginRefs: [{ documentId: 'word-18-10', paragraph: 249 }] as readonly SourceRef[],
};
