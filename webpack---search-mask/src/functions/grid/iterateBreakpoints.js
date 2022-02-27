import {
    breakpoints
} from 'app/config/grid';

/**
 * Iterate over the breakpoints defined in the application.
 * The function will map over the breakpoints by calling
 * the passed callback and will returned the new array.
 *
 * If no callback is specified, the returned value is a list
 * of breakpoint widths.
 *
 * @param callback
 */
export const iterateBreakpoints = (callback = (i) => i) =>
    Object.keys(breakpoints).map((i) => callback(breakpoints[i], i));