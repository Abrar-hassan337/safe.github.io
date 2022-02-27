import {
    getDateFromTimestampInSeconds
} from 'app/functions/date';
import {
    format
} from 'date-fns';
import {
    queryStringMapping
} from 'app/config/queryStringMapping';
import 'url-search-params-polyfill';

/**
 * Given the payload that accompanies the search request event,
 * get the resulting url params.
 *
 * @see [onRequestSearch event](/integration/04-events/#onrequestsearchcallback)
 *
 * @param {object} searchPayload The payload from `onRequestSearch`
 *
 * @return {URLSearchParams} urlParams
 */
export const getUrlParamsFromSearchPayload = (searchPayload) => {
    const urlParams = new URLSearchParams();

    Object.keys(searchPayload).forEach((key) => {
        const paramConfig = queryStringMapping[key];
        let parsedValue = null;

        if (searchPayload[key] === null || searchPayload[key] === undefined) return;

        switch (paramConfig.type) {
            case 'date':
                parsedValue = format(getDateFromTimestampInSeconds(searchPayload[key]), paramConfig.format);
                break;

            case 'custom':
                {
                    paramConfig.toUrl(urlParams, searchPayload[key]);
                    break;
                }

            case 'boolean':
                {
                    parsedValue = searchPayload[key] ? 'true' : 'false';
                    break;
                }

            case 'string':
            case 'int':
            default:
                {
                    parsedValue = searchPayload[key];
                }
        }

        if (parsedValue) {
            urlParams.set(paramConfig.paramName, parsedValue);
        }
    });

    return urlParams;
};