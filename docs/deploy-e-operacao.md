# Deploy e operação

## Gerar o build

Execute na raiz canônica do projeto:

~~~bash
npm ci
npm run lint
npm run test:run
npm run build
~~~

O resultado é gerado em `dist/`. Em uma configuração Netlify, use a raiz que contém `package.json`, o comando `npm run build` e a pasta de publicação `dist`.

## Fallback de SPA

O site usa `BrowserRouter`. URLs como `/empresa/historia`, `/segmentos/caldeiraria` e `/pessoas/carreira` devem retornar `index.html` no acesso direto e após refresh.

- Netlify: `public/_redirects` contém `/* /index.html 200`. O Vite copia esse arquivo para `dist/_redirects` no build.
- Apache: `public/.htaccess` mantém as regras de rewrite para `index.html`.
- Outros provedores: configure a regra equivalente de fallback para a entrada da SPA.

Não substitua o fallback do Netlify por redirects individuais de cada rota; novos slugs devem continuar funcionando.

## Recursos editoriais e operacionais

`src/content/editorialResources.ts` controla os recursos opcionais. Antes de habilitar uma ação, configure e valide sua URL real: foto corporativa da Home, documento ISO, código de conduta, Ouvidoria, candidatura, páginas das divisões e telefones.

Sem os destinos de Ouvidoria e candidatura, a aplicação omite suas ações. Contato direciona Vendas e Compras pelo cliente de e-mail via `mailto:`; isso não significa que a mensagem foi enviada ou recebida. Nunca use `XXXX`, domínios presumidos ou confirmações fictícias.

## Checklist de publicação

- `npm run test:run`, `npm run lint` e `npm run build` passaram;
- `dist/_redirects` foi gerado e o arquivo `public/.htaccess` foi preservado;
- rotas principais e antigas abrem diretamente e após refresh no provedor real;
- imagem principal e mídias externas estão aprovadas e carregam corretamente;
- canais e endereços exibidos foram confirmados pelo cliente;
- mudanças editoriais e pendências foram revisadas;
- HTTPS e cache para assets versionados estão ativos.

## Servir o build localmente

~~~bash
npm run preview
~~~

O preview ajuda a conferir o build, mas não prova a configuração de fallback do provedor de hospedagem.

## Rollback

Use a plataforma de hospedagem para restaurar o artefato ou commit anterior. Registre a versão e o motivo. Não reescreva o histórico Git para desfazer uma publicação.
