import {
    takeEvery,
    put
} from 'redux-saga/effects';
import {
    UPDATE_LOCATIONS,
    setLocation
} from 'app/store/actions';
import {
    updateLocationSearch
} from 'app/functions/environment';

function* onUpdateLocationsWatcher({
    fromCityDetails,
    toCityDetails
}) {
    const urlParams = new URLSearchParams(window.location.search);

    // do not update search mask locations if user is searching for a return trip
    if (!urlParams.get('backRide')) {
        yield put(setLocation('from', fromCityDetails));
        yield put(setLocation('to', toCityDetails));
    }
    const DEPARTURE_CITY = 'departureCity';
    const ARRIVAL_CITY = 'arrivalCity';
    urlParams.set(DEPARTURE_CITY, fromCityDetails.id);
    urlParams.set(ARRIVAL_CITY, toCityDetails.id);
    updateLocationSearch(urlParams);
}

export function* onUpdateLocations() {
    yield takeEvery(UPDATE_LOCATIONS, onUpdateLocationsWatcher);
}