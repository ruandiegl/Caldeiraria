# Deploy e operação

## Gerar o build

Execute na raiz do projeto:

~~~bash
npm ci
npm run lint
npm run build
~~~

O resultado fica em \`dist/\`. Esse diretório contém os arquivos estáticos que devem ser publicados por um servidor web ou plataforma compatível com SPA.

## Servir localmente o build

~~~bash
npm run preview
~~~

O preview serve o build gerado e é útil para conferir diferenças entre o desenvolvimento e a produção.

## Configuração de SPA

Como o roteamento usa \`BrowserRouter\`, o servidor precisa encaminhar URLs que não correspondam a arquivos físicos para \`index.html\`. O arquivo \`public/.htaccess\` já possui uma regra de fallback para Apache.

Em outro provedor, configure a regra equivalente para que URLs como \`/empresa\` e \`/servicos/soldagem\` funcionem também quando acessadas diretamente ou após um refresh.

## Hospedagem

Não há provedor de hospedagem ou pipeline CI/CD configurado no repositório. A escolha do provedor deve considerar:

- suporte a build Node/npm;
- publicação do diretório \`dist\`;
- fallback de SPA;
- HTTPS;
- cache para assets versionados;
- controle das URLs externas de imagem;
- possibilidade de adicionar variáveis de ambiente sem expor segredos.

## Checklist antes de publicar

- \`npm run lint\` passou;
- \`npm run build\` passou;
- \`npm run preview\` foi conferido;
- todas as rotas principais abrem diretamente;
- o fallback de SPA está configurado;
- o formulário não promete uma integração que ainda não existe;
- número de WhatsApp e redes sociais foram confirmados;
- informações institucionais foram aprovadas;
- imagens remotas carregam ou possuem fallback;
- HTTPS está ativo.

## Rollback

O rollback deve ser feito pela plataforma de hospedagem usando o artefato ou commit anterior. Não reescreva o histórico Git para desfazer uma publicação. Registre o motivo do rollback e a versão restaurada.

