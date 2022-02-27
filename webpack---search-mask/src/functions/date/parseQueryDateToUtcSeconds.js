import {
    dateExists
} from '.';

/**
 * parseQueryDateToUtcSeconds
 *
 * parses date in format of DD.MM.YYYY to UTC timestamp in seconds
 *
 * @param {string} queryDate - format DD.MM.YYYY
 * @returns {number} timestamp of given day at 12 UTC time
 */
export const parseQueryDateToUtcSeconds = (queryDate) => {
    // if no date return
    if (!queryDate) return null;
    // check formatting
    const hasValidFormat = queryDate.match(/^\d\d\.\d\d\.\d\d\d\d$/);
    if (!hasValidFormat) return null;
    // parse date
    const [day, month, year] = queryDate.split('.').map((s) => parseInt(s, 10));
    // ensure date can be instantiated and that it actually exists
    const date = new Date(Date.UTC(year, month - 1, day, 12));
    // if date can be parsed skip
    if (!date || Number.isNaN(date) || !dateExists(year, month, day)) {
        return null;
    }
    // return date in seconds
    return Math.floor(date / 1000);
};