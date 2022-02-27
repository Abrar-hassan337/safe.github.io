import {
  REQUEST_AUTOCOMPLETE,
  storeAutocompleteResults,
  reportAutocompleteError,
  toggleAutocompleteLoading,
  clearAutocompleteError,
  RequestAutocompleteAction,
  storeAutocompleteCache,
} from 'app/store/actions';
import {
  autocompleteCacheSelector,
  departureCitySelector,
  optionsSelector,
} from 'app/store/selectors';
import { requestAutocomplete } from 'app/store/sagas/effects/requestAutocomplete';
import { takeEvery, select, put } from 'redux-saga/effects';
import { isSpaceOnlyOrEmptyString } from 'app/functions';
import { AutocompleteResult } from 'app/models/types/store/location';

function* onRequestAutocompleteWorker(action: RequestAutocompleteAction) {
  if (isSpaceOnlyOrEmptyString(action.query)) {
    return;
  }
  const { locale }: ReturnType<typeof optionsSelector> = yield select(optionsSelector);

  const departureCity: ReturnType<typeof departureCitySelector> | null = action.sendDepartureCityId
    ? yield select(departureCitySelector)
    : null;

  const resultsKey = `${encodeURIComponent(action.query)}-${action.direction}${
    departureCity ? `-${departureCity.uuid}` : ''
  }-${locale}`;

  const autoCompleteCache: ReturnType<typeof autocompleteCacheSelector> = yield select(
    autocompleteCacheSelector,
  );

  if (autoCompleteCache[resultsKey]) {
    yield put(storeAutocompleteResults(autoCompleteCache[resultsKey], action.direction));
    return;
  }

  yield put(clearAutocompleteError(action.direction));
  yield put(toggleAutocompleteLoading(action.direction, true));

  try {
    const results: AutocompleteResult[] = yield requestAutocomplete({
      query: action.query,
      departureCity: (departureCity && departureCity.uuid) || null,
      direction: action.direction,
    });

    yield put(storeAutocompleteResults(results, action.direction));
    yield put(storeAutocompleteCache(results, resultsKey));
  } catch (err) {
    yield put(
      reportAutocompleteError('error.autocomplete', 'Failed to fetch results.', action.direction),
    );
  }

  yield put(toggleAutocompleteLoading(action.direction, false));
}

export function* onRequestAutocomplete() {
  yield takeEvery<RequestAutocompleteAction>(REQUEST_AUTOCOMPLETE, onRequestAutocompleteWorker);
}
