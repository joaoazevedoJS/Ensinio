import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Cookies from 'js-cookie';

import BrazilIcon from '../../assets/icons/country/brazil.svg';
import UsaIcon from '../../assets/icons/country/usa.svg';
import SpainIcon from '../../assets/icons/country/spain.svg';

import { ILanguageContext, ILangsSelected, ILangWithIcon } from './types';

export * from './types';

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const LanguageProvider: FC = ({ children }) => {
  const languages = useMemo(() => ['pt', 'en', 'es'], []);

  const languagesWithIcon: Array<ILangWithIcon> = useMemo(() => {
    return [
      {
        icon: BrazilIcon,
        short_name: 'pt',
      },
      {
        icon: UsaIcon,
        short_name: 'en',
      },
      {
        icon: SpainIcon,
        short_name: 'es',
      },
    ];
  }, []);

  const [languageSelected, setLanguageSelected] = useState<ILangsSelected>(
    () => {
      const lang = Cookies.get('@Ensinio:language') as
        | ILangsSelected
        | undefined;

      const existLang = languages.find(
        lg => lg.toLocaleLowerCase() === lang?.toLocaleLowerCase(),
      );

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
    <LanguageContext.Provider
      value={{
        languages,
        languagesWithIcon,
        languageSelected,
        changeLanguageTo,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(): ILanguageContext {
  const context = useContext(LanguageContext);

  return context;
}

export { LanguageProvider, useLanguage };
