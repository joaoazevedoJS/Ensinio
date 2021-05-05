import { FC } from 'react';

import { LanguageProvider } from './language';
import { LoadingProvider } from './loading';

const Provider: FC = ({ children }) => (
  <LanguageProvider>
    <LoadingProvider>{children}</LoadingProvider>
  </LanguageProvider>
);

export default Provider;
