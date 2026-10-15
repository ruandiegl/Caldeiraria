# Rotas e conteúdo

## Rotas públicas

| Rota | Componente | Responsabilidade |
| --- | --- | --- |
| `/` | `Home` | Sínteses visuais dos temas institucionais, métricas, fotos de demonstração identificadas e links para a leitura integral. |
| `/empresa` | `Company` | Índice institucional; o menu global abre as cinco telas, como em Pessoas. |
| `/empresa/historia` | `HistoryPage` | Carrossel e texto integral de História e Identidade. |
| `/empresa/estrutura` | `StructurePage` | Três unidades e inventário técnico completo. |
| `/empresa/qualidade` | `QualityPage` | Qualidade integral; ISO vigente e normas em transição. |
| `/empresa/esg` | `EsgPage` | Texto integral dos três pilares ESG. |
| `/empresa/acoes-sociais` | `SocialActionsPage` | Texto integral e status de mídia pendente. |
| \`/pessoas\` | \`People\` | Visão geral de carreira, desenvolvimento, comunidade e cuidado. |
| \`/pessoas/:topic\` | \`People\` | Experiência detalhada de um tópico de pessoas. |
| \`/servicos\` | \`Services\` | Catálogo de serviços industriais. |
| \`/servicos/:slug\` | \`ServiceDetail\` | Detalhe de um serviço identificado por slug. |
| \`/instalacoes\` | \`Facilities\` | Unidades e capacidades físicas. |
| \`/equipamentos\` | \`Equipment\` | Equipamentos e recursos produtivos. |
| \`/certificacoes\` | \`Certifications\` | Certificações, normas e qualificações. |
| \`/obras-clientes\` | \`Cases\` | Clientes, obras e provas de experiência. |
| \`/contato\` | \`Contact\` | Formulário e informações de atendimento. |
| `/empresa/*` desconhecida | redireciona para `/empresa` | Fallback da área institucional. |
| qualquer outra | redireciona para `/` | Fallback geral. |

## Parâmetro \`topic\`

Os valores aceitos atualmente são:

- \`carreira\`
- \`desenvolvimento\`
- \`comunidade\`
- \`cuidado\`

Um tópico desconhecido redireciona para \`/pessoas\`. Ao adicionar um tópico, atualize o mapa de dados e os links de navegação da própria página.

## Parâmetro \`slug\`

Os serviços atuais estão em \`src/content/siteData.ts\` e usam estes slugs:

- \`soldagem\`
- \`tubulacao\`
- \`suportes\`
- \`tanques-vasos\`
- \`chumbadores\`
- \`miscelaneas\`
- \`projetos-sob-medida\`
- \`offshore\`

O slug deve ser estável, minúsculo e sem acentos. O título visível pode conter acentuação normal.

## Fonte dos dados

\`src/content/siteData.ts\` concentra:

- \`services\`;
- \`certifications\`;
- \`clients\`;
- \`projects\`;
- `facilities`;
- `equipment`.

`src/content/homeContent.ts` concentra as sínteses, métricas e chamadas da Home.

`src/content/institutionalContent.ts` guarda a leitura completa, os `sourceParagraphs`, status de certificação e notas editoriais do documento-mestre (`docs/references/site textos (Recuperação Automática).docx`). Os 60 parágrafos públicos anteriores a “Segmentos” têm cobertura no modelo, mas a Home mostra sínteses; as páginas próprias exibem o texto integral. A informação de três unidades (16.000, 15.000 e 3.500 m²) também orienta `/instalacoes`.

`src/content/companyContent.ts` mantém os slides de História e os blocos comerciais reservados para o próximo planejamento: Segmentos, Catálogo, Contato e Carreira. Não publicar notas internas, placeholders ou mídia ainda não aprovada como fatos.

## Checklist para uma nova página

1. Defina o objetivo da página em uma frase.
2. Escolha a rota e registre-a neste documento.
3. Crie o diretório em \`src/pages/<NomeDaPagina>\`.
4. Reutilize o \`SiteLayout\` e os primitives compartilhados.
5. Inclua estados de conteúdo, vazio e erro quando aplicável.
6. Adicione o link à navegação somente se a página for pública e prioritária.
7. Teste a rota diretamente e depois de recarregar o navegador.
8. Atualize este documento e o índice de documentação se uma nova convenção surgir.
