import { describe, expect, it } from 'vitest';
import { getPrimaryNavId, primaryNavItems } from './navigation';

describe('navegação principal', () => {
  it('mantém os nove acessos na ordem aprovada pelo cliente', () => {
    expect(primaryNavItems.map(({ label, href }) => [label, href])).toEqual([
      ['Home', '/'],
      ['Empresa', '/empresa'],
      ['Segmentos', '/segmentos'],
      ['Produtos', '/produtos'],
      ['Qualidade', '/empresa/qualidade'],
      ['ESG', '/empresa/esg'],
      ['Ações Sociais', '/empresa/acoes-sociais'],
      ['Contato', '/contato'],
      ['Trabalhe Conosco', '/pessoas/carreira'],
    ]);
  });

  it('ativa somente o destino correspondente, sem tratar rotas legadas como Home', () => {
    expect(getPrimaryNavId('/')).toBe('home');
    expect(getPrimaryNavId('/empresa/qualidade')).toBe('quality');
    expect(getPrimaryNavId('/empresa/esg')).toBe('esg');
    expect(getPrimaryNavId('/empresa/acoes-sociais')).toBe('social-actions');
    expect(getPrimaryNavId('/empresa/historia')).toBe('company');
    expect(getPrimaryNavId('/segmentos/caldeiraria')).toBe('segments');
    expect(getPrimaryNavId('/produtos')).toBe('products');
    expect(getPrimaryNavId('/pessoas/carreira')).toBe('careers');
    expect(getPrimaryNavId('/servicos/offshore')).toBeNull();
    expect(getPrimaryNavId('/instalacoes')).toBeNull();
  });
});
