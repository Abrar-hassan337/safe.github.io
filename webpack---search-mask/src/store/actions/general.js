export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';
export const updateOptions = (options) => ({
    type: UPDATE_OPTIONS,
    options,
});

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const requestSearch = (payload) => ({
    type: REQUEST_SEARCH,
    payload,
});

export const TOGGLE_FEATURE = 'TOGGLE_FEATURE';
export const toggleFeature = (name, value) => ({
    type: TOGGLE_FEATURE,
    name,
    value,
});