# Qualidade e validação

## Validações automatizadas

Antes de considerar uma mudança pronta, execute na raiz do projeto:

~~~bash
npm run test:run
npm run lint
npm run build
~~~

Vitest cobre conteúdo, componentes e rotas. ESLint verifica JavaScript/TypeScript, React Hooks e React Refresh. O build executa TypeScript e gera os arquivos Vite em `dist/`.

## Revisão manual de interface e rotas

Para mudanças de interface ou rota:

1. Acesse as páginas pelo menu, por link interno e por URL direta.
2. Atualize a página diretamente e teste voltar/avançar.
3. Confira larguras 320, 390, 768, 1024, 1279, 1280 e 1440 px; verifique zoom, quebras e rolagem horizontal.
4. Teste Tab, Shift+Tab, Enter e Escape, incluindo os estados fechado/aberto do menu.
5. Ative reduced motion quando houver movimento.
6. Confira foco, contraste, textos, âncoras, imagens e links.
7. Teste rotas diretas em hospedagem com fallback SPA. O servidor de desenvolvimento Vite não valida a regra do provedor.

## Cobertura por área

- `src/content/clientContent.test.ts`: inventário dos 582 parágrafos do Word, classificação editorial, referências e exclusão de notas internas.
- testes de `institutionalContent`, `companyContent` e `InstitutionalReading`: origem, âncoras estáveis, carrossel sem autoplay e texto completo nas rotas institucionais.
- testes de Segmentos e Produtos: seis slugs, textos/âncoras reais, 14 grupos, links válidos e fallback de slug desconhecido.
- `src/pages/Home`: um `h1`, slot de foto antes da grade e seis sínteses na ordem do layout. O conteúdo integral permanece nas páginas internas.
- `src/content/navigation.test.ts` e `src/components/SiteLayout/SiteLayout.test.tsx`: ordem dos nove links, estado ativo, Empresa como link mais disclosure, teclado, foco e fechamento do menu compacto.
- `src/pages/Contact/Contact.test.tsx`: e-mails `mailto:` de Vendas/Compras, carreira, ausência do formulário simulado e regra de URL real da Ouvidoria.
- `src/pages/People/CareersContent.test.tsx`: conteúdo completo, ordem editorial, rota pública e candidatura apenas com URL HTTP/HTTPS.
- testes de páginas técnicas: Serviços e Equipamentos continuam independentes de Segmentos e Produtos.

## Conteúdo e recursos pendentes

- A fotografia corporativa da Home está pendente. O slot de produção deve continuar explícito até receber uma imagem autorizada; não publicar o preview como imagem da empresa.
- O envio de candidatura, a Ouvidoria, o código de conduta, os documentos de certificação, as divisões do grupo e os telefones aparecem somente quando os recursos reais forem configurados.
- Contato usa `mailto:` para Vendas e Compras; abrir o cliente de e-mail não confirma que uma mensagem foi enviada. Não restaurar formulário ou mensagem de sucesso sem integração real.
- Ações Sociais mantém a fonte anterior. A revisão editorial dos temas legados de Pessoas (inclusive fotos e indicadores antigos) continua fora desta migração.

## Antes de publicar

- valide todas as rotas com refresh na hospedagem e confira o arquivo `dist/_redirects`;
- confirme aprovação da fotografia e dos recursos externos que serão habilitados;
- confira os endereços de Vendas e Compras e todas as afirmações institucionais;
- confirme que não há placeholders, formulários simulados, URLs inventadas ou telefones `XXXX` visíveis;
- revise o diff e os arquivos locais antes de integrar ou publicar.
