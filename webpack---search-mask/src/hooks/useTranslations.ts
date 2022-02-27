import { getTranslationProps } from 'app/containers/WithTranslations';
import { languagesSelector } from 'app/store/selectors';
import { useSelector } from 'react-redux';

export const useTranslations = <T>(
  keys: T,
  getAllTranslations?: boolean,
): { [key in keyof T | 'getTranslation']: (...args: any) => string } => {
  const strings = useSelector(languagesSelector);
  // some day also rewrite WithTranslations to ts
  // @ts-ignore
  return getTranslationProps(strings, {}, getAllTranslations, keys);
};
