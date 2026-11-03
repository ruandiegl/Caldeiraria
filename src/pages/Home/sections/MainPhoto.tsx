import { useState } from 'react';
import { homeContent, type HomeMedia } from '@/content/homeContent';
import { HomePhotoContainer, HomePhotoFrame, HomePhotoSection } from '../homeStyles';

const media: HomeMedia = homeContent.media[0];
const isConceptPreview = media.status === 'preview-asset';
const imageSource = media.status === 'approved' || isConceptPreview ? media.src : null;

export function MainPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <HomePhotoSection data-testid="home-main-photo" aria-label="Foto principal da Metalúrgica Vulcano">
      <h1 className="sr-only">Metalúrgica Vulcano</h1>
      <HomePhotoContainer>
        <figure>
          <HomePhotoFrame
            data-photo-frame
            data-photo-ratio="3:1"
            data-mobile-photo-ratio="16:7"
            $failed={failed || !imageSource}
          >
            {imageSource && !failed ? (
              <>
                <img
                  src={imageSource}
                  srcSet={media.srcSet}
                  sizes="(min-width: 1424px) 1360px, (max-width: 640px) calc(100vw - 40px), calc(100vw - 64px)"
                  alt={media.alt}
                  width={2800}
                  height={933}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={() => setFailed(true)}
                />
                {isConceptPreview && <span className="preview-badge">Imagem conceitual</span>}
              </>
            ) : (
              <div className="photo-fallback" role="img" aria-label="Imagem principal indisponível">
                <span>Imagem principal aguardando foto autorizada</span>
              </div>
            )}
          </HomePhotoFrame>
        </figure>
      </HomePhotoContainer>
    </HomePhotoSection>
  );
}
