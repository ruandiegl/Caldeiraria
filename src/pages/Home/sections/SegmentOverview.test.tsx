import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { segmentsContent } from '@/content/segmentsContent';
import { SegmentOverview } from './SegmentOverview';

describe('síntese de Segmentos na Home', () => {
  it('exibe as seis sínteses completas e links na ordem definida pelo Word', () => {
    render(<MemoryRouter><SegmentOverview segments={segmentsContent} /></MemoryRouter>);
    const links = screen.getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      segmentsContent.map(({ slug }) => `/segmentos/${slug}`),
    );
    for (const segment of segmentsContent) {
      expect(screen.getByRole('heading', { level: 2, name: segment.title })).toBeVisible();
      expect(screen.getByText(segment.homeSummary)).toBeVisible();
    }
  });
});
