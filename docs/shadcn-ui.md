# Shadcn/UI no projeto

Este documento registra como o projeto deve adotar o Shadcn/UI e como usar a skill instalada para orientar futuras implementações.

## Status

- A skill oficial `shadcn` foi instalada no ambiente do Codex em `C:\Users\Rv22\.codex\skills\shadcn`.
- A skill passa a ser descoberta automaticamente em uma nova tarefa/sessão do Codex.
- O Shadcn/UI **ainda não foi inicializado no código do projeto**. A introdução técnica está prevista no plano `plans/plan-001-home-humanizada-e-fundacao-visual.md`.
- O projeto continua usando React, TypeScript, Vite e styled-components até que cada migração planejada seja implementada e validada.

## Por que usar

O Shadcn/UI fornece componentes acessíveis como código-fonte pertencente ao próprio repositório. Ele será usado como base de comportamento e acessibilidade, enquanto a identidade visual da Metalúrgica Vulcano será aplicada por tokens e componentes de marca.

O objetivo não é transformar o site em uma coleção de componentes genéricos. A composição deve manter linguagem editorial, fotografia documental e hierarquia visual própria do ambiente industrial.

## Estratégia de adoção

A adoção será incremental:

1. adicionar Tailwind CSS v4 e os aliases de importação exigidos pelo Shadcn;
2. inicializar o Shadcn para Vite com base Radix;
3. centralizar tokens semânticos em um único arquivo CSS global;
4. manter `styled-components` nas páginas antigas durante a transição;
5. usar `src/components/ui/` somente para componentes gerados ou mantidos pelo Shadcn;
6. usar `src/components/brand/` para composições específicas da Vulcano;
7. migrar páginas de forma isolada, com validação visual das rotas que ainda usam o sistema antigo.

Não faça uma reescrita global de estilos apenas para uniformizar tecnologia.

## Uso obrigatório da skill

Use a skill `shadcn` quando a tarefa envolver:

- inicialização ou configuração do Shadcn;
- pesquisa, instalação ou atualização de componentes;
- criação de blocos compostos com primitives do Shadcn;
- correção de acessibilidade, variantes, temas ou imports desses componentes;
- alteração de `components.json` ou aplicação de presets.

Fluxo esperado:

1. executar `npx shadcn@latest info --json` para ler o contexto real do projeto;
2. conferir os componentes já instalados antes de adicionar outro;
3. usar `npx shadcn@latest search` para procurar primitives existentes;
4. consultar `npx shadcn@latest docs <componente>` antes de implementar;
5. revisar os arquivos gerados e seus imports;
6. para atualizações, usar `--dry-run` e `--diff` antes de qualquer sobrescrita;
7. nunca usar `--overwrite` sem autorização explícita.

## Regras de composição

- Prefira componentes existentes a marcação artesanal quando houver primitive adequada.
- Use cores semânticas como `background`, `foreground`, `primary`, `muted` e `border`; não espalhe cores literais nos componentes.
- Use `gap-*` em pilhas e grids, nunca `space-x-*` ou `space-y-*`.
- Use `size-*` quando largura e altura forem iguais.
- Use `cn()` para classes condicionais.
- Use `Separator`, `Badge`, `Skeleton`, `Alert` e demais primitives em vez de reproduzir seus comportamentos manualmente.
- Todo `Dialog`, `Sheet` e `Drawer` precisa de título acessível.
- Todo `Avatar` precisa de fallback.
- Ícones dentro de botões usam `data-icon` e não recebem tamanho manual.
- Formulários usam `FieldGroup` e `Field`; erros combinam `data-invalid` no campo e `aria-invalid` no controle.
- Use composição completa de `Card` quando um card for realmente necessário; evite transformar toda seção editorial em cartões.

## Estrutura prevista

~~~text
src/
├── components/
│   ├── ui/                 # Código-fonte de primitives do Shadcn
│   └── brand/              # Composições com identidade Vulcano
├── lib/
│   └── utils.ts            # Função cn e utilitários relacionados
└── styles/
    └── shadcn.css          # Tailwind, tema e tokens semânticos
components.json             # Configuração e aliases do Shadcn
~~~

## Componentes inicialmente indicados

Para a primeira etapa, use apenas o necessário:

- `Button` para chamadas de ação;
- `Separator` para divisões editoriais;
- `Sheet` somente se a navegação móvel entrar no mesmo escopo;
- `Badge` apenas para categorias ou estados semânticos;
- `Accordion` quando conteúdo detalhado precisar ser progressivamente revelado.

Carrosséis automáticos e grids excessivos de cards não devem ser usados para simular humanização. Fotos reais, legendas, hierarquia e narrativa têm prioridade.

## Compatibilidade com o legado

O Tailwind adiciona estilos globais. Após a inicialização, valide todas as rotas para detectar conflitos com `src/styles/GlobalStyles.ts` e `src/pages/siteStyles.ts`.

Enquanto houver dois sistemas:

- não duplique o mesmo componente em Shadcn e styled-components sem motivo;
- não aplique classes Tailwind dentro de um primitive antigo apenas para ajustes pontuais;
- encapsule novos padrões em `components/brand`;
- registre a página migrada e os estilos antigos que ainda possuem consumidores.

## Validação mínima

Depois de adicionar ou alterar componentes Shadcn:

~~~bash
npm run lint
npm run build
~~~

Também verifique:

- navegação completa por teclado;
- foco visível;
- contraste nos estados normal, hover, focus e disabled;
- largura mobile e desktop;
- preferência `prefers-reduced-motion`;
- regressões nas páginas que continuam usando styled-components.

## Referências oficiais

- [Instalação com Vite](https://ui.shadcn.com/docs/installation/vite)
- [Theming](https://ui.shadcn.com/docs/theming)
- [Componentes](https://ui.shadcn.com/docs/components)
- [CLI](https://ui.shadcn.com/docs/cli)

