import { groupResultsByContinent, hashAutocompleteResults } from 'app/functions/location';
import { AutocompleteResult, SearchMaskDirection } from 'app/models/types/store/location';
import {
  popularCitiesSelector,
  recentCitiesSelector,
  featurePopularSearchesSelector,
  autocompleteFilteredSelector,
} from 'app/store/selectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslations } from './useTranslations';

export type ResultsType = 'autocomplete' | 'recent' | 'popular';

export const useResults = (
  direction: SearchMaskDirection,
  hasQuery = false,
): {
  results: Map<string, AutocompleteResult[]>;
  type: ResultsType;
} => {
  const { getTranslation } = useTranslations({}, true);
  const popularCities = useSelector(popularCitiesSelector)[direction];
  const recentCities = useSelector(recentCitiesSelector)[direction];
  const autocompleteCities = useSelector(autocompleteFilteredSelector)[direction];
  const popularEnabled = useSelector(featurePopularSearchesSelector);
  const resultsHash = hashAutocompleteResults([
    ...popularCities,
    ...recentCities,
    ...autocompleteCities,
  ]);
  return useMemo(() => {
    let map: Map<string, AutocompleteResult[]> = new Map();
    for (const [key, results] of groupResultsByContinent(autocompleteCities)) {
      map.set(getTranslation(`search_mask.continent.${key}`), results);
    }
    let type: ResultsType = 'autocomplete';
    if (recentCities.length <= 1 && popularEnabled && popularCities.length >= 1 && !hasQuery) {
      map = new Map();
      map.set(getTranslation('search_mask.label.popular_places'), popularCities);
      type = 'popular';
    } else if (recentCities.length >= 1 && !hasQuery) {
      map = new Map();
      map.set(getTranslation('search_mask.label.recent_searches'), recentCities);
      type = 'recent';
    }
    return {
      results: map,
      type,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof getTranslation === 'function', popularEnabled, resultsHash, popularEnabled, hasQuery]);
};
