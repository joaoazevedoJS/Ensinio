import { createContext, FC, useCallback, useContext, useState } from 'react';

import Cookies from 'js-cookie';

export interface IContentManyLanguage {
  pt: string;
  en: string;
  es: string;
}

export type ILangsSelected = 'pt' | 'en' | 'es';

export interface ILanguageContext {
  languageSelected: ILangsSelected;
  changeLanguageTo(lang: ILangsSelected): void;
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const LanguageProvider: FC = ({ children }) => {
  const [languages] = useState(['pt', 'en', 'es']);

  const [languageSelected, setLanguageSelected] = useState<ILangsSelected>(
    () => {
      const lang = Cookies.get('@Ensinio:language') as
        | ILangsSelected
        | undefined;

      const existLang = languages.find(lg => lg === lang);

      if (!lang || !existLang) {
        return 'pt';
      }

      return lang;
    },
  );

  const changeLanguageTo = useCallback((lang: ILangsSelected) => {
    setLanguageSelected(lang);

    Cookies.set('@Ensinio:language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ languageSelected, changeLanguageTo }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(): ILanguageContext {
  const context = useContext(LanguageContext);

  return context;
}

export { LanguageProvider, useLanguage };
