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

  const sourceAttributes = (paragraph: EditorialParagraph) => {
    const source = paragraph.originRefs[0];
    return source
      ? { 'data-source-document': source.documentId, 'data-source-paragraph': source.paragraph }
      : {};
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
          {items.map((item) => <li key={item.id} {...sourceAttributes(item)}>{item.text}</li>)}
        </EditorialItemList>,
      );
      continue;
    }

    const sourceProps = sourceAttributes(current);
    if (current.kind === 'heading') {
      blocks.push(<EditorialSubheading key={current.id} id={current.anchorId} {...sourceProps}>{current.text}</EditorialSubheading>);
    } else if (current.kind === 'eyebrow') {
      blocks.push(<ChapterLabel key={current.id} {...sourceProps}>{current.text}</ChapterLabel>);
    } else {
      blocks.push(<EditorialText key={current.id} {...sourceProps}>{current.text}</EditorialText>);
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
