import fetch from 'isomorphic-fetch';
import { CityId, CitiesDetailsResponseCity } from '@webc/meeseeks-ui-sdk';

export const fetchCityRelationDetails = (
  url: string,
  cityId: CityId | null = null,
  locale: string,
): Promise<{ code: number; message: string } | [CitiesDetailsResponseCity]> => {
  const queryString = new URLSearchParams();

  queryString.set('locale', locale);
  if (cityId) {
    queryString.set('from_city_id', cityId.toString());
  }

  return fetch(`${url}?${queryString.toString()}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => ({ code: 500, message: 'Unknown error' }));
};
