# Reorganização do site conforme layout e textos de 18-10 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task. Track progress with the checkboxes. Read the design and source map below before implementing.

**Goal:** Reorganizar a navegação e o conteúdo da Metalúrgica Vulcano conforme o desenho do cliente: foto principal horizontal e seis áreas de atuação em duas colunas, com o material do novo Word distribuído nas páginas correspondentes.

**Architecture:** Manter a SPA existente e suas URLs institucionais, acrescentando índices de Segmentos e Produtos e um template para os seis segmentos. Uma fonte editorial tipada fornece as sínteses da Home e os textos completos das páginas internas, com identificação da versão do Word e âncoras semânticas independentes dos números de parágrafo.

**Tech Stack:** React 19, TypeScript 6, Vite 8, React Router 6, styled-components 6, primitives Shadcn/Base UI já instaladas, fontes IBM Plex locais, infraestrutura GSAP existente, Vitest e Testing Library. Nenhuma dependência nova é necessária para esta proposta.

**Spec:** Seções 1–7 deste plano; [layout fornecido pelo cliente](../docs/references/layout-home-cliente-plano-005.png) e [Word revisado](../docs/references/site%20textos%20resumido%2018-10.docx).

**Status:** Implementação iniciada em 03/11/2026 após pedido do usuário para executar o plano. A Tarefa 1 está concluída; tarefas 2–7 seguem em andamento. Sem commit, push ou deploy nesta etapa.

**Escopo confirmado pelo usuário:** incluir no mesmo plano a Home, o menu da imagem e as páginas internas descritas no Word. Confirmação recebida: “Incluir as páginas internas no mesmo plano”. Essa resposta confirma a abrangência das tarefas, sem iniciar sua execução.

## Global Constraints

- Raiz real de execução: `C:\Users\Rv22\Desktop\calderaria`, onde estão `docs`, `plans`, `package.json` e `src`. A pasta interna `Caldeiraria` é um clone antigo, ignorado; não editar seu código nem registrá-la novamente como submódulo.
- A imagem governa a composição da Home. O Word de 18-10 governa a nova redação. Os documentos do projeto governam stack, identidade, manutenção, acessibilidade e movimento, salvo decisões explicitamente substituídas neste plano.
- Ordem do menu: **Home, Empresa, Segmentos, Produtos, Qualidade, ESG, Ações Sociais, Contato, Trabalhe Conosco**. Manter os nove acessos disponíveis no desktop e no menu móvel.
- Grade da Home: **Siderurgia | Caldeiraria; Serviços Industriais | Projetos e Equipamentos Sob Encomenda; Concretos Especiais e Pré-Moldados | Máquinas para Construção**. Em uma coluna, seguir essa mesma ordem por linhas.
- O plano 005 substitui a composição editorial da Home e a exclusão de Segmentos/Produtos do plano 004. Não reescrever os planos anteriores como se este pedido já estivesse aprovado na época.
- Sínteses são permitidas na Home, conforme orientação anterior do usuário. Preservar o conteúdo publicável completo nas páginas internas, com rastreabilidade; notas de edição, duplicações e lacunas têm tratamento explícito.
- Preservar as URLs existentes, o carrossel de História sem autoplay e o acesso às páginas técnicas. Produtos não equivale a Equipamentos; Segmentos não elimina Serviços.
- Não inventar telefone, URL externa, certificado, formulário funcional, vaga, canal anônimo, patente ou comprovação técnica. Não publicar `XXXX`, instruções de edição ou fotografias apresentadas como corporativas sem autorização.
- Não executar commit, merge, push ou deploy apenas por constarem como etapas futuras. Esta solicitação autoriza o planejamento.

## Review Focus

1. **Versão errada do conteúdo:** parágrafos do novo Word interpretados como índices do documento antigo. Tarefa 1 verifica versão, origem e cobertura; Tarefa 2 verifica âncoras e conteúdo institucional.
2. **Fidelidade perdida:** retorno ao hero dividido, às colmeias ou às seções extensas na Home. Tarefa 4 verifica foto seguida da grade de seis itens, com todo resumo visível.
3. **Menu apertado ou ambíguo:** itens somem, transbordam ou Empresa e Qualidade ficam ativos ao mesmo tempo. Tarefa 5 verifica ordem, seleção única, teclado e menu móvel.
4. **Destino aparentemente válido:** link desconhecido cai silenciosamente na Home ou refresh de rota retorna 404 no Netlify. Tarefas 3 e 7 verificam destinos, âncoras e fallback da hospedagem.
5. **Ação que não entrega:** formulário confirma envio local, currículo não chega ou ouvidoria promete anonimato sem canal real. Tarefa 6 verifica comportamento com e sem destinos configurados.

## 1. Evidências e estado atual

### Referências preservadas

| Fonte | Identificação |
| --- | --- |
| Novo Word | `docs/references/site textos resumido 18-10.docx`; 582 parágrafos no corpo, incluindo vazios; nenhuma tabela ou mídia incorporada |
| SHA-256 do Word | `F8726703DBF6314E0495CD22817CC83D138B50AD088E82648B8A446D37A9F391` |
| Imagem do cliente | `docs/references/layout-home-cliente-plano-005.png`; cópia do anexo, 1456 × 807 px |
| SHA-256 da imagem | `43B748DD7F7CD9C1778FA89B60A7B773010AE0E5659008CDAC4F8C82545A5A26` |
| Fonte anterior | `docs/references/site textos (Recuperação Automática).docx`; conservar como histórico, sem substituir sua identidade pela nova versão |

Neste plano, `P001` significa o primeiro parágrafo do corpo do novo Word, **contando vazios**, em ordem XML. O plano 004 e o código atual usam índices antigos em base zero; não reutilizar esses números sem conversão e identificação do documento.

A Home atual monta `HumanHero`, História, Identidade, processo, métricas, colmeias, Qualidade, ESG, carreira e contato. `SolutionsSection` tem seis hexágonos com descrições associadas a hover/foco. A referência nova pede outra composição: navegação, faixa fotográfica e seis blocos de texto.

Já existem índice Empresa e páginas de História, Estrutura, Qualidade, ESG e Ações Sociais; carreira está em `/pessoas/carreira`. Segmentos e Produtos ainda não têm rotas. `InstitutionalReading.tsx` associa âncoras aos números antigos `4`, `9`, `14`, `29` e `53`; `QualityPage.tsx` procura um complemento pelo índice antigo `179`. A troca de Word precisa remover essas dependências de apresentação.

O formulário de Contato apenas altera estado local e anuncia uma solicitação registrada. Não há envio real identificado. A nova redação não pode transformar essa simulação em promessa de atendimento ou recebimento de dados.

Documentação considerada: `docs/README.md`, `visao-geral.md`, `arquitetura.md`, `rotas-e-conteudo.md`, `padroes-visuais.md`, `qualidade-e-validacao.md`, `deploy-e-operacao.md`, `git-e-contribuicao.md` e o plano 004. A leitura do código prevalece quando documentos antigos descrevem capacidades desatualizadas.

## 2. Design proposto e limites de fidelidade

### Composição

```text
Home  Empresa  Segmentos  Produtos  Qualidade  ESG  Ações Sociais  Contato  Trabalhe Conosco
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                         FOTO PRINCIPAL HORIZONTAL                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘

           Siderurgia                                  Caldeiraria
       síntese sempre visível                      síntese sempre visível

      Serviços Industriais                  Projetos e Equipamentos Sob Encomenda
       síntese sempre visível                      síntese sempre visível

Concretos Especiais e Pré-Moldados                Máquinas para Construção
       síntese sempre visível                      síntese sempre visível

                               rodapé existente revisado
```

Manter blocos abertos, sem moldura de card, fundo próprio, hexágono ou dependência de hover. Os títulos podem ser links para o segmento correspondente; o parágrafo permanece texto selecionável e legível. Não acrescentar uma nova faixa de slogan, métricas, gráficos ou chamada entre a foto e a grade.

As marcações `Foto Principal`, `XXXXX`, `(Nome)` e os sublinhados de correção não são copy final. Normalizar `Qualidade`, `Caldeiraria` e `Sob Encomenda`. Os realces amarelos/azuis e textos vermelhos do rascunho não constituem uma paleta nova aprovada; preservar suas funções de destaque com a identidade atual.

### Identidade e assinatura

A assinatura desta proposta é uma fotografia industrial panorâmica apoiada por seis campos de especialidade organizados em pares. A precisão da grade, o enquadramento e os nomes reais dos segmentos sustentam a identidade; não acrescentar ornamentação para diferenciar o site.

| Token proposto | Valor | Aplicação |
| --- | --- | --- |
| Superfície principal | `#FFFFFF` | Home e blocos abertos, conforme referência |
| Azul marinho | `#11182D` | títulos, links e texto sobre ação laranja |
| Azul institucional | `#063E66` | estados de navegação e links de leitura |
| Laranja institucional | `#FB7900` | destaque de Trabalhe Conosco e detalhes funcionais |
| Texto secundário | `#475569` | parágrafos |
| Borda discreta | `#E2E8F0` | limites funcionais, sem enquadrar os seis blocos |

Reutilizar IBM Plex Sans Condensed para títulos e IBM Plex Sans Variable para corpo/menu. Não baixar novas fontes. Corpo 16–18 px, entrelinha 1,55; títulos dos segmentos 22–26 px, com quebra natural. Texto do botão laranja em azul marinho, em vez de branco com contraste insuficiente; foco sólido em azul institucional ou marinho.

O `ui-ux-pro-max` retornou Minimalism & Swiss Style e recomendações de grade, semântica e foco. Esses princípios se aplicam; a sugestão genérica de verde, novas fontes e sequência de features/CTA não foi adotada porque conflita com a marca e com os seis blocos do cliente. `frontend-design` orienta a hierarquia, a fotografia e a crítica de fidelidade, sem impor outro layout.

### Medidas e comportamento propostos

- Criar um container específico da nova Home/cabeçalho, com máximo de 1360 px e margens de 20–48 px. Não ampliar o `Container` global e alterar todas as telas incidentalmente.
- Desktop: grade `repeat(2, minmax(0, 1fr))`, largura útil máxima de 1120 px, centralizada; gap horizontal de 64–96 px; linhas separadas por 48–56 px. Intervalo foto/grade: 48–64 px.
- O rascunho original usa uma faixa baixa, aproximadamente 9,7:1. Após pedidos do cliente para ampliar a foto do hero e torná-la dominante, a implementação final usa 3:1 no desktop, com altura mínima de 240 px; no celular, mantém aproximadamente 16:7, com ponto focal próprio. Usar imagem responsiva até 2800 px para preservar nitidez. Não reaproveitar a proporção vertical do hero anterior.
- Duas colunas a partir de 768 px; abaixo disso, uma coluna, na ordem por linhas do desenho. Margens móveis de 20 px e intervalo entre blocos de 32 px. Nenhuma altura fixa, ellipsis ou line-clamp nos textos.
- Menu completo a partir de 1280 px; abaixo disso, botão Menu e lista com os nove acessos. Validar o encaixe real em 1280 px; ampliar o breakpoint se houver colisão, antes de reduzir legibilidade ou alvos.
- Manter a logo atual como identificação discreta na mesma faixa do cabeçalho, sem criar uma segunda faixa ou deslocar a foto. Este posicionamento é uma adaptação proposta: o rascunho não detalha a marca.
- Home com um `h1` acessível “Metalúrgica Vulcano”, visualmente oculto para não inventar um título sobre a foto; seis `h2` visíveis. Páginas internas com `h1` visível e conteúdo longo alinhado à esquerda.
- Foto estática; microinterações de cor/sublinhado de 150–200 ms. Sem zoom contínuo, autoplay ou novos efeitos de scroll. Manter cleanup e reduced motion da infraestrutura existente.

### Abordagens consideradas

**Recomendada:** recompor a Home conforme o desenho, atualizar fontes tipadas e promover rotas existentes ao novo menu. É a única alternativa que atende à hierarquia enviada com reaproveitamento da aplicação.

Conservar o hero dividido e apenas trocar os textos manteria a divergência visual. Uma reescrita com outro framework, novo sistema de componentes ou domínios separados acrescentaria trabalho que o pedido não exige. A escolha recomendada ainda é uma proposta; não registrar como decisão já aprovada pelo usuário.

## 3. Arquitetura de informação e destinos

| Menu principal | URL usada | Regra |
| --- | --- | --- |
| Home | `/` | selecionado somente na raiz |
| Empresa | `/empresa` | índice institucional; História e Estrutura continuam acessíveis |
| Segmentos | `/segmentos` | novo índice das seis áreas |
| Produtos | `/produtos` | novo catálogo agrupado, distinto do parque de equipamentos |
| Qualidade | `/empresa/qualidade` | promover a página existente |
| ESG | `/empresa/esg` | promover a página existente |
| Ações Sociais | `/empresa/acoes-sociais` | promover a página existente; lacuna editorial registrada |
| Contato | `/contato` | Vendas, Compras, carreira e Ouvidoria |
| Trabalhe Conosco | `/pessoas/carreira` | atualizar a experiência de carreira existente |

Empresa conserva acesso a índice, História e Estrutura no submenu já existente; manter link para o índice e um botão adjacente de expansão com nome acessível. Qualidade, ESG e Ações Sociais têm acessos próprios no primeiro nível e não devem ficar disponíveis apenas nesse submenu. `CompanySubnav` continua funcionando nas páginas internas.

Usar `/segmentos/:slug` para os conteúdos que o Word chama de “Subsites”, dentro desta SPA. A criação de sites independentes/domínios é uma expansão separada. Barra Ligas e Constructions recebem links externos somente quando suas URLs forem fornecidas e validadas; até lá, o conteúdo está nas páginas internas correspondentes.

| Ordem | Título da Home | Slug e destino |
| --- | --- | --- |
| 1 | Siderurgia | `/segmentos/siderurgia` |
| 2 | Caldeiraria | `/segmentos/caldeiraria` |
| 3 | Serviços Industriais | `/segmentos/servicos-industriais` |
| 4 | Projetos e Equipamentos Sob Encomenda | `/segmentos/projetos-e-equipamentos` |
| 5 | Concretos Especiais e Pré-Moldados | `/segmentos/concretos-especiais-e-pre-moldados` |
| 6 | Máquinas para Construção | `/segmentos/maquinas-para-construcao` |

Preservar `/empresa/historia`, `/empresa/estrutura`, `/pessoas`, demais `/pessoas/:topic`, `/servicos`, `/servicos/:slug`, `/instalacoes`, `/equipamentos`, `/certificacoes` e `/obras-clientes`. Oferecer acessos secundários/contextuais no rodapé e nas páginas relacionadas. Offshore permanece como especialidade e rota técnica existente, sem tornar-se um sétimo bloco na nova Home.

Não criar aliases curtos de Qualidade/ESG/Ações Sociais apenas por mudar os rótulos do menu. Um slug de segmento desconhecido redireciona para `/segmentos`, com `replace`, em vez de cair silenciosamente na Home. Registrar as novas rotas antes do fallback global.

## 4. Distribuição do Word e integridade editorial

| Parágrafos novos | Conteúdo | Destino/tratamento |
| --- | --- | --- |
| P001–P005 | marcadores Home/Empresa/História | estrutura editorial; não repetir como parágrafos |
| P007–P030 | História, expansão, futuro, Missão, Visão e Valores | `/empresa/historia`; atualizar sínteses do índice Empresa e carrossel |
| P032–P055 | estrutura e inventário | `/empresa/estrutura`; reconciliar com `/instalacoes` e `/equipamentos` |
| P057–P089 | Qualidade e ESG institucionais | compartilhar conteúdo com páginas dedicadas; P058/P068 são instruções de link |
| P091–P116 | apresentação dos seis segmentos | sínteses da Home e introduções completas no índice/detalhes de Segmentos |
| P118–P168 | catálogo hierárquico | `/produtos`; preservar níveis de lista do Word |
| P170–P177 | Qualidade dedicada | complementar `/empresa/qualidade`; P177 é pendência do certificado |
| P179–P202 | ESG dedicado | `/empresa/esg`; consolidar repetições; P201/P202 especificam recursos de ouvidoria/código de conduta |
| P204–P228 | Contato | `/contato`; P214/P220 têm telefone placeholder; notas de ação não são copy |
| P230–P249 | Trabalhe Conosco | `/pessoas/carreira`; preservar benefícios e compromisso humano; P240/P242 orientam a posição da candidatura |
| P252 | marcador Subsites | arquitetura editorial; não publicar literalmente |
| P254–P386 | Siderurgia detalhada | `/segmentos/siderurgia` |
| P388–P460 | Caldeiraria detalhada | `/segmentos/caldeiraria` |
| P462–P498 | Serviços Industriais detalhados | `/segmentos/servicos-industriais` |
| P500–P523 | Projetos e Equipamentos detalhados | `/segmentos/projetos-e-equipamentos` |
| P525–P546 | Concretos e lista de artefatos | `/segmentos/concretos-especiais-e-pre-moldados`; P526 é instrução de link externo |
| P552–P580 | Máquinas, implementos e retrofit | `/segmentos/maquinas-para-construcao`; P553 é instrução de link externo |

Classificar os 582 parágrafos como conteúdo, marcador, nota, repetição ou vazio. Para cada conteúdo publicável, registrar ao menos um destino; para repetição, indicar o conteúdo canônico e manter ambas as origens. Essa classificação deve ficar em fixture/documentação editorial, sem duplicar o texto inteiro em dois bundles ou interpretar DOCX no navegador.

Correções de ortografia, espaços e unidades são editoriais. Não alterar especificações técnicas silenciosamente. Exemplos a normalizar com registro: “Areai”, “Maquinas”, “Sob-Encomenda”, `m2` e espaços entre grandezas/unidades. Uma mesma descrição repetida em P472–P474/P476–P478 aparece uma vez; “Soldas Especiais” P153/P156 aparece uma vez em seu grupo; conclusões de ESG P198/P200 têm uma representação canônica. Todas as origens permanecem rastreáveis.

O catálogo tem 14 entradas no primeiro nível da lista: Siderúrgicos; Estruturas Metálicas; Tubulação e Spools; Suportes para Tubulação; Suportes para Instrumentação; Suportes Elétricos; Insertos e Chumbadores; Equipamentos para Transporte; Compósitos; Serviços Industriais; Equipamentos Sob Medida; Concretos Especiais; Contrapesos; Implementos para Construção. Conservar os itens subordinados de P120–P168, sem tratar materiais de tubulação como novos segmentos.

Produtos com detalhamento podem apontar para âncoras reais da página de segmento. Um item sem descrição própria permanece uma entrada textual no catálogo; não criar páginas vazias nem inventar ficha técnica. O texto detalhado pode ser compartilhado por catálogo e segmento, sem copiar descrições divergentes.

As instruções de links do Word recebem os seguintes destinos; os IDs devem existir antes de ativar os links:

| Nota editorial | Destino |
| --- | --- |
| P058 / P068 | `/empresa/qualidade` / `/empresa/esg` |
| P224 | `/pessoas/carreira` |
| P276 / P290 | `/segmentos/projetos-e-equipamentos#sistemas-adicao-e-injecao`, bloco baseado em P506 |
| P277 / P291 | `/contato#vendas` |
| P399 | `/segmentos/servicos-industriais#pintura-revestimento`, bloco P471–P478 |
| P459 / P498 | `/segmentos/servicos-industriais` / `/segmentos/caldeiraria` |
| P460 / P497 | `/segmentos/projetos-e-equipamentos` |
| P177 / P201 / P202 / P228 / P240 / P526 / P553 | recurso real correspondente em `editorialResources`, sujeito ao tratamento da seção 5 |

### Sínteses propostas para a Home

Estas são adaptações para revisão, não transcrições literais nem aprovação atribuída ao cliente. As introduções completas e seus títulos longos permanecem nas páginas internas. Buscar aproximadamente 25–40 palavras por bloco, sem cortar texto para encaixar alturas.

| Bloco | Copy proposta | Origem |
| --- | --- | --- |
| Siderurgia | Insumos siderúrgicos, peças e areias refratárias, além de equipamentos automatizados sob encomenda. A Vulcano combina engenharia e desenvolvimento de tecnologias para apoiar a estabilidade operacional e o rendimento dos processos de aciaria. | P095–P096 |
| Caldeiraria | Caldeiraria pesada e engenharia mecânica com precisão dimensional, soldagem de alta tecnologia e capacidade de execução de ponta a ponta. Soluções integradas para atender às exigências de cada projeto industrial. | P099–P100 |
| Serviços Industriais | Do processamento da matéria-prima às montagens e manutenções em campo, a Vulcano reúne capacidade fabril e serviços especializados. Engenharia, agilidade e segurança para operações industriais onshore e offshore. | P103–P104 |
| Projetos e Equipamentos Sob Encomenda | Desenvolvimento de equipamentos e projetos especiais para Siderurgia, Mineração, Infraestrutura e Óleo e Gás. Capacidade fabril e modelagem digital se unem em soluções personalizadas para as necessidades de cada operação. | P107–P108 |
| Concretos Especiais e Pré-Moldados | Por meio da Barra Ligas, o Grupo Vulcano oferece concretos usinados e artefatos pré-moldados para obras comerciais, industriais e de infraestrutura. Produção em Barra Mansa com foco em resistência, durabilidade e pontualidade. | P111–P112 |
| Máquinas para Construção | A Vulcano Constructions desenvolve subconjuntos estruturais, componentes pesados de chassis e soluções sob medida para montadoras. Engenharia aplicada às exigências da Linha Amarela e dos setores Agrícola e de Mineração. | P115–P116 |

## 5. Pendências com tratamento definido

| Tema | Evidência | Regra de implementação/publicação |
| --- | --- | --- |
| Ações Sociais | há item no layout, mas não seção própria no Word novo | manter a página e seu conteúdo anterior, com origem legada explícita no controle editorial, até que o cliente forneça uma revisão |
| Foto principal | anexo contém só o espaço da foto | preparar slot responsivo; substituir preview por fotografia corporativa autorizada antes da publicação |
| ISO 9001 e normas futuras | Word distingue renovação e transição; P174 prevê primeiro semestre de 2027 | manter status separados; obter arquivo real do certificado; não promover ISO 14001/45001 a emitidas pelo decorrer da data |
| Ano de aniversário | P018 relata o marco em 2024 | manter “50 anos em 2024” como fato histórico; não calcular anos atuais a partir desse selo nem alterar a narrativa para 52 por conta própria |
| Telefones | P214/P220 têm `XXXX` | não renderizar placeholders; configurar apenas números reais confirmados |
| Vendas/Compras | P212/P218 fornecem e-mails | usar `mailto:comercial@vulcano.ind.br` e `mailto:compras@vulcano.ind.br`; deixar claro que abre o cliente de e-mail; confirmar os endereços na revisão editorial |
| Candidatura | P240 pede formulário/link, sem destino fornecido | preparar ponto de integração antes do compromisso humano; habilitar envio somente com URL/processamento real; não incluir upload sem receptor |
| Ouvidoria | P227 promete canal confidencial/independente, P228 pede link anônimo | não reutilizar formulário comercial; ativar somente canal externo real validado; sem URL, não exibir ação ou promessa de canal ativo |
| Código de conduta/Barra Ligas/Constructions | P202/P526/P553 pedem mídia ou link sem URL | tratar como recursos pendentes; conteúdo textual interno permanece acessível; não adivinhar domínios ou usar `href="#"` |
| Afirmações técnicas | exemplos: patente P319, “até 10x” P342–P343, payback P375, ASME U Stamp P425 | preservar as afirmações e seus qualificadores como conteúdo fornecido pelo cliente; não ampliar resultados, criar novos selos ou converter descrição de conformidade de um projeto em certificação corporativa |

Essas pendências não impedem preparar e revisar o frontend. O Word é a autoridade da redação fornecida; recursos ainda sem arquivo/destino não devem receber status editorial `approved`. Registrar separadamente a copy disponível e os recursos operacionais que faltam.

**Limite de escopo em Pessoas:** esta migração atualiza somente Carreira. A revisão encontrou fotos Unsplash e o indicador legado “82% — prevenção antes da execução” nos outros tópicos de `People/index.tsx`, sem origem no Word novo. Não transportar esses elementos para Carreira nem declará-los validados por este plano. Registrar sua revisão em uma entrega separada; conservar as rotas e seu funcionamento não exige reproduzi-los nas telas novas. Esse limite é uma decisão proposta do coordenador para evitar ampliar a alteração de conteúdo solicitada.

## 6. Estrutura de arquivos e contratos

Arquivos novos propostos são novos entregáveis, não caminhos já existentes. Manter componentes pequenos; não criar CMS, backend ou motor genérico de documentos.

| Unidade | Arquivos | Responsabilidade |
| --- | --- | --- |
| Origem editorial | criar `src/content/sourceDocuments.ts`; fixture `src/content/__fixtures__/site-textos-18-10.manifest.json` | identidade e hash da fonte; rastreio de cobertura sem textos duplicados em runtime |
| Institucional | atualizar `institutionalContent.ts`, `companyContent.ts`, `InstitutionalReading.tsx`, páginas em `src/pages/Company/` | nova copy e âncoras estáveis; preservar carrossel e conteúdo legado ainda válido |
| Segmentos | criar `src/content/segmentsContent.ts`; `src/pages/Segments/index.tsx`, `SegmentDetailPage.tsx`, `SegmentReading.tsx`, `styles.ts` | seis definições tipadas, índice e template de leitura completa |
| Produtos | criar `src/content/productsContent.ts`; `src/pages/Products/index.tsx`, `styles.ts` | 14 grupos, seus itens e ligações para detalhes disponíveis |
| Home | atualizar `src/pages/Home/index.tsx`, `homeStyles.ts`; criar `sections/MainPhoto.tsx`, `SegmentOverview.tsx` | foto e grade da referência; a lista vem de `segmentsContent`, sem segunda cópia dos textos |
| Navegação | criar `src/content/navigation.ts`; atualizar `SiteLayout/index.tsx`, `SiteLayout/styles.ts`, `routes/routes.tsx` | destinos, estado ativo, submenu e mobile; manter rodapé/contexto de URLs antigas |
| Contato/carreira | criar `src/content/contactContent.ts`, `careersContent.ts`; atualizar `pages/Contact/index.tsx`; criar `pages/People/CareersContent.tsx` e integrar em `People/index.tsx` | redação revisada, departamentos e ações reais; não afetar outros tópicos de Pessoas |
| Operação editorial | criar `src/content/editorialResources.ts` | recursos opcionais reais: foto, certificado, canal de denúncia, candidatura, código de conduta e links das divisões |
| Hospedagem/documentação | criar `public/_redirects`; atualizar documentos da Tarefa 7 | SPA com refresh direto no Netlify; instruções coerentes com arquitetura nova |

Contratos a implementar:

```ts
type SourceRef = { documentId: 'word-legacy' | 'word-18-10'; paragraph: number }; // base 1
type SegmentSlug = 'siderurgia' | 'caldeiraria' | 'servicos-industriais'
  | 'projetos-e-equipamentos' | 'concretos-especiais-e-pre-moldados'
  | 'maquinas-para-construcao';
type SegmentBlock = { id: string; title: string; paragraphs: readonly EditorialParagraph[] };
type SegmentContent = {
  slug: SegmentSlug; title: string; homeSummary: string;
  introduction: readonly EditorialParagraph[]; blocks: readonly SegmentBlock[];
  originRefs: readonly SourceRef[];
};
type ProductItem = { id: string; label: string; originRefs: readonly SourceRef[]; href?: string };
type ProductGroup = { id: string; title: string; originRefs: readonly SourceRef[]; items: readonly ProductItem[] };
type PrimaryNavItem = { id: string; label: string; href: string };
```

`sourceDocuments.ts` exporta `SourceRef` e metadados das duas fontes. `EditorialParagraph` recebe `originRefs: readonly SourceRef[]` e `anchorId?: string`; `id` torna-se semântico para a copy migrada. Conservar o campo antigo `sourceParagraphs` apenas durante a migração, sem usá-lo para selecionar/organizar UI nova; índices antigos precisam de `+1` ao criar referências legadas em base 1. `HistorySlide.sourceRefs: string[]` e `HistoryBlock.sourceRefs: string[]` atuais são chaves semânticas de outra natureza: conservar seu contrato e acrescentar `originRefs` quando necessário, sem confundir os dois campos.

Exportar `segmentsContent: readonly SegmentContent[]`, `getSegment(slug: string): SegmentContent | undefined`, `productGroups: readonly ProductGroup[]`, `primaryNavItems: readonly PrimaryNavItem[]` e `getPrimaryNavId(pathname: string): string | undefined`. As páginas e a Home consomem esses mesmos objetos.

`editorialResources` contém `mainPhoto` com status e alternativas desktop/mobile, `iso9001PdfUrl`, `conductCodeUrl`, `whistleblowingUrl`, `careersApplicationUrl`, `barraLigasUrl`, `constructionsUrl` e telefones opcionais de Vendas/Compras. Valor ausente é `null`, nunca uma URL fictícia. Links externos abrem conforme decisão consistente do projeto; se houver nova aba, indicar isso e aplicar `rel="noopener noreferrer"`.

## 7. Execução por tarefas e agentes

A orientação abaixo é para uma execução futura autorizada. Coordenador integra mudanças; agentes de frontend trabalham em arquivos disjuntos. Um revisor confere a entrega de cada frente antes da integração final.

### Tarefa 1 — Reconciliar a fonte editorial e os contratos de conteúdo

**Responsáveis:** technical-writer + product-manager; revisão de software-architect.

**Arquivos:** criar `sourceDocuments.ts`, manifest de origem e dados de Segmentos/Produtos/Contato/Carreira/recursos da seção 6; atualizar tipos e dados institucionais existentes. Testes: `src/content/clientContent.test.ts` (novo), `institutionalContent.test.ts`, `companyContent.test.ts`, `homeContent.test.ts`.

**Interfaces:** produz os contratos da seção 6; as outras tarefas não inventam chaves, slugs, textos ou destinos concorrentes.

- [x] Conferir `git status`, raiz e referências; extrair parágrafos e níveis da lista com ferramenta local. Não fazer parsing de Word na aplicação.
- [x] Classificar os 582 parágrafos no manifest e mapear os destinos conforme a seção 4; cada número de 1 a 582 aparece uma vez. Revisar a classificação contra o Word, antes de compará-la à implementação, para que o teste não aceite um inventário reduzido ao conteúdo que acabou sendo renderizado.
- [x] Criar teste de cobertura da fonte: cada parágrafo classificado como publicável tem destino e `originRefs` com `documentId: 'word-18-10'`; IDs de blocos e slugs são únicos; notas e vazios não viram copy.
- [x] Criar teste para a ordem exata dos seis segmentos, 14 entradas de primeiro nível dos Produtos, uma ocorrência de Soldas Especiais no grupo e estado distinto das três normas ISO. Observar falha antes de importar os novos dados.
- [x] Modelar a copy normalizada, as seis sínteses propostas e os recursos opcionais. Preservar a origem legada de Ações Sociais e os qualificadores das afirmações técnicas do Word.
- [x] Executar `npm run test:run -- src/content`; os quatro arquivos e 17 testes passaram após atualizar os contratos e expectativas.

### Tarefa 2 — Atualizar a leitura institucional sem dependência de índices antigos

**Responsáveis:** frontend-engineer; revisão de technical-writer e accessibility-performance-engineer.

**Arquivos:** `src/components/InstitutionalReading.tsx`, `src/content/institutionalContent.ts`, `companyContent.ts`, `src/pages/Company/{index,HistoryPage,HistoryLongform,QualityPage,EsgPage,StructurePage,CompanySubnav}.tsx`; testes existentes correspondentes. `SocialActionsPage.tsx` apenas se necessário para integrar a origem legada e navegação.

**Interfaces:** consome a Tarefa 1; `InstitutionalReading` mantém sua API pública e usa `anchorId` em vez de números do Word.

- [x] Cobrir com testes as âncoras públicas `origem`, `expansao`, `futuro`, `capacidades` e `certificacoes` e a estabilidade ao mudar `originRefs`; verificar falha da seleção numérica antiga.
- [x] Remover a seleção pelo índice `179` de Qualidade e a tabela de âncoras por número de `InstitutionalReading`; selecionar blocos por IDs semânticos e recursos pelo modelo próprio.
- [x] Usar os textos completos novos nas páginas temáticas, compartilhando trechos comuns de Qualidade/ESG; manter o complemento dedicado quando realmente distinto.
- [x] Atualizar índice Empresa e carrossel com as fontes novas, sem inserir todos os assuntos comerciais como capítulos da História. Conservar teclado, âncoras e ausência de autoplay.
- [x] Testar História, Estrutura, Qualidade e ESG com suas seções e origens; Ações Sociais continua acessível, sem atribuir sua copy ao Word novo.
- [x] Executar `npm run test:run -- src/pages/Company src/content/institutionalContent.test.ts src/content/companyContent.test.ts` — 11 arquivos, 39 testes passaram; `npm run build` passou.

### Tarefa 3 — Entregar Segmentos, detalhes, catálogo e rotas

**Responsáveis:** frontend-engineer; revisão de software-architect e technical-writer.

**Arquivos:** novos `pages/Segments/*`, `pages/Products/*`, `content/segmentsContent.ts`, `productsContent.ts`; atualizar `src/routes/routes.tsx`. Testes novos `Segments.test.tsx`, `SegmentDetailPage.test.tsx`, `Products.test.tsx` junto às páginas.

**Interfaces:** `Segments(): ReactElement`, `SegmentDetailPage(): ReactElement`, `Products(): ReactElement`; consomem as coleções da Tarefa 1. IDs dos blocos são os destinos canônicos dos links do catálogo e notas editoriais.

- [x] Testar que os seis links do índice levam aos slugs definidos e que slug desconhecido retorna ao índice de Segmentos; o teste deve falhar antes de registrar as rotas.
- [x] Implementar índice e leitura completa por blocos, preservando a hierarquia dos textos e listas do Word. Usar `SegmentReading` específico, sem alargar artificialmente o enum institucional.
- [x] Dividir Siderurgia em areias, AM30, skimmer, retentores, barreiras, tampas, peças refratárias, insumos e equipamentos; Caldeiraria em estruturas, tubulações/vasos/tanques, suportes, insertos e logística; os demais segmentos seguem os subtemas e limites da seção 4.
- [x] Implementar Produtos como catálogo de grupos e itens; itens com `href` têm alvo real em bloco existente, itens sem detalhamento continuam texto. Não criar busca/filtros, carrinho ou ficha técnica vazia sem necessidade.
- [x] Testar resolução de todos os links internos e âncoras do catálogo; conferir que Serviços/Equipamentos legados continuam rotas distintas, sem redirecionamento para o catálogo.
- [x] Executar `npm run test:run -- src/pages/Segments src/pages/Products src/pages/Company/CompanyRoutes.test.tsx` — 4 arquivos, 21 testes passaram.

### Tarefa 4 — Recompor a Home conforme o desenho

**Responsáveis:** ux-ui-designer + frontend-engineer; revisão de accessibility-performance-engineer.

**Arquivos:** `src/pages/Home/index.tsx`, `homeStyles.ts`, novos `sections/MainPhoto.tsx`, `SegmentOverview.tsx`; ajustar `src/content/homeContent.ts` para não manter cópia concorrente dos seis resumos. Testes: `Home.test.tsx`, novos `MainPhoto.test.tsx` e `SegmentOverview.test.tsx`.

**Interfaces:** `MainPhoto(): ReactElement`, `SegmentOverview({ segments }: { segments: readonly SegmentContent[] }): ReactElement`; Home usa a coleção da Tarefa 1.

- [x] Atualizar os testes da Home: um `h1` acessível, foto antes da grade, seis títulos/links na ordem da referência, resumos visíveis sem hover e nenhum placeholder editorial. Os testes deixam de exigir o hero editorial e seções removidas da composição.
- [x] Renderizar somente foto e grade como conteúdo central da nova Home, seguidos do rodapé global; retirar da montagem desta rota os teasers, métricas, processo e colmeias. Preservar as páginas internas e não apagar modelos/componentes ainda usados por outras telas.
- [x] Aplicar medidas, tipografia, centralização e breakpoints da seção 2. Títulos longos devem quebrar naturalmente; não equilibrar alturas escondendo texto.
- [x] Implementar imagem responsiva com espaço reservado, `srcset`/`sizes` ou `<picture>`, dimensões e `alt` fiel ao arquivo. A imagem principal não é lazy; preview continua identificado apenas no ambiente de revisão.
- [x] Verificar apresentação estática com movimento reduzido e falha de imagem: sem desaparecer os seis links, alterar ordem ou criar salto grande de layout.
- [x] Executar `npm run test:run -- src/pages/Home` — 6 arquivos, 12 testes passaram. A foto corporativa autorizada ainda precisa substituir o preview antes da publicação.

### Tarefa 5 — Aplicar os nove acessos e o menu responsivo

**Responsáveis:** frontend-engineer; revisão de accessibility-performance-engineer.

**Arquivos:** novo `src/content/navigation.ts`; `src/components/SiteLayout/index.tsx`, `styles.ts`, `SiteLayout.test.tsx`; novo `navigation.test.ts`.

**Interfaces:** consome os destinos da Tarefa 3 e exporta `primaryNavItems`/`getPrimaryNavId`. Resolver Qualidade/ESG/Ações Sociais antes do prefixo genérico Empresa; Home exige igualdade com `/`.

- [x] Criar teste da ordem e destinos dos nove links; em `/empresa/qualidade`, apenas Qualidade fica ativa; em `/segmentos/caldeiraria`, apenas Segmentos; numa rota técnica legada, não marcar Home por engano.
- [x] Atualizar cabeçalho, logo discreta, link+expansor Empresa e rodapé. Manter acessos secundários às páginas retiradas da barra principal. “Trabalhe Conosco” recebe o destaque laranja da identidade.
- [x] Atualizar mobile: `button` Menu com `aria-expanded`/`aria-controls`, links em `nav`/lista, fechamento por Escape e seleção, retorno de foco ao acionador quando adequado e links fechados fora da sequência de Tab. Não aplicar `role="menu"` à navegação comum. Menu compacto até 1279 px; navegação completa a partir de 1280 px; alvo do botão 44 × 44 px.
- [x] Testar abertura, fechamento, foco, indicação atual e destinos por nome acessível com Testing Library; no navegador, verificar Enter, Tab, Shift+Tab e Escape nos layouts compacto e completo.
- [x] Executar `npm run test:run -- src/components/SiteLayout src/content/navigation.test.ts` — 3 arquivos, 14 testes passaram.

### Tarefa 6 — Reorganizar Contato e Trabalhe Conosco com ações verificáveis

**Responsáveis:** frontend-engineer + technical-writer; revisão de backend-integrations-engineer apenas para validar os limites das ações e de security-engineer para candidatura/ouvidoria.

**Arquivos:** `src/content/contactContent.ts`, `careersContent.ts`, `editorialResources.ts`; `src/pages/Contact/index.tsx`; novo `src/pages/People/CareersContent.tsx`, integração pontual em `People/index.tsx`; testes novos de Contato/Carreira.

**Interfaces:** `CareersContent(): ReactElement` usa dados novos; apenas o tópico `carreira` recebe essa composição. `editorialResources` aceita recursos válidos ou `null`.

- [x] Testar os quatro encaminhamentos de Contato e a redação de carreira; ausência de URL de ouvidoria/candidatura não pode gerar botão funcional, upload ou mensagem de envio concluído.
- [x] Trocar a confirmação simulada de Contato por ações reais de e-mail de Vendas/Compras. Preservar todo o conteúdo publicável pertinente e não exibir os telefones `XXXX`.
- [x] Posicionar o recurso de candidatura após “Por que fazer parte” e antes do compromisso humano, conforme P240–P249. Como o destino não foi fornecido, omitir o formulário e manter a pendência editorial para a decisão antes da publicação.
- [ ] Antes da publicação, registrar a decisão do responsável sobre manter Trabalhe Conosco sem botão de candidatura enquanto a URL oficial não for fornecida.
- [x] Não oferecer denúncia por meio do fluxo comercial. Sem URL validada, reter a chamada que promete canal ativo. Aplicar o mesmo tratamento ao certificado/código de conduta e aos links das divisões.
- [x] Testar casos com recursos presentes e ausentes, nomes de links, `mailto` corretos e ausência de confirmação fictícia. Preservar os demais tópicos de Pessoas; a revisão editorial de indicadores/fotos antigos continua fora deste escopo, conforme a seção 5.
- [x] Executar `npm run test:run -- src/pages/Contact src/pages/People` — 2 arquivos, 7 testes passaram.

### Tarefa 7 — Revisar fidelidade, rotas diretas e documentação

**Responsáveis:** qa-engineer + code-reviewer; aceite visual de ux-ui-designer e aceite editorial de product-manager/cliente.

**Arquivos:** criar `public/_redirects`; atualizar `docs/arquitetura.md`, `rotas-e-conteudo.md`, `padroes-visuais.md`, `qualidade-e-validacao.md`, `deploy-e-operacao.md` e índice `docs/README.md` se necessário. Atualizar apenas o checklist deste plano; não reescrever decisões históricas do 004.

**Interfaces:** recebe as seis entregas integradas. Não acrescenta capacidade comercial, formulário ou efeito visual fora do design.

- [x] Criar fallback Netlify `/* /index.html 200` em `public/_redirects`; preservar o fallback Apache existente. O build copia a regra para `dist/_redirects`.
- [x] Executar `npm run test:run`, `npm run lint` e `npm run build` na raiz canônica. Resultado final: 30 arquivos/101 testes passaram; lint sem erros (um aviso em arquivo de teste não alterado, `StructureSection.test.tsx`); build concluído, com aviso de chunk JS acima de 500 kB.
- [x] Comparar a Home em 1456 px com a referência: ordem do menu, foto panorâmica (ampliada depois a pedido do cliente), dois blocos por linha, centralização, nomes exatos e sem seções extras entre foto/grade/rodapé.
- [x] Conferir 320, 390, 768, 1024, 1279, 1280 e 1440 px sem rolagem horizontal; verificar também 640 px CSS, equivalente à largura de reflow em zoom de 200% a partir de 1280 px. No navegador, testar foco e Enter/Tab/Shift+Tab/Escape; a suíte cobre movimento reduzido.
- [x] Verificar contraste dos pares usados: `#64748b`/branco 4,76:1; `#a84d00`/branco 5,64:1 e em `#f4f7fb` 5,24:1; texto `#11182d` sobre ação `#fb7900` 6,57:1. O estado ativo também usa sublinhado; controles do menu medem 44 × 44 px.
- [x] Abrir diretamente no preview do build 26 rotas novas e legadas, atualizar História, navegar voltar/avançar e conferir `#origem` e `#capacidades`. A cópia local valida o artefato; o comportamento no Netlify publicado permanece pendente, pois não houve publicação autorizada.
- [x] Atualizar documentação com novo mapa, origem dos textos, sínteses da Home, conteúdo completo interno, pendências de mídia/ações e operação do fallback.
- [x] Revisar visualmente e registrar as pendências. Sem commit/push/publicação nesta execução; a publicação continua condicionada à foto autorizada e à decisão sobre URLs externas, conforme a seção 5.
- [ ] Confirmar as rotas diretamente no Netlify depois de uma publicação autorizada; o fallback do provedor real não pode ser comprovado apenas pelo preview local.

## 8. Dependências e estratégia de integração

```text
1 Conteúdo/contratos ──→ 2 Institucional ────────────┐
         ├────────────→ 3 Segmentos/Produtos ─→ 5 Menu ─┤
         ├────────────→ 4 Home ────────────────────────┤→ 7 QA e documentação
         └────────────→ 6 Contato/Carreira ────────────┘
```

Após a Tarefa 1, Home, leitura institucional e Contato/Carreira podem avançar em paralelo, com arquivos disjuntos. Tarefa 3 registra rotas; Tarefa 5 não modifica o roteador em paralelo. Coordenador integra a classificação editorial e resolve qualquer fonte compartilhada antes de liberar essas frentes.

Preferir revisões pequenas por tarefa. Commits futuros podem seguir: fonte editorial; páginas institucionais; segmentos e catálogo; Home; menu; contato/carreira; fallback e documentação. A escolha de execução/publicação permanece com o responsável do produto.

## 9. Critérios de aceite do conjunto

- [x] Os nove acessos existem e seguem a imagem; nenhum depende de hover para ser encontrado.
- [ ] O espaço da foto e os seis blocos da Home seguem a referência; a foto corporativa autorizada ainda deve ser fornecida antes da publicação.
- [x] O Word novo tem cobertura editorial auditável, com notas, repetições e vazios separados de copy; a versão antiga não é reinterpretada como nova.
- [x] Conteúdo completo está nas páginas correspondentes; a Home não concentra novamente a leitura integral de Empresa.
- [x] Segmentos, Produtos e Equipamentos têm responsabilidades distintas e todos os links ativos resolvem destinos reais.
- [x] História/carrossel, URLs antigas e âncoras continuam utilizáveis; as rotas novas abrem diretamente e após atualização no preview do build.
- [x] Layout móvel, teclado, foco, contraste e movimento reduzido foram revisados por navegador, testes e inspeção dos estilos.
- [x] Não há envio simulado, telefone placeholder, promessa de denúncia sem canal ou recurso marcado como aprovado sem evidência.
- [x] Foto, documento ISO e URLs externas reais ainda pendentes foram tratados conforme a seção 5; Ações Sociais conserva sua fonte anterior até nova redação.

## 10. Referências técnicas e revisão do planejamento

- [W3C — navegação com disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/): semântica de navegação comum, botões de expansão e Escape; adaptar e testar o comportamento, sem copiar o exemplo como componente pronto.
- [W3C — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): critério para os pares de texto e fundo.
- [W3C — refluxo](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html): conteúdo utilizável em largura equivalente a 320 CSS px.
- Consultas locais `ui-ux-pro-max`: `industrial manufacturing corporate minimal --design-system`; `accessible navigation responsive --stack react`; `keyboard navigation menu focus --domain ux`. Usadas como orientação, subordinadas à imagem e à identidade existente.

Este plano incorporou análise independente de arquitetura/rotas, revisão de UX/fidelidade/acessibilidade e uma leitura adicional por um executor. A única lacuna importante apontada pelo executor foi o limite de escopo dos indicadores e fotos antigos de Pessoas; a decisão está registrada na seção 5. Foram conferidos o índice 005, os hashes e dimensões das referências, os links locais e a estrutura das sete tarefas. Na execução, o baseline teve 70 testes aprovados; a Tarefa 1 adicionou cobertura editorial e passou com 17 testes de conteúdo, além do build TypeScript/Vite.
