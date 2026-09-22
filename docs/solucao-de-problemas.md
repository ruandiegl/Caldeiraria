# Solução de problemas

## \`npm ci\` falha

1. Confira Node e npm.
2. Verifique se há outro processo usando \`node_modules\`.
3. Feche servidores de desenvolvimento e editores que estejam indexando a pasta.
4. Tente novamente na raiz correta do projeto.
5. Não apague diretórios fora do projeto.

Se o erro indicar permissão no cache do npm, corrija a permissão do cache ou peça autorização para a instalação com privilégios adequados. Não altere versões do lockfile apenas para contornar um erro local.

## \`npm run lint\` falha

Leia o primeiro erro do ESLint e corrija a causa no arquivo indicado. Os problemas mais comuns são:

- variável ou import não utilizado;
- dependência ausente em \`useEffect\`;
- regra de Hooks violada;
- tipo implícito ou incompatível;
- componente exportado de maneira que conflita com React Refresh.

Execute o lint novamente depois de cada grupo pequeno de correções.

## \`npm run build\` falha

Verifique primeiro:

- erro de TypeScript;
- import com caminho incorreto;
- propriedade obrigatória ausente;
- parâmetro de rota ou dado sem tratamento;
- versão de Node incompatível com o Vite instalado.

O build é a validação final de que o TypeScript e o empacotamento conseguem processar a aplicação inteira.

## A rota abre no menu, mas não após refresh

O servidor de produção provavelmente não está aplicando o fallback para \`index.html\`. Confira [Deploy e operação](./deploy-e-operacao.md) e a configuração equivalente do provedor escolhido.

## O conteúdo não aparece

Confirme:

- o nome do \`slug\` ou \`topic\`;
- a chave usada no objeto de dados;
- se o componente importa a fonte correta;
- se o parâmetro da URL está sendo lido com \`useParams\`;
- se o fallback não está redirecionando silenciosamente.

## A animação não aparece

Confira se o elemento possui a classe \`.reveal\`, se o \`IntersectionObserver\` foi executado na rota e se a preferência do sistema não está configurada para reduzir movimento. Em modo reduzido, a interface deve aparecer sem depender da animação.

## O formulário confirma, mas não chega nenhum contato

Esse é o comportamento esperado do estado atual: o formulário apenas altera o estado local da página. Para receber mensagens, será necessária uma integração de backend ou serviço externo, com validação, proteção contra abuso, política de privacidade e documentação própria.

## O projeto parece duplicado

Use como referência a pasta que contém o \`.git\`, \`package.json\`, \`src\` e \`public\` do repositório canônico. Não instale dependências ou execute servidores em uma cópia aninhada. Confirme o remoto com \`git remote -v\` antes de publicar qualquer mudança.

