import { takeEvery, select } from 'redux-saga/effects';
import { RemoveRecentCityAction, REMOVE_RECENT_CITY } from 'app/store/actions';
import { getFlixTldFromHostname } from 'app/functions';
import { recentCitiesCookieSelector, recentCitiesSelector } from 'app/store/selectors';
import cookie from 'js-cookie';

function* onRemoveRecentCityWorker({ direction }: RemoveRecentCityAction) {
  const domain = getFlixTldFromHostname(document.location.hostname) || document.location.hostname;
  const cookies: { from: string; to: string } = yield select(recentCitiesCookieSelector);
  const recentCities: ReturnType<typeof recentCitiesSelector> = yield select(recentCitiesSelector);
  cookie.set(cookies[direction], JSON.stringify(recentCities[direction]), { domain });
}

export function* onRemoveRecentCity() {
  yield takeEvery<RemoveRecentCityAction>(REMOVE_RECENT_CITY, onRemoveRecentCityWorker);
}
