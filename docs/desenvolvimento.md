# Desenvolvimento local

## Pré-requisitos

- Git.
- Node.js compatível com o Vite instalado. Node.js 22.12 ou superior é a opção recomendada para este projeto.
- npm.

Confira as versões disponíveis:

~~~bash
node --version
npm --version
git --version
~~~

## Instalação

Na raiz do repositório, instale as versões registradas no lockfile:

~~~bash
npm ci
~~~

Use \`npm ci\` quando estiver preparando um ambiente limpo ou reproduzível. Use \`npm install\` somente quando a intenção for atualizar dependências e revisar as alterações em \`package-lock.json\`.

## Servidor de desenvolvimento

~~~bash
npm run dev
~~~

O script inicia o Vite em todas as interfaces de rede. Normalmente a aplicação fica disponível em \`http://localhost:5173/\`.

O servidor oferece atualização rápida durante a edição. O terminal que iniciou o processo deve permanecer aberto enquanto a aplicação estiver sendo desenvolvida.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| \`npm run dev\` | Inicia o servidor de desenvolvimento. |
| \`npm run build\` | Executa o type-check incremental e gera o build em \`dist/\`. |
| \`npm run lint\` | Analisa os arquivos TypeScript e TSX com ESLint. |
| \`npm run test\` | Executa a suíte Vitest em modo interativo. |
| \`npm run test:run\` | Executa a suíte Vitest uma vez, adequada para CI e validação local. |
| \`npm run preview\` | Serve localmente o conteúdo já gerado em \`dist/\`. |

## Variáveis de ambiente

Não há \`.env\`, \`.env.example\` ou variáveis obrigatórias documentadas no estado atual. Não inclua segredos diretamente no código. Se uma integração futura precisar de configuração, crie um \`.env.example\`, documente cada variável e mantenha os valores reais fora do Git.

## Fluxo diário recomendado

1. Atualize sua branch com a base definida pelo time.
2. Execute \`npm ci\` apenas quando as dependências mudarem ou o ambiente estiver novo.
3. Inicie \`npm run dev\`.
4. Faça a mudança mantendo o padrão existente e consulte [Shadcn/UI](./shadcn-ui.md) quando a tarefa envolver primitives ou tokens.
5. Execute \`npm run test:run\`, \`npm run lint\` e \`npm run build\`.
6. Teste manualmente as rotas afetadas em desktop e mobile.
7. Revise o diff antes de criar o commit.
