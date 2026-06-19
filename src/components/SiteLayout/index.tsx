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
        <Brand as={Link} to="/" aria-label="Metalurgica Vulcano">
          <img src={logo} alt="Metalurgica Vulcano" />
        </Brand>
        <MenuButton type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((current) => !current)}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Nav $open={open} onClick={() => setOpen(false)}>
          <NavLink to="/empresa">Empresa</NavLink>
          <NavLink to="/servicos">Servicos</NavLink>
          <NavLink to="/instalacoes">Instalacoes</NavLink>
          <NavLink to="/equipamentos">Equipamentos</NavLink>
          <NavLink to="/certificacoes">Certificacoes</NavLink>
          <NavLink to="/obras-clientes">Obras e clientes</NavLink>
          <NavLink className="quote" to="/contato">Solicitar orcamento</NavLink>
        </Nav>
      </Header>
      <Main>
        <RouteViewport key={location.pathname}>{children}</RouteViewport>
      </Main>
      <Footer>
        <div>
          <section>
            <strong>Metalurgica Vulcano</strong>
            <p>Solucoes metalicas sob medida para projetos industriais de alta complexidade.</p>
          </section>
          <nav>
            <Link to="/empresa">Empresa</Link>
            <Link to="/servicos">Servicos</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </Footer>
      <WhatsApp href="https://wa.me/5500000000000" aria-label="Falar pelo WhatsApp">WA</WhatsApp>
    </Shell>
  );
}
