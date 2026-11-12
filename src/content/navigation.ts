export type PrimaryNavId =
  | 'company'
  | 'people'
  | 'services'
  | 'facilities'
  | 'equipment'
  | 'certifications'
  | 'cases'
  | 'quote';

export type PrimaryNavItem = {
  id: PrimaryNavId;
  label: string;
  href: string;
};

export const primaryNavItems: readonly PrimaryNavItem[] = [
  { id: 'company', label: 'Empresa', href: '/empresa' },
  { id: 'people', label: 'Pessoas', href: '/pessoas' },
  { id: 'services', label: 'Serviços', href: '/servicos' },
  { id: 'facilities', label: 'Instalações', href: '/instalacoes' },
  { id: 'equipment', label: 'Equipamentos', href: '/equipamentos' },
  { id: 'certifications', label: 'Certificações', href: '/certificacoes' },
  { id: 'cases', label: 'Obras e clientes', href: '/obras-clientes' },
  { id: 'quote', label: 'Solicitar orçamento', href: '/contato' },
];

const isAtPath = (pathname: string, route: string) => pathname === route || pathname.startsWith(`${route}/`);

export function getPrimaryNavId(pathname: string): PrimaryNavId | null {
  if (isAtPath(pathname, '/empresa')) return 'company';
  if (isAtPath(pathname, '/pessoas')) return 'people';
  if (isAtPath(pathname, '/servicos')) return 'services';
  if (isAtPath(pathname, '/instalacoes')) return 'facilities';
  if (isAtPath(pathname, '/equipamentos')) return 'equipment';
  if (isAtPath(pathname, '/certificacoes')) return 'certifications';
  if (isAtPath(pathname, '/obras-clientes')) return 'cases';
  if (isAtPath(pathname, '/contato')) return 'quote';
  return null;
}
