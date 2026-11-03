import type { EditorialParagraph } from '@/content/institutionalContent';
import type { SegmentBlock } from '@/content/segmentsContent';

type SegmentReadingProps = {
  introduction: readonly EditorialParagraph[];
  blocks: readonly SegmentBlock[];
};

function sourceAttributes(paragraph?: EditorialParagraph) {
  const source = paragraph?.originRefs[0];
  return source
    ? { 'data-source-document': source.documentId, 'data-source-paragraph': source.paragraph }
    : {};
}

function renderParagraphs(paragraphs: readonly EditorialParagraph[]) {
  const elements = [];
  for (let index = 0; index < paragraphs.length;) {
    const paragraph = paragraphs[index];
    if (paragraph.kind === 'item') {
      const items: EditorialParagraph[] = [];
      while (index < paragraphs.length && paragraphs[index].kind === 'item') {
        items.push(paragraphs[index]);
        index += 1;
      }
      elements.push(
        <ul key={paragraph.id}>
          {items.map((item) => <li key={item.id} id={item.anchorId} {...sourceAttributes(item)}>{item.text}</li>)}
        </ul>,
      );
      continue;
    }
    if (paragraph.kind === 'heading') {
      elements.push(<h3 key={paragraph.id} id={paragraph.anchorId} {...sourceAttributes(paragraph)}>{paragraph.text}</h3>);
    } else {
      elements.push(<p key={paragraph.id} id={paragraph.anchorId} {...sourceAttributes(paragraph)}>{paragraph.text}</p>);
    }
    index += 1;
  }
  return elements;
}

export function SegmentReading({ introduction, blocks }: SegmentReadingProps) {
  return (
    <div>
      <div className="segment-lead" aria-label="Apresentação do segmento">
        {introduction.map((paragraph, index) => index === 0 && paragraph.kind === 'item'
          ? <h2 key={paragraph.id} {...sourceAttributes(paragraph)}>{paragraph.text}</h2>
          : <p key={paragraph.id} {...sourceAttributes(paragraph)}>{paragraph.text}</p>)}
      </div>
      {blocks.map((block) => {
        const first = block.paragraphs[0];
        const body = first?.kind === 'heading' && first.text === block.title
          ? block.paragraphs.slice(1)
          : block.paragraphs;
        const titleId = `${block.id}-title`;
        return (
          <section className="segment-block" id={block.id} aria-labelledby={titleId} key={block.id}>
            <h2 id={titleId} {...sourceAttributes(first)}>{block.title}</h2>
            {renderParagraphs(body)}
          </section>
        );
      })}
    </div>
  );
}
