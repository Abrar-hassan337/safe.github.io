import {
    iterateBreakpoints
} from 'app/functions/grid';

/**
 * Similar to iterate breakpoints, this function will return a list
 * of objects, where every object will contain the size and the name
 * of the breakpoint.
 */
export const iterateBreakpointsToObjects = () =>
    iterateBreakpoints((size, name) => ({
        size,
        name,
    }));