import type { ReactNode } from 'react';
import type { EditorialParagraph, InstitutionalSection } from '../content/institutionalContent';
import { Chapter, ChapterBody, ChapterHeading, ChapterLabel, ChapterTitle, EditorialItemList, EditorialSubheading, EditorialText } from './InstitutionalReading.styles';

type InstitutionalReadingProps = {
  section: InstitutionalSection;
  sectionId: string;
  children?: ReactNode;
};

function renderParagraphs(paragraphs: EditorialParagraph[]) {
  const blocks: ReactNode[] = [];
  const anchors: Record<number, string> = {
    4: 'origem',
    9: 'expansao',
    14: 'futuro',
    29: 'capacidades',
    53: 'certificacoes',
  };

  for (let index = 0; index < paragraphs.length;) {
    const current = paragraphs[index];
    if (current.kind === 'item') {
      const items: EditorialParagraph[] = [];
      while (index < paragraphs.length && paragraphs[index].kind === 'item') {
        items.push(paragraphs[index]);
        index += 1;
      }
      blocks.push(
        <EditorialItemList key={current.id}>
          {items.map((item) => <li key={item.id} data-source-paragraph={item.sourceParagraphs[0]}>{item.text}</li>)}
        </EditorialItemList>,
      );
      continue;
    }

    const source = current.sourceParagraphs[0];
    if (current.kind === 'heading') {
      blocks.push(<EditorialSubheading key={current.id} id={anchors[source]} data-source-paragraph={source}>{current.text}</EditorialSubheading>);
    } else if (current.kind === 'eyebrow') {
      blocks.push(<ChapterLabel key={current.id} data-source-paragraph={source}>{current.text}</ChapterLabel>);
    } else {
      blocks.push(<EditorialText key={current.id} data-source-paragraph={source}>{current.text}</EditorialText>);
    }
    index += 1;
  }

  return blocks;
}

export function InstitutionalReading({ section, sectionId, children }: InstitutionalReadingProps) {
  const titleId = `${sectionId}-title`;

  return (
    <Chapter id={sectionId} aria-labelledby={titleId}>
      <ChapterHeading data-reveal>
        <ChapterTitle id={titleId}>{section.title}</ChapterTitle>
        {children}
      </ChapterHeading>
      <ChapterBody>{renderParagraphs(section.paragraphs)}</ChapterBody>
    </Chapter>
  );
}
