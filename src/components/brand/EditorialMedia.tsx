import type { ComponentPropsWithoutRef } from 'react';
import type { HomeMedia } from '../../content/homeContent';
import { MediaCaption, MediaFrame, MediaPending, MediaPreviewBadge, MediaStatus } from './styles';

type EditorialMediaProps = Omit<ComponentPropsWithoutRef<'figure'>, 'children'> & {
  media: HomeMedia;
  priority?: boolean;
};

export function EditorialMedia({ media, priority = false, className, ...figureProps }: EditorialMediaProps) {
  return (
    <figure {...figureProps} className={className}>
      <MediaFrame>
        {media.src ? (
          <>
            <img src={media.src} alt={media.alt} loading={priority ? 'eager' : 'lazy'} />
            {media.status === 'preview-asset' ? <MediaPreviewBadge>Imagem de demonstração</MediaPreviewBadge> : null}
          </>
        ) : (
          <MediaPending role="img" aria-label={media.alt} data-media-status={media.status}>
            <MediaStatus>Imagem aguardando seleção</MediaStatus>
            <strong>Imagem aguardando seleção e autorização</strong>
          </MediaPending>
        )}
      </MediaFrame>
      <MediaCaption>{media.caption}</MediaCaption>
    </figure>
  );
}
