# Git e contribuição

## Repositório canônico

O repositório principal usa o remoto \`origin\` configurado no clone de trabalho. Confirme o remoto antes de operações de publicação:

~~~bash
git remote -v
git branch --show-current
git status --short --branch
~~~

Trabalhe sempre na raiz que contém \`.git\` e \`package.json\`. Não trate cópias locais, \`node_modules\` ou \`dist\` como parte do projeto.

## Branches

Use uma branch por mudança. Prefira o padrão:

~~~text
codex/<descricao-curta>
~~~

Exemplos:

- \`codex/ajusta-hero-servicos\`
- \`codex/corrige-rota-pessoas\`
- \`codex/documenta-setup\`

Não trabalhe diretamente em \`master\` para uma mudança que será revisada, a menos que o fluxo do time determine isso explicitamente.

## Commits

Faça commits pequenos e coesos. A mensagem deve explicar a intenção da mudança, por exemplo:

~~~text
feat: adiciona página de instalações
fix: corrige fallback de tópico de pessoas
docs: documenta fluxo de desenvolvimento
refactor: extrai card de serviço reutilizável
~~~

Não misture refatoração, mudança visual não relacionada e correção de conteúdo no mesmo commit.

## Pull requests e revisão

Uma revisão deve informar:

- objetivo da mudança;
- rotas ou componentes afetados;
- comportamento esperado;
- validações executadas;
- limitações conhecidas;
- screenshots ou gravação quando o impacto for visual.

Quem revisa deve conferir especialmente:

- navegação direta e links internos;
- comportamento responsivo;
- conteúdo e acentuação;
- foco de teclado e \`alt\` das imagens;
- efeitos limpos ao trocar de rota;
- resultado de lint e build.

## Arquivos que não devem ser commitados

O \`.gitignore\` já exclui dependências, build, logs e configurações locais. Nunca commit:

- \`node_modules/\`;
- \`dist/\`;
- \`.env\` ou qualquer segredo;
- logs locais;
- arquivos de editor;
- credenciais ou chaves privadas.

