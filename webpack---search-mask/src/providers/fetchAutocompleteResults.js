import fetch from 'isomorphic-fetch';
import {
    getCountryCodeFromLocale,
    getLanguageCode,
    isNumeric
} from 'app/functions/string';
import {
    mapAutocompleteResponse
} from 'app/functions/api';

export const fetchAutocompleteResults = ({
    autocompleteUrl,
    query,
    locale,
    flixbusCitiesOnly,
    departureCity = null,
    partner = '',
}) => {
    const params = [
        `q=${query}`,
        `lang=${getLanguageCode(locale)}`,
        `country=${getCountryCodeFromLocale(locale)}`,
        `flixbus_cities_only=${flixbusCitiesOnly}`,
    ];

    if (partner) {
        params.push(`partner=${partner}`);
    }

    // only send if its a UUID
    if (departureCity && !isNumeric(departureCity)) {
        params.push(`departure_city=${departureCity}`);
    }

    return fetch(`${autocompleteUrl}?${params.join('&')}`)
        .then((response) => response.json())
        .then((jsonResponse) => mapAutocompleteResponse(jsonResponse));
};