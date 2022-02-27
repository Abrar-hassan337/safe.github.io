/**
 * Get the query string from the location, if applicable.
 *
 * @returns {string} The query string, or an empty string if no location is available.
 */
export const getQueryString = () => {
    if (typeof window === 'object' && window.location) {
        return window.location.search;
    }

    return '';
};