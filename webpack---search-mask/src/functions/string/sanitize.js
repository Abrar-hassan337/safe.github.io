import {
    stripDiacritics
} from 'app/functions/string';

/**
 * Convert accented chars to their normal equivalents (ü --> u).
 *
 * @param item
 */
export const sanitize = (item) => stripDiacritics(item).toLowerCase().trim();