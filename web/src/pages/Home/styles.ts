import styled from 'styled-components';
import { lighten, shade } from 'polished';

import { motion } from 'framer-motion';

import HeroImg from '../../assets/images/hero.png';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 30rem;
  height: 100vh;
  max-height: 60rem;
  overflow: hidden;

  background: linear-gradient(285.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
`;

export const MainContent = styled(motion.main)`
  height: 100vh;
  max-height: 60rem;

  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-template-columns: 0px 1fr 0px;

  position: relative;
  color: var(--white);
  padding-top: 6rem;

  section {
    max-width: 25.93rem;
    margin: 0 auto;
    z-index: 2;

    h1 {
      font-weight: 500;
      font-size: 1.75rem;
      line-height: 110%;
      letter-spacing: -0.03em;
      margin: 2.75rem 0;
    }

    p {
      font-size: 16px;
      line-height: 150%;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: 0 1fr 1fr;

    section {
      margin-right: 2rem;
    }
  }
`;

export const ServicesTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.875rem;
  }

  span {
    font-size: 1rem;
    line-height: 105%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    margin-left: 1rem;
  }
`;

export const MainButton = styled.div`
  max-width: 300px;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
  }

  button:first-child {
    background: var(--cyan-500);
    color: var(--dark-purple-900);

    padding: 1.125rem 1.5rem;
    font-size: 0.875rem;

    border-radius: 5rem;
    font-weight: 600;
    margin-right: 1rem;

    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#00E1E7')};
    }
  }

  button:last-child {
    display: flex;
    align-items: center;

    background: transparent;
    font-weight: 600;
    color: var(--white);
    transition: color 0.4s;

    &:hover {
      color: var(--gray-100);

      div {
        background: linear-gradient(
          135deg,
          #ffffff -314.58%,
          rgba(255, 255, 255, 0.2) 95.83%
        );
      }
    }

    div {
      margin-right: 0.5rem;
      font-size: 0px;
      padding: 0.5rem;

      border-radius: 50%;

      background: linear-gradient(
        135deg,
        #ffffff -314.58%,
        rgba(255, 255, 255, 0) 95.83%
      );

      img {
        width: 0.875rem;
        transform: translate(10%, 0%);
      }
    }
  }
`;

export const BackgroundImg = styled.div`
  img {
    position: absolute;
    z-index: 1;
    user-select: none;
    display: none;
  }

  img.playlist-03 {
    display: block;

    top: 1.687rem;
    right: 0.075rem;

    width: 5.125rem;
    transform: rotate(15deg);
  }

  img.certified {
    display: block;
    bottom: 3rem;
    left: -3rem;

    transform: rotate(-21.05deg);
  }

  @media (min-width: 600px) {
    img {
      display: block;
    }

    img.playlist-01 {
      top: 2.687rem;
      left: -4.875rem;

      width: 5.125rem;
      transform: rotate(15deg);
    }

    img.playlist-02 {
      top: -0.687rem;
      left: 12.875rem;

      width: 3.375rem;
    }

    img.playlist-03 {
      top: 2.687rem;
      right: -4.875rem;
    }

    img.certified {
      top: 4rem;
      left: 40%;
    }

    img.transcription {
      top: 1.4rem;
      right: 16.875rem;

      width: 3.375rem;
      transform: rotate(20.07deg);
    }
  }
`;

export const HeroBackground = styled.div`
  display: none;

  position: absolute;
  bottom: 0;
  right: 0;

  background: url(${HeroImg}) no-repeat center;
  background-size: 100%;

  @media (min-width: 600px) {
    display: block;

    width: 30.925rem;
    height: 25.15rem;
  }

  @media (min-width: 735px) {
    display: block;

    width: 40.925rem;
    height: 33.125rem;
  }

  @media (min-width: 1450px) {
    display: block;

    width: 44.925rem;
    height: 36.125rem;
  }
`;

export const Items = styled.section`
  margin-top: 6rem;

  header {
    h2 {
      font-family: 'Mukta', sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 115%;

      letter-spacing: 0.005em;
      margin-top: 2rem;

      color: var(--dark-purple-900);
    }

    div {
      display: flex;
      flex-direction: column;

      span:first-child {
        display: flex;
        align-items: center;

        font-family: 'Mukta', sans-serif;
        font-weight: 600;
        color: var(--purple-800);

        font-size: 1rem;
        line-height: 105%;

        letter-spacing: 0.15em;
        text-transform: uppercase;

        position: relative;
        padding-left: 2.5rem;
      }

      span:first-child:before {
        content: '';
        width: 1.5rem;
        height: 2px;
        background: var(--purple-400);
        opacity: 0.5;

        position: absolute;
        left: 0;
      }

      span:last-child {
        display: none;
        align-items: center;

        line-height: 150%;

        svg {
          color: var(--yellow-700);
          margin-left: 1rem;
        }
      }
    }
  }

  ul {
    display: grid;
    align-items: center;

    column-gap: 2rem;
    row-gap: 2rem;
    margin: 4rem 0;

    li {
      margin-top: 0;
    }
  }

  @media (min-width: 400px) {
    header {
      div {
        span:first-child {
          padding-left: 3.5rem;
        }

        span:first-child:before {
          width: 2.5rem;
        }
      }
    }

    ul {
      grid-template-columns: repeat(2, 1fr);

      li {
        align-self: flex-start;
      }
    }
  }

  @media (min-width: 700px) {
    header {
      div {
        flex-direction: row;
        align-items: center;

        justify-content: space-between;

        span:last-child {
          display: flex;
        }
      }
    }

    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-50);

  padding: 2.5rem 0;
  margin-bottom: 2rem;

  &,
  div {
    display: flex;
  }

  flex-direction: column;

  div {
    align-items: center;
  }

  div:first-child {
    img {
      margin-right: 1rem;
    }

    span {
      font-weight: 500;
      color: var(--gray-400);
      line-height: 145%;
    }
  }

  div:last-child {
    align-self: flex-end;
    cursor: pointer;
    margin-top: 2rem;

    &:hover {
      img {
        opacity: 0.7;
      }

      span {
        color: ${lighten(0.3, '#5F41D9')};
      }
    }

    img {
      margin-left: 1rem;
      transition: opacity 0.4s;
    }

    span {
      font-weight: 600;
      color: var(--purple-400);
      transition: color 0.4s;
    }
  }

  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div:last-child {
      align-self: center;
      margin-top: 0px;
    }
  }
`;
