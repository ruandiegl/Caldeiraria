import styled from 'styled-components';

export const Shell = styled.div`
  min-height: 100vh;
  background: #fff;
  color: #223044;
  font-family: "Open Sans", Arial, sans-serif;
`;

export const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 40;
  padding: 10px 14px;
  color: #fff;
  background: #11182d;
  border-radius: 6px;
  transform: translateY(-180%);
  transition: transform 180ms ease;

  &:focus {
    transform: translateY(0);
  }
`;

export const Header = styled.header<{ $open: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  min-height: 76px;
  padding: 0 max(20px, calc((100vw - 1360px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 1.8vw, 26px);
  color: #11182d;
  background: #ffffff;
  border-bottom: 1px solid #edf1f5;
  box-shadow: 0 4px 16px rgba(17, 24, 45, 0.055);
  backdrop-filter: blur(0) saturate(100%);
  -webkit-backdrop-filter: blur(0) saturate(100%);
  transition: transform 180ms ease;

  @media (max-width: 920px) {
    padding-inline: 16px;
  }

  @media (max-width: 1279px) {
    min-height: 64px;
    justify-content: space-between;
  }
`;

export const Brand = styled.a`
  min-width: 0;
  display: inline-flex;
  align-items: center;
  width: 176px;
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
  width: 100%;
  max-width: none;
  flex: 1;
  min-width: 0;
  font-size: clamp(11px, 0.84vw, 12px);
  font-weight: 900;
  text-transform: uppercase;

  > ul.primary-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(4px, 0.75vw, 11px);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    position: relative;
    min-height: 46px;
    padding: 0 clamp(3px, 0.4vw, 7px);
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    transition: color 180ms ease, transform 180ms ease;
  }

  a::after {
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
    color: #063e66;
  }

  a:hover::after,
  a.active::after {
    transform: scaleX(1);
  }

  a.nav-quote {
    min-width: 204px;
    min-height: 46px;
    padding-inline: 16px;
    justify-content: center;
    color: #fff;
    background: #fb7900;
    border-radius: 5px;
    box-shadow: 0 8px 20px rgba(251, 121, 0, 0.16);
    white-space: nowrap;
  }

  a.nav-quote::after { display: none; }
  a.nav-quote:hover { color: #fff; background: #e96d00; }

  a:focus-visible,
  button:focus-visible {
    outline: 3px solid #fb7900;
    outline-offset: 3px;
    border-radius: 3px;
  }

  @media (max-width: 1279px) {
    position: fixed;
    top: 64px;
    left: 16px;
    right: 16px;
    z-index: 22;
    box-sizing: border-box;
    max-width: calc(100vw - 32px);
    max-height: calc(100dvh - 80px);
    overflow-y: auto;
    overscroll-behavior: contain;
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    padding: 10px 20px 18px;
    background: rgba(244, 247, 251, 0.88);
    border: 1px solid rgba(216, 227, 239, 0.96);
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(17, 24, 45, 0.16);
    backdrop-filter: blur(18px);
    flex: initial;

    > ul.primary-list {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    > ul.primary-list > li { width: 100%; }

    a {
      max-width: 100%;
      overflow-wrap: anywhere;
      line-height: 1.35;
    }

    > ul.primary-list {
      justify-content: initial;
    }

    a {
      padding-inline: 2px;
    }
  }
`;

export const NavDropdown = styled.div<{ $expanded: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  .nav-dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .nav-dropdown-trigger > a { white-space: nowrap; }

  .nav-dropdown-disclosure {
    width: 24px;
    min-width: 24px;
    height: 46px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 4px;
    color: inherit;
    background: transparent;
    cursor: pointer;
  }

  .nav-dropdown-disclosure svg {
    width: 13px;
    height: 13px;
    transition: transform 180ms ease;
    transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
  }

  .nav-dropdown-submenu {
    position: absolute;
    top: calc(100% + 9px);
    left: 50%;
    min-width: 258px;
    margin: 0;
    padding: 9px;
    display: block;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(244, 247, 251, 0.92)),
      rgba(255, 255, 255, 0.96);
    border: 1px solid #d8e3ef;
    border-radius: 12px;
    box-shadow: 0 24px 70px rgba(17, 24, 45, 0.14);
    backdrop-filter: blur(18px);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transform: translate(-50%, 8px);
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
  }

  .nav-dropdown-submenu > ul {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 2px;
    list-style: none;
  }

  .nav-dropdown-submenu::before {
    content: "";
    position: absolute;
    inset: -10px 0 auto;
    height: 10px;
  }

  &[data-expanded='true'] .nav-dropdown-submenu {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  .nav-dropdown-submenu a {
    min-height: 44px;
    padding: 8px 14px;
    color: #102a43;
    border-radius: 8px;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: none;
    transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  }

  .nav-dropdown-submenu a:hover,
  .nav-dropdown-submenu a.active {
    color: #063e66;
    background: rgba(255, 132, 36, 0.12);
    transform: translateX(2px);
  }

  .nav-dropdown-submenu a::after {
    display: none;
  }

  @media (max-width: 1279px) {
    width: 100%;
    display: block;

    .nav-dropdown-trigger {
      width: 100%;
    }

    .nav-dropdown-trigger > a {
      flex: 1;
    }

    .nav-dropdown-disclosure {
      width: 44px;
      min-width: 44px;
    }

    .nav-dropdown-submenu {
      position: static;
      min-width: 0;
      width: 100%;
      margin-top: 2px;
      padding: 4px 0 4px 12px;
      display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};
      background: transparent;
      border: 0;
      border-left: 2px solid rgba(251, 121, 0, 0.45);
      border-radius: 0;
      box-shadow: none;
      backdrop-filter: none;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: none;
      transition: none;
    }

    .nav-dropdown-submenu > ul {
      padding: 0;
    }

    .nav-dropdown-submenu::before {
      display: none;
    }

    &[data-expanded='true'] .nav-dropdown-submenu { transform: none; }
  }
`;

export const MenuButton = styled.button<{ $compact: boolean }>`
  display: ${({ $compact }) => ($compact ? 'block' : 'none')};
  width: 44px;
  height: 44px;
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
  background: #11182d;

  .footer-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(150px, 0.72fr) minmax(190px, 0.78fr) minmax(150px, 0.72fr);
    gap: 26px;
    align-items: start;
  }

  strong {
    display: block;
    color: #fff;
    font-family: "Open Sans", Arial, sans-serif;
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
    color: #11182d;
    background: #fb7900;
    border-radius: 7px;
    font-size: 0.72rem;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 0 14px 30px rgba(251, 121, 0, 0.22);
  }

  .footer-contact > a:hover {
    color: #11182d;
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

  .social-links svg {
    width: 17px;
    height: 17px;
    display: block;
    fill: currentColor;
    stroke: none;
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

  @media (max-width: 1080px) {
    .footer-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 34px;
    }
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

