import { describe, expect, it } from 'vitest';
import { companyTopicPaths, homeSectionIds, institutionalContent, institutionalFacts } from './institutionalContent';
import { homeContent } from './homeContent';
import { facilities } from './siteData';
import { companyContent } from './companyContent';

const requiredHomeParagraphs = [
  2, 4, 6, 7, 9, 10, 12, 14, 15, 17, 19, 21, 23, 24, 25, 26, 27,
  29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  46, 47, 48, 49, 50, 51, 53, 56, 58, 60, 61, 63, 66, 68, 69, 70,
  72, 73, 75, 76, 77, 78, 80, 81, 82, 84, 85,
];

describe('fonte editorial institucional', () => {
  it('atribui cada um dos 60 parágrafos públicos da Home exatamente uma vez', () => {
    const actual = homeSectionIds.flatMap((id) =>
      institutionalContent[id].paragraphs.flatMap((paragraph) => paragraph.sourceParagraphs),
    );

    expect(new Set(actual)).toEqual(new Set(requiredHomeParagraphs));
    expect(actual).toHaveLength(requiredHomeParagraphs.length);
  });

  it('mantém ações sociais fora da Home e cinco destinos de Empresa', () => {
    expect(homeSectionIds).toEqual(['history', 'identity', 'structure', 'quality', 'esg']);
    expect(new Set(Object.values(companyTopicPaths)).size).toBe(5);
    expect(companyTopicPaths.identity).toBe('/empresa/historia');
    expect(companyTopicPaths['social-actions']).toBe('/empresa/acoes-sociais');
  });

  it('não expõe instruções internas nem placeholders no texto público', () => {
    const publicText = Object.values(institutionalContent)
      .flatMap((section) => [...section.paragraphs, ...(section.detailParagraphs ?? [])])
      .map((paragraph) => paragraph.text)
      .join(' ');
    expect(publicText).not.toMatch(/XXXX-XXXX|\[link|\[clique|\(link para|\(fotos para/i);
    expect(institutionalContent.quality.editorialNotes?.length).toBeGreaterThan(0);
  });

  it('marca apenas ISO 9001:2015 como certificação vigente', () => {
    expect(institutionalContent.quality.certifications).toEqual([
      { name: 'ISO 9001:2015', status: 'vigente' },
      { name: 'ISO 14001', status: 'em transição' },
      { name: 'ISO 45001', status: 'em transição' },
    ]);
  });

  it('mantém as medidas e certificações do Word consistentes entre Home, instalações e carrossel', () => {
    expect(institutionalFacts).toMatchObject({
      units: 3,
      unitAreas: ['16.000 m²', '15.000 m²', '3.500 m²'],
      totalArea: '34.500 m²',
      coveredArea: '17.000 m²',
      gantryCranes: 11,
    });
    expect(facilities.map(({ area }) => area)).toEqual(institutionalFacts.unitAreas);
    expect(homeContent.metrics.map(({ value }) => value)).toEqual([
      '50 anos', `${institutionalFacts.units} unidades`,
      institutionalFacts.totalArea, institutionalFacts.coveredArea,
    ]);
    expect(companyContent.slides.find(({ id }) => id === 'slide-unidades')?.marker).toBe(institutionalFacts.totalArea);
    expect(homeContent.culture.currentCertification.items).toEqual(
      institutionalContent.quality.certifications?.filter(({ status }) => status === 'vigente').map(({ name }) => name),
    );
    expect(homeContent.culture.futureCertifications.items).toEqual(
      institutionalContent.quality.certifications?.filter(({ status }) => status === 'em transição').map(({ name }) => name),
    );
  });
});
