import styled from 'styled-components';

export const Shell = styled.div`
  min-height: 100vh;
  background: #fff;
  color: #223044;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
`;

export const Header = styled.header<{ $open: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  min-height: 70px;
  padding: 0 max(20px, calc((100vw - 1062px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: #11182d;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 34px rgba(17, 24, 45, 0.08);
  backdrop-filter: blur(16px);
  transition: box-shadow 180ms ease, background 180ms ease, transform 180ms ease;

  @media (max-width: 920px) {
    padding-inline: 16px;
  }
`;

export const Brand = styled.a`
  min-width: 0;
  display: inline-flex;
  align-items: center;
  width: 220px;
  height: 50px;
  color: inherit;
  text-decoration: none;
  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left center;
    display: block;
  }

  @media (max-width: 640px) {
    width: 176px;
    height: 42px;
  }
`;

export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 180ms ease, transform 180ms ease;
  }

  a:not(.quote)::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    height: 2px;
    background: #fb7900;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 180ms ease;
  }

  a:hover {
    color: #fb7900;
  }

  a:hover::after,
  a.active::after {
    transform: scaleX(1);
  }

  .quote {
    min-height: 40px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #fb7900;
    border-radius: 7px;
    box-shadow: 0 10px 24px rgba(251, 121, 0, 0.22);
  }

  .quote:hover {
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(251, 121, 0, 0.3);
  }

  @media (max-width: 1040px) {
    position: absolute;
    top: 70px;
    left: 16px;
    right: 16px;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    padding: 22px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(17, 24, 45, 0.16);
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #11182d;
  color: #fff;
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;

  &:hover {
    background: #102a43;
    transform: translateY(-1px);
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 5px auto;
    background: currentColor;
  }

  @media (max-width: 1040px) {
    display: block;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
`;

export const RouteViewport = styled.div`
  animation: route-enter 420ms cubic-bezier(0.2, 0.72, 0.24, 1) both;

  @keyframes route-enter {
    from {
      opacity: 0;
      transform: translateY(12px);
      filter: blur(4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }
`;

export const Footer = styled.footer`
  padding: 54px max(20px, calc((100vw - 1062px) / 2)) 24px;
  color: rgba(255, 255, 255, 0.78);
  background:
    linear-gradient(180deg, #11182d 0%, #0b1224 100%),
    #11182d;

  .footer-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.72fr) minmax(220px, 0.78fr);
    gap: 44px;
    align-items: start;
  }

  strong {
    display: block;
    color: #fff;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  p {
    max-width: 520px;
    margin: 14px 0 0;
    line-height: 1.6;
  }

  .footer-brand img {
    width: 210px;
    height: auto;
    display: block;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .footer-brand a {
    display: inline-flex;
  }

  nav {
    display: grid;
    gap: 11px;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 180ms ease, transform 180ms ease;
  }

  a:hover {
    color: #ff8424;
  }

  .footer-contact > a {
    min-height: 40px;
    margin-top: 18px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #fb7900;
    border-radius: 7px;
    font-size: 0.72rem;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 0 14px 30px rgba(251, 121, 0, 0.22);
  }

  .footer-contact > a:hover {
    color: #fff;
    transform: translateY(-1px);
  }

  .social-links {
    display: flex;
    gap: 10px;
    margin-top: 18px;
  }

  .social-links a {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .social-links a:hover {
    border-color: rgba(255, 132, 36, 0.72);
    background: rgba(255, 132, 36, 0.1);
  }

  .footer-bottom {
    margin-top: 42px;
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.78rem;
  }

  @media (max-width: 720px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .footer-brand img {
      width: 178px;
    }

    .footer-bottom {
      display: grid;
    }
  }
`;

export const WhatsApp = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 18;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: #1f9d55;
  box-shadow: 0 14px 34px rgba(31, 157, 85, 0.35);
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  svg {
    width: 31px;
    height: 31px;
    fill: currentColor;
    display: block;
  }

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 18px 42px rgba(31, 157, 85, 0.42);
  }

  @media (max-width: 640px) {
    right: 14px;
    bottom: 14px;
    width: 46px;
    height: 46px;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;
