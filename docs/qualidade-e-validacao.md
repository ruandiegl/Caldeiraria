# Qualidade e validação

## Validações obrigatórias

Antes de considerar uma mudança pronta, execute:

~~~bash
npm run test:run
npm run lint
npm run build
~~~

O Vitest verifica os contratos de conteúdo e componentes. O lint verifica regras JavaScript/TypeScript, React Hooks e React Refresh. O build executa o TypeScript via \`tsc -b\` e depois empacota a aplicação com Vite.

## Validação manual mínima

Para mudanças de interface ou rota:

1. Abra a rota pelo menu.
2. Recarregue a página diretamente pela URL.
3. Teste a navegação de volta e os links relacionados.
4. Verifique uma largura desktop e uma largura mobile.
5. Navegue pelos controles com teclado.
6. Ative a preferência de movimento reduzido quando a mudança tiver animação.
7. Confirme que imagens, textos e botões não estouram o layout.
8. Se a mudança envolver a Home, diferencie `preview-asset` (imagem temporária de demonstração) de `approved` (imagem corporativa autorizada); qualquer `pending-asset` ou preview remanescente é bloqueio editorial para publicação.
9. Em animações, volte ao topo, cruze o limiar nos dois sentidos e navegue entre rotas para identificar triggers duplicados.
10. Inspecione o console e uma gravação de performance mobile; movimento não deve produzir tarefas longas recorrentes nem layout shift.

## Checklist por tipo de mudança

### Página ou rota

- rota registrada em \`src/routes/routes.tsx\`;
- fallback para parâmetros inválidos;
- link de entrada disponível quando necessário;
- título, conteúdo e chamada coerentes;
- rota documentada em [Rotas e conteúdo](./rotas-e-conteudo.md).

### Conteúdo institucional

- dados centralizados quando reutilizáveis;
- nomes, normas e clientes revisados;
- nenhuma informação provisória apresentada como fato;
- imagens e links externos verificados.

### Estilo ou responsividade

- primitives existentes considerados antes de criar novos;
- breakpoints testados;
- foco visível preservado;
- \`prefers-reduced-motion\` respeitado;
- contraste e leitura conferidos.
- tokens semânticos do Shadcn usados no lugar de cores soltas;
- primitives gerados pelo Shadcn revisados após qualquer atualização da CLI.

### Home visual e Empresa em rotas

- `Home.test.tsx`: uma abertura com `h1`, sínteses coloridas, fotos provisórias identificadas, dados reais e links para a leitura integral; o inventário e a prosa longa não devem dominar a Home.
- `institutionalContent.test.ts`: cobertura exata dos 60 parágrafos públicos antes de “Segmentos”, exclusão de notas editoriais, cinco destinos e status das normas ISO.
- `CompanyRoutes.test.tsx`: índice e cinco telas diretas, fallback institucional e preservação de rotas técnicas. O menu Empresa deve abrir o submenu por foco/hover e mostrar as entradas no mobile.
- `HistoryCarousel.test.tsx`: botões, limites, teclado, swipe, anúncio acessível, destinos reais e legenda de imagem de demonstração.
- Páginas próprias: um `h1` por rota, texto integral em História/Identidade, Estrutura, Qualidade, ESG e Ações Sociais; ISO 9001:2015 vigente separada de ISO 14001/45001 em transição.
- `/instalacoes`: três unidades (16.000, 15.000 e 3.500 m²) conforme o parágrafo 12 do Word, com link para `/empresa/estrutura`.
- Conferir visualmente as rotas em mobile/desktop, inclusive URL direta e refresh; fotos e links pendentes continuam bloqueios editoriais para publicação.

### Movimento

- conteúdo visível sem depender de classe final de animação;
- `prefers-reduced-motion` testado com duração e deslocamento removidos;
- `useGSAP` com scope e cleanup local;
- ausência de `scrub`, pinning e listeners React por scroll quando não forem requisitos explícitos;
- cabeçalho sólido no topo e glass somente depois de 24 px;
- menu mobile, dropdown e foco conferidos nos dois estados do cabeçalho;
- build sem novo aviso de chunk causado pela feature.

### Formulário

- campos obrigatórios definidos com \`required\`;
- tipo de input coerente;
- feedback de sucesso ou erro claro;
- nenhum dado sensível gravado no navegador sem decisão explícita;
- integração real documentada caso seja adicionada.

## Limitações conhecidas

- A suíte Vitest cobre o conteúdo da Home, a Home humanizada e as primitives de marca; novos comportamentos devem receber testes antes da implementação.
- O formulário de contato não possui envio real.
- WhatsApp e redes sociais não aparecem sem URLs oficiais configuradas. Definir `VITE_WHATSAPP_URL`, `VITE_INSTAGRAM_URL` e `VITE_LINKEDIN_URL` apenas após confirmação do cliente; não usar números ou destinos genéricos.
- Links de redes sociais apontam para páginas genéricas e precisam ser substituídos pelos perfis oficiais.
- Algumas imagens são remotas e dependem de URLs externas.
