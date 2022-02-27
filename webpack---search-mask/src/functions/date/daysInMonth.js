/**
 * daysInMonth
 *
 * given a month (January = 1) and aa year
 * returns the amount of days
 *
 * @param {integer} month
 * @param {integer} year
 * @returns {integer} days in the given months
 */
export const daysInMonth = (month, year) => {
    switch (month) {
        // February
        case 2:
            // take in account all possible leap years
            return (year % 4 === 0 && year % 100) || year % 400 === 0 ? 29 : 28;
            // April, June, September, November
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            // All other months
        default:
            return 31;
    }
};