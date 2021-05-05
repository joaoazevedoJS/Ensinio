import styled from 'styled-components';

import { Layout } from '../Container/styles';

export const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  width: 100%;
  padding: 1.5rem;
  position: fixed;
  z-index: 10;

  @media (max-width: 290px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const ContentMobile = styled(Layout)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    font-size: 1.5rem;
    color: var(--white);
  }

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

  > svg {
    font-size: 1.5rem;
    color: var(--white);
  }

  > img {
    height: 2rem;
  }

  nav {
    &,
    ul,
    article {
      display: flex;
      align-items: center;
    }

    ul {
      padding-right: 2.5rem;

      border-right: 1px solid var(--cyan-100);

      li {
        list-style: none;

        & + li {
          margin-left: 2rem;
        }
      }
    }

    article {
      margin-left: 2.5rem;

      button {
        font-size: 0.937rem;
        font-weight: 600;
        color: var(--white);

        border: 1px solid var(--white);
        border-radius: 5rem;

        padding: 0.75rem 1.5rem;
        background: transparent;

        margin: 0 2rem;
      }
    }
  }

  @media (min-width: 980px) {
    display: flex;
  }
`;

export const LoginGroup = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: 600;
    line-height: 105%;
  }
`;

export const Lang = styled.div`
  text-transform: uppercase;
`;
