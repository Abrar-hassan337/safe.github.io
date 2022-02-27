import {
    createMediaQuery
} from 'app/functions/grid';

/**
 * Given a list of sizes, this function will return true if the screen matches a breakpoint.
 *
 * @param sizes
 */
export const breakpointMatches = (...sizes) => window.matchMedia(createMediaQuery(...sizes));