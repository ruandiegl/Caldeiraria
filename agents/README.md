# Agentes de IA do projeto

Esta pasta reúne agentes especializados para apoiar o desenvolvimento do site institucional da Metalúrgica Vulcano.

O contexto-base é o [README principal](../README.md): aplicação web em Vite, React e TypeScript, com React Router, styled-components, páginas institucionais, conteúdo centralizado em \`src/content/siteData.ts\` e layout compartilhado em \`src/components/SiteLayout\`.

## Como escolher um agente

| Agente | Use quando |
| --- | --- |
| [Product Manager](./product-manager.md) | A demanda ainda precisa ser esclarecida, priorizada ou transformada em critérios de aceite. |
| [UX/UI Designer](./ux-ui-designer.md) | A mudança envolve fluxo, layout, hierarquia visual, conteúdo de interface ou experiência responsiva. |
| [Software Architect](./software-architect.md) | A mudança altera limites entre páginas, dados, integrações, estado, rotas ou estrutura do projeto. |
| [Frontend Engineer](./frontend-engineer.md) | É necessário implementar ou corrigir React, TypeScript, rotas, componentes ou styled-components. |
| [Backend & Integrations Engineer](./backend-integrations-engineer.md) | Será criada uma API, integração de formulário, serviço externo ou persistência; hoje o projeto não possui backend próprio. |
| [QA Engineer](./qa-engineer.md) | É preciso validar comportamento, regressões, rotas, formulários ou critérios de aceite. |
| [Accessibility & Performance Engineer](./accessibility-performance-engineer.md) | A tarefa envolve acessibilidade, responsividade, carregamento, imagens, animações ou performance. |
| [Security Engineer](./security-engineer.md) | A mudança toca dados pessoais, integrações externas, dependências, segredos ou superfície de ataque. |
| [DevOps & Release Engineer](./devops-release-engineer.md) | É necessário configurar build, hospedagem, ambiente, CI/CD, domínio, cache ou publicação. |
| [Code Reviewer](./code-reviewer.md) | A implementação está pronta e precisa de uma revisão independente antes da integração. |
| [Technical Writer](./technical-writer.md) | É necessário documentar arquitetura, setup, decisões, operação ou uma nova convenção. |

## Fluxo recomendado

~~~text
Product Manager
      ↓
UX/UI Designer ──┐
                 ├── Software Architect
                 ↓
          Frontend Engineer ── Backend & Integrations Engineer
                 ↓
       QA ── Accessibility & Performance ── Security
                 ↓
          Code Reviewer → DevOps & Release → Technical Writer
~~~

O fluxo não precisa envolver todos os agentes. Use apenas os que correspondem ao risco e ao escopo da mudança.

## Protocolo comum para qualquer agente

1. Leia este índice e o \`README.md\` antes de atuar.
2. Confirme que está na raiz que contém \`.git\`, \`package.json\`, \`src\` e \`public\`.
3. Inspecione o código existente antes de propor uma convenção nova.
4. Respeite a stack atual: Vite, React, TypeScript, React Router e styled-components.
5. Não invente backend, dados comerciais, integrações ou regras de negócio que não foram solicitados.
6. Faça mudanças pequenas e rastreáveis.
7. Execute \`npm run lint\` e \`npm run build\` quando houver alteração de código.
8. Relate arquivos alterados, validações executadas, riscos e decisões em aberto.
9. Nunca edite uma cópia aninhada do projeto.
10. Não faça commit, push, merge, publicação ou exclusão de dados sem autorização explícita.

## Formato mínimo de resposta

Todo agente deve encerrar sua atuação com:

- **Resumo:** o que foi decidido ou implementado.
- **Arquivos:** arquivos lidos e alterados.
- **Validação:** comandos e testes executados.
- **Riscos:** limitações, placeholders ou pontos que precisam de aprovação.
- **Próximo agente:** quem deve assumir, quando aplicável.

## Regras de manutenção

- Um agente deve ter uma responsabilidade principal.
- Se duas instruções divergirem, o código e o README atual são a fonte de verdade até que a decisão seja registrada.
- Ao criar um novo agente, atualize este índice.
- Ao alterar a stack ou o fluxo do time, revise todos os agentes afetados.

