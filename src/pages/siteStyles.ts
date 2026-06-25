import styled from 'styled-components';

export const Container = styled.div`
  width: min(1062px, calc(100% - 40px));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: min(100% - 28px, 1180px);
  }
`;

export const Hero = styled.section.attrs({ className: 'reveal' })<{ $image: string; $home?: boolean }>`
  position: relative;
  min-height: ${({ $home }) => ($home ? '92vh' : '56vh')};
  padding: ${({ $home }) => ($home ? '140px 0 36px' : '135px 0 77px')};
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(17, 24, 45, 0.92) 0%, rgba(17, 24, 45, 0.68) 46%, rgba(17, 24, 45, 0.18) 100%),
    linear-gradient(0deg, rgba(17, 24, 45, 0.8), rgba(17, 24, 45, 0.06)),
    url(${({ $image }) => $image}) center / cover no-repeat,
    #11182d;
  animation: hero-drift 900ms cubic-bezier(0.2, 0.72, 0.24, 1) both;

  h1 {
    max-width: 100%;
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(2rem, 4.2vw, 4.2rem);
    line-height: 1.06;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  p.copy {
    max-width: 820px;
    margin: 23px 0 0;
    color: rgba(255, 255, 255, 0.84);
    font-size: clamp(0.9rem, 1.7vw, 1.15rem);
    line-height: 1.58;
  }

  @media (max-width: 720px) {
    min-height: ${({ $home }) => ($home ? '84vh' : '52vh')};
    padding-top: 108px;

    h1 {
      font-size: clamp(1.75rem, 8.6vw, 3rem);
    }
  }

  @keyframes hero-drift {
    from {
      background-position: center 45%;
    }

    to {
      background-position: center center;
    }
  }
`;

export const HeroCarousel = styled(Hero)`
  background: #11182d;

  ${Container} {
    position: relative;
    z-index: 2;
  }
`;

export const HeroSlide = styled.div<{ $image: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(90deg, rgba(17, 24, 45, 0.92) 0%, rgba(17, 24, 45, 0.68) 46%, rgba(17, 24, 45, 0.18) 100%),
    linear-gradient(0deg, rgba(17, 24, 45, 0.8), rgba(17, 24, 45, 0.06)),
    url(${({ $image }) => $image}) center / cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(1.035)')};
  transition: opacity 900ms ease, transform 4200ms ease;
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: #ff8424;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  margin-top: 31px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const Button = styled.a<{ $ghost?: boolean }>`
  min-height: 45px;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $ghost }) => ($ghost ? 'rgba(255, 255, 255, 0.56)' : '#fb7900')};
  border-radius: 7px;
  color: #fff;
  background: ${({ $ghost }) => ($ghost ? 'rgba(255, 255, 255, 0.1)' : '#fb7900')};
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: ${({ $ghost }) => ($ghost ? 'none' : '0 12px 26px rgba(251, 121, 0, 0.24)')};
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $ghost }) => ($ghost ? '0 14px 30px rgba(255, 255, 255, 0.08)' : '0 17px 34px rgba(251, 121, 0, 0.32)')};
  }
`;

export const Section = styled.section.attrs({ className: 'reveal' })<{ $muted?: boolean; $dark?: boolean }>`
  padding: 94px 0;
  color: ${({ $dark }) => ($dark ? '#fff' : '#223044')};
  background: ${({ $muted, $dark }) => ($dark ? '#11182d' : $muted ? '#f4f7fb' : '#fff')};

  @media (max-width: 720px) {
    padding: 65px 0;
  }
`;

export const SectionTitle = styled.div.attrs({ className: 'reveal' })`
  margin-bottom: 38px;

  h2 {
    max-width: 810px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.8rem, 4.2vw, 3.78rem);
    line-height: 1.04;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  p {
    max-width: 684px;
    color: #475569;
    line-height: 1.75;
  }
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 63px;
  align-items: center;

  p {
    color: #475569;
    font-size: 0.94rem;
    line-height: 1.75;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "eyebrow"
      "title"
      "copy"
      "names";
  }

  @media (max-width: 560px) {
    h2 {
      font-size: clamp(1.55rem, 7vw, 2.1rem);
      line-height: 1.08;
    }

    > p:not(:first-child) {
      margin-top: 16px;
      font-size: 0.92rem;
      line-height: 1.62;
    }
  }
`;

export const IdentityBand = styled.section.attrs({ className: 'reveal' })`
  position: relative;
  padding: 62px 0;
  overflow: hidden;
  color: #223044;
  background:
    linear-gradient(110deg, #ffffff 0%, #f8fafc 50%, #eef5fb 100%),
    #f8fafc;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, rgba(16, 42, 67, 0.06) 0 1px, transparent 1px 72px);
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const IdentityGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 34px;
  align-items: stretch;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "eyebrow"
      "title"
      "copy"
      "names";
    row-gap: 0;
  }

  @media (max-width: 560px) {
    h2 {
      font-size: clamp(1.55rem, 7vw, 2.1rem);
      line-height: 1.08;
    }

    > p:not(:first-child) {
      margin-top: 16px;
      font-size: 0.92rem;
      line-height: 1.62;
    }
  }
`;

export const IdentityMedia = styled.figure`
  position: relative;
  min-height: 370px;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #102a43;

  img {
    width: 100%;
    height: 100%;
    min-height: 370px;
    object-fit: cover;
    filter: grayscale(0.2) contrast(1.04);
  }

  figcaption {
    position: absolute;
    right: 18px;
    bottom: 18px;
    left: 18px;
    padding: 16px 18px;
    color: #fff;
    background: rgba(17, 24, 45, 0.78);
    border-left: 4px solid #ff8424;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    backdrop-filter: blur(12px);
  }

  @media (max-width: 720px) {
    min-height: 230px;

    img {
      min-height: 230px;
    }
  }
`;

export const IdentityContent = styled.div`
  min-width: 0;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    max-width: 760px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.75rem, 3.6vw, 3.35rem);
    line-height: 1.04;
    text-transform: uppercase;
  }

  p {
    max-width: 690px;
    margin: 18px 0 0;
    color: #475569;
    font-size: 0.94rem;
    line-height: 1.68;
  }

  ${Actions} {
    margin-top: 24px;
  }
`;

export const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 24px;
  background: #e2e8f0;
  border-radius: 8px;
  overflow: hidden;

  article {
    min-height: 104px;
    padding: 17px;
    background: #ffffff;
  }

  strong {
    display: block;
    color: #ff8424;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.15rem;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 9px;
    color: #334155;
    font-size: 10px;
    font-weight: 900;
    line-height: 1.45;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PeopleBand = styled.section.attrs({ className: 'reveal' })`
  position: relative;
  padding: 72px 0;
  overflow: hidden;
  color: #223044;
  background:
    linear-gradient(180deg, #ffffff 0%, #f5f9fc 100%),
    #ffffff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, rgba(15, 47, 71, 0.055) 0 1px, transparent 1px 86px);
    pointer-events: none;
  }
`;

export const PeopleGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.72fr);
  gap: 38px;
  align-items: stretch;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const PeopleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    max-width: 780px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.8rem, 3.8vw, 3.55rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  p {
    max-width: 680px;
    margin: 18px 0 0;
    color: #475569;
    font-size: 0.96rem;
    line-height: 1.72;
  }
`;

export const PeopleFlow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
  border-top: 2px solid #fb7900;
  border-left: 1px solid #d8e3ef;

  article {
    min-height: 136px;
    padding: 19px 18px;
    background: rgba(255, 255, 255, 0.72);
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
  }

  strong {
    display: block;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 0.94rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 12px;
    color: #475569;
    font-size: 0.8rem;
    line-height: 1.55;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    article {
      min-height: auto;
    }
  }
`;

export const PeopleMedia = styled.figure`
  position: relative;
  min-height: 470px;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #11182d;
  box-shadow: 0 24px 70px rgba(17, 24, 45, 0.12);

  img {
    width: 100%;
    height: 100%;
    min-height: 470px;
    object-fit: cover;
    filter: grayscale(0.18) contrast(1.04);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(17, 24, 45, 0.72), transparent 58%);
  }

  figcaption {
    position: absolute;
    right: 18px;
    bottom: 18px;
    left: 18px;
    z-index: 1;
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.11em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  @media (max-width: 940px) {
    min-height: 320px;

    img {
      min-height: 320px;
    }
  }
`;

export const CardGrid = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns ?? 3}, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.article.attrs({ className: 'reveal' })`
  padding: 25px;
  min-height: 162px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 132, 36, 0.34);
    box-shadow: 0 20px 54px rgba(17, 24, 45, 0.12);
  }

  h3 {
    margin: 0 0 14px;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 0.97rem;
    line-height: 1.2;
    text-transform: uppercase;
  }

  p,
  li {
    color: #475569;
    line-height: 1.65;
  }

  ul {
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 10px 0;
    border-top: 1px solid #e2e8f0;
  }
`;

export const ServiceCard = styled.a.attrs({ className: 'reveal' })`
  position: relative;
  min-height: 270px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  background: #102a43;
  box-shadow: 0 18px 48px rgba(17, 24, 45, 0.12);
  transition: transform 260ms ease, box-shadow 260ms ease;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(17, 24, 45, 0.9), rgba(17, 24, 45, 0.1));
  }

  div {
    position: relative;
    z-index: 1;
    padding: 22px;
  }

  span {
    display: block;
    color: #ff8424;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 10px;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.06rem;
    line-height: 1.18;
    text-transform: uppercase;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 70px rgba(17, 24, 45, 0.2);
  }
`;

export const LogoGrid = styled.div.attrs({ className: 'reveal' })`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  span {
    min-height: 86px;
    padding: 16px;
    display: grid;
    place-items: center;
    color: #11182d;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  span:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 132, 36, 0.34);
    box-shadow: 0 16px 38px rgba(17, 24, 45, 0.08);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const AssuranceBand = styled.section.attrs({ className: 'reveal' })`
  padding: 68px 0;
  background:
    linear-gradient(180deg, #f7fbfe 0%, #ffffff 72%),
    #ffffff;
`;

export const AssuranceGrid = styled.div`
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 36px;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const AssuranceIntro = styled.article`
  padding-top: 4px;

  h2 {
    max-width: 540px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.6rem, 3.1vw, 2.75rem);
    line-height: 1.07;
    text-transform: uppercase;
  }

  p {
    max-width: 500px;
    margin: 18px 0 0;
    color: #475569;
    line-height: 1.7;
  }

`;

export const AssuranceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const AssuranceCard = styled.article`
  position: relative;
  min-height: 194px;
  padding: 22px 22px 20px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid #d8e3ef;
  border-radius: 8px;
  box-shadow: 0 18px 42px rgba(17, 24, 45, 0.06);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 18px;
    left: 18px;
    height: 4px;
    border-radius: 0 0 999px 999px;
    background: linear-gradient(90deg, #fb7900 0%, #fb7900 32%, #d8e3ef 32%, #d8e3ef 100%);
  }

  h3 {
    margin: 8px 0 16px;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  div {
    display: grid;
    gap: 7px;
  }

  span {
    position: relative;
    padding: 0 0 0 14px;
    color: #063e66;
    font-size: 0.7rem;
    font-weight: 900;
    line-height: 1.35;
    text-transform: uppercase;
  }

  span::before {
    content: "";
    position: absolute;
    top: 0.48em;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: #fb7900;
  }
`;

export const ClientBand = styled.section.attrs({ className: 'reveal' })`
  padding: 74px 0 82px;
  background:
    linear-gradient(180deg, #ffffff 0%, #f7fafc 100%),
    #ffffff;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

export const ClientGrid = styled.div`
  display: grid;
  gap: 34px;
`;

export const ClientContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
  grid-template-areas:
    "eyebrow names"
    "title names"
    "copy names";
  column-gap: 58px;
  row-gap: 0;
  align-items: start;

  > p:first-child {
    grid-area: eyebrow;
  }

  h2 {
    grid-area: title;
    max-width: 720px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.55rem, 3.3vw, 2.95rem);
    line-height: 1.07;
    text-transform: uppercase;
  }

  > p:not(:first-child) {
    grid-area: copy;
    max-width: 610px;
    margin: 18px 0 0;
    color: #475569;
    line-height: 1.7;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "eyebrow"
      "title"
      "copy"
      "names";
    row-gap: 0;
  }

  @media (max-width: 560px) {
    h2 {
      font-size: clamp(1.55rem, 7vw, 2.1rem);
      line-height: 1.08;
    }

    > p:not(:first-child) {
      margin-top: 16px;
      font-size: 0.92rem;
      line-height: 1.62;
    }
  }
`;

export const ClientNames = styled.div`
  grid-area: names;
  align-self: end;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid #d8e3ef;
  border-left: 1px solid #d8e3ef;

  span {
    min-height: 58px;
    padding: 13px 14px;
    display: flex;
    align-items: center;
    color: #0f2f47;
    background: #fff;
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: color 180ms ease, background 180ms ease;
  }

  span:hover {
    color: #fb7900;
    background: #fff;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin-top: 24px;

    span {
      min-height: 50px;
      padding: 12px;
      font-size: 0.66rem;
    }
  }
`;

export const ClientMedia = styled.figure`
  margin: 0;
  padding: 24px 0 0;
  display: grid;
  grid-template-columns: minmax(240px, 0.35fr) minmax(0, 0.65fr);
  column-gap: 40px;
  row-gap: 24px;
  border-top: 2px solid #fb7900;

  figcaption {
    max-width: 410px;
    color: #475569;
    font-size: 0.84rem;
    line-height: 1.65;
  }

  strong {
    display: block;
    margin: 0 0 8px;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.25rem, 2.2vw, 1.95rem);
    line-height: 1.04;
    text-transform: uppercase;
  }

  div {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
    border-left: 1px solid #d8e3ef;
  }

  span {
    min-height: 104px;
    padding: 18px 22px;
    color: #334155;
    border-right: 1px solid #d8e3ef;
    background: rgba(255, 255, 255, 0.62);
    font-size: 0.7rem;
    font-weight: 900;
    line-height: 1.45;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  b {
    display: block;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.12;
    margin-bottom: 10px;
    overflow-wrap: normal;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    div {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    padding-top: 20px;
    row-gap: 18px;

    strong {
      font-size: 1.35rem;
    }

    figcaption {
      max-width: none;
      font-size: 0.8rem;
    }

    div {
      grid-template-columns: 1fr;
      border-left: 0;
    }

    span {
      min-height: auto;
      padding: 14px 0 13px;
      background: transparent;
      border-right: 0;
      border-bottom: 1px solid #d8e3ef;
      font-size: 0.68rem;
      overflow-wrap: normal;
    }

    b {
      margin-bottom: 6px;
    }
  }
`;

export const Metrics = styled.div.attrs({ className: 'reveal' })`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 49px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(17, 24, 45, 0.18);

  article {
    position: relative;
    padding: 23px;
    border-right: 1px solid #e2e8f0;
    transition: background 180ms ease, transform 180ms ease;
  }

  article:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }

  article::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: #ff8424;
  }

  strong {
    display: block;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.53rem, 3.6vw, 2.7rem);
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 8px;
    color: #475569;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

