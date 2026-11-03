export type PrimaryNavId =
  | 'home'
  | 'company'
  | 'segments'
  | 'products'
  | 'quality'
  | 'esg'
  | 'social-actions'
  | 'contact'
  | 'careers';

export type PrimaryNavItem = {
  id: PrimaryNavId;
  label: string;
  href: string;
};

export const primaryNavItems: readonly PrimaryNavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'company', label: 'Empresa', href: '/empresa' },
  { id: 'segments', label: 'Segmentos', href: '/segmentos' },
  { id: 'products', label: 'Produtos', href: '/produtos' },
  { id: 'quality', label: 'Qualidade', href: '/empresa/qualidade' },
  { id: 'esg', label: 'ESG', href: '/empresa/esg' },
  { id: 'social-actions', label: 'Ações Sociais', href: '/empresa/acoes-sociais' },
  { id: 'contact', label: 'Contato', href: '/contato' },
  { id: 'careers', label: 'Trabalhe Conosco', href: '/pessoas/carreira' },
];

const isAtPath = (pathname: string, route: string) => pathname === route || pathname.startsWith(`${route}/`);

export function getPrimaryNavId(pathname: string): PrimaryNavId | null {
  if (pathname === '/') return 'home';
  if (isAtPath(pathname, '/empresa/qualidade')) return 'quality';
  if (isAtPath(pathname, '/empresa/esg')) return 'esg';
  if (isAtPath(pathname, '/empresa/acoes-sociais')) return 'social-actions';
  if (isAtPath(pathname, '/empresa') && ['/empresa', '/empresa/historia', '/empresa/estrutura'].some((route) => isAtPath(pathname, route))) return 'company';
  if (isAtPath(pathname, '/segmentos')) return 'segments';
  if (isAtPath(pathname, '/produtos')) return 'products';
  if (isAtPath(pathname, '/contato')) return 'contact';
  if (isAtPath(pathname, '/pessoas/carreira')) return 'careers';
  return null;
}
