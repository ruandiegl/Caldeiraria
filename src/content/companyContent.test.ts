import { describe, expect, it } from 'vitest';
import { companyContent } from './companyContent';
import { institutionalContent } from './institutionalContent';

describe('companyContent editorial model', () => {
  it('reserva somente blocos comerciais para o próximo planejamento', () => {
    expect(companyContent.blocks.map((block) => block.id)).toEqual([
      'segments', 'catalog', 'contact', 'careers',
    ]);
  });

  it('não publica notas internas ou placeholders como copy', () => {
    const publicText = JSON.stringify(companyContent);
    expect(publicText).not.toMatch(/\[link|\[clique|XXXX-XXXX/i);
  });

  it('mantém claims de certificação distinguíveis por status', () => {
    expect(JSON.stringify(companyContent)).toMatch(/ISO 9001:2015/i);
    expect(JSON.stringify(companyContent)).toMatch(/ISO 14001/i);
    expect(JSON.stringify(companyContent)).toMatch(/ISO 45001/i);
    expect(institutionalContent.quality.editorialNotes).toBeDefined();
  });

  it('possui IDs únicos para todos os blocos e slides', () => {
    const blockIds = companyContent.blocks.map((b) => b.id);
    const uniqueBlockIds = new Set(blockIds);
    expect(uniqueBlockIds.size).toBe(blockIds.length);

    const slideIds = companyContent.slides.map((s) => s.id);
    const uniqueSlideIds = new Set(slideIds);
    expect(uniqueSlideIds.size).toBe(slideIds.length);
  });

  it('contém pelo menos 5 marcos narrativos no carrossel com sourceRefs válidos', () => {
    expect(companyContent.slides.length).toBeGreaterThanOrEqual(5);
    for (const slide of companyContent.slides) {
      expect(slide.marker).toBeTruthy();
      expect(slide.label).toBeTruthy();
      expect(slide.title).toBeTruthy();
      expect(slide.summary).toBeTruthy();
      expect(slide.sourceRefs.length).toBeGreaterThan(0);
      expect(slide.originRefs.length).toBeGreaterThan(0);
      expect(slide.originRefs.every(({ documentId }) => documentId === 'word-18-10')).toBe(true);
      expect(slide.image.alt).toBeTruthy();
    }
  });

  it('contém ações aprovadas com rotas válidas', () => {
    expect(companyContent.actions.length).toBeGreaterThan(0);
    for (const action of companyContent.actions) {
      expect(action.href).toMatch(/^\/[a-z0-9\-_]*$/i);
      expect(action.label).toBeTruthy();
    }
  });
});
