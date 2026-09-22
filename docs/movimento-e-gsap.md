# Movimento e GSAP

## Objetivo

O sistema de movimento reforça a leitura editorial do site sem alterar a rolagem nativa. Ele é usado para a mudança de superfície do cabeçalho e para revelar blocos de conteúdo quando entram na viewport.

Não use movimento como preenchimento decorativo. A interface deve continuar compreensível, navegável e visualmente completa quando a animação estiver desativada.

## Dependências

- `gsap`: motor de animação e plugin ScrollTrigger.
- `@gsap/react`: hook `useGSAP`, escopo por ref e cleanup integrado ao ciclo de vida do React.

O registro único fica em `src/motion/gsap.ts`. Não registre os plugins novamente dentro de páginas ou componentes.

## Organização

| Local | Responsabilidade |
| --- | --- |
| `src/motion/gsap.ts` | Importar e registrar GSAP, ScrollTrigger e `useGSAP`. |
| `src/motion/siteMotion.ts` | Implementar estados do cabeçalho, revelações e cleanup testável. |
| `src/components/SiteLayout/useSiteMotion.ts` | Ligar o motor ao React, às rotas e às preferências de movimento. |
| `src/components/SiteLayout` | Fornecer refs e o escopo da rota atual. |

## Cabeçalho liquid glass

No topo, o cabeçalho é branco sólido, sem blur e sem sombra. Após 24 px de rolagem, ScrollTrigger aplica:

- fundo branco com 74% de opacidade;
- blur de 18 px e saturação de 150%;
- borda translúcida e sombra azul-marinho suave;
- transição de 350 ms com `power2.out`.

O estado muda somente ao atravessar o limiar, sem callback por frame. Se `backdrop-filter` não for suportado, o fundo usa 94% de opacidade e não tenta animar blur.

Passe somente `backdropFilter` ao GSAP. O CSSPlugin resolve automaticamente o prefixo `Webkit` quando necessário; declarar `WebkitBackdropFilter` como uma segunda propriedade gera aviso em navegadores que já oferecem a propriedade padrão.

## Revelação de conteúdo

Use `data-reveal` em novos blocos editoriais. A classe `.reveal` permanece suportada para páginas legadas.

```tsx
<div data-reveal>
  <SectionIntro {...props} />
</div>
```

Quando um grupo realmente se beneficia de ritmo interno, reserve `data-reveal-group` para o contêiner e `data-reveal-item` para os filhos em uma implementação específica futura. Esses atributos ainda não são selecionados pelo motor global; até essa extensão existir, o bloco animável também precisa de `data-reveal`. Não fragmente títulos em palavras ou letras e não anime o elemento responsável pelo fundo completo da seção.

O padrão global é:

- deslocamento vertical de 24 px;
- `autoAlpha` de 0 para 1;
- duração de 650 ms;
- easing `power2.out`;
- início em `top 84%`;
- stagger de 80 ms, no máximo quatro itens por lote;
- execução única por montagem de rota.

## React e cleanup

- Use `useGSAP()` em vez de `useEffect()` para animações.
- Passe refs como `scope`; seletores nunca devem alcançar outra rota ou componente.
- Use `revertOnUpdate: true` quando a animação depende de `location.pathname`.
- Retorne cleanup local e mate somente os triggers e tweens criados pelo componente.
- Nunca use `ScrollTrigger.getAll().forEach(kill)` no layout compartilhado.
- Chame `ScrollTrigger.refresh()` apenas quando conteúdo assíncrono realmente alterar o layout, nunca durante scroll.

## Movimento reduzido

`prefers-reduced-motion: reduce` mantém o conteúdo visível e remove deslocamento temporal. O cabeçalho ainda troca entre sólido e glass para preservar contraste, mas com duração zero.

Não use animação para comunicar estado exclusivo, ordem obrigatória ou informação indisponível de outra forma.

## Performance

- Prefira `x`, `y`, `scale` e `autoAlpha`.
- Não anime `width`, `height`, `top`, `left`, margens ou padding durante scroll.
- Remova `will-change` ao concluir a entrada.
- Use `ScrollTrigger.batch()` para elementos equivalentes.
- Não adicione `scrub`, pinning, paralaxe, ScrollSmoother, Lenis ou `scrollerProxy` sem um novo plano e teste em dispositivos modestos.
- O build separa as dependências GSAP no chunk `animation-vendor` para cache e controle de tamanho.

## Skills locais

As referências oficiais instaladas em `.agents/skills/` são:

| Skill | Quando consultar |
| --- | --- |
| `gsap-core` | Tweens, propriedades, easing, stagger e `matchMedia`. |
| `gsap-react` | Hooks, refs, scopes, callbacks e cleanup em React. |
| `gsap-scrolltrigger` | Gatilhos por viewport, batch, refresh e ciclo de vida. |
| `gsap-timeline` | Sequências coordenadas com labels e posições relativas. |
| `gsap-performance` | Jank, propriedades animadas, quantidade de triggers e `will-change`. |
| `gsap-utils` | Helpers oficiais para intervalos, mapeamento e seleção. |
| `gsap-plugins` | Avaliar plugins adicionais antes de incorporá-los. |
| `gsap-frameworks` | Integrações fora do React atual. |

## Checklist para uma animação nova

1. Confirme que o movimento melhora compreensão ou hierarquia.
2. Escreva o teste do comportamento antes do código.
3. Use o registro central e `useGSAP` com scope.
4. Restrinja-se a transform e opacidade sempre que possível.
5. Defina o comportamento para movimento reduzido.
6. Verifique cleanup após troca de rota e Strict Mode.
7. Teste desktop, mobile, teclado e carregamento frio.
8. Execute `npm run test:run`, `npm run lint` e `npm run build`.
