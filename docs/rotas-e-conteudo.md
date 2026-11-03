# Rotas e conteúdo

## Rotas públicas

| Rota | Componente | Responsabilidade |
| --- | --- | --- |
| `/` | `Home` | Fotografia panorâmica responsiva e seis sínteses ligadas às páginas de Segmentos, na ordem do layout do cliente. |
| `/empresa` | `Company` | Índice da área Empresa. |
| `/empresa/historia` | `HistoryPage` | Carrossel interativo sem autoplay e texto completo de História e Identidade. |
| `/empresa/estrutura` | `StructurePage` | Texto completo de estrutura, unidades e capacidades. |
| `/empresa/qualidade` | `QualityPage` | Conteúdo completo de Qualidade e situação das normas. |
| `/empresa/esg` | `EsgPage` | Conteúdo completo dos pilares ESG. |
| `/empresa/acoes-sociais` | `SocialActionsPage` | Conteúdo preservado da fonte institucional anterior; mídias pendentes permanecem identificadas. |
| `/segmentos` | `Segments` | Índice dos seis segmentos do Word. |
| `/segmentos/:slug` | `SegmentDetailPage` | Texto completo do segmento, com blocos e âncoras estáveis. |
| `/produtos` | `Products` | Catálogo com os 14 grupos de produtos e links para detalhes disponíveis. |
| `/contato` | `Contact` | E-mails de Vendas e Compras, acesso à Carreira e canal de Ouvidoria somente se sua URL real estiver configurada. |
| `/pessoas` | `People` | Visão geral legada de carreira, desenvolvimento, comunidade e cuidado. |
| `/pessoas/carreira` | `People` + `CareersContent` | Conteúdo completo de Trabalhe Conosco. Candidatura só é habilitada quando há URL oficial. |
| `/pessoas/desenvolvimento` | `People` | Tema legado de desenvolvimento. |
| `/pessoas/comunidade` | `People` | Tema legado de comunidade. |
| `/pessoas/cuidado` | `People` | Tema legado We Care. |
| `/servicos` | `Services` | Catálogo legado de serviços industriais, separado de Segmentos. |
| `/servicos/:slug` | `ServiceDetail` | Detalhe de um serviço legado. |
| `/instalacoes` | `Facilities` | Visão técnica legada de instalações. |
| `/equipamentos` | `Equipment` | Equipamentos e recursos produtivos, separados do catálogo Produtos. |
| `/certificacoes` | `Certifications` | Certificações, normas e qualificações. |
| `/obras-clientes` | `Cases` | Obras e clientes. |
| `/empresa/*` sem correspondência | redireciona para `/empresa` | Fallback da área institucional. |
| slug de segmento desconhecido | redireciona para `/segmentos` | Mantém a navegação dentro do índice correspondente. |
| demais rotas desconhecidas | redireciona para `/` | Fallback geral do React Router. |

## Navegação principal

O cabeçalho mostra os nove destinos, nesta ordem: Home, Empresa, Segmentos, Produtos, Qualidade, ESG, Ações Sociais, Contato e Trabalhe Conosco. Empresa é um link para `/empresa` e tem um botão de expansão separado para o índice, História e Estrutura. A navegação móvel usa botão com `aria-expanded` e `aria-controls`, fecha com Escape ou seleção e retira os links do foco quando está recolhida.

Páginas que não aparecem na barra principal continuam ligadas no rodapé: Pessoas, Serviços, Instalações, Equipamentos, Certificações e Obras e clientes.

## Fonte dos dados

O texto atual do cliente está em `docs/references/site textos resumido 18-10.docx`. O inventário em `src/content/__fixtures__/site-textos-18-10.manifest.json` registra os 582 parágrafos e sua classificação; `src/content/sourceDocuments.ts` guarda a identidade e o hash da fonte. Os dados do site usam `originRefs` para ligar trechos à numeração base 1 do documento. A aplicação não interpreta o Word em tempo de execução.

`src/content/institutionalContent.ts` é a fonte do conteúdo completo de História, Identidade, Estrutura, Qualidade e ESG. `src/content/companyContent.ts` fornece os marcos e a origem dos slides do carrossel. A página História reúne o carrossel interativo e a leitura completa.

`src/content/segmentsContent.ts` contém a copy integral dos seis segmentos e suas sínteses da Home. `src/content/productsContent.ts` contém os grupos e itens do catálogo; links de itens apontam para âncoras existentes.

`src/content/contactContent.ts` contém os contatos de Vendas e Compras, seus endereços de e-mail e os textos de Contato e Carreira. `src/content/careersContent.ts` contém a redação de Trabalhe Conosco. O formulário comercial com confirmação local foi removido; os links de Vendas e Compras abrem `mailto:`. Os telefones `XXXX` não são exibidos.

`src/content/editorialResources.ts` concentra mídia e destinos operacionais opcionais. Valores `null` indicam pendências reais: fotografia autorizada da Home, PDF ISO, código de conduta, URL de ouvidoria, URL de candidatura, links das divisões e telefones. A ação de denúncia e o envio de currículo só aparecem quando uma URL HTTP/HTTPS é configurada. A ausência desses recursos não deve ser preenchida com URLs inventadas, `href="#"`, formulários simulados ou confirmações de envio.

A área Ações Sociais continua usando sua fonte institucional anterior; a migração de conteúdo do Word de 18-10 não atribui uma nova copy a essa tela.

## Checklist para uma nova página

1. Defina o objetivo da página em uma frase.
2. Escolha a rota e registre-a neste documento.
3. Crie o diretório em `src/pages/<NomeDaPagina>`.
4. Reutilize o `SiteLayout` e os primitives compartilhados.
5. Inclua estados de conteúdo, vazio e erro quando aplicável.
6. Adicione à navegação principal somente se a página for pública e prioritária; páginas secundárias podem ser mantidas no rodapé.
7. Teste a rota diretamente e depois de recarregar o navegador em uma hospedagem com fallback de SPA.
8. Atualize este documento e o índice de documentação se uma nova convenção surgir.
