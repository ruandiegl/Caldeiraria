# Home editorial e Empresa em rotas — Implementation Plan

## Adendo aprovado durante a execução (23/09/2026)

O responsável do produto alterou a apresentação da Home: ela **pode sintetizar** os 60 parágrafos do bloco inicial do Word em seções coloridas, cards, fotos e dados. A leitura corrida e completa pertence às telas próprias de Empresa. A fonte `institutionalContent.ts` continua inventariando os 60 índices para não perder conteúdo, mas os testes da Home não exigem mais a renderização literal de cada parágrafo. Este adendo prevalece sobre os trechos abaixo que pedem texto integral na Home.

O item “Empresa” no menu global abre um submenu semelhante ao de “Pessoas”, com índice, História, Estrutura, Qualidade, ESG e Ações Sociais. Recharts é opcional: só se um gráfico esclarecer dados reais melhor do que os cartões e métricas existentes. Segmentos, Produtos e subsites continuam fora do escopo de conteúdo novo.

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Track each step with its checkbox. Use `superpowers:test-driven-development` for every behavior change: RED → GREEN → REFACTOR.

**Goal:** Recolocar na Home todo o conteúdo do bloco “Home” do Word do cliente, até antes de “Segmentos”, e transformar `/empresa` em um índice com páginas completas de História, Estrutura, Qualidade, ESG e Ações Sociais.

**Architecture:** Uma fonte editorial tipada alimenta a Home e as páginas temáticas, sem duplicar textos no código. O índice `/empresa` apresenta as rotas `/empresa/historia`, `/empresa/estrutura`, `/empresa/qualidade`, `/empresa/esg` e `/empresa/acoes-sociais`; o carrossel existente migra para História. As rotas técnicas `/instalacoes` e `/certificacoes` permanecem e recebem links cruzados.

**Tech Stack:** React 19, TypeScript 6, Vite 8, React Router 6, styled-components 6, Tailwind v4, Shadcn/UI `base-nova` com Base UI, GSAP 3.15, `@gsap/react`, Vitest e Testing Library.

**Spec:** A especificação aprovada está na seção [1. Design validado](#1-design-validado) deste arquivo. Este plano corrige a alocação de conteúdo do [plano 003](./plan-003-historia-integral-e-carrossel-interativo.md), sem editar o histórico daquele plano.

## Global Constraints

- Trabalhar na raiz canônica `C:\Users\Rv22\Desktop\calderaria`, que contém `docs`, `plans`, `package.json` e `src`; não editar a cópia aninhada `Caldeiraria`.
- Preservar o trabalho local não commitado em `src/pages/Company`, `src/content/companyContent.ts`, `docs/` e PDFs; reexaminar `git status`/diff antes de implementar qualquer tarefa e aplicar mudanças incrementalmente.
- Fonte do cliente: `docs/references/site textos (Recuperação Automática).docx`. O Word chama o bloco inicial de **Home**, não “Hero”; o título **Segmentos** está no parágrafo 87 (índice zero).
- A Home deve representar todos os 60 parágrafos publicáveis não vazios de `2–85`; `0` é o rótulo editorial “Home” e `54`/`64` são instruções internas. O texto pode ser distribuído em seções, linhas técnicas, timeline e disclosures, sem desaparecer.
- `/empresa/qualidade` e `/empresa/esg` também podem usar os textos dedicados posteriores (`174–206`); `/empresa/acoes-sociais` usa `208–213`. Excluir notas de links, fotos e placeholders da UI.
- Segmentos (`87–113`), Produtos (`114–173`) e subsites (`263–633`) ficam para um plano seguinte. Não apagar o conteúdo já modelado que os representa.
- Manter `/instalacoes`, `/certificacoes`, `/contato` e `/pessoas/carreira` acessíveis. Sem backend, CMS, estado global ou formulário novo.
- Distinguir ISO 9001:2015 vigente de ISO 14001/45001 em transição; não apresentar planos como certificações emitidas. Reconciliar a divergência “3 unidades no Word” versus “4 unidades” na página técnica atual.
- Usar Shadcn oficial da base instalada; `Button` e `Separator` já existem. Consultar `info`, `search`, `docs` e revisar o código gerado antes de usar `Accordion` ou `Breadcrumb`.
- Preservar o carrossel sem autoplay. GSAP somente com escopo, cleanup e movimento reduzido; sem scroll hijacking, pinning, scrub ou paralaxe.
- Nenhum commit, push, merge ou publicação está autorizado por este pedido de planejamento. Etapas de commit só devem ocorrer mediante nova autorização explícita.

## Review Focus

1. **Perda silenciosa do texto do cliente:** um dos 60 parágrafos publicáveis não recebe destino na Home. A Tarefa 1 testa a igualdade entre índices esperados e `sourceParagraphs` da composição.
2. **Duplicação divergente:** Home e páginas Empresa exibem versões diferentes de uma mesma frase. As Tarefas 1, 2 e 3 testam que ambas recebem o mesmo objeto de conteúdo.
3. **Rotas quebradas:** URL filha, refresh direto, links antigos e destinos do carrossel ficam órfãos. As Tarefas 3 e 4 testam roteamento, índice, destinos e navegação do histórico.
4. **Claim institucional incorreto:** quatro unidades ou ISO planejada aparecem como fatos vigentes. As Tarefas 5 e 6 testam números e status editoriais contra o Word.
5. **Conteúdo invisível ou inacessível:** disclosures, animações ou layout móvel escondem texto. As Tarefas 2, 5, 6 e 7 testam renderização, teclado, headings e reduced motion.

---

## 1. Design validado

### Decisões do responsável do produto

O usuário confirmou em 23/09/2026: (1) o bloco inteiro anterior a “Segmentos” pertence à Home, com hero visual curto seguido de seções completas; (2) `/empresa` vira índice com cinco telas; (3) Home e Empresa exibem os mesmos textos de seus temas, usando uma fonte única; (4) Segmentos fica para o próximo planejamento. O recorte final validado inclui o carrossel em História e a preservação de `/instalacoes` e `/certificacoes` como páginas técnicas conectadas às páginas institucionais.

### Inventário da fonte

| Parágrafos do Word (índice zero) | Assunto | Destino neste plano |
| --- | --- | --- |
| `0–8` | rótulo Home; origem e evolução | Home; `/empresa/historia` |
| `9–18` | expansão e futuro | Home; `/empresa/historia` |
| `19–27` | Missão, Visão e Valores | Home; `/empresa/historia` |
| `29–51` | estrutura, áreas e máquinas | Home; `/empresa/estrutura` |
| `53–61` | Qualidade e transição de normas | Home; `/empresa/qualidade` |
| `63–85` | ESG e três pilares | Home; `/empresa/esg` |
| `87` | Segmentos | limite: não migrar neste plano |
| `174–181` | Qualidade dedicada | complemento de `/empresa/qualidade` |
| `183–206` | ESG dedicado | complemento de `/empresa/esg` |
| `208–213` | Ações Sociais | `/empresa/acoes-sociais` |

O Word tem 634 parágrafos no total. No trecho `0–86`, há 63 parágrafos não vazios: `0` é o rótulo de página; `54` e `64` são instruções de link; os 60 restantes são conteúdo publicável, incluindo títulos e itens técnicos. `181`, `205`, `206` e `213` também são instruções editoriais, não copy. Os parágrafos `202` e `204` repetem a mesma conclusão de ESG; exibi-la uma vez e referenciar ambos os índices.

### Arquitetura de informação

```text
/
  Hero: tese, imagem/asset com status e CTA
  História: origem → expansão → futuro + Missão/Visão/Valores
  Estrutura: 3 unidades, áreas, 11 pontes rolantes e inventário integral
  Qualidade: texto integral, ISO vigente e normas em transição
  ESG: texto integral e pilares Ambiental, Social, Governança
  Seções complementares atuais que não contradizem o Word

/empresa                 índice institucional e subnavegação
  /empresa/historia       carrossel + capítulos completos
  /empresa/estrutura      capacidade e inventário completos
  /empresa/qualidade      Home Qualidade + texto dedicado
  /empresa/esg            Home ESG + texto dedicado
  /empresa/acoes-sociais  texto dedicado e mídia aprovada quando houver
```

O nome “hero” descreve somente a abertura visual da Home. A Home inteira contém o conteúdo do bloco “Home”. O índice Empresa não precisa repetir toda a prosa; as páginas filhas sim. O conteúdo comercial que o plano 003 colocou no `HistoryLongform` deve permanecer preservado no modelo até o planejamento de Segmentos, mas não deve ser listado como capítulo da página institucional.

### Alternativas avaliadas

- **Escolhida:** uma fonte editorial com seções reutilizadas entre Home e telas temáticas. Evita divergência sem perder texto; permite composições distintas por rota.
- Cópias literais por página: implementação inicial curta, manutenção propensa a divergências e correções duplicadas.
- Uma única rota dinâmica genérica para todos os temas: menos arquivos, porém reduz clareza de composição, testes e tratamento visual de História versus inventário versus ESG.

### Direção visual do `frontend-design`

Assunto: engenharia industrial da Vulcano. Público: compradores, parceiros, profissionais e comunidade. Trabalho da Home: explicar trajetória, capacidade e compromissos com texto do cliente. Assinatura: **trilho editorial de fabricação**, um fio visual discreto que liga marcos históricos reais às capacidades atuais. Números só aparecem onde carregam informação factual. Inventário de máquinas usa linhas de ficha técnica agrupadas, não uma grade de vinte cards idênticos.

Tokens existentes: marinho `#11182d`, azul institucional `#063e66`, laranja de ação `#fb7900`, texto secundário `#475569`, fundo suave `#f4f7fb`, borda `#e2e8f0`. Títulos: IBM Plex Sans Condensed; corpo e controles: IBM Plex Sans Variable. Container aproximado de 1062 px, escalas `clamp`, foco laranja visível e colunas que colapsam em mobile. Fotos industriais só representam a Vulcano quando aprovadas; previews devem trazer o status e legenda já prescritos em `docs/padroes-visuais.md`.

```text
DESKTOP                                  MOBILE
┌──────────────┬───────────────┐         ┌───────────────┐
│ tese/ações   │ mídia real    │         │ tese/ações    │
└──────────────┴───────────────┘         │ mídia         │
 História: marcos + prosa integral       └───────────────┘
 Identidade: missão/visão/valores         História em coluna
 Estrutura: dado + ficha técnica          Identidade em coluna
 Qualidade: norma atual/futuro            Inventário legível
 ESG: três pilares + texto integral       Qualidade → ESG
```

O ritmo visual deve vir da hierarquia do texto e de mídia documental, com no máximo uma assinatura gráfica forte. `data-reveal` serve à entrada de blocos internos. O carrossel preserva controle por botão, teclado e toque; em reduced motion, troca imediata sem opacidade residual.

## 2. Código, documentos e agentes

### Estado existente a preservar

- `src/routes/routes.tsx` define `/` e `/empresa`, além de Serviços, Instalações e Certificações.
- `src/pages/Home` contém `HumanHero` e seções editoriais ainda resumidas; `src/content/homeContent.ts` guarda texto dessas seções.
- `src/pages/Company` contém carrossel, `HistoryLongform`, estilos e testes não commitados; `src/content/companyContent.ts` contém blocos do Word, incluindo Segmentos e catálogo. O plano 003 foi parcialmente implementado no worktree atual, apesar de ainda descrever uma página única.
- `src/components/SiteLayout` é compartilhado e contém o link global Empresa. `src/motion/gsap.ts` e `useSiteMotion.ts` já centralizam GSAP e revelações.
- `components.json` confirma Shadcn `base-nova`/Base UI; a CLI `info --json` mostrou somente `button` e `separator` instalados. O arquivo `docs/shadcn-ui.md` tem trecho histórico que diz “ainda não inicializado” e deve ser corrigido para o estado real.
- `src/content/siteData.ts` e `/instalacoes` afirmam quatro unidades, contra três no Word. Revisar também qualquer outra tela que consuma `facilities`.

### Arquivos e contratos previstos

| Arquivo | Responsabilidade |
| --- | --- |
| `src/content/institutionalContent.ts` | Fonte canônica das seis seções e seus `sourceParagraphs`, status, textos e versões Home/detalhe. |
| `src/content/institutionalContent.test.ts` | Cobertura do Word, exclusões editoriais, status ISO e ausência de duplicação indevida. |
| `src/content/companyContent.ts` | Slides e dados legados de catálogo ainda necessários; importar/reexportar texto institucional da fonte canônica, sem segunda cópia. |
| `src/pages/Home/index.tsx` e `sections/*` | Composição da Home com todas as seções antes de Segmentos. |
| `src/pages/Company/index.tsx` | Índice `/empresa`. |
| `src/pages/Company/HistoryPage.tsx` | Carrossel e leitura de história/identidade. |
| `src/pages/Company/StructurePage.tsx` | Unidades, áreas e inventário técnico. |
| `src/pages/Company/QualityPage.tsx` | Certificação vigente, transição e texto dedicado. |
| `src/pages/Company/EsgPage.tsx` | Pilares e texto dedicado. |
| `src/pages/Company/SocialActionsPage.tsx` | Ações sociais e pendências de fotos/links. |
| `src/pages/Company/CompanySubnav.tsx` | Breadcrumb e links entre temas; um único lugar para a ordem de navegação. |
| `src/pages/Company/HistoryCarousel.tsx` | Preservar interação; atualizar destinos de capítulos para rotas/âncoras válidas. |
| `src/pages/Company/companyStyles.ts` e `src/pages/Home/homeStyles.ts` | Estilos específicos e variantes responsivas; extrair só padrões realmente repetidos. |
| `src/routes/routes.tsx`, `src/components/SiteLayout/index.tsx` | Rotas explícitas e links globais/contextuais. |
| `src/content/siteData.ts`, `src/pages/Facilities/index.tsx` | Reconciliar três unidades com a fonte do cliente, mantendo a rota técnica. |
| `docs/arquitetura.md`, `docs/rotas-e-conteudo.md`, `docs/qualidade-e-validacao.md`, `docs/shadcn-ui.md`, `docs/README.md` | Atualizar responsabilidade, rotas, testes e estado real dos primitives. |

Contrato proposto (nomes estáveis entre tarefas):

```ts
export type InstitutionalId = 'history' | 'identity' | 'structure' | 'quality' | 'esg' | 'social-actions';
export type EditorialStatus = 'approved' | 'needs-review' | 'asset-pending' | 'link-pending';
export type EditorialParagraph = {
  id: string;
  text: string;
  sourceParagraphs: number[];
};
export type InstitutionalSection = {
  id: InstitutionalId;
  title: string;
  paragraphs: EditorialParagraph[];
  detailParagraphs?: EditorialParagraph[];
  status: EditorialStatus;
  editorialNotes?: string[];
};
export const institutionalContent: Record<InstitutionalId, InstitutionalSection>;
export const homeSectionIds: readonly InstitutionalId[]; // history, identity, structure, quality, esg
export const companyTopicPaths: Record<InstitutionalId, string>; // identity → /empresa/historia
```

Não renderizar `editorialNotes` diretamente. Itens técnicos e valores podem receber estrutura adicional tipada, contanto que todos os índices de origem continuem apontados e toda a prosa pública seja legível. `companyTopicPaths` é o único mapa para navegação, cards do índice, subnav e carrossel.

### Agentes por entrega

| Agente do projeto | Entrega e momento |
| --- | --- |
| [Product Manager](../agents/product-manager.md) | Verificar fronteira Home/Segmentos, claims e critérios antes da Tarefa 1. |
| [UX/UI Designer](../agents/ux-ui-designer.md) + `frontend-design` | Validar hierarquia e wireframe das Tarefas 2–6 antes do CSS. |
| [Software Architect](../agents/software-architect.md) | Fechar contratos de dados/rotas na Tarefa 1 e revisar links da Tarefa 3. |
| [Frontend Engineer](../agents/frontend-engineer.md) + `shadcn`/GSAP | Implementar Tarefas 2–6, preservando a stack híbrida. |
| [QA Engineer](../agents/qa-engineer.md) + Superpowers TDD | Exigir RED → GREEN → REFACTOR em cada tarefa e executar regressão final. |
| [Accessibility & Performance Engineer](../agents/accessibility-performance-engineer.md) | Revisar teclado, leitura longa, mídia, CLS e reduced motion na Tarefa 7. |
| [Technical Writer](../agents/technical-writer.md) | Atualizar docs e mapear próximos incrementos na Tarefa 7. |
| [Code Reviewer](../agents/code-reviewer.md) | Revisar cobertura da fonte e diff final, após testes verdes. |

Não há trabalho de backend/integração, segurança ou release neste plano. Os “agentes” acima são papéis de revisão/execução; se o ambiente oferecer subagentes, usar um contexto novo por tarefa e um revisor independente. Se não oferecer, manter as mesmas portas de revisão manualmente.

## 3. Tarefas de implementação (TDD)

### Tarefa 1 — Fonte editorial única e inventário auditável

**Agentes:** Product Manager, Software Architect, QA Engineer.

**Files:** criar `src/content/institutionalContent.ts`, `src/content/institutionalContent.test.ts`; modificar `src/content/companyContent.ts` sem descartar blocos comerciais; consultar o Word.

**Interfaces:** produz `InstitutionalId`, `EditorialParagraph`, `InstitutionalSection`, `institutionalContent`, `homeSectionIds` e `companyTopicPaths` do contrato acima. Tarefas 2–6 consomem essas exports.

- [ ] **Step 1 — RED:** Escrever teste de cobertura independente do modelo. Os índices abaixo vieram da leitura direta do Word; `0` é metadado, `54`/`64` são notas. Nomear a mudança que faria o teste falhar: omitir qualquer item público do bloco Home.

```ts
const requiredHomeParagraphs = [
  2, 4, 6, 7, 9, 10, 12, 14, 15, 17, 19, 21, 23, 24, 25, 26, 27,
  29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  46, 47, 48, 49, 50, 51, 53, 56, 58, 60, 61, 63, 66, 68, 69, 70,
  72, 73, 75, 76, 77, 78, 80, 81, 82, 84, 85,
];
const actual = homeSectionIds.flatMap((id) =>
  institutionalContent[id].paragraphs.flatMap((paragraph) => paragraph.sourceParagraphs),
);
expect(new Set(actual)).toEqual(new Set(requiredHomeParagraphs));
expect(actual).toHaveLength(requiredHomeParagraphs.length);
```

- [ ] **Step 2 — RED:** Adicionar testes separados para `homeSectionIds` não incluir `social-actions`; `companyTopicPaths` conter cinco destinos; texto público não conter `XXXX-XXXX`, `[link`, `[clique` ou instruções de foto; notas editoriais poderem reter o contexto sem serem renderizadas. Rodar `npm run test:run -- src/content/institutionalContent.test.ts`. Se a primeira falha for só de import inexistente, criar exports vazias tipadas em `institutionalContent.ts` e repetir até obter falha de asserção de cobertura/rotas, antes de preencher dados.
- [ ] **Step 3 — GREEN:** Extrair/normalizar os textos `2–85`, preservando fatos e parágrafos completos; mapear cada item a `sourceParagraphs`. Usar `detailParagraphs` para Qualidade `174,176–180`, ESG `183,185–204` (202/204 representados uma vez com duas refs) e Ações Sociais `208–211`; guardar `181,205,206,213` apenas como notas. Mover o texto institucional de `companyContent.ts` para import da fonte canônica, mantendo slides e blocos comerciais não afetados.
- [ ] **Step 4 — GREEN:** Rodar teste focal e depois `npm run test:run`. Esperado: cobertura 60/60, nenhum ID duplicado, nenhuma instrução editorial pública; testes legados preservados ou atualizados apenas para a nova responsabilidade.
- [ ] **Step 5 — REFACTOR:** Dividir apenas estruturas de dados grandes que tenham uma responsabilidade clara; manter `sourceParagraphs` e exports estáveis. Registrar diferenças de ortografia/números em notas editoriais, sem inventar fatos.

### Tarefa 2 — Home completa até “Segmentos”

**Agentes:** UX/UI Designer, Frontend Engineer, QA Engineer.

**Files:** modificar `src/pages/Home/index.tsx`, `src/pages/Home/Home.test.tsx`, `src/content/homeContent.ts`, `src/pages/Home/homeStyles.ts`; criar seções focadas em `src/pages/Home/sections/` conforme os cinco grupos. Reutilizar composições de marca em `src/components/brand` quando houver dois consumidores reais.

**Interfaces:** consome `institutionalContent` e `homeSectionIds`; não mantém cópias literais do Word em `homeContent.ts`.

- [ ] **Step 1 — RED:** Em `Home.test.tsx`, testar um único `h1`, os headings História, Identidade, Estrutura, Qualidade e ESG, a presença do texto do último parágrafo público (`85`) e dos itens técnicos `31–51`, além da ausência de um capítulo “Segmentos” extraído do Word. Testar que o mesmo objeto `institutionalContent.history` abastece a Home e será passado à página História.
- [ ] **Step 2 — RED:** Rodar `npm run test:run -- src/pages/Home/Home.test.tsx`; confirmar que falha porque a Home atual mostra somente resumos e não o corpo integral.
- [ ] **Step 3 — GREEN:** Preservar `HumanHero` como abertura curta, ajustando título/body à tese do Word. Compor História em capítulos reais, Missão/Visão/Valores completos, estrutura com inventário integral, Qualidade e ESG completos. O bloco “Por dentro do trabalho” pode continuar como complemento visual, mas não substituir nenhum parágrafo do cliente. Não migrar o catálogo `segments`/`catalog` da Empresa para a Home nesta tarefa.
- [ ] **Step 4 — GREEN:** Se o inventário usar disclosure, consultar `npx shadcn@latest search @shadcn -q accordion`, `npx shadcn@latest docs accordion` e instalar o primitive oficial Base UI após revisar `--dry-run`; testar que cada item pode ser aberto por teclado e que o texto existe no DOM. Se `<details>` nativo atender melhor sem nova dependência, manter `<details>` sem esconder os grupos obrigatórios atrás de uma ação inacessível.
- [ ] **Step 5 — REFACTOR:** Rodar o teste focal, a suíte completa e checar texto em 360 px e desktop. Extrair somente componentes que reduzirão duplicação com as páginas Empresa.

### Tarefa 3 — Índice Empresa, rotas e links persistentes

**Agentes:** Software Architect, Frontend Engineer, QA Engineer.

**Files:** modificar `src/routes/routes.tsx`, `src/pages/Company/index.tsx`, `src/components/SiteLayout/index.tsx`, `src/pages/Company/Company.test.tsx`; criar `src/pages/Company/CompanySubnav.tsx` e `src/pages/Company/CompanyRoutes.test.tsx`.

**Interfaces:** consome `companyTopicPaths`; produz as seis rotas explícitas. As páginas importadas nesta tarefa podem começar como shells sem texto, para serem completadas nas Tarefas 4–6.

- [ ] **Step 1 — RED:** Escrever testes com `MemoryRouter` para `/empresa`, cinco filhos, link do menu Empresa, breadcrumb de retorno, rota desconhecida `/empresa/nao-existe` indo para o índice, e preservação de `/instalacoes`/`/certificacoes`. Assertar headings/URLs, não estrutura interna do router.
- [ ] **Step 2 — RED:** Rodar `npm run test:run -- src/pages/Company/CompanyRoutes.test.tsx`; falha esperada: rotas filhas hoje caem no fallback `/`.
- [ ] **Step 3 — GREEN:** Trocar `Company/index.tsx` por índice institucional com cinco entradas e introduzir rotas explícitas. Criar `CompanySubnav` com `nav aria-label="Seções da empresa"`, links e `aria-current="page"`. Consultar `npx shadcn@latest docs breadcrumb`; usar `Breadcrumb` oficial Base UI apenas se couber no layout; caso contrário, `nav` semântico com links é suficiente. Manter o link global Empresa em `/empresa`, sem converter o menu todo para uma nova biblioteca.
- [ ] **Step 4 — GREEN:** Rodar testes de rotas e suíte. Abrir cada URL diretamente no navegador de desenvolvimento e recarregar; conferir back/forward e foco após navegação. Não tratar refresh apenas com teste de `MemoryRouter`.
- [ ] **Step 5 — REFACTOR:** Centralizar destinos em `companyTopicPaths`; remover strings de URL repetidas nas páginas. Preservar links existentes que apontam para `/empresa`, redirecionando-os a `/empresa/historia` somente quando o rótulo diz explicitamente “história”.

### Tarefa 4 — História própria e carrossel preservado

**Agentes:** Frontend Engineer, UX/UI Designer, Accessibility & Performance Engineer.

**Files:** criar `src/pages/Company/HistoryPage.tsx`, `src/pages/Company/HistoryPage.test.tsx`; modificar `HistoryCarousel.tsx`, `HistoryCarousel.test.tsx`, `companyStyles.ts` e links de `homeContent.ts` que dizem “trajetória”/“história completa”.

**Interfaces:** consome `institutionalContent.history`, `.identity`, `companyContent.slides` e `companyTopicPaths`; produz destinos válidos por slide.

- [ ] **Step 1 — RED:** Testar `/empresa/historia` com carrossel, capítulos completos de origem/expansão/futuro, Missão/Visão/Valores completos, um `h1` e links “Ler capítulo completo” que chegam a seção/rota existente. Manter testes existentes de botões, setas, Home/End, swipe, limites e `aria-live`.
- [ ] **Step 2 — RED:** Rodar `npm run test:run -- src/pages/Company/HistoryPage.test.tsx src/pages/Company/HistoryCarousel.test.tsx` e observar falha pela ausência da rota/página e pelos anchors antigos do `getChapterAnchor`.
- [ ] **Step 3 — GREEN:** Reutilizar o `HistoryCarousel` existente. Substituir seu switch de `#history.origin`, `#structure.capabilities` e `#quality` por um mapa de `href` tipado: marcos históricos apontam para anchors sem ponto em `/empresa/historia`; estrutura aponta para `/empresa/estrutura#capacidades`; qualidade/futuro aponta para `/empresa/qualidade#certificacoes` quando o slide trata desse tema. A narrativa integral fica após o carrossel, com IDs reais e headings semânticos.
- [ ] **Step 4 — GREEN:** Usar `useGSAP` importado de `src/motion/gsap.ts` com scope e `revertOnUpdate`; manter transições por `x`/`autoAlpha` e duration zero em reduced motion. Rodar testes focais e suíte completa; checar que mount/unmount não deixa texto invisível.
- [ ] **Step 5 — REFACTOR:** Remover lógica de renderização de capítulos não históricos de `HistoryLongform.tsx` apenas quando Tarefas 5–6 já tiverem páginas verdes. Até lá, preservar o arquivo e sua fonte de conteúdo.

### Tarefa 5 — Estrutura industrial e coerência das unidades

**Agentes:** Frontend Engineer, QA Engineer, Product Manager.

**Files:** criar `src/pages/Company/StructurePage.tsx`, `src/pages/Company/StructurePage.test.tsx`; modificar `src/content/siteData.ts`, `src/pages/Facilities/index.tsx` e `src/pages/Company/companyStyles.ts` somente onde a divergência factual exige.

**Interfaces:** consome `institutionalContent.structure`; mantém `/instalacoes` como página técnica distinta e ligada à institucional.

- [ ] **Step 1 — RED:** Testar que `/empresa/estrutura` exibe três unidades, `34.500 m²`, `17.000 m²`, `11 pontes rolantes` e cada classe de equipamento do inventário `31–51`. Testar que `/instalacoes` não publica a afirmação “quatro unidades” e oferece link para a visão institucional.
- [ ] **Step 2 — RED:** Rodar `npm run test:run -- src/pages/Company/StructurePage.test.tsx`; falha esperada para a página ausente e para a divergência quatro/três unidades.
- [ ] **Step 3 — GREEN:** Montar texto introdutório integral e inventário em grupos de leitura técnica. Se usar Accordion, seguir a API Base UI consultada e preservar nome/foco/estado; renderizar cada quantidade com sua unidade. Reconciliar `siteData.facilities` com o parágrafo 12 do Word: três unidades vizinhas de `16.000`, `15.000` e `3.500 m²`, respectivamente; não derivar outros números por conta própria.
- [ ] **Step 4 — GREEN/REFACTOR:** Rodar testes focais e suíte. Conferir visualmente lista longa em desktop/mobile e links nos dois sentidos. Não alterar outras rotas consumidoras de `siteData` sem testar a consequência.

### Tarefa 6 — Qualidade, ESG e Ações Sociais em telas próprias

**Agentes:** Frontend Engineer, UX/UI Designer, QA Engineer.

**Files:** criar `QualityPage.tsx`, `EsgPage.tsx`, `SocialActionsPage.tsx` e testes correspondentes em `src/pages/Company/`; modificar `companyStyles.ts` e o conteúdo canônico somente para correções auditadas.

**Interfaces:** consome `institutionalContent.quality`, `institutionalContent.esg` e `institutionalContent['social-actions']`; mantém `/certificacoes`, `/contato` e `/pessoas/carreira` funcionais.

- [ ] **Step 1 — RED:** Testar Qualidade com todo o bloco Home `53–61` e complemento `174,176–180`; `ISO 9001:2015` como vigente e `ISO 14001`/`ISO 45001` como transição. Testar link para `/certificacoes` e ausência do texto `(link para o cert ISO9001)`.
- [ ] **Step 2 — RED:** Testar ESG com Home `63–85`, complemento `183,185–204`, três pilares e uma única renderização da conclusão repetida em `202/204`. Testar que notas de canal de denúncia/código de conduta não viram links fictícios.
- [ ] **Step 3 — RED:** Testar Ações Sociais com o texto `208–211`, nenhum nome/foto de instituição inventado, e estado de mídia pendente quando o cliente não entregou assets aprovados. Rodar testes focais; falha esperada pelas páginas ainda ausentes.
- [ ] **Step 4 — GREEN:** Criar páginas com um `h1`, subnav, corpo integral, seções `aria-labelledby` e CTAs reais apenas quando o destino existe. Reutilizar `Separator` e `Button` atuais. A Home e as páginas usam as mesmas seções de origem, sem segunda transcrição. Para os complementos dedicados, mostrar somente texto adicional distinto.
- [ ] **Step 5 — GREEN/REFACTOR:** Rodar testes focais e suíte; confirmar links e semântica. Quando todas as páginas estiverem verdes, remover a leitura monolítica de `HistoryLongform` da rota `/empresa` sem apagar modelos de Segmentos/Produtos reservados ao próximo plano.

### Tarefa 7 — Acessibilidade, movimento, documentação e revisão final

**Agentes:** Accessibility & Performance Engineer, QA Engineer, Technical Writer, Code Reviewer.

**Files:** testes afetados; `docs/arquitetura.md`, `docs/rotas-e-conteudo.md`, `docs/qualidade-e-validacao.md`, `docs/shadcn-ui.md`, `docs/README.md`; ajustes pontuais em componentes das Tarefas 2–6.

**Interfaces:** verifica o conjunto das seis rotas institucionais e a Home; não acrescenta domínio de conteúdo novo.

- [ ] **Step 1 — RED:** Acrescentar teste de navegação por teclado na subnav e nos disclosures, teste de `prefers-reduced-motion: reduce` no carrossel/revelações e teste de ausência de placeholders no texto renderizado de Home e Empresa. Confirmar que cada teste falha por um comportamento concreto antes de corrigi-lo.
- [ ] **Step 2 — GREEN:** Corrigir o mínimo necessário para testes verdes. Verificar foco visível, contraste, hierarquia `h1`/`h2`/`h3`, alt/caption/status de mídia e conteúdo visível quando GSAP é desativado. `data-reveal` anima blocos internos no padrão global; não criar ScrollTriggers por item de inventário. Preservar scroll nativo e cleanup de route change.
- [ ] **Step 3 — Docs:** Atualizar mapa de rotas e propriedade dos dados; corrigir documentação Shadcn desatualizada (projeto já inicializado em Base UI), registrar que Segmentos/Produtos/Subsites ficam para o próximo plano. Registrar o conflito das três unidades como resolvido ou pendente editorial, com evidência.
- [ ] **Step 4 — Validação:** Rodar `npm run test:run`, `npm run lint` e `npm run build`. Testar `/`, `/empresa` e as cinco filhas por link e URL direta com refresh, além de `/instalacoes` e `/certificacoes`, em desktop e mobile. Percorrer teclado, reduced motion e retorno do navegador. Comparar console e custo de animação após várias mudanças de rota.
- [ ] **Step 5 — Revisão:** Code Reviewer confere diff contra este plano, os 60 índices da Home, as notas editoriais, a ausência de cópias de texto e o escopo diferido. Corrigir achados e repetir apenas os gates afetados, depois os três comandos finais.

## 4. Critérios de aceite

- A Home publica, em seções legíveis, todos os 60 parágrafos publicáveis do bloco antes de “Segmentos”; `0`, `54` e `64` recebem tratamento de metadado/nota.
- História, Estrutura, Qualidade e ESG são completos na Home e em suas páginas Empresa, consumindo a mesma fonte de dados. Ações Sociais têm tela própria com texto `208–211`.
- `/empresa` apresenta cinco destinos claros; cada filha abre diretamente, recarrega e tem link de retorno/subnavegação. O menu global aponta ao índice.
- O carrossel funciona em `/empresa/historia` por botão, teclado e toque, mantém anúncios/limites e aponta a capítulos/rotas reais.
- `/instalacoes` e `/certificacoes` permanecem distintas e alcançáveis. Nenhuma página afirma quatro unidades se o Word aprovado afirma três.
- `ISO 9001:2015` vigente e `ISO 14001`/`ISO 45001` em transição são diferenciadas visual e semanticamente.
- Nenhum placeholder de telefone, instrução entre colchetes, link inexistente, foto de stock atribuída à Vulcano ou informação de Segmentos/Subsites é publicada por esta migração.
- `npm run test:run`, `npm run lint` e `npm run build` passam; navegação manual desktop/mobile, teclado e reduced motion não encontra bloqueios.

## 5. Riscos, próximos limites e auto-revisão

| Risco | Tratamento no plano |
| --- | --- |
| Worktree já contém uma implementação parcial de `/empresa` | Tarefa 1 começa com status/diff; migrar incrementalmente e preservar conteúdo comercial até o próximo plano. |
| Home longa demais em mobile | Hierarquia, largura de leitura, inventário agrupado, disclosures acessíveis e teste de viewport; nenhuma perda de texto. |
| Copy idêntica em Home e detalhe gera manutenção dupla | Uma fonte de dados e componentes de leitura compartilhados, com complementos dedicados só nas páginas filhas. |
| Word mistura conteúdo público e instruções do cliente | `sourceParagraphs`, `editorialNotes`, testes de placeholders e status de link/asset. |
| Fatos existentes divergem do Word | Reconciliar três unidades, norma atual versus transição e documentar cada diferença sem inferir números ausentes. |
| GSAP oculta conteúdo após navegação | `useGSAP` escopado, cleanup, reduced motion, testes e rota direta; sem scroll hijacking. |
| Documentação atual descreve página única e Shadcn antigo | Tarefa 7 atualiza docs após a arquitetura estar verde. |

Auto-revisão: cada grupo `0–85` tem destino Home e tem teste de índice; os complementos `174–213` têm destinos temáticos; nenhuma tarefa implementa Segmentos/Produtos/Subsites; nomes de rotas, tipos e fonte de dados são constantes entre tarefas; cada uma tem falha observável antes da implementação e verificação depois. O plano 003 permanece como histórico do trabalho anterior, mas a responsabilidade de conteúdo agora segue este plano 004.

## 6. Execução e próximo planejamento

Recomenda-se **Subagent-driven**: Product Manager/Architect fecham o inventário, Frontend executa uma tarefa por vez, QA confirma cada RED/GREEN, Accessibility & Performance e Code Reviewer fazem gates independentes. A correção atravessa Home, seis rotas e texto institucional extenso; revisão separada reduz risco de perda silenciosa.

O próximo plano, com índice posterior a 004, tratará Segmentos, Produtos e subsites técnicos do Word. Não antecipar esse catálogo nesta implementação.
