import { tokenize } from 'app/functions/string';
import { getContinentByCountry } from 'app/functions/location';
import { AutocompleteResult } from 'app/models/types/store/location';
import { AutocompleteResponseCity } from '@webc/meeseeks-ui-sdk';
const mapAutocompleteResponse = (results: AutocompleteResponseCity[]): AutocompleteResult[] => {
  const mappedResponse = results.map((item, index) => ({
    hash: `${item.id}-${String(index + 1)}`,
    score: item.score,
    country: item.country.toUpperCase(),
    location: item.location,
    name: item.name,
    _tokenizedLabel: tokenize(item.name),
    id: item.id,
    legacyId: item.legacy_id,
    isFlixbusCity: item.is_flixbus_city,
    hasTrainStation: item.has_train_station,
    district: item.district,
    timezoneOffset: item.timezone_offset_seconds,
    continent: getContinentByCountry(item.country),
  }));

  return mappedResponse;
};

export { mapAutocompleteResponse };
