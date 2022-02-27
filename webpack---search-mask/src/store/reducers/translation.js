import {
    REQUEST_TRANSLATIONS_SUCCEEDED
} from 'app/store/actions';

const defaultState = {
    strings: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_TRANSLATIONS_SUCCEEDED:
            return {
                ...state,
                strings: action.strings,
            };
        default:
            return state;
    }
};