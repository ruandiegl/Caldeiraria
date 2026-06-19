import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #ffffff;
    color: #223044;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :focus-visible {
    outline: 3px solid rgba(255, 132, 36, 0.72);
    outline-offset: 4px;
  }

  .reveal {
    opacity: 0;
    transform: translateY(22px);
    transition:
      opacity 560ms cubic-bezier(0.2, 0.72, 0.24, 1),
      transform 560ms cubic-bezier(0.2, 0.72, 0.24, 1);
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition: none !important;
      animation: none !important;
    }

    .reveal {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;
