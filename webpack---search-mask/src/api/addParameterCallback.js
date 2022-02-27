import {
    addParameterCallbackToStorage
} from 'app/storage/parameterCallbacks';

/**
 * Public api method that adds callbacks to a storage
 *
 * @param {Function} fn
 */
export const addParameterCallback = (fn) => {
    addParameterCallbackToStorage(fn);
};