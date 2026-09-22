# Header liquid glass e motion no scroll — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fazer o cabeçalho iniciar como uma superfície branca sólida e assumir, após o início da rolagem, uma aparência liquid glass com blur e transição suave; revelar progressivamente os conteúdos conforme entram na viewport, sem substituir o scroll nativo.

**Architecture:** Centralizar GSAP, `@gsap/react` e ScrollTrigger em um módulo de movimento; manter a lógica global no `SiteLayout`; separar funções testáveis para o estado do cabeçalho e para as revelações; usar atributos semânticos de movimento na Home e preservar a classe `.reveal` das páginas existentes durante a migração.

**Tech Stack:** React 19, TypeScript 6, Vite 8, styled-components 6, GSAP 3, `@gsap/react`, ScrollTrigger, Vitest e Testing Library.

**Spec:** `plans/plan-002-header-liquid-glass-e-motion-no-scroll.md#brief-de-design`

## Global Constraints

- Trabalhar apenas na raiz canônica `C:\Users\Rv22\Desktop\calderaria`.
- Não editar, mover ou remover a cópia aninhada `C:\Users\Rv22\Desktop\calderaria\Caldeiraria`.
- Não introduzir ScrollSmoother, Lenis, `scrollerProxy`, pinning, parallax ou scroll hijacking nesta entrega.
- Manter o scroll nativo do navegador; “motion no scroll” significa entrada de conteúdo acionada pela posição na viewport.
- Não criar estado React atualizado a cada evento de scroll.
- Animar preferencialmente `transform` e `opacity`; o blur do cabeçalho só muda quando o limiar é atravessado.
- Toda animação deve respeitar `prefers-reduced-motion`.
- Não esconder conteúdo de tecnologias assistivas e não depender da animação para transmitir informação.
- Não criar commits, push, merge ou publicação sem autorização explícita.

## Review Focus

- O cabeçalho precisa estar visualmente branco e sólido em `scrollY = 0`, sem sombra ou blur residual.
- Ao cruzar o limiar, a mudança para liquid glass não pode provocar salto de layout, tremor ou perda de contraste.
- ScrollTriggers e tweens não podem se acumular após navegação entre rotas ou remontagem em React Strict Mode.
- Conteúdo deve permanecer visível quando JavaScript falhar e aparecer imediatamente quando movimento reduzido estiver ativo.
- O menu mobile, dropdown de Pessoas, foco por teclado e skip link devem continuar funcionais.
- A animação não pode degradar sensivelmente o scroll em celular.

---

## 1. Identificação

- **Plano:** 002
- **Feature:** cabeçalho liquid glass e revelação progressiva no scroll
- **Estado:** aguardando validação para execução
- **Dependência funcional:** Plano 001 — Home humanizada e fundação visual
- **Escopo:** layout compartilhado, Home, infraestrutura de animação, testes e documentação

## 2. Agentes selecionados

| Papel | Responsabilidade neste plano |
| --- | --- |
| **UX/UI Designer — líder** | Definir os dois estados do cabeçalho, ritmo, hierarquia, intensidade e ordem das revelações. |
| **Software Architect** | Manter a responsabilidade global no `SiteLayout` e evitar acoplamento entre páginas e GSAP. |
| **Frontend Engineer** | Implementar refs, hooks, módulos TypeScript, styled-components e integração com React Router. |
| **Accessibility & Performance Engineer** | Validar movimento reduzido, contraste, foco, custo do blur, cleanup e comportamento mobile. |
| **QA Engineer** | Cobrir contratos automatizados e executar a matriz visual e funcional. |
| **Technical Writer** | Registrar o padrão de movimento, a configuração do GSAP e as regras para futuras páginas. |

Não é necessário criar um agente novo: as responsabilidades já estão cobertas pelo catálogo de `agents/README.md`.

## 3. Skills e dependências

As skills oficiais do repositório `greensock/gsap-skills` já foram instaladas localmente em `.agents/skills/`:

- `gsap-core`
- `gsap-frameworks`
- `gsap-performance`
- `gsap-plugins`
- `gsap-react`
- `gsap-scrolltrigger`
- `gsap-timeline`
- `gsap-utils`

Durante a execução, consultar principalmente `gsap-react`, `gsap-scrolltrigger`, `gsap-core`, `gsap-timeline` e `gsap-performance`. As skills orientam a implementação, mas não substituem as dependências de runtime `gsap` e `@gsap/react`, que deverão ser adicionadas ao projeto na Tarefa 1.

## 4. Brief de design

### 4.1 Cabeçalho no topo

- Fundo branco sólido (`#ffffff`).
- Sem blur e sem sombra projetada.
- Borda inferior transparente.
- Altura atual preservada para não alterar o layout.
- Logo, navegação, botão de orçamento, dropdown e menu mobile mantêm o contraste atual.

### 4.2 Cabeçalho após rolagem

- Ativação ao ultrapassar **24 px** de rolagem.
- Fundo branco translúcido, alvo `rgba(255, 255, 255, 0.74)`.
- `backdrop-filter: blur(18px) saturate(150%)` e equivalente com prefixo WebKit.
- Borda inferior branca translúcida e sombra azul-marinho suave.
- Transição de **350 ms**, `power2.out`, com `overwrite: 'auto'`.
- Fallback sem `backdrop-filter`: branco com opacidade alta e sombra, mantendo legibilidade.
- Em movimento reduzido, o estado ainda muda, mas sem interpolação temporal.

### 4.3 Revelação de conteúdo

- Entradas discretas com `autoAlpha: 0 → 1` e `y: 24 → 0`.
- Duração de **650 ms**, `power2.out`.
- Disparo quando o topo do elemento alcança aproximadamente **84%** da viewport.
- Elementos próximos entram em lote, com stagger máximo de **80 ms**.
- Cada conteúdo aparece apenas uma vez por montagem de rota.
- Fundos de seção não são animados; somente blocos internos de texto, mídia, métricas e listas.
- Na Home, o hero não recebe ScrollTrigger: sua entrada continua sendo tratada pela transição de rota já existente.

### 4.4 O que não será animado

- Não haverá contadores numéricos, texto letra a letra, paralaxe, seções fixadas ou movimento infinito.
- O botão flutuante de WhatsApp não será ligado ao progresso do scroll.
- Hover e focus atuais permanecem em CSS.
- Não haverá animação contínua do blur durante cada pixel de rolagem.

## 5. Contrato técnico

### 5.1 Módulos

```ts
// src/motion/gsap.ts
export { gsap, ScrollTrigger, useGSAP };

// src/motion/siteMotion.ts
export const HEADER_GLASS_START_PX = 24;
export const REVEAL_SELECTOR = '[data-reveal], .reveal';

export function setupHeaderMotion(
  header: HTMLElement,
  reducedMotion: boolean,
): () => void;

export function setupScrollReveals(
  root: HTMLElement,
  reducedMotion: boolean,
): () => void;
```

### 5.2 Integração React

`SiteLayout` terá refs explícitas para o shell, o cabeçalho e a rota atual. O hook `useGSAP()` será usado com escopo e `revertOnUpdate: true`. A dependência `location.pathname` deve reconstruir apenas as revelações da nova rota; o comportamento do cabeçalho deve continuar único.

### 5.3 Convenção de marcação

- Novos componentes: usar `data-reveal` no bloco visual que deve entrar.
- Código legado: `.reveal` continua aceito até migração posterior.
- Blocos agrupados: usar `data-reveal-group` no contêiner e `data-reveal-item` nos filhos somente quando o stagger interno melhorar a leitura.
- Nunca colocar `data-reveal` no elemento que pinta o fundo completo de uma seção.

## 6. Plano de implementação

### Tarefa 1 — Adicionar o runtime GSAP e estabelecer a linha de base

**Arquivos:**

- Modificar: `package.json`
- Modificar: `package-lock.json`
- Verificar: `skills-lock.json`
- Criar: `src/motion/gsap.ts`

- [x] **Passo 1: registrar a linha de base antes de alterar código**

Executar:

```powershell
npm run test:run
npm run lint
npm run build
```

Esperado: os três comandos passam. Qualquer falha preexistente deve ser registrada antes da implementação, sem ser mascarada por esta feature.

- [x] **Passo 2: instalar somente as dependências necessárias de runtime**

Executar:

```powershell
npm install gsap @gsap/react
```

Esperado: `gsap` e `@gsap/react` aparecem em `dependencies`; nenhum pacote de smooth scroll é adicionado.

- [x] **Passo 3: criar o ponto único de registro dos plugins**

Implementar `src/motion/gsap.ts`:

```ts
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
```

- [x] **Passo 4: confirmar que o bundle compila com os imports escolhidos**

Executar:

```powershell
npm run build
```

Esperado: build concluído sem erro de resolução ESM ou registro de plugin.

- [ ] **Passo 5: commit opcional, somente se autorizado**

```powershell
git add package.json package-lock.json src/motion/gsap.ts
git commit -m "chore: add gsap motion runtime"
```

### Tarefa 2 — Especificar o comportamento em testes antes da implementação

**Arquivos:**

- Criar: `src/motion/siteMotion.test.ts`
- Criar depois: `src/motion/siteMotion.ts`

- [x] **Passo 1: escrever o teste do cabeçalho**

O teste deve mockar `gsap.to`, `gsap.set`, `gsap.killTweensOf` e `ScrollTrigger.create`, capturar as callbacks e provar que:

```ts
it('troca entre branco sólido e liquid glass ao cruzar 24 px', () => {
  const header = document.createElement('header');
  setupHeaderMotion(header, false);

  const config = createMock.mock.calls[0][0];
  config.onEnter();
  expect(toMock).toHaveBeenLastCalledWith(
    header,
    expect.objectContaining({
      backgroundColor: 'rgba(255, 255, 255, 0.74)',
      backdropFilter: 'blur(18px) saturate(150%)',
      duration: 0.35,
      ease: 'power2.out',
    }),
  );

  config.onLeaveBack();
  expect(toMock).toHaveBeenLastCalledWith(
    header,
    expect.objectContaining({
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(0px) saturate(100%)',
    }),
  );
});
```

- [x] **Passo 2: escrever os testes das revelações**

Cobrir estes contratos:

1. `ScrollTrigger.batch()` recebe `[data-reveal], .reveal` dentro do root informado.
2. `onEnter` anima `autoAlpha`, `y`, `duration`, `stagger` e `overwrite`.
3. `once: true` impede repetição.
4. Com movimento reduzido, os elementos são exibidos imediatamente e nenhum batch é criado.
5. A função de cleanup mata triggers e tweens e remove apenas os estilos inline de animação.

- [x] **Passo 3: executar o teste e observar a falha esperada**

```powershell
npm run test:run -- src/motion/siteMotion.test.ts
```

Esperado: falha porque `src/motion/siteMotion.ts` ainda não existe.

### Tarefa 3 — Implementar o motor de movimento testável

**Arquivos:**

- Criar: `src/motion/siteMotion.ts`
- Validar: `src/motion/siteMotion.test.ts`

- [x] **Passo 1: implementar estados explícitos do cabeçalho**

Usar dois objetos imutáveis de propriedades GSAP. O estado glass deve conter fundo translúcido, blur, saturação, borda e sombra; o estado top deve restaurar branco sólido, blur zero, borda transparente e sombra zero.

```ts
const headerGlassState = {
  backgroundColor: 'rgba(255, 255, 255, 0.74)',
  backdropFilter: 'blur(18px) saturate(150%)',
  WebkitBackdropFilter: 'blur(18px) saturate(150%)',
  borderColor: 'rgba(255, 255, 255, 0.62)',
  boxShadow: '0 14px 42px rgba(17, 24, 45, 0.12)',
};
```

`setupHeaderMotion()` deve:

- aplicar o estado correto imediatamente usando `window.scrollY`;
- criar um único `ScrollTrigger` com início em `HEADER_GLASS_START_PX`;
- chamar glass em `onEnter` e sólido em `onLeaveBack`;
- usar duração `0` quando `reducedMotion` for verdadeiro;
- retornar cleanup que mata o trigger, mata tweens do header e limpa somente propriedades controladas pelo GSAP.

- [x] **Passo 2: implementar revelações em lote**

`setupScrollReveals()` deve:

```ts
const items = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR, root);

gsap.set(items, {
  autoAlpha: 0,
  y: 24,
  willChange: 'transform, opacity',
});

const triggers = ScrollTrigger.batch(items, {
  start: 'top 84%',
  once: true,
  interval: 0.08,
  batchMax: 4,
  onEnter: (batch) => {
    gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      overwrite: 'auto',
      clearProps: 'willChange',
    });
  },
});
```

No caminho de movimento reduzido, não criar triggers: garantir visibilidade e limpar `opacity`, `visibility`, `transform` e `willChange`.

- [x] **Passo 3: passar os testes focados**

```powershell
npm run test:run -- src/motion/siteMotion.test.ts
```

Esperado: todos os testes do módulo passam.

- [x] **Passo 4: revisar custo de renderização**

Confirmar no código:

- nenhum `onUpdate` executa a cada frame;
- não há `scrub` nem `pin`;
- `will-change` é removido ao término;
- não há seletor global fora do root recebido;
- não há `ScrollTrigger.refresh()` chamado durante scroll.

- [ ] **Passo 5: commit opcional, somente se autorizado**

```powershell
git add src/motion/siteMotion.ts src/motion/siteMotion.test.ts
git commit -m "feat: add tested site motion engine"
```

### Tarefa 4 — Integrar cabeçalho e revelações ao SiteLayout

**Arquivos:**

- Modificar: `src/components/SiteLayout/index.tsx`
- Modificar: `src/components/SiteLayout/styles.ts`
- Modificar: `src/components/SiteLayout/SiteLayout.test.tsx`
- Criar: `src/components/SiteLayout/useSiteMotion.ts`
- Modificar: `src/test/setup.ts`

- [x] **Passo 1: substituir o teste legado de IntersectionObserver**

Remover o stub global de `IntersectionObserver` de `SiteLayout.test.tsx`. Acrescentar testes que comprovem os pontos de integração:

```ts
expect(screen.getByRole('banner')).toHaveAttribute('data-site-header');
expect(screen.getByTestId('route-motion-scope')).toBeInTheDocument();
```

Adicionar também um teste de regressão garantindo que abrir e fechar o menu mobile continua alterando o `aria-label` do botão.

- [x] **Passo 2: observar a falha esperada**

```powershell
npm run test:run -- src/components/SiteLayout/SiteLayout.test.tsx
```

Esperado: falha porque os atributos e refs ainda não existem.

- [x] **Passo 3: criar o hook React com cleanup automático**

`useSiteMotion.ts` deve exportar:

```ts
interface SiteMotionRefs {
  headerRef: RefObject<HTMLElement | null>;
  routeRef: RefObject<HTMLDivElement | null>;
  pathname: string;
}

export function useSiteMotion({
  headerRef,
  routeRef,
  pathname,
}: SiteMotionRefs): void;
```

Regras do hook:

- usar `useGSAP()` em vez de `useEffect()` para criar animações;
- usar `gsap.matchMedia()` para distinguir `prefers-reduced-motion: reduce`;
- inicializar o cabeçalho uma única vez;
- reconstruir revelações quando `pathname` mudar, com `revertOnUpdate: true`;
- retornar os cleanups de `setupHeaderMotion()` e `setupScrollReveals()`;
- nunca chamar `ScrollTrigger.getAll().forEach(kill)`, pois isso poderia matar animações de outros componentes.

- [x] **Passo 4: integrar refs no layout**

Em `SiteLayout/index.tsx`:

- criar `headerRef` e `routeRef`;
- chamar `useSiteMotion({ headerRef, routeRef, pathname: location.pathname })`;
- remover integralmente o `useEffect` com `IntersectionObserver` e a lógica de `--reveal-delay`;
- aplicar `ref={headerRef}` e `data-site-header` ao `Header`;
- aplicar `ref={routeRef}` e `data-testid="route-motion-scope"` ao `RouteViewport`;
- manter os efeitos de navegação e o controle do menu independentes da animação.

- [x] **Passo 5: definir o estado visual base e o fallback**

Em `styles.ts`, o `Header` deve iniciar com:

```css
background: #ffffff;
border-bottom: 1px solid transparent;
box-shadow: 0 0 0 rgba(17, 24, 45, 0);
backdrop-filter: blur(0) saturate(100%);
-webkit-backdrop-filter: blur(0) saturate(100%);
```

Remover a transição CSS dessas propriedades para não competir com GSAP e preservar transições locais de links e botões. Em `setupHeaderMotion()`, detectar suporte com `CSS.supports('backdrop-filter', 'blur(1px)')` ou a variante `-webkit-`; quando ambos forem falsos, usar `rgba(255, 255, 255, 0.94)` no estado glass e não tentar animar blur. Acrescentar ao teste do motor um caso para esse fallback.

- [x] **Passo 6: passar testes do layout e do motor**

```powershell
npm run test:run -- src/components/SiteLayout/SiteLayout.test.tsx src/motion/siteMotion.test.ts
```

Esperado: testes passam sem warnings de `act`, refs ou cleanup.

### Tarefa 5 — Marcar a narrativa da Home para revelação progressiva

**Arquivos:**

- Modificar: `src/pages/Home/sections/LegacySection.tsx`
- Modificar: `src/pages/Home/sections/InsideWorkSection.tsx`
- Modificar: `src/pages/Home/sections/StructureSection.tsx`
- Modificar: `src/pages/Home/sections/SolutionsSection.tsx`
- Modificar: `src/pages/Home/sections/CultureSection.tsx`
- Modificar: `src/pages/Home/sections/CareersSection.tsx`
- Modificar: `src/pages/Home/sections/ContactSection.tsx`
- Modificar: `src/pages/Home/Home.test.tsx`

- [x] **Passo 1: escrever um teste de cobertura estrutural**

O teste da Home deve renderizar a página e confirmar que as sete seções após o hero possuem pelo menos um bloco interno com `data-reveal`. Não exigir número exato de elementos para não acoplar o teste ao layout editorial.

- [x] **Passo 2: observar a falha esperada**

```powershell
npm run test:run -- src/pages/Home/Home.test.tsx
```

Esperado: falha porque os blocos ainda não possuem a convenção nova.

- [x] **Passo 3: aplicar a hierarquia de movimento**

Marcar blocos, não fundos:

- **Legacy:** mídia e coluna de texto.
- **Por dentro do trabalho:** introdução e cada figura.
- **Estrutura:** cabeçalho e grade de métricas.
- **Soluções:** introdução e grade de links.
- **Cultura:** narrativa e lista de compromissos.
- **Carreiras:** narrativa e nota lateral.
- **Contato:** texto e chamada para ação.

O `HumanHero` permanece sem `data-reveal`, evitando duplicar a animação de `RouteViewport`.

- [x] **Passo 4: preservar semântica e layout**

Quando um componente não encaminhar `data-*`, usar um wrapper neutro sem alterar heading order, landmarks ou leitura por teclado. Nenhum wrapper pode receber altura fixa apenas para a animação.

- [x] **Passo 5: passar o teste da Home**

```powershell
npm run test:run -- src/pages/Home/Home.test.tsx
```

Esperado: teste passa e o conteúdo textual continua presente no DOM.

### Tarefa 6 — Remover o mecanismo CSS antigo e garantir progressive enhancement

**Arquivos:**

- Modificar: `src/styles/GlobalStyles.ts`
- Validar: `src/pages/siteStyles.ts`

- [x] **Passo 1: substituir o contrato `.is-visible`**

Remover de `GlobalStyles.ts`:

- `transition-delay: var(--reveal-delay)`;
- `.reveal.is-visible`;
- o estado oculto e a transição CSS que competiriam com GSAP.

Não criar uma nova regra CSS que deixe `[data-reveal]` ou `.reveal` invisível. O conteúdo deve permanecer visível por padrão; `gsap.set()` será executado pelo `useGSAP()` em fase de layout, antes da pintura normal no navegador, e será o único responsável pelo estado inicial animável. Assim, falha de JavaScript ou falha no carregamento do GSAP não oculta informação.

Manter a proteção global já existente para movimento reduzido:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal],
  .reveal {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }
}
```

- [x] **Passo 2: confirmar compatibilidade com páginas existentes**

Inspecionar todas as ocorrências em `src/pages/siteStyles.ts`, `Company`, `People`, `Cases` e `Certifications`. Não migrar todas para `data-reveal` neste plano; apenas garantir que `.reveal` continue operando com o novo motor.

- [x] **Passo 3: validar ausência de convenções órfãs**

```powershell
rg -n "is-visible|--reveal-delay|IntersectionObserver" src
```

Esperado: nenhuma ocorrência do mecanismo antigo.

### Tarefa 7 — Documentar o padrão e executar a validação final

**Arquivos:**

- Criar: `docs/movimento-e-gsap.md`
- Modificar: `docs/README.md`
- Modificar: `docs/arquitetura.md`
- Modificar: `docs/padroes-visuais.md`
- Modificar: `docs/qualidade-e-validacao.md`
- Atualizar: `plans/plan-002-header-liquid-glass-e-motion-no-scroll.md`

- [x] **Passo 1: documentar a decisão**

`docs/movimento-e-gsap.md` deve registrar:

- dependências `gsap` e `@gsap/react`;
- skills instaladas em `.agents/skills/gsap-*` e quando consultar cada uma;
- registro central em `src/motion/gsap.ts`;
- convenções `data-reveal`, `.reveal`, `data-reveal-group` e `data-reveal-item`;
- obrigação de `useGSAP`, refs com scope e cleanup;
- padrão de movimento reduzido;
- proibição de scroll hijacking nesta fase;
- checklist para criar uma animação nova sem degradar performance.

- [x] **Passo 2: atualizar os índices e responsabilidades**

- adicionar o novo documento ao índice de `docs/README.md`;
- registrar em `docs/arquitetura.md` que animação global fica em `src/motion` e é orquestrada pelo `SiteLayout`;
- atualizar `docs/padroes-visuais.md` com duração, easing, deslocamento e limites;
- incluir em `docs/qualidade-e-validacao.md` a inspeção de movimento reduzido, cleanup e performance.

- [x] **Passo 3: executar a suíte automatizada**

```powershell
npm run test:run
npm run lint
npm run build
```

Esperado: todos passam sem warnings novos.

- [x] **Passo 4: executar a matriz visual manual**

Validar em larguras aproximadas de **1440 px**, **1024 px**, **768 px** e **390 px**:

1. carregar `/` no topo e confirmar cabeçalho branco sólido;
2. rolar 1–23 px e confirmar que o estado ainda é sólido;
3. ultrapassar 24 px e confirmar a transição suave para glass;
4. voltar ao topo e confirmar reversão completa;
5. percorrer toda a Home e observar entradas sem saltos ou conteúdo cortado;
6. navegar para pelo menos três rotas e voltar, procurando animações duplicadas;
7. abrir o menu mobile no topo e após rolagem;
8. testar dropdown de Pessoas com mouse e teclado;
9. ativar `prefers-reduced-motion: reduce` e confirmar ausência de deslocamento e duração;
10. simular navegador sem `backdrop-filter` e confirmar contraste;
11. verificar console sem erros, warnings de cleanup ou triggers em elementos removidos.

- [x] **Passo 5: inspecionar performance**

No painel Performance do navegador, registrar uma rolagem do topo ao rodapé em viewport mobile. Aceite:

- nenhuma tarefa longa recorrente causada por callback de scroll;
- ausência de layout shift provocado pela animação;
- blur limitado ao cabeçalho fixo;
- animações concentradas em `transform` e `opacity`;
- quantidade de triggers compatível com os blocos marcados, sem duplicação após troca de rota.

- [x] **Passo 6: registrar a execução no fim deste plano**

Preencher data, arquivos efetivamente alterados, comandos executados, resultados, diferenças aprovadas e pendências reais. Não marcar uma etapa como concluída sem evidência.

- [ ] **Passo 7: commit opcional, somente se autorizado**

```powershell
git add src docs package.json package-lock.json plans/plan-002-header-liquid-glass-e-motion-no-scroll.md
git commit -m "feat: add liquid glass header and scroll motion"
```

## 7. Critérios de aceite

- [x] O cabeçalho é branco sólido no topo de todas as rotas.
- [x] Ao ultrapassar 24 px, ele assume liquid glass com blur, saturação, borda e sombra suaves.
- [x] Ao retornar ao topo, todas as propriedades voltam ao estado sólido.
- [x] A transição normal dura 350 ms e não usa atualização de estado React por scroll.
- [x] Em movimento reduzido, o estado visual muda sem animação temporal.
- [x] Conteúdos internos da Home aparecem conforme entram na viewport.
- [x] As revelações acontecem uma vez por montagem de rota e usam stagger discreto.
- [x] Páginas legadas com `.reveal` continuam animando.
- [x] Conteúdo permanece visível sem JavaScript e com movimento reduzido.
- [x] Navegação, skip link, dropdown, menu mobile e foco permanecem funcionais.
- [x] Não há ScrollSmoother, Lenis, pinning, parallax ou scroll hijacking.
- [x] Não há `IntersectionObserver`, `.is-visible` ou `--reveal-delay` no código final.
- [x] Testes, lint e build passam.
- [x] A documentação explica como ampliar o sistema de movimento.

## 8. Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Blur custoso em dispositivos fracos | Animar somente na troca de estado, limitar a área ao header e fornecer fallback opaco. |
| Conteúdo piscando antes de GSAP iniciar | Aplicar `gsap.set()` dentro de `useGSAP()` em fase de layout e verificar carregamento frio; não ocultar conteúdo por CSS global. |
| Conteúdo invisível após erro | Visível por padrão sem a classe de capacidade e limpeza explícita no unmount. |
| Triggers duplicados entre rotas | `useGSAP`, scope por ref, `revertOnUpdate` e cleanup local. |
| Conflito entre CSS e GSAP | Remover transições globais de `.reveal` e do estado de superfície do header. |
| Excesso de animação | Revelar blocos editoriais, não cada palavra; `once: true`; hero sem ScrollTrigger. |
| Regressão mobile | Testar menu aberto nos dois estados e reduzir a quantidade de itens por batch. |
| Perda de contraste no glass | Fundo mínimo de 74%, sombra/borda e fallback quase opaco sem suporte a blur. |

## 9. Registro da execução

Preencher somente durante a implementação:

- **Data:** 22 de setembro de 2026
- **Responsável:** Codex, com revisão independente do agente de engenharia
- **Arquivos alterados:** `package.json`, `package-lock.json`, `vite.config.ts`, `src/motion/*`, `src/components/SiteLayout/*`, `src/pages/Home/sections/*`, `src/pages/Home/Home.test.tsx`, `src/styles/GlobalStyles.ts` e documentação relacionada em `docs/`
- **Testes:** `npm run test:run` — 6 arquivos e 17 testes aprovados; inclui limiar do header, fallback sem blur, suporte WebKit via prefixo automático do GSAP, movimento reduzido, revelações, Strict Mode, troca de rota e cleanup
- **Lint:** `npm run lint` — aprovado sem erros ou warnings
- **Build:** `npm run build` — aprovado; `animation-vendor` com 121,12 kB e aplicação com 408,79 kB, sem alerta de chunk acima de 500 kB
- **Validação visual:** aprovada em 1440×900, 1024×768, 768×900 e 390×844; cabeçalho sólido/glass, revelações, menu mobile, dropdown por teclado, três rotas e retorno à Home verificados; sem overflow horizontal ou novos erros de console
- **Diferenças aprovadas:** `WebkitBackdropFilter` não é enviado como propriedade GSAP separada; o CSSPlugin resolve o prefixo automaticamente. O estado reduzido e o fallback sem `backdrop-filter` foram validados por testes automatizados porque a ferramenta de QA visual não expõe emulação dessas capacidades.
- **Performance:** inspecionada por código, build e rolagem real; sem callback por frame, `scrub`, pinning ou listeners de scroll em React; `will-change` é removido após a entrada. Não foi gerado trace formal do painel Performance porque ele não é exposto pelo navegador de QA.
- **Revisão:** primeira passagem apontou compatibilidade WebKit, cleanup e ambiguidade documental; testes e documentação foram ampliados, e a segunda passagem confirmou todos os achados resolvidos
- **Pendências:** commit opcional não executado por falta de autorização; auditoria de dependências mantém 13 ocorrências para tratamento em tarefa dedicada; permanecem dois avisos de future flags do React Router, anteriores e fora do escopo
