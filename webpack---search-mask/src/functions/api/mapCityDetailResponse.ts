import { CitiesDetailsResponseCity } from '@webc/meeseeks-ui-sdk';
import { CityDetailsResult } from 'app/models/types/store/location';

export const mapCityDetailResponse = (
  cityDetails: CitiesDetailsResponseCity,
): CityDetailsResult => ({
  uuid: cityDetails.id,
  legacyId: cityDetails.legacy_id,
  name: cityDetails.name,
  countryCode: cityDetails.country_code.toUpperCase(),
  timezoneOffset: cityDetails.timezone_offset,
});
