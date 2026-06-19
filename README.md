# Metalurgica Vulcano - Site Institucional

Site institucional premium para caldeiraria industrial, tubulacao, soldagem especial, estruturas metalicas e offshore services.

## Stack

- Vite
- React
- TypeScript
- React Router
- styled-components

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Estrutura principal

- `src/components/SiteLayout`: cabecalho, navegacao, rodape e WhatsApp fixo.
- `src/content/siteData.ts`: dados de servicos, certificacoes, clientes, obras, unidades e equipamentos.
- `src/pages`: paginas institucionais e paginas individuais de servico.
- `src/routes/routes.tsx`: rotas publicas do site.

## Rotas

- `/`
- `/empresa`
- `/servicos`
- `/servicos/:slug`
- `/instalacoes`
- `/equipamentos`
- `/certificacoes`
- `/obras-clientes`
- `/contato`
