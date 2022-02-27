/**
 * Given a locale, return the first day of the week.
 *
 * @param {string} locale
 * @returns {number} 0 (Sunday) or 1 (Monday)
 */
export const getFirstDayOfWeek = (locale) => {
    // array of locales that Sunday is the first day of the week
    const sundayLocales = ['en_US', 'es_US', 'pt_BR', 'pt'];

    return sundayLocales.indexOf(locale) !== -1 ? 0 : 1;
};