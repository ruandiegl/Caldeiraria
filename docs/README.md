# Documentação do projeto

Documentação de referência do site institucional da Metalúrgica Vulcano.

## Visão rápida

- **Tipo:** aplicação web institucional, single-page application (SPA).
- **Stack:** React, TypeScript, Vite, React Router e styled-components.
- **Entrada da aplicação:** \`src/main.tsx\`.
- **Componente raiz:** \`src/App.tsx\`.
- **Rotas:** \`src/routes/routes.tsx\`.
- **Conteúdo institucional:** `src/content/institutionalContent.ts` (texto integral e origem no Word), `src/content/homeContent.ts` (sínteses visuais), `src/content/companyContent.ts` (carrossel e blocos comerciais diferidos) e `src/content/siteData.ts` (dados técnicos).
- **Fontes de referência e auditoria:** `docs/references/` (incluindo o documento-mestre `.docx` do cliente).
- **Layout compartilhado:** `src/components/SiteLayout`.
- **Build de produção:** \`dist/\`.

## Índice

| Documento | Quando consultar |
| --- | --- |
| [Visão geral](./visao-geral.md) | Para entender o produto, seu escopo e suas limitações atuais. |
| [Desenvolvimento local](./desenvolvimento.md) | Para instalar dependências, iniciar o servidor e executar os comandos do projeto. |
| [Arquitetura](./arquitetura.md) | Para localizar responsabilidades, fluxos de renderização e pontos de extensão. |
| [Padrões de código](./padroes-de-codigo.md) | Antes de criar ou alterar componentes, páginas, dados ou estilos. |
| [Padrões visuais](./padroes-visuais.md) | Antes de alterar layout, identidade visual, responsividade, acessibilidade ou animações. |
| [Movimento e GSAP](./movimento-e-gsap.md) | Para criar, alterar ou validar animações, ScrollTrigger e o cabeçalho liquid glass. |
| [Shadcn/UI](./shadcn-ui.md) | Para configurar, usar ou atualizar os componentes Shadcn e conduzir a migração incremental dos estilos. |
| [Rotas e conteúdo](./rotas-e-conteudo.md) | Para adicionar páginas, serviços, tópicos de pessoas ou dados institucionais. |
| [Git e contribuição](./git-e-contribuicao.md) | Para organizar branches, commits, revisão e integração das mudanças. |
| [Qualidade e validação](./qualidade-e-validacao.md) | Antes de abrir uma revisão ou considerar uma mudança pronta. |
| [Deploy e operação](./deploy-e-operacao.md) | Para gerar, publicar e servir o build de produção. |
| [Solução de problemas](./solucao-de-problemas.md) | Para diagnosticar os problemas mais comuns do ambiente e da aplicação. |

## Ordem recomendada para uma pessoa nova

1. Leia [Visão geral](./visao-geral.md).
2. Prepare o ambiente seguindo [Desenvolvimento local](./desenvolvimento.md).
3. Entenda a organização em [Arquitetura](./arquitetura.md).
4. Consulte os padrões antes de editar código.
5. Valide a entrega com [Qualidade e validação](./qualidade-e-validacao.md).

## Fonte de verdade

Esta documentação descreve o código presente no repositório. Quando houver divergência, confirme primeiro o comportamento em \`src/\`, \`package.json\` e nos scripts executáveis. Ao alterar uma decisão estrutural, atualize o documento correspondente na mesma mudança.

O diretório que contém este arquivo, \`package.json\` e \`.git\` é a raiz canônica do projeto. Cópias locais ou diretórios de dependências não fazem parte da aplicação.
