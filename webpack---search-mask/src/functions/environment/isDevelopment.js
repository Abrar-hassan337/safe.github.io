import {
    getEnvironment
} from 'app/functions/environment';

/**
 * Returns true if the current environment is "development".
 *
 * @return {boolean}
 */
export const isDevelopment = () => getEnvironment() === 'development';