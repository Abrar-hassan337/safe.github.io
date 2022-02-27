import { takeEvery, put } from 'redux-saga/effects';
import { TOGGLE_FEATURE, loadPopularCities, ToggleFeatureAction } from 'app/store/actions';
import { FEATURE_POPULAR_SEARCHES } from 'app/config/features';

function* onToggleFeatureWorker({ name, value }: ToggleFeatureAction) {
  if (name === FEATURE_POPULAR_SEARCHES && value === true) {
    yield put(loadPopularCities('from'));
    yield put(loadPopularCities('to'));
  }
}

export function* onToggleFeature() {
  yield takeEvery<ToggleFeatureAction>(TOGGLE_FEATURE, onToggleFeatureWorker);
}
