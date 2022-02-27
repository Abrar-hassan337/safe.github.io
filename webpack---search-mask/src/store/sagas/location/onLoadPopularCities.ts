import { takeEvery, select, put } from 'redux-saga/effects';
import {
  LOAD_POPULAR_CITIES,
  SET_LOCATION,
  setPopularCities,
  SetLocationAction,
  LoadPopularCitiesAction,
} from 'app/store/actions';
import {
  optionsSelector,
  departureCitySelector,
  featurePopularSearchesSelector,
} from 'app/store/selectors';
import { AutocompleteResult } from 'app/models/types/store/location';
import { fetchPopularCities } from 'app/providers';

function* onLoadPopularCitiesWorker({ direction }: LoadPopularCitiesAction) {
  const isPopularSearchEnabled: boolean = yield select(featurePopularSearchesSelector);

  if (isPopularSearchEnabled) {
    let popularCities: AutocompleteResult[] = [];
    const departure: AutocompleteResult = yield select(departureCitySelector);
    const { locale, citiesDetailsEndpoint } = yield select(optionsSelector);

    try {
      popularCities = yield fetchPopularCities(
        `https://map-search.cms.flix.tech/cities/_search`,
        citiesDetailsEndpoint,
        locale,
        direction === 'to' ? departure.legacyId : undefined,
      );
    } catch (e) {
      popularCities = [];
    }

    yield put(setPopularCities(popularCities, direction));
  }
}

export function* onLoadPopularCities() {
  yield takeEvery<LoadPopularCitiesAction>(LOAD_POPULAR_CITIES, onLoadPopularCitiesWorker);
}

export function* onLoadArrivalPopularCities() {
  yield takeEvery<SetLocationAction>(
    SET_LOCATION,
    ({ direction }) =>
      direction === 'from' &&
      onLoadPopularCitiesWorker({ direction: 'to', type: LOAD_POPULAR_CITIES }),
  );
}
