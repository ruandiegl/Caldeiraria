export type SourceDocumentId = 'word-legacy' | 'word-18-10';

export type SourceRef = {
  documentId: SourceDocumentId;
  paragraph: number;
};

export const sourceDocuments = {
  'word-legacy': { fileName: 'site textos (Recuperação Automática).docx', paragraphBase: 1 },
  'word-18-10': {
    fileName: 'site textos resumido 18-10.docx',
    sha256: 'F8726703DBF6314E0495CD22817CC83D138B50AD088E82648B8A446D37A9F391',
    paragraphBase: 1,
    paragraphCount: 582,
  },
} as const;
