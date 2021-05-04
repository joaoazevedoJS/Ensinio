import styled from 'styled-components';

import { Layout } from '../Container/styles';

export const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  width: 100%;
  padding: 1.5rem;
  position: fixed;
  z-index: 10;
`;

export const Content = styled(Layout)`
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
`;

export const LoginGroup = styled.div`
  display: flex;
  align-items: center;

  img {
    display: none;
  }

  span {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: 600;
    line-height: 105%;
  }
`;
