import { describe, expect, it } from 'vitest';
import { getPrimaryNavId, primaryNavItems } from './navigation';

describe('navegação principal', () => {
  it('mantém os acessos do menu da referência na ordem aprovada pelo cliente', () => {
    expect(primaryNavItems.map(({ label, href }) => [label, href])).toEqual([
      ['Empresa', '/empresa'],
      ['Pessoas', '/pessoas'],
      ['Serviços', '/servicos'],
      ['Instalações', '/instalacoes'],
      ['Equipamentos', '/equipamentos'],
      ['Certificações', '/certificacoes'],
      ['Obras e clientes', '/obras-clientes'],
      ['Solicitar orçamento', '/contato'],
    ]);
  });

  it('ativa as categorias do menu para suas rotas e páginas internas', () => {
    expect(getPrimaryNavId('/')).toBeNull();
    expect(getPrimaryNavId('/empresa/qualidade')).toBe('company');
    expect(getPrimaryNavId('/empresa/esg')).toBe('company');
    expect(getPrimaryNavId('/empresa/acoes-sociais')).toBe('company');
    expect(getPrimaryNavId('/empresa/historia')).toBe('company');
    expect(getPrimaryNavId('/pessoas/carreira')).toBe('people');
    expect(getPrimaryNavId('/pessoas/comunidade')).toBe('people');
    expect(getPrimaryNavId('/servicos/offshore')).toBe('services');
    expect(getPrimaryNavId('/instalacoes')).toBe('facilities');
    expect(getPrimaryNavId('/equipamentos')).toBe('equipment');
    expect(getPrimaryNavId('/certificacoes')).toBe('certifications');
    expect(getPrimaryNavId('/obras-clientes')).toBe('cases');
    expect(getPrimaryNavId('/contato')).toBe('quote');
  });
});
