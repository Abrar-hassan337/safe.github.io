import fetch from 'isomorphic-fetch';
import { getCountryCodeFromLocale, getLanguageCode, tokenize } from 'app/functions/string';
import { fetchCityRelationDetails } from './fetchCityRelationDetails';
import { AutocompleteResult } from 'app/models/types/store/location';
import { CitiesDetailsResponseCity } from '@webc/meeseeks-ui-sdk';

const buildRequest = (locale: string, cityId?: number) => {
  const languageCode = getLanguageCode(locale);
  const language = {
    term: {
      '_language.keyword': {
        value: languageCode === 'en' ? 'en-gl' : languageCode,
      },
    },
  };

  const country = () => {
    return {
      term: {
        country: {
          value: getCountryCodeFromLocale(locale).toUpperCase(),
        },
      },
    };
  };

  const fromPlace = () => {
    return {
      term: {
        'reachable.id': cityId,
      },
    };
  };

  return {
    from: 0,
    size: 5,
    _source: ['name', 'id', 'location', 'search_volume', 'country'],
    sort: [
      {
        search_volume: {
          order: 'desc',
        },
      },
    ],
    query: {
      bool: {
        must: [
          {
            term: {
              'field_site.keyword': {
                value: 'flixbus',
              },
            },
          },
          language,
          ...[!cityId && locale !== 'en' && country()].filter(Boolean),
        ],
        filter: [...[cityId && fromPlace()].filter(Boolean)],
      },
    },
  };
};

const getCity = (x: CitiesDetailsResponseCity, index: number): AutocompleteResult => ({
  ...x[0],
  legacyId: x[0].legacy_id,
  country: x[0].country_code,
  hash: index.toString(),
  score: 0,
  continent: '',
  _tokenizedLabel: tokenize(x[0].name),
});

export const fetchPopularCities = (
  cmsMapUrl: string,
  citiesDetailsEndpoint: string,
  locale: string,
  cityId?: number,
): Promise<AutocompleteResult[]> => {
  const request = buildRequest(locale, cityId);

  return fetch(cmsMapUrl, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(async (jsonResponse) => {
      const requests = jsonResponse.hits.hits.map((x: { _source: { id: string } }) =>
        fetchCityRelationDetails(citiesDetailsEndpoint, x._source.id, locale),
      );
      const cities: CitiesDetailsResponseCity[] = await Promise.all(requests);
      return cities.map(getCity);
    });
};
