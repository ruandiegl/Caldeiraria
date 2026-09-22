import { Separator } from '../ui/separator';
import { Intro, IntroBody, IntroHeading, IntroLabel } from './styles';

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
};

export function SectionIntro({ eyebrow, title, body, light = false }: SectionIntroProps) {
  return (
    <Intro $light={light}>
      <IntroLabel $light={light}>{eyebrow}</IntroLabel>
      <Separator aria-hidden="true" className="my-4 max-w-14" />
      <IntroHeading $light={light}>{title}</IntroHeading>
      {body ? <IntroBody $light={light}>{body}</IntroBody> : null}
    </Intro>
  );
}
