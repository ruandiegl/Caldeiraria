# Arquitetura

## Fluxo da aplicação

~~~text
index.html
  -> src/main.tsx
      -> BrowserRouter
          -> src/App.tsx
              -> GlobalStyles
              -> AppRoutes
                  -> SiteLayout
                      -> página correspondente à rota
                          -> conteúdo tipado e estilos da página
~~~

## Estrutura principal

~~~text
src/
├── assets/       imagens importadas pelo código
├── components/   componentes compartilhados, marca, UI e SiteLayout
├── content/      copy, dados do catálogo e referências ao Word
├── motion/       registro GSAP e funções de movimento
├── pages/        páginas e composições por rota
├── routes/       mapa de rotas públicas
└── styles/       estilos globais e tokens
docs/references/  Word do cliente e imagem do layout
public/           arquivos públicos e regras do servidor
~~~

## Responsabilidades

### Rotas e moldura compartilhada

`src/routes/routes.tsx` é a fonte de verdade das rotas. `src/components/SiteLayout` fornece o cabeçalho, a navegação principal, o rodapé, o atalho de acessibilidade e a área da página. O cabeçalho escolhe os nove destinos prioritários e inclui as páginas antigas em uma lista secundária no rodapé. O submenu Empresa usa um botão disclosure; a navegação comum continua com links, sem `role="menu"`.

`useSiteMotion.ts` conecta as refs da moldura ao motor GSAP. A lógica comum fica em `src/motion`; novas animações devem permanecer escopadas, ter cleanup e respeitar `prefers-reduced-motion`.

### Conteúdo editorial

O documento atual do cliente é `docs/references/site textos resumido 18-10.docx`. `sourceDocuments.ts` identifica as fontes; o manifesto em `src/content/__fixtures__` registra os 582 parágrafos. As entradas publicáveis recebem `originRefs` com números base 1. A aplicação consome dados TypeScript e não interpreta arquivos Word.

- `institutionalContent.ts`: leitura completa de História, Identidade, Estrutura, Qualidade e ESG.
- `companyContent.ts`: marcos e resumos do carrossel de História, com sua origem no Word.
- `segmentsContent.ts`: copy completa dos seis segmentos e resumos usados na Home.
- `productsContent.ts`: 14 grupos de produtos e links para detalhes com âncoras reais.
- `contactContent.ts` e `careersContent.ts`: conteúdo de Contato e Trabalhe Conosco.
- `editorialResources.ts`: recursos opcionais como foto autorizada, certificados e URLs externas. Recursos sem confirmação têm valor `null`.
- `siteData.ts`: serviços, certificações, clientes, obras, instalações e equipamentos legados.

Ações Sociais conserva a fonte editorial anterior, pois o Word atual não entrega uma nova redação para essa tela.

### Páginas

`src/pages/Company` mantém índice e páginas próprias para História, Estrutura, Qualidade, ESG e Ações Sociais. História combina carrossel acessível sem autoplay com leitura integral.

`src/pages/Home` compõe apenas o slot responsivo da fotografia panorâmica e a grade dos seis segmentos. A foto está pendente; o site mantém o espaço reservado sem apresentar uma imagem de demonstração como conteúdo corporativo em produção.

`src/pages/Segments` tem o índice dos seis assuntos e uma página de leitura completa para cada slug. `src/pages/Products` lista os grupos e liga os produtos aos segmentos quando há destino real. `/servicos` e `/equipamentos` permanecem como áreas técnicas distintas.

`src/pages/Contact` direciona Vendas e Compras por `mailto:` e não apresenta formulário com confirmação simulada. Denúncia só aparece com URL HTTP/HTTPS real configurada. `src/pages/People/CareersContent.tsx` apresenta o texto completo em `/pessoas/carreira`; candidatura externa só aparece quando sua URL está configurada. Os demais tópicos de Pessoas permanecem na página legada.

### Estilos e componentes

`src/pages/siteStyles.ts` concentra primitives usados por várias páginas, como `Container`, `Hero`, `Section` e `Button`. `src/components/ui` mantém primitives Shadcn/UI; `src/components/brand` mantém composições da marca. Componentes com estilo específico podem manter os estilos junto à sua página.

## Decisões de navegação e hospedagem

- O roteamento é client-side via React Router.
- Slugs inválidos de Segmentos retornam para `/segmentos`; filhos desconhecidos de `/empresa` retornam para `/empresa`; as demais rotas não conhecidas retornam para `/`.
- Netlify usa `public/_redirects` para encaminhar rotas SPA a `index.html`; `public/.htaccess` preserva a regra para Apache.
- Páginas técnicas antigas podem ter imagens Unsplash. Imagens de demonstração não representam colaboradores nem devem ser publicadas como mídia corporativa aprovada.
- O movimento respeita reduced motion e não deve depender de animação para revelar conteúdo.
