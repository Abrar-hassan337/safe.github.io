import { AutocompleteResult } from 'app/models/types/store/location';

export const groupResultsByContinent = (results: AutocompleteResult[]) => {
  const grouped = results.reduce<{ [continent: string]: AutocompleteResult[] }>(
    (objectsByKeyValue, result) => {
      const { continent } = result;

      return {
        ...objectsByKeyValue,
        [continent]: (objectsByKeyValue[continent] || []).concat(result),
      };
    },
    {},
  );

  return Object.keys(grouped).reduce<Map<string, AutocompleteResult[]>>(
    (map, key) => map.set(key, grouped[key]),
    new Map(),
  );
};
