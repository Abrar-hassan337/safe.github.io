import { takeEvery, select, put } from 'redux-saga/effects';
import { retrieveRecentCities, StoreRecentCityAction, STORE_RECENT_CITY } from 'app/store/actions';
import { getFlixTldFromHostname } from 'app/functions';
import { recentCitiesCookieSelector, recentCitiesSelector } from 'app/store/selectors';
import { setCookie } from 'app/storage/coookie';

function* onStoreRecentCityWorker({ direction, city }: StoreRecentCityAction) {
  const domain = getFlixTldFromHostname(document.location.hostname) || document.location.hostname;
  const cookies: { from: string; to: string } = yield select(recentCitiesCookieSelector);
  const recentCities: ReturnType<typeof recentCitiesSelector> = yield select(recentCitiesSelector);
  const newCities = [
    { id: city.id, name: city.name },
    ...recentCities[direction]
      .filter(({ id }) => id !== city.id)
      .map(({ id, name }) => ({ id, name })),
  ];
  setCookie(cookies[direction], JSON.stringify(newCities), { domain, expires: 365 });
  yield put(retrieveRecentCities());
}

export function* onStoreRecentCity() {
  yield takeEvery<StoreRecentCityAction>(STORE_RECENT_CITY, onStoreRecentCityWorker);
}
