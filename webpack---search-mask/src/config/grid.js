/**
 * Define names and sizes (in pixels) of the breakpoints of the application.
 * The first breakpoint should always have a value of 0 as it indicates
 * the smallest breakpoint region. The last breakpoint is considered to
 * range from its value until Infinity.
 *
 * @type {Object}
 */
export const breakpoints = {
    small: 0,
    medium: 600,
    large: 1200,
};

/**
 * Define the number of grid columns.
 *
 * @type {number}
 */
export const columns = 12;

/**
 * This variable defines all the spacings (in pixels) between elements.
 * The number of values in this array depends on the number of breakpoints
 * defined in the "breakpoints" variable.
 *
 * @type {Array}
 */
export const spacing = [15, 15, 30];

/**
 * Shared spacing indicates the width of the spacing that is shared
 * between two elements (for example, two contiguous inputs) as opposed
 * to the spacing that is only owned by a single component (for example,
 * the spacing between an input and it's container.
 *
 * @type {Array}
 */
export const sharedSpacing = [7.5, 7.5, 7.5];

/**
 * Currently unused, will be used when specifying spacing in units
 * instead of pixels.
 *
 * @type {Array}
 */
export const spaceConfiguration = [0];