import {
    breakpoints
} from 'app/config/grid';

/**
 * Given a size, this function will return a list where
 * the first element is the starting size, and the second
 * element is the ending size (exclusive).
 *
 * @param size
 */
export const createBreakpointWidthRange = (size) => {
    if (!(size in breakpoints)) {
        throw new Error('Could not find breakpoint');
    }

    const keys = Object.keys(breakpoints);
    const index = keys.indexOf(size);
    const nextValue = index + 1 in keys ? breakpoints[keys[index + 1]] : Infinity;

    return [breakpoints[size], nextValue];
};