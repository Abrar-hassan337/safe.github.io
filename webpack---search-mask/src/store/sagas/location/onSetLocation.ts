import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  clearAutocomplete,
  requestAutocomplete,
  SetLocationAction,
  SET_LOCATION,
} from 'app/store/actions';
import {
  arrivalCitySelector,
  cmsApiOnArrivalChangeSelector,
  cmsApiOnDepartureChangeSelector,
} from 'app/store/selectors';
import { isSearchMaskLocation } from 'app/functions';

function* onSetLocationWorker(action: SetLocationAction) {
  // if it's not a complete location bail out as no operatio nare done on partial locations
  // we only want to run effects when location is updated with a complete valid schema
  if (!isSearchMaskLocation(action.location)) {
    return;
  }

  // construct and send payload to cmsApi
  const payload = {
    cityName: action.location.name,
    legacyId: action.location.legacyId,
    uuid: action.location.uuid,
  };
  const onDepartureChanged: ReturnType<typeof cmsApiOnDepartureChangeSelector> = yield select(
    cmsApiOnDepartureChangeSelector,
  );
  const onArrivalChanged: ReturnType<typeof cmsApiOnArrivalChangeSelector> = yield select(
    cmsApiOnArrivalChangeSelector,
  );
  const method = action.direction === 'from' ? onDepartureChanged : onArrivalChanged;
  yield call(method, payload);

  // if we are updating "from" city ensure to flush autocomplete resutls for "to" city
  const arrivalCity: ReturnType<typeof arrivalCitySelector> = yield select(arrivalCitySelector);
  if (action.direction === 'from' && arrivalCity.name) {
    yield put(requestAutocomplete(arrivalCity.name, 'to', true));
  }

  // clear autocomplete results for this direction
  yield put(clearAutocomplete(action.direction));
}

export function* onSetLocation() {
  yield takeEvery<SetLocationAction>(SET_LOCATION, onSetLocationWorker);
}
