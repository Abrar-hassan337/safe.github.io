const callbacks = [];

/**
 * Adds callbacks to an array
 *
 * @param {Function} fn
 */
export const addParameterCallbackToStorage = (fn) => {
    callbacks.push(fn);
};

/**
 * Returns all stored functions
 *
 * @returns {Array<Function>}
 */
export const getCallbacks = () => callbacks;

/**
 * Clears the store
 *
 * @returns {Array<Function>} - array of removed callbacks
 */
export const clearCallbacksStore = () => callbacks.splice(0, callbacks.length);

/**
 * Returns an object that contains 'key: value' pairs
 * from all callback's results
 *
 * @param {Object} payload - the payload from `onRequestSearch`
 * @param {Object} options
 *
 * @returns {Object}
 */
export const getCallbacksResult = (payload, options) =>
    callbacks
    .map((fn) => fn(payload, options))
    .reduce(
        (acc, cur) => ({
            ...acc,
            ...cur,
        }), {},
    );