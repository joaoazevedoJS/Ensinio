interface IContentManyLanguage {
  pt: string;
  en: string;
  es: string;
}

export interface IResource {
  id: number;
  title: IContentManyLanguage;
  description: IContentManyLanguage;
}
