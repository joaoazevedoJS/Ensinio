import styled, { css } from 'styled-components';

import { Layout } from '../Container/styles';

interface IHeaderContainerProps {
  isChangeColor?: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainerProps>`
  ${({ isChangeColor }) =>
    isChangeColor
      ? css`
          background: linear-gradient(
            285.95deg,
            #41b5d9 2.25%,
            #5f41d9 100.27%
          );
        `
      : css`
          background: rgba(0, 0, 0, 0.03);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        `}

  width: 100%;
  padding: 1.5rem;
  position: fixed;
  z-index: 10;
  transition: background-color 0.4s;

  @media (max-width: 290px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const ContentMobile = styled(Layout)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 2rem;
  }

  @media (min-width: 980px) {
    display: none;
  }
`;

export const ContentDesktop = styled(Layout)`
  display: none;
  justify-content: space-between;
  align-items: center;

  color: var(--white);
  font-weight: 500;
  font-size: 0.937rem;

  > img {
    height: 2rem;
  }

  nav {
    &,
    article {
      display: flex;
      align-items: center;
    }

    article {
      margin-left: 2.5rem;

      > button {
        font-size: 0.937rem;
        font-weight: 600;
        color: var(--white);

        border: 1px solid var(--white);
        border-radius: 5rem;

        padding: 0.75rem 1.5rem;
        background: transparent;

        margin: 0 2rem;

        transition: background-color 0.4s, color 0.4s;

        &:hover {
          background: var(--white);
          color: var(--dark-purple-900);
        }
      }

      > div {
        cursor: pointer;

        &:hover {
          color: var(--gray-100);
        }
      }
    }
  }

  @media (min-width: 980px) {
    display: flex;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;

  padding-right: 2.5rem;

  border-right: 1px solid var(--cyan-100);

  > li {
    list-style: none;
    cursor: pointer;

    transition: color 0.4s;

    & + li {
      margin-left: 2rem;
    }

    &:hover {
      color: var(--gray-100);
    }
  }
`;

export const LoginGroup = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    img {
      opacity: 0.9;
    }

    span {
      color: var(--gray-100);
    }
  }

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
    transition: opacity 0.4s;
  }

  span {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: 600;
    line-height: 105%;

    transition: color 0.4s;
  }
`;
