/**
 * Slice language code from locale (e.g. en_US -> en)
 *
 * @param {string} locale
 *
 * @return {string}
 */
export const getLanguageCode = (locale) => locale.slice(0, 2);