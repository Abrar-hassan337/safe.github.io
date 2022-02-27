import {
  CityDetailsResult,
  SearchMaskDirection,
  SearchMaskLocation,
  AutocompleteResult,
  PartialSearchMaskLocation,
} from 'app/models/types/store/location';

export const REPORT_AUTOCOMPLETE_ERROR = 'REPORT_AUTOCOMPLETE_ERROR';
export type ReportAutocompleteErrorAction = {
  type: typeof REPORT_AUTOCOMPLETE_ERROR;
  id: unknown;
  level: unknown;
  direction: SearchMaskDirection;
};
export const reportAutocompleteError = (
  id: unknown,
  level: unknown,
  direction: SearchMaskDirection,
): ReportAutocompleteErrorAction => ({
  type: REPORT_AUTOCOMPLETE_ERROR,
  id,
  level,
  direction,
});

export const CLEAR_AUTOCOMPLETE_ERROR = 'CLEAR_AUTOCOMPLETE_ERROR';
export type ClearAutocompleteErrorAction = {
  type: typeof CLEAR_AUTOCOMPLETE_ERROR;
  direction: SearchMaskDirection;
};
export const clearAutocompleteError = (
  direction: SearchMaskDirection,
): ClearAutocompleteErrorAction => ({
  type: CLEAR_AUTOCOMPLETE_ERROR,
  direction,
});

export const TOGGLE_AUTOCOMPLETE_LOADING = 'TOGGLE_AUTOCOMPLETE_LOADING';
export type ToggleAutocompleteLoadingAction = {
  type: typeof TOGGLE_AUTOCOMPLETE_LOADING;
  direction: SearchMaskDirection;
  loading: boolean;
};
export const toggleAutocompleteLoading = (
  direction: SearchMaskDirection,
  loading: boolean,
): ToggleAutocompleteLoadingAction => ({
  type: TOGGLE_AUTOCOMPLETE_LOADING,
  direction,
  loading,
});

export const SET_LOCATION = 'SET_LOCATION';
export type SetLocationAction = {
  type: typeof SET_LOCATION;
  direction: SearchMaskDirection;
  location: PartialSearchMaskLocation | SearchMaskLocation;
};

export const setLocation = (
  direction: SearchMaskDirection,
  location: PartialSearchMaskLocation | SearchMaskLocation,
) => ({
  type: SET_LOCATION,
  direction,
  location,
});

export const REQUEST_UPDATE_LOCATION = 'SET_REQUEST_LOCATION';
export type SetRequestLocationAction = {
  type: typeof REQUEST_UPDATE_LOCATION;
  direction: SearchMaskDirection;
  location: PartialSearchMaskLocation | SearchMaskLocation;
};
export const requestUpdateLocation = (
  direction: SearchMaskDirection,
  location: PartialSearchMaskLocation,
) => ({
  type: REQUEST_UPDATE_LOCATION,
  direction,
  location,
});

export const SWITCH_LOCATIONS = 'SWITCH_LOCATIONS';
export type SwitchLocationsAction = {
  type: typeof SWITCH_LOCATIONS;
};
export const switchLocations = (): SwitchLocationsAction => ({
  type: SWITCH_LOCATIONS,
});

export const REQUEST_AUTOCOMPLETE = 'REQUEST_AUTOCOMPLETE';
export type RequestAutocompleteAction = {
  type: typeof REQUEST_AUTOCOMPLETE;
  direction: SearchMaskDirection;
  query: string;
  sendDepartureCityId: boolean;
};
export const requestAutocomplete = (
  query: string,
  direction: SearchMaskDirection,
  sendDepartureCityId = false,
): RequestAutocompleteAction => ({
  type: REQUEST_AUTOCOMPLETE,
  query,
  direction,
  sendDepartureCityId,
});

export const CLEAR_AUTOCOMPLETE_RESULTS = 'CLEAR_AUTOCOMPLETE_RESULTS';
export type ClearAutocompleteResultsAction = {
  type: typeof CLEAR_AUTOCOMPLETE_RESULTS;
  direction: SearchMaskDirection;
};
export const clearAutocomplete = (direction: SearchMaskDirection) => ({
  type: CLEAR_AUTOCOMPLETE_RESULTS,
  direction,
});

export const STORE_AUTOCOMPLETE_RESULTS = 'STORE_AUTOCOMPLETE_RESULTS';
export type StoreAutocompleteResultsAction = {
  type: typeof STORE_AUTOCOMPLETE_RESULTS;
  direction: SearchMaskDirection;
  results: AutocompleteResult[];
};
export const storeAutocompleteResults = (
  results: AutocompleteResult[],
  direction: SearchMaskDirection,
) => ({
  type: STORE_AUTOCOMPLETE_RESULTS,
  direction,
  results,
});

export const UPDATE_LOCATIONS = 'UPDATE_LOCATIONS';
export type UpdateLocationsAction = {
  type: typeof UPDATE_LOCATIONS;
  fromCityDetails: CityDetailsResult;
  toCityDetails: CityDetailsResult;
};
export const updateLocations = (
  fromCityDetails: CityDetailsResult,
  toCityDetails: CityDetailsResult,
): UpdateLocationsAction => ({
  type: UPDATE_LOCATIONS,
  fromCityDetails,
  toCityDetails,
});

export const RETRIEVE_RECENT_CITIES = 'RETRIEVE_RECENT_CITIES';
export type RetrieveRecentCitiesAction = {
  type: typeof RETRIEVE_RECENT_CITIES;
};
export const retrieveRecentCities = (): RetrieveRecentCitiesAction => ({
  type: RETRIEVE_RECENT_CITIES,
});

export const SET_RECENT_CITIES = 'SET_RECENT_CITIES';
export type SetRecentCitiesAction = {
  type: typeof SET_RECENT_CITIES;
  recentCities: { [key in SearchMaskDirection]: AutocompleteResult[] };
};
export const setRecentCities = (recentCities: {
  [key in SearchMaskDirection]: AutocompleteResult[];
}): SetRecentCitiesAction => ({
  type: SET_RECENT_CITIES,
  recentCities,
});

export const STORE_RECENT_CITY = 'STORE_RECENT_CITY';
export type StoreRecentCityAction = {
  type: typeof STORE_RECENT_CITY;
  direction: SearchMaskDirection;
  city: AutocompleteResult;
};
export const storeRecentCity = (
  direction: SearchMaskDirection,
  city: AutocompleteResult,
): StoreRecentCityAction => ({
  type: STORE_RECENT_CITY,
  direction,
  city,
});

export const REMOVE_RECENT_CITY = 'REMOVE_RECENT_CITY';
export type RemoveRecentCityAction = {
  type: typeof REMOVE_RECENT_CITY;
  direction: SearchMaskDirection;
  cityId: string;
};
export const removeRecentCity = (
  direction: SearchMaskDirection,
  cityId: string,
): RemoveRecentCityAction => ({
  type: REMOVE_RECENT_CITY,
  direction,
  cityId,
});

export const LOAD_POPULAR_CITIES = 'LOAD_POPULAR_CITIES';
export type LoadPopularCitiesAction = {
  type: typeof LOAD_POPULAR_CITIES;
  direction: SearchMaskDirection;
};
export const loadPopularCities = (direction: SearchMaskDirection): LoadPopularCitiesAction => ({
  type: LOAD_POPULAR_CITIES,
  direction,
});

export const SET_POPULAR_CITIES = 'SET_POPULAR_CITIES';
export type SetPopularCitiesAction = {
  type: typeof SET_POPULAR_CITIES;
  popularCities: AutocompleteResult[];
  direction: SearchMaskDirection;
};
export const setPopularCities = (
  popularCities: AutocompleteResult[],
  direction: SearchMaskDirection,
): SetPopularCitiesAction => ({
  type: SET_POPULAR_CITIES,
  popularCities,
  direction,
});

export const STORE_AUTOCOMPLETE_CACHE = 'STORE_AUTOCOMPLETE_CACHE';
export type StoreAutocompleteCacheAction = {
  type: typeof STORE_AUTOCOMPLETE_CACHE;
  key: string;
  results: AutocompleteResult[];
};
export const storeAutocompleteCache = (
  results: AutocompleteResult[],
  key: string,
): StoreAutocompleteCacheAction => ({
  type: STORE_AUTOCOMPLETE_CACHE,
  results,
  key,
});

export type LocationsActions =
  | ReportAutocompleteErrorAction
  | ClearAutocompleteErrorAction
  | ToggleAutocompleteLoadingAction
  | SetLocationAction
  | SwitchLocationsAction
  | RequestAutocompleteAction
  | ClearAutocompleteResultsAction
  | StoreAutocompleteResultsAction
  | UpdateLocationsAction
  | RetrieveRecentCitiesAction
  | SetRecentCitiesAction
  | StoreRecentCityAction
  | RemoveRecentCityAction
  | LoadPopularCitiesAction
  | SetPopularCitiesAction
  | StoreAutocompleteCacheAction;
