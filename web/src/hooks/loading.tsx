import { createContext, FC, useCallback, useContext, useState } from 'react';
import Loading from '../components/Loading';

export interface ILoadingContext {
  isLoading: boolean;
  openLoading(): void;
  closeLoading(): void;
  setLoading(state: boolean): void;
}

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

const LoadingProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const closeLoading = useCallback(() => {
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
