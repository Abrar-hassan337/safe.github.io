import { call, put, select, takeEvery } from 'redux-saga/effects';
import { REQUEST_UPDATE_LOCATION, setLocation, SetRequestLocationAction } from 'app/store/actions';
import { optionsSelector, selectedLocationsSelector } from 'app/store/selectors';
import { fetchCityRelationDetails } from 'app/providers';
import { mapCityDetailResponse } from 'app/functions';
import { SearchMaskLocation } from 'app/models/types/store/location';

/**
 * Optimistic update for location based on partial data coming from Autocomplete or other source
 * This allow UI in search mask to be updated ahead of time and validation of the location to happen later
 */
function* onRequestUpdateLocationWorker({ location, direction }: SetRequestLocationAction) {
  const opts: ReturnType<typeof optionsSelector> = yield select(optionsSelector);
  const selectedLocations: ReturnType<typeof selectedLocationsSelector> = yield select(
    selectedLocationsSelector,
  );

  // previous location in memory
  const previouslySelectedLocation = selectedLocations[direction];
  // we set temporary location  name ahead of time to provide fast feedback
  // optimistic update approach, if we cannot resolve the location later, we revert
  if (location.name) {
    yield put(setLocation(direction, location as SearchMaskLocation));
  }

  // get city deteails for requested location
  const cityDetailsResponse: Awaited<ReturnType<typeof fetchCityRelationDetails>> = yield call<
    typeof fetchCityRelationDetails
  >(
    fetchCityRelationDetails,
    opts.citiesDetailsEndpoint,
    location.legacyId || location.uuid,
    opts.locale,
  );

  // we could not resolve provided city
  // revert location to previous state
  if ('code' in cityDetailsResponse) {
    console.error(`Can't retrieve city for location`, location);
    yield put(setLocation(direction, previouslySelectedLocation));
    return;
  }

  // update location
  const [result] = cityDetailsResponse.map((c) => mapCityDetailResponse(c));
  yield put(setLocation(direction, result));
}

export function* onRequestUpdateLocation() {
  yield takeEvery<SetRequestLocationAction>(REQUEST_UPDATE_LOCATION, onRequestUpdateLocationWorker);
}
