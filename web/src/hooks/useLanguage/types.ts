import { ElementType } from 'react';

export interface IContentManyLanguage {
  pt: string;
  en: string;
  es: string;
}

export type ILangsSelected = 'pt' | 'en' | 'es';

export interface ILangWithIcon {
  icon: string;
  lang: ILangsSelected;
}

export interface ILanguageContext {
  languages: Array<string>;
  languagesWithIcon: Array<ILangWithIcon>;
  languageSelected: ILangsSelected;
  changeLanguageTo(lang: ILangsSelected): void;
}
