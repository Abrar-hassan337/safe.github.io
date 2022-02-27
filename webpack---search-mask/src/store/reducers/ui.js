import {
    LOAD_UI,
    WAIT_UI
} from 'app/store/actions';

const defaultState = {
    loading: true,
    paxTooltipVisible: true,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_UI:
            return {
                ...state,
                loading: false,
            };
        case WAIT_UI:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};