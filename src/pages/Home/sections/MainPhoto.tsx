import { useState } from 'react';
import { homeContent, type HomeMedia } from '@/content/homeContent';
import { HomePhotoCaption, HomePhotoContainer, HomePhotoFrame, HomePhotoSection } from '../homeStyles';

const media: HomeMedia = homeContent.media[0];
const isPreviewInReview = import.meta.env.DEV && media.status === 'preview-asset';
const imageSource = media.status === 'approved' || isPreviewInReview ? media.src : null;
const sourceAtWidth = (width: number) => imageSource?.replace(/w=\d+/, `w=${width}`) ?? undefined;

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
                  src={sourceAtWidth(1600)}
                  srcSet={`${sourceAtWidth(900)} 900w, ${sourceAtWidth(1600)} 1600w, ${sourceAtWidth(2200)} 2200w, ${sourceAtWidth(2800)} 2800w`}
                  sizes="(min-width: 1424px) 1360px, (max-width: 640px) calc(100vw - 40px), calc(100vw - 64px)"
                  alt={media.alt}
                  width={2200}
                  height={830}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={() => setFailed(true)}
                />
                {isPreviewInReview && <span className="preview-badge">Imagem de demonstração</span>}
              </>
            ) : (
              <div className="photo-fallback" role="img" aria-label="Imagem principal indisponível">
                <span>Imagem principal aguardando foto autorizada</span>
              </div>
            )}
          </HomePhotoFrame>
          {isPreviewInReview && imageSource && <HomePhotoCaption>{media.caption}</HomePhotoCaption>}
        </figure>
      </HomePhotoContainer>
    </HomePhotoSection>
  );
}
