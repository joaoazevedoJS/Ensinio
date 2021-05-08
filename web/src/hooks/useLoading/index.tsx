import { createContext, FC, useCallback, useContext, useState } from 'react';

import Loading from '../../components/Loading';

import { ILoadingContext } from './types';

export * from './types';

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

const LoadingProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openLoading = useCallback(() => {
    document.body.style.overflow = 'hidden';

    setIsLoading(true);
  }, []);

  const closeLoading = useCallback(() => {
    document.body.style.overflow = 'auto';

    setIsLoading(false);
  }, []);

  const setLoading = useCallback((state: boolean) => {
    setIsLoading(state);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ isLoading, openLoading, closeLoading, setLoading }}
    >
      {isLoading && <Loading />}

      {children}
    </LoadingContext.Provider>
  );
};

function useLoading(): ILoadingContext {
  const context = useContext(LoadingContext);

  return context;
}

export { LoadingProvider, useLoading };
