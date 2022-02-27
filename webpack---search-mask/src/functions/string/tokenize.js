import {
    sanitize
} from 'app/functions/string';

/**
 * Remove all non letter chars from the string
 *
 * @param sortingKey
 */
export const tokenize = (sortingKey) => sanitize(sortingKey).replace(/[^\w\u0400-\u04FF ]/gi, '');