# Documentação do projeto

Referência de arquitetura, conteúdo e operação do site institucional da Metalúrgica Vulcano.

## Visão rápida

- **Aplicação:** SPA institucional em React, TypeScript e Vite, com React Router e styled-components.
- **Entrada:** `src/main.tsx`; rotas em `src/routes/routes.tsx`.
- **Layout compartilhado:** `src/components/SiteLayout`.
- **Conteúdo atual do cliente:** `docs/references/site textos resumido 18-10.docx`; a fonte tipada, as referências e o manifesto estão em `src/content/`.
- **Conteúdo integral:** `institutionalContent.ts`, `segmentsContent.ts`, `productsContent.ts`, `contactContent.ts` e `careersContent.ts`.
- **Recursos ainda pendentes:** `src/content/editorialResources.ts` registra mídia e destinos opcionais sem inventar URLs.
- **Referência visual da Home:** `docs/references/layout-home-cliente-plano-005.png`.
- **Build:** `dist/`.

## Índice

| Documento | Quando consultar |
| --- | --- |
| [Visão geral](./visao-geral.md) | Produto, escopo e limitações atuais. |
| [Desenvolvimento local](./desenvolvimento.md) | Preparação do ambiente, servidor e comandos. |
| [Arquitetura](./arquitetura.md) | Responsabilidades, conteúdo e fluxo de renderização. |
| [Padrões de código](./padroes-de-codigo.md) | Convenções para componentes, páginas e dados. |
| [Padrões visuais](./padroes-visuais.md) | Layout, responsividade, acessibilidade e movimento. |
| [Movimento e GSAP](./movimento-e-gsap.md) | GSAP, ScrollTrigger, cleanup e reduced motion. |
| [Shadcn/UI](./shadcn-ui.md) | Primitives instalados e convenções do projeto. |
| [Rotas e conteúdo](./rotas-e-conteudo.md) | Mapa de páginas, fontes editoriais e links. |
| [Git e contribuição](./git-e-contribuicao.md) | Organização, revisão e integração de mudanças. |
| [Qualidade e validação](./qualidade-e-validacao.md) | Testes, lint, build e revisão manual. |
| [Deploy e operação](./deploy-e-operacao.md) | Build, fallback SPA e publicação. |
| [Solução de problemas](./solucao-de-problemas.md) | Diagnóstico de falhas recorrentes. |

## Ordem recomendada

1. Leia [Visão geral](./visao-geral.md).
2. Prepare o ambiente conforme [Desenvolvimento local](./desenvolvimento.md).
3. Consulte [Arquitetura](./arquitetura.md) e os padrões antes de editar.
4. Valide com [Qualidade e validação](./qualidade-e-validacao.md).

## Fonte de verdade

Esta documentação descreve o código presente no repositório. Em caso de divergência, confirme o comportamento em `src/`, `package.json` e nos scripts executáveis. Quando uma decisão estrutural mudar, atualize o documento correspondente na mesma alteração.
