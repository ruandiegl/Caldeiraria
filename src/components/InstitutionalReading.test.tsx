import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InstitutionalReading } from './InstitutionalReading';
import type { InstitutionalSection } from '@/content/institutionalContent';

const sectionWithOrigins = (paragraph: number): InstitutionalSection => ({
  id: 'history',
  title: 'História',
  status: 'approved',
  paragraphs: [{
    id: 'history.origin',
    text: 'Origem da empresa',
    sourceParagraphs: [],
    originRefs: [{ documentId: 'word-18-10', paragraph }],
    anchorId: 'origem',
    kind: 'heading',
  }],
});

describe('InstitutionalReading', () => {
  it('mantém âncoras semânticas estáveis quando a referência editorial muda', () => {
    const first = render(<InstitutionalReading section={sectionWithOrigins(9)} sectionId="historia" />);
    expect(screen.getByRole('heading', { name: 'Origem da empresa' })).toHaveAttribute('id', 'origem');
    first.unmount();

    render(<InstitutionalReading section={sectionWithOrigins(582)} sectionId="historia" />);
    expect(screen.getByRole('heading', { name: 'Origem da empresa' })).toHaveAttribute('id', 'origem');
    expect(screen.getByRole('heading', { name: 'Origem da empresa' })).toHaveAttribute('data-source-paragraph', '582');
  });
});
