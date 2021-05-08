import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import Provider from './hooks';

import Home from './pages/Home';

import GlobalStyled from './styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyled />

      <ToastContainer autoClose={3000} />

      <Provider>
        <Home />
      </Provider>
    </>
  );
};

export default App;
