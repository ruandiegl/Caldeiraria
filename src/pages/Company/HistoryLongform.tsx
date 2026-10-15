import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';
import { type HistoryBlock } from '@/content/companyContent';
import {
  AccordionList,
  CapabilitiesGrid,
  CapabilityCard,
  Chapter,
  ChapterEyebrow,
  ChapterHeader,
  ChapterTitle,
  ContactCard,
  ContactCardsGrid,
  DisclosureContent,
  DisclosureDetails,
  DisclosureSummary,
  EditorialBadge,
  LongformContainer,
  PillarCard,
  PillarGrid,
  ProseWrapper,
} from './companyStyles';

interface HistoryLongformProps {
  blocks: HistoryBlock[];
}

export function HistoryLongform({ blocks }: HistoryLongformProps) {
  function renderBlockContent(block: HistoryBlock) {
    switch (block.id) {
      case 'history.origin':
      case 'history.expansion':
      case 'history.future':
      case 'social-actions':
        return (
          <ProseWrapper data-reveal>
            {block.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </ProseWrapper>
        );

      case 'identity.mission-vision-values':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <PillarGrid>
                {block.items.map((item, idx) => (
                  <PillarCard key={idx}>
                    <h3>{item.title}</h3>
                    {item.body && <p>{item.body}</p>}
                    {item.items && (
                      <ul>
                        {item.items.map((subItem, sIdx) => (
                          <li key={sIdx}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </PillarCard>
                ))}
              </PillarGrid>
            )}
          </div>
        );

      case 'structure.capabilities':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <CapabilitiesGrid>
                {block.items.map((cap, idx) => (
                  <CapabilityCard key={idx}>
                    <h3>{cap.title}</h3>
                    <p>{cap.body}</p>
                  </CapabilityCard>
                ))}
              </CapabilitiesGrid>
            )}
          </div>
        );

      case 'quality':
        return (
          <div data-reveal>
            <div>
              <EditorialBadge $variant="active">ISO 9001:2015 Vigente</EditorialBadge>
              <EditorialBadge $variant="transition">
                ISO 14001 e ISO 45001 em transição (Previsão 2027)
              </EditorialBadge>
            </div>
            <ProseWrapper style={{ marginTop: '20px' }}>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
          </div>
        );

      case 'esg':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <PillarGrid>
                {block.items.map((pillar, idx) => (
                  <PillarCard key={idx}>
                    <h3>{pillar.title}</h3>
                    {pillar.body && <p>{pillar.body}</p>}
                    {pillar.items && (
                      <ul>
                        {pillar.items.map((sub, sIdx) => (
                          <li key={sIdx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </PillarCard>
                ))}
              </PillarGrid>
            )}
          </div>
        );

      case 'segments':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <CapabilitiesGrid>
                {block.items.map((seg, idx) => (
                  <CapabilityCard key={idx}>
                    <h3>{seg.title}</h3>
                    <p>{seg.body}</p>
                  </CapabilityCard>
                ))}
              </CapabilitiesGrid>
            )}
          </div>
        );

      case 'catalog':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <AccordionList>
                {block.items.map((cat, idx) => (
                  <DisclosureDetails key={idx} open={idx === 0}>
                    <DisclosureSummary>{cat.title}</DisclosureSummary>
                    <DisclosureContent>
                      <p>{cat.body}</p>
                    </DisclosureContent>
                  </DisclosureDetails>
                ))}
              </AccordionList>
            )}
          </div>
        );

      case 'contact':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <ContactCardsGrid>
                {block.items.map((item, idx) => (
                  <ContactCard key={idx}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div style={{ marginTop: '16px' }}>
                      <Link
                        className={buttonVariants({ variant: 'outline', size: 'sm' })}
                        to="/contato"
                      >
                        Fale conosco
                      </Link>
                    </div>
                  </ContactCard>
                ))}
              </ContactCardsGrid>
            )}
          </div>
        );

      case 'careers':
        return (
          <div data-reveal>
            <ProseWrapper>
              {block.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ProseWrapper>
            {block.items && block.items.length > 0 && (
              <PillarGrid>
                {block.items.map((item, idx) => (
                  <PillarCard key={idx}>
                    <h3>{item.title}</h3>
                    {item.body && <p>{item.body}</p>}
                    {item.items && (
                      <ul>
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </PillarCard>
                ))}
              </PillarGrid>
            )}
            <div style={{ marginTop: '24px' }}>
              <Link
                className={buttonVariants({ variant: 'default', size: 'default' })}
                to="/contato"
              >
                Envie seu contato para oportunidades
              </Link>
            </div>
          </div>
        );

      default:
        return (
          <ProseWrapper data-reveal>
            {block.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </ProseWrapper>
        );
    }
  }

  return (
    <LongformContainer>
      {blocks.map((block) => (
        <Chapter key={block.id} id={block.id} aria-labelledby={`title-${block.id}`}>
          <ChapterHeader data-reveal>
            <ChapterEyebrow>{block.eyebrow}</ChapterEyebrow>
            <ChapterTitle id={`title-${block.id}`}>{block.title}</ChapterTitle>
          </ChapterHeader>
          {renderBlockContent(block)}
        </Chapter>
      ))}
    </LongformContainer>
  );
}
