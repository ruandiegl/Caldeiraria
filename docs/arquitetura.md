# Arquitetura

## Visão do fluxo

~~~text
index.html
  -> src/main.tsx
      -> BrowserRouter
          -> src/App.tsx
              -> GlobalStyles
              -> AppRoutes
                  -> SiteLayout
                      -> página correspondente à rota
                          -> dados e estilos da página
~~~

## Estrutura de diretórios

~~~text
.
├── public/                  # Arquivos públicos servidos sem processamento
├── src/
│   ├── assets/              # Imagens importadas pelo código
│   ├── components/          # Componentes reutilizáveis
│   │   ├── brand/           # Composições com identidade visual Vulcano
│   │   └── ui/              # Primitives Shadcn mantidas pelo projeto
│   ├── content/             # Dados institucionais e coleções de conteúdo
│   ├── motion/              # Registro GSAP e motores de movimento testáveis
│   ├── pages/               # Páginas associadas às rotas
│   ├── routes/              # Mapa de rotas do cliente
│   ├── styles/              # Estilos globais e tokens Shadcn
│   ├── App.tsx              # Composição principal
│   └── main.tsx             # Ponto de entrada do React
├── docs/                    # Documentação do projeto
├── index.html               # Documento HTML de entrada do Vite
├── vite.config.ts           # Plugins e configuração do Vite
├── eslint.config.js         # Configuração do lint
├── tsconfig*.json           # Configuração TypeScript
├── package.json             # Scripts e dependências
├── package-lock.json        # Versões resolvidas das dependências
└── components.json          # Configuração do Shadcn/UI
~~~

## Responsabilidades principais

### \`src/main.tsx\`

Cria a raiz React, habilita \`StrictMode\` e envolve a aplicação com \`BrowserRouter\`.

### \`src/App.tsx\`

Aplica \`GlobalStyles\` e renderiza \`AppRoutes\`. Não coloque regras específicas de uma página neste arquivo.

### \`src/routes/routes.tsx\`

É a fonte de verdade das rotas públicas. Todas as páginas passam pelo \`SiteLayout\`, que mantém cabeçalho, navegação, rodapé e atalho de WhatsApp consistentes.

### \`src/components/SiteLayout\`

Controla a moldura compartilhada do site, o menu responsivo e a orquestração dos efeitos de cabeçalho e rota. `useSiteMotion.ts` conecta refs ao motor de movimento e reconstrói somente as revelações pertencentes à rota atual. Mudanças aqui podem afetar todas as páginas.

### \`src/motion\`

Centraliza o registro do GSAP e as funções testáveis de movimento. `siteMotion.ts` não conhece React: recebe elementos, cria triggers locais e retorna cleanup. Consulte [Movimento e GSAP](./movimento-e-gsap.md) antes de ampliar esse sistema.

### \`src/pages\`

Cada diretório representa uma página ou fluxo visual. As páginas compõem seções e podem definir estilos específicos junto da implementação quando o estilo não for reutilizável.

### \`src/pages/siteStyles.ts\`

Concentra primitives visuais reutilizadas por várias páginas, como \`Container\`, \`Hero\`, \`Section\`, \`Button\`, grids, cards e bandas de conteúdo.

### \`src/content/siteData.ts\`

Centraliza serviços, certificações, clientes, projetos, instalações e equipamentos. Dados que alimentam mais de uma página devem ficar aqui em vez de serem duplicados em componentes.

### \`src/content/homeContent.ts\`

Mantém a narrativa da Home humanizada, seus fatos aprovados, métricas, chamadas e metadados de mídia. Não misture dados incompletos de contato, placeholders editoriais ou certificações futuras com fatos vigentes.

### \`src/pages/Home\`

A Home nova é composta por seções independentes em \`src/pages/Home/sections\`, com estilos editoriais em \`homeStyles.ts\`. Primitives de comportamento vêm de \`src/components/ui\`; composições específicas da marca ficam em \`src/components/brand\`.

## Padrão de composição

Uma página típica combina:

1. um \`Hero\` com imagem, eyebrow, título e texto;
2. uma ou mais \`Section\` dentro de \`Container\`;
3. componentes visuais reutilizáveis de \`siteStyles.ts\`;
4. conteúdo específico ou dados importados de \`siteData.ts\`;
5. links \`Link\`/\`NavLink\` para navegação interna.

Na Home humanizada, a composição é:

1. hero com tese humana e mídia documental;
2. história resumida;
3. bloco “Por dentro do trabalho”;
4. métricas estruturais contextualizadas;
5. soluções e segmentos;
6. cultura, qualidade e futuro;
7. carreira;
8. contato.

## Decisões importantes

- A navegação é feita no cliente com \`react-router-dom\`.
- Rotas desconhecidas redirecionam para \`/\`.
- As imagens de destaque e alguns painéis usam URLs externas do Unsplash; uma publicação deve considerar disponibilidade, licenciamento e estratégia de fallback.
- O cabeçalho liquid glass e as revelações usam GSAP/ScrollTrigger, com `useGSAP`, scope por ref, cleanup local e suporte a `prefers-reduced-motion`.
- Shadcn/UI é adotado de forma incremental: Tailwind v4 e tokens ficam em \`src/styles/shadcn.css\`, enquanto páginas legadas continuam usando styled-components.
- O preset efetivo do Shadcn é o \`base-nova\` com primitives Base UI, conforme \`components.json\`; consulte a skill antes de usar APIs como \`render\` ou atualizar componentes.
- Não crie uma nova camada de estado global sem uma necessidade real; o estado atual é local aos componentes.
