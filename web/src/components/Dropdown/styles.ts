import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { motion } from 'framer-motion';

interface ContainerProps {
  uppercase?: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  align-items: center;

  > svg {
    font-size: 1.5rem;
    color: var(--white);

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  > span {
    ${({ uppercase }) =>
      uppercase &&
      css`
        text-transform: uppercase;
      `}
  }

  div {
    margin-left: 0.5rem;

    span {
      display: block;

      overflow: hidden;
      position: relative;
      border-radius: 20%;
      transform: translateY(40%) rotate(30deg) skewY(30deg) scaleX(0.866);

      &,
      &:before,
      &:after {
        width: 0.625em;
        height: 0.625em;
      }

      &:before,
      &:after {
        position: absolute;
        background: var(--cyan-100);
        content: '';
      }

      &:before {
        border-radius: 20% 50%;
        transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
          skewX(30deg) scaleY(0.866) translateX(-24%);
      }

      &:after {
        border-radius: 0 0 53% 20%;
        transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
          skewX(-30deg) scaleY(0.866) translateX(24%);
      }
    }
  }
`;
