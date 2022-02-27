import {
    replacePlaceholders
} from 'app/functions/translation';

/**
 * Choose the correct countable variant for a translation
 * which depends on a count.
 *
 * @todo Write also the special language variants
 * @todo Write tests
 *
 * @param variants
 * @param count
 */
export const chooseCountableTranslation = (variants, count) =>
    replacePlaceholders(
        variants.find((variant) => {
            const {
                min,
                max
            } = variant;

            return count >= min && count <= max;
        }).value, {
            count
        },
    );