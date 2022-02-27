import {
    getTimestampInSeconds
} from 'app/functions/date';
import {
    SET_DEPARTURE_DATE,
    SET_TEMP_DEPARTURE_DATE,
    SET_RETURN_DATE,
    SHOW_RETURN_DATE,
    HIDE_RETURN_DATE,
} from 'app/store/actions';

const date = new Date();
const defaultState = {
    departureDate: getTimestampInSeconds(date),
    temporaryDepartureDate: getTimestampInSeconds(date),
    returnDate: getTimestampInSeconds(date),
    returnDateVisible: false,
    preSelectReturnMonth: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEPARTURE_DATE:
            return {
                ...state,
                departureDate: action.date,
                returnDate: !state.returnDateVisible ?
                    action.date :
                    Math.max(action.date, state.returnDate),
                preSelectReturnMonth: false,
            };
        case SET_TEMP_DEPARTURE_DATE:
            return {
                ...state,
                temporaryDepartureDate: action.date,
            };
        case SET_RETURN_DATE:
            return {
                ...state,
                returnDate: Math.max(action.date, state.departureDate),
                preSelectReturnMonth: true,
            };
        case SHOW_RETURN_DATE:
            return {
                ...state,
                returnDateVisible: true,
            };
        case HIDE_RETURN_DATE:
            return {
                ...state,
                returnDateVisible: false,
                returnDate: state.departureDate,
            };
        default:
            return state;
    }
};