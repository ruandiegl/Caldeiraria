import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand, Footer, Header, Main, MenuButton, Nav, RouteViewport, Shell, WhatsApp } from './styles';
import logo from '../../assets/logo.png';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function handleBrandClick() {
    setOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.14 },
    );

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 55}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <Shell>
      <Header $open={open}>
        <Brand as={Link} to="/" aria-label="Metalúrgica Vulcano" onClick={handleBrandClick}>
          <img src={logo} alt="Metalúrgica Vulcano" />
        </Brand>
        <MenuButton type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((current) => !current)}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Nav $open={open} onClick={() => setOpen(false)}>
          <NavLink to="/empresa">Empresa</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/instalacoes">Instalações</NavLink>
          <NavLink to="/equipamentos">Equipamentos</NavLink>
          <NavLink to="/certificacoes">Certificações</NavLink>
          <NavLink to="/obras-clientes">Obras e clientes</NavLink>
          <NavLink className="quote" to="/contato">Solicitar orçamento</NavLink>
        </Nav>
      </Header>
      <Main>
        <RouteViewport key={location.pathname}>{children}</RouteViewport>
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

          <nav aria-label="Rotas do site">
            <strong>Mapa do site</strong>
            <Link to="/empresa">Empresa</Link>
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
            <div className="social-links" aria-label="Redes sociais">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Metalúrgica Vulcano. Todos os direitos reservados.</span>
          <span>Caldeiraria, tubulação e serviços offshore.</span>
        </div>
      </Footer>
      <WhatsApp href="https://wa.me/5500000000000" target="_blank" aria-label="Falar pelo WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16.04 4.5c-6.34 0-11.5 5.07-11.5 11.31 0 2.13.61 4.2 1.77 5.99L4.5 27.5l5.9-1.78a11.65 11.65 0 0 0 5.64 1.45c6.34 0 11.5-5.07 11.5-11.32S22.38 4.5 16.04 4.5Zm0 20.72c-1.8 0-3.55-.5-5.06-1.45l-.37-.23-3.5 1.06 1.08-3.37-.25-.39a9.25 9.25 0 0 1-1.48-5.03c0-5.17 4.3-9.37 9.58-9.37 5.27 0 9.57 4.2 9.57 9.37s-4.3 9.41-9.57 9.41Z" />
          <path d="M21.44 18.52c-.3-.15-1.74-.85-2.01-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47a8.9 8.9 0 0 1-1.66-2.04c-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1-1.04 2.45 0 1.44 1.07 2.84 1.22 3.04.15.2 2.1 3.16 5.08 4.43.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.74-.7 1.99-1.38.25-.69.25-1.27.17-1.39-.08-.12-.27-.2-.56-.34Z" />
        </svg>
      </WhatsApp>
    </Shell>
  );
}
