import { FC } from 'react';

import Home from './pages/Home';

import GlobalStyled from './styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyled />

      <Home />
    </>
  );
};

export default App;
