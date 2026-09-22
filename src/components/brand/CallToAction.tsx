import { Link } from 'react-router-dom';
import { buttonVariants } from '../ui/button-variants';
import { CtaGroup } from './styles';

type CallToActionProps = {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  dark?: boolean;
};

export function CallToAction({ primary, secondary, dark = false }: CallToActionProps) {
  return (
    <CtaGroup $dark={dark}>
      <Link className={buttonVariants({ size: 'lg' })} to={primary.href}>
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          className={buttonVariants({ variant: dark ? 'secondary' : 'outline', size: 'lg' })}
          to={secondary.href}
        >
          {secondary.label}
        </Link>
      ) : null}
    </CtaGroup>
  );
}
