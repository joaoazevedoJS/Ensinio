import { FC } from 'react';

import Container from '../Container';

import { LoadingContainer } from './styles';

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <Container>loading...</Container>
    </LoadingContainer>
  );
};

export default Loading;
