import fetch from 'isomorphic-fetch';
import {
    mapLocale
} from 'app/functions/translation';
import translationVersion from 'app/config/files/translationsVersion.json';

export const fetchTranslations = (locale) =>
    fetch(
        `${process.env.SEARCH_PUBLIC_URL}translations/${mapLocale(locale)}.${
      translationVersion.hash
    }.json`,
    );