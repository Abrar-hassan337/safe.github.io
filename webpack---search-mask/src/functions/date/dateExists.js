import {
    daysInMonth
} from '.';

/**
 * dateExists
 *
 * checks if a given date had or will exists in the gregorian calendar
 * (January = 1)
 *
 * @param {integer} year
 * @param {integer} month
 * @param {integer} day
 * @returns {boolean}
 */

export const dateExists = (year, month, day) =>
    month >= 1 && month <= 12 && day > 0 && day <= daysInMonth(month, year);