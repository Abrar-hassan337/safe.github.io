import {
    fetchAutocompleteResults
} from 'app/providers';
import {
    optionsSelector,
    distribusionEnabledSelector
} from 'app/store/selectors';
import {
    retry,
    select,
    race,
    call,
    delay,
    put
} from 'redux-saga/effects';
import {
    reportAutocompleteError
} from 'app/store/actions/location';

function* fetchRequestTimeout(requestArgs, direction) {
    try {
        // start a race between the searchResultsRequest and a timeout and see what wins
        const winner = yield race({
            autocompleteRequest: call(fetchAutocompleteResults, requestArgs),
            timeout: delay(5000),
        });

        // request successful
        if (winner.autocompleteRequest) {
            return winner.autocompleteRequest;
        }

        // request timed out
        yield put(reportAutocompleteError('error.autocomplete', 'Request timed out.', direction));
        throw new Error('timeout');
    } catch (error) {
        yield put(reportAutocompleteError('error.autocomplete', 'Failed to fetch results.', direction));
        throw new Error(error);
    }
}

export function* requestAutocomplete({
    query,
    departureCity,
    direction
}) {
    const {
        autocompleteUrl,
        locale,
        partner
    } = yield select(optionsSelector);
    const distribusionEnabled = yield select(distribusionEnabledSelector);
    const delayBetweenRetries = 1000;
    const requestArgs = {
        autocompleteUrl,
        query: encodeURIComponent(query),
        locale,
        flixbusCitiesOnly: !distribusionEnabled,
        departureCity,
        partner,
    };
    return yield retry(3, delayBetweenRetries, fetchRequestTimeout, requestArgs, direction);
}