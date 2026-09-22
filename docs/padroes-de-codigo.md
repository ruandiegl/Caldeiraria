# Padrões de código

## Linguagem e arquivos

- Use TypeScript em arquivos \`.ts\` e \`.tsx\`.
- Use componentes funcionais React.
- Prefira \`type\` para contratos locais de props e dados.
- Mantenha \`noUnusedLocals\` e \`noUnusedParameters\` satisfeitos.
- Não use \`any\` para contornar um contrato mal definido; modele o tipo necessário.
- Preserve a extensão e o estilo de importação usados pelo arquivo existente.

## Componentes

- Um componente deve ter uma responsabilidade visual ou de fluxo clara.
- Dê nomes em PascalCase para componentes e diretórios de páginas.
- Use props com prefixo \`$\` para valores de estilo que não devem ser enviados como atributos HTML, seguindo o padrão existente (\`$image\`, \`$dark\`, \`$muted\`, \`$open\`).
- Mantenha lógica de dados simples próxima da página quando ela não for reutilizada.
- Extraia uma função ou componente quando a leitura ficar prejudicada ou quando o comportamento se repetir.
- Não transforme todo elemento visual em componente genérico antes de haver repetição real.

## Imports e dependências

- Agrupe imports externos antes dos imports locais.
- Use \`import type\` para tipos, como já ocorre com \`ReactNode\` e \`CSSProperties\`.
- Prefira as dependências já instaladas. Antes de adicionar uma nova, confirme se não há solução nativa ou existente.
- Atualizações de dependências devem incluir revisão do lockfile e execução do lint/build.

## Dados e conteúdo

- Dados institucionais reutilizados ficam em \`src/content/siteData.ts\`.
- Use \`slug\` estável para URLs de serviços.
- Não derive a URL a partir de texto exibido sem normalização explícita.
- Preserve acentuação e capitalização do conteúdo em português.
- Evite duplicar o mesmo cliente, certificação ou serviço em múltiplos componentes.
- Não inclua dados fictícios como se fossem informações comerciais confirmadas.

## Navegação

- Use \`Link\` ou \`NavLink\` para rotas internas.
- Use \`<a>\` para URLs externas, com \`target="_blank"\` e \`rel="noreferrer"\` quando aplicável.
- Ao adicionar uma rota dinâmica, documente seus parâmetros em [Rotas e conteúdo](./rotas-e-conteudo.md).
- Garanta que a página tenha estado válido para parâmetro ausente e desconhecido.

## Estado e efeitos

- Mantenha estado local com \`useState\` quando o estado pertencer a uma única página/componente.
- Limpe intervalos, observers e listeners em \`useEffect\`.
- Respeite as dependências do array de \`useEffect\`.
- Não use efeitos para derivar valores que podem ser calculados durante a renderização.
- Para animação temporizada, assegure que o componente não continue atualizando depois de desmontado.

## Styled-components

- Prefira os primitives compartilhados de \`src/pages/siteStyles.ts\` quando a regra for comum a várias páginas.
- Use estilos locais na página quando a regra for específica daquela experiência.
- Evite seletores globais novos; o único conjunto global deve permanecer em \`GlobalStyles.ts\`.
- Mantenha breakpoints próximos do componente que os usa.
- Use interpolação de props tipadas para variantes visuais.
- Não acople layout a nomes de elementos frágeis quando uma prop semântica resolver melhor.

## Comentários e documentação no código

Comente apenas decisões não óbvias, restrições externas ou motivos para uma solução. Não use comentários para repetir o nome do código. Se uma regra for de todo o projeto, prefira atualizar a documentação em \`docs/\`.

