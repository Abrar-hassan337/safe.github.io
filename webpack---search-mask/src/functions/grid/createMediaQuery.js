import mergeRanges from 'merge-ranges';
import {
    createBreakpointWidthRange
} from 'app/functions/grid';

/**
 * This function will create a media query condition, given a
 * start and an end width in pixels. It will also smartly handle
 * the case where from equals 0, or to equals Infinity.
 *
 * When passed 0, 1200, it will return:
 *
 * (max-width: 1199px)
 *
 * @param from
 * @param to
 * @returns {string}
 */
const createMediaQueryCondition = (from, to) => {
    if (from === 0 && to === Infinity) {
        throw new Error('Range is invalid');
    }

    if (from === 0) {
        return `(max-width: ${to - 1}px)`;
    }

    if (to === Infinity) {
        return `(min-width: ${from}px)`;
    }

    return `(min-width: ${from}px) and (max-width: ${to - 1}px)`;
};

/**
 * This function will create a media query condition string
 * given a list of breakpoints. It will merge all the breakpoint
 * ranges as to not specify superfluous conditions.
 *
 * @param sizes
 */
export const createMediaQuery = (...sizes) =>
    mergeRanges(sizes.map(createBreakpointWidthRange))
    .map((range) => createMediaQueryCondition(...range))
    .join(', ');