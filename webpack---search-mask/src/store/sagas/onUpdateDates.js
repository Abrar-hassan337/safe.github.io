import {
    takeEvery,
    put,
    select
} from 'redux-saga/effects';
import {
    format,
    parseISO
} from 'date-fns';
import {
    UPDATE_DATES,
    setDepartureDate,
    setReturnDate
} from 'app/store/actions';
import {
    returnDateTimestampSelector,
    returnDateVisibleSelector
} from 'app/store/selectors';
import {
    updateLocationSearch
} from 'app/functions/environment';

function* onUpdateDatesWatcher({
    tripIndex,
    newDateUTC
}) {
    const RIDE_DATE = 'rideDate';
    const BACK_RIDE_DATE = 'backRideDate';
    const urlParams = new URLSearchParams(window.location.search);
    // date-fns at current version fails to correctly retrieve date for iso time string
    // fix by providing only date (w/o time) as it's irrelevant for this feature
    const dateFromIsoTime = newDateUTC.split('T')[0];
    const newDateFormatted = format(parseISO(dateFromIsoTime), 'dd.MM.yyyy');
    // extract integer values from formatted date
    const [year, month, day] = newDateFormatted
        .split('.')
        .reverse()
        .map((s) => parseInt(s, 10));
    // create UTC seconds timestamp / use UTC to avoid unintended time conversion
    const newDateTimeInUtcSeconds = Date.UTC(year, month - 1, day) / 1000;
    if (tripIndex === 0) {
        urlParams.set(RIDE_DATE, newDateFormatted);
    }

    const returnDate = yield select(returnDateTimestampSelector);
    const returnDateVisible = yield select(returnDateVisibleSelector);

    if (returnDateVisible && returnDate < newDateTimeInUtcSeconds && tripIndex === 1) {
        urlParams.set(BACK_RIDE_DATE, newDateFormatted);
    }

    updateLocationSearch(urlParams);
    if (tripIndex === 0) {
        yield put(setDepartureDate(newDateTimeInUtcSeconds));
    }
    if (tripIndex === 1) {
        yield put(setReturnDate(newDateTimeInUtcSeconds));
    }
}

export function* onUpdateDates() {
    yield takeEvery(UPDATE_DATES, onUpdateDatesWatcher);
}