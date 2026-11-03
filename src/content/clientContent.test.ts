import { describe, expect, it } from 'vitest';
import manifest from './__fixtures__/site-textos-18-10.manifest.json';
import { careersContent } from './careersContent';
import { contactContent } from './contactContent';
import { editorialResources } from './editorialResources';
import { productGroups } from './productsContent';
import { segmentsContent } from './segmentsContent';
import { institutionalContent, institutionalFacts } from './institutionalContent';

const sourceRef = (paragraph: number) => ({ documentId: 'word-18-10', paragraph });

describe('conteúdo do Word 18-10', () => {
  it('classifica cada parágrafo da fonte, inclusive vazios e notas, uma única vez', () => {
    expect(manifest).toHaveLength(582);
    expect(manifest.map(({ paragraph }) => paragraph)).toEqual(Array.from({ length: 582 }, (_, index) => index + 1));
    expect(manifest.filter(({ classification }) => classification === 'content').every(({ destination }) => destination)).toBe(true);
    expect(manifest.filter(({ classification }) => ['empty', 'note', 'marker'].includes(classification)).every(({ destination }) => destination === null)).toBe(true);
    expect(manifest.find(({ paragraph }) => paragraph === 476)).toMatchObject({ classification: 'duplicate', duplicateOf: 472 });
    expect(manifest.find(({ paragraph }) => paragraph === 200)).toMatchObject({ classification: 'duplicate', duplicateOf: 198 });
  });

  it('mantém os seis segmentos na ordem do layout, com introdução e leitura completa rastreáveis', () => {
    expect(segmentsContent.map(({ slug, title }) => [slug, title])).toEqual([
      ['siderurgia', 'Siderurgia'],
      ['caldeiraria', 'Caldeiraria'],
      ['servicos-industriais', 'Serviços Industriais'],
      ['projetos-e-equipamentos', 'Projetos e Equipamentos Sob Encomenda'],
      ['concretos-especiais-e-pre-moldados', 'Concretos Especiais e Pré-Moldados'],
      ['maquinas-para-construcao', 'Máquinas para Construção'],
    ]);
    for (const segment of segmentsContent) {
      const wordCount = segment.homeSummary.trim().split(/\s+/).length;
      expect(wordCount).toBeGreaterThanOrEqual(25);
      expect(wordCount).toBeLessThanOrEqual(40);
      expect(segment.originRefs.length).toBeGreaterThan(1);
      expect(segment.introduction.length).toBeGreaterThan(0);
      expect(segment.blocks.length).toBeGreaterThan(0);
      expect(segment.blocks.flatMap(({ paragraphs }) => paragraphs).every(({ originRefs }) => originRefs?.length)).toBe(true);
      expect(new Set(segment.blocks.map(({ id }) => id)).size).toBe(segment.blocks.length);
      expect(new Set([...segment.introduction, ...segment.blocks.flatMap(({ paragraphs }) => paragraphs)].map(({ id }) => id)).size).toBe(segment.introduction.length + segment.blocks.reduce((total, block) => total + block.paragraphs.length, 0));
      const expectedParagraphs = manifest.filter(({ classification, destination }) => classification === 'content' && destination === `/segmentos/${segment.slug}`).map(({ paragraph }) => paragraph);
      const representedParagraphs = new Set(segment.originRefs.map(({ paragraph }) => paragraph));
      expect(expectedParagraphs.every((paragraph) => representedParagraphs.has(paragraph))).toBe(true);
    }
    expect(segmentsContent[0].originRefs).toContainEqual(sourceRef(254));
    expect(segmentsContent[3].blocks.flatMap(({ paragraphs }) => paragraphs).some(({ anchorId }) => anchorId === 'sistemas-adicao-e-injecao')).toBe(true);
    expect(segmentsContent[2].blocks.some(({ id }) => id === 'pintura-revestimento')).toBe(true);
  });

  it('preserva os 14 grupos de produtos e consolida a repetição de Soldas Especiais', () => {
    expect(productGroups.map(({ title }) => title)).toEqual([
      'Siderúrgicos', 'Estruturas Metálicas', 'Tubulação e Spools', 'Suportes para Tubulação',
      'Suportes para Instrumentação', 'Suportes Elétricos', 'Insertos e Chumbadores',
      'Equipamentos para Transporte', 'Compósitos', 'Serviços Industriais',
      'Equipamentos Sob Medida', 'Concretos Especiais', 'Contrapesos', 'Implementos para Construção',
    ]);
    const welding = productGroups.find(({ title }) => title === 'Serviços Industriais')?.items.filter(({ label }) => label === 'Soldas Especiais');
    expect(welding).toHaveLength(1);
    expect(welding?.[0].originRefs).toEqual([sourceRef(153), sourceRef(156)]);
    expect(productGroups.flatMap(({ items }) => items).every(({ originRefs }) => originRefs.length > 0)).toBe(true);
    expect(new Set(productGroups.map(({ id }) => id)).size).toBe(14);
    expect(new Set(productGroups.flatMap(({ items }) => items.map(({ id }) => id))).size).toBe(productGroups.flatMap(({ items }) => items).length);
    const productReferences = productGroups.flatMap(({ originRefs, items }) => [...originRefs, ...items.flatMap(({ originRefs: itemOrigins }) => itemOrigins)]);
    expect(manifest.filter(({ classification, destination }) => classification === 'content' && destination === '/produtos').every(({ paragraph }) => productReferences.some((reference) => reference.paragraph === paragraph))).toBe(true);
  });

  it('mantém os canais reais e deixa recursos sem endereço como ausentes', () => {
    const contactReferences = [
      ...contactContent.eyebrowOriginRefs,
      ...contactContent.titleOriginRefs,
      ...contactContent.introductionOriginRefs,
      ...contactContent.departments.flatMap(({ originRefs }) => originRefs),
      ...contactContent.careersLink.originRefs,
      ...contactContent.pendingWhistleblowing.originRefs,
    ];
    const careerReferences = [
      ...careersContent.eyebrowOriginRefs,
      ...careersContent.titleOriginRefs,
      ...careersContent.introduction.flatMap(({ originRefs }) => originRefs),
      ...careersContent.whyJoinTitleOriginRefs,
      ...careersContent.whyJoin.flatMap(({ originRefs }) => originRefs),
      ...careersContent.applicationOriginRefs,
      ...careersContent.commitmentTitleOriginRefs,
      ...careersContent.commitmentIntroductionOriginRefs,
      ...careersContent.commitment.flatMap(({ originRefs }) => originRefs),
      ...careersContent.closingOriginRefs,
    ];
    expect(manifest.filter(({ classification, destination }) => classification === 'content' && destination === '/contato').every(({ paragraph }) => contactReferences.some((reference) => reference.paragraph === paragraph))).toBe(true);
    expect(manifest.filter(({ classification, destination }) => classification === 'content' && destination === '/pessoas/carreira').every(({ paragraph }) => careerReferences.some((reference) => reference.paragraph === paragraph))).toBe(true);
    expect(contactContent.departments.map(({ email }) => email)).toEqual([
      'comercial@vulcano.ind.br', 'compras@vulcano.ind.br',
    ]);
    expect(contactContent.departments.every(({ phone }) => phone === null)).toBe(true);
    expect(editorialResources).toMatchObject({
      iso9001PdfUrl: null,
      conductCodeUrl: null,
      whistleblowingUrl: null,
      careersApplicationUrl: null,
      barraLigasUrl: null,
      constructionsUrl: null,
    });
    expect(careersContent.whyJoin).toHaveLength(3);
    expect(careersContent.commitment).toHaveLength(3);
    expect(careersContent.closingOriginRefs).toContainEqual(sourceRef(249));
    expect(institutionalFacts.certifications.map(({ name, status }) => [name, status])).toEqual([
      ['ISO 9001:2015', 'vigente'],
      ['ISO 14001', 'em transição'],
      ['ISO 45001', 'em transição'],
    ]);
    expect(Object.values(institutionalContent).flatMap(({ paragraphs, detailParagraphs = [] }) => [...paragraphs, ...detailParagraphs]).every(({ originRefs }) => originRefs.length > 0)).toBe(true);
  });
});
