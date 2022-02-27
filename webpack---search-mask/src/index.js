import 'app/styles/search-mask-base.css?raw'; // eslint-disable-line
if (process.env.INCLUDE_ROBOTO) {
    require('app/styles/roboto.css?raw');
}
import 'app/injectHoneycomb';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import 'app/polyfills';
import {
    isProduction,
    logBreadcrumbs,
    logUserEventsToNewRelic
} from 'app/functions/environment';
import React, {
    useEffect,
    useState
} from 'react';
import PropTypes from 'prop-types';
import {
    render
} from 'react-dom';
import {
    renderToString
} from 'react-dom/server';
import {
    Provider
} from 'react-redux';
import {
    getEventEmitter,
    integrate as integrateTransclusionEventing,
} from '@flixbus/transclusion-eventing';
import 'es6-promise/auto';
import {
    getStore
} from 'app/store';
import {
    SearchMask
} from 'app/containers/SearchMask';
import {
    getIsolatedOptions,
    getOptions
} from 'app/options';
import {
    Debug
} from 'app/containers/Debug';
import {
    getErrorBoundary,
    startApp
} from 'app/service';
import {
    registerEventListeners
} from 'app/events/eventListeners';
import {
    fetchOptions
} from 'app/providers';
import {
    toggleFeature as toggleFeatureAction,
    updateOptions,
    retrieveRecentCities,
} from 'app/store/actions';
import * as shortcuts from 'app/events/shortcuts';
import * as api from 'app/api';
import {
    cmsApi
} from 'app/api/cmsApi';
import {
    getSearchMaskValuesFromQueryString
} from './functions';

// This is the DOM element that is assumed to exist
// where the SearchMask component will be mounted.
const target = document.getElementById('search-mask-component');

// SearchMask is considered to be isolated when the target element contains this attribute
export const isIsolated = target !== null && target.getAttribute('data-isolated') !== null;

const onRegister = (store) => {
    registerEventListeners(store.dispatch);
};

const ErrorBoundary = getErrorBoundary();

const SearchMaskWrapper = ({
    store,
    debug
}) => ( <
    ErrorBoundary >
    <
    Provider store = {
        store
    } > {
        debug
    } <
    SearchMask / >
    <
    /Provider> <
    /ErrorBoundary>
);

SearchMaskWrapper.propTypes = {
    store: PropTypes.shape({}).isRequired,
    debug: PropTypes.element,
};

SearchMaskWrapper.defaultProps = {
    debug: undefined,
};

const store = getStore({
    general: {
        options: getOptions({}),
        server: false
    }
});
export const cmsApiInstance = cmsApi(store);
// This function is provided in the global scope and is
// the first function that should be called when
// trying to mount the component. It's responsible
// of starting the application and will also set up
// HMR in development.

/**
 * Mount the Search Mask Component.
 *
 * @param {object} options The object that contains the options
 * @param {string} [options.searchResultsHost="dynamic"] The shop URL to redirect to
 * when the user searches. If left empty, the search mask will try to determine the correct host.
 * @param {string} [options.variant="default"] The theme of the search mask. Can be `default`,
 * `frontpage`, and `compact`.
 * @param {string} [options.locale="en"] The language of the search mask
 * @param {boolean} [options.datePickerVisible=true] Whether to show the date pickers
 * @param {boolean} [options.productPickerVisible=true] Whether to show the product picker
 * @param {object} [options.initialSearchMaskValues={}] Initial values of the Search Mask
 * @param {number} [options.initialSearchMaskValues.departureCity=88] Selected departure city ID
 * @param {number} [options.initialSearchMaskValues.arrivalCity=94] Selected arrival city ID
 * @param {number} [options.initialSearchMaskValues.departureDate=null] Selected departure date
 * timestamp
 * @param {number} [options.initialSearchMaskValues.returnDate=null] Selected return date timestamp
 * @param {object} [options.initialSearchMaskValues.products=null] An object of product ids and
 * quantities. For example `{adult: 1}`.
 * @param {boolean} [options.handleOwnRequestSearchEvent=false] If `true`, the search mask will
 * redirect to the host when the search button is pressed. If this option is not specified, the
 * integrator must handle the search event and react accordingly. For more information about the
 * emitted events, check [the related documentation](03-events.md)
 * @param {boolean} [options.flixTrain=false] True if the component is included in flixTrain domain
 */
const mount = (options = {}) => {
    const validatedOptions = getOptions(options);
    store.dispatch(
        updateOptions({
            ...validatedOptions,
        }),
    );

    store.dispatch(retrieveRecentCities());

    onRegister(store);

    const debug = isIsolated ? < Debug / > : null;

    render( <
        SearchMaskWrapper store = {
            store
        }
        validatedOptions = {
            validatedOptions
        }
        debug = {
            debug
        }
        />,
        target,
    );

    // If HMR is enabled, we rerender the application
    // if anything has changed.
    if (module.hot) {
        module.hot.accept(['./containers/SearchMask', './containers/Debug'], () => {
            const NextSearchMask = require('./containers/SearchMask').SearchMask; // eslint-disable-line global-require
            const NextDebug = require('./containers/Debug').Debug; // eslint-disable-line global-require
            const nextDebug = isIsolated ? < NextDebug / > : null;

            render( <
                ErrorBoundary >
                <
                Provider store = {
                    store
                } > {
                    nextDebug
                } <
                NextSearchMask / >
                <
                /Provider> <
                /ErrorBoundary>,
                target,
            );
        });
    }
};

const toggleFeature = (name, value) => {
    store.dispatch(toggleFeatureAction(name, value));
};

// The mount function is added to the global scope
// by using a variable name reserved to search.
if (window) {
    window.searchMaskComponent = {
        mount,
        toggleFeature,
        ...shortcuts,
        ...api,
        cmsApi: cmsApiInstance,
    };
}

// Start timing
startApp();

// integrate the Transclusion Eventing into the window
integrateTransclusionEventing();

// Start leaving breadcrumbs for Bugsnag
logBreadcrumbs();

// NewRelic logging/tracking
if (isProduction() && !isIsolated) {
    logUserEventsToNewRelic();
}

// If the application is running in isolated environment, it's safe to immediately
// mount the component to avoid doing so manually in the index.html file.
if (isIsolated) {
    /* eslint-disable */
    getEventEmitter().onAny((eventName, payload) => {
        console.log(
            `%cevent %c${eventName}`,
            'padding: 3px; font-size: 1.1em;',
            'padding: 3px; color: #66FDCB; background-color:#1D262F; font-size: 1.1em;',
        );
        console.log(payload);
    });
    mount(getIsolatedOptions());
}

export const SearchMaskComponent = ({
    options
}) => {
    const mergedOptions = {
        ...getOptions(getIsolatedOptions()),
        ...options,
        ...(window.searchMaskOptions && window.searchMaskOptions),
    };
    const [$store] = useState(() => {
        store.dispatch(
            updateOptions({
                ...mergedOptions,
            }),
        );
        store.dispatch(retrieveRecentCities());
        return store;
    });

    useEffect(() => {
        onRegister($store);
    }, []);

    return ( <
        div id = "search-mask-component" >
        <
        SearchMaskWrapper store = {
            $store
        }
        validatedOptions = {
            mergedOptions
        }
        /> <
        /div>
    );
};

export const prerender = () => {
    const options = getOptions();
    const store = getStore({
        general: {
            options,
            server: true
        },
    });

    return renderToString( <
        SearchMaskWrapper store = {
            store
        }
        validatedOptions = {
            options
        }
        debug = {
            null
        }
        />,
    );
};

export const init = fetchOptions;
export const getValuesFromQueryString = getSearchMaskValuesFromQueryString;