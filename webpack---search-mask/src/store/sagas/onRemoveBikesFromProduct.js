import {
    takeEvery
} from 'redux-saga/effects';
import {
    REMOVE_BIKES_FROM_PRODUCT
} from 'app/store/actions';
import {
    updateLocationSearch
} from 'app/functions/environment';

function onRemoveBikesFromProductWatcher() {
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.delete('bike_slot');

    updateLocationSearch(urlParams);
}

export function* onRemoveBikesFromProduct() {
    yield takeEvery(REMOVE_BIKES_FROM_PRODUCT, onRemoveBikesFromProductWatcher);
}