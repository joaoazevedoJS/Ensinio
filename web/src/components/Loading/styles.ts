import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 9999;

  opacity: 0.7;

  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div section {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    h1 {
      font-family: 'Mukta', sans-serif;
      font-weight: 500;
    }
  }
`;

export const LoadingCircleContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: -2rem;
  margin-left: 0.5rem;
`;

export const LoadingCircleDot = styled(motion.span)`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: black;
  border-radius: 50%;

  & + span {
    margin-left: 0.5rem;
  }
`;
