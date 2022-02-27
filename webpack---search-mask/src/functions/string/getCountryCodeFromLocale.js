/**
 * Slice language code from locale (e.g. en_US -> us)
 *
 * @param {string} locale
 *
 * @return {string}
 */
export const getCountryCodeFromLocale = (locale) => locale.slice(-2).toLowerCase();