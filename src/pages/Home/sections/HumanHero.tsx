import { CallToAction } from '../../../components/brand/CallToAction';
import { homeContent } from '../../../content/homeContent';
import { HeroContainer, HeroCopy, HeroGrid, HeroLabel, HeroMedia, HeroSection } from '../homeStyles';

export function HumanHero() {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroGrid>
          <HeroCopy>
            <HeroLabel>{homeContent.hero.eyebrow}</HeroLabel>
            <h1>{homeContent.hero.title}</h1>
            <p>{homeContent.hero.body}</p>
            <CallToAction
              primary={homeContent.hero.primaryAction}
              secondary={homeContent.hero.secondaryAction}
              dark
            />
          </HeroCopy>
          <HeroMedia media={homeContent.media[0]} priority />
        </HeroGrid>
      </HeroContainer>
    </HeroSection>
  );
}
