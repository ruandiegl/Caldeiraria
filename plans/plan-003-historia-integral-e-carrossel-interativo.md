# História integral e carrossel interativo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar a rota `/empresa` em uma página de história completa, baseada no Word do cliente, mantendo o carrossel como uma interação editorial resumida e apresentando o conteúdo integral em seções longas, acessíveis e navegáveis.

**Architecture:** Manter `/empresa` como rota canônica e separar conteúdo, carrossel, long-form e estilos em módulos focados. O Word será preservado em `docs/references/` como fonte de auditoria; o conteúdo publicável será normalizado em `src/content/companyContent.ts`, com referências de origem e status editorial. O carrossel será controlado por estado local, terá controles acessíveis e usará GSAP apenas para a transição do painel ativo; as seções abaixo usarão as revelações GSAP já existentes.

**Tech Stack:** React 19, TypeScript 6, Vite 8, React Router 6, styled-components 6, Tailwind CSS v4, Shadcn/UI base-nova com Base UI, GSAP 3.15, `@gsap/react`, ScrollTrigger, Vitest, Testing Library e `python-docx` somente para auditoria/importação do Word.

**Spec:** `plans/plan-003-historia-integral-e-carrossel-interativo.md#brief-do-produto`

## Global Constraints

- Trabalhar somente na raiz canônica `C:\Users\Rv22\Desktop\calderaria`; não editar a cópia aninhada `Caldeiraria`.
- Manter a rota pública `/empresa`; não criar uma segunda rota `/historia` nesta entrega.
- Usar `docs/references/site textos (Recuperação Automática).docx` como cópia versionável da fonte do cliente; o original em `C:\Users\Rv22\Documents` permanece preservado.
- Todo conteúdo factual do Word deve ser representado no modelo de conteúdo ou explicitamente registrado como nota editorial/asset pendente; nenhum bloco pode desaparecer silenciosamente.
- Instruções editoriais, placeholders, links incompletos, telefones `XXXX-XXXX` e pedidos de foto não podem aparecer como copy publicada.
- Manter o carrossel sem autoplay, sem scroll hijacking, sem pinning, sem paralaxe e sem smooth scroll.
- Usar o carrossel como resumo interativo da narrativa; o conteúdo completo deve permanecer disponível depois dele, por leitura contínua ou disclosure acessível.
- Usar primitives Shadcn existentes antes de criar marcação equivalente; qualquer novo primitive deve vir do registro oficial `@shadcn` e ser revisado após a geração.
- Usar GSAP com escopo React, cleanup e `prefers-reduced-motion`; animar apenas transform, autoAlpha e propriedades de baixo custo.
- Não adicionar backend, CMS, estado global, integração real de formulário ou dependência de analytics.
- Não criar commits, branches, push, merge ou publicação sem autorização explícita.

## Review Focus

- **Completude editorial:** todos os grupos de conteúdo do Word têm um bloco ou referência editorial verificável, sem notas de cliente renderizadas como texto público. Teste: `companyContent.test.ts` valida IDs de origem únicos e a lista completa de grupos obrigatórios.
- **Carrossel acessível:** próximo, anterior, marcadores, teclado, swipe e limites mantêm um único slide ativo, nome acessível e estado anunciado. Teste: `Company.test.tsx` cobre clique, ArrowLeft/ArrowRight, Home/End, `aria-current` e `aria-live`.
- **Conteúdo longo navegável:** headings, listas, links e disclosures seguem ordem semântica, funcionam em mobile e não escondem informação sem um controle equivalente. Teste: renderização verifica headings dos grupos e presença do texto de cada bloco.
- **Motion seguro:** transições de slide são revertidas em troca de conteúdo/rota, revelações não acumulam triggers e movimento reduzido remove deslocamento e opacidade inicial. Teste: `siteMotion.test.ts` permanece verde e a validação manual cruza a rota em ambos os sentidos.
- **Claims e placeholders:** ISO 9001, ISO 14001, ISO 45001, contatos, links de denúncia, carreira e fotos têm estados editoriais claros; nada incompleto é apresentado como fato ou CTA funcional. Teste: conteúdo rejeita `XXXX`, `[link`, `[clique` e URLs ausentes em ações publicáveis.

---

## 1. Identificação

- **Plano:** 003
- **Feature:** história integral e carrossel interativo
- **Rota:** `/empresa`
- **Estado:** pronto para revisão; nenhuma implementação da página foi feita nesta rodada
- **Incrementos relacionados:** Plano 001 — Home humanizada; Plano 002 — header liquid glass e motion no scroll
- **Fonte do cliente:** `docs/references/site textos (Recuperação Automática).docx`
- **Agente líder:** [Product Manager](../agents/product-manager.md)

## 2. Brief do produto

### Intenção

Apresentar a trajetória da Metalúrgica Vulcano como uma narrativa verificável: origem, expansão, capacidade, futuro, compromissos e áreas de atuação. O visitante deve entender a história sem precisar atravessar uma sequência de cards genéricos, mas também deve conseguir explorar o conteúdo técnico completo fornecido pelo cliente.

### Interpretação de “todo o conteúdo”

O Word é um documento-mestre do site, não apenas um texto curto de história. Ele contém 634 parágrafos e não possui tabelas. A página `/empresa` deve usar integralmente os grupos textuais que o cliente associou à empresa e à sua trajetória — `Nossa História`, `A Expansão e Modernização`, `Os Últimos Anos`, missão, visão, valores, estrutura, qualidade, ESG, ações sociais, contato e carreira — e deve manter, em um catálogo técnico progressivamente revelável, os segmentos, produtos, serviços, projetos, diferenciais, concretos e máquinas descritos no mesmo documento.

As anotações operacionais do Word, como “link para a aba”, “[fotos...]”, “[Clique aqui...]”, telefones incompletos e nomes de destinos ainda não confirmados, serão preservadas no mapa editorial, mas virarão requisitos de implementação/revisão, não conteúdo visível. Assim o plano atende à exigência de não perder material sem publicar instruções internas do cliente.

### Resultado esperado

- Hero editorial com “Nossa história” e uma tese curta.
- Carrossel interativo com 5 a 6 marcos narrativos, alimentado pelo mesmo conteúdo estruturado da página.
- Corpo completo após o carrossel, organizado por capítulos e disclosures onde a densidade técnica exigir.
- Conteúdo em português preservando os fatos e a intenção do Word, com normalização tipográfica e correções editoriais rastreáveis.
- Navegação por teclado, leitores de tela, touch e mouse.
- Layout funcional em 360, 768, 1024 e 1440 pixels.

## 3. Agentes selecionados

| Agente | Responsabilidade neste plano | Entrega de revisão |
| --- | --- | --- |
| [Product Manager](../agents/product-manager.md) | Fixar objetivo, público, escopo, claims aprováveis e critérios de aceite. | Brief, matriz de conteúdo obrigatório e decisões em aberto. |
| [Technical Writer](../agents/technical-writer.md) | Extrair e normalizar o Word, separar copy pública de instruções editoriais e manter a rastreabilidade. | Inventário de seções, mapa de origem e registro de placeholders. |
| [UX/UI Designer](../agents/ux-ui-designer.md) | Definir hierarquia, wireframe, estados do carrossel, leitura longa e responsividade. | Especificação visual e matriz de estados. |
| [Software Architect](../agents/software-architect.md) | Definir limites entre conteúdo, página, primitives e motion; preservar `/empresa`. | Contratos TypeScript, arquivos e sequência de integração. |
| [Frontend Engineer](../agents/frontend-engineer.md) | Implementar conteúdo, carrossel, long-form, controles, estilos e testes de componente. | Código tipado e validado. |
| [Accessibility & Performance Engineer](../agents/accessibility-performance-engineer.md) | Auditar semântica, foco, disclosure, imagens, custo de DOM, motion e mobile. | Achados classificados e validação de performance. |
| [QA Engineer](../agents/qa-engineer.md) | Transformar os critérios em casos reproduzíveis e testar rota, interação e regressões. | Matriz de testes e recomendação de liberação. |
| [Code Reviewer](../agents/code-reviewer.md) | Revisar diff contra este plano e as docs antes da integração. | Veredito e achados por severidade. |

Não é necessário criar um agente adicional. As responsabilidades já estão cobertas pelo catálogo existente em `agents/`.

## 4. Fontes e descobertas

### Documentação do projeto

- `docs/arquitetura.md` define `/empresa` como a página de história, identidade e posicionamento institucional.
- `docs/rotas-e-conteudo.md` exige que a rota pública existente seja preservada e documentada.
- `docs/padroes-visuais.md` fixa azul marinho, azul institucional, laranja de ação, IBM Plex Sans, container de aproximadamente 1062 px, foco visível e ausência de movimento decorativo.
- `docs/movimento-e-gsap.md` fixa `useGSAP`, escopo por ref, cleanup local, `data-reveal`, `power2.out`, `ScrollTrigger.batch()` e ausência de scroll hijacking.
- `docs/shadcn-ui.md` fixa adoção incremental, `base-nova`, primitives em `src/components/ui`, composições de marca em `src/components/brand` e validação das rotas legadas.
- `docs/qualidade-e-validacao.md` exige `npm run test:run`, `npm run lint`, `npm run build`, refresh direto, mobile, teclado, reduced motion, contraste, console e regressão de rotas.

### Código atual

`src/pages/Company/index.tsx` já possui um carrossel de cinco itens com estado local, marcadores de ano, drag por pointer, animação CSS e link para a galeria. Hoje os dados estão inline, a página mistura dados, estilos e renderização, e o restante do conteúdo é reduzido a seis cards de missão, visão, qualidade, meio ambiente, segurança e engenharia.

O plano preserva a experiência de linha do tempo, mas move o conteúdo para `src/content/companyContent.ts`, divide a página em componentes e troca a animação CSS do painel por uma transição GSAP escopada. Os primitives existentes `Button` e `Separator` serão reutilizados. O projeto atualmente tem apenas `button` e `separator` instalados no Shadcn; `carousel` e `accordion` só serão adicionados após consulta da documentação oficial durante a execução.

### Word do cliente

O arquivo foi salvo em `docs/references/site textos (Recuperação Automática).docx`; o original continua em Documentos. O inventário textual contém, entre outros, estes grupos:

1. História, fundação em 1974 e evolução do portfólio.
2. Expansão e modernização das três unidades e áreas físicas.
3. Últimos anos, marco de 50 anos e direção futura.
4. Missão, visão e quatro valores.
5. Estrutura do grupo e lista de equipamentos/capacidades.
6. Qualidade, ISO 9001:2015, transição para ISO 14001/45001 e sustentabilidade.
7. ESG nos pilares ambiental, social e governança.
8. Segmentos: siderurgia, caldeiraria, serviços industriais, projetos/equipamentos, concretos/pré-moldados e máquinas para construção.
9. Produtos e serviços técnicos, incluindo catálogo siderúrgico, tubulação, compósitos, pintura, tratamento térmico, projetos e diferenciais.
10. Ações sociais, contato, compras, vendas, ouvidoria e Trabalhe Conosco.

O documento contém duplicações, erros tipográficos e instruções internas. A implementação deve preservar o sentido e a cobertura, mas não deve publicar automaticamente tudo o que estiver entre colchetes ou incompleto.

### Práticas externas consultadas

- Context7 `/greensock/gsap-skills`: usar `useGSAP` com scope, `contextSafe` para callbacks que criem animações, transform aliases, `autoAlpha`, timelines e `gsap.matchMedia()` para reduced motion.
- Context7 `/shadcn-ui/ui`: composição oficial de `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` e uso de `Accordion` com configuração Base UI; manter tokens semânticos e não reinventar primitives.
- Skills locais `.agents/skills/gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline` e `gsap-performance`: não animar layout, não criar ScrollTriggers em tweens filhos, chamar refresh somente após mudança real de layout e reverter tudo no unmount.

## 5. Direção visual e de interação

### Tokens

- Azul marinho estrutural: `#11182d`.
- Azul institucional para títulos: `#063e66`.
- Laranja de ação e marcador ativo: `#fb7900`.
- Texto corrido: `#334155` / token semântico equivalente.
- Fundo claro: `#f8fafc`.
- Bordas e rail inativo: `#e2e8f0`.
- Títulos: IBM Plex Sans Condensed, com fallback já documentado.
- Corpo e controles: IBM Plex Sans Variable.

### Wireframe editorial

```text
┌──────────────────────────────────────────────────────────────┐
│ Hero: NOSSA HISTÓRIA                                         │
│ tese curta + origem + CTA contextual                         │
├──────────────────────────────────────────────────────────────┤
│ CARROSSEL / LINHA DO TEMPO                                   │
│ [imagem]  [ano / título / resumo]                            │
│ anterior  ●  ●  ●  ●  ●  próximo                             │
├──────────────────────────────────────────────────────────────┤
│ LEITURA COMPLETA                                             │
│ 01 Nossa história                                            │
│ 02 Expansão e modernização                                  │
│ 03 Últimos anos e futuro                                    │
│ 04 Missão, visão e valores                                  │
│ 05 Estrutura e capacidades                                  │
│ 06 Qualidade e ESG                                          │
│ 07 Segmentos, produtos e serviços  [disclosure]              │
│ 08 Ações sociais, contato e carreira                        │
├──────────────────────────────────────────────────────────────┤
│ CTA final e links para rotas já existentes                   │
└──────────────────────────────────────────────────────────────┘
```

### Assinatura

A assinatura da página será um **trilho de aço editorial**: a linha de marcos permanece visível como eixo de navegação, mas cada marcador representa uma mudança real na história ou na capacidade da empresa. O laranja aparece somente no marcador ativo, no progresso e nas ações; não haverá decoração industrial genérica, textura ou movimento contínuo.

### Comportamento do carrossel

- Não iniciar autoplay nem trocar slide durante a leitura.
- `ArrowLeft` e `ArrowRight` mudam o marco; `Home` e `End` vão ao primeiro/último.
- Botões anterior/próximo ficam desabilitados nos extremos e têm `aria-label` explícito.
- Cada marcador é um botão com nome incluindo ano e rótulo; o ativo recebe `aria-current="true"`.
- O painel de texto possui `aria-live="polite"` sem anunciar novamente a página inteira.
- Swipe horizontal funciona no touch, mas o trilho não pode impedir a rolagem vertical (`touch-action: pan-y`).
- Foco permanece no controle acionado; não há foco forçado no conteúdo a cada troca.
- Em `prefers-reduced-motion`, a troca é instantânea e todo o conteúdo permanece visível.

## 6. Contratos de conteúdo e arquitetura

### Arquivos e responsabilidades

- `docs/references/site textos (Recuperação Automática).docx`: cópia imutável da fonte Word usada para auditoria.
- `src/content/companyContent.ts`: tipos, capítulos, slides, links e notas editoriais publicáveis.
- `src/content/companyContent.test.ts`: cobertura de completude, placeholders e claims.
- `src/pages/Company/index.tsx`: composição da rota, sem dados longos inline.
- `src/pages/Company/HistoryCarousel.tsx`: interação, controles, estado e transição do marco ativo.
- `src/pages/Company/HistoryLongform.tsx`: renderização dos capítulos e disclosures do conteúdo completo.
- `src/pages/Company/companyStyles.ts`: estilos específicos da página e variantes responsivas; primitives compartilhados continuam em `src/pages/siteStyles.ts`.
- `src/pages/Company/Company.test.tsx`: testes de rota, ordem dos blocos, interação e semântica.
- `docs/rotas-e-conteudo.md`: documentar que `/empresa` abriga a história longa e o carrossel.
- `docs/arquitetura.md`: registrar a separação entre conteúdo, carrossel e long-form.
- `docs/qualidade-e-validacao.md`: acrescentar a matriz de validação do carrossel e conteúdo longo.

### Contratos TypeScript

```ts
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

export type HistoryBlock = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items?: Array<{ title: string; body?: string; items?: string[] }>;
  presentation: 'prose' | 'list' | 'accordion';
  sourceRefs: string[];
  editorialNotes?: string[];
};

export type CompanyContent = {
  hero: { eyebrow: string; title: string; body: string };
  slides: HistorySlide[];
  blocks: HistoryBlock[];
  actions: Array<{ label: string; href: string; status: EditorialStatus }>;
};
```

`sourceRefs` deve usar IDs estáveis como `history.foundation`, `structure.equipment`, `quality.iso-9001`, `esg.environmental`, `segments.siderurgia` e `contact.sales`. O código não deve depender de números de parágrafo para renderizar, mas o inventário deve manter esses números em comentário/documentação de auditoria para permitir conferência contra o Word.

### Decisão Shadcn

Usar o `Button` e o `Separator` já instalados. Durante a execução, consultar no registro oficial, dentro da raiz canônica:

```powershell
npx shadcn@latest info --json
npx shadcn@latest docs carousel accordion button separator
npx shadcn@latest search @shadcn -q carousel
```

Se a documentação confirmada da base `base-nova` oferecer o primitive compatível, adicionar somente `carousel` e `accordion` pela CLI oficial. Caso o primitive não cubra o trilho de marcos ou a interação de swipe sem conflito com a composição existente, manter a implementação local em `HistoryCarousel.tsx`, usando `Button` e `Separator`; não instalar uma biblioteca adicional nem um bloco comunitário.

### Decisão GSAP

- Registrar GSAP somente em `src/motion/gsap.ts`.
- Usar `useGSAP` com `scope` no wrapper do carrossel e `revertOnUpdate: true` quando `activeIndex` mudar.
- Transicionar o painel de conteúdo com `x`, `autoAlpha`, `duration: 0.35`, `ease: 'power2.out'` e direção derivada do índice.
- Usar `contextSafe` somente se um callback de pointer criar diretamente uma animação; handlers que apenas atualizam estado não precisam dele.
- Aplicar `data-reveal` nos capítulos longos e deixar `setupScrollReveals` cuidar do viewport.
- Não usar `scrub`, `pin`, `containerAnimation`, `ScrollSmoother`, `scrollerProxy` ou listeners React por pixel de scroll.
- Usar `gsap.matchMedia()` ou o sinal já centralizado pelo layout para duração zero em `prefers-reduced-motion`.

## 7. Plano de implementação

### Tarefa 1 — Consolidar a fonte Word e o inventário editorial

**Agentes:** Technical Writer líder, Product Manager revisor, Software Architect consultado.

**Arquivos:**

- Já salvo: `docs/references/site textos (Recuperação Automática).docx`.
- Criar: `src/content/companyContent.ts`.
- Criar: `src/content/companyContent.test.ts`.
- Modificar: `docs/README.md` para registrar a fonte em `docs/references/`.

- [x] **Passo 1: confirmar a fonte e a cópia do projeto**

Executar na raiz canônica:

```powershell
Get-Item -LiteralPath 'docs/references/site textos (Recuperação Automática).docx' | Select-Object FullName,Length
```

Esperado: o arquivo existe no projeto e tem 82.057 bytes; o Word original permanece em `C:\Users\Rv22\Documents`.

- [x] **Passo 2: extrair o inventário sem adicionar parser ao bundle**

Usar o Python fornecido pelo runtime do workspace e `python-docx` para confirmar 634 parágrafos, 0 tabelas e listar os títulos/índices de origem. O comando é uma auditoria de desenvolvimento; não importar `.docx` no navegador e não adicionar Python como dependência de produção.

- [x] **Passo 3: criar o modelo tipado de conteúdo**

Organizar todas as seções em `companyContent.blocks`, incluindo os capítulos históricos, identidade, estrutura, qualidade, ESG, segmentos, produtos/serviços, ações sociais, contato e carreira. Copiar os parágrafos publicáveis integralmente, normalizando apenas espaços, encoding e erros tipográficos confirmados; qualquer alteração de afirmação ou número deve ficar em `editorialNotes` para aprovação.

- [x] **Passo 4: transformar instruções internas em metadados**

Mapear `[link para...]`, `[fotos...]`, `[Clique aqui...]`, telefones incompletos, links de denúncia e destinos de subsites para `editorialNotes` e `actions` com `status: 'link-pending'` ou `asset-pending`. O renderizador não poderá imprimir esses textos diretamente.

- [x] **Passo 5: escrever testes de completude antes da página**

Cobrir, com nomes explícitos:

```ts
it('representa todos os grupos obrigatórios do Word', () => {
  expect(companyContent.blocks.map((block) => block.id)).toEqual(expect.arrayContaining([
    'history.origin', 'history.expansion', 'history.future', 'identity.mission-vision-values',
    'structure.capabilities', 'quality', 'esg', 'segments', 'catalog', 'social-actions',
    'contact', 'careers',
  ]));
});

it('não publica notas internas ou placeholders como copy', () => {
  const publicText = JSON.stringify(companyContent);
  expect(publicText).not.toMatch(/\[link|\[clique|XXXX-XXXX/i);
});

it('mantém claims de certificação distinguíveis por status', () => {
  expect(JSON.stringify(companyContent)).toMatch(/ISO 9001:2015/i);
  expect(JSON.stringify(companyContent)).toMatch(/ISO 14001/i);
  expect(JSON.stringify(companyContent)).toMatch(/ISO 45001/i);
  expect(companyContent.blocks.find((block) => block.id === 'quality')?.editorialNotes).toBeDefined();
});
```

- [x] **Passo 6: executar o ciclo da tarefa**

```powershell
npm run test:run -- src/content/companyContent.test.ts
npm run lint
```

Esperado: os testes de conteúdo passam e nenhum texto longo é colocado em componentes React.

- [ ] **Passo 7: commit somente se autorizado**

```powershell
git add -- 'docs/references/site textos (Recuperação Automática).docx' docs/README.md src/content/companyContent.ts src/content/companyContent.test.ts
git commit -m "content: map client history source"
```

### Tarefa 2 — Separar a página em composição, carrossel e leitura longa

**Agentes:** Software Architect líder, UX/UI Designer revisor, Frontend Engineer consultado.

**Arquivos:**

- Modificar: `src/pages/Company/index.tsx`.
- Criar: `src/pages/Company/HistoryCarousel.tsx`.
- Criar: `src/pages/Company/HistoryLongform.tsx`.
- Criar: `src/pages/Company/companyStyles.ts`.
- Testar: `src/pages/Company/Company.test.tsx`.

- [x] **Passo 1: congelar o contrato de composição**

Definir `Company` como composição de `Hero`, `HistoryCarousel`, `HistoryLongform` e CTA final. O componente não deve conter o array de slides, os parágrafos do Word ou estilos extensos.

- [x] **Passo 2: consultar o contexto atual do Shadcn**

Executar `npx shadcn@latest info --json` e conferir `base-nova`, `base`, alias `@`, `src/styles/shadcn.css`, `src/components/ui` e componentes instalados. Consultar a documentação oficial antes de adicionar qualquer primitive.

- [x] **Passo 3: implementar os estilos locais**

Usar `styled-components` em `companyStyles.ts` para o layout editorial específico, com tokens CSS semânticos onde já existirem. Reutilizar `Container`, `Hero`, `Section`, `SectionTitle`, `Button` e `Separator` em vez de duplicar primitives globais.

- [x] **Passo 4: escrever teste estrutural da nova página**

O teste deve renderizar a rota em `MemoryRouter` e verificar, nesta ordem: hero de história, região nomeada do carrossel, leitura completa, capítulos de identidade/estrutura/qualidade/ESG/catálogo e CTA final. O teste deve falhar se um bloco obrigatório não for montado.

- [x] **Passo 5: validar semântica básica**

Garantir um único `h1`, `h2` por capítulo principal, `h3` em itens internos, `<main>` herdado do layout, `section` com `aria-labelledby` e nenhum `div` usado como botão.

- [x] **Passo 6: executar testes e lint**

```powershell
npm run test:run -- src/pages/Company/Company.test.tsx
npm run lint
```

### Tarefa 3 — Implementar o carrossel narrativo acessível

**Agentes:** Frontend Engineer líder, UX/UI Designer e Accessibility & Performance Engineer revisores.

**Arquivos:**

- Modificar: `src/pages/Company/HistoryCarousel.tsx`.
- Modificar: `src/pages/Company/companyStyles.ts`.
- Criar: `src/pages/Company/HistoryCarousel.test.tsx` se a suíte da página ficar grande.
- Opcional, somente após consulta oficial: `src/components/ui/carousel.tsx` e `src/components/ui/accordion.tsx`.

- [x] **Passo 1: escrever os testes de interação**

Cobrir:

```ts
it('avança e volta entre marcos sem ultrapassar os limites', async () => {});
it('responde a ArrowLeft, ArrowRight, Home e End', async () => {});
it('marca somente o slide atual com aria-current', async () => {});
it('preserva o foco no controle acionado e anuncia o novo marco', async () => {});
it('aceita swipe horizontal sem bloquear a rolagem vertical', async () => {});
```

Os testes devem verificar título e `sourceRefs` do slide ativo, não apenas snapshots de classes.

- [x] **Passo 2: implementar o estado mínimo**

Usar `activeIndex`, `direction` e o estado de pointer estritamente local ao carrossel. Derivar `activeSlide` e `progress` durante a renderização. Não criar contexto global nem estado duplicado na página.

- [x] **Passo 3: manter a interação existente com controles explícitos**

Preservar marcadores e swipe; adicionar botões anterior/próximo com `Button`, rótulos acessíveis, disabled nos extremos, `aria-controls` e uma região `aria-live="polite"`. O trilho deve manter `touch-action: pan-y`.

- [x] **Passo 4: aplicar transição GSAP escopada**

Criar um ref no painel do slide e usar `useGSAP` em `HistoryCarousel` com `scope` e `revertOnUpdate: true`. Animar o painel atual com `x` e `autoAlpha`, usando `power2.out`; não animar `width`, `height`, `left`, `top`, margin ou padding. Em reduced motion, usar duração zero e deixar o painel imediatamente visível.

- [x] **Passo 5: manter o carrossel como resumo**

Cada slide deve exibir somente `marker`, `label`, `title`, `summary` e imagem editorial. O botão ou link “Ler capítulo” deve apontar para o `id` do bloco correspondente abaixo, sem duplicar o texto completo dentro do slide.

- [x] **Passo 6: validar a tarefa**

```powershell
npm run test:run -- src/pages/Company/HistoryCarousel.test.tsx src/pages/Company/Company.test.tsx
npm run lint
npm run build
```

### Tarefa 4 — Renderizar todo o conteúdo em long-form e disclosures

**Agentes:** Frontend Engineer líder, Technical Writer e UX/UI Designer revisores.

**Arquivos:**

- Modificar: `src/pages/Company/HistoryLongform.tsx`.
- Modificar: `src/pages/Company/companyStyles.ts`.
- Modificar: `src/content/companyContent.ts` somente para correções de contrato encontradas na renderização.
- Testar: `src/pages/Company/Company.test.tsx`.

- [x] **Passo 1: implementar capítulos narrativos visíveis**

Renderizar como leitura contínua os capítulos de origem, expansão, futuro, missão, visão e valores. Usar `SectionIntro`, `Separator`, parágrafos e listas sem transformar cada parágrafo em card.

- [x] **Passo 2: implementar estrutura e capacidades como informação escaneável**

Renderizar os números e capacidades do Word em lista ou grid semântico, preservando unidades, quantidades e limites. Cada item deve manter uma descrição curta e a referência de origem; não inventar unidade ou capacidade ausente.

- [x] **Passo 3: implementar qualidade, ESG e ações sociais**

Separar qualidade, ESG e ações sociais em capítulos próprios. ISO 9001:2015 deve aparecer como vigente somente conforme a fonte; ISO 14001 e ISO 45001 devem aparecer como transição com previsão para o primeiro semestre de 2027. Links incompletos ficam desabilitados ou não são renderizados até receberem destino aprovado.

- [x] **Passo 4: implementar catálogo técnico progressivamente revelável**

Usar `Accordion` oficial se a documentação Base UI confirmada for compatível; caso contrário, usar `<details>` sem dependência nova, mantendo nomes de seções, parágrafos e listas dentro do documento. Agrupar segmentos, produtos, serviços, projetos/equipamentos, diferenciais, concretos/pré-moldados e máquinas para construção. O conteúdo deve ser montado no HTML da página e apenas visualmente recolhido, sem carregamento assíncrono ou perda de leitura por teclado.

- [x] **Passo 5: implementar contato, carreira e CTA sem links falsos**

Renderizar vendas, compras, ouvidoria e Trabalhe Conosco com status editorial. Telefones `XXXX-XXXX`, links genéricos e “clique aqui” não podem virar links ativos; mostrar somente ações com destino conhecido, como rotas internas existentes.

- [x] **Passo 6: aplicar revelações de conteúdo**

Marcar somente blocos internos com `data-reveal`; não marcar o fundo ou a seção inteira. Usar a infraestrutura de `src/motion/siteMotion.ts` e confirmar que uma página longa não cria centenas de triggers individuais além do batch existente.

- [x] **Passo 7: testar cobertura do long-form**

Adicionar assertions para os títulos `Nossa História`, `A Expansão e Modernização`, `Os Últimos Anos`, `Missão`, `Visão`, `Valores`, `Descrição do Grupo`, `Qualidade`, `ESG`, `Segmentos`, `Produtos`, `Ações Sociais`, `Contato` e `Trabalhe Conosco`, além de um parágrafo representativo por grupo técnico.

- [x] **Passo 8: executar validação da tarefa**

```powershell
npm run test:run -- src/pages/Company/Company.test.tsx src/content/companyContent.test.ts
npm run lint
npm run build
```

### Tarefa 5 — Responsividade, acessibilidade e performance

**Agentes:** Accessibility & Performance Engineer líder, UX/UI Designer e QA Engineer revisores.

**Arquivos:**

- Modificar: `src/pages/Company/companyStyles.ts`.
- Modificar: `src/pages/Company/HistoryCarousel.tsx` somente para correções observadas.
- Modificar: `src/pages/Company/HistoryLongform.tsx` somente para correções semânticas observadas.
- Modificar: `docs/padroes-visuais.md` se um token ou padrão reutilizável for criado.

- [x] **Passo 1: validar larguras e overflow**

Testar 360, 768, 1024 e 1440 pixels. Confirmar que rail, marcadores, imagens, parágrafos, listas e disclosures não geram overflow horizontal nem texto cortado.

- [x] **Passo 2: validar teclado e leitor de tela**

Percorrer skip link, menu, hero, todos os controles do carrossel, disclosures e CTAs com Tab/Shift+Tab. Confirmar foco visível, ordem lógica, nomes acessíveis, `aria-current`, `aria-live` e associação entre slide e capítulo.

- [x] **Passo 3: validar reduced motion**

Ativar `prefers-reduced-motion: reduce`, recarregar `/empresa`, mudar slides e atravessar a página. Confirmar que nenhum conteúdo fica com `visibility: hidden`, `opacity: 0` ou transform residual.

- [x] **Passo 4: validar imagens e deslocamento de layout**

Manter dimensões reservadas, `alt` descritivo e status editorial para cada imagem. O hero e o primeiro painel devem carregar sem `loading="lazy"`; demais imagens podem ser lazy quando não forem necessárias à primeira leitura. Registrar qualquer URL remota como risco operacional.

- [x] **Passo 5: medir custo de conteúdo**

Comparar tamanho do build e comportamento de scroll antes/depois. Não criar centenas de componentes animados, timers ou listeners por parágrafo. Caso o DOM completo do catálogo prejudique mobile, manter todos os textos no disclosure sem criar renderização duplicada ou carregamento assíncrono.

- [x] **Passo 6: executar a suíte completa**

```powershell
npm run test:run
npm run lint
npm run build
```

### Tarefa 6 — Documentar a nova convenção e revisar o diff

**Agentes:** Technical Writer líder, Software Architect e Code Reviewer revisores.

**Arquivos:**

- Modificar: `docs/rotas-e-conteudo.md`.
- Modificar: `docs/arquitetura.md`.
- Modificar: `docs/qualidade-e-validacao.md`.
- Modificar: `docs/padroes-visuais.md` se necessário.
- Revisar: todos os arquivos alterados no diff.

- [x] **Passo 1: documentar a rota e a fonte**

Registrar que `/empresa` mantém a responsabilidade de história/identidade, que o carrossel é um resumo interativo sem autoplay e que o conteúdo longo vem do mapa estruturado de `companyContent.ts`.

- [x] **Passo 2: documentar o contrato de conteúdo**

Explicar `sourceRefs`, `EditorialStatus`, a diferença entre copy pública e `editorialNotes`, e o procedimento para acrescentar um novo bloco sem perder rastreabilidade do Word.

- [x] **Passo 3: revisar o diff com foco de risco**

O Code Reviewer deve conferir: preservação de `/empresa`, ausência de claims inventados, ausência de placeholders visíveis, semântica do carrossel, cleanup GSAP, regressão do `SiteLayout`, bundle e testes. Achados importantes bloqueiam a execução do plano até correção.

- [x] **Passo 4: registrar a validação final**

Anexar ao relatório de execução os comandos `npm run test:run`, `npm run lint`, `npm run build`, viewports testados, reduced motion, teclado e resultado do refresh direto em `/empresa`.

- [ ] **Passo 5: commit somente se autorizado**

```powershell
git add src/content/companyContent.ts src/content/companyContent.test.ts src/pages/Company docs
git commit -m "feat: structure complete company history"
```

## 8. Critérios de aceite

- `/empresa` continua acessível diretamente, por refresh e pelos links atuais.
- O hero comunica história, não apenas catálogo de serviços.
- O carrossel permanece interativo, mas não é a única forma de acessar o conteúdo.
- O carrossel usa o conteúdo do Word, não o array textual antigo inline.
- O usuário consegue avançar, voltar, selecionar marcadores, usar teclado e fazer swipe sem travar a rolagem vertical.
- O conteúdo completo dos grupos definidos no brief aparece após o carrossel, em leitura contínua ou disclosures acessíveis.
- Todos os grupos de origem do Word possuem `sourceRefs` e uma representação verificável na página ou em uma nota editorial de asset/link pendente.
- Notas internas, placeholders, contatos incompletos e links não aprovados não são exibidos como copy ou CTA ativo.
- Missão, visão, valores, estrutura, qualidade, ESG, segmentos, produtos, serviços, ações sociais, contato e carreira têm hierarquia semântica própria.
- A página funciona em 360, 768, 1024 e 1440 pixels sem overflow horizontal.
- O foco é visível, os nomes dos controles são acessíveis e o estado ativo não depende apenas de cor.
- `prefers-reduced-motion` deixa conteúdo visível e remove deslocamento temporal.
- GSAP usa escopo, cleanup, transform/autoAlpha e não introduz scroll hijacking.
- O build não cria dependências novas além dos primitives Shadcn que forem comprovadamente necessários.
- `npm run test:run`, `npm run lint` e `npm run build` passam.
- A documentação descreve a nova fonte de conteúdo e a convenção de implementação.

## 9. Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Word é muito maior do que uma página de história típica | Manter capítulos narrativos visíveis e catálogo técnico em disclosures; preservar todos os textos sem transformar tudo em cards. |
| Anotações internas viram copy publicada | Separar `editorialNotes` de `paragraphs` e testar ausência de marcadores/padrões de placeholder. |
| Claims de certificação ou capacidade ainda precisam de aprovação | Manter `sourceRefs` e `EditorialStatus`; bloquear CTA/claim quando a fonte não confirmar o estado. |
| Componentes Shadcn podem divergir entre Base UI e Radix | Consultar `info` e `docs` antes de adicionar; usar apenas APIs da base instalada e manter fallback local simples. |
| Conteúdo longo aumenta custo de DOM e scroll | Agrupar blocos, usar um único render path, batch de revelações e medição em viewport móvel. |
| GSAP e troca de slides acumulam estilos ou triggers | `useGSAP` com scope/revertOnUpdate, cleanup local e testes de montagem/desmontagem. |
| Imagens do cliente ainda não estão disponíveis | Usar estado `asset-pending` e layout reservado; não representar pessoas ou instalações com imagens genéricas como se fossem da Vulcano. |
| Mudança em `Company` afeta navegação e layout compartilhado | Preservar `SiteLayout`, `Container`, rota e links; executar regressão de todas as rotas após integração. |

## 10. Auto-revisão do plano

- **Cobertura:** história, expansão, futuro, identidade, estrutura, qualidade, ESG, catálogo, ações sociais, contato e carreira têm tarefas e critérios explícitos.
- **Arquivos:** conteúdo, carrossel, long-form, estilos, testes e documentação têm limites de responsabilidade definidos.
- **Interfaces:** `CompanyContent`, `HistorySlide`, `HistoryBlock`, `EditorialStatus`, `sourceRefs` e a composição da página estão nomeados antes da implementação.
- **Placeholders:** o plano não depende de `TODO`, `TBD` ou decisão implícita; bloqueios editoriais têm status e comportamento definidos.
- **Motion:** o plano segue o runtime GSAP existente e proíbe técnicas incompatíveis com a documentação do projeto.
- **Validação:** cada tarefa termina com teste, lint/build ou revisão independente; a suíte completa aparece na tarefa final.

## 11. Execução

Este documento é o plano de implementação e está salvo em `plans/`. A implementação não deve começar antes da revisão do plano pelo responsável do produto e da escolha do método de execução. Como a mudança atravessa conteúdo, UX, acessibilidade, motion e uma página longa, a recomendação é **Subagent-driven**, com o Product Manager/Software Architect validando a Tarefa 1, o Frontend Engineer executando as Tarefas 2–4, o Accessibility & Performance Engineer validando a Tarefa 5 e o Code Reviewer fechando a Tarefa 6.
