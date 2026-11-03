# Padrões visuais

## Direção visual

A interface comunica engenharia aplicada, capacidade industrial, precisão e proximidade humana. Use azul profundo, superfícies claras e laranja de ação. O visual deve continuar específico à Metalúrgica Vulcano, sem parecer um template genérico.

## Cores de referência

| Uso | Valor |
| --- | --- |
| Azul marinho | `#11182d` |
| Azul de texto | `#223044` |
| Azul institucional | `#063e66` |
| Laranja de ação | `#fb7900` |
| Laranja para texto pequeno em fundo claro | `#a84d00` |
| Laranja de destaque | `#ff8424` |
| Texto secundário | `#475569` |
| Fundo suave | `#f4f7fb` / `#f8fafc` |
| Verde do WhatsApp | `#1f9d55` |
| Borda suave | `#d8e3ef` |

## Tipografia e layout

- Use IBM Plex Sans Variable para leitura e IBM Plex Sans Condensed nos títulos editoriais, com os fallbacks instalados.
- Prefira caixa de frase, pesos fortes e tamanhos responsivos com `clamp`; telas legadas ainda podem usar caixa alta.
- Eyebrows permanecem curtos, espaçados e em caixa alta.
- Use `Container` para alinhar o conteúdo editorial geral, com largura de referência de 1062 px. A Home e o cabeçalho seguem containers próprios: até 1360 px para a faixa de foto/cabeçalho e 1120 px para a grade de segmentos.
- Grids devem ter colunas explícitas e colapsar em breakpoints definidos. Reduza o espaço vertical em telas estreitas sem remover a hierarquia.
- Use cantos discretos, normalmente entre 7 e 8 px. Mantenha corpo de texto com largura e line-height confortáveis.

## Home e conteúdo

A Home segue o layout aprovado pelo cliente: fotografia de destaque em 3:1 no desktop, com altura mínima de 240 px, e proporção 16:7 no celular. O hero foi ampliado a pedido do cliente, com uma fonte responsiva até 2800 px para preservar nitidez. Abaixo, seis blocos abertos de Segmentos ficam em duas colunas a partir de 768 px e em uma coluna em telas estreitas. Os nomes e a ordem vêm de `segmentsContent.ts`. Os blocos levam às páginas de conteúdo integral; a Home não reintroduz as métricas e seções antigas.

A foto corporativa da Home ainda está pendente. A imagem conceitual local pode ser exibida em prévias e em produção, sempre identificada como “Imagem conceitual”. Quando a Vulcano fornecer uma foto autorizada, atualizar o conteúdo e a classificação da mídia.

## Imagens

- Escolha imagens que correspondam ao assunto e use overlay quando houver texto sobreposto.
- Imagens informativas recebem `alt` descritivo; mídia decorativa recebe `alt=""`.
- Preserve `object-fit: cover` para fotografia e `contain` para logos.
- Imagens externas são dependências operacionais: verifique disponibilidade, uso autorizado e fallback.
- Pessoas reais só aparecem com autorização de imagem e revisão do contexto, nomes e EPIs.
- Não use banco de imagens para representar colaboradores reais nem publique previews como conteúdo corporativo aprovado.

## Interação, navegação e movimento

- A navegação principal contém Home, Empresa, Segmentos, Produtos, Qualidade, ESG, Ações Sociais, Contato e Trabalhe Conosco.
- No desktop, o cabeçalho reserva toda a faixa para os nove acessos, distribuídos horizontalmente em um limite de 1360 px; não exibe o logotipo junto ao menu. Os rótulos ficam em caixa de frase, e “Trabalhe Conosco” recebe o destaque laranja da marca com texto marinho. Em telas compactas até 1279 px, o logotipo acompanha o botão Menu.
- O cabeçalho desktop mede 68 px; a foto principal começa 24 px abaixo dele, alinhada à grade central de 1360 px. O cabeçalho compacto mede 64 px e conserva o respiro móvel da foto.
- Empresa é link e tem botão disclosure próprio. Ele informa `aria-expanded` e `aria-controls`; as opções devem poder ser descobertas por clique e teclado, sem depender apenas do hover.
- O menu compacto usa um botão Menu com nome acessível, fecha com Escape e após escolher uma rota, retorna o foco ao acionador quando Escape o fecha, e remove os links recolhidos da sequência de Tab.
- Controles interativos devem ter área de toque confortável de ao menos 44 × 44 px sempre que o layout permitir.
- Microinterações são curtas e úteis. Anime elementos internos, não o fundo inteiro.
- Respeite `prefers-reduced-motion`. Não adicione scroll hijacking, pinning ou paralaxe sem planejamento específico.
- Foco de teclado deve permanecer visível, com outline de contraste adequado.

Para implementação e cleanup, consulte [Movimento e GSAP](./movimento-e-gsap.md).

## Acessibilidade

- Todo controle recebe nome acessível. Use botões para ações e links para navegação.
- Navegação comum usa semântica de lista dentro de `nav`, sem `role="menu"`.
- Não comunique estado apenas por cor.
- Verifique foco, contraste e leitura em larguras móveis, incluindo refluxo a 320 CSS px.
