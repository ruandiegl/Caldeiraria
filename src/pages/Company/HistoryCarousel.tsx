import { useRef, useState, type KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { type HistorySlide } from '@/content/companyContent';
import { companyTopicPaths } from '@/content/institutionalContent';
import { gsap, useGSAP } from '@/motion/gsap';
import {
  CarouselCounter,
  CarouselNavButtons,
  CarouselNavRow,
  CarouselStage,
  CarouselTrackArea,
  CarouselWrapper,
  ChapterJumpLink,
  SlideActions,
  SlideContent,
  SlideLabel,
  SlideMarker,
  SlideMedia,
  SlideMeta,
  SlideSummary,
  SlideTitle,
  TimelineMarker,
  TimelineTrack,
} from './companyStyles';

interface HistoryCarouselProps {
  slides: HistorySlide[];
}

export function HistoryCarousel({ slides }: HistoryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeSlide = slides[activeIndex];
  const totalSlides = slides.length;
  const progress = totalSlides <= 1 ? 100 : (activeIndex / (totalSlides - 1)) * 100;

  // Animação escopada com GSAP e revertOnUpdate
  useGSAP(
    () => {
      if (!panelRef.current) return;

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
          import.meta.env.MODE === 'test');

      const duration = prefersReducedMotion ? 0 : 0.35;
      const xOffset = prefersReducedMotion ? 0 : direction >= 0 ? 28 : -28;

      if (duration === 0) {
        gsap.set(panelRef.current, {
          autoAlpha: 1,
          x: 0,
          clearProps: 'opacity,visibility,transform',
        });
        return;
      }

      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, x: xOffset },
        {
          autoAlpha: 1,
          x: 0,
          duration,
          ease: 'power2.out',
          overwrite: 'auto',
        },
      );
    },
    {
      scope: carouselRef,
      dependencies: [activeIndex],
      revertOnUpdate: true,
    },
  );

  function goToIndex(newIndex: number) {
    if (newIndex === activeIndex || newIndex < 0 || newIndex >= totalSlides) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  }

  function handlePrev() {
    if (activeIndex > 0) {
      goToIndex(activeIndex - 1);
    }
  }

  function handleNext() {
    if (activeIndex < totalSlides - 1) {
      goToIndex(activeIndex + 1);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    } else if (event.key === 'Home') {
      event.preventDefault();
      goToIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goToIndex(totalSlides - 1);
    }
  }

  function handlePointerDown(clientX: number, target: HTMLElement, pointerId: number) {
    if (typeof target.setPointerCapture === 'function') {
      try {
        target.setPointerCapture(pointerId);
      } catch {
        // Em ambientes de teste ou sem suporte completo de ponteiro
      }
    }
    setDragStart(clientX);
  }

  function finishDrag(clientX: number) {
    if (dragStart === null) return;
    const distance = clientX - dragStart;
    setDragStart(null);

    // Limiar mínimo de swipe: 34 pixels
    if (Math.abs(distance) >= 34) {
      if (distance < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  }

  // Cada marco aponta para um capítulo ou uma rota institucional existente.
  function getChapterAnchor(slideId: string): string {
    switch (slideId) {
      case 'slide-1974':
        return `${companyTopicPaths.history}#origem`;
      case 'slide-2012':
        return `${companyTopicPaths.history}#expansao`;
      case 'slide-unidades':
        return `${companyTopicPaths.structure}#capacidades`;
      case 'slide-2024':
        return `${companyTopicPaths.history}#futuro`;
      case 'slide-2027':
        return `${companyTopicPaths.quality}#certificacoes`;
      default:
        return companyTopicPaths.history;
    }
  }

  return (
    <CarouselWrapper ref={carouselRef} onKeyDown={handleKeyDown}>
      <CarouselStage ref={panelRef} aria-label="Painel do marco histórico">
        {activeSlide.image.src ? (
          <SlideMedia>
            <img
              src={activeSlide.image.src}
              alt={activeSlide.image.alt}
              loading={activeIndex === 0 ? 'eager' : 'lazy'}
            />
            {activeSlide.image.status !== 'approved' && (
              <figcaption>Imagem de demonstração — substituir por foto autorizada da Vulcano.</figcaption>
            )}
          </SlideMedia>
        ) : null}

        <SlideContent aria-live="polite" aria-atomic="true">
          <SlideMeta>
            <SlideMarker>{activeSlide.marker}</SlideMarker>
            <SlideLabel>{activeSlide.label}</SlideLabel>
          </SlideMeta>

          <SlideTitle>{activeSlide.title}</SlideTitle>
          <SlideSummary>{activeSlide.summary}</SlideSummary>

          <SlideActions>
            <ChapterJumpLink href={getChapterAnchor(activeSlide.id)}>
              Ler capítulo completo &rarr;
            </ChapterJumpLink>
          </SlideActions>
        </SlideContent>
      </CarouselStage>

      <CarouselTrackArea>
        <TimelineTrack
          role="region"
          aria-label="Linha do tempo de marcos históricos da Vulcano"
          $progress={progress}
          $steps={totalSlides}
          $dragging={dragStart !== null}
          onPointerDown={(event) =>
            handlePointerDown(event.clientX, event.currentTarget, event.pointerId)
          }
          onPointerUp={(event) => finishDrag(event.clientX)}
          onPointerCancel={() => setDragStart(null)}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <TimelineMarker
                key={slide.id}
                type="button"
                $active={isActive}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`Marco de ${slide.marker} (${slide.label}): ${slide.title}`}
                onPointerDown={(event) => event.stopPropagation()}
                onPointerUp={(event) => event.stopPropagation()}
                onClick={() => goToIndex(index)}
              >
                <strong>{slide.marker}</strong>
                <span>{slide.label}</span>
              </TimelineMarker>
            );
          })}
        </TimelineTrack>

        <CarouselNavRow>
          <CarouselCounter aria-label="Posição do marco">
            Marco {activeIndex + 1} de {totalSlides}
          </CarouselCounter>

          <CarouselNavButtons>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Marco histórico anterior"
            >
              &larr; Anterior
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={activeIndex === totalSlides - 1}
              aria-label="Próximo marco histórico"
            >
              Próximo &rarr;
            </Button>
          </CarouselNavButtons>
        </CarouselNavRow>
      </CarouselTrackArea>
    </CarouselWrapper>
  );
}
