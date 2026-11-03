import { describe, expect, it } from 'vitest';
import { homeContent } from './homeContent';

describe('conteúdo da Home', () => {
  it('mantém os fatos estruturais aprovados no documento corporativo', () => {
    expect(homeContent.metrics.map((metric) => metric.value)).toEqual(['50 anos', '3 unidades', '34.500 m²', '17.000 m²']);
    expect(homeContent.history.body).toMatch(/1º de julho de 1974/i);
    expect(homeContent.history.body).toMatch(/Barra Mansa/i);
  });

  it('marca imagens temporárias como demonstração e não como registros da empresa', () => {
    const serialized = JSON.stringify(homeContent);

    expect(serialized).not.toMatch(/XXXX|\[link|\[clique aqui/i);
    expect(homeContent.culture.futureCertifications).toEqual({
      label: 'Em transição',
      items: ['ISO 14001', 'ISO 45001'],
    });
    expect(homeContent.media).toHaveLength(4);
    expect(homeContent.media.every((media) => media.status === 'preview-asset')).toBe(true);
    expect(homeContent.media[0].src).not.toMatch(/^https:\/\//);
    expect(homeContent.media[0].srcSet).toMatch(/900w.*1600w.*2200w.*2800w/);
    expect(homeContent.media.slice(1).every((media) => media.src?.startsWith('https://images.unsplash.com/'))).toBe(true);
  });
});
