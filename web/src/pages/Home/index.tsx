import { FC } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { Main, Items, Footer } from './styles';

const Home: FC = () => {
  return (
    <>
      <Main>
        <Header />

        <Container />
      </Main>

      <Container>
        <Items />

        <Footer />
      </Container>
    </>
  );
};

export default Home;
