import { addSeconds } from 'date-fns';
import { createSelector } from 'reselect';
import { getUTCDate } from 'app/functions';
import { StoreState } from 'app/models/types';
import { featureOnlyTrainCitiesSelector } from '.';

export const selectedLocationsSelector = (state: StoreState) => state.location.selected;
export const autocompleteSelector = (state: StoreState) => state.location.autocomplete;
export const autocompleteCacheSelector = (state: StoreState) => state.location.autoCompleteCache;
export const popularCitiesSelector = (state: StoreState) => state.location.popularCities;
export const recentCitiesSelector = (state: StoreState) => state.location.recentCities;

export const recentCitiesCookieSelector = (state: StoreState) => state.location.recentCitiesCookie;

export const errorDepartureSelector = (state: StoreState) => state.location.autocomplete.from.error;
export const errorArrivalSelector = (state: StoreState) => state.location.autocomplete.to.error;

export const departureCitySelector = (state: StoreState) => state.location.selected.from;
export const arrivalCitySelector = (state: StoreState) => state.location.selected.to;

export const autocompleteFilteredSelector = createSelector(
  autocompleteSelector,
  featureOnlyTrainCitiesSelector,
  ({ from, to }, onlyTrains) => ({
    from: onlyTrains
      ? from.current.filter(({ hasTrainStation }) => hasTrainStation === true)
      : from.current,
    to: onlyTrains
      ? to.current.filter(({ hasTrainStation }) => hasTrainStation === true)
      : to.current,
  }),
);

export const currentDateAtDepartureCitySelector = createSelector(
  departureCitySelector,
  (departureCity) => {
    const offset = departureCity.timezoneOffset || 0;

    return addSeconds(getUTCDate(), offset);
  },
);

export const departureCountryCodeSelector = (state: StoreState) =>
  state.location.selected.from.countryCode;

export const arrivalCountryCodeSelector = (state: StoreState) =>
  state.location.selected.to.countryCode;

export const selectedDepartureNameSelector = (state: StoreState) =>
  state.location.selected.from.name;

export const selectedArrivalNameSelector = (state: StoreState) => state.location.selected.to.name;

export const selectedRouteNameSelector = createSelector(
  selectedDepartureNameSelector,
  selectedArrivalNameSelector,
  (departureName, arrivalName) => `${departureName}-${arrivalName}`,
);
