# Rotas e conteúdo

## Rotas públicas

| Rota | Componente | Responsabilidade |
| --- | --- | --- |
| \`/\` | \`Home\` | Apresentação principal e caminhos de entrada. |
| \`/empresa\` | \`Company\` | História, identidade e posicionamento institucional. |
| \`/pessoas\` | \`People\` | Visão geral de carreira, desenvolvimento, comunidade e cuidado. |
| \`/pessoas/:topic\` | \`People\` | Experiência detalhada de um tópico de pessoas. |
| \`/servicos\` | \`Services\` | Catálogo de serviços industriais. |
| \`/servicos/:slug\` | \`ServiceDetail\` | Detalhe de um serviço identificado por slug. |
| \`/instalacoes\` | \`Facilities\` | Unidades e capacidades físicas. |
| \`/equipamentos\` | \`Equipment\` | Equipamentos e recursos produtivos. |
| \`/certificacoes\` | \`Certifications\` | Certificações, normas e qualificações. |
| \`/obras-clientes\` | \`Cases\` | Clientes, obras e provas de experiência. |
| \`/contato\` | \`Contact\` | Formulário e informações de atendimento. |
| qualquer outra | redireciona para \`/\` | Fallback definido no roteador. |

## Parâmetro \`topic\`

Os valores aceitos atualmente são:

- \`carreira\`
- \`desenvolvimento\`
- \`comunidade\`
- \`cuidado\`

Um tópico desconhecido redireciona para \`/pessoas\`. Ao adicionar um tópico, atualize o mapa de dados e os links de navegação da própria página.

## Parâmetro \`slug\`

Os serviços atuais estão em \`src/content/siteData.ts\` e usam estes slugs:

- \`soldagem\`
- \`tubulacao\`
- \`suportes\`
- \`tanques-vasos\`
- \`chumbadores\`
- \`miscelaneas\`
- \`projetos-sob-medida\`
- \`offshore\`

O slug deve ser estável, minúsculo e sem acentos. O título visível pode conter acentuação normal.

## Fonte dos dados

\`src/content/siteData.ts\` concentra:

- \`services\`;
- \`certifications\`;
- \`clients\`;
- \`projects\`;
- \`facilities\`;
- \`equipment\`.

Dados próprios de uma experiência de pessoas permanecem em \`src/pages/People/index.tsx\` enquanto forem específicos daquela página. Se forem consumidos por outras partes, mova-os para uma fonte de conteúdo compartilhada.

## Checklist para uma nova página

1. Defina o objetivo da página em uma frase.
2. Escolha a rota e registre-a neste documento.
3. Crie o diretório em \`src/pages/<NomeDaPagina>\`.
4. Reutilize o \`SiteLayout\` e os primitives compartilhados.
5. Inclua estados de conteúdo, vazio e erro quando aplicável.
6. Adicione o link à navegação somente se a página for pública e prioritária.
7. Teste a rota diretamente e depois de recarregar o navegador.
8. Atualize este documento e o índice de documentação se uma nova convenção surgir.

