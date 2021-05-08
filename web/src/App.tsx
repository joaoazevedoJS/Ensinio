import { FC } from 'react';
import Dropdown from './components/Dropdown';

import Provider from './hooks';

import Home from './pages/Home';

import GlobalStyled from './styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyled />

      <Provider>
        <Home />
      </Provider>
    </>
  );
};

export default App;
