# Plano 001 — Home humanizada e fundação visual

> **Status:** executado na branch `codex/home-humanizada`; a publicação permanece bloqueada até a entrega e aprovação das fotografias reais e demais gates editoriais.

## 1. Identificação

- **Objetivo:** transformar a Home na primeira expressão da nova fase institucional da Metalúrgica Vulcano, apresentando capacidade industrial por meio das pessoas, do trabalho real e da história da empresa.
- **Incremento:** 001.
- **Agente responsável:** [Product Manager](../agents/product-manager.md).
- **Agentes especialistas:** [UX/UI Designer](../agents/ux-ui-designer.md), [Software Architect](../agents/software-architect.md), [Frontend Engineer](../agents/frontend-engineer.md), [Accessibility & Performance Engineer](../agents/accessibility-performance-engineer.md) e [QA Engineer](../agents/qa-engineer.md).
- **Skills:** `frontend-design` para direção visual e UX; `shadcn` para a fundação de componentes durante a implementação.
- **Fontes:** documentação em [docs/README.md](../docs/README.md), código atual e o documento corporativo `site textos (Recuperação Automática).docx`.

## 2. Problema e resultado esperado

A Home atual comunica competência técnica, mas se apoia em fotos genéricas do Unsplash, carrossel automático, blocos predominantemente comerciais e dados que não coincidem integralmente com o novo documento corporativo. Ela mostra a indústria, mas ainda não mostra quem realiza o trabalho nem como é trabalhar dentro da Vulcano.

O resultado deste incremento deve ser uma Home:

- humana sem perder credibilidade técnica;
- baseada em pessoas e operações reais da Vulcano;
- editorial, documental e específica para o universo metalúrgico;
- consistente com os dados aprovados da empresa;
- acessível, responsiva e preparada para orientar os próximos planos;
- construída sobre uma adoção incremental de Shadcn/UI, sem reescrever de uma vez as páginas existentes.

## 3. Decisão de escopo

### Incluído

- auditoria do conteúdo atual da Home contra o documento fornecido;
- direção visual e narrativa da nova Home;
- definição dos conteúdos humanos e das fotografias necessárias;
- fundação de tokens e primitives Shadcn/UI;
- implementação da nova Home por seções reutilizáveis;
- atualização dos dados institucionais exibidos na Home;
- testes automatizados básicos para o novo conteúdo e componentes;
- validação de acessibilidade, responsividade, performance e regressão visual;
- documentação das decisões reutilizáveis pelos planos seguintes.

### Fora do escopo

- reescrita completa das páginas internas;
- catálogo técnico detalhado de produtos;
- página completa de história, ESG, qualidade ou carreiras;
- integração real de formulário, CRM, Gupy ou outro serviço externo;
- CMS ou backend;
- publicação em produção;
- uso de depoimentos, nomes, fotos ou números não aprovados pela empresa;
- migração total de styled-components para Tailwind.

## 4. Descobertas que afetam a implementação

### Conteúdo

- O documento oficial informa fundação em **1º de julho de 1974**, em Barra Mansa/RJ, e 50 anos completados em 2024.
- O documento informa **34.500 m²**, **3 unidades vizinhas**, **17.000 m² cobertos** e **11 pontes rolantes**.
- A Home atual exibe quatro unidades, `+200k toneladas` e atuação `LATAM`; essas alegações não aparecem confirmadas no material analisado.
- A ISO 9001:2015 é apresentada como certificação renovada. ISO 14001 e ISO 45001 aparecem como objetivos previstos para o primeiro semestre de 2027 e não podem ser apresentadas como certificações atuais.
- O documento possui indicações de links, contatos incompletos, notas editoriais e erros de revisão; ele é fonte de conteúdo, não texto pronto para publicação sem aprovação.
- O arquivo não contém imagens incorporadas. A estratégia humana depende de uma produção ou seleção fotográfica separada.

### Código

- A Home atual concentra a página em `src/pages/Home/index.tsx` e reutiliza `src/pages/siteStyles.ts`.
- Conteúdo compartilhado fica em `src/content/siteData.ts`.
- O projeto usa React 19, TypeScript, Vite, React Router e styled-components.
- Não existe suíte de testes automatizados.
- A configuração ainda não possui Tailwind, aliases `@/*`, `components.json` ou primitives Shadcn.

## 5. Direção de experiência e interface

### Conceito: “Gente que transforma engenharia em realidade”

A capacidade industrial será apresentada como consequência do trabalho de pessoas reais. A página alternará planos humanos, detalhes de ofício e dados técnicos, evitando uma sequência de cards comerciais genéricos.

### Assinatura visual

O elemento distintivo será o bloco editorial **“Por dentro do trabalho”**: uma sequência de três momentos reais da operação, com fotografias em escalas diferentes e legendas objetivas contendo atividade, área e contexto. Quando houver autorização, cada momento poderá incluir primeiro nome, função e uma frase curta aprovada.

Esse bloco deve parecer um registro documental da rotina, não uma galeria de banco de imagens ou uma campanha publicitária artificial.

### Linguagem visual

- **Paleta:** preservar azul marinho `#11182d`, azul institucional `#063e66`, laranja de ação `#fb7900`, texto secundário `#475569`, fundo claro `#f8fafc` e borda `#e2e8f0`; converter os valores em tokens semânticos.
- **Tipografia:** avaliar `IBM Plex Sans Condensed` para títulos e `IBM Plex Sans` para leitura; manter Open Sans como fallback durante a transição.
- **Composição:** grid editorial, bastante respiro, divisões lineares e fotos com legendas; cantos discretos e cards apenas quando a informação exigir uma unidade autônoma.
- **Fotografia:** luz real, pessoas identificáveis em contexto de trabalho, EPIs corretos, variedade de funções e enquadramentos que mostrem colaboração e escala.
- **Movimento:** entradas sutis e acionadas por scroll; sem carrossel automático. Respeitar `prefers-reduced-motion`.
- **Tom:** direto, respeitoso e concreto. Evitar superlativos sem evidência e frases corporativas vazias.

### Referências de princípio

As referências não serão copiadas visualmente. Elas validam princípios de conteúdo:

- [WEG — Trabalhe Conosco](https://www.weg.net/institutional/BR/es/career): relatos associados a nome, função e trajetória real.
- [Gerdau — Histórico e perfil corporativo](https://ri.gerdau.com/a-gerdau/historico-e-perfil-corporativo/): história, propósito, pessoas e segurança apresentados como uma narrativa única.
- [Vallourec — Pessoas](https://brazil.vallourec.com/pessoas/): carreira conectada a segurança, colaboração, desenvolvimento e atuação industrial.

## 6. Arquitetura de conteúdo da Home

### 1. Hero — pessoas antes da máquina

- Fotografia real de uma equipe ou profissional em atividade, com espaço de leitura para o texto.
- Eyebrow: localização ou natureza do trabalho, não uma lista de serviços.
- Título centrado na união entre pessoas, engenharia e 50 anos de história.
- Texto curto com atuação e origem em Barra Mansa.
- CTA primário para soluções/contato e secundário para conhecer a empresa.
- Sem carrossel automático.

### 2. “50 anos construídos por pessoas”

- Resumo da fundação em 1974 e da evolução do portfólio.
- Foto histórica ou documento de acervo, se fornecido e autorizado.
- Link para a futura página completa de história.

### 3. “Por dentro do trabalho”

- Três registros reais: preparação, execução e controle/entrega.
- Legenda informativa para cada imagem.
- Nome e fala somente com autorização formal.
- Não inventar personagem, depoimento ou cargo.

### 4. Estrutura que apoia o time

- Métricas confirmadas: 3 unidades, 34.500 m² totais, 17.000 m² cobertos e 11 pontes rolantes.
- Cada número deve explicar o que ele permite realizar, em vez de aparecer isolado como decoração.

### 5. Soluções e segmentos

- Visão resumida de siderurgia, caldeiraria, serviços industriais, projetos sob encomenda, concretos e máquinas.
- Links para rotas existentes ou para páginas que serão tratadas nos próximos planos.
- Evitar detalhar todo o catálogo nesta etapa.

### 6. Segurança, qualidade e futuro

- Segurança e respeito à vida tratados como prática de trabalho.
- ISO 9001:2015 apresentada apenas após confirmação documental final.
- ISO 14001 e ISO 45001 descritas como metas em andamento, com data, nunca como certificações conquistadas.
- Ponte para os futuros conteúdos de Qualidade e ESG.

### 7. “Construa com a gente”

- CTA de carreira com fotografia real e linguagem acolhedora.
- Enquanto não houver sistema de vagas confirmado, direcionar somente para um canal aprovado; não criar falsa listagem de vagas.

### 8. Encerramento comercial

- CTA simples para contato comercial.
- Não publicar telefone ou WhatsApp enquanto os números estiverem como `XXXX-XXXX` no documento.

## 7. Pré-requisitos de conteúdo

Antes da implementação visual final, a empresa deve entregar e aprovar:

- de 6 a 10 fotografias horizontais e verticais em alta resolução;
- autorização de uso de imagem das pessoas identificáveis;
- nomes, funções e áreas corretos, quando forem exibidos;
- até três depoimentos curtos, opcionais, aprovados por quem aparece e pela empresa;
- confirmação dos números de estrutura e capacidade;
- certificado ou confirmação oficial da ISO 9001 vigente;
- redação aprovada sobre o estágio das ISO 14001 e 45001;
- destino oficial de carreira e contato comercial;
- logotipos de clientes somente se houver autorização de exibição;
- revisão técnica das práticas e EPIs visíveis nas fotos.

Se esses itens não estiverem disponíveis, a página pode ser desenvolvida estruturalmente, mas não deve ser considerada pronta para publicação. Fotos de banco não devem representar falsamente colaboradores da Vulcano.

## 8. Arquitetura técnica aprovada para o plano

### Adoção híbrida e incremental

~~~text
Páginas existentes
└── styled-components e siteStyles.ts preservados

Nova Home
├── src/components/ui/       primitives Shadcn
├── src/components/brand/    linguagem visual Vulcano
├── src/pages/Home/sections/ seções específicas da Home
└── src/content/homeContent.ts conteúdo estruturado e aprovado
~~~

O Shadcn será usado para comportamento, acessibilidade e variantes. A identidade deve ser implementada em tokens e composições `brand`, nunca por alterações aleatórias nos arquivos gerados.

## 9. Plano de implementação

### Tarefa 1 — Criar a linha de base e os testes

**Arquivos:**

- modificar `package.json` e `package-lock.json`;
- criar `vitest.config.ts`;
- criar `src/test/setup.ts`;
- criar `src/pages/Home/Home.test.tsx`.

**Passos:**

1. Criar a branch `codex/home-humanizada` quando a execução do plano for autorizada.
2. Registrar a Home atual em capturas desktop e mobile para comparação, sem usar as imagens como referência de conteúdo final.
3. Adicionar Vitest, Testing Library, jest-dom, user-event e jsdom.
4. Adicionar scripts `test` e `test:run`.
5. Escrever primeiro um teste de caracterização da rota `/` que confirme título principal, CTAs e ausência de quebra na renderização.
6. Executar o teste e confirmar que a linha de base está estável antes da refatoração.

**Validação:**

~~~bash
npm run test:run
npm run lint
npm run build
~~~

### Tarefa 2 — Inicializar Tailwind v4 e Shadcn/UI

**Arquivos:**

- modificar `package.json` e `package-lock.json`;
- modificar `vite.config.ts`;
- modificar `tsconfig.json` e `tsconfig.app.json`;
- modificar `src/main.tsx`;
- criar `components.json`;
- criar `src/styles/shadcn.css`;
- criar `src/lib/utils.ts`;
- criar `src/components/ui/button.tsx`;
- criar `src/components/ui/separator.tsx`.

**Passos:**

1. Usar a skill `shadcn` e executar `npx shadcn@latest info --json` no diretório canônico.
2. Instalar `tailwindcss` e `@tailwindcss/vite`.
3. Configurar o plugin do Tailwind no Vite e o alias `@` para `./src`.
4. Configurar `baseUrl` e `paths` para `@/*` no TypeScript.
5. Inicializar Shadcn para Vite com base Radix e CSS variables.
6. Definir `src/styles/shadcn.css` como arquivo global do Tailwind/tema e importá-lo em `src/main.tsx`.
7. Adicionar `Button` e `Separator` usando a CLI, após consultar a documentação da versão instalada.
8. Revisar todos os arquivos gerados, sem sobrescrever alterações existentes automaticamente.
9. Testar todas as rotas para detectar efeitos do reset global sobre styled-components.

**Validação:**

~~~bash
npx shadcn@latest info --json
npm run test:run
npm run lint
npm run build
~~~

### Tarefa 3 — Criar tokens e primitives de marca

**Arquivos:**

- modificar `src/styles/shadcn.css`;
- criar `src/components/brand/SectionIntro.tsx`;
- criar `src/components/brand/EditorialMedia.tsx`;
- criar `src/components/brand/MetricStatement.tsx`;
- criar `src/components/brand/CallToAction.tsx`;
- criar testes ao lado dos componentes ou em `src/components/brand/__tests__/`.

**Passos:**

1. Mapear a paleta atual para tokens semânticos de fundo, texto, ação, destaque, muted e borda.
2. Configurar tipografia, largura de container, espaçamentos e raios discretos.
3. Implementar primitives editoriais sem transformar todas as áreas em cards.
4. Garantir headings semânticos, legendas com `figcaption`, foco visível e links com nomes claros.
5. Criar testes de renderização e semântica antes de conectar as seções da Home.

**Validação:**

~~~bash
npm run test:run
npm run lint
npm run build
~~~

### Tarefa 4 — Estruturar conteúdo aprovado e impedir placeholders

**Arquivos:**

- criar `src/content/homeContent.ts`;
- criar `src/content/homeContent.test.ts`;
- modificar `src/content/siteData.ts` apenas onde os dados forem compartilhados com outras rotas.

**Passos:**

1. Definir tipos para hero, história, registros de trabalho, métricas, segmentos, compromissos e CTAs.
2. Importar somente fatos presentes no documento e aprovados pela empresa.
3. Manter metadados de imagem: fonte local, texto alternativo, legenda, crédito e confirmação editorial.
4. Criar testes que rejeitem `XXXX`, `[link`, `[clique aqui`, textos vazios e URLs remotas usadas como imagem principal.
5. Criar testes que diferenciem certificação vigente de meta futura.
6. Remover da Home alegações sem confirmação, incluindo `+200k`, `LATAM` e quatro unidades, salvo se a empresa apresentar fonte atualizada.

**Validação:**

~~~bash
npm run test:run -- src/content/homeContent.test.ts
~~~

### Tarefa 5 — Implementar a nova narrativa da Home

**Arquivos:**

- modificar `src/pages/Home/index.tsx`;
- criar `src/pages/Home/sections/HumanHero.tsx`;
- criar `src/pages/Home/sections/LegacySection.tsx`;
- criar `src/pages/Home/sections/InsideWorkSection.tsx`;
- criar `src/pages/Home/sections/StructureSection.tsx`;
- criar `src/pages/Home/sections/SolutionsSection.tsx`;
- criar `src/pages/Home/sections/CultureSection.tsx`;
- criar `src/pages/Home/sections/CareersSection.tsx`;
- criar `src/pages/Home/sections/ContactSection.tsx`;
- adicionar imagens aprovadas em `src/assets/people/` e `src/assets/history/`.

**Passos:**

1. Escrever testes da Home para a ordem das seções e os links principais.
2. Substituir o carrossel por um hero estático com fotografia real e `picture` responsivo.
3. Implementar cada seção com conteúdo vindo de `homeContent.ts`.
4. Usar primitives Shadcn somente quando houver necessidade real de interação ou variante.
5. Garantir que cada fotografia informativa tenha `alt` e legenda complementares, sem repetição inútil.
6. Otimizar imagens e definir dimensões para evitar deslocamento de layout.
7. Manter os links para rotas existentes; links de páginas futuras só entram quando a rota correspondente existir.

**Validação:**

~~~bash
npm run test:run -- src/pages/Home/Home.test.tsx
npm run lint
npm run build
~~~

### Tarefa 6 — Validar a experiência completa

**Arquivos:**

- modificar testes conforme falhas reais encontradas;
- modificar `docs/padroes-visuais.md` e `docs/arquitetura.md` com as decisões aprovadas;
- modificar `docs/qualidade-e-validacao.md` com o novo fluxo de testes.

**Passos:**

1. Revisar a Home em 360, 768, 1024 e 1440 pixels.
2. Navegar somente por teclado e conferir ordem de foco, link de salto e CTAs.
3. Testar com movimento reduzido.
4. Conferir contraste e zoom de 200%.
5. Verificar que nenhuma foto corta rosto, EPI ou ação essencial em breakpoints diferentes.
6. Auditar peso, formato e carregamento das imagens; a imagem LCP do hero não deve usar lazy loading.
7. Executar uma regressão rápida nas demais rotas por causa do Tailwind global.
8. Fazer revisão editorial final com a empresa e registrar a aprovação dos fatos e imagens.

**Validação final:**

~~~bash
npm run test:run
npm run lint
npm run build
~~~

## 10. Critérios de aceite

- A Home abre com uma fotografia real e aprovada de pessoas trabalhando na Vulcano.
- O carrossel automático e as imagens genéricas principais foram removidos.
- A página explica quem é a empresa, como o trabalho acontece e quais capacidades esse trabalho sustenta.
- Números e certificações coincidem com fontes corporativas aprovadas.
- Metas futuras não são apresentadas como conquistas atuais.
- Pessoas identificáveis possuem autorização registrada; nomes, funções e falas foram aprovados.
- Nenhum placeholder, contato incompleto ou link editorial aparece na interface.
- A página não usa fotos de banco para representar falsamente colaboradores.
- A composição evita uma sequência genérica de cards e preserva a assinatura “Por dentro do trabalho”.
- A Home funciona por teclado, com foco visível, headings em ordem e textos alternativos adequados.
- O layout funciona em mobile, tablet e desktop, inclusive com zoom de 200%.
- Movimento reduzido é respeitado.
- Imagens estão locais, otimizadas, dimensionadas e com estratégia responsiva.
- `npm run test:run`, `npm run lint` e `npm run build` finalizam sem erro.
- Rotas antigas continuam funcionais após a entrada do Tailwind/Shadcn.
- A documentação técnica e visual foi atualizada.

## 11. Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Ausência de fotografias reais | Tratar o pacote de imagens como bloqueio de publicação, não substituí-lo por pessoas fictícias. |
| Dados divergentes entre site e documento | Manter matriz de fatos e exigir aprovação corporativa antes da publicação. |
| Conflito entre Tailwind e styled-components | Adoção por página, teste das rotas antigas e rollback isolado do CSS global. |
| Visual genérico de biblioteca | Usar Shadcn apenas como primitive e concentrar a linguagem Vulcano em `components/brand`. |
| Exposição indevida de colaboradores | Consentimento, revisão de nomes/funções e participação do agente de Segurança quando houver dados pessoais. |
| Fotos mostrarem prática insegura | Revisão técnica de EPI e procedimento antes de aprovar cada imagem. |
| Página pesada por excesso de mídia | Formatos modernos, `srcset`, dimensões explícitas e orçamento de performance. |

## 12. Sequência prevista após a validação

Somente este plano será criado agora. A divisão sugerida para os próximos incrementos é:

1. **Plano 002:** Empresa, história, missão, visão e valores.
2. **Plano 003:** Pessoas, cultura, ações sociais e Trabalhe Conosco.
3. **Plano 004:** Qualidade, segurança, ESG e certificações.
4. **Plano 005:** Arquitetura de segmentos e navegação técnica.
5. **Plano 006:** Siderurgia e catálogo de produtos.
6. **Plano 007:** Caldeiraria, serviços industriais e projetos sob encomenda.
7. **Plano 008:** Concretos, máquinas e demais linhas do grupo.
8. **Plano 009:** Contato, fornecedores, ouvidoria e integrações.
9. **Plano 010:** revisão final de conteúdo, SEO, acessibilidade, performance e publicação.

Essa sequência pode mudar depois da validação do plano 001 e da priorização comercial da empresa.

## 13. Registro da execução

- Fundamentos de Vitest, Testing Library, Tailwind v4 e Shadcn/UI adicionados.
- Preset efetivo registrado em `components.json`: `base-nova` com primitives Base UI.
- Home substituída por seções humanizadas em `src/pages/Home/sections`.
- Conteúdo factual centralizado em `src/content/homeContent.ts`.
- Primitives de marca criadas em `src/components/brand`.
- Link de salto de acessibilidade adicionado ao layout compartilhado.
- Documentação de arquitetura, desenvolvimento, padrões visuais e qualidade atualizada.
- Validação executada: `npm run test:run` (4 arquivos, 7 testes aprovados), `npm run lint` (sem erros) e `npm run build` (concluído).
- CTA revisado para usar links semânticos com as variantes do Shadcn, evitando o conflito de acessibilidade do Base UI ao renderizar navegação como botão.
- Checagem visual final em servidor local: Home carregada com skip link, CTAs como links e somente os avisos futuros já conhecidos do React Router.
- Imagens temporárias do Unsplash integradas como `preview-asset`, com badge e legendas que impedem sua interpretação como registros da Vulcano.
- Seção histórica centralizada dentro do container, hero reduzido para uma viewport, seção de carreira unificada no laranja institucional e rodapé atualizado com Instagram, LinkedIn e WhatsApp.

### Pendências para considerar a Home publicável

- substituir os estados `preview-asset` por fotografias reais fornecidas e autorizadas pela empresa;
- revisar e aprovar definitivamente os textos institucionais;
- confirmar contatos, links de carreira e demais links comerciais;
- repetir a revisão visual com as fotos finais, incluindo enquadramento de rostos, EPIs e desempenho das imagens.
