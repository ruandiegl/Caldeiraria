# Padrões visuais

## Direção visual

A interface deve comunicar engenharia aplicada, capacidade industrial, precisão e proximidade humana. O visual combina imagens de operação, azul profundo, superfícies claras e laranja de ação. A estética deve parecer específica para caldeiraria e serviços industriais, não um template genérico.

## Tokens observados

Use os valores existentes como referência antes de criar novos:

| Uso | Valor de referência |
| --- | --- |
| Azul marinho principal | \`#11182d\` |
| Azul de texto | \`#223044\` |
| Azul institucional | \`#063e66\` |
| Laranja de ação | \`#fb7900\` |
| Laranja de destaque | \`#ff8424\` |
| Texto secundário | \`#475569\` |
| Fundo suave | \`#f4f7fb\` / \`#f8fafc\` |
| Verde do WhatsApp | \`#1f9d55\` |
| Bordas suaves | \`#e2e8f0\` |

Se a mudança exigir uma nova cor, confirme primeiro se ela representa uma necessidade semântica real. Não introduza gradientes ou cores decorativas sem função.

## Tipografia

- A base de novas interfaces usa \`IBM Plex Sans Variable\`; títulos editoriais usam \`IBM Plex Sans Condensed\`, com fallback para \`Open Sans\`, \`Arial Narrow\` e \`sans-serif\`.
- Títulos editoriais usam caixa de frase, peso forte e escala responsiva com \`clamp\`; páginas legadas podem manter caixa alta enquanto não forem migradas.
- Eyebrows são pequenos, fortes, espaçados e em caixa alta.
- Textos corridos usam largura limitada e line-height confortável.
- Botões e labels devem permanecer curtos, diretos e em caixa alta quando seguirem o padrão existente.

## Layout

- Use \`Container\` para manter alinhamento horizontal consistente.
- A largura base atual é de aproximadamente \`1062px\`, com margens laterais responsivas.
- Seções têm bastante respiro vertical; em mobile, reduza o espaçamento sem eliminar a hierarquia.
- Prefira grids explícitos e colunas que colapsem em breakpoints claros.
- Use cantos arredondados discretos, normalmente entre \`7px\` e \`8px\`, reservando círculos para controles ou sinais específicos.
- O hero é uma tese da página: imagem, overlay, título e chamada devem responder ao propósito daquela rota.
- A Home usa uma composição documental: a capacidade industrial é apresentada a partir das pessoas, do processo e do contexto, não apenas de cards e números.
- O bloco “Por dentro do trabalho” é a assinatura da Home e organiza três momentos: preparar, fazer e cuidar.

## Imagens

- Imagens industriais devem reforçar o assunto da seção.
- Use overlay escuro quando o texto estiver sobre a imagem.
- Forneça \`alt\` descritivo para conteúdo informativo; use \`alt=""\` apenas em imagens puramente decorativas.
- Preserve \`object-fit: cover\` para fotos de hero e \`object-fit: contain\` para logos quando aplicável.
- URLs externas devem ser tratadas como dependência operacional: confira disponibilidade e considere migrar imagens essenciais para \`src/assets\`.
- Pessoas reais só devem aparecer com autorização de uso de imagem e revisão dos nomes, funções e EPIs visíveis.
- Durante a prototipação, imagens do Unsplash podem ser usadas somente como `preview-asset`, sempre com a etiqueta “Imagem de demonstração” e legenda indicando substituição. Antes da publicação, todos os previews devem ser trocados por imagens corporativas autorizadas (`approved`); não use banco de imagens para representar colaboradores reais.

## Interação e movimento

- Use `data-reveal` para novas entradas progressivas; `.reveal` existe apenas para compatibilidade com páginas legadas.
- A entrada padrão usa 24 px de deslocamento, 650 ms, `power2.out`, stagger de 80 ms e execução única.
- O cabeçalho começa branco sólido e assume liquid glass após 24 px, em 350 ms; não anime o blur continuamente durante scroll.
- Anime blocos internos de texto, mídia ou dados, nunca o fundo completo da seção.
- Microinterações devem ser curtas e funcionais: elevação pequena, mudança de cor ou foco.
- Respeite \`prefers-reduced-motion: reduce\`; não adicione animações que ignorem essa preferência.
- Não use movimento constante apenas para preencher espaço.
- Não introduza scroll hijacking, pinning, paralaxe ou smooth scroll sem novo planejamento e validação de performance.
- Foco de teclado deve permanecer visível; \`:focus-visible\` usa outline laranja com offset.

Para implementação e cleanup, consulte [Movimento e GSAP](./movimento-e-gsap.md).

## Acessibilidade

- Todo controle deve ter nome acessível.
- Botões devem usar \`button\`; navegação deve usar links.
- Campos de formulário devem ter \`label\` associado pela estrutura ou por \`htmlFor\`/\`id\` quando necessário.
- Não comunique estado somente por cor.
- Teste navegação por teclado e leitura em larguras de mobile.
- Ao incluir um ícone decorativo, marque-o com \`aria-hidden="true"\`.
