import type { SourceRef } from './sourceDocuments';

export type ProductItem = { id: string; label: string; originRefs: readonly SourceRef[]; href?: string };
export type ProductGroup = { id: string; title: string; originRefs: readonly SourceRef[]; items: readonly ProductItem[] };

const source = (paragraph: number): SourceRef => ({ documentId: 'word-18-10', paragraph });
const item = (id: string, label: string, paragraph: number, href?: string, duplicateParagraph?: number): ProductItem => ({
  id,
  label,
  originRefs: [source(paragraph), ...(duplicateParagraph ? [source(duplicateParagraph)] : [])],
  ...(href ? { href } : {}),
});
const group = (id: string, title: string, paragraph: number, items: readonly ProductItem[] = []): ProductGroup => ({
  id,
  title,
  originRefs: [source(paragraph)],
  items,
});

export const productGroups: readonly ProductGroup[] = [
  group('siderurgicos', 'Siderúrgicos', 120, [
    item('areias-cromita', 'Areias de Cromita', 121, '/segmentos/siderurgia#areias-refratarias'),
    item('areia-vedacao', 'Areia de vedação para forno elétrico', 122, '/segmentos/siderurgia#areias-refratarias'),
    item('pa-skimmer', 'Pá de Skimmer', 123, '/segmentos/siderurgia#pa-skimmer'),
    item('retentor-primeira-escoria', 'Retentor de Primeira Escória', 124, '/segmentos/siderurgia#vulcanstop'),
    item('equipamentos-siderurgia', 'Equipamentos para Siderurgia', 125, '/segmentos/siderurgia#equipamentos-siderurgicos'),
  ]),
  group('estruturas-metalicas', 'Estruturas Metálicas', 126, [
    item('escadas-passarelas-plataformas', 'Escadas, Passarelas e Plataformas de Acesso', 127, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('coberturas-galpoes', 'Coberturas e Galpões', 128, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('bases-equipamentos', 'Bases para Equipamentos', 129, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('guarda-corpo-nr12', 'Guarda-Corpo NR12', 130, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('gradil-nr12', 'Gradil NR12', 131, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('cercamento', 'Cercamento', 132, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('grades-piso', 'Grades de Piso', 133, '/segmentos/caldeiraria#estruturas-metalicas'),
    item('formas-pre-moldados', 'Formas para Pré-Moldados', 134, '/segmentos/caldeiraria#estruturas-metalicas'),
  ]),
  group('tubulacao-spools', 'Tubulação e Spools', 135, [
    item('aco-carbono', 'Aço Carbono API 5L, A106 e A105', 136, '/segmentos/caldeiraria#tubulacoes-e-spools'),
    item('aco-inox', 'Aço Inox A304, A316 e A310', 137, '/segmentos/caldeiraria#tubulacoes-e-spools'),
    item('acos-liga', 'Aços Liga', 138, '/segmentos/caldeiraria#tubulacoes-e-spools'),
    item('fibra-vidro', 'Fibra de Vidro — FRP/PRFV', 139, '/segmentos/caldeiraria#tubulacoes-e-spools'),
    item('cpvc', 'CPVC', 140, '/segmentos/caldeiraria#tubulacoes-e-spools'),
  ]),
  group('suportes-tubulacao', 'Suportes para Tubulação', 141),
  group('suportes-instrumentacao', 'Suportes para Instrumentação', 142),
  group('suportes-eletricos', 'Suportes Elétricos', 143),
  group('insertos-chumbadores', 'Insertos e Chumbadores', 144),
  group('equipamentos-transporte', 'Equipamentos para Transporte', 145, [
    item('skids-containers', 'Skids e Containers normatizados', 146, '/segmentos/caldeiraria#equipamentos-de-transporte'),
    item('caixas-engradados', 'Caixas e Engradados de Transporte', 147, '/segmentos/caldeiraria#equipamentos-de-transporte'),
  ]),
  group('compositos', 'Compósitos', 148, [
    item('revestimento-compositos', 'Revestimento', 149, '/segmentos/servicos-industriais#revestimentos-tecnologicos'),
    item('isolamento-compositos', 'Isolamento', 150, '/segmentos/servicos-industriais#revestimentos-tecnologicos'),
    item('fibra-compositos', 'Fibra de Vidro', 151, '/segmentos/servicos-industriais#revestimentos-tecnologicos'),
  ]),
  group('servicos-industriais', 'Serviços Industriais', 152, [
    item('soldas-especiais', 'Soldas Especiais', 153, '/segmentos/servicos-industriais#soldas-especiais', 156),
    item('corte-dobra', 'Corte e Dobra', 154, '/segmentos/servicos-industriais#corte-conformacao'),
    item('calandragem', 'Calandragem', 155, '/segmentos/servicos-industriais#corte-conformacao'),
    item('pintura-industrial', 'Pintura Industrial', 157, '/segmentos/servicos-industriais#pintura-revestimento'),
    item('metalizacao', 'Metalização', 158, '/segmentos/servicos-industriais#revestimentos-tecnologicos'),
  ]),
  group('equipamentos-sob-medida', 'Equipamentos Sob Medida', 159, [
    item('adicao-areias', 'Máquinas de Adição de Areias', 160, '/segmentos/projetos-e-equipamentos#sistemas-adicao-e-injecao'),
    item('fornos-industriais', 'Fornos Industriais', 161, '/segmentos/projetos-e-equipamentos#diferenciais'),
    item('equipamentos-rcl', 'Equipamentos Especiais RCL', 162, '/segmentos/projetos-e-equipamentos#rcl'),
  ]),
  group('concretos-especiais', 'Concretos Especiais', 163, [
    item('concreto-usinado', 'Concreto Usinado (Barra Ligas)', 164, '/segmentos/concretos-especiais-e-pre-moldados#artefatos-pre-moldados'),
    item('pre-moldados', 'Pré-Moldados', 165, '/segmentos/concretos-especiais-e-pre-moldados#artefatos-pre-moldados'),
    item('concretos-refratarios', 'Concretos Refratários de Baixa Alumina', 166, '/segmentos/concretos-especiais-e-pre-moldados#artefatos-pre-moldados'),
  ]),
  group('contrapesos', 'Contrapesos', 167),
  group('implementos-construcao', 'Implementos para Construção', 168),
];
