import { FC } from 'react';

import { LanguageProvider } from './useLanguage';
import { LoadingProvider } from './useLoading';

const Provider: FC = ({ children }) => (
  <LanguageProvider>
    <LoadingProvider>{children}</LoadingProvider>
  </LanguageProvider>
);

export default Provider;
