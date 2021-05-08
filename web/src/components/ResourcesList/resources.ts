import { IContentManyLanguage } from '../../hooks/useLanguage/types';

export interface IResource {
  id: number;
  title: IContentManyLanguage;
  description: IContentManyLanguage;
}
