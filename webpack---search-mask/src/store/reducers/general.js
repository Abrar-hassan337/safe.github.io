import {
    UPDATE_OPTIONS,
    SET_DATE_PICKER_VISIBILITY,
    SET_PRODUCT_PICKER_VISIBILITY,
    TOGGLE_FEATURE,
} from 'app/store/actions';
import {
    features as defaultFeatures
} from 'app/config/features';

const defaultState = {
    options: {},
    server: false,
    features: {
        ...defaultFeatures,
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.options,
                },
                features: {
                    ...state.features,
                    ...(action.options.features && action.options.features),
                },
            };

        case SET_DATE_PICKER_VISIBILITY:
            return {
                ...state,
                options: {
                    ...state.options,
                    datePickerVisible: Boolean(action.isVisible),
                },
            };

        case SET_PRODUCT_PICKER_VISIBILITY:
            return {
                ...state,
                options: {
                    ...state.options,
                    productPickerVisible: Boolean(action.isVisible),
                },
            };

        case TOGGLE_FEATURE:
            {
                return {
                    ...state,
                    features: {
                        ...state.features,
                        [action.name]: action.value,
                    },
                };
            }

        default:
            return state;
    }
};