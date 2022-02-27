import PropTypes from 'prop-types';
import {
    getQueryString
} from 'app/functions/environment';
import {
    getSearchMaskValuesFromQueryString
} from 'app/functions/general';
import locales from 'app/config/locales.json';
import {
    FEATURE_LOCATION_GROUP_BY_CONTINENT
} from 'app/functions/feature';

// This object contains the options used in when SearchMask is mounted as an isolated component.
// When adding a required option, the related development values should be added here.
export const getIsolatedOptions = () => ({
    locale: 'en',
    initialSearchMaskValues: {},
    includeWebtrekkParameters: false,
    handleOwnRequestSearchEvent: true,
    userType: 'customer',
    features: {},
});

export const variants = [{
        value: 'default',
        label: 'Default',
    },
    {
        value: 'frontpage',
        label: 'Frontpage',
    },
    {
        value: 'compact',
        label: 'Compact',
    },
    {
        value: 'fullWidth',
        label: 'Full width',
    },
];

export const HONEYCOMB_THEMES = ['default', 'kamil', 'dark'];

// This object contains all the options that the SearchMask component
// supports. PropTypes is used here as its API is clean and stable.
// accordingly. Also, all the options are validated when provided when
// the function `window.searchMaskComponent.mount` is called.
export const options = {
    // the hostname of the search results url to redirect to when submitting the search
    searchResultsHost: PropTypes.string,

    // variant of the search mask
    variant: PropTypes.oneOf(variants.map((v) => v.value)),

    // Locale of the search mask
    locale: PropTypes.oneOf(Object.keys(locales)),

    // Theme (honeycomb)
    theme: PropTypes.oneOf(HONEYCOMB_THEMES),

    // ID of the selected departure city (if available)
    // If not available, the first city will be selected.
    selectedDeparture: PropTypes.number,

    // This controls the visibility of both Date pickers. According to where the
    // search mask is used, user might want to completely hide this section.
    datePickerVisible: PropTypes.bool,

    // This controls the visibility of Product (passengers) selection. According to
    // where the search mask is used, user might want to completely hide this section.
    productPickerVisible: PropTypes.bool,

    // This makes the SearchMask group locations by the specified option
    groupBy: PropTypes.oneOf([FEATURE_LOCATION_GROUP_BY_CONTINENT]),

    // ID of the selected arrival city (if available).
    // If not available, the first city will be selected.
    selectedArrival: PropTypes.number,

    // this tells the SearchMask to listen to and act on it's
    // own REQUEST_SEARCH event, submitting the form,
    // redirect to search results page and so on
    handleOwnRequestSearchEvent: PropTypes.bool,

    // SearchMask included on flixTrain domain
    flixTrain: PropTypes.bool,

    // If search mask should redirect
    onePageSearch: PropTypes.bool,

    // SearchMask feature flags
    features: PropTypes.objectOf(PropTypes.bool),

    // Whether to include webtrekk parameters in the URL
    includeWebtrekkParameters: PropTypes.bool,

    // to be passed to autocomplete service
    partner: PropTypes.string,

    // to be passed to search result host
    searchResultsHostParams: PropTypes.array,

    // initial values to be populated on the SearchMask
    initialSearchMaskValues: PropTypes.shape({
        departureCity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        arrivalCity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        departureDate: PropTypes.number,
        returnDate: PropTypes.number,
        products: PropTypes.objectOf(PropTypes.number),
    }).isRequired,
};

// Default options
export const defaultOptions = {
    autocompleteUrl: 'https://global.api.flixbus.com/search/autocomplete/cities',
    citiesDetailsEndpoint: 'https://global.api.flixbus.com/search/service/cities/details',
    variant: process.env.ROBOTNIK_BUILD ? 'fullWidth' : 'default',
    locale: 'en',
    datePickerVisible: true,
    productPickerVisible: true,
    handleOwnRequestSearchEvent: false,
    flixTrain: false,
    onePageSearch: false,
    flixbusCitiesOnly: true,
    includeWebtrekkParameters: true,
    groupBy: FEATURE_LOCATION_GROUP_BY_CONTINENT,
    features: {},
    theme: 'default',
    userType: 'customer',
    userToken: null,
    partner: '',
    searchResultsHostParams: [],
    initialSearchMaskValues: {
        departureCity: 88,
        arrivalCity: 94,
        departureDate: null,
        returnDate: null,
        products: {
            adult: 1,
        },
    },
};

export const validateOptions = (providedOptions) =>
    PropTypes.checkPropTypes(options, providedOptions, 'option', 'SearchMask');

// DO NOT USE THIS FUNCTION DIRECTLY.
// The options are available in the context, see related documentation
// of providing the options is of the React context. That way, we can identify
// bugs easily and maintaining the options infrastructure will be easier.
export const getOptions = (providedOptions = {}) => {
    if (Object.keys(providedOptions).length) validateOptions(providedOptions);

    // Create a new variable as some changes might occur in particular situations.
    const validatedOptions = providedOptions;

    /* global OPTIONS_DEVELOPMENT */
    const hasDevelopmentOptions = typeof OPTIONS_DEVELOPMENT === 'object';

    const initialSearchMaskValues = {
        ...defaultOptions.initialSearchMaskValues,
        ...(hasDevelopmentOptions ?
            OPTIONS_DEVELOPMENT.initialSearchMaskValues :
            validatedOptions.initialSearchMaskValues),
        ...getSearchMaskValuesFromQueryString(getQueryString()),
    };

    return {
        ...defaultOptions,
        ...(hasDevelopmentOptions ? OPTIONS_DEVELOPMENT : validatedOptions),
        initialSearchMaskValues,
    };
};