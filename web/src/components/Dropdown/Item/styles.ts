import styled from 'styled-components';

import { motion } from 'framer-motion';

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  z-index: 15;

  padding-top: 1rem;
  margin-left: -1rem;

  box-shadow: 0px 41.7776px 33.4221px rgba(66, 61, 81, 0.0503198);
`;

export const DropdownArrow = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: var(--white);
    z-index: -1;

    top: -0.406rem;
    left: 1.5rem;
    border-radius: 0.25rem 0 0 0;

    transform: rotate(45deg);
  }
`;
