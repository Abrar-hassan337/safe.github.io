import {
    takeEvery,
    select
} from 'redux-saga/effects';
import {
    REQUEST_SEARCH
} from 'app/store/actions';
import {
    redirectToSearchResultsPage
} from 'app/functions/general';
import {
    featuresSelector,
    optionsSelector
} from 'app/store/selectors';
import {
    emitRequestSearchEvent
} from 'app/events';

function* handleRequestSearch(action) {
    const options = yield select(optionsSelector);
    const features = yield select(featuresSelector);

    const normalizedPayload = {
        ...action.payload,
        products: Object.values(action.payload.products).reduce((acc, curr) => {
            acc[curr.id] = curr.selectedAmount;
            return acc;
        }, {}),
        departureStation: null, // stations are not longer used, but cant break external API yet
        arrivalStation: null,
    };

    emitRequestSearchEvent(normalizedPayload);
    redirectToSearchResultsPage(normalizedPayload, options, features);
}

export function* requestSearchWatcher() {
    yield takeEvery(REQUEST_SEARCH, handleRequestSearch);
}