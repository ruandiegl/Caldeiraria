import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { primaryNavItems, getPrimaryNavId } from '@/content/navigation';
import { Brand, CompanyMenu, Footer, Header, Main, MenuButton, Nav, RouteViewport, Shell, SkipLink, WhatsApp } from './styles';
import { useSiteMotion } from './useSiteMotion';
import logo from '../../assets/logo.png';

type SiteLayoutProps = {
  children: ReactNode;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.2 2.5h9.6A4.7 4.7 0 0 1 21.5 7.2v9.6a4.7 4.7 0 0 1-4.7 4.7H7.2a4.7 4.7 0 0 1-4.7-4.7V7.2a4.7 4.7 0 0 1 4.7-4.7Zm0 2A2.7 2.7 0 0 0 4.5 7.2v9.6a2.7 2.7 0 0 0 2.7 2.7h9.6a2.7 2.7 0 0 0 2.7-2.7V7.2a2.7 2.7 0 0 0-2.7-2.7H7.2Zm4.8 2.8a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.1-2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.2 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM2.5 9h3.4v12.5H2.5V9Zm5.6 0h3.2v1.7h.05c.45-.85 1.55-2.05 3.7-2.05 3.96 0 4.7 2.6 4.7 5.98v6.85h-3.4v-6.07c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21v6.17H8.1V9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.04 4.5c-6.34 0-11.5 5.07-11.5 11.31 0 2.13.61 4.2 1.77 5.99L4.5 27.5l5.9-1.78a11.65 11.65 0 0 0 5.64 1.45c6.34 0 11.5-5.07 11.5-11.32S22.38 4.5 16.04 4.5Zm0 20.72c-1.8 0-3.55-.5-5.06-1.45l-.37-.23-3.5 1.06 1.08-3.37-.25-.39a9.25 9.25 0 0 1-1.48-5.03c0-5.17 4.3-9.37 9.58-9.37 5.27 0 9.57 4.2 9.57 9.37s-4.3 9.41-9.57 9.41Z" />
      <path d="M21.44 18.52c-.3-.15-1.74-.85-2.01-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47a8.9 8.9 0 0 1-1.66-2.04c-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1-1.04 2.45 0 1.44 1.07 2.84 1.22 3.04.15.2 2.1 3.16 5.08 4.43.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.74-.7 1.99-1.38.25-.69.25-1.27.17-1.39-.08-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 1279px)').matches);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const companyToggleRef = useRef<HTMLButtonElement>(null);
  const routeRef = useRef<HTMLDivElement>(null);
  const previousPath = useRef(location.pathname);
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL?.trim();
  const activePrimaryId = getPrimaryNavId(location.pathname);

  const socialDestinations = [
    { name: 'Instagram', href: import.meta.env.VITE_INSTAGRAM_URL?.trim(), icon: <InstagramIcon /> },
    { name: 'LinkedIn', href: import.meta.env.VITE_LINKEDIN_URL?.trim(), icon: <LinkedInIcon /> },
    { name: 'WhatsApp', href: whatsappUrl, icon: <WhatsAppIcon /> },
  ];

  useSiteMotion({ headerRef, routeRef, pathname: location.pathname });

  function closeNavigation() {
    setOpen(false);
    setCompanyExpanded(false);
  }

  function handleBrandClick() {
    closeNavigation();

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
    }
  }

  function scrollBehavior(): ScrollBehavior {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function handleHeaderKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape') return;
    if (companyExpanded) {
      setCompanyExpanded(false);
      companyToggleRef.current?.focus();
      return;
    }
    if (open) {
      closeNavigation();
      menuButtonRef.current?.focus();
    }
  }

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1279px)');
    const updateCompact = (event: MediaQueryListEvent) => setCompact(event.matches);
    media.addEventListener('change', updateCompact);
    return () => media.removeEventListener('change', updateCompact);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
    if (previousPath.current !== location.pathname) {
      const heading = routeRef.current?.querySelector('h1');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <Shell>
      <SkipLink href="#main-content">Pular para o conteúdo</SkipLink>
      <Header ref={headerRef} $open={open} data-site-header onKeyDown={handleHeaderKeyDown}>
        <Brand as={Link} to="/" aria-label="Metalúrgica Vulcano" onClick={handleBrandClick}>
          <img src={logo} alt="Metalúrgica Vulcano" />
        </Brand>
        <MenuButton
          ref={menuButtonRef}
          $compact={compact}
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => open ? closeNavigation() : setOpen(true)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </MenuButton>
        <Nav
          id="primary-navigation"
          aria-label="Navegação principal"
          $open={open}
          inert={compact && !open}
          aria-hidden={compact && !open}
        >
          <ul className="primary-list">
            {primaryNavItems.map((item) => item.id === 'company' ? (
              <li key={item.id}>
                <CompanyMenu
                  $expanded={companyExpanded}
                  data-expanded={companyExpanded}
                >
                  <div className="company-trigger">
                    <Link
                      to={item.href}
                      className={activePrimaryId === item.id ? 'active' : undefined}
                      aria-current={location.pathname === item.href ? 'page' : undefined}
                      onClick={closeNavigation}
                    >
                      {item.label}
                    </Link>
                    <button
                      ref={companyToggleRef}
                      className="company-disclosure"
                      type="button"
                      aria-label={companyExpanded ? 'Recolher seções de Empresa' : 'Expandir seções de Empresa'}
                      aria-expanded={companyExpanded}
                      aria-controls="company-sections"
                      onClick={() => setCompanyExpanded((current) => !current)}
                    >
                      <ChevronDown aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    className="company-submenu"
                    id="company-sections"
                    role="group"
                    aria-label="Seções da empresa"
                    aria-hidden={!companyExpanded}
                  >
                    <ul>
                      <li><Link to="/empresa" className={location.pathname === '/empresa' ? 'active' : undefined} aria-current={location.pathname === '/empresa' ? 'page' : undefined} onClick={closeNavigation}>Visão geral da empresa</Link></li>
                      <li><Link to="/empresa/historia" className={location.pathname === '/empresa/historia' ? 'active' : undefined} aria-current={location.pathname === '/empresa/historia' ? 'page' : undefined} onClick={closeNavigation}>História</Link></li>
                      <li><Link to="/empresa/estrutura" className={location.pathname === '/empresa/estrutura' ? 'active' : undefined} aria-current={location.pathname === '/empresa/estrutura' ? 'page' : undefined} onClick={closeNavigation}>Estrutura</Link></li>
                    </ul>
                  </div>
                </CompanyMenu>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={item.id === 'careers'
                    ? `nav-careers${activePrimaryId === item.id ? ' active' : ''}`
                    : activePrimaryId === item.id ? 'active' : undefined}
                  aria-current={activePrimaryId === item.id ? 'page' : undefined}
                  onClick={closeNavigation}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
      </Header>
      <Main id="main-content">
        <RouteViewport ref={routeRef} key={location.pathname} data-testid="route-motion-scope">
          {children}
        </RouteViewport>
      </Main>
      <Footer>
        <div className="footer-grid">
          <section className="footer-brand">
            <Link to="/" aria-label="Metalúrgica Vulcano">
              <img src={logo} alt="Metalúrgica Vulcano" />
            </Link>
            <p>
              Soluções metálicas sob medida para caldeiraria, tubulação, soldagem, montagem e manutenção industrial.
            </p>
          </section>

          <nav aria-label="Mapa do site">
            <strong>Mapa do site</strong>
            <Link to="/">Home</Link>
            <Link to="/empresa">Empresa</Link>
            <Link to="/segmentos">Segmentos</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/empresa/qualidade">Qualidade</Link>
            <Link to="/empresa/esg">ESG</Link>
            <Link to="/empresa/acoes-sociais">Ações Sociais</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/pessoas/carreira">Trabalhe Conosco</Link>
          </nav>

          <nav aria-label="Outras páginas">
            <strong>Outras páginas</strong>
            <Link to="/pessoas">Pessoas</Link>
            <Link to="/pessoas/desenvolvimento">Pessoas que movem a Vulcano</Link>
            <Link to="/pessoas/comunidade">Comunidade</Link>
            <Link to="/pessoas/cuidado">We Care</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/instalacoes">Instalações</Link>
            <Link to="/equipamentos">Equipamentos</Link>
            <Link to="/certificacoes">Certificações</Link>
            <Link to="/obras-clientes">Obras e clientes</Link>
          </nav>

          <section className="footer-contact">
            <strong>Atendimento</strong>
            <p>Brasil e América Latina</p>
            <Link to="/contato">Solicitar orçamento</Link>
            {socialDestinations.some(({ href }) => href) && (
              <div className="social-links" aria-label="Redes sociais">
                {socialDestinations.map(({ name, href, icon }) => href && (
                  <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>{icon}</a>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Metalúrgica Vulcano. Todos os direitos reservados.</span>
          <span>Caldeiraria, tubulação e serviços offshore.</span>
        </div>
      </Footer>
      {whatsappUrl && <WhatsApp href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16.04 4.5c-6.34 0-11.5 5.07-11.5 11.31 0 2.13.61 4.2 1.77 5.99L4.5 27.5l5.9-1.78a11.65 11.65 0 0 0 5.64 1.45c6.34 0 11.5-5.07 11.5-11.32S22.38 4.5 16.04 4.5Zm0 20.72c-1.8 0-3.55-.5-5.06-1.45l-.37-.23-3.5 1.06 1.08-3.37-.25-.39a9.25 9.25 0 0 1-1.48-5.03c0-5.17 4.3-9.37 9.58-9.37 5.27 0 9.57 4.2 9.57 9.37s-4.3 9.41-9.57 9.41Z" />
          <path d="M21.44 18.52c-.3-.15-1.74-.85-2.01-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47a8.9 8.9 0 0 1-1.66-2.04c-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1-1.04 2.45 0 1.44 1.07 2.84 1.22 3.04.15.2 2.1 3.16 5.08 4.43.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.74-.7 1.99-1.38.25-.69.25-1.27.17-1.39-.08-.12-.27-.2-.56-.34Z" />
        </svg>
      </WhatsApp>}
    </Shell>
  );
}
