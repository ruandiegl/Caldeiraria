# Visão geral

## O que é o projeto

O projeto é um site institucional premium para a Metalúrgica Vulcano, empresa de caldeiraria industrial, tubulação, soldagem especial, estruturas metálicas e serviços offshore.

O site apresenta a empresa, seus serviços, pessoas, instalações, equipamentos, certificações, obras e canais de contato. A experiência é pública e orientada à apresentação institucional e à geração de solicitações de orçamento.

## Classificação

- **Plataforma:** Web.
- **Arquitetura de interface:** SPA com rotas no cliente.
- **Renderização:** client-side, iniciada por \`BrowserRouter\`.
- **Backend:** não há backend próprio configurado neste repositório.
- **Persistência:** não há banco de dados nem camada de persistência configurada.
- **Formulário de contato:** atualmente simula o envio no navegador e exibe uma confirmação local; não envia dados para um serviço externo.

## Stack oficial

### Runtime e aplicação

- React 19.
- React DOM 19.
- TypeScript 6.
- React Router DOM 6.
- Vite 8.
- styled-components 6.

### Ferramentas

- ESLint 10 com regras para TypeScript, React Hooks e React Refresh.
- Plugin React do Vite.
- React Compiler via preset do plugin React.
- Babel/Rolldown para o pipeline configurado no \`vite.config.ts\`.

### Dependências disponíveis

\`axios\`, \`jspdf\` e \`jwt-decode\` estão declarados no projeto. Antes de usar uma dessas dependências, confirme se a necessidade realmente existe e se o uso está coberto pelo escopo atual; o código da interface não possui uma API própria configurada.

## Objetivos de produto

- Comunicar capacidade industrial com clareza e credibilidade.
- Permitir que visitantes encontrem serviços, certificações e provas de experiência.
- Facilitar o contato comercial por meio de navegação direta e solicitação de orçamento.
- Manter uma identidade visual técnica, industrial, humana e responsiva.

## Fora do escopo atual

Não presumir que o projeto já possui:

- autenticação;
- painel administrativo;
- integração real de formulário;
- CMS;
- API própria;
- banco de dados;
- analytics ou monitoramento configurado;
- testes automatizados de unidade, integração ou navegador.

Qualquer uma dessas capacidades deve ser tratada como uma mudança de arquitetura, com decisão própria e documentação atualizada.

