import cookies from 'js-cookie';
import {
    redirectToUrl,
    replaceUrl
} from 'app/functions/environment';
import {
    getUrlParamsFromSearchPayload,
    isGoogleAnalyticsAvailable,
    webtrekkValuesAvailable,
    getSearchResultsHost,
} from 'app/functions/general';
import {
    getCallbacksResult
} from 'app/storage/parameterCallbacks';

/**
 * Redirects to a search result page adding a querystring with
 * a parameters based on the provided payload and options to the URL
 *
 * @param {Object} payload
 * @param {Object} options
 */
export const redirectToSearchResultsPage = (payload, options, features) => {
    // only if its enabled
    if (options.handleOwnRequestSearchEvent !== true) return;
    const host = getSearchResultsHost(payload.locale, options);
    const urlParams = getUrlParamsFromSearchPayload(payload);

    // FlixTrain flag
    if (options.flixTrain) {
        urlParams.set('origin_flix_train', '1');
    }

    // BackRide flag
    if (urlParams.get('backRideDate')) {
        urlParams.set('backRide', '1');
    }

    // pass feature flags along
    if (Object.keys(features).length > 0) {
        Object.keys(features).forEach((featureName) => {
            urlParams.set(`features[${featureName}]`, features[featureName] ? '1' : '0');
        });
    }

    // pass search host params
    if (options.searchResultsHostParams && options.searchResultsHostParams.length > 0) {
        options.searchResultsHostParams.forEach((param) => {
            if (param[0] && param[1]) {
                urlParams.set(param[0], param[1]);
            }
        });
    }

    // Webtrekk parameters
    if (options.includeWebtrekkParameters && webtrekkValuesAvailable()) {
        urlParams.set('wt_eid', window.wt.eid);
        urlParams.set('wt_t', Date.now());

        // affiliate code
        const affiliateCookie = cookies.get('affiliate');
        if (affiliateCookie) {
            urlParams.set('affiliate', affiliateCookie);
        }

        // google analytics clientId
        if (isGoogleAnalyticsAvailable()) {
            // GA returns a string value to be concatenated directly to the url, like:
            // _ga=2.101072776.821422058.1523018101-1425581033.1523018101
            const gaQueryString = window.ga.getByName('gaGlobal').get('linkerParam');

            // Need to parse the google query string and extract only the value
            const gaUrlParams = new URLSearchParams(gaQueryString);
            urlParams.set('_ga', gaUrlParams.get('_ga'));
        }
    }

    const extraParameters = getCallbacksResult(payload, options);

    Object.keys(extraParameters).forEach((parameterKey) =>
        urlParams.set(parameterKey, extraParameters[parameterKey]),
    );

    const path = 'search';
    const urlToRedirectTo = `${window.location.protocol}//${host}/${path}?${urlParams.toString()}`;

    if (!options.onePageSearch) {
        redirectToUrl(urlToRedirectTo);
    } else {
        replaceUrl(
            `${window.location.protocol}//${host}${window.location.pathname}?${urlParams.toString()}`,
        );
    }
};