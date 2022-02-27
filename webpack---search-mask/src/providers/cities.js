import fetch from 'isomorphic-fetch';

export const fetchCities = (url, locale) => fetch(`${url}?locale=${locale}`);