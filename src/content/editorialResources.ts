export type EditorialResourceStatus = 'approved' | 'pending';

export const editorialResources = {
  mainPhoto: {
    desktop: null as string | null,
    mobile: null as string | null,
    alt: 'Imagem panorâmica da operação industrial da Metalúrgica Vulcano',
    status: 'pending' as EditorialResourceStatus,
  },
  iso9001PdfUrl: null,
  conductCodeUrl: null,
  whistleblowingUrl: null,
  careersApplicationUrl: null,
  barraLigasUrl: null,
  constructionsUrl: null,
  salesPhone: null as string | null,
  purchasingPhone: null as string | null,
  originRefs: {
    iso9001PdfUrl: [{ documentId: 'word-18-10', paragraph: 177 }],
    conductCodeUrl: [{ documentId: 'word-18-10', paragraph: 202 }],
    whistleblowingUrl: [{ documentId: 'word-18-10', paragraph: 201 }, { documentId: 'word-18-10', paragraph: 228 }],
    careersApplicationUrl: [{ documentId: 'word-18-10', paragraph: 240 }],
    barraLigasUrl: [{ documentId: 'word-18-10', paragraph: 526 }],
    constructionsUrl: [{ documentId: 'word-18-10', paragraph: 553 }],
    salesPhone: [{ documentId: 'word-18-10', paragraph: 214 }],
    purchasingPhone: [{ documentId: 'word-18-10', paragraph: 220 }],
  },
};
