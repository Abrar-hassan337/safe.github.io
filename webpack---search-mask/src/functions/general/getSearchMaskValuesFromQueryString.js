import {
    queryStringMapping
} from 'app/config/queryStringMapping';
import {
    parseQueryDateToUtcSeconds
} from 'app/functions/date';
import {
    isUuid
} from 'app/functions/general/isUuid';
import 'url-search-params-polyfill';

/**
 * This function will attempt extracting the initial values from
 * the query string. When needed, the search mask will have these
 * values when mounted.
 *
 * @param {string} queryString
 *
 * @returns {object} values The search mask initial values
 */
export const getSearchMaskValuesFromQueryString = (queryString) => {
    const urlParams = new URLSearchParams(queryString);
    const initialValues = {};

    // parse all values from URL
    Object.keys(queryStringMapping).forEach((param) => {
        const paramConfig = queryStringMapping[param];
        const value = urlParams.get(paramConfig.paramName);
        let parsedValue = null;

        // some parameters are only meant to be exported, so they are ignored in here
        if (paramConfig.exportOnly) return;

        switch (paramConfig.type) {
            case 'int':
                {
                    parsedValue = parseInt(value, 10);
                    break;
                }

            case 'intOrUuid':
                {
                    parsedValue = isUuid(value) ? value : parseInt(value, 10);
                    break;
                }

            case 'date':
                {
                    parsedValue = parseQueryDateToUtcSeconds(value);
                    break;
                }

            case 'custom':
                {
                    parsedValue = paramConfig.fromUrl(urlParams, initialValues);
                    break;
                }

            case 'string':
            default:
                {
                    parsedValue = value;
                }
        }

        if (!Number.isNaN(parsedValue) && parsedValue) {
            initialValues[param] = parsedValue;
        }
    });

    // remove keys that depend on other keys
    Object.keys(queryStringMapping).forEach((param) => {
        if (!queryStringMapping[param].ifNotEmpty) {
            return;
        }

        // if the dependent key is empty, also remove this one
        if (!initialValues[queryStringMapping[param].ifNotEmpty]) {
            delete initialValues[param];
        }
    });

    return initialValues;
};