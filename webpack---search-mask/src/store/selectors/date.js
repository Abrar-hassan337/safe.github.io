import {
    getDateFromTimestampInSeconds
} from 'app/functions/date';
import {
    createSelector
} from 'reselect';

export const departureDateTimestampSelector = (state) => state.date.departureDate;
export const temporaryDepartureDateTimestampSelector = (state) => state.date.temporaryDepartureDate;
export const returnDateTimestampSelector = (state) => state.date.returnDate;
export const returnDateVisibleSelector = (state) => state.date.returnDateVisible;
export const preSelectReturnMonthSelector = (state) => state.date.preSelectReturnMonth;

export const selectedReturnDateSelector = createSelector(
    returnDateTimestampSelector,
    returnDateVisibleSelector,
    (returnDate, returnDateVisible) => (returnDateVisible === true ? returnDate : null),
);

export const departureDateSelector = createSelector(departureDateTimestampSelector, (date) =>
    getDateFromTimestampInSeconds(date),
);

export const temporaryDepartureDateSelector = createSelector(
    temporaryDepartureDateTimestampSelector,
    (date) => getDateFromTimestampInSeconds(date),
);

export const returnDateSelector = createSelector(returnDateTimestampSelector, (date) =>
    getDateFromTimestampInSeconds(date),
);