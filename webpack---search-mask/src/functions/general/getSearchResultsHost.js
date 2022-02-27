import locales from 'app/config/locales.json';

/**
 * Checks if shopUrl is provided in options and returns
 * either that one or another from locales settings
 *
 * @param {string} locale
 * @param {Object} options
 *
 * @returns {string} shopUrl
 */
export const getSearchResultsHost = (locale, options) => {
    const {
        searchResultsHost
    } = options;

    if (
        searchResultsHost ||
        typeof locales[locale] !== 'object' ||
        typeof locales[locale].shopUrl !== 'string'
    ) {
        return searchResultsHost;
    }

    return locales[locale].shopUrl;
};