import { takeEvery, select, put } from 'redux-saga/effects';
import { RETRIEVE_RECENT_CITIES, setRecentCities } from 'app/store/actions';
import {
  optionsSelector,
  distribusionEnabledSelector,
  recentCitiesCookieSelector,
} from 'app/store/selectors';
import { fetchAutocompleteResults } from 'app/providers/fetchAutocompleteResults';
import { AutocompleteResult } from 'app/models/types/store/location';
import { getCookieParsed } from 'app/storage/coookie';

function* onRetrieveRecentCitiesWorker() {
  const cookies: { from: string; to: string } = yield select(recentCitiesCookieSelector);
  const recentFromCities = getCookieParsed<AutocompleteResult[]>(cookies['from']) || [];
  const recentToCities = getCookieParsed<AutocompleteResult[]>(cookies['to']) || [];
  const uniqueCities: Pick<AutocompleteResult, 'id' | 'name'>[] = Object.values(
    [...recentFromCities, ...recentToCities].reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {}),
  );
  const { autocompleteUrl, locale, partner } = yield select(optionsSelector);
  const distribusionEnabled: boolean = yield select(distribusionEnabledSelector);

  const requests: Promise<AutocompleteResult | undefined>[] = [];
  for (let i = 0; i < uniqueCities.length; i++) {
    const city = uniqueCities[i];
    requests.push(
      fetchAutocompleteResults({
        autocompleteUrl,
        query: encodeURIComponent(city.name),
        locale,
        flixbusCitiesOnly: !distribusionEnabled,
        partner,
      })
        .then((cities) => cities.find(({ id }) => id === city.id))
        .catch(() => undefined),
    );
  }
  const results: (AutocompleteResult | undefined)[] = yield Promise.all(requests).then((res) => {
    return res.reduce((acc, curr) => {
      if (!curr) return acc;
      acc[curr.id] = curr;
      return acc;
    }, {});
  });
  const from: AutocompleteResult[] = recentFromCities
    .map(({ id }) => results[id] || null)
    .filter((n) => n != null);
  const to: AutocompleteResult[] = recentToCities
    .map(({ id }) => results[id] || null)
    .filter((n) => n != null);
  yield put(setRecentCities({ from, to }));
}

export function* onRetrieveRecentCities() {
  yield takeEvery(RETRIEVE_RECENT_CITIES, onRetrieveRecentCitiesWorker);
}
