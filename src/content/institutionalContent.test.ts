import { describe, expect, it } from 'vitest';
import { companyTopicPaths, homeSectionIds, institutionalContent, institutionalFacts } from './institutionalContent';
import { homeContent } from './homeContent';
import { facilities } from './siteData';
import { companyContent } from './companyContent';
import sourceManifest from './__fixtures__/site-textos-18-10.manifest.json';

describe('fonte editorial institucional', () => {
  it('mapeia todo o conteúdo institucional do Word novo uma vez, usando referências base 1', () => {
    const destinations = ['/empresa/historia', '/empresa/estrutura', '/empresa/qualidade', '/empresa/esg'];
    const expected = sourceManifest.filter(({ classification, destination }) => classification === 'content' && destinations.includes(destination ?? '')).map(({ paragraph }) => paragraph);
    const actual = homeSectionIds.flatMap((id) =>
      [...institutionalContent[id].paragraphs, ...(institutionalContent[id].detailParagraphs ?? []), ...(institutionalContent[id].pendingParagraphs ?? [])]
        .flatMap((paragraph) => paragraph.originRefs)
        .filter(({ documentId }) => documentId === 'word-18-10')
        .map(({ paragraph }) => paragraph),
    );

    expect([...actual].sort((a, b) => a - b)).toEqual([...expected].sort((a, b) => a - b));
    expect(actual.every((paragraph) => paragraph >= 1 && paragraph <= 582)).toBe(true);
  });

  it('mantém âncoras semânticas independentes dos números de parágrafo', () => {
    const anchorFor = (sectionId: keyof typeof institutionalContent, paragraph: number) =>
      [...institutionalContent[sectionId].paragraphs, ...(institutionalContent[sectionId].detailParagraphs ?? [])]
        .find((item) => item.originRefs.some((reference) => reference.documentId === 'word-18-10' && reference.paragraph === paragraph))?.anchorId;

    expect(anchorFor('history', 7)).toBe('origem');
    expect(anchorFor('history', 12)).toBe('expansao');
    expect(anchorFor('history', 17)).toBe('futuro');
    expect(anchorFor('structure', 32)).toBe('capacidades');
    expect(anchorFor('quality', 172)).toBe('certificacoes');
    expect(anchorFor('social-actions', 209)).toBeUndefined();
    expect(institutionalContent['social-actions'].paragraphs.every(({ originRefs }) => originRefs.every(({ documentId }) => documentId === 'word-legacy'))).toBe(true);
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
