export const SET_DEPARTURE_DATE = 'SET_DEPARTURE_DATE';
export const setDepartureDate = (date) => ({
    type: SET_DEPARTURE_DATE,
    date,
});

export const SET_TEMP_DEPARTURE_DATE = 'SET_TEMP_DEPARTURE_DATE';
export const setTempDepartureDate = (date) => ({
    type: SET_TEMP_DEPARTURE_DATE,
    date,
});

export const SET_RETURN_DATE = 'SET_RETURN_DATE';
export const setReturnDate = (date) => ({
    type: SET_RETURN_DATE,
    date,
});

export const SHOW_RETURN_DATE = 'SHOW_RETURN_DATE';
export const showReturnDate = () => ({
    type: SHOW_RETURN_DATE,
});

export const HIDE_RETURN_DATE = 'HIDE_RETURN_DATE';
export const hideReturnDate = () => ({
    type: HIDE_RETURN_DATE,
});

export const SET_DATE_PICKER_VISIBILITY = 'SET_DATE_PICKER_VISIBILITY';
export const setDatePickerVisibility = (isVisible) => ({
    type: SET_DATE_PICKER_VISIBILITY,
    isVisible,
});

export const UPDATE_DATES = 'UPDATE_DATES';
export const updateDates = (tripIndex, newDateUTC) => ({
    type: UPDATE_DATES,
    newDateUTC,
    tripIndex,
});